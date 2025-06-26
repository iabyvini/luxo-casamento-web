
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
      console.error('🚫 Slug não fornecido');
      setNotFound(true);
      setLoading(false);
      return;
    }

    fetchSiteData();
  }, [slug]);

  const validateSiteData = (data: any): boolean => {
    if (!data) {
      console.error('🚫 Dados do site ausentes');
      return false;
    }

    // Verificações essenciais
    if (!data.couple_names) {
      console.error('🚫 couple_names ausente');
      return false;
    }

    if (!data.wedding_date) {
      console.error('🚫 wedding_date ausente');
      return false;
    }

    if (!data.template_name) {
      console.warn('❗ template_name ausente, será aplicado fallback');
      // Não retorna false, pois o fallback será aplicado
    }

    if (!data.is_published) {
      console.warn('❗ Site não está publicado');
      return false;
    }

    return true;
  };

  const fetchSiteData = async () => {
    if (!slug) return;
    
    // Aplicar mapeamento manual ANTES da busca no banco
    let correctedSlug = slug;
    const slugMapping = getCorrectSlugMapping();
    if (slugMapping[slug]) {
      correctedSlug = slugMapping[slug];
      console.log(`🔄 Slug corrigido: ${slug} -> ${correctedSlug}`);
    }
    
    try {
      setLoading(true);
      setNotFound(false);
      setSiteData(null);

      console.log('🔍 Buscando site com slug:', correctedSlug);

      // 1. Primeiro, tentar busca direta
      let { data, error } = await supabase
        .from('wedding_sites')
        .select('*')
        .eq('slug', correctedSlug)
        .eq('is_published', true)
        .maybeSingle();

      if (error) {
        console.error('❌ Erro na busca direta:', error);
      }

      // Se encontrou na busca direta, validar dados
      if (data && !error) {
        console.log('✅ Site encontrado na busca direta:', data.id);
        
        if (!validateSiteData(data)) {
          console.error('🚫 Dados inválidos: falta de conteúdo essencial');
          setNotFound(true);
          setLoading(false);
          return;
        }

        setSiteData(data);
        
        // Incrementar view count
        try {
          await supabase.rpc('increment_view_count', {
            site_slug: data.slug
          });
          console.log('📊 View count incrementado');
        } catch (viewError) {
          console.error('❌ Erro ao incrementar view count:', viewError);
        }
        
        setLoading(false);
        return;
      }

      // 2. Se não encontrou, verificar mapeamento conhecido
      if (!data && !error) {
        console.log('🔍 Tentando busca com mapeamento conhecido');
        
        let targetSlug = null;
        
        // Se o slug está mapeado no dicionário de correções
        if (slugMapping[correctedSlug]) {
          targetSlug = slugMapping[correctedSlug];
        } else {
          // Buscar por equivalência normalizada no mapeamento
          const normalizedSlug = correctedSlug.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          
          const possibleMatch = Object.entries(slugMapping).find(([wrong, correct]) => {
            const normCorrect = correct.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            return normCorrect === normalizedSlug;
          });

          if (possibleMatch) {
            targetSlug = possibleMatch[1];
          }
        }
        
        if (targetSlug && targetSlug !== correctedSlug) {
          console.log('🔄 Tentando slug mapeado:', targetSlug);
          
          const { data: mappedData, error: mappedError } = await supabase
            .from('wedding_sites')
            .select('*')
            .eq('slug', targetSlug)
            .eq('is_published', true)
            .maybeSingle();

          if (mappedData && !mappedError) {
            console.log('✅ Site encontrado com slug mapeado:', mappedData.id);
            
            if (validateSiteData(mappedData)) {
              setSiteData(mappedData);
              setLoading(false);
              return;
            }
          }
        }
      }

      // 3. Buscar por similaridade usando a função melhorada
      if (!data && !error) {
        console.log('🔍 Tentando busca por similaridade');
        
        const { data: allSites, error: debugError } = await supabase
          .from('wedding_sites')
          .select('id, couple_names, slug, is_published')
          .eq('is_published', true)
          .limit(50);

        if (!debugError && allSites) {
          const availableSlugs = allSites.map(site => site.slug);
          const similarSlug = findSimilarSlug(correctedSlug, availableSlugs);
          
          if (similarSlug) {
            console.log('🔄 Slug similar encontrado:', similarSlug);
            
            const { data: similarData, error: similarError } = await supabase
              .from('wedding_sites')
              .select('*')
              .eq('slug', similarSlug)
              .eq('is_published', true)
              .maybeSingle();

            if (similarData && !similarError) {
              console.log('✅ Site encontrado com slug similar:', similarData.id);
              
              if (validateSiteData(similarData)) {
                setSiteData(similarData);
                setLoading(false);
                return;
              }
            }
          }
        }
      }

      // Se chegou até aqui, realmente não encontrou
      console.error('🚫 Site não encontrado após todas as tentativas');
      setNotFound(true);

    } catch (error: any) {
      console.error('❌ Erro crítico ao carregar site:', error);
      
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
