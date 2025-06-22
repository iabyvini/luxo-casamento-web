
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Save, Eye, Settings } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import SiteEditor from "@/components/SiteEditor";
import SlugEditor from "@/components/SlugEditor";

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
}

const Editor = () => {
  const { siteId } = useParams<{ siteId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [siteData, setSiteData] = useState<SiteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (siteId) {
      fetchSiteData();
    }
  }, [siteId]);

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

      // Atualizar dados locais
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
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/dashboard')}
            className="text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para Dashboard
          </Button>
          
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Editor Visual
            </h1>
            <p className="text-gray-600">
              {siteData.couple_names}
            </p>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              onClick={handlePreview}
              className="flex items-center gap-2"
            >
              <Eye className="h-4 w-4" />
              Preview
            </Button>
            <Button
              onClick={handlePublishToggle}
              variant={siteData.is_published ? "destructive" : "default"}
            >
              {siteData.is_published ? "Despublicar" : "Publicar"}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Editor Panel */}
          <div className="lg:col-span-2">
            <SiteEditor
              siteData={siteData}
              onUpdateSite={handleUpdateSite}
              onPreview={handlePreview}
              saving={saving}
            />
          </div>

          {/* Settings Sidebar */}
          <div className="space-y-6">
            {/* URL Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Configurações da URL</CardTitle>
              </CardHeader>
              <CardContent>
                <SlugEditor
                  coupleNames={siteData.couple_names}
                  weddingDate={siteData.wedding_date}
                  currentSlug={siteData.slug}
                  onSlugChange={handleSlugChange}
                  disabled={saving}
                />
              </CardContent>
            </Card>

            {/* Site Status */}
            <Card>
              <CardHeader>
                <CardTitle>Status do Site</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Status</span>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    siteData.is_published 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {siteData.is_published ? 'Publicado' : 'Rascunho'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Visualizações</span>
                  <span className="text-sm text-gray-600">
                    {siteData.views_count || 0}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Template</span>
                  <span className="text-sm text-gray-600">
                    {siteData.template_name}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full" onClick={handlePreview}>
                  <Eye className="h-4 w-4 mr-2" />
                  Visualizar Site
                </Button>
                <Button variant="outline" className="w-full">
                  <Save className="h-4 w-4 mr-2" />
                  Exportar Configurações
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
