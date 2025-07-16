import { Waves, Calendar, Anchor } from "lucide-react";

interface OceanBreezeHeroProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
}

const OceanBreezeHero = ({ coupleNames, weddingDate, welcomeMessage }: OceanBreezeHeroProps) => {
  const formattedDate = new Date(weddingDate).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const handleConfirmPresence = () => {
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background oceânico */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(70, 130, 180, 0.8) 0%, rgba(135, 206, 235, 0.6) 50%, rgba(255, 215, 0, 0.3) 100%), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><linearGradient id="ocean" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%234682B4;stop-opacity:1" /><stop offset="100%" style="stop-color:%2387CEEB;stop-opacity:1" /></linearGradient></defs><rect width="1000" height="1000" fill="url(%23ocean)"/></svg>')`
        }}
      />

      {/* Ondas animadas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" 
                className="fill-blue-200/40 animate-pulse"></path>
          <path d="M0,0V15.81C0,72.92,268.63,120,600,120S1200,72.92,1200,15.81V0Z" 
                className="fill-blue-300/60 animate-pulse" 
                style={{ animationDelay: '0.5s' }}></path>
        </svg>
      </div>

      {/* Elementos flutuantes */}
      <div className="absolute inset-0">
        <Waves className="absolute top-20 left-10 w-8 h-8 text-blue-300 opacity-60 animate-bounce" />
        <Anchor className="absolute top-1/3 right-20 w-10 h-10 text-yellow-400 opacity-70" />
        <Waves className="absolute bottom-1/3 left-1/4 w-6 h-6 text-blue-400 opacity-50 animate-bounce" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          {/* Âncora decorativa */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white/60">
              <Anchor className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Nomes do casal - estilo náutico */}
          <div className="mb-8">
            <h1 className="font-kaushan text-6xl md:text-8xl text-white mb-4 leading-tight drop-shadow-2xl">
              {coupleNames}
            </h1>
            <div className="flex items-center justify-center space-x-6">
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-20"></div>
              <Waves className="w-8 h-8 text-yellow-400" />
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-20"></div>
            </div>
          </div>

          {/* Badge náutico */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 shadow-lg">
              <Calendar className="w-5 h-5 text-yellow-300" />
              <span className="font-montserrat text-xl text-white font-medium">{formattedDate}</span>
            </div>
          </div>

          {/* Localização */}
          <div className="mb-8">
            <p className="font-montserrat text-yellow-200 text-lg">
              🏖️ Praia do Amor • Natal, RN
            </p>
          </div>

          {/* Mensagem oceânica */}
          <div className="max-w-2xl mb-12">
            <p className="text-white text-lg leading-relaxed font-nunito drop-shadow-lg">
              {welcomeMessage}
            </p>
          </div>

          {/* Portfólio estilo polaroid */}
          <div className="mb-12">
            <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="w-72 h-80 bg-white p-4 shadow-2xl">
                <div className="w-full h-64 bg-gradient-to-br from-blue-200 to-blue-400 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Waves className="w-16 h-16 text-blue-600" />
                  </div>
                  
                  {/* Reflexo da água */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </div>
                <div className="pt-3 text-center">
                  <span className="font-kaushan text-blue-800 text-lg">
                    Isabella & Gabriel
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Botão CTA oceânico */}
          <button
            onClick={handleConfirmPresence}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-12 py-4 rounded-full text-lg font-medium shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/30 backdrop-blur-sm"
          >
            ⚓ Confirmar Presença
          </button>

          {/* Scroll indicator oceânico */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center bg-blue-500/30 backdrop-blur-sm">
              <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OceanBreezeHero;