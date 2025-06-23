
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, Smartphone, Monitor } from "lucide-react";
import PreviewSite from "@/components/PreviewSite";
import { PreviewData } from "@/types/quiz";
import { ModernVisualTokensProvider } from "@/contexts/ModernVisualTokensContext";

const mockData: Record<string, PreviewData> = {
  classico: {
    coupleNames: "Ana & João",
    weddingDate: "2024-12-25",
    templateName: "Clássico",
    welcomeMessage: "Com muito amor, convidamos vocês para celebrar nossa união em um dia que será inesquecível para nós. Sua presença é o presente mais especial que podemos receber.",
    quizAnswers: {
      estilo: "Clássico",
      cores: "Dourado e Marfim",
      personalidade: "elegante",
      local: "Igreja",
      convidados: "50-100",
      tema: "tradicional",
      tom: "Elegante e formal",
      data_casamento: "2024-12-25",
      nomes: "Ana & João"
    }
  },
  moderno: {
    coupleNames: "Camila & Daniel",
    weddingDate: "2024-11-30",
    templateName: "Moderno",
    welcomeMessage: "Juntos construímos nossa história e agora queremos compartilhar este novo capítulo com vocês. Venham celebrar conosco o início de nossa nova jornada!",
    quizAnswers: {
      estilo: "Moderno",
      cores: "Preto e Branco",
      personalidade: "minimalista",
      local: "Espaço de Eventos",
      convidados: "100-200",
      tema: "contemporâneo",
      tom: "Moderno e sofisticado",
      data_casamento: "2024-11-30",
      nomes: "Camila & Daniel"
    }
  },
  boho: {
    coupleNames: "Flora & Vinícius",
    weddingDate: "2024-10-15",
    templateName: "Boho",
    welcomeMessage: "Como flores que desabrocham ao sol, nosso amor cresceu naturalmente. Convidamos vocês para celebrar conosco em meio à natureza e ao amor verdadeiro.",
    quizAnswers: {
      estilo: "Boho",
      cores: "Terracota e Verde",
      personalidade: "livre",
      local: "Ao Ar Livre",
      convidados: "30-80",
      tema: "natural",
      tom: "Descontraído e natural",
      data_casamento: "2024-10-15",
      nomes: "Flora & Vinícius"
    }
  },
  vintage: {
    coupleNames: "Isabella & Ricardo",
    weddingDate: "2024-09-20",
    templateName: "Vintage",
    welcomeMessage: "Como nos filmes antigos, nossa história começou com um olhar. Agora, queremos que vocês sejam testemunhas do nosso 'felizes para sempre'.",
    quizAnswers: {
      estilo: "Vintage",
      cores: "Bordeaux e Dourado",
      personalidade: "romântico",
      local: "Salão Clássico",
      convidados: "80-150",
      tema: "retrô",
      tom: "Romântico e nostálgico",
      data_casamento: "2024-09-20",
      nomes: "Isabella & Ricardo"
    }
  }
};

const TemplatePreview = () => {
  const { templateId } = useParams<{ templateId: string }>();
  const navigate = useNavigate();
  const [previewData, setPreviewData] = useState<PreviewData | null>(null);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  useEffect(() => {
    if (templateId && mockData[templateId]) {
      setPreviewData(mockData[templateId]);
    } else {
      navigate('/');
    }
  }, [templateId, navigate]);

  const handleSelectTemplate = () => {
    navigate('/quiz', { state: { selectedTemplate: templateId } });
  };

  if (!previewData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <Eye className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-lg text-gray-600">Carregando preview...</p>
        </div>
      </div>
    );
  }

  return (
    <ModernVisualTokensProvider>
      <div className="min-h-screen bg-gray-100">
        {/* Header de Controle */}
        <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  onClick={() => navigate('/')}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    Preview: Template {previewData.templateName}
                  </h1>
                  <p className="text-sm text-gray-600">
                    Esta é uma demonstração com dados fictícios
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* Toggle de Visualização */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('desktop')}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'desktop'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Monitor className="h-4 w-4 mr-2" />
                    Desktop
                  </button>
                  <button
                    onClick={() => setViewMode('mobile')}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'mobile'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Smartphone className="h-4 w-4 mr-2" />
                    Mobile
                  </button>
                </div>

                <Button
                  onClick={handleSelectTemplate}
                  className="bg-gradient-luxury hover:opacity-90 text-white"
                >
                  Usar Este Template
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Container */}
        <div className="container mx-auto px-4 py-8">
          <div 
            className={`mx-auto transition-all duration-300 ${
              viewMode === 'mobile' 
                ? 'max-w-sm' 
                : 'max-w-full'
            }`}
          >
            <div 
              className={`bg-white rounded-lg overflow-hidden shadow-2xl transition-all duration-300 ${
                viewMode === 'mobile' 
                  ? 'transform scale-90' 
                  : ''
              }`}
            >
              <PreviewSite data={previewData} />
            </div>
          </div>
        </div>
      </div>
    </ModernVisualTokensProvider>
  );
};

export default TemplatePreview;
