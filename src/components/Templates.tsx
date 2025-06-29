
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

const Templates = () => {
  const navigate = useNavigate();

  return (
    <section id="templates" className="py-24 bg-gradient-to-br from-neutral-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-primary mb-6">
            Templates em Breve
          </h2>
          <p className="text-xl text-neutral-body max-w-3xl mx-auto leading-relaxed">
            Nossos novos templates exclusivos estão sendo preparados para você. 
            Por enquanto, você pode começar criando seu site personalizado.
          </p>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <Heart className="w-16 h-16 text-rose-500 mx-auto mb-6" fill="currentColor" />
            <h3 className="text-2xl font-bold text-neutral-primary mb-4">
              Crie seu site personalizado
            </h3>
            <p className="text-neutral-body mb-6">
              Enquanto preparamos os novos templates, você já pode começar 
              a criar seu site de casamento personalizado com nosso quiz.
            </p>
            <Button 
              onClick={() => navigate('/quiz')}
              size="lg"
              className="bg-gradient-luxury hover:opacity-90 text-white"
            >
              Começar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Templates;
