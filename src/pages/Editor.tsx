
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Settings } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { ModernVisualTokensProvider, useModernVisualTokens } from "@/contexts/ModernVisualTokensContext";
import SiteEditor from "@/components/SiteEditor";
import EditorHeader from "@/components/editor/EditorHeader";
import EditorSidebar from "@/components/editor/EditorSidebar";

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

const EditorContent = () => {
  const { siteId } = useParams<{ siteId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const { setSiteId } = useModernVisualTokens();
  const [siteData, setSiteData] = useState<SiteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (siteId) {
      setSiteId(siteId);
      fetchSiteData();
    }
  }, [siteId, setSiteId]);

  const fetchSiteData = async () => {
    try {
      const { data, error } = await supabase
        .from('wedding_sites')
        .select('*')
        .eq('id', siteId)
        .eq('user_id', user?.id)
        .single();

      if (error) throw error;
      setSiteData(data);
    } catch (error: any) {
      console.error('Erro ao carregar site:', error);
      toast({
        title: "Erro ao carregar site",
        description: "Não foi possível carregar os dados do site.",
        variant: "destructive",
      });
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateSite = async (updates: any) => {
    if (!siteData) return;

    setSaving(true);
    try {
      const { error } = await supabase
        .from('wedding_sites')
        .update(updates)
        .eq('id', siteData.id);

      if (error) throw error;
      setSiteData(prev => prev ? { ...prev, ...updates } : null);
    } catch (error: any) {
      toast({
        title: "Erro ao salvar",
        description: error.message,
        variant: "destructive",
      });
      throw error;
    } finally {
      setSaving(false);
    }
  };

  const handleSlugChange = async (newSlug: string) => {
    await handleUpdateSite({ slug: newSlug });
  };

  const handlePreview = () => {
    if (siteData) {
      window.open(`/site/${siteData.slug}`, '_blank');
    }
  };

  const handlePublishToggle = async () => {
    if (!siteData) return;

    try {
      const newStatus = !siteData.is_published;
      await handleUpdateSite({ is_published: newStatus });
      
      toast({
        title: newStatus ? "Site publicado!" : "Site despublicado",
        description: newStatus 
          ? "Seu site está agora acessível publicamente" 
          : "Seu site foi removido do ar",
      });
    } catch (error: any) {
      toast({
        title: "Erro ao alterar status",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-lg text-gray-600">Carregando editor...</p>
        </div>
      </div>
    );
  }

  if (!siteData) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <EditorHeader
          coupleNames={siteData.couple_names}
          onPreview={handlePreview}
          onPublishToggle={handlePublishToggle}
          isPublished={siteData.is_published}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SiteEditor
              siteData={siteData}
              onUpdateSite={handleUpdateSite}
              onPreview={handlePreview}
              saving={saving}
            />
          </div>

          <EditorSidebar
            siteData={siteData}
            onSlugChange={handleSlugChange}
            onPreview={handlePreview}
            saving={saving}
          />
        </div>
      </div>
    </div>
  );
};

const Editor = () => {
  return (
    <ModernVisualTokensProvider>
      <EditorContent />
    </ModernVisualTokensProvider>
  );
};

export default Editor;
