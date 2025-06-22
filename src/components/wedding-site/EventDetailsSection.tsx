import { Calendar, Clock, MapPin, Users, Camera, Music, Utensils } from "lucide-react";
import { QuizAnswers } from "@/types/quiz";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface EventDetailsSectionProps {
  weddingDate: string;
  templateName: string;
  quizAnswers: QuizAnswers;
  customContent?: {
    enabled?: boolean;
    title?: string;
    ceremony_time?: string;
    ceremony_location?: string;
    reception_time?: string;
    dress_code?: {
      title?: string;
      description?: string;
      suggestions?: string[];
    };
    special_notes?: string[];
  };
}

const EventDetailsSection = ({ weddingDate, templateName, quizAnswers, customContent }: EventDetailsSectionProps) => {
  // Se a seção está desabilitada, não renderizar
  if (customContent?.enabled === false) {
    return null;
  }

  const formattedDate = format(new Date(weddingDate), 'EEEE, dd \'de\' MMMM \'de\' yyyy', { locale: ptBR });
  const formattedTime = format(new Date(weddingDate), 'HH:mm', { locale: ptBR });

  const getEventDetails = (template: string, quiz: QuizAnswers) => {
    const baseDetails = {
      ceremony: {
        time: customContent?.ceremony_time || "16:00",
        duration: "45 minutos",
        location: customContent?.ceremony_location || quiz.local || "Local a ser confirmado"
      },
      reception: {
        time: customContent?.reception_time || "17:00", 
        duration: "Até 01:00",
        location: "Mesmo local da cerimônia"
      },
      dressCode: customContent?.dress_code || getDressCode(template, quiz),
      specialNotes: customContent?.special_notes || getSpecialNotes(template, quiz)
    };

    return baseDetails;
  };

  const getDressCode = (template: string, quiz: QuizAnswers) => {
    if (quiz.local === "Igreja") {
      return {
        title: "Traje Social Elegante",
        description: "Cores neutras ou pastéis. Evitar decotes e ombros descobertos na cerimônia.",
        suggestions: ["Homens: terno ou blazer", "Mulheres: vestido midi ou longo", "Evitar: branco, bege claro"]
      };
    }

    if (quiz.local === "Praia") {
      return {
        title: "Traje Esporte Fino",
        description: "Roupas leves e confortáveis para ambiente ao ar livre.",
        suggestions: ["Homens: camisa social e calça", "Mulheres: vestido leve", "Sapatos baixos recomendados"]
      };
    }

    return {
      title: "Traje Passeio Completo",
      description: "Elegante mas confortável para celebrar conosco.",
      suggestions: ["Cores permitidas: todas exceto branco", "Traje festivo bem-vindo", "Conforto é essencial"]
    };
  };

  const getSpecialNotes = (template: string, quiz: QuizAnswers) => {
    const notes = [];
    
    if (quiz.local === "Fazenda") {
      notes.push("Evento ao ar livre - traga um casaquinho para a noite");
    }
    
    if (quiz.local === "Praia") {
      notes.push("Cerimônia na areia - evite saltos muito altos");
    }

    if (template === "Bohemian Dream") {
      notes.push("Celebração livre e descontraída - venha com o coração aberto");
    }

    notes.push("Confirmação de presença até 30 dias antes do evento");
    
    return notes;
  };

  const eventDetails = getEventDetails(templateName, quizAnswers);
  const sectionTitle = customContent?.title || "Informações Importantes";

  return (
    <section id="details" className="py-20 bg-gradient-to-br from-brown-50 to-gold-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-brown-200 rounded-full px-6 py-3 mb-6">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="font-medium text-brown-700">Detalhes do Evento</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {sectionTitle}
          </h2>
          
          <p className="text-lg text-brown-600 max-w-2xl mx-auto">
            Tudo que você precisa saber para celebrar conosco este momento especial.
          </p>
        </div>

        {/* Data e Local Principal */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="luxury-card rounded-2xl p-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center luxury-shadow">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-brown-600 uppercase tracking-wider">Data</p>
                  <p className="text-lg font-bold text-brown-800 capitalize">{formattedDate}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center luxury-shadow">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-brown-600 uppercase tracking-wider">Local</p>
                  <p className="text-lg font-bold text-brown-800">{eventDetails.ceremony.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline do Evento */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-brown-800 text-center mb-8">
            Programação do Dia
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cerimônia */}
            <div className="luxury-card rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-luxury rounded-full flex items-center justify-center mr-4">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brown-800">Cerimônia</h4>
                  <p className="text-brown-600">{eventDetails.ceremony.time}</p>
                </div>
              </div>
              
              <div className="space-y-2 text-brown-600">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Duração: {eventDetails.ceremony.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{eventDetails.ceremony.location}</span>
                </div>
              </div>
            </div>

            {/* Recepção */}
            <div className="luxury-card rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-luxury rounded-full flex items-center justify-center mr-4">
                  <Music className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brown-800">Recepção</h4>
                  <p className="text-brown-600">{eventDetails.reception.time}</p>
                </div>
              </div>
              
              <div className="space-y-2 text-brown-600">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Duração: {eventDetails.reception.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Utensils className="h-4 w-4" />
                  <span>Jantar + Festa</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dress Code */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="luxury-card rounded-xl p-8">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brown-800 mb-2">
                {eventDetails.dressCode.title}
              </h3>
              <p className="text-brown-600">
                {eventDetails.dressCode.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {eventDetails.dressCode.suggestions.map((suggestion, index) => (
                <div key={index} className="bg-brown-50 rounded-lg p-4 text-center">
                  <p className="text-brown-700 font-medium">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Observações Especiais */}
        {eventDetails.specialNotes.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <div className="luxury-card rounded-xl p-8">
              <h3 className="text-xl font-bold text-brown-800 mb-4 text-center">
                Observações Importantes
              </h3>
              
              <div className="space-y-3">
                {eventDetails.specialNotes.map((note, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-brown-600">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventDetailsSection;
