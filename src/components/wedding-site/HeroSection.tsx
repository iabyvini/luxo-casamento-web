
import { Heart, Calendar, MapPin, Sparkles, Leaf, Waves, Church, Crown } from "lucide-react";
import { useState } from "react";
import { QuizAnswers } from "@/types/quiz";
import { useVisualTokens } from "@/contexts/VisualTokensContext";
import { renderContextualShape } from "@/utils/shapeTokens";
import PhotoUpload from "./PhotoUpload";
import { findBestTemplateProfile } from "@/utils/templateProfiles";
import { getFallbackImage, getFrameStyle } from "@/utils/coupleFallbacks";

interface HeroSectionProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
  templateName: string;
  quizAnswers?: QuizAnswers;
}

const HeroSection = ({ coupleNames, weddingDate, welcomeMessage, templateName, quizAnswers }: HeroSectionProps) => {
  const { visualTokens, isCustomThemeActive, couplePhotoUrl } = useVisualTokens();

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

  const getPhotoFrameStyle = (): 'floral' | 'vintage' | 'modern' | 'geometric' | 'organic' => {
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

  // Get template profile for fallback
  const getTemplateProfile = () => {
    if (!quizAnswers) return null;
    return findBestTemplateProfile(quizAnswers);
  };

  // Get template ID for contextual shapes
  const getTemplateId = () => {
    if (!quizAnswers) return 'minimal-modern';
    
    const styleLocalMap: Record<string, string> = {
      'Romântico-Fazenda': 'romantic-garden',
      'Romântico-Praia': 'romantic-beach',
      'Minimalista': 'minimal-modern',
      'Boho': 'boho-forest',
      'Clássico': 'classic-cathedral',
      'Vintage': 'vintage-mansion'
    };

    const key = quizAnswers.local ? `${quizAnswers.estilo}-${quizAnswers.local}` : quizAnswers.estilo;
    return styleLocalMap[key] || styleLocalMap[quizAnswers.estilo] || 'minimal-modern';
  };

  // Render single contextual decorative element
  const renderContextualDecorative = () => {
    const templateId = getTemplateId();
    const shapeConfig = renderContextualShape(templateId);
    const IconComponent = shapeConfig.component;

    return (
      <div className={shapeConfig.className} style={shapeConfig.style}>
        <IconComponent
          className="h-8 w-8"
          style={{ color: visualTokens?.colors.primary || '#3C2B20' }}
          fill={templateId.includes('romantic') || templateId.includes('boho') ? "currentColor" : "none"}
        />
      </div>
    );
  };

  const getBackgroundStyle = () => {
    if (visualTokens && isCustomThemeActive) {
      return 'hero-template-bg';
    }
    return '';
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

  // Always use high contrast colors - FIXED TYPOGRAPHY
  const getTextColor = (type: 'primary' | 'secondary') => {
    if (isCustomThemeActive && visualTokens) {
      return type === 'primary' ? visualTokens.colors.primary : visualTokens.colors.secondary;
    }
    return type === 'primary' ? '#3C2B20' : '#5D4037';
  };

  // Get photo to display (user photo or fallback)
  const getDisplayPhoto = () => {
    if (couplePhotoUrl) return couplePhotoUrl;
    
    const templateProfile = getTemplateProfile();
    if (templateProfile) {
      return getFallbackImage(templateProfile);
    }
    
    return null;
  };

  const displayPhoto = getDisplayPhoto();
  const templateProfile = getTemplateProfile();
  const frameStyle = templateProfile ? getFrameStyle(templateProfile) : null;

  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center py-20 overflow-hidden ${getBackgroundStyle()}`}>
      {/* Template-specific background */}
      {!isCustomThemeActive && (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-base via-neutral-soft to-neutral-100" />
      )}
      
      {/* Single contextual decorative element */}
      {renderContextualDecorative()}
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="lg:text-left space-y-8">
            {/* Couple Names - FIXED TYPOGRAPHY */}
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
                  className="text-2xl md:text-3xl font-medium"
                  style={{ color: getTextColor('secondary') }}
                >
                  {formattedDate}
                </span>
              </div>
            </div>

            {/* AI Generated Welcome Message - FIXED TYPOGRAPHY */}
            <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl border border-white/50 mb-12 luxury-shadow">
              <div className="flex items-center justify-center mb-4">
                <Sparkles 
                  className="h-6 w-6 mr-2" 
                  fill="currentColor" 
                  style={{ color: getTextColor('secondary') }}
                />
                <span 
                  className="text-sm font-semibold uppercase tracking-wider"
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
                className="text-xl md:text-2xl font-normal leading-relaxed"
                style={{ 
                  fontFamily: visualTokens?.typography.fontFamilies.body || 'Inter',
                  fontWeight: visualTokens?.typography.weights.body || 400,
                  color: getTextColor('primary')
                }}
              >
                {welcomeMessage}
              </p>
            </div>

            {/* Location hint - FIXED TYPOGRAPHY */}
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <div style={{ color: getTextColor('secondary') }}>
                {getLocationIcon(quizAnswers?.local)}
              </div>
              <span 
                className="text-lg font-medium"
                style={{ color: getTextColor('secondary') }}
              >
                {quizAnswers?.local === 'Praia' ? 'Celebre conosco à beira-mar' :
                 quizAnswers?.local === 'Fazenda' ? 'Celebre conosco em meio à natureza' :
                 quizAnswers?.local === 'Igreja' ? 'Celebre conosco esta união sagrada' :
                 'Celebre conosco este momento especial'}
              </span>
            </div>
          </div>

          {/* Right Column - Couple Photo */}
          <div className="flex justify-center lg:justify-end">
            {displayPhoto ? (
              <div className="relative">
                <div 
                  className={`w-64 h-64 md:w-80 md:h-80 overflow-hidden transition-all duration-300 hover:scale-105 ${frameStyle?.container || 'rounded-2xl'} ${frameStyle?.border || 'border-4'} ${frameStyle?.shadow || 'shadow-2xl'}`}
                  style={{
                    borderColor: isCustomThemeActive ? visualTokens?.colors.primary : frameStyle?.border || '#a67c52'
                  }}
                >
                  <img 
                    src={displayPhoto} 
                    alt="Foto do casal" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay for fallback images */}
                  {!couplePhotoUrl && (
                    <div className={`absolute inset-0 ${frameStyle?.overlay || 'bg-white/10'}`} />
                  )}
                </div>
                
                {/* Fallback indicator */}
                {!couplePhotoUrl && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm" 
                          style={{ color: getTextColor('secondary') }}>
                      Imagem ilustrativa
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <PhotoUpload
                frameStyle={getPhotoFrameStyle()}
                fallbackIllustration="couple-silhouette"
              />
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span 
            className="text-sm mb-2 font-medium"
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
