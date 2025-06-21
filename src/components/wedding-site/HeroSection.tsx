
import { Heart, Calendar, MapPin, Sparkles } from "lucide-react";
import { getTemplateColors } from "@/utils/templateMapping";

interface HeroSectionProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
  templateName: string;
}

const HeroSection = ({ coupleNames, weddingDate, welcomeMessage, templateName }: HeroSectionProps) => {
  const colors = getTemplateColors(templateName);
  const formattedDate = new Date(weddingDate).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const getTemplateDecoration = (template: string) => {
    switch (template) {
      case 'Bohemian Dream':
        return (
          <div className="absolute inset-0 opacity-10">
            <Sparkles className="absolute top-20 left-10 h-8 w-8 text-gold-400 floating-animation" />
            <Heart className="absolute top-40 right-20 h-6 w-6 text-brown-400 floating-animation" style={{ animationDelay: '2s' }} />
            <Sparkles className="absolute bottom-32 left-20 h-7 w-7 text-gold-300 floating-animation" style={{ animationDelay: '4s' }} />
          </div>
        );
      case 'Vintage Charm':
        return (
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-16 left-16 w-16 h-16 border-2 border-brown-400 rounded-full"></div>
            <div className="absolute top-32 right-24 w-8 h-8 border border-gold-400 transform rotate-45"></div>
            <div className="absolute bottom-24 left-32 w-12 h-12 border-2 border-brown-300 rounded-full"></div>
          </div>
        );
      case 'Modern Love':
        return (
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-20 left-20 w-20 h-1 bg-gradient-to-r from-red-400 to-transparent"></div>
            <div className="absolute top-40 right-16 w-1 h-20 bg-gradient-to-b from-gray-600 to-transparent"></div>
            <div className="absolute bottom-32 left-24 w-16 h-1 bg-gradient-to-r from-red-400 to-transparent"></div>
          </div>
        );
      default:
        return (
          <div className="absolute inset-0 opacity-15">
            <Heart className="absolute top-20 left-16 h-8 w-8 text-gold-400 floating-animation" fill="currentColor" />
            <Sparkles className="absolute top-40 right-20 h-6 w-6 text-brown-400 floating-animation" style={{ animationDelay: '2s' }} />
            <Heart className="absolute bottom-32 left-24 h-7 w-7 text-gold-300 floating-animation" style={{ animationDelay: '4s' }} fill="currentColor" />
          </div>
        );
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background with template colors */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)` 
        }}
      />
      
      {/* Template decorations */}
      {getTemplateDecoration(templateName)}
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        {/* Couple Names */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-4 mb-4">
            <Heart className="h-12 w-12 animate-pulse" fill="currentColor" />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              {coupleNames}
            </h1>
            <Heart className="h-12 w-12 animate-pulse" fill="currentColor" />
          </div>
          
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Calendar className="h-6 w-6" />
            <span className="text-2xl md:text-3xl font-light">
              {formattedDate}
            </span>
          </div>
        </div>

        {/* AI Generated Welcome Message - Destacada */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/30">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-gold-200 mr-2" fill="currentColor" />
            <span className="text-sm font-medium text-white/80 uppercase tracking-wider">
              Mensagem Personalizada
            </span>
            <Sparkles className="h-6 w-6 text-gold-200 ml-2" fill="currentColor" />
          </div>
          
          <p className="text-xl md:text-2xl font-light leading-relaxed text-white animate-fade-in">
            {welcomeMessage}
          </p>
          
          <div className="flex items-center justify-center mt-4 space-x-2">
            <Heart className="h-4 w-4 text-pink-200" fill="currentColor" />
            <Heart className="h-5 w-5 text-pink-100" fill="currentColor" />
            <Heart className="h-4 w-4 text-pink-200" fill="currentColor" />
          </div>
        </div>

        {/* Location hint */}
        <div className="flex items-center justify-center space-x-2 text-white/90">
          <MapPin className="h-5 w-5" />
          <span className="text-lg">
            Celebre conosco este momento especial
          </span>
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
