
import { Heart, Calendar, MapPin, ChevronDown } from "lucide-react";
import { QuizAnswers } from "@/types/quiz";

interface ModernEleganceHeroProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
  templateName: string;
  quizAnswers?: QuizAnswers;
}

const ModernEleganceHero = ({ 
  coupleNames, 
  weddingDate, 
  welcomeMessage 
}: ModernEleganceHeroProps) => {
  const formatDate = (dateString: string) => {
    const dateParts = dateString.split('-');
    const date = new Date(
      parseInt(dateParts[0]), 
      parseInt(dateParts[1]) - 1,
      parseInt(dateParts[2])
    );
    
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formattedDate = formatDate(weddingDate);

  const handleScrollToNext = () => {
    const nextSection = document.querySelector('#countdown, #couple');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            
            {/* Save the Date Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <Heart className="h-5 w-5 text-white" fill="currentColor" />
              <span className="font-light text-sm tracking-wider uppercase text-white">
                Save the Date
              </span>
            </div>

            {/* Couple Names */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light text-white mb-6 tracking-tight">
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

            {/* Decorative Elements */}
            <div className="flex justify-center space-x-8 text-white/40 mb-12">
              <div className="text-2xl">❋</div>
              <div className="text-xl">✧</div>
              <div className="text-2xl">❋</div>
            </div>
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

      {/* Modern Elegance Styles */}
      <style>{`
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </section>
  );
};

export default ModernEleganceHero;
