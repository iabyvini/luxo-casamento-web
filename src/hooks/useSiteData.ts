
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
      let { data, error } = await supabase
        .from('wedding_sites')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();

      console.log('📊 Primeira tentativa - busca direta:', { 
        found: !!data, 
        error: error?.message 
      });

      // 2. Se não encontrou, verificar mapeamento de slugs conhecidos
      if (!data && !error) {
        const slugMapping = getCorrectSlugMapping();
        const correctSlug = Object.keys(slugMapping).find(key => 
          slugMapping[key] === slug || key === slug
        );
        
        if (correctSlug) {
          const targetSlug = slugMapping[correctSlug] || correctSlug;
          console.log('🔄 Tentando com slug mapeado:', targetSlug);
          
          const { data: mappedData, error: mappedError } = await supabase
            .from('wedding_sites')
            .select('*')
            .eq('slug', targetSlug)
            .eq('is_published', true)
            .maybeSingle();

          data = mappedData;
          error = mappedError;
          
          console.log('📊 Segunda tentativa - slug mapeado:', { 
            found: !!data, 
            error: error?.message 
          });
        }
      }

      // 3. Se ainda não encontrou, tentar buscar por partes do slug
      if (!data && !error) {
        // Remover números e separar por hífen
        const slugParts = slug.replace(/-\d{4}$/, '').split('-');
        
        if (slugParts.length >= 2) {
          console.log('🔍 Tentando busca por nomes similares:', slugParts);
          
          // Buscar sites que contenham os nomes
          const { data: similarData, error: similarError } = await supabase
            .from('wedding_sites')
            .select('*')
            .eq('is_published', true);

          if (similarData && !similarError) {
            // Filtrar por sites que contenham as palavras do slug
            const matchingSite = similarData.find(site => {
              const siteNameNormalized = site.couple_names
                .toLowerCase()
                .replace(/[àáâãäåèéêëìíîïòóôõöùúûüç]/g, (char) => {
                  const accentsMap: { [key: string]: string } = {
                    'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a',
                    'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e',
                    'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i',
                    'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o',
                    'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u',
                    'ç': 'c'
                  };
                  return accentsMap[char] || char;
                })
                .replace(/[^a-z\s]/g, '')
                .replace(/\s+/g, ' ');
              
              return slugParts.some(part => 
                part.length > 2 && siteNameNormalized.includes(part)
              );
            });

            if (matchingSite) {
              data = matchingSite;
              console.log('✅ Site encontrado por similaridade:', matchingSite.couple_names);
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
