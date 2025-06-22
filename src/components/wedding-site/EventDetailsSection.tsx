
import { Calendar, MapPin, Clock, Users, Car, Music, Utensils } from "lucide-react";
import { QuizAnswers } from "@/types/quiz";
import { useModernVisualTokens } from "@/contexts/ModernVisualTokensContext";

interface EventDetailsSectionProps {
  weddingDate: string;
  templateName: string;
  quizAnswers?: QuizAnswers;
}

const EventDetailsSection = ({ weddingDate, templateName, quizAnswers }: EventDetailsSectionProps) => {
  const { templateProfile } = useModernVisualTokens();
  
  const formattedDate = new Date(weddingDate).toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const formattedTime = "15:00";

  // Informações baseadas no quiz
  const location = quizAnswers?.local || "Local a ser definido";
  const style = quizAnswers?.estilo || "Clássico";
  const tone = quizAnswers?.tom || "Elegante e formal";

  // Informações importantes melhoradas com base no template
  const getImportantInfo = () => {
    const baseInfo = [
      {
        icon: Clock,
        title: "Horário",
        description: "Cerimônia às 15:00\nRecepção às 17:00",
        color: "text-blue-600"
      },
      {
        icon: MapPin,
        title: "Local",
        description: location,
        color: "text-green-600"
      },
      {
        icon: Users,
        title: "Dress Code",
        description: tone === "Elegante e formal" ? "Traje social" : "Traje esporte fino",
        color: "text-purple-600"
      },
      {
        icon: Car,
        title: "Estacionamento",
        description: "Disponível no local\nGratuito para convidados",
        color: "text-orange-600"
      },
      {
        icon: Music,
        title: "Música",
        description: "Cerimônia: Clássica\nRecepção: Variada",
        color: "text-pink-600"
      },
      {
        icon: Utensils,
        title: "Alimentação",
        description: "Jantar completo\nBar aberto",
        color: "text-red-600"
      }
    ];

    return baseInfo;
  };

  const importantInfo = getImportantInfo();

  // Estilos baseados no template selecionado
  const getTemplateStyles = () => {
    if (!templateProfile) {
      return {
        bgClass: "bg-white",
        textClass: "text-gray-800",
        badgeClass: "bg-green-100 text-green-800",
        cardClass: "bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-lg",
        mainCardClass: "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
        accentClass: "text-green-600"
      };
    }

    switch (templateProfile.id) {
      case 'editorial-romantic':
        return {
          bgClass: "bg-gray-50",
          textClass: "text-gray-900",
          badgeClass: "bg-gray-100 text-gray-800",
          cardClass: "bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-xl",
          mainCardClass: "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300",
          accentClass: "text-gray-700"
        };
      
      case 'minimal-luxury':
        return {
          bgClass: "bg-black",
          textClass: "text-white",
          badgeClass: "bg-gray-800 text-white border border-gray-700",
          cardClass: "bg-gradient-to-br from-gray-900 to-black border-gray-800 shadow-2xl",
          mainCardClass: "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700",
          accentClass: "text-gray-300"
        };
      
      case 'boho-refined':
        return {
          bgClass: "bg-amber-50",
          textClass: "text-amber-900",
          badgeClass: "bg-amber-100 text-amber-800",
          cardClass: "bg-gradient-to-br from-white to-amber-50 border-amber-200 shadow-lg",
          mainCardClass: "bg-gradient-to-br from-amber-100 to-orange-100 border-amber-300",
          accentClass: "text-amber-700"
        };
      
      case 'classic-contemporary':
        return {
          bgClass: "bg-amber-50",
          textClass: "text-amber-900",
          badgeClass: "bg-amber-100 text-amber-800",
          cardClass: "bg-gradient-to-br from-white to-amber-50 border-amber-200 shadow-lg",
          mainCardClass: "bg-gradient-to-br from-amber-100 to-yellow-100 border-amber-300",
          accentClass: "text-amber-700"
        };
      
      case 'natural-modern':
        return {
          bgClass: "bg-green-50",
          textClass: "text-green-900",
          badgeClass: "bg-green-100 text-green-800",
          cardClass: "bg-gradient-to-br from-white to-green-50 border-green-200 shadow-lg",
          mainCardClass: "bg-gradient-to-br from-green-100 to-emerald-100 border-green-300",
          accentClass: "text-green-700"
        };
      
      case 'neutral-sophisticated':
        return {
          bgClass: "bg-gray-50",
          textClass: "text-gray-900",
          badgeClass: "bg-gray-100 text-gray-800",
          cardClass: "bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-lg",
          mainCardClass: "bg-gradient-to-br from-gray-100 to-slate-100 border-gray-300",
          accentClass: "text-gray-700"
        };
      
      default:
        return {
          bgClass: "bg-white",
          textClass: "text-gray-800",
          badgeClass: "bg-green-100 text-green-800",
          cardClass: "bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-lg",
          mainCardClass: "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
          accentClass: "text-green-600"
        };
    }
  };

  const styles = getTemplateStyles();

  return (
    <section id="details" className={`py-20 ${styles.bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center space-x-2 ${styles.badgeClass} px-4 py-2 rounded-full text-sm font-medium mb-6`}>
            <Calendar className="h-4 w-4" />
            <span>Detalhes do Evento</span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-serif ${styles.textClass} mb-6`}>
            Informações do Casamento
          </h2>
          
          <p className={`text-lg ${styles.textClass} opacity-70 max-w-3xl mx-auto`}>
            Tudo que você precisa saber para celebrar conosco este dia especial
          </p>
        </div>

        {/* Data e Local Principal */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className={`${styles.mainCardClass} rounded-2xl p-8 text-center border`}>
            <div className="mb-6">
              <Calendar className={`h-12 w-12 ${styles.accentClass} mx-auto mb-4`} />
              <h3 className={`text-3xl font-serif ${styles.textClass} mb-2`}>
                {formattedDate}
              </h3>
              <p className={`text-xl ${styles.textClass} opacity-80`}>
                às {formattedTime}
              </p>
            </div>
            
            <div className="mb-6">
              <MapPin className={`h-8 w-8 ${styles.accentClass} mx-auto mb-2`} />
              <p className={`text-lg ${styles.textClass} font-medium`}>
                {location}
              </p>
            </div>
          </div>
        </div>

        {/* Informações Importantes - Layout melhorado */}
        <div className="max-w-6xl mx-auto">
          <h3 className={`text-2xl font-serif ${styles.textClass} text-center mb-12`}>
            Informações Importantes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div 
                  key={index} 
                  className={`${styles.cardClass} rounded-xl p-6 text-center border transition-transform hover:scale-105`}
                >
                  <div className="mb-4">
                    <IconComponent className={`h-8 w-8 ${info.color} mx-auto mb-3`} />
                    <h4 className={`text-lg font-semibold ${styles.textClass} mb-2`}>
                      {info.title}
                    </h4>
                  </div>
                  
                  <p className={`${styles.textClass} opacity-80 whitespace-pre-line text-sm leading-relaxed`}>
                    {info.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mensagem adicional */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className={`${styles.cardClass} rounded-xl p-6 border`}>
            <p className={`${styles.textClass} opacity-80 leading-relaxed`}>
              <strong>Importante:</strong> Para confirmar sua presença e nos ajudar com a organização, 
              por favor responda nosso RSVP até 30 dias antes do evento. 
              Sua presença é muito importante para nós!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
