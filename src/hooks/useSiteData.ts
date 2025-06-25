
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
    console.log('🔍 useSiteData useEffect triggered with slug:', slug);
    
    if (!slug) {
      console.log('❌ Slug não fornecido - definindo notFound=true');
      setNotFound(true);
      setLoading(false);
      return;
    }

    fetchSiteData();
  }, [slug]);

  const fetchSiteData = async () => {
    if (!slug) return;
    
    try {
      console.log('📡 INICIANDO fetchSiteData para slug:', slug);
      setLoading(true);
      setNotFound(false);
      setSiteData(null);

      // 1. Primeiro, tentar busca direta
      console.log('🔎 TENTATIVA 1: Busca direta pelo slug:', slug);
      let { data, error } = await supabase
        .from('wedding_sites')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();

      console.log('📊 RESULTADO busca direta:', { 
        encontrou: !!data, 
        erro: error?.message,
        slug_usado: slug,
        data_preview: data ? {
          id: data.id,
          slug: data.slug,
          couple_names: data.couple_names,
          is_published: data.is_published
        } : null
      });

      // Se encontrou na busca direta, usar esses dados
      if (data && !error) {
        console.log('✅ SUCESSO: Site encontrado na busca direta!');
        setSiteData(data);
        
        // Incrementar view count
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
        
        setLoading(false);
        return;
      }

      // 2. Se não encontrou, verificar mapeamento conhecido
      if (!data && !error) {
        console.log('🔄 TENTATIVA 2: Verificando mapeamento de slugs...');
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

          if (mappedData && !mappedError) {
            console.log('✅ SUCESSO: Site encontrado via mapeamento!');
            setSiteData(mappedData);
            setLoading(false);
            return;
          }

          console.log('📊 Resultado da busca mapeada:', { 
            encontrou: !!mappedData, 
            erro: mappedError?.message,
            slug_mapeado: targetSlug
          });
        }
      }

      // 3. Buscar por similaridade usando a nova função melhorada
      if (!data && !error) {
        console.log('🔍 TENTATIVA 3: Busca por similaridade avançada...');
        
        const { data: allSites, error: debugError } = await supabase
          .from('wedding_sites')
          .select('id, couple_names, slug, is_published')
          .eq('is_published', true)
          .limit(50);

        if (debugError) {
          console.error('❌ Erro ao buscar todos os sites:', debugError);
        } else {
          console.log('📋 Sites publicados encontrados:', allSites?.map(site => ({
            slug: site.slug,
            couple_names: site.couple_names,
            id: site.id
          })));

          if (allSites) {
            const availableSlugs = allSites.map(site => site.slug);
            const similarSlug = findSimilarSlug(slug, availableSlugs);
            
            if (similarSlug) {
              console.log('✅ Site encontrado por similaridade avançada:', similarSlug);
              
              const { data: similarData, error: similarError } = await supabase
                .from('wedding_sites')
                .select('*')
                .eq('slug', similarSlug)
                .eq('is_published', true)
                .maybeSingle();

              if (similarData && !similarError) {
                console.log('✅ SUCESSO: Site encontrado via similaridade avançada!');
                setSiteData(similarData);
                setLoading(false);
                return;
              }

              console.log('📊 Resultado da busca por similaridade:', { 
                encontrou: !!similarData, 
                erro: similarError?.message,
                slug_similar: similarSlug
              });
            } else {
              console.log('🔍 Nenhum site similar encontrado para:', slug);
              console.log('🔍 Slugs disponíveis para comparação:', availableSlugs);
            }
          }
        }
      }

      // 4. Se chegou até aqui, realmente não encontrou
      console.log('🚫 FINAL: Site não encontrado após todas as tentativas para slug:', slug);
      console.log('💡 Verifique se o slug está correto e o site está publicado');
      console.log('🔧 Slug normalizado testado:', slug.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim());
      setNotFound(true);

    } catch (error: any) {
      console.error('💥 ERRO GERAL ao carregar site:', error);
      
      toast({
        title: "Erro ao carregar site",
        description: "Não foi possível carregar o site. Tente novamente.",
        variant: "destructive",
      });
      
      setNotFound(true);
    } finally {
      console.log('🏁 useSiteData finalizando - definindo loading=false');
      setLoading(false);
    }
  };

  // Log final dos estados antes de retornar
  console.log('📤 useSiteData retornando estados:', {
    hasData: !!siteData,
    loading,
    notFound,
    slug
  });

  return { siteData, loading, notFound };
};
