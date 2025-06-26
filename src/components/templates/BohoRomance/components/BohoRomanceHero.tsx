
import { Heart, Calendar, MapPin, ChevronDown } from "lucide-react";
import { QuizAnswers } from "@/types/quiz";

interface BohoRomanceHeroProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
  templateName: string;
  quizAnswers?: QuizAnswers;
}

const BohoRomanceHero = ({ 
  coupleNames, 
  weddingDate, 
  welcomeMessage 
}: BohoRomanceHeroProps) => {
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
    <section 
      id="home" 
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F0E68C 0%, #DDA0DD 30%, #D2691E 100%)'
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">🌙</div>
        <div className="absolute top-20 right-20 text-4xl opacity-30 animate-float delay-1000">✨</div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-25 animate-float delay-2000">🌸</div>
        <div className="absolute bottom-32 right-32 text-3xl opacity-35 animate-float delay-3000">🦋</div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            
            {/* Decorative Top */}
            <div className="flex justify-center mb-8">
              <div className="text-4xl opacity-80">🌿 ✧ 🌿</div>
            </div>

            {/* Couple Names */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-script text-white mb-6 drop-shadow-lg">
              {coupleNames}
            </h1>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-px bg-white/60"></div>
              <div className="text-white text-2xl">❋</div>
              <div className="w-16 h-px bg-white/60"></div>
            </div>

            {/* Wedding Date */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="flex items-center space-x-3 text-white bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <Calendar className="h-5 w-5" />
                <span className="text-xl font-light tracking-wide">
                  {formattedDate}
                </span>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-lg md:text-xl text-white/95 font-light leading-relaxed">
                {welcomeMessage}
              </p>
            </div>

            {/* Boho Decorative Elements */}
            <div className="flex justify-center space-x-8 text-white/60 mb-12">
              <div className="text-3xl animate-pulse">🌙</div>
              <div className="text-2xl animate-pulse delay-500">✧</div>
              <div className="text-3xl animate-pulse delay-1000">🌙</div>
            </div>

            {/* Location Hint */}
            <div className="flex items-center justify-center space-x-2 text-white/80 mb-8">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-light tracking-wide">
                Em breve mais detalhes sobre nossa celebração
              </span>
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
            Continue
          </span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </button>
      </div>

      <style>{`
        .font-script {
          font-family: 'Dancing Script', cursive;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default BohoRomanceHero;
