
import { useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useSiteIdDetection = () => {
  const detectSiteId = useCallback(async () => {
    const path = window.location.pathname;
    
    // Para rotas do editor: /editor/[siteId]
    const editorMatch = path.match(/^\/editor\/([^\/]+)$/);
    if (editorMatch) {
      const realSiteId = editorMatch[1];
      console.log('🎯 Detectado siteId do editor:', realSiteId);
      return realSiteId;
    }
    
    // Para sites públicos: /site/[slug] - buscar o siteId real no banco
    const publicMatch = path.match(/^\/site\/([^\/]+)$/);
    if (publicMatch) {
      const slug = publicMatch[1];
      console.log('🔍 Buscando siteId para slug público:', slug);
      
      try {
        const { data, error } = await supabase
          .from('wedding_sites')
          .select('id')
          .eq('slug', slug)
          .single();

        if (error) {
          console.error('❌ Erro ao buscar site:', error);
          return null;
        }

        if (data) {
          console.log('✅ SiteId encontrado:', data.id);
          return data.id;
        }
      } catch (error) {
        console.error('❌ Erro na consulta:', error);
      }
    }
    
    return null;
  }, []);

  return { detectSiteId };
};
