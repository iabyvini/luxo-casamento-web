
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save, Eye, Settings } from "lucide-react";
import { PreviewData } from "@/types/quiz";

const Editor = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const previewData = location.state?.previewData as PreviewData;
  const isAuthenticated = location.state?.authenticated;

  if (!previewData) {
    navigate('/');
    return null;
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
              Editor de Site
            </h1>
            <p className="text-brown-600">
              {previewData.coupleNames} - {previewData.templateName}
            </p>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="border-brown-300 text-brown-700 hover:bg-brown-50"
            >
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button
              size="sm"
              className="bg-gradient-luxury hover:opacity-90 text-white"
            >
              <Save className="h-4 w-4 mr-2" />
              Salvar
            </Button>
          </div>
        </div>

        {/* Editor Placeholder */}
        <div className="luxury-card rounded-2xl p-12 text-center">
          <Settings className="h-16 w-16 text-brown-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-brown-800 mb-4">
            Editor Visual em Desenvolvimento
          </h2>
          <p className="text-lg text-brown-600 mb-8 max-w-2xl mx-auto">
            Em breve você poderá editar todos os elementos do seu site: textos, cores, 
            imagens, layout e muito mais. Por enquanto, seu site foi salvo com as 
            configurações escolhidas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/80 rounded-lg p-6">
              <h3 className="font-semibold text-brown-800 mb-2">Dados Salvos</h3>
              <p className="text-sm text-brown-600">
                Nome: {previewData.coupleNames}<br />
                Data: {new Date(previewData.weddingDate).toLocaleDateString('pt-BR')}<br />
                Template: {previewData.templateName}
              </p>
            </div>
            
            <div className="bg-white/80 rounded-lg p-6">
              <h3 className="font-semibold text-brown-800 mb-2">Mensagem IA</h3>
              <p className="text-sm text-brown-600">
                "{previewData.welcomeMessage}"
              </p>
            </div>
            
            <div className="bg-white/80 rounded-lg p-6">
              <h3 className="font-semibold text-brown-800 mb-2">Status</h3>
              <p className="text-sm text-brown-600">
                {isAuthenticated ? '✅ Conta criada' : '⏳ Aguardando login'}<br />
                ✅ Site gerado<br />
                ⏳ Editor em desenvolvimento
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="outline"
              onClick={() => navigate('/preview', { state: { quizAnswers: previewData.quizAnswers } })}
              className="border-brown-300 text-brown-700 hover:bg-brown-50"
            >
              Ver Preview Novamente
            </Button>
            <Button
              onClick={() => navigate('/')}
              className="bg-gradient-luxury hover:opacity-90 text-white"
            >
              Voltar ao Início
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
