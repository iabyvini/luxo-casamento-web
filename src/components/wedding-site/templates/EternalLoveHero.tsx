import { Heart, Calendar } from "lucide-react";

interface EternalLoveHeroProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
}

const EternalLoveHero = ({ coupleNames, weddingDate, welcomeMessage }: EternalLoveHeroProps) => {
  const formattedDate = new Date(weddingDate).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const handleConfirmPresence = () => {
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Elementos decorativos florais */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-300 to-rose-400 blur-2xl"></div>
        </div>
        <div className="absolute top-1/3 right-20 w-24 h-24 opacity-15">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-rose-400 to-pink-500 blur-xl"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 opacity-10">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-400 to-rose-300 blur-xl"></div>
        </div>
      </div>

      {/* Ornamentos florais SVG */}
      <svg className="absolute top-20 left-10 w-16 h-16 text-pink-300 opacity-40" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
      
      <svg className="absolute bottom-32 right-16 w-20 h-20 text-rose-300 opacity-30" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          {/* Monograma */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-pink-200 to-rose-300 rounded-full flex items-center justify-center shadow-lg border-4 border-white/60">
              <Heart className="w-10 h-10 text-rose-600" fill="currentColor" />
            </div>
          </div>

          {/* Nomes do casal */}
          <div className="mb-8">
            <h1 className="font-dancing text-6xl md:text-8xl text-rose-700 mb-4 leading-tight">
              {coupleNames}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-pink-600">
              <div className="h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent w-16"></div>
              <Heart className="w-6 h-6" fill="currentColor" />
              <div className="h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent w-16"></div>
            </div>
          </div>

          {/* Data do casamento */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-pink-200 shadow-lg">
              <Calendar className="w-5 h-5 text-rose-600" />
              <span className="font-playfair text-xl text-rose-700 font-medium">{formattedDate}</span>
            </div>
          </div>

          {/* Mensagem de boas-vindas */}
          <div className="max-w-2xl mb-12">
            <p className="text-gray-700 text-lg leading-relaxed font-lora">
              {welcomeMessage}
            </p>
          </div>

          {/* Foto do casal placeholder */}
          <div className="mb-12">
            <div className="w-64 h-80 mx-auto bg-gradient-to-br from-pink-100 to-rose-200 rounded-3xl shadow-2xl border-8 border-white/80 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-rose-300/30 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="w-16 h-16 text-rose-400" fill="currentColor" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-white font-playfair text-sm bg-rose-500/80 px-3 py-1 rounded-full">
                  Isabella & Gabriel
                </span>
              </div>
            </div>
          </div>

          {/* Botão CTA */}
          <button
            onClick={handleConfirmPresence}
            className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-12 py-4 rounded-full text-lg font-medium shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20"
          >
            Confirmar Presença ♡
          </button>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-rose-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-rose-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EternalLoveHero;