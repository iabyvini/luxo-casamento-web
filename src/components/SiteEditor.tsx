import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Upload, Eye, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import GiftItemManager from "./GiftItemManager";
import GalleryPhotoManager from "./GalleryPhotoManager";
import RSVPDashboard from "./RSVPDashboard";

interface SiteEditorProps {
  siteData: any;
  onUpdateSite: (updatedData: any) => Promise<void>;
  onPreview: () => void;
  saving: boolean;
}

interface CustomContent {
  hero?: {
    title?: string;
    subtitle?: string;
    message?: string;
    showSaveDate?: boolean;
    showLocation?: boolean;
  };
  our_story?: {
    enabled?: boolean;
    title?: string;
    content?: string;
    timeline?: Array<{
      year: string;
      title: string;
      description: string;
    }>;
  };
  gallery?: {
    enabled?: boolean;
    title?: string;
  };
  event_details?: {
    enabled?: boolean;
    ceremony?: {
      location: string;
      address: string;
      time: string;
      dress_code?: string;
    };
    reception?: {
      location: string;
      address: string;
      time: string;
    };
    additional_info?: string;
  };
  gift_list?: {
    enabled?: boolean;
    title?: string;
    message?: string;
  };
  rsvp?: {
    enabled?: boolean;
    title?: string;
    message?: string;
    deadline?: string;
    fields?: {
      companions?: boolean;
      dietary_restrictions?: boolean;
      message?: boolean;
    };
  };
  messages?: {
    enabled?: boolean;
    title?: string;
    moderation?: boolean;
  };
}

