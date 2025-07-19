import React from 'react';
import { Heart, Calendar, ArrowDown } from 'lucide-react';

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
    <section id="home" className="eternal-love-hero min-h-screen relative flex items-center justify-center">
      {/* Elementos decorativos sutis */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#D4AF8C]/20 to-[#8B4B5C]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#8B4B5C]/15 to-[#E8D5C4]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-[#E8D5C4]/20 to-[#D4AF8C]/15 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Ornamento superior */}
          <div className="eternal-love-fade-in mb-8" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#8B4B5C]/30 to-transparent w-20"></div>
              <div className="mx-4 w-3 h-3 bg-[#D4AF8C] rounded-full"></div>
              <Heart className="w-6 h-6 text-[#8B4B5C] fill-current mx-2" />
              <div className="mx-4 w-3 h-3 bg-[#D4AF8C] rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-[#8B4B5C]/30 to-transparent w-20"></div>
            </div>
          </div>

          {/* Nomes do casal */}
          <div className="eternal-love-fade-in mb-12" style={{ animationDelay: '0.4s' }}>
            <h1 className="font-['Crimson_Text'] text-5xl md:text-7xl lg:text-8xl font-semibold text-[#8B4B5C] mb-4 leading-tight tracking-wide">
              {coupleNames}
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-[#D4AF8C] to-[#8B4B5C] mx-auto"></div>
          </div>

          {/* Data do casamento */}
          <div className="eternal-love-fade-in mb-12" style={{ animationDelay: '0.6s' }}>
            <div className="inline-flex items-center bg-white/60 backdrop-blur-sm px-8 py-4 rounded-full border border-[#8B4B5C]/20 shadow-lg">
              <Calendar className="w-5 h-5 text-[#8B4B5C] mr-3" />
              <span className="font-['Libre_Baskerville'] text-lg font-medium text-[#2C2C2C]">
                {formattedDate}
              </span>
            </div>
          </div>

          {/* Mensagem de boas-vindas */}
          <div className="eternal-love-fade-in mb-12" style={{ animationDelay: '0.8s' }}>
            <div className="max-w-2xl mx-auto">
              <p className="font-['Libre_Baskerville'] text-lg leading-relaxed text-[#6B6B6B] italic">
                {welcomeMessage}
              </p>
            </div>
          </div>

          {/* Foto do casal - placeholder elegante */}
          <div className="eternal-love-scale-in mb-12" style={{ animationDelay: '1s' }}>
            <div className="relative w-80 h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8D5C4] to-[#D4AF8C] rounded-2xl shadow-2xl"></div>
              <div className="absolute inset-2 bg-white/80 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-16 h-16 text-[#8B4B5C]/40 fill-current mx-auto mb-4" />
                  <p className="font-['Amatic_SC'] text-2xl text-[#8B4B5C] font-bold">
                    Nossa Foto
                  </p>
                </div>
              </div>
              {/* Ornamento da foto */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#D4AF8C] rounded-full"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#8B4B5C] rounded-full"></div>
            </div>
          </div>

          {/* Botão CTA */}
          <div className="eternal-love-fade-in mb-16" style={{ animationDelay: '1.2s' }}>
            <button
              onClick={handleConfirmPresence}
              className="eternal-love-button px-12 py-4 rounded-full text-lg font-['Libre_Baskerville'] font-medium shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#8B4B5C]/20"
            >
              Confirmar Presença
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="eternal-love-fade-in" style={{ animationDelay: '1.4s' }}>
            <div className="flex flex-col items-center">
              <span className="font-['Amatic_SC'] text-[#8B4B5C] text-lg mb-2">
                Deslize para baixo
              </span>
              <ArrowDown className="w-5 h-5 text-[#8B4B5C] animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EternalLoveHero;