
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
    if (slug) {
      console.log('🔍 Buscando site com slug:', slug);
      fetchSiteData();
    } else {
      console.log('❌ Slug não fornecido');
      setNotFound(true);
      setLoading(false);
    }
  }, [slug]);

  const fetchSiteData = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      
      console.log('📡 Fazendo query para slug:', slug);
      
      const { data, error } = await supabase
        .from('wedding_sites')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      console.log('📊 Resultado da query:', { data, error });

      if (error) {
        console.error('❌ Erro na query:', error);
        throw error;
      }

      if (!data) {
        console.log('🚫 Site não encontrado para slug:', slug);
        setNotFound(true);
        return;
      }

      if (!data.is_published) {
        console.log('📝 Site não publicado:', data.id);
        setNotFound(true);
        return;
      }

      console.log('✅ Site encontrado e publicado:', data.id, data.couple_names);
      setSiteData(data);
      
      // Increment view count
      try {
        await supabase.rpc('increment_view_count', {
          site_slug: slug
        });
        console.log('👀 View count incrementado');
      } catch (viewError) {
        console.error('⚠️ Erro ao incrementar view count:', viewError);
      }

    } catch (error: any) {
      console.error('💥 Erro geral ao carregar site:', error);
      toast({
        title: "Erro ao carregar site",
        description: "Não foi possível carregar o site do casamento.",
        variant: "destructive",
      });
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  return { siteData, loading, notFound };
};