const SiteEditor = ({ siteData, onUpdateSite, onPreview, saving }: SiteEditorProps) => {
  const { toast } = useToast();
  const [customContent, setCustomContent] = useState<CustomContent>({});
  const [activeTab, setActiveTab] = useState("principal");

  useEffect(() => {
    if (siteData?.custom_content) {
      setCustomContent(siteData.custom_content as CustomContent);
    }
  }, [siteData]);

  const updateSection = (section: string, data: any) => {
    setCustomContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof CustomContent],
        ...data
      }
    }));
  };

  const handleSave = async () => {
    try {
      await onUpdateSite({
        custom_content: customContent
      });
      toast({
        title: "Alterações salvas!",
        description: "O conteúdo do seu site foi atualizado.",
      });
    } catch (error) {
      toast({
        title: "Erro ao salvar",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    }
  };

  const addTimelineItem = () => {
    const currentTimeline = customContent.our_story?.timeline || [];
    updateSection('our_story', {
      timeline: [...currentTimeline, { year: '', title: '', description: '' }]
    });
  };

  const removeTimelineItem = (index: number) => {
    const currentTimeline = customContent.our_story?.timeline || [];
    updateSection('our_story', {
      timeline: currentTimeline.filter((_, i) => i !== index)
    });
  };

  const updateTimelineItem = (index: number, field: string, value: string) => {
    const currentTimeline = customContent.our_story?.timeline || [];
    const updatedTimeline = currentTimeline.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    );
    updateSection('our_story', { timeline: updatedTimeline });
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Editor do Site</h2>
          <p className="text-gray-600">Personalize todas as seções do seu site</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={onPreview} className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Preview
          </Button>
          <Button onClick={handleSave} disabled={saving} className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            {saving ? 'Salvando...' : 'Salvar'}
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="principal">Principal</TabsTrigger>
          <TabsTrigger value="story">História</TabsTrigger>
          <TabsTrigger value="gallery">Galeria</TabsTrigger>
          <TabsTrigger value="event">Evento</TabsTrigger>
          <TabsTrigger value="gifts">Presentes</TabsTrigger>
          <TabsTrigger value="rsvp">RSVP</TabsTrigger>
          <TabsTrigger value="messages">Recados</TabsTrigger>
        </TabsList>

        {/* Principal Section */}
        <TabsContent value="principal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Seção Principal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Título Principal</Label>
                <Input
                  value={customContent.hero?.title || siteData?.couple_names || ''}
                  onChange={(e) => updateSection('hero', { title: e.target.value })}
                  placeholder="Nome do casal"
                />
              </div>
              <div>
                <Label>Subtítulo</Label>
                <Input
                  value={customContent.hero?.subtitle || ''}
                  onChange={(e) => updateSection('hero', { subtitle: e.target.value })}
                  placeholder="Data e local do casamento"
                />
              </div>
              <div>
                <Label>Mensagem de Boas-vindas</Label>
                <Textarea
                  value={customContent.hero?.message || siteData?.ai_welcome_message || ''}
                  onChange={(e) => updateSection('hero', { message: e.target.value })}
                  placeholder="Mensagem especial para os convidados"
                  rows={4}
                />
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={customContent.hero?.showSaveDate !== false}
                    onCheckedChange={(checked) => updateSection('hero', { showSaveDate: checked })}
                  />
                  <Label>Mostrar "Save the Date"</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={customContent.hero?.showLocation !== false}
                    onCheckedChange={(checked) => updateSection('hero', { showLocation: checked })}
                  />
                  <Label>Mostrar localização</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Our Story Section */}
        <TabsContent value="story" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Nossa História</CardTitle>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={customContent.our_story?.enabled !== false}
                    onCheckedChange={(checked) => updateSection('our_story', { enabled: checked })}
                  />
                  <Label>Seção ativa</Label>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Título da Seção</Label>
                <Input
                  value={customContent.our_story?.title || 'Nossa História'}
                  onChange={(e) => updateSection('our_story', { title: e.target.value })}
                />
              </div>
              <div>
                <Label>História do Casal</Label>
                <Textarea
                  value={customContent.our_story?.content || ''}
                  onChange={(e) => updateSection('our_story', { content: e.target.value })}
                  placeholder="Conte a história de vocês..."
                  rows={6}
                />
              </div>
              
              <Separator />
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Label className="text-base font-semibold">Timeline do Relacionamento</Label>
                  <Button size="sm" onClick={addTimelineItem} className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Adicionar Marco
                  </Button>
                </div>
                
                {(customContent.our_story?.timeline || []).map((item, index) => (
                  <Card key={index} className="p-4 mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline">Marco {index + 1}</Badge>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => removeTimelineItem(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label>Ano</Label>
                        <Input
                          value={item.year}
                          onChange={(e) => updateTimelineItem(index, 'year', e.target.value)}
                          placeholder="2020"
                        />
                      </div>
                      <div>
                        <Label>Título</Label>
                        <Input
                          value={item.title}
                          onChange={(e) => updateTimelineItem(index, 'title', e.target.value)}
                          placeholder="Primeiro encontro"
                        />
                      </div>
                      <div>
                        <Label>Descrição</Label>
                        <Input
                          value={item.description}
                          onChange={(e) => updateTimelineItem(index, 'description', e.target.value)}
                          placeholder="Como foi esse momento..."
                        />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Gallery Section */}
        <TabsContent value="gallery" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Galeria de Fotos</CardTitle>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={customContent.gallery?.enabled !== false}
                    onCheckedChange={(checked) => updateSection('gallery', { enabled: checked })}
                  />
                  <Label>Seção ativa</Label>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Título da Galeria</Label>
                <Input
                  value={customContent.gallery?.title || 'Nossa Galeria'}
                  onChange={(e) => updateSection('gallery', { title: e.target.value })}
                />
              </div>
              
              <Separator />
              
              <GalleryPhotoManager siteId={siteData?.id} />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Event Details Section */}
        <TabsContent value="event" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Detalhes do Evento</CardTitle>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={customContent.event_details?.enabled !== false}
                    onCheckedChange={(checked) => updateSection('event_details', { enabled: checked })}
                  />
                  <Label>Seção ativa</Label>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-semibold">Cerimônia</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div>
                    <Label>Local</Label>
                    <Input
                      value={customContent.event_details?.ceremony?.location || ''}
                      onChange={(e) => updateSection('event_details', { 
                        ceremony: { ...customContent.event_details?.ceremony, location: e.target.value }
                      })}
                      placeholder="Igreja São José"
                    />
                  </div>
                  <div>
                    <Label>Horário</Label>
                    <Input
                      value={customContent.event_details?.ceremony?.time || ''}
                      onChange={(e) => updateSection('event_details', {
                        ceremony: { ...customContent.event_details?.ceremony, time: e.target.value }
                      })}
                      placeholder="16:00"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label>Endereço</Label>  
                    <Input
                      value={customContent.event_details?.ceremony?.address || ''}
                      onChange={(e) => updateSection('event_details', {
                        ceremony: { ...customContent.event_details?.ceremony, address: e.target.value }
                      })}
                      placeholder="Rua das Flores, 123 - Centro"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label>Dress Code</Label>
                    <Input
                      value={customContent.event_details?.ceremony?.dress_code || ''}
                      onChange={(e) => updateSection('event_details', {
                        ceremony: { ...customContent.event_details?.ceremony, dress_code: e.target.value }
                      })}
                      placeholder="Traje social"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <Label className="text-base font-semibold">Recepção</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div>
                    <Label>Local</Label>
                    <Input
                      value={customContent.event_details?.reception?.location || ''}
                      onChange={(e) => updateSection('event_details', {
                        reception: { ...customContent.event_details?.reception, location: e.target.value }
                      })}
                      placeholder="Salão de Festas Paradise"
                    />
                  </div>
                  <div>
                    <Label>Horário</Label>
                    <Input
                      value={customContent.event_details?.reception?.time || ''}
                      onChange={(e) => updateSection('event_details', {
                        reception: { ...customContent.event_details?.reception, time: e.target.value }
                      })}
                      placeholder="19:00"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label>Endereço</Label>
                    <Input
                      value={customContent.event_details?.reception?.address || ''}
                      onChange={(e) => updateSection('event_details', {
                        reception: { ...customContent.event_details?.reception, address: e.target.value }
                      })}
                      placeholder="Avenida Principal, 456 - Jardins"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <Label>Informações Adicionais</Label>
                <Textarea
                  value={customContent.event_details?.additional_info || ''}
                  onChange={(e) => updateSection('event_details', { additional_info: e.target.value })}
                  placeholder="Informações importantes sobre o evento..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Gift List Section */}
        <TabsContent value="gifts" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Lista de Presentes</CardTitle>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={customContent.gift_list?.enabled !== false}
                    onCheckedChange={(checked) => updateSection('gift_list', { enabled: checked })}
                  />
                  <Label>Seção ativa</Label>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Título da Seção</Label>
                <Input
                  value={customContent.gift_list?.title || 'Lista de Presentes'}
                  onChange={(e) => updateSection('gift_list', { title: e.target.value })}
                />
              </div>
              <div>
                <Label>Mensagem</Label>
                <Textarea
                  value={customContent.gift_list?.message || ''}
                  onChange={(e) => updateSection('gift_list', { message: e.target.value })}
                  placeholder="Sua presença é o melhor presente..."
                  rows={3}
                />
              </div>

              <Separator />

              <GiftItemManager siteId={siteData?.id} />
            </CardContent>
          </Card>
        </TabsContent>

        {/* RSVP Section */}
        <TabsContent value="rsvp" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Confirmação de Presença (RSVP)</CardTitle>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={customContent.rsvp?.enabled !== false}
                    onCheckedChange={(checked) => updateSection('rsvp', { enabled: checked })}
                  />
                  <Label>Seção ativa</Label>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Título da Seção</Label>
                <Input
                  value={customContent.rsvp?.title || 'Confirmação de Presença'}
                  onChange={(e) => updateSection('rsvp', { title: e.target.value })}
                />
              </div>
              <div>
                <Label>Mensagem</Label>
                <Textarea
                  value={customContent.rsvp?.message || ''}
                  onChange={(e) => updateSection('rsvp', { message: e.target.value })}
                  placeholder="Por favor, confirme sua presença até..."
                  rows={3}
                />
              </div>
              <div>
                <Label>Prazo para Confirmação</Label>
                <Input
                  type="date"
                  value={customContent.rsvp?.deadline || ''}
                  onChange={(e) => updateSection('rsvp', { deadline: e.target.value })}
                />
              </div>

              <Separator />

              <RSVPDashboard siteId={siteData?.id} />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Messages Section */}
        <TabsContent value="messages" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recados dos Convidados</CardTitle>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={customContent.messages?.enabled !== false}
                    onCheckedChange={(checked) => updateSection('messages', { enabled: checked })}
                  />
                  <Label>Seção ativa</Label>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Título da Seção</Label>
                <Input
                  value={customContent.messages?.title || 'Recados para os Noivos'}
                  onChange={(e) => updateSection('messages', { title: e.target.value })}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={customContent.messages?.moderation !== false}
                  onCheckedChange={(checked) => updateSection('messages', { moderation: checked })}
                />
                <Label>Moderação de mensagens (aprovar antes de publicar)</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SiteEditor;
