
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ArrowLeft } from "lucide-react";

const TemplateGallery = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </div>

        <div className="text-center py-24">
          <Heart className="w-24 h-24 text-rose-500 mx-auto mb-8" fill="currentColor" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Novos Templates em Breve
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Estamos preparando templates ainda mais incríveis para você. 
            Enquanto isso, que tal começar criando seu site?
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

export default TemplateGallery;
