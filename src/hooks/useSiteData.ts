
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { getCorrectSlugMapping, findSimilarSlug } from "@/utils/slugFixing";

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
    if (!slug) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    fetchSiteData();
  }, [slug]);

  const fetchSiteData = async () => {
    if (!slug) return;
    
    // Aplicar mapeamento manual ANTES da busca no banco
    const slugMapping = getCorrectSlugMapping();
    if (slugMapping[slug]) {
      slug = slugMapping[slug];
    }
    
    try {
      setLoading(true);
      setNotFound(false);
      setSiteData(null);

      // 1. Primeiro, tentar busca direta
      let { data, error } = await supabase
        .from('wedding_sites')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();

      // Se encontrou na busca direta, usar esses dados
      if (data && !error) {
        setSiteData(data);
        
        // Incrementar view count
        try {
          await supabase.rpc('increment_view_count', {
            site_slug: data.slug
          });
        } catch (viewError) {
          console.error('Erro ao incrementar view count:', viewError);
        }
        
        setLoading(false);
        return;
      }

      // 2. Se não encontrou, verificar mapeamento conhecido
      if (!data && !error) {
        const slugMapping = getCorrectSlugMapping();
        
        let targetSlug = null;
        
        // Se o slug está mapeado no dicionário de correções
        if (slugMapping[slug]) {
          targetSlug = slugMapping[slug];
        } else {
          // Buscar por equivalência normalizada no mapeamento
          const normalizedSlug = slug.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          
          const possibleMatch = Object.entries(slugMapping).find(([wrong, correct]) => {
            const normCorrect = correct.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            return normCorrect === normalizedSlug;
          });

          if (possibleMatch) {
            targetSlug = possibleMatch[1];
          }
        }
        
        if (targetSlug && targetSlug !== slug) {
          const { data: mappedData, error: mappedError } = await supabase
            .from('wedding_sites')
            .select('*')
            .eq('slug', targetSlug)
            .eq('is_published', true)
            .maybeSingle();

          if (mappedData && !mappedError) {
            setSiteData(mappedData);
            setLoading(false);
            return;
          }
        }
      }

      // 3. Buscar por similaridade usando a função melhorada
      if (!data && !error) {
        const { data: allSites, error: debugError } = await supabase
          .from('wedding_sites')
          .select('id, couple_names, slug, is_published')
          .eq('is_published', true)
          .limit(50);

        if (!debugError && allSites) {
          const availableSlugs = allSites.map(site => site.slug);
          const similarSlug = findSimilarSlug(slug, availableSlugs);
          
          if (similarSlug) {
            const { data: similarData, error: similarError } = await supabase
              .from('wedding_sites')
              .select('*')
              .eq('slug', similarSlug)
              .eq('is_published', true)
              .maybeSingle();

            if (similarData && !similarError) {
              setSiteData(similarData);
              setLoading(false);
              return;
            }
          }
        }
      }

      // Se chegou até aqui, realmente não encontrou
      setNotFound(true);

    } catch (error: any) {
      console.error('Erro ao carregar site:', error);
      
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
