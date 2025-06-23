
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import CouplePhotoEditor from "./CouplePhotoEditor";
import OurStoryEditor from "./OurStoryEditor";
import CountdownEditor from "./CountdownEditor";
import EventDetailsEditor from "./EventDetailsEditor";
import GalleryPhotoManager from "./GalleryPhotoManager";
import GiftItemManager from "./GiftItemManager";

interface SiteEditorProps {
  siteData: any;
  onUpdateSite: (updates: any) => Promise<void>;
  onPreview: () => void;
  saving: boolean;
}

const SiteEditor = ({ siteData, onUpdateSite, onPreview, saving }: SiteEditorProps) => {
  const [activeTab, setActiveTab] = useState("geral");

  const handleUpdateContent = async (section: string, updates: any) => {
    const currentContent = siteData.custom_content || {};
    const newCustomContent = {
      ...currentContent,
      [section]: updates
    };

    await onUpdateSite({ custom_content: newCustomContent });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Editor Visual</CardTitle>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                onClick={onPreview}
                className="flex items-center gap-2"
              >
                <Eye className="h-4 w-4" />
                Preview
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Personalize cada seção do seu site de casamento usando as abas abaixo.
          </p>
        </CardContent>
      </Card>

      {/* Editor Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-9">
          <TabsTrigger value="geral">Geral</TabsTrigger>
          <TabsTrigger value="casal">Casal</TabsTrigger>
          <TabsTrigger value="historia">História</TabsTrigger>
          <TabsTrigger value="contagem">Contagem</TabsTrigger>
          <TabsTrigger value="galeria">Galeria</TabsTrigger>
          <TabsTrigger value="evento">Evento</TabsTrigger>
          <TabsTrigger value="presentes">Presentes</TabsTrigger>
          <TabsTrigger value="rsvp">RSVP</TabsTrigger>
          <TabsTrigger value="mensagens">Mensagens</TabsTrigger>
        </TabsList>

        {/* Aba Geral - Foto do Casal */}
        <TabsContent value="geral" className="mt-6">
          <CouplePhotoEditor siteId={siteData.id} />
        </TabsContent>

        {/* Aba Casal */}
        <TabsContent value="casal" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações do Casal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nomes do Casal
                </label>
                <p className="text-gray-700 bg-gray-50 p-3 rounded">
                  {siteData.couple_names}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Para alterar os nomes, entre em contato com o suporte
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Data do Casamento
                </label>
                <p className="text-gray-700 bg-gray-50 p-3 rounded">
                  {new Date(siteData.wedding_date).toLocaleDateString('pt-BR')}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Para alterar a data, entre em contato com o suporte
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba História */}
        <TabsContent value="historia" className="mt-6">
          <OurStoryEditor
            customContent={siteData.custom_content}
            onUpdateContent={handleUpdateContent}
          />
        </TabsContent>

        {/* Aba Contagem Regressiva */}
        <TabsContent value="contagem" className="mt-6">
          <CountdownEditor
            customContent={siteData.custom_content}
            onUpdateContent={handleUpdateContent}
          />
        </TabsContent>

        {/* Aba Galeria */}
        <TabsContent value="galeria" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Galeria de Fotos</CardTitle>
            </CardHeader>
            <CardContent>
              <GalleryPhotoManager siteId={siteData.id} />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba Evento */}
        <TabsContent value="evento" className="mt-6">
          <EventDetailsEditor
            customContent={siteData.custom_content}
            onUpdateContent={handleUpdateContent}
          />
        </TabsContent>

        {/* Aba Presentes */}
        <TabsContent value="presentes" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Presentes</CardTitle>
            </CardHeader>
            <CardContent>
              <GiftItemManager siteId={siteData.id} />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba RSVP */}
        <TabsContent value="rsvp" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Confirmação de Presença</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Acompanhe as confirmações de presença dos seus convidados.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-700">
                  📊 Para ver o dashboard completo de RSVPs, acesse o menu principal do dashboard.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba Mensagens */}
        <TabsContent value="mensagens" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Mensagens dos Convidados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Visualize as mensagens carinhosas enviadas pelos seus convidados.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-700">
                  💌 As mensagens aparecem automaticamente conforme são enviadas no site público.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SiteEditor;
