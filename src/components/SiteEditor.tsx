
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import PhotoUpload from "./wedding-site/PhotoUpload";

interface SiteEditorProps {
  siteData: any;
  onUpdateSite: (updates: any) => Promise<void>;
  onPreview: () => void;
  saving: boolean;
}

const SiteEditor = ({ siteData, onUpdateSite, onPreview, saving }: SiteEditorProps) => {
  const [activeTab, setActiveTab] = useState("geral");

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
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
          <TabsTrigger value="geral">Geral</TabsTrigger>
          <TabsTrigger value="casal">Casal</TabsTrigger>
          <TabsTrigger value="historia">História</TabsTrigger>
          <TabsTrigger value="galeria">Galeria</TabsTrigger>
          <TabsTrigger value="evento">Evento</TabsTrigger>
          <TabsTrigger value="presentes">Presentes</TabsTrigger>
          <TabsTrigger value="rsvp">RSVP</TabsTrigger>
          <TabsTrigger value="mensagens">Mensagens</TabsTrigger>
        </TabsList>

        {/* Aba Geral */}
        <TabsContent value="geral" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurações Gerais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Foto do Casal (Hero Section)
                </label>
                <PhotoUpload
                  onPhotoUploaded={(url) => {
                    console.log('📸 Foto do casal atualizada:', url);
                  }}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Esta foto aparecerá na página inicial do seu site
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba Casal */}
        <TabsContent value="casal" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações do Casal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                As informações do casal são geradas automaticamente com base no quiz inicial.
                Para alterações, entre em contato com o suporte.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba História */}
        <TabsContent value="historia" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Nossa História</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                A seção "Nossa História" é gerada automaticamente com base nas suas respostas.
                Personalizações avançadas estarão disponíveis em breve.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba Galeria */}
        <TabsContent value="galeria" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Galeria de Fotos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Funcionalidade de galeria será implementada em breve.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba Evento */}
        <TabsContent value="evento" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Detalhes do Evento</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Os detalhes do evento são configurados automaticamente com base na data e local informados.
                Personalizações estarão disponíveis em breve.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba Presentes */}
        <TabsContent value="presentes" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Presentes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Configuração da lista de presentes será implementada em breve.
              </p>
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
              <p className="text-gray-600">
                O sistema de RSVP é automático. Você pode acompanhar as respostas no dashboard principal.
              </p>
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
              <p className="text-gray-600">
                As mensagens dos convidados aparecem automaticamente conforme são enviadas.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SiteEditor;
