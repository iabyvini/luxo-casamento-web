
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart } from "lucide-react";

const TemplateSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-brown-50 to-gold-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/quiz')}
            className="text-brown-600 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Quiz
          </Button>
        </div>

        <div className="text-center py-24">
          <Heart className="w-24 h-24 text-rose-500 mx-auto mb-8" fill="currentColor" />
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Novos Templates em Breve
          </h1>
          <p className="text-xl text-brown-600 max-w-2xl mx-auto mb-8">
            Estamos preparando templates incríveis baseados no seu perfil. 
            Por enquanto, vamos criar seu site com nosso design padrão.
          </p>
          <Button
            onClick={() => navigate('/quiz')}
            size="lg"
            className="bg-gradient-luxury hover:opacity-90 text-white"
          >
            Continuar Criação do Site
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelection;
