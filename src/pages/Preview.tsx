
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit, Save, Loader2 } from "lucide-react";
import PreviewSite from "@/components/PreviewSite";
import { QuizAnswers, PreviewData } from "@/types/quiz";
import { getTemplateFromStyle } from "@/utils/templateMapping";
import { generateWelcomeMessage } from "@/utils/openaiService";

const Preview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [previewData, setPreviewData] = useState<PreviewData | null>(null);
  const [isGeneratingMessage, setIsGeneratingMessage] = useState(true);

  useEffect(() => {
    const generatePreview = async () => {
      const quizAnswers = location.state?.quizAnswers as QuizAnswers;
      const selectedTemplate = location.state?.selectedTemplate as string;
      
      if (!quizAnswers && !selectedTemplate) {
        navigate('/');
        return;
      }

      let templateName: string;
      let answers: QuizAnswers;

      if (selectedTemplate) {
        // Fluxo manual dos templates
        templateName = selectedTemplate;
        answers = quizAnswers || {
          estilo: 'Clássico',
          local: 'Igreja',
          tom: 'Elegante e formal',
          cores: 'Dourado',
          data_casamento: quizAnswers?.data_casamento || '',
          nomes: quizAnswers?.nomes || ''
        };
      } else {
        // Fluxo do quiz
        templateName = getTemplateFromStyle(quizAnswers.estilo);
        answers = quizAnswers;
      }

      try {
        setIsGeneratingMessage(true);
        const welcomeMessage = await generateWelcomeMessage(answers);
        
        setPreviewData({
          coupleNames: answers.nomes,
          weddingDate: answers.data_casamento,
          templateName,
          welcomeMessage,
          quizAnswers: answers
        });
      } catch (error) {
        console.error('Erro ao gerar preview:', error);
        // Fallback com mensagem padrão
        setPreviewData({
          coupleNames: answers.nomes,
          weddingDate: answers.data_casamento,
          templateName,
          welcomeMessage: 'Junte-se a nós para celebrar nosso amor eterno neste dia especial.',
          quizAnswers: answers
        });
      } finally {
        setIsGeneratingMessage(false);
      }
    };

    generatePreview();
  }, [location.state, navigate]);

  const handleEditSite = () => {
    navigate('/editor', { state: { previewData } });
  };

  const handleSaveAndAuth = () => {
    navigate('/auth', { state: { previewData } });
  };

  if (isGeneratingMessage || !previewData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brown-50 to-gold-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-brown-800 mb-2">
            Gerando seu site personalizado...
          </h2>
          <p className="text-brown-600">
            Nossa IA está criando a mensagem perfeita para vocês
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brown-50 to-gold-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="text-brown-600 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
          
          <div className="text-center">
            <h1 className="text-2xl font-bold gradient-text">
              Preview do Seu Site
            </h1>
            <p className="text-brown-600">
              Template: {previewData.templateName}
            </p>
          </div>
          
          <div></div>
        </div>

        {/* Preview */}
        <div className="mb-8">
          <PreviewSite data={previewData} />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            onClick={handleEditSite}
            variant="outline"
            size="lg"
            className="border-brown-300 text-brown-700 hover:bg-brown-50 w-full sm:w-auto"
          >
            <Edit className="h-5 w-5 mr-2" />
            Editar Meu Site
          </Button>
          
          <Button
            onClick={handleSaveAndAuth}
            size="lg"
            className="bg-gradient-luxury hover:opacity-90 text-white w-full sm:w-auto"
          >
            <Save className="h-5 w-5 mr-2" />
            Criar Conta para Salvar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
