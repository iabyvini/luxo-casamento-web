
import { Heart, Calendar, MapPin, Sparkles, Leaf, Waves, Church, Crown } from "lucide-react";
import { findBestTemplateProfile } from "@/utils/templateProfiles";
import { generateVisualTokens, applyVisualTokensToCSS } from "@/utils/visualTokens";
import { QuizAnswers } from "@/types/quiz";
import { useEffect } from "react";

interface HeroSectionProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
  templateName: string;
  quizAnswers?: QuizAnswers;
}

const HeroSection = ({ coupleNames, weddingDate, welcomeMessage, templateName, quizAnswers }: HeroSectionProps) => {
  // Usar o novo sistema de template profiles se tivermos as respostas do quiz
  const templateProfile = quizAnswers ? findBestTemplateProfile(quizAnswers) : null;
  const visualTokens = templateProfile ? generateVisualTokens(templateProfile) : null;

  // Aplicar os tokens visuais como CSS customizado
  useEffect(() => {
    if (visualTokens) {
      const styleId = 'dynamic-visual-tokens';
      let styleElement = document.getElementById(styleId) as HTMLStyleElement;
      
      if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = styleId;
        document.head.appendChild(styleElement);
      }
      
      styleElement.textContent = applyVisualTokensToCSS(visualTokens);
    }
  }, [visualTokens]);

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

  const renderDynamicDecorations = () => {
    if (!templateProfile?.decorations) return null;

    return (
      <div className="absolute inset-0 opacity-15 overflow-hidden">
        {templateProfile.decorations.heroElements.map((element, index) => {
          const IconComponent = getDecorationIcon(element);
          if (!IconComponent) return null;

          return (
            <IconComponent
              key={index}
              className={`absolute h-8 w-8 text-white floating-animation`}
              style={{
                left: `${20 + (index * 30) % 60}%`,
                top: `${20 + (index * 25) % 50}%`,
                animationDelay: `${index * 2}s`
              }}
              fill={element.includes('heart') || element.includes('star') ? "currentColor" : "none"}
            />
          );
        })}
      </div>
    );
  };

  const getDecorationIcon = (element: string) => {
    const iconMap: Record<string, any> = {
      'hearts': Heart,
      'roses': Heart,
      'butterflies': Sparkles,
      'leaves': Leaf,
      'feathers': Leaf,
      'waves': Waves,
      'stars': Sparkles,
      'crowns': Crown,
      'ornate-borders': Crown,
      'geometric-lines': Sparkles
    };

    return iconMap[element] || Heart;
  };

  const getBackgroundStyle = () => {
    if (visualTokens) {
      return {
        background: visualTokens.colors.background,
        backgroundImage: visualTokens.colors.textureOverlay
      };
    }
    
    // Fallback para sistema antigo
    const colors = ['#a67c52', '#d4af37', '#f5f5f5'];
    return {
      background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`
    };
  };

  const getTypographyStyle = () => {
    if (visualTokens) {
      return {
        fontFamily: visualTokens.typography.fontFamilies.heading,
        fontWeight: visualTokens.typography.weights.heading
      };
    }
    return {};
  };

  const getSpacingClass = () => {
    if (templateProfile?.layout.spacing === 'tight') return 'py-16';
    if (templateProfile?.layout.spacing === 'loose') return 'py-32';
    return 'py-20';
  };

  const getMessageStyling = () => {
    const baseClass = "backdrop-blur-sm p-8 border";
    
    if (templateProfile?.layout.borderRadius === 'organic') {
      return `${baseClass} bg-white/25 rounded-3xl border-white/30 shadow-2xl`;
    }
    if (templateProfile?.layout.borderRadius === 'sharp') {
      return `${baseClass} bg-white/10 border-white/20`;
    }
    return `${baseClass} bg-white/20 rounded-2xl border-white/30`;
  };

  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center justify-center ${getSpacingClass()} overflow-hidden`}
    >
      {/* Background dinâmico com tokens visuais */}
      <div 
        className="absolute inset-0"
        style={getBackgroundStyle()}
      />
      
      {/* Decorações dinâmicas baseadas no template profile */}
      {renderDynamicDecorations()}
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        {/* Couple Names com tipografia dinâmica */}
        <div className={templateProfile?.layout.spacing === 'loose' ? 'mb-12' : 'mb-8'}>
          <div className="inline-flex items-center space-x-4 mb-4">
            <Heart className="h-12 w-12 animate-pulse" fill="currentColor" />
            <h1 
              className={`font-bold tracking-tight ${
                templateProfile?.layout.spacing === 'loose' ? 'text-4xl md:text-6xl' : 'text-5xl md:text-7xl'
              }`}
              style={getTypographyStyle()}
            >
              {coupleNames}
            </h1>
            <Heart className="h-12 w-12 animate-pulse" fill="currentColor" />
          </div>
          
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Calendar className="h-6 w-6" />
            <span className={`font-light ${
              templateProfile?.layout.spacing === 'loose' ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
            }`}>
              {formattedDate}
            </span>
          </div>
        </div>

        {/* AI Generated Welcome Message - Estilizada dinamicamente */}
        <div className={`${getMessageStyling()} ${templateProfile?.layout.spacing === 'loose' ? 'mb-16' : 'mb-12'}`}>
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-white/80 mr-2" fill="currentColor" />
            <span className="text-sm font-medium text-white/80 uppercase tracking-wider">
              {templateProfile?.emotions.toneAdjectives[0] ? 
                `Mensagem ${templateProfile.emotions.toneAdjectives[0]}` : 
                'Mensagem Especial'
              }
            </span>
            <Sparkles className="h-6 w-6 text-white/80 ml-2" fill="currentColor" />
          </div>
          
          <p 
            className={`font-light leading-relaxed text-white animate-fade-in ${
              templateProfile?.layout.spacing === 'loose' ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
            }`}
            style={{ 
              fontFamily: visualTokens?.typography.fontFamilies.body || 'Inter',
              fontWeight: visualTokens?.typography.weights.body || 400
            }}
          >
            {welcomeMessage}
          </p>
          
          {templateProfile?.mood.romantic >= 7 && (
            <div className="flex items-center justify-center mt-4 space-x-2">
              <Heart className="h-4 w-4 text-pink-200" fill="currentColor" />
              <Heart className="h-5 w-5 text-pink-100" fill="currentColor" />
              <Heart className="h-4 w-4 text-pink-200" fill="currentColor" />
            </div>
          )}
        </div>

        {/* Location hint com ícone dinâmico */}
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

      {/* Scroll indicator - condicional baseado no estilo */}
      {templateProfile?.mood.modern < 8 && (
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
