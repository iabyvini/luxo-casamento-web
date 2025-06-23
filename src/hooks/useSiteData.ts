
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface SiteData {
  id: string;
  couple_names: string;
  wedding_date: string;
  template_name: string;
  ai_welcome_message: string;
  custom_content: any;
  quiz_answers: any;
  is_published: boolean;
  slug: string;
  views_count?: number;
}

export const useSiteData = (slug: string | undefined) => {
  const { toast } = useToast();
  const [siteData, setSiteData] = useState<SiteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    console.log('🔍 useSiteData useEffect triggered with slug:', slug);
    
    if (!slug) {
      console.log('❌ Slug não fornecido');
      setNotFound(true);
      setLoading(false);
      return;
    }

    fetchSiteData();
  }, [slug]);

  const fetchSiteData = async () => {
    if (!slug) return;
    
    try {
      console.log('📡 Iniciando fetchSiteData para slug:', slug);
      setLoading(true);
      setNotFound(false);
      setSiteData(null);
      
      const { data, error } = await supabase
        .from('wedding_sites')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      console.log('📊 Resultado da query:', { 
        data: data ? { id: data.id, couple_names: data.couple_names, is_published: data.is_published } : null, 
        error,
        slug 
      });

      if (error) {
        console.error('❌ Erro na query Supabase:', error);
        throw error;
      }

      if (!data) {
        console.log('🚫 Site não encontrado para slug:', slug);
        setNotFound(true);
        return;
      }

      // Verificar se o site está publicado
      if (!data.is_published) {
        console.log('📝 Site não publicado:', data.id, data.couple_names);
        setNotFound(true);
        return;
      }

      console.log('✅ Site encontrado e publicado:', {
        id: data.id,
        couple_names: data.couple_names,
        template_name: data.template_name,
        is_published: data.is_published
      });

      setSiteData(data);
      
      // Incrementar contador de visualizações
      try {
        console.log('👀 Incrementando view count...');
        const { error: viewError } = await supabase.rpc('increment_view_count', {
          site_slug: slug
        });
        
        if (viewError) {
          console.error('⚠️ Erro ao incrementar view count:', viewError);
        } else {
          console.log('✅ View count incrementado com sucesso');
        }
      } catch (viewError) {
        console.error('⚠️ Erro ao incrementar view count:', viewError);
      }

    } catch (error: any) {
      console.error('💥 Erro geral ao carregar site:', error);
      console.error('💥 Stack trace:', error.stack);
      
      toast({
        title: "Erro ao carregar site",
        description: `Não foi possível carregar o site: ${error.message}`,
        variant: "destructive",
      });
      
      setNotFound(true);
    } finally {
      console.log('🏁 fetchSiteData finalizado, setLoading(false)');
      setLoading(false);
    }
  };

  console.log('🎯 useSiteData returning:', { 
    siteData: siteData ? { id: siteData.id, couple_names: siteData.couple_names } : null, 
    loading, 
    notFound 
  });

  return { siteData, loading, notFound };
};
