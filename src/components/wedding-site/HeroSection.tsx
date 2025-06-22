
import { Heart, Calendar, MapPin, Sparkles, Leaf, Waves, Church, Home } from "lucide-react";
import { getDynamicTemplate } from "@/utils/templateMapping";
import { QuizAnswers } from "@/types/quiz";

interface HeroSectionProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
  templateName: string;
  quizAnswers?: QuizAnswers;
}

const HeroSection = ({ coupleNames, weddingDate, welcomeMessage, templateName, quizAnswers }: HeroSectionProps) => {
  // Use o sistema dinâmico se tivermos as respostas do quiz
  const dynamicTemplate = quizAnswers ? 
    getDynamicTemplate(quizAnswers.estilo, quizAnswers.local, quizAnswers.cores) : 
    null;

  const colors = dynamicTemplate ? dynamicTemplate.colors : ['#a67c52', '#d4af37', '#f5f5f5'];
  const useShadows = dynamicTemplate ? dynamicTemplate.shadows : true;
  const spacing = dynamicTemplate ? dynamicTemplate.spacing : 'normal';

  const formattedDate = new Date(weddingDate).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const getLocationIcon = (local?: string) => {
    switch (local) {
      case 'Praia': return <Waves className="h-6 w-6" />;
      case 'Igreja': return <Church className="h-6 w-6" />;
      case 'Fazenda': return <Leaf className="h-6 w-6" />;
      default: return <MapPin className="h-6 w-6" />;
    }
  };

  const getStyleDecorations = (estilo?: string, local?: string) => {
    if (estilo === 'Minimalista') {
      return (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-32 left-1/4 w-32 h-0.5 bg-white"></div>
          <div className="absolute bottom-32 right-1/4 w-24 h-0.5 bg-white"></div>
        </div>
      );
    }

    if (estilo === 'Boho') {
      return (
        <div className="absolute inset-0 opacity-15">
          <Leaf className="absolute top-20 left-16 h-12 w-12 text-white floating-animation" style={{ animationDelay: '0s' }} />
          <Sparkles className="absolute top-40 right-20 h-8 w-8 text-white floating-animation" style={{ animationDelay: '2s' }} />
          <Leaf className="absolute bottom-32 left-24 h-10 w-10 text-white floating-animation" style={{ animationDelay: '4s' }} />
        </div>
      );
    }

    if (estilo === 'Romântico') {
      return (
        <div className="absolute inset-0 opacity-20">
          <Heart className="absolute top-20 left-16 h-10 w-10 text-pink-200 floating-animation" fill="currentColor" />
          <Heart className="absolute top-40 right-20 h-6 w-6 text-pink-100 floating-animation" style={{ animationDelay: '2s' }} fill="currentColor" />
          <Heart className="absolute bottom-32 left-24 h-8 w-8 text-pink-200 floating-animation" style={{ animationDelay: '4s' }} fill="currentColor" />
        </div>
      );
    }

    // Default decorations
    return (
      <div className="absolute inset-0 opacity-15">
        <Heart className="absolute top-20 left-16 h-8 w-8 text-white floating-animation" fill="currentColor" />
        <Sparkles className="absolute top-40 right-20 h-6 w-6 text-white floating-animation" style={{ animationDelay: '2s' }} />
        <Heart className="absolute bottom-32 left-24 h-7 w-7 text-white floating-animation" style={{ animationDelay: '4s' }} fill="currentColor" />
      </div>
    );
  };

  const getSpacingClass = () => {
    switch (spacing) {
      case 'tight': return 'py-16';
      case 'loose': return 'py-32';
      default: return 'py-20';
    }
  };

  const getMessageStyling = (estilo?: string) => {
    if (estilo === 'Minimalista') {
      return "bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20";
    }
    if (estilo === 'Boho') {
      return "bg-white/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/30 relative overflow-hidden";
    }
    if (estilo === 'Romântico') {
      return "bg-white/25 backdrop-blur-sm rounded-2xl p-8 border border-pink-200/30 shadow-2xl";
    }
    return "bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30";
  };

  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center ${getSpacingClass()} overflow-hidden`}>
      {/* Background with dynamic colors */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)` 
        }}
      />
      
      {/* Dynamic decorations based on style */}
      {getStyleDecorations(quizAnswers?.estilo, quizAnswers?.local)}
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        {/* Couple Names */}
        <div className={spacing === 'loose' ? 'mb-12' : 'mb-8'}>
          <div className="inline-flex items-center space-x-4 mb-4">
            <Heart className="h-12 w-12 animate-pulse" fill="currentColor" />
            <h1 className={`font-bold tracking-tight ${
              spacing === 'loose' ? 'text-4xl md:text-6xl' : 'text-5xl md:text-7xl'
            }`}>
              {coupleNames}
            </h1>
            <Heart className="h-12 w-12 animate-pulse" fill="currentColor" />
          </div>
          
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Calendar className="h-6 w-6" />
            <span className={`font-light ${
              spacing === 'loose' ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
            }`}>
              {formattedDate}
            </span>
          </div>
        </div>

        {/* AI Generated Welcome Message - Estilizada dinamicamente */}
        <div className={`${getMessageStyling(quizAnswers?.estilo)} ${spacing === 'loose' ? 'mb-16' : 'mb-12'}`}>
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-white/80 mr-2" fill="currentColor" />
            <span className="text-sm font-medium text-white/80 uppercase tracking-wider">
              {quizAnswers?.estilo === 'Minimalista' ? 'Nossa Mensagem' : 'Mensagem Especial'}
            </span>
            <Sparkles className="h-6 w-6 text-white/80 ml-2" fill="currentColor" />
          </div>
          
          <p className={`font-light leading-relaxed text-white animate-fade-in ${
            quizAnswers?.estilo === 'Minimalista' ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
          }`}>
            {welcomeMessage}
          </p>
          
          {quizAnswers?.estilo !== 'Minimalista' && (
            <div className="flex items-center justify-center mt-4 space-x-2">
              <Heart className="h-4 w-4 text-pink-200" fill="currentColor" />
              <Heart className="h-5 w-5 text-pink-100" fill="currentColor" />
              <Heart className="h-4 w-4 text-pink-200" fill="currentColor" />
            </div>
          )}
        </div>

        {/* Location hint with dynamic icon */}
        <div className="flex items-center justify-center space-x-2 text-white/90">
          {getLocationIcon(quizAnswers?.local)}
          <span className="text-lg">
            {quizAnswers?.local === 'Praia' ? 'Celebre conosco à beira-mar' :
             quizAnswers?.local === 'Fazenda' ? 'Celebre conosco em meio à natureza' :
             quizAnswers?.local === 'Igreja' ? 'Celebre conosco esta união sagrada' :
             'Celebre conosco este momento especial'}
          </span>
        </div>
      </div>

      {/* Scroll indicator - conditional based on style */}
      {quizAnswers?.estilo !== 'Minimalista' && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Role para ver mais</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
