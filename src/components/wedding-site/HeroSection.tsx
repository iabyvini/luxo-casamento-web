
import { Heart, Calendar, MapPin, Sparkles, Leaf, Waves, Church, Crown } from "lucide-react";
import { useState } from "react";
import { QuizAnswers } from "@/types/quiz";
import { useVisualTokens } from "@/contexts/VisualTokensContext";
import PhotoUpload from "./PhotoUpload";

interface HeroSectionProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
  templateName: string;
  quizAnswers?: QuizAnswers;
}

const HeroSection = ({ coupleNames, weddingDate, welcomeMessage, templateName, quizAnswers }: HeroSectionProps) => {
  const { visualTokens, isCustomThemeActive } = useVisualTokens();
  const [couplePhoto, setCouplePhoto] = useState<string | null>(null);

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

  const getFrameStyle = (): 'floral' | 'vintage' | 'modern' | 'geometric' | 'organic' => {
    if (!quizAnswers) return 'modern';
    
    switch (quizAnswers.estilo) {
      case 'Romântico': return 'floral';
      case 'Vintage': return 'vintage';
      case 'Moderno': return 'modern';
      case 'Minimalista': return 'geometric';
      case 'Boho': return 'organic';
      default: return 'modern';
    }
  };

  // Sistema de limite absoluto: apenas 1 elemento decorativo por seção
  const renderSingleDecorative = () => {
    if (!visualTokens?.decorations) return null;

    // Escolher apenas 1 elemento baseado no template
    const element = visualTokens.decorations.heroElements[0];
    if (!element) return null;

    const IconComponent = getDecorationIcon(element);
    if (!IconComponent) return null;

    return (
      <div className="absolute top-32 right-24 opacity-[0.08]">
        <IconComponent
          className="h-8 w-8"
          style={{ color: visualTokens.colors.primary }}
          fill={element.includes('heart') || element.includes('star') ? "currentColor" : "none"}
        />
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
    if (visualTokens && isCustomThemeActive) {
      return {
        background: visualTokens.colors.background,
        backgroundImage: visualTokens.colors.textureOverlay
      };
    }
    
    // Fallback para quando não há tokens ativos
    return {
      background: 'linear-gradient(135deg, #f8f6f3 0%, #f1ede7 50%, #e8ddd4 100%)'
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

  // Determinar se usar cores personalizadas ou padrão
  const getTextColor = (type: 'primary' | 'secondary') => {
    if (isCustomThemeActive && visualTokens) {
      return type === 'primary' ? visualTokens.colors.primary : visualTokens.colors.secondary;
    }
    return type === 'primary' ? '#3C2B20' : '#5D4037';
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background dinâmico ou padrão */}
      <div 
        className={`absolute inset-0 ${isCustomThemeActive ? 'section-bg-dynamic' : ''}`}
        style={getBackgroundStyle()}
      />
      
      {/* Sistema de limite absoluto: apenas 1 decoração por seção */}
      {renderSingleDecorative()}
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="lg:text-left">
            {/* Couple Names - tipografia com contraste fixo */}
            <div className="mb-8">
              <div className="inline-flex items-center space-x-4 mb-4">
                <Heart 
                  className="h-12 w-12" 
                  fill="currentColor" 
                  style={{ color: getTextColor('primary') }}
                />
                <h1 
                  className="text-5xl md:text-6xl font-bold tracking-tight"
                  style={{
                    ...getTypographyStyle(),
                    color: getTextColor('primary')
                  }}
                >
                  {coupleNames}
                </h1>
                <Heart 
                  className="h-12 w-12" 
                  fill="currentColor" 
                  style={{ color: getTextColor('primary') }}
                />
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-8">
                <Calendar className="h-6 w-6" style={{ color: getTextColor('secondary') }} />
                <span 
                  className="text-2xl md:text-3xl font-light"
                  style={{ color: getTextColor('secondary') }}
                >
                  {formattedDate}
                </span>
              </div>
            </div>

            {/* AI Generated Welcome Message */}
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl border border-white/50 mb-12 luxury-shadow">
              <div className="flex items-center justify-center mb-4">
                <Sparkles 
                  className="h-6 w-6 mr-2" 
                  fill="currentColor" 
                  style={{ color: getTextColor('secondary') }}
                />
                <span 
                  className="text-sm font-medium uppercase tracking-wider"
                  style={{ color: getTextColor('secondary') }}
                >
                  Mensagem Especial
                </span>
                <Sparkles 
                  className="h-6 w-6 ml-2" 
                  fill="currentColor" 
                  style={{ color: getTextColor('secondary') }}
                />
              </div>
              
              <p 
                className="text-xl md:text-2xl font-light leading-relaxed"
                style={{ 
                  fontFamily: visualTokens?.typography.fontFamilies.body || 'Inter',
                  fontWeight: visualTokens?.typography.weights.body || 400,
                  color: getTextColor('primary')
                }}
              >
                {welcomeMessage}
              </p>
            </div>

            {/* Location hint */}
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <div style={{ color: getTextColor('secondary') }}>
                {getLocationIcon(quizAnswers?.local)}
              </div>
              <span 
                className="text-lg"
                style={{ color: getTextColor('secondary') }}
              >
                {quizAnswers?.local === 'Praia' ? 'Celebre conosco à beira-mar' :
                 quizAnswers?.local === 'Fazenda' ? 'Celebre conosco em meio à natureza' :
                 quizAnswers?.local === 'Igreja' ? 'Celebre conosco esta união sagrada' :
                 'Celebre conosco este momento especial'}
              </span>
            </div>
          </div>

          {/* Right Column - Photo Upload */}
          <div className="flex justify-center lg:justify-end">
            <PhotoUpload
              onPhotoChange={setCouplePhoto}
              frameStyle={getFrameStyle()}
              fallbackIllustration="couple-silhouette"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span 
            className="text-sm mb-2"
            style={{ color: getTextColor('secondary') }}
          >
            Role para ver mais
          </span>
          <div 
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{ borderColor: getTextColor('secondary') }}
          >
            <div 
              className="w-1 h-3 rounded-full mt-2 animate-pulse"
              style={{ backgroundColor: getTextColor('secondary') }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
