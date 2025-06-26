
import { useState, useEffect } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import GalleryPhotoManager from "./GalleryPhotoManager";
import GiftItemManager from "./GiftItemManager";
import CouplePhotoEditor from "./CouplePhotoEditor";
import OurStoryEditor from "./OurStoryEditor";
import EventDetailsEditor from "./EventDetailsEditor";
import EditorTabs from "./editor/EditorTabs";
import GeneralTab from "./editor/GeneralTab";
import EditorHeader from "./editor/EditorHeader";

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
        [section]: updates
      }
    }));
  };

  return (
    <div className="space-y-6">
      <EditorHeader
        onSave={handleSave}
        onPreview={onPreview}
        saving={saving}
      />

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <EditorTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <TabsContent value="general" className="space-y-6">
          <GeneralTab
            localData={localData}
            templateName={siteData.template_name}
            onUpdateData={updateLocalData}
          />
        </TabsContent>

        <TabsContent value="couple" className="space-y-6">
          <CouplePhotoEditor siteId={siteData.id} />
        </TabsContent>

        <TabsContent value="story" className="space-y-6">
          <OurStoryEditor 
            customContent={localData.custom_content}
            onUpdateContent={updateCustomContent}
          />
        </TabsContent>

        <TabsContent value="gallery" className="space-y-6">
          <GalleryPhotoManager siteId={siteData.id} />
          
          <Card>
            <CardHeader>
              <CardTitle>Personalização da Galeria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Título da Seção</Label>
                <Input
                  placeholder="Nossa Galeria"
                  value={localData.custom_content?.gallery?.title || ''}
                  onChange={(e) => updateCustomContent('gallery', { 
                    ...localData.custom_content?.gallery, 
                    title: e.target.value 
                  })}
                />
              </div>
              <div>
                <Label>Descrição</Label>
                <Textarea
                  placeholder="Alguns momentos especiais..."
                  value={localData.custom_content?.gallery?.description || ''}
                  onChange={(e) => updateCustomContent('gallery', { 
                    ...localData.custom_content?.gallery, 
                    description: e.target.value 
                  })}
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="event" className="space-y-6">
          <EventDetailsEditor 
            customContent={localData.custom_content}
            onUpdateContent={updateCustomContent}
          />
        </TabsContent>

        <TabsContent value="gifts" className="space-y-6">
          <GiftItemManager siteId={siteData.id} />
          
          <Card>
            <CardHeader>
              <CardTitle>Personalização da Lista de Presentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Título da Seção</Label>
                <Input
                  placeholder="Lista de Presentes"
                  value={localData.custom_content?.gifts?.title || ''}
                  onChange={(e) => updateCustomContent('gifts', { 
                    ...localData.custom_content?.gifts, 
                    title: e.target.value 
                  })}
                />
              </div>
              <div>
                <Label>Mensagem</Label>
                <Textarea
                  placeholder="Sua presença é o nosso maior presente..."
                  value={localData.custom_content?.gifts?.message || ''}
                  onChange={(e) => updateCustomContent('gifts', { 
                    ...localData.custom_content?.gifts, 
                    message: e.target.value 
                  })}
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Seção de Mensagens</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Título da Seção</Label>
                <Input
                  placeholder="Deixe sua Mensagem"
                  value={localData.custom_content?.messages?.title || ''}
                  onChange={(e) => updateCustomContent('messages', { 
                    ...localData.custom_content?.messages, 
                    title: e.target.value 
                  })}
                />
              </div>
              <div>
                <Label>Descrição</Label>
                <Textarea
                  placeholder="Compartilhe seus votos de felicidade..."
                  value={localData.custom_content?.messages?.description || ''}
                  onChange={(e) => updateCustomContent('messages', { 
                    ...localData.custom_content?.messages, 
                    description: e.target.value 
                  })}
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SiteEditor;
