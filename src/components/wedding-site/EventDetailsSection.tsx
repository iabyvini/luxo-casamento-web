
import { MapPin, Clock, Heart, Car, Gift, Music } from "lucide-react";
import { getTemplateColors } from "@/utils/templateMapping";

interface EventDetailsSectionProps {
  weddingDate: string;
  templateName: string;
}

const EventDetailsSection = ({ weddingDate, templateName }: EventDetailsSectionProps) => {
  const colors = getTemplateColors(templateName);
  const formattedDate = new Date(weddingDate).toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const eventDetails = [
    {
      id: 'ceremony',
      title: 'Cerimônia',
      location: 'Igreja São José',
      address: 'Rua das Flores, 123 - Centro',
      time: '16:00',
      icon: Heart,
      description: 'Momento sagrado da nossa união',
      color: colors[0],
      features: ['Música ao vivo', 'Fotógrafo profissional', 'Pétalas de rosa']
    },
    {
      id: 'reception',
      title: 'Recepção',
      location: 'Fazenda Vista Alegre',
      address: 'Estrada Rural, Km 15 - Zona Rural',
      time: '18:00',
      icon: MapPin,
      description: 'Celebração com família e amigos',
      color: colors[1],
      features: ['Coquetel de boas-vindas', 'Jantar servido', 'Área externa']
    },
    {
      id: 'party',
      title: 'Festa',
      location: 'Salão Dourado',
      address: 'Av. Celebration, 456 - Jardim Alegria',
      time: '20:00',
      icon: Music,
      description: 'Diversão garantida até o amanhecer',
      color: colors[2] || colors[0],
      features: ['DJ profissional', 'Pista de dança', 'Bar completo']
    }
  ];

  const additionalInfo = [
    {
      icon: Car,
      title: 'Estacionamento',
      description: 'Estacionamento gratuito disponível em todos os locais'
    },
    {
      icon: Gift,
      title: 'Lista de Presentes',
      description: 'Sua presença já é nosso maior presente'
    }
  ];

  return (
    <section id="details" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brown-50 border border-brown-200 rounded-full px-6 py-3 mb-6">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-medium text-brown-700">Detalhes do Evento</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Nosso Grande Dia
          </h2>
          
          <p className="text-lg text-brown-600 mb-4 capitalize">
            {formattedDate}
          </p>
          
          <p className="text-brown-500 max-w-2xl mx-auto">
            Prepare-se para um dia repleto de amor, alegria e momentos inesquecíveis. 
            Aqui estão todos os detalhes para você não perder nada!
          </p>
        </div>

        {/* Timeline dos Eventos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {eventDetails.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <div key={event.id} className="relative group">
                {/* Timeline connector */}
                {index < eventDetails.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-luxury transform -translate-x-4 z-0"></div>
                )}
                
                <div className="luxury-card rounded-2xl p-8 text-center relative z-10 group-hover:scale-105 transition-all duration-300">
                  {/* Icon with color */}
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 luxury-shadow"
                    style={{ backgroundColor: event.color }}
                  >
                    <IconComponent className="h-8 w-8 text-white" fill={event.icon === Heart ? "currentColor" : "none"} />
                  </div>
                  
                  {/* Event Info */}
                  <h3 className="text-2xl font-bold text-brown-800 mb-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-brown-600 mb-4 italic">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-brown-700">
                      <Clock className="h-4 w-4" />
                      <span className="font-semibold text-lg">{event.time}</span>
                    </div>
                    
                    <div className="text-brown-600">
                      <p className="font-medium">{event.location}</p>
                      <p className="text-sm">{event.address}</p>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {event.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2 text-sm text-brown-500">
                        <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informações Adicionais */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-brown-800 mb-8">
            Informações Importantes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {additionalInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="flex items-start space-x-4 bg-gradient-to-r from-brown-50 to-gold-50 rounded-xl p-6">
                  <div className="w-10 h-10 bg-gradient-luxury rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-800 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-brown-600 text-sm">
                      {info.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dress Code */}
          <div className="text-center bg-gradient-to-r from-brown-50 to-gold-50 rounded-2xl p-8 border border-brown-200">
            <h4 className="text-xl font-bold text-brown-800 mb-4">
              Dress Code
            </h4>
            <p className="text-brown-600 mb-4">
              Traje social/esporte fino. Sugerimos tons terrosos e dourados para harmonizar com nossa paleta.
            </p>
            <div className="flex items-center justify-center space-x-3">
              {colors.map((color, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: color }}
                  ></div>
                  {index < colors.length - 1 && <span className="text-brown-400">•</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
