
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { getCorrectSlugMapping } from "@/utils/slugFixing";

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

      // 1. Primeiro, tentar buscar diretamente
      console.log('🔎 Tentativa 1: Busca direta pelo slug:', slug);
      let { data, error } = await supabase
        .from('wedding_sites')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();

      console.log('📊 Resultado da busca direta:', { 
        found: !!data, 
        error: error?.message,
        slug_usado: slug
      });

      // 2. Se não encontrou, verificar mapeamento de slugs conhecidos
      if (!data && !error) {
        console.log('🔄 Tentativa 2: Verificando mapeamento de slugs...');
        const slugMapping = getCorrectSlugMapping();
        console.log('📋 Mapeamento disponível:', slugMapping);
        
        // Verificar se o slug atual está no mapeamento (como chave ou valor)
        let targetSlug = null;
        
        // Se o slug está como chave no mapeamento, usar o valor correto
        if (slugMapping[slug]) {
          targetSlug = slugMapping[slug];
          console.log('🎯 Slug encontrado como chave, usando valor:', targetSlug);
        }
        // Se o slug está como valor no mapeamento, usar ele mesmo
        else if (Object.values(slugMapping).includes(slug)) {
          targetSlug = slug;
          console.log('🎯 Slug encontrado como valor correto:', targetSlug);
        }
        // Se não está no mapeamento, verificar se alguma chave mapeia para este slug
        else {
          const mappingKey = Object.keys(slugMapping).find(key => slugMapping[key] === slug);
          if (mappingKey) {
            targetSlug = slug;
            console.log('🎯 Slug é destino de mapeamento:', targetSlug);
          }
        }
        
        if (targetSlug && targetSlug !== slug) {
          console.log('🔄 Buscando com slug mapeado:', targetSlug);
          
          const { data: mappedData, error: mappedError } = await supabase
            .from('wedding_sites')
            .select('*')
            .eq('slug', targetSlug)
            .eq('is_published', true)
            .maybeSingle();

          data = mappedData;
          error = mappedError;
          
          console.log('📊 Resultado da busca mapeada:', { 
            found: !!data, 
            error: error?.message,
            slug_mapeado: targetSlug
          });
        }
      }

      // 3. Se ainda não encontrou, buscar todos os sites publicados para debug
      if (!data && !error) {
        console.log('🔍 Tentativa 3: Listando todos os sites publicados para debug...');
        
        const { data: allSites, error: debugError } = await supabase
          .from('wedding_sites')
          .select('id, couple_names, slug, is_published')
          .eq('is_published', true)
          .limit(10);

        console.log('📋 Sites publicados encontrados:', allSites?.map(site => ({
          slug: site.slug,
          couple_names: site.couple_names
        })));

        // Buscar por slug similar (ignorando case e acentos)
        if (allSites) {
          const normalizedSlug = slug.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          
          const similarSite = allSites.find(site => {
            const normalizedSiteSlug = site.slug.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            return normalizedSiteSlug === normalizedSlug;
          });

          if (similarSite) {
            console.log('✅ Site encontrado por similaridade:', similarSite.slug);
            
            const { data: similarData, error: similarError } = await supabase
              .from('wedding_sites')
              .select('*')
              .eq('slug', similarSite.slug)
              .eq('is_published', true)
              .maybeSingle();

            data = similarData;
            error = similarError;
          }
        }
      }

      if (error) {
        console.error('❌ Erro na query:', error);
        throw error;
      }

      if (!data) {
        console.log('🚫 Site não encontrado para slug:', slug);
        console.log('💡 Verifique se o slug está correto no banco de dados');
        setNotFound(true);
        return;
      }

      console.log('✅ Site encontrado:', {
        id: data.id,
        couple_names: data.couple_names,
        slug: data.slug,
        is_published: data.is_published
      });

      setSiteData(data);
      
      // Incrementar contador de visualizações
      try {
        const { error: viewError } = await supabase.rpc('increment_view_count', {
          site_slug: data.slug
        });
        
        if (viewError) {
          console.error('⚠️ Erro ao incrementar view count:', viewError);
        } else {
          console.log('📈 View count incrementado para:', data.slug);
        }
      } catch (viewError) {
        console.error('⚠️ Erro ao incrementar view count:', viewError);
      }

    } catch (error: any) {
      console.error('💥 Erro geral ao carregar site:', error);
      
      toast({
        title: "Erro ao carregar site",
        description: "Não foi possível carregar o site. Tente novamente.",
        variant: "destructive",
      });
      
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  return { siteData, loading, notFound };
};
