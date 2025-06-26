
import { Heart, Calendar, MapPin } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ClassicRomanticHeroProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
  templateName: string;
  quizAnswers: any;
}

const ClassicRomanticHero = ({ 
  coupleNames, 
  weddingDate, 
  welcomeMessage 
}: ClassicRomanticHeroProps) => {
  let formattedDate = '';
  try {
    formattedDate = format(new Date(weddingDate), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  } catch (error) {
    console.error('❌ Erro ao formatar data no ClassicRomanticHero:', error);
    formattedDate = weddingDate;
  }

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-300/20 to-rose-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-6 h-6 bg-rose-300 rounded-full opacity-30 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-pink-400 rounded-full opacity-40 animate-float delay-500" />
        <div className="absolute bottom-1/3 left-1/4 w-5 h-5 bg-rose-400 rounded-full opacity-25 animate-float delay-1000" />
      </div>

      {/* Ornamentos florais */}
      <div className="absolute top-20 left-20 text-6xl text-rose-300/30 font-serif transform -rotate-12">❋</div>
      <div className="absolute bottom-32 right-16 text-4xl text-pink-300/40 font-serif transform rotate-12">✿</div>
      <div className="absolute top-1/2 right-12 text-5xl text-rose-400/25 font-serif">❀</div>

      {/* Conteúdo principal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            
            {/* Badge romântico */}
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm border-2 border-rose-200 rounded-full px-8 py-4 mb-8 shadow-lg">
              <Heart className="h-6 w-6 text-rose-400" fill="currentColor" />
              <span className="font-serif text-rose-600 tracking-wider uppercase text-sm font-medium">
                Celebrando o Amor
              </span>
              <Heart className="h-6 w-6 text-rose-400" fill="currentColor" />
            </div>

            {/* Nomes do casal */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-gray-800 mb-6 tracking-tight leading-tight">
              <span className="block">
                {coupleNames}
              </span>
            </h1>

            {/* Ornamento decorativo */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent w-20"></div>
              <div className="text-3xl text-rose-400">❦</div>
              <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent w-20"></div>
            </div>

            {/* Data do casamento */}
            <div className="mb-8">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full px-6 py-3 shadow-md">
                <Calendar className="h-5 w-5 text-rose-500" />
                <span className="text-xl md:text-2xl font-serif text-gray-700 tracking-wide">
                  {formattedDate}
                </span>
              </div>
            </div>

            {/* Localização */}
            <div className="flex items-center justify-center space-x-2 text-gray-600 mb-12">
              <MapPin className="h-4 w-4 text-rose-400" />
              <span className="font-serif text-lg">
                Um dia especial para celebrar
              </span>
            </div>

            {/* Mensagem de boas-vindas */}
            <div className="max-w-3xl mx-auto mb-16">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-rose-200">
                <div className="text-4xl text-rose-300 mb-4">"</div>
                <p className="text-lg md:text-xl text-gray-700 font-serif leading-relaxed italic">
                  {welcomeMessage || "Bem-vindos ao nosso site de casamento! Estamos muito felizes em compartilhar este momento especial com vocês."}
                </p>
                <div className="text-4xl text-rose-300 text-right mt-4">"</div>
              </div>
            </div>

            {/* Call to action */}
            <div className="space-y-4">
              <a
                href="#evento"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full hover:from-rose-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg font-serif text-lg"
              >
                <Heart className="h-5 w-5 mr-2" fill="currentColor" />
                Ver Detalhes do Evento
              </a>
            </div>

            {/* Decoração inferior */}
            <div className="mt-16 flex justify-center space-x-8 text-rose-300/60">
              <div className="text-2xl animate-pulse">❋</div>
              <div className="text-xl animate-pulse delay-300">✧</div>
              <div className="text-2xl animate-pulse delay-600">❋</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ClassicRomanticHero;
