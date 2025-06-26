
import { Heart } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface DefaultHeroProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
  templateName: string;
  quizAnswers: any;
}

const DefaultHero = ({ 
  coupleNames, 
  weddingDate, 
  welcomeMessage 
}: DefaultHeroProps) => {
  let formattedDate = '';
  try {
    formattedDate = format(new Date(weddingDate), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  } catch (error) {
    console.error('❌ Erro ao formatar data no DefaultHero:', error);
    formattedDate = weddingDate;
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Heart className="w-16 h-16 text-rose-500 mx-auto mb-6 animate-pulse" fill="currentColor" />
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-brown-800 mb-4">
              {coupleNames}
            </h1>
            <p className="text-xl md:text-2xl text-brown-600 mb-6">
              {formattedDate}
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <p className="text-lg md:text-xl text-brown-700 leading-relaxed">
              {welcomeMessage || "Bem-vindos ao nosso site de casamento! Estamos muito felizes em compartilhar este momento especial com vocês."}
            </p>
          </div>

          <div className="mt-8">
            <a
              href="#evento"
              className="inline-flex items-center px-8 py-3 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors"
            >
              Ver Detalhes do Evento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefaultHero;
