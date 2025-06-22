
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Save, Eye, Settings, Camera, Users, Gift, MessageSquare, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import GalleryPhotoManager from "./GalleryPhotoManager";
import GiftItemManager from "./GiftItemManager";
import CouplePhotoEditor from "./CouplePhotoEditor";

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

interface SiteEditorProps {
  siteData: SiteData;
  onUpdateSite: (updates: any) => Promise<void>;
  onPreview: () => void;
  saving: boolean;
}

const SiteEditor = ({ siteData, onUpdateSite, onPreview, saving }: SiteEditorProps) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("general");
  const [localData, setLocalData] = useState({
    couple_names: siteData.couple_names,
    wedding_date: siteData.wedding_date,
    ai_welcome_message: siteData.ai_welcome_message,
    custom_content: siteData.custom_content || {}
  });

  useEffect(() => {
    setLocalData({
      couple_names: siteData.couple_names,
      wedding_date: siteData.wedding_date,
      ai_welcome_message: siteData.ai_welcome_message,
      custom_content: siteData.custom_content || {}
    });
  }, [siteData]);

  const handleSave = async () => {
    try {
      await onUpdateSite(localData);
      toast({
        title: "Alterações salvas!",
        description: "As alterações foram salvas com sucesso.",
      });
    } catch (error: any) {
      toast({
        title: "Erro ao salvar",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const updateLocalData = (field: string, value: any) => {
    setLocalData(prev => ({ ...prev, [field]: value }));
  };

  const updateCustomContent = (section: string, updates: any) => {
    setLocalData(prev => ({
      ...prev,
      custom_content: {
        ...prev.custom_content,
        [section]: {
          ...prev.custom_content[section],
          ...updates
        }
      }
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Editor do Site</h2>
          <p className="text-gray-600">
            Personalize o conteúdo e aparência do seu site
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={onPreview}>
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button onClick={handleSave} disabled={saving}>
            <Save className="h-4 w-4 mr-2" />
            {saving ? 'Salvando...' : 'Salvar'}
          </Button>
        </div>
      </div>

      {/* Editor Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Geral
          </TabsTrigger>
          <TabsTrigger value="couple" className="flex items-center gap-2">
            <Camera className="h-4 w-4" />
            Casal
          </TabsTrigger>
          <TabsTrigger value="gallery" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Galeria
          </TabsTrigger>
          <TabsTrigger value="gifts" className="flex items-center gap-2">
            <Gift className="h-4 w-4" />
            Presentes
          </TabsTrigger>
          <TabsTrigger value="messages" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Conteúdo
          </TabsTrigger>
        </TabsList>

        {/* General Tab */}
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações Básicas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Nomes do Casal</Label>
                <Input
                  value={localData.couple_names}
                  onChange={(e) => updateLocalData('couple_names', e.target.value)}
                  placeholder="Ana & João"
                />
              </div>
              
              <div>
                <Label>Data do Casamento</Label>
                <Input
                  type="date"
                  value={localData.wedding_date}
                  onChange={(e) => updateLocalData('wedding_date', e.target.value)}
                />
              </div>
              
              <div>
                <Label>Mensagem de Boas-vindas</Label>
                <Textarea
                  value={localData.ai_welcome_message}
                  onChange={(e) => updateLocalData('ai_welcome_message', e.target.value)}
                  placeholder="Mensagem de boas-vindas personalizada..."
                  rows={3}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Template</p>
                  <p className="text-sm text-gray-600">{siteData.template_name}</p>
                </div>
                <Badge variant="outline">{siteData.template_name}</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Couple Tab */}
        <TabsContent value="couple" className="space-y-6">
          <CouplePhotoEditor siteId={siteData.id} />
        </TabsContent>

        {/* Gallery Tab */}
        <TabsContent value="gallery" className="space-y-6">
          <GalleryPhotoManager siteId={siteData.id} />
        </TabsContent>

        {/* Gifts Tab */}
        <TabsContent value="gifts" className="space-y-6">
          <GiftItemManager siteId={siteData.id} />
        </TabsContent>

        {/* Messages Tab */}
        <TabsContent value="messages" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personalização de Conteúdo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Seção Galeria</h4>
                  <div className="space-y-2">
                    <Input
                      placeholder="Título personalizado..."
                      value={localData.custom_content?.gallery?.title || ''}
                      onChange={(e) => updateCustomContent('gallery', { title: e.target.value })}
                    />
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Lista de Presentes</h4>
                  <div className="space-y-2">
                    <Input
                      placeholder="Título personalizado..."
                      value={localData.custom_content?.gifts?.title || ''}
                      onChange={(e) => updateCustomContent('gifts', { title: e.target.value })}
                    />
                    <Textarea
                      placeholder="Mensagem personalizada..."
                      value={localData.custom_content?.gifts?.message || ''}
                      onChange={(e) => updateCustomContent('gifts', { message: e.target.value })}
                      rows={2}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SiteEditor;
