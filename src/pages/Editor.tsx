
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Save, Eye, Settings, Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
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
}

const Editor = () => {
  const { siteId } = useParams<{ siteId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [siteData, setSiteData] = useState<SiteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editData, setEditData] = useState({
    couple_names: '',
    ai_welcome_message: '',
    hero_title: '',
    hero_subtitle: '',
    our_story: '',
    wedding_details: {
      ceremony_location: '',
      reception_location: '',
      ceremony_time: '',
      reception_time: ''
    }
  });

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
      setEditData({
        couple_names: data.couple_names,
        ai_welcome_message: data.ai_welcome_message || '',
        hero_title: data.custom_content?.hero?.title || data.couple_names,
        hero_subtitle: data.custom_content?.hero?.subtitle || '',
        our_story: data.custom_content?.our_story || '',
        wedding_details: {
          ceremony_location: data.custom_content?.wedding_details?.ceremony_location || '',
          reception_location: data.custom_content?.wedding_details?.reception_location || '',
          ceremony_time: data.custom_content?.wedding_details?.ceremony_time || '',
          reception_time: data.custom_content?.wedding_details?.reception_time || ''
        }
      });
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

  const handleSave = async () => {
    if (!siteData) return;

    setSaving(true);
    try {
      const updatedCustomContent = {
        ...siteData.custom_content,
        hero: {
          title: editData.hero_title,
          subtitle: editData.hero_subtitle,
          message: editData.ai_welcome_message
        },
        our_story: editData.our_story,
        wedding_details: editData.wedding_details
      };

      const { error } = await supabase
        .from('wedding_sites')
        .update({
          couple_names: editData.couple_names,
          ai_welcome_message: editData.ai_welcome_message,
          custom_content: updatedCustomContent
        })
        .eq('id', siteData.id);

      if (error) throw error;

      toast({
        title: "Site salvo!",
        description: "Suas alterações foram salvas com sucesso.",
      });

      // Atualizar dados locais
      setSiteData(prev => prev ? {
        ...prev,
        couple_names: editData.couple_names,
        ai_welcome_message: editData.ai_welcome_message,
        custom_content: updatedCustomContent
      } : null);

    } catch (error: any) {
      toast({
        title: "Erro ao salvar",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
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
      const { error } = await supabase
        .from('wedding_sites')
        .update({ is_published: newStatus })
        .eq('id', siteData.id);

      if (error) throw error;

      setSiteData(prev => prev ? { ...prev, is_published: newStatus } : null);
      
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
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600"
            >
              <Save className="h-4 w-4" />
              {saving ? 'Salvando...' : 'Salvar'}
            </Button>
            <Button
              onClick={handlePublishToggle}
              variant={siteData.is_published ? "destructive" : "default"}
            >
              {siteData.is_published ? "Despublicar" : "Publicar"}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Editor Panel */}
          <div className="space-y-6">
            {/* Informações Básicas */}
            <Card>
              <CardHeader>
                <CardTitle>Informações Básicas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nome do Casal</label>
                  <Input
                    value={editData.couple_names}
                    onChange={(e) => setEditData(prev => ({ ...prev, couple_names: e.target.value }))}
                    placeholder="Ana & João"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Mensagem de Boas-vindas</label>
                  <Textarea
                    value={editData.ai_welcome_message}
                    onChange={(e) => setEditData(prev => ({ ...prev, ai_welcome_message: e.target.value }))}
                    placeholder="Mensagem especial para os convidados..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Seção Hero */}
            <Card>
              <CardHeader>
                <CardTitle>Seção Principal (Hero)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Título Principal</label>
                  <Input
                    value={editData.hero_title}
                    onChange={(e) => setEditData(prev => ({ ...prev, hero_title: e.target.value }))}
                    placeholder="Título da página"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Subtítulo</label>
                  <Input
                    value={editData.hero_subtitle}
                    onChange={(e) => setEditData(prev => ({ ...prev, hero_subtitle: e.target.value }))}
                    placeholder="Data do casamento, localização..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Nossa História */}
            <Card>
              <CardHeader>
                <CardTitle>Nossa História</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={editData.our_story}
                  onChange={(e) => setEditData(prev => ({ ...prev, our_story: e.target.value }))}
                  placeholder="Conte a história do casal..."
                  rows={6}
                />
              </CardContent>
            </Card>

            {/* Detalhes do Casamento */}
            <Card>
              <CardHeader>
                <CardTitle>Detalhes do Evento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Local da Cerimônia</label>
                    <Input
                      value={editData.wedding_details.ceremony_location}
                      onChange={(e) => setEditData(prev => ({
                        ...prev,
                        wedding_details: { ...prev.wedding_details, ceremony_location: e.target.value }
                      }))}
                      placeholder="Igreja, salão..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Horário da Cerimônia</label>
                    <Input
                      value={editData.wedding_details.ceremony_time}
                      onChange={(e) => setEditData(prev => ({
                        ...prev,
                        wedding_details: { ...prev.wedding_details, ceremony_time: e.target.value }
                      }))}
                      placeholder="18:00"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Local da Recepção</label>
                    <Input
                      value={editData.wedding_details.reception_location}
                      onChange={(e) => setEditData(prev => ({
                        ...prev,
                        wedding_details: { ...prev.wedding_details, reception_location: e.target.value }
                      }))}
                      placeholder="Salão de festas..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Horário da Recepção</label>
                    <Input
                      value={editData.wedding_details.reception_time}
                      onChange={(e) => setEditData(prev => ({
                        ...prev,
                        wedding_details: { ...prev.wedding_details, reception_time: e.target.value }
                      }))}
                      placeholder="20:00"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="lg:sticky lg:top-6">
            <Card>
              <CardHeader>
                <CardTitle>Preview do Site</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white border rounded-lg p-6 space-y-6 min-h-96">
                  {/* Hero Preview */}
                  <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold text-gray-900">
                      {editData.hero_title || siteData.couple_names}
                    </h1>
                    {editData.hero_subtitle && (
                      <p className="text-lg text-gray-600">{editData.hero_subtitle}</p>
                    )}
                    {editData.ai_welcome_message && (
                      <p className="text-gray-700 max-w-md mx-auto">
                        {editData.ai_welcome_message}
                      </p>
                    )}
                  </div>

                  {/* Our Story Preview */}
                  {editData.our_story && (
                    <div className="border-t pt-6">
                      <h2 className="text-xl font-semibold mb-3">Nossa História</h2>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {editData.our_story.substring(0, 200)}
                        {editData.our_story.length > 200 && '...'}
                      </p>
                    </div>
                  )}

                  {/* Wedding Details Preview */}
                  {(editData.wedding_details.ceremony_location || editData.wedding_details.reception_location) && (
                    <div className="border-t pt-6">
                      <h2 className="text-xl font-semibold mb-3">Detalhes do Evento</h2>
                      <div className="space-y-2 text-sm">
                        {editData.wedding_details.ceremony_location && (
                          <p><strong>Cerimônia:</strong> {editData.wedding_details.ceremony_location} {editData.wedding_details.ceremony_time && `às ${editData.wedding_details.ceremony_time}`}</p>
                        )}
                        {editData.wedding_details.reception_location && (
                          <p><strong>Recepção:</strong> {editData.wedding_details.reception_location} {editData.wedding_details.reception_time && `às ${editData.wedding_details.reception_time}`}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 text-center">
                  <Button
                    onClick={handlePreview}
                    variant="outline"
                    className="w-full"
                  >
                    Ver Site Completo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
