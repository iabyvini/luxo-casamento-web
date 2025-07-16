
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart } from "lucide-react";
import { getTemplateById } from "@/data/templateLibrary";
import TemplateRenderer from "@/components/TemplateRenderer";
import SiteRenderer from "@/components/SiteRenderer";
import { PreviewData } from "@/types/quiz";

const TemplatePreview = () => {
  const navigate = useNavigate();
  const { templateId } = useParams<{ templateId: string }>();
  
  if (!templateId) {
    return <div>Template ID não encontrado</div>;
  }

  const template = getTemplateById(templateId);

  if (!template) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center">
              <Button
                variant="ghost"
                onClick={() => navigate('/templates')}
                className="text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-24">
          <div className="text-center">
            <Heart className="w-24 h-24 text-rose-500 mx-auto mb-8" fill="currentColor" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Template não encontrado
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Este template ainda não está disponível. Nossos novos templates estão sendo preparados.
            </p>
            <Button
              onClick={() => navigate('/quiz')}
              size="lg"
              className="bg-gradient-luxury hover:opacity-90 text-white"
            >
              Criar Meu Site
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Dados de exemplo para preview
  const samplePreviewData: PreviewData = {
    coupleNames: "João & Maria",
    weddingDate: "2024-12-20",
    welcomeMessage: "Venham celebrar conosco este momento único e especial",
    templateName: template.id,
    quizAnswers: {
      estilo: template.categories[0] || 'romantic',
      cores: template.categories.includes('tropical') ? 'vibrant' : 'soft',
      personalidade: 'elegant',
      local: 'garden',
      convidados: '100-150',
      tema: template.categories[0] || 'romantic',
      tom: 'formal',
      data_casamento: "2024-12-20",
      nomes: "João & Maria"
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header fixo */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/templates')}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            
            <div className="text-center">
              <h1 className="font-semibold text-foreground">{template.name}</h1>
              <p className="text-sm text-muted-foreground">{template.description}</p>
            </div>
            
            <Button
              onClick={() => navigate('/quiz')}
              className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 text-primary-foreground"
            >
              Usar Template
            </Button>
          </div>
        </div>
      </div>

      {/* Preview do template */}
      <div className="pt-20">
        <TemplateRenderer template={template}>
          <SiteRenderer siteData={samplePreviewData} siteId="preview" />
        </TemplateRenderer>
      </div>
    </div>
  );
};

export default TemplatePreview;
