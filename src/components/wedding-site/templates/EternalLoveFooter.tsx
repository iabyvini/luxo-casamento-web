import React from 'react';
import { Heart, Calendar, MapPin, Mail, Phone } from 'lucide-react';

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
    <footer className="bg-gradient-to-br from-pink-600 to-pink-700 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-white rounded-full"></div>
        
        {/* Floral pattern */}
        <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-white" viewBox="0 0 200 200">
          <path d="M100 20 Q150 60 100 100 Q50 60 100 20 Q140 140 100 180 Q60 140 100 100" fill="currentColor" />
          <circle cx="100" cy="60" r="8" fill="currentColor" />
          <circle cx="100" cy="140" r="8" fill="currentColor" />
          <circle cx="60" cy="100" r="6" fill="currentColor" />
          <circle cx="140" cy="100" r="6" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          {/* Couple Names */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-white/30 w-16"></div>
              <Heart className="mx-4 w-8 h-8 fill-current animate-pulse" />
              <div className="h-px bg-white/30 w-16"></div>
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl mb-4">
              {coupleNames}
            </h2>
            
            <div className="flex items-center justify-center text-pink-100 mb-6">
              <Calendar className="w-5 h-5 mr-3" />
              <span className="font-lora text-lg">{formattedDate}</span>
            </div>
          </div>

          {/* Event Details */}
          {eventDetails && (
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {eventDetails.ceremony && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="font-playfair text-2xl mb-4 text-pink-100">Cerimônia</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 mt-1 text-pink-200 flex-shrink-0" />
                      <div>
                        <p className="font-lora font-medium">{eventDetails.ceremony.location}</p>
                        <p className="font-lora text-sm text-pink-100">{eventDetails.ceremony.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-3 text-pink-200" />
                      <span className="font-lora">{eventDetails.ceremony.time}</span>
                    </div>
                  </div>
                </div>
              )}

              {eventDetails.reception && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="font-playfair text-2xl mb-4 text-pink-100">Recepção</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 mt-1 text-pink-200 flex-shrink-0" />
                      <div>
                        <p className="font-lora font-medium">{eventDetails.reception.location}</p>
                        <p className="font-lora text-sm text-pink-100">{eventDetails.reception.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-3 text-pink-200" />
                      <span className="font-lora">{eventDetails.reception.time}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Contact Information */}
          <div className="mb-12">
            <h3 className="font-playfair text-2xl mb-6 text-pink-100">Entre em Contato</h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <a 
                href="mailto:contato@casamento.com" 
                className="flex items-center text-pink-100 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-5 h-5 mr-3" />
                <span className="font-lora">contato@casamento.com</span>
              </a>
              <a 
                href="tel:+5511999999999" 
                className="flex items-center text-pink-100 hover:text-white transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-3" />
                <span className="font-lora">(11) 99999-9999</span>
              </a>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="max-w-2xl mx-auto mb-8">
            <p className="font-dancing text-2xl md:text-3xl text-pink-100 leading-relaxed">
              "Obrigado por fazer parte da nossa história de amor. 
              Sua presença torna este momento ainda mais especial."
            </p>
          </div>

          {/* Hearts decoration */}
          <div className="flex justify-center space-x-3 mb-8">
            {[...Array(7)].map((_, i) => (
              <Heart 
                key={i}
                className="w-4 h-4 text-pink-200 fill-current animate-pulse"
                style={{ 
                  animationDelay: `${i * 0.3}s`,
                  opacity: 0.6 + (i % 3) * 0.2
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="font-lora text-pink-100 text-sm mb-4 md:mb-0">
              © 2024 {coupleNames} - Todos os direitos reservados
            </p>
            
            <div className="flex items-center text-pink-100 text-sm">
              <span className="font-lora mr-2">Feito com</span>
              <Heart className="w-4 h-4 fill-current mx-1 animate-pulse" />
              <span className="font-lora ml-2">para nosso amor eterno</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EternalLoveFooter;