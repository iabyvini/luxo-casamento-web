
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

  const formattedDate = new Date(weddingDate).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Obter template profile para styling específico
  const templateProfile = quizAnswers ? findBestModernTemplate(quizAnswers) : null;
  const heroStyle = templateProfile?.layout.heroStyle || 'fullscreen';

  // Definir foto de fundo ou placeholder elegante
  const backgroundImage = couplePhotoUrl || 
    'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';

  const handleScrollToNext = () => {
    const nextSection = document.querySelector('#countdown, #couple');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              
              {/* Save the Date Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
                <Heart className="h-5 w-5 text-white" fill="currentColor" />
                <span className="text-white font-light text-sm tracking-wider uppercase">
                  Save the Date
                </span>
              </div>

              {/* Couple Names */}
              <h1 className="text-6xl md:text-8xl lg:text-9xl modern-heading text-white mb-6">
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
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Posicionado para não sobrepor texto */}
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

  // Split layout (imagem + conteúdo lado a lado)
  return (
    <section id="home" className="min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen">
          
          {/* Image Column */}
          <div className="relative overflow-hidden">
            <div 
              className="h-full min-h-[60vh] lg:min-h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            >
              {!couplePhotoUrl && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <Heart className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-light">Foto do casal</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content Column */}
          <div className="flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-lg text-center lg:text-left modern-fade-in">
              
              {/* Save the Date */}
              <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 rounded-full px-6 py-3 mb-8">
                <Heart className="h-4 w-4" fill="currentColor" />
                <span className="text-sm font-light tracking-wider uppercase">
                  Save the Date
                </span>
              </div>

              {/* Couple Names */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl modern-heading mb-6">
                {coupleNames}
              </h1>

              {/* Date */}
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-2xl modern-body mb-8">
                <Calendar className="h-6 w-6" />
                <span>{formattedDate}</span>
              </div>

              {/* Welcome Message */}
              <p className="text-lg modern-body leading-relaxed mb-8 opacity-80">
                {welcomeMessage}
              </p>

              {/* CTA */}
              <button 
                onClick={handleScrollToNext}
                className="bg-black text-white px-8 py-4 text-sm font-light tracking-wider uppercase hover:bg-gray-800 transition-colors"
              >
                Explorar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHeroSection;
