import { Crown, Calendar, Star } from "lucide-react";

interface ElegantClassicHeroProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
}

const ElegantClassicHero = ({ coupleNames, weddingDate, welcomeMessage }: ElegantClassicHeroProps) => {
  const formattedDate = new Date(weddingDate).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const handleConfirmPresence = () => {
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Ornamentos clássicos */}
      <div className="absolute inset-0">
        {/* Molduras decorativas */}
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-slate-300 rotate-45 opacity-20"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-slate-400 rotate-12 opacity-15"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-slate-300 -rotate-12 opacity-25"></div>
        
        {/* Ornamentos clássicos */}
        <Crown className="absolute top-32 left-1/4 w-8 h-8 text-yellow-600 opacity-30" />
        <Star className="absolute top-1/4 right-1/3 w-6 h-6 text-slate-400 opacity-40" />
        <Crown className="absolute bottom-1/3 right-20 w-10 h-10 text-yellow-600 opacity-25" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Monograma clássico */}
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto border-4 border-slate-700 rounded-full flex items-center justify-center bg-white shadow-2xl relative">
              {/* Ornamentos internos */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-600 rounded-full"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-600 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-600 rounded-full"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-yellow-600 rounded-full"></div>
              
              <div className="text-center">
                <div className="font-great-vibes text-4xl text-slate-700 leading-none">
                  {coupleNames.split(' & ')[0]?.charAt(0)}{coupleNames.split(' & ')[1]?.charAt(0)}
                </div>
              </div>
            </div>
          </div>

          {/* Título clássico */}
          <div className="text-center mb-8">
            <div className="mb-4">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-20"></div>
                <Crown className="w-6 h-6 text-yellow-600" />
                <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-20"></div>
              </div>
              
              <p className="font-cormorant text-lg text-slate-600 uppercase tracking-[0.3em] mb-2">
                Têm a honra de convidar
              </p>
            </div>

            <h1 className="font-cormorant text-5xl md:text-7xl text-slate-800 mb-6 leading-tight font-bold">
              {coupleNames}
            </h1>

            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-24"></div>
              <Star className="w-5 h-5 text-yellow-600" />
              <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-24"></div>
            </div>
          </div>

          {/* Data elegante */}
          <div className="mb-8">
            <div className="bg-white/80 backdrop-blur-sm px-8 py-4 border border-slate-200 shadow-lg">
              <div className="flex items-center justify-center space-x-4">
                <Calendar className="w-6 h-6 text-slate-600" />
                <span className="font-cormorant text-2xl text-slate-700 font-medium">
                  {formattedDate}
                </span>
              </div>
            </div>
          </div>

          {/* Mensagem formal */}
          <div className="max-w-2xl text-center mb-12">
            <p className="font-crimson text-lg text-slate-700 leading-relaxed italic">
              "{welcomeMessage}"
            </p>
          </div>

          {/* Retrato clássico */}
          <div className="mb-12">
            <div className="relative">
              {/* Moldura ornamentada */}
              <div className="w-80 h-96 bg-gradient-to-br from-slate-700 to-slate-800 p-6 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden border-4 border-white">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-400/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Crown className="w-20 h-20 text-slate-500" />
                  </div>
                  
                  {/* Placa inferior clássica */}
                  <div className="absolute bottom-0 left-0 right-0 bg-slate-800 text-center py-3">
                    <span className="text-white font-cormorant text-lg">
                      Isabella & Gabriel
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Ornamentos da moldura */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Botão formal */}
          <button
            onClick={handleConfirmPresence}
            className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white px-12 py-4 text-lg font-medium shadow-xl transform hover:scale-105 transition-all duration-300 border border-yellow-600/30 uppercase tracking-wider"
          >
            Confirmar Presença
          </button>

          {/* Scroll indicator clássico */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-600 flex justify-center bg-white/50 backdrop-blur-sm">
              <div className="w-1 h-3 bg-slate-600 mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElegantClassicHero;