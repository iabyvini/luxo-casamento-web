
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, Smartphone, Monitor } from "lucide-react";
import PreviewSite from "@/components/PreviewSite";
import { PreviewData } from "@/types/quiz";
import { EXTENDED_TEMPLATE_LIBRARY } from "@/data/extendedTemplateLibrary";
import { ModernVisualTokensProvider } from "@/contexts/ModernVisualTokensContext";
import { getTemplateTokens, applyTemplateTokensToCSS } from "@/utils/templateTokens";

const TemplatePreview = () => {
  const { templateId } = useParams<{ templateId: string }>();
  const navigate = useNavigate();
  const [previewData, setPreviewData] = useState<PreviewData | null>(null);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  useEffect(() => {
    if (!templateId) {
      console.error('🚫 Template ID não fornecido');
      navigate('/templates');
      return;
    }

    // Find template in the extended library
    const template = EXTENDED_TEMPLATE_LIBRARY.find(t => t.id === templateId);
    
    if (!template) {
      console.error('🚫 Template não encontrado:', templateId);
      navigate('/templates');
      return;
    }

    console.log('✅ Template encontrado:', template.name);

    // Apply template-specific tokens
    const tokens = getTemplateTokens(templateId);
    const styleId = `template-preview-${templateId}`;
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }
    
    styleElement.textContent = applyTemplateTokensToCSS(tokens, templateId);
    console.log('🎨 Template tokens aplicados:', tokens);

    // Create preview data based on template with enhanced quiz answers
    const mockPreviewData: PreviewData = {
      coupleNames: "João & Maria",
      weddingDate: "2024-12-25",
      templateName: template.name,
      welcomeMessage: "Com muito amor, convidamos vocês para celebrar nossa união em um dia que será inesquecível para nós. Sua presença é o presente mais especial que podemos receber.",
      quizAnswers: {
        estilo: template.category,
        cores: template.colors.join(", "),
        personalidade: template.tags[0] || "elegante",
        local: "Igreja",
        convidados: "50-100",
        tema: template.category,
        tom: "Elegante e formal",
        data_casamento: "2024-12-25",
        nomes: "João & Maria",
        // CORREÇÃO: Garantir que o template_id seja o ID correto do template
        template_id: templateId,
        visual_style: template.category,
        font_preference: tokens.fontFamily,
        color_scheme: tokens.primaryColor
      }
    };

    setPreviewData(mockPreviewData);
    
    // Cleanup function
    return () => {
      const element = document.getElementById(styleId);
      if (element) {
        element.remove();
      }
    };
  }, [templateId, navigate]);

  const handleSelectTemplate = () => {
    if (!templateId) return;
    
    const template = EXTENDED_TEMPLATE_LIBRARY.find(t => t.id === templateId);
    if (!template) return;

    navigate('/quiz', { 
      state: { 
        selectedTemplate: template.name,
        templateId: template.id
      }
    });
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
    <ModernVisualTokensProvider templateName={previewData.quizAnswers?.template_id || templateId}>
      <div className={`min-h-screen bg-gray-100 template-${templateId}`}>
        {/* Header de Controle */}
        <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  onClick={() => navigate('/templates')}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    Preview: {previewData.templateName}
                  </h1>
                  <p className="text-sm text-gray-600">
                    Template ID: {templateId} - Usando template_id: {previewData.quizAnswers?.template_id}
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
                  style={{
                    background: `linear-gradient(135deg, ${getTemplateTokens(templateId!).primaryColor}, ${getTemplateTokens(templateId!).accentColor})`
                  }}
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
              className={`bg-white rounded-lg overflow-hidden shadow-2xl transition-all duration-300 template-preview-content ${
                viewMode === 'mobile' 
                  ? 'transform scale-90' 
                  : ''
              }`}
            >
              <PreviewSite data={previewData} siteId={`preview-${templateId}`} />
            </div>
          </div>
          
          {/* Template Info */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Informações do Template</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <span className="text-sm font-medium text-gray-500">Template ID:</span>
                  <p className="text-sm text-gray-900 font-mono">{templateId}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Fonte Principal:</span>
                  <p className="text-sm text-gray-900">{getTemplateTokens(templateId!).fontFamily}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Cor Primária:</span>
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-4 h-4 rounded-full border border-gray-200"
                      style={{ backgroundColor: getTemplateTokens(templateId!).primaryColor }}
                    ></div>
                    <p className="text-sm text-gray-900">{getTemplateTokens(templateId!).primaryColor}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModernVisualTokensProvider>
  );
};

export default TemplatePreview;
