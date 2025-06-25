
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

      // 1. Primeiro, tentar busca direta
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

      // 2. Se não encontrou, verificar mapeamento conhecido
      if (!data && !error) {
        console.log('🔄 Tentativa 2: Verificando mapeamento de slugs...');
        const slugMapping = getCorrectSlugMapping();
        console.log('📋 Mapeamento disponível:', slugMapping);
        
        let targetSlug = null;
        
        // Se o slug está mapeado no dicionário de correções
        if (slugMapping[slug]) {
          targetSlug = slugMapping[slug];
          console.log('🎯 Slug encontrado no mapeamento direto:', targetSlug);
        } else {
          // Buscar por equivalência normalizada no mapeamento
          const normalizedSlug = slug.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          console.log('🔍 Buscando slug normalizado:', normalizedSlug);
          
          const possibleMatch = Object.entries(slugMapping).find(([wrong, correct]) => {
            const normCorrect = correct.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            return normCorrect === normalizedSlug;
          });

          if (possibleMatch) {
            targetSlug = possibleMatch[1];
            console.log('🎯 Slug equivalente encontrado no mapeamento normalizado:', targetSlug);
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

      // 3. Se ainda não encontrou, buscar por similaridade em todos os sites
      if (!data && !error) {
        console.log('🔍 Tentativa 3: Busca por similaridade em todos os sites...');
        
        const { data: allSites, error: debugError } = await supabase
          .from('wedding_sites')
          .select('id, couple_names, slug, is_published')
          .eq('is_published', true)
          .limit(20);

        if (debugError) {
          console.error('❌ Erro ao buscar todos os sites:', debugError);
        } else {
          console.log('📋 Sites publicados encontrados:', allSites?.map(site => ({
            slug: site.slug,
            couple_names: site.couple_names
          })));

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
              
              console.log('📊 Resultado da busca por similaridade:', { 
                found: !!data, 
                error: error?.message,
                slug_similar: similarSite.slug
              });
            } else {
              console.log('🔍 Nenhum site similar encontrado para:', normalizedSlug);
            }
          }
        }
      }

      if (error) {
        console.error('❌ Erro na query:', error);
        throw error;
      }

      if (!data) {
        console.log('🚫 Site não encontrado para slug:', slug);
        console.log('💡 Verifique se o slug está correto e o site está publicado');
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
