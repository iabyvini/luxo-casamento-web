
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart } from "lucide-react";

const TemplatePreview = () => {
  const navigate = useNavigate();

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
};

export default TemplatePreview;
