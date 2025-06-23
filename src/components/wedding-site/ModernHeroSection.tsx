
import { Heart, Calendar, MapPin, ChevronDown } from "lucide-react";
import { QuizAnswers } from "@/types/quiz";
import { useModernVisualTokens } from "@/contexts/ModernVisualTokensContext";
import { findBestModernTemplate } from "@/utils/modernTemplateProfiles";

interface ModernHeroSectionProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
  templateName: string;
  quizAnswers?: QuizAnswers;
}

const ModernHeroSection = ({ 
  coupleNames, 
  weddingDate, 
  welcomeMessage, 
  templateName, 
  quizAnswers 
}: ModernHeroSectionProps) => {
  const { modernTokens, isModernThemeActive, couplePhotoUrl } = useModernVisualTokens();

  console.log('🖼️ ModernHeroSection - Foto do casal:', couplePhotoUrl);

  // Corrigir formatação da data para evitar problemas de timezone
  const formatDate = (dateString: string) => {
    const dateParts = dateString.split('-');
    const date = new Date(
      parseInt(dateParts[0]), 
      parseInt(dateParts[1]) - 1, // mês é 0-indexado
      parseInt(dateParts[2])
    );
    
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formattedDate = formatDate(weddingDate);

  // Obter template profile para styling específico
  const templateProfile = quizAnswers ? findBestModernTemplate(quizAnswers) : null;
  const heroStyle = templateProfile?.layout.heroStyle || 'fullscreen';

  // FASE 3: Sistema inteligente de definição da imagem
  const getBackgroundImage = () => {
    // PRIORIDADE 1: Foto do casal (sempre tem precedência)
    if (couplePhotoUrl) {
      console.log('✅ Usando foto do casal:', couplePhotoUrl);
      return couplePhotoUrl;
    }
    
    console.log('ℹ️ Usando imagem de placeholder baseada no template');
    // PRIORIDADE 2: Imagens de placeholder baseadas no template
    const backgroundMap: Record<string, string> = {
      'editorial-romantic': 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      'minimal-luxury': 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      'neutral-sophisticated': 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      'classic-contemporary': 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      'natural-modern': 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      'boho-refined': 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
    };
    
    return backgroundMap[templateProfile?.id || 'editorial-romantic'] || backgroundMap['editorial-romantic'];
  };

  const backgroundImage = getBackgroundImage();

  const handleScrollToNext = () => {
    const nextSection = document.querySelector('#countdown, #couple');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Layout Editorial Romântico e Minimalista Luxo (Fullscreen)
  if (heroStyle === 'fullscreen') {
    return (
      <section id="home" className="modern-hero-fullscreen relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="modern-hero-overlay"></div>
        </div>

        {/* Content */}
        <div className="modern-hero-content">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto modern-fade-in">
              
              {/* Save the Date Badge - Estilo baseado no template */}
              <div className={`inline-flex items-center space-x-2 backdrop-blur-sm border rounded-full px-6 py-3 mb-8 ${
                templateProfile?.id === 'minimal-luxury' 
                  ? 'bg-black/20 border-white/40 text-white' 
                  : 'bg-white/10 border-white/20 text-white'
              }`}>
                <Heart className="h-5 w-5" fill="currentColor" />
                <span className="font-light text-sm tracking-wider uppercase">
                  Save the Date
                </span>
              </div>

              {/* Couple Names - Tipografia baseada no template */}
              <h1 className={`modern-heading text-white mb-6 ${
                templateProfile?.id === 'minimal-luxury' 
                  ? 'text-5xl md:text-7xl lg:text-8xl font-light' 
                  : 'text-6xl md:text-8xl lg:text-9xl'
              }`}>
                {coupleNames}
              </h1>

              {/* Wedding Date */}
              <div className="flex items-center justify-center space-x-3 mb-8">
                <div className="h-px bg-white/30 w-12"></div>
                <div className="flex items-center space-x-3 text-white/90">
                  <Calendar className="h-5 w-5" />
                  <span className="text-xl md:text-2xl font-light tracking-wide">
                    {formattedDate}
                  </span>
                </div>
                <div className="h-px bg-white/30 w-12"></div>
              </div>

              {/* Location Hint */}
              <div className="flex items-center justify-center space-x-2 text-white/80 mb-8">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-light tracking-wide">
                  Detalhes em breve
                </span>
              </div>

              {/* Welcome Message */}
              <div className="max-w-2xl mx-auto mb-16">
                <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
                  {welcomeMessage}
                </p>
              </div>

              {/* Indicador se é foto do casal ou placeholder */}
              {!couplePhotoUrl && (
                <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
                  <span className="text-xs font-light px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/70">
                    Imagem ilustrativa
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={handleScrollToNext}
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
          >
            <span className="text-xs font-light tracking-wider uppercase mb-2">
              Explore
            </span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>
      </section>
    );
  }

  // Layout Split (Neutro Sofisticado, Natural Moderno)
  if (heroStyle === 'split') {
    return (
      <section id="home" className="min-h-screen" style={{ background: modernTokens?.colors.background || '#fafafa' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen">
            
            {/* Image Column */}
            <div className="relative overflow-hidden">
              <div 
                className="h-full min-h-[60vh] lg:min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              >
                {!couplePhotoUrl && (
                  <div className="absolute bottom-6 left-6">
                    <span className="text-xs font-light px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-gray-600">
                      Imagem ilustrativa
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Content Column */}
            <div className="flex items-center justify-center p-8 lg:p-16">
              <div className="max-w-lg text-center lg:text-left modern-fade-in">
                
                {/* Save the Date */}
                <div className="inline-flex items-center space-x-2 rounded-full px-6 py-3 mb-8" 
                     style={{ 
                       backgroundColor: modernTokens?.colors.secondary || '#f8f6f2',
                       color: modernTokens?.colors.text || '#4a4a4a'
                     }}>
                  <Heart className="h-4 w-4" fill="currentColor" />
                  <span className="text-sm font-light tracking-wider uppercase">
                    Save the Date
                  </span>
                </div>

                {/* Couple Names */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl modern-heading mb-6"
                    style={{ color: modernTokens?.colors.primary || '#2c2c2c' }}>
                  {coupleNames}
                </h1>

                {/* Date */}
                <div className="flex items-center justify-center lg:justify-start space-x-3 text-2xl modern-body mb-8"
                     style={{ color: modernTokens?.colors.text || '#4a4a4a' }}>
                  <Calendar className="h-6 w-6" />
                  <span>{formattedDate}</span>
                </div>

                {/* Welcome Message */}
                <p className="text-lg modern-body leading-relaxed mb-8 opacity-80"
                   style={{ color: modernTokens?.colors.text || '#4a4a4a' }}>
                  {welcomeMessage}
                </p>

                {/* CTA */}
                <button 
                  onClick={handleScrollToNext}
                  className="px-8 py-4 text-sm font-light tracking-wider uppercase hover:opacity-80 transition-colors"
                  style={{ 
                    backgroundColor: modernTokens?.colors.primary || '#2c2c2c',
                    color: 'white'
                  }}
                >
                  Explorar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Layout Overlay (Clássico Contemporâneo, Boho Refinado)
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background com overlay diferenciado */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0" 
             style={{ 
               background: templateProfile?.id === 'boho-refined' 
                 ? 'linear-gradient(135deg, rgba(61, 41, 20, 0.4) 0%, rgba(212, 165, 116, 0.2) 100%)'
                 : 'linear-gradient(135deg, rgba(30, 30, 30,  0.5) 0%, rgba(184, 134, 11, 0.2) 100%)'
             }}>
        </div>
      </div>

      {/* Content centralizado */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto modern-fade-in">
            
            {/* Badge ornamentado */}
            <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg px-8 py-4 mb-8">
              <Heart className="h-6 w-6" fill="currentColor" 
                    style={{ color: modernTokens?.colors.accent || '#b8860b' }} />
              <span className="font-medium text-sm tracking-wider uppercase"
                    style={{ color: modernTokens?.colors.primary || '#1e1e1e' }}>
                {templateProfile?.id === 'boho-refined' ? 'Celebração do Amor' : 'Save the Date'}
              </span>
            </div>

            {/* Nomes com estilo ornamentado */}
            <h1 className="modern-heading text-white mb-8 text-6xl md:text-7xl lg:text-8xl">
              {coupleNames}
            </h1>

            {/* Data com decoração */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px bg-white/40 w-16"></div>
              <div className="flex items-center space-x-3 text-white bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Calendar className="h-5 w-5" />
                <span className="text-xl font-light tracking-wide">
                  {formattedDate}
                </span>
              </div>
              <div className="h-px bg-white/40 w-16"></div>
            </div>

            {/* Mensagem de boas-vindas */}
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-xl md:text-2xl text-white/95 font-light leading-relaxed">
                {welcomeMessage}
              </p>
            </div>

            {/* Elementos decorativos baseados no template */}
            {templateProfile?.id === 'boho-refined' && (
              <div className="flex justify-center space-x-8 text-white/60 mb-8">
                <div className="text-2xl">✧</div>
                <div className="text-xl">❋</div>
                <div className="text-2xl">✧</div>
              </div>
            )}

            {/* Indicador se é foto do casal ou placeholder */}
            {!couplePhotoUrl && (
              <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
                <span className="text-xs font-light px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/70">
                  Imagem ilustrativa
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={handleScrollToNext}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
        >
          <span className="text-xs font-light tracking-wider uppercase mb-2">
            Continue
          </span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default ModernHeroSection;
