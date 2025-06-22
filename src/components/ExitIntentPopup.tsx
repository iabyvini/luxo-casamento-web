
import { useState, useEffect } from "react";
import { X, Heart, Sparkles, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if popup was already shown in this session
    const sessionShown = sessionStorage.getItem('exitPopupShown');
    if (sessionShown) {
      setHasShown(true);
      return;
    }

    // Start tracking user activity after 3 seconds
    const activationTimer = setTimeout(() => {
      setIsActive(true);
    }, 3000);

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if cursor leaves from the top and user has been active
      if (e.clientY <= 0 && !hasShown && isActive) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    const handleBeforeUnload = () => {
      if (!hasShown && isActive) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    // Add listeners only after activation period
    if (isActive) {
      document.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('beforeunload', handleBeforeUnload);
    }

    return () => {
      clearTimeout(activationTimer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasShown, isActive]);

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
        {/* Single background decoration - minimal */}
        <div className="absolute top-4 right-4 text-amber-200 opacity-[0.08]">
          <Heart className="h-8 w-8" fill="currentColor" />
        </div>
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#3C2B20] hover:text-[#5D4037] transition-colors z-10"
        >
          <X className="h-6 w-6" />
        </button>
        
        {/* Content */}
        <div className="text-center relative">
          <div className="bg-gradient-luxury p-4 rounded-2xl inline-flex mb-6">
            <Gift className="h-8 w-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-playfair font-bold text-[#3C2B20] mb-4">
            Espere! Oferta Especial
          </h3>
          
          <p className="text-[#5D4037] mb-6 leading-relaxed">
            Antes de sair, que tal criar seu site de casamento 
            <span className="font-bold text-[#3C2B20]"> gratuitamente</span>? 
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
              className="w-full text-[#5D4037] text-sm hover:text-[#3C2B20] transition-colors"
            >
              Não, obrigado
            </button>
          </div>
          
          <div className="flex items-center justify-center mt-4 space-x-2 text-xs text-[#5D4037]">
            <Heart className="h-3 w-3" fill="currentColor" />
            <span>100% gratuito para começar</span>
          </div>
        </div>
      </div>
    </div>
  );
};
