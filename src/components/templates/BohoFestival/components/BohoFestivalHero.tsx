
import { Heart, Sun, Moon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface BohoFestivalHeroProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
  templateName: string;
  quizAnswers: any;
}

const BohoFestivalHero = ({ 
  coupleNames, 
  weddingDate, 
  welcomeMessage 
}: BohoFestivalHeroProps) => {
  let formattedDate = '';
  try {
    formattedDate = format(new Date(weddingDate), "dd 'de' MMMM", { locale: ptBR });
  } catch (error) {
    console.error('❌ Erro ao formatar data no BohoFestivalHero:', error);
    formattedDate = weddingDate;
  }

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-orange-100 to-red-100">
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-orange-200/40 to-amber-200/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-br from-red-200/30 to-orange-300/30 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Elementos flutuantes */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 text-orange-400 animate-float">☽</div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 text-amber-400 animate-float delay-500">✧</div>
        <div className="absolute bottom-1/2 left-1/5 w-7 h-7 text-red-400 animate-float delay-1000">☾</div>
        <div className="absolute top-2/3 right-1/4 w-5 h-5 text-orange-500 animate-float delay-1500">✦</div>
      </div>

      {/* Ornamentos boho */}
      <div className="absolute top-32 right-20 text-6xl text-orange-300/30 transform rotate-12">❋</div>
      <div className="absolute bottom-40 left-16 text-5xl text-amber-400/40 transform -rotate-12">✿</div>

      {/* Conteúdo principal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            
            {/* Badge festival */}
            <div className="inline-flex items-center space-x-4 bg-white/70 backdrop-blur-sm border-2 border-orange-200 rounded-full px-8 py-4 mb-8 shadow-lg">
              <Sun className="h-6 w-6 text-orange-500" />
              <span className="font-cursive text-orange-700 text-lg font-medium">
                Festival de Amor
              </span>
              <Moon className="h-6 w-6 text-orange-500" />
            </div>

            {/* Nomes do casal */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-cursive text-orange-800 mb-8 leading-tight">
              {coupleNames}
            </h1>

            {/* Ornamento decorativo */}
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent w-24"></div>
              <div className="flex space-x-2">
                <div className="text-2xl text-orange-500">☽</div>
                <div className="text-xl text-amber-500">✧</div>
                <div className="text-2xl text-orange-500">☾</div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent w-24"></div>
            </div>

            {/* Data do casamento */}
            <div className="mb-8">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-8 py-4 shadow-md border border-orange-200">
                <span className="text-xl md:text-2xl text-orange-700 font-medium">
                  {formattedDate}
                </span>
              </div>
            </div>

            {/* Mensagem de boas-vindas */}
            <div className="max-w-3xl mx-auto mb-16">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-orange-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-amber-400 to-red-400"></div>
                <p className="text-lg md:text-xl text-orange-800 leading-relaxed">
                  {welcomeMessage || "Venham celebrar conosco este momento mágico! Preparem-se para uma festa cheia de amor, música e boas vibrações em harmonia com a natureza."}
                </p>
              </div>
            </div>

            {/* Call to actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#evento"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-400 to-amber-400 text-white rounded-full hover:from-orange-500 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium text-lg"
              >
                <Heart className="h-5 w-5 mr-2" fill="currentColor" />
                Ver Celebração
              </a>
              
              <a
                href="#dresscode"
                className="inline-flex items-center px-8 py-4 bg-white/80 text-orange-700 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg font-medium text-lg border-2 border-orange-200"
              >
                ✨ Dress Code
              </a>
            </div>

            {/* Decoração inferior */}
            <div className="mt-16 flex justify-center space-x-8 text-orange-400/60">
              <div className="text-2xl animate-pulse">☽</div>
              <div className="text-xl animate-pulse delay-300">✧</div>
              <div className="text-2xl animate-pulse delay-600">☾</div>
              <div className="text-xl animate-pulse delay-900">✦</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');
        
        .font-cursive {
          font-family: 'Dancing Script', cursive;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default BohoFestivalHero;
