
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
  const { visualTokens } = useVisualTokens();
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

  const renderDynamicDecorations = () => {
    if (!visualTokens?.decorations) return null;

    return (
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        {visualTokens.decorations.heroElements.slice(0, 2).map((element, index) => {
          const IconComponent = getDecorationIcon(element);
          if (!IconComponent) return null;

          return (
            <IconComponent
              key={index}
              className="absolute h-8 w-8 text-white"
              style={{
                left: `${20 + (index * 60)}%`,
                top: `${30 + (index * 40)}%`,
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
    
    return {
      background: 'linear-gradient(135deg, #a67c52 0%, #d4af37 50%, #f5f5f5 100%)'
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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background dinâmico */}
      <div 
        className="absolute inset-0"
        style={getBackgroundStyle()}
      />
      
      {/* Decorações sutis */}
      {renderDynamicDecorations()}
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="lg:text-left">
            {/* Couple Names */}
            <div className="mb-8">
              <div className="inline-flex items-center space-x-4 mb-4">
                <Heart className="h-12 w-12" fill="currentColor" />
                <h1 
                  className="text-5xl md:text-6xl font-bold tracking-tight"
                  style={getTypographyStyle()}
                >
                  {coupleNames}
                </h1>
                <Heart className="h-12 w-12" fill="currentColor" />
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-8">
                <Calendar className="h-6 w-6" />
                <span className="text-2xl md:text-3xl font-light">
                  {formattedDate}
                </span>
              </div>
            </div>

            {/* AI Generated Welcome Message */}
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl border border-white/30 mb-12">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-white/80 mr-2" fill="currentColor" />
                <span className="text-sm font-medium text-white/80 uppercase tracking-wider">
                  Mensagem Especial
                </span>
                <Sparkles className="h-6 w-6 text-white/80 ml-2" fill="currentColor" />
              </div>
              
              <p 
                className="text-xl md:text-2xl font-light leading-relaxed text-white"
                style={{ 
                  fontFamily: visualTokens?.typography.fontFamilies.body || 'Inter',
                  fontWeight: visualTokens?.typography.weights.body || 400
                }}
              >
                {welcomeMessage}
              </p>
            </div>

            {/* Location hint */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-white/90">
              {getLocationIcon(quizAnswers?.local)}
              <span className="text-lg">
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Role para ver mais</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
