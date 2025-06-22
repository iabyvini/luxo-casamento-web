
import { useState, useEffect } from "react";
import { X, Heart, Sparkles, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  const handleStartQuiz = () => {
    setIsVisible(false);
    navigate('/quiz');
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl luxury-shadow max-w-md w-full p-8 relative overflow-hidden animate-scale-in">
        {/* Background decorations */}
        <div className="absolute top-4 left-4 text-pink-200 opacity-30">
          <Heart className="h-8 w-8" fill="currentColor" />
        </div>
        <div className="absolute bottom-4 right-4 text-amber-200 opacity-30">
          <Sparkles className="h-8 w-8" fill="currentColor" />
        </div>
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-brown-400 hover:text-brown-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        {/* Content */}
        <div className="text-center relative">
          <div className="bg-gradient-luxury p-4 rounded-2xl inline-flex mb-6">
            <Gift className="h-8 w-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-playfair font-bold gradient-text mb-4">
            Espere! Oferta Especial
          </h3>
          
          <p className="text-brown-600 mb-6 leading-relaxed">
            Antes de sair, que tal criar seu site de casamento 
            <span className="font-bold text-amber-700"> gratuitamente</span>? 
            Nosso quiz leva apenas 2 minutos!
          </p>
          
          <div className="space-y-3">
            <Button
              onClick={handleStartQuiz}
              className="w-full btn-premium text-white py-3"
            >
              <Sparkles className="mr-2 h-4 w-4" fill="currentColor" />
              Criar Meu Site Grátis Agora
            </Button>
            
            <button
              onClick={handleClose}
              className="w-full text-brown-500 text-sm hover:text-brown-600 transition-colors"
            >
              Não, obrigado
            </button>
          </div>
          
          <div className="flex items-center justify-center mt-4 space-x-2 text-xs text-brown-500">
            <Heart className="h-3 w-3" fill="currentColor" />
            <span>100% gratuito para começar</span>
          </div>
        </div>
      </div>
    </div>
  );
};
