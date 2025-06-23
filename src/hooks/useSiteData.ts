
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
      fetchSiteData();
    }
  }, [slug]);

  const fetchSiteData = async () => {
    try {
      const { data, error } = await supabase
        .from('wedding_sites')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          setNotFound(true);
        } else {
          throw error;
        }
        return;
      }

      console.log('🎯 Site carregado:', data.id, data.couple_names);
      setSiteData(data);
      
      // Increment view count
      try {
        await supabase.rpc('increment_view_count', {
          site_slug: slug
        });
      } catch (viewError) {
        console.error('Error incrementing view count:', viewError);
      }

    } catch (error: any) {
      console.error('Error loading site:', error);
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
