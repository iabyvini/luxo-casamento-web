
import { useCallback, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useCouplePhoto = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loadCouplePhotoFromDatabase = useCallback(async (siteId: string) => {
    if (isLoading) return null;
    
    console.log('🗄️ Carregando foto do banco para siteId:', siteId);
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase
        .from('wedding_sites')
        .select('couple_photo_url')
        .eq('id', siteId)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('❌ Erro ao buscar foto do banco:', error);
        return null;
      }

      if (data?.couple_photo_url) {
        console.log('✅ Foto encontrada no banco:', data.couple_photo_url);
        return data.couple_photo_url;
      } else {
        console.log('ℹ️ Nenhuma foto encontrada no banco');
        return null;
      }
    } catch (error) {
      console.error('❌ Erro na consulta da foto:', error);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  return { loadCouplePhotoFromDatabase, isLoading };
};
