import React from 'react';
import { Heart, Calendar, MapPin, Mail, Phone, Clock } from 'lucide-react';

interface EternalLoveFooterProps {
  coupleNames: string;
  weddingDate: string;
  eventDetails?: {
    ceremony?: {
      location: string;
      address: string;
      time: string;
    };
    reception?: {
      location: string;
      address: string;
      time: string;
    };
  };
}

const EternalLoveFooter = ({ coupleNames, weddingDate, eventDetails }: EternalLoveFooterProps) => {
  const formattedDate = new Date(weddingDate).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <footer className="bg-gradient-to-br from-[#8B4B5C] via-[#7A4250] to-[#6B3A45] text-white relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#D4AF8C] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        
        {/* Main Footer Content */}
        <div className="text-center mb-16">
          
          {/* Couple Names and Date */}
          <div className="mb-12 eternal-love-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-white/30 w-20"></div>
              <Heart className="mx-4 w-8 h-8 fill-current animate-pulse" />
              <div className="h-px bg-white/30 w-20"></div>
            </div>
            
            <h2 className="font-['Crimson_Text'] text-4xl md:text-5xl mb-6 font-semibold">
              {coupleNames}
            </h2>
            
            <div className="flex items-center justify-center text-white/90 mb-8">
              <Calendar className="w-5 h-5 mr-3" />
              <span className="font-['Libre_Baskerville'] text-xl">{formattedDate}</span>
            </div>
          </div>

          {/* Event Details */}
          {eventDetails && (
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 eternal-love-scale-in">
              {eventDetails.ceremony && (
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="font-['Crimson_Text'] text-2xl mb-6 text-[#E8D5C4] font-semibold">
                    Cerimônia
                  </h3>
                  <div className="space-y-4 text-left">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 mt-1 text-[#D4AF8C] flex-shrink-0" />
                      <div>
                        <p className="font-['Libre_Baskerville'] font-medium text-white">
                          {eventDetails.ceremony.location}
                        </p>
                        <p className="font-['Libre_Baskerville'] text-sm text-white/80 mt-1">
                          {eventDetails.ceremony.address}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-[#D4AF8C]" />
                      <span className="font-['Libre_Baskerville'] text-white/90">
                        {eventDetails.ceremony.time}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {eventDetails.reception && (
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="font-['Crimson_Text'] text-2xl mb-6 text-[#E8D5C4] font-semibold">
                    Recepção
                  </h3>
                  <div className="space-y-4 text-left">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 mt-1 text-[#D4AF8C] flex-shrink-0" />
                      <div>
                        <p className="font-['Libre_Baskerville'] font-medium text-white">
                          {eventDetails.reception.location}
                        </p>
                        <p className="font-['Libre_Baskerville'] text-sm text-white/80 mt-1">
                          {eventDetails.reception.address}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-[#D4AF8C]" />
                      <span className="font-['Libre_Baskerville'] text-white/90">
                        {eventDetails.reception.time}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Contact Information */}
          <div className="mb-16 eternal-love-fade-in">
            <h3 className="font-['Crimson_Text'] text-2xl mb-8 text-[#E8D5C4] font-semibold">
              Entre em Contato
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
              <a 
                href="mailto:contato@casamento.com" 
                className="flex items-center text-white/90 hover:text-white transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span className="font-['Libre_Baskerville']">contato@casamento.com</span>
              </a>
              <a 
                href="tel:+5511999999999" 
                className="flex items-center text-white/90 hover:text-white transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span className="font-['Libre_Baskerville']">(11) 99999-9999</span>
              </a>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="max-w-3xl mx-auto mb-12 eternal-love-fade-in">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <p className="font-['Amatic_SC'] text-2xl md:text-3xl text-[#E8D5C4] leading-relaxed font-bold">
                "Obrigado por fazer parte da nossa história de amor.<br />
                Sua presença torna este momento ainda mais especial."
              </p>
            </div>
          </div>

          {/* Decorative hearts */}
          <div className="flex justify-center space-x-4 mb-12">
            {[...Array(7)].map((_, i) => (
              <Heart 
                key={i}
                className="w-4 h-4 text-[#D4AF8C] fill-current animate-pulse"
                style={{ 
                  animationDelay: `${i * 0.2}s`,
                  opacity: 0.5 + (i % 3) * 0.2
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="font-['Libre_Baskerville'] text-white/80 text-sm mb-4 md:mb-0">
              © 2024 {coupleNames} - Todos os direitos reservados
            </p>
            
            <div className="flex items-center text-white/80 text-sm">
              <span className="font-['Libre_Baskerville'] mr-2">Feito com</span>
              <Heart className="w-4 h-4 fill-current mx-1 animate-pulse text-[#D4AF8C]" />
              <span className="font-['Libre_Baskerville'] ml-2">para nosso amor eterno</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EternalLoveFooter;