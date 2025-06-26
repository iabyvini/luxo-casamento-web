
import { useState, useEffect } from "react";

interface ToscanaHeroSectionProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage?: string;
}

const ToscanaHeroSection = ({ coupleNames, weddingDate, welcomeMessage }: ToscanaHeroSectionProps) => {
  const [timeToWedding, setTimeToWedding] = useState<string>("");

  useEffect(() => {
    const calculateTimeToWedding = () => {
      const wedding = new Date(weddingDate);
      const now = new Date();
      const diff = wedding.getTime() - now.getTime();
      
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        setTimeToWedding(`${days} dias para o grande dia`);
      } else {
        setTimeToWedding("O grande dia chegou!");
      }
    };

    calculateTimeToWedding();
    const interval = setInterval(calculateTimeToWedding, 1000 * 60 * 60); // Update every hour
    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background com efeito de ciprestes */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/10 to-transparent"></div>
        
        {/* Elementos decorativos inspirados em ciprestes */}
        <div className="absolute left-10 top-20 w-2 h-40 bg-gradient-to-t from-gray-800 to-gray-600 opacity-20 transform rotate-3"></div>
        <div className="absolute right-16 top-32 w-2 h-32 bg-gradient-to-t from-gray-800 to-gray-600 opacity-15 transform -rotate-2"></div>
        <div className="absolute left-1/4 top-40 w-1 h-24 bg-gradient-to-t from-gray-700 to-gray-500 opacity-25"></div>
      </div>

      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        {/* Welcome Message */}
        {welcomeMessage && (
          <p className="text-lg toscana-accent mb-8 font-light italic">
            {welcomeMessage}
          </p>
        )}

        {/* Couple Names */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-wider">
          {coupleNames}
        </h1>

        {/* Decorative Divider */}
        <div className="toscana-divider"></div>

        {/* Wedding Date */}
        <div className="mb-8">
          <p className="text-2xl md:text-3xl font-light tracking-wide mb-2">
            {new Date(weddingDate).toLocaleDateString('pt-BR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </p>
          <p className="text-lg toscana-accent">
            {timeToWedding}
          </p>
        </div>

        {/* Editorial Quote */}
        <blockquote className="text-xl md:text-2xl font-light italic max-w-2xl mx-auto leading-relaxed">
          "Entre os ciprestes da Toscana e o amor eterno, celebramos o início de nossa jornada juntos."
        </blockquote>

        {/* Subtle Navigation Hint */}
        <div className="mt-16">
          <div className="animate-bounce">
            <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-transparent mx-auto"></div>
          </div>
          <p className="text-sm toscana-accent mt-2">Role para descobrir nossa história</p>
        </div>
      </div>
    </section>
  );
};

export default ToscanaHeroSection;
