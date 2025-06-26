
import { Zap, Sparkles, ArrowDown } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface NeonPopChicHeroProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
  templateName: string;
  quizAnswers: any;
}

const NeonPopChicHero = ({ 
  coupleNames, 
  weddingDate, 
  welcomeMessage 
}: NeonPopChicHeroProps) => {
  let formattedDate = '';
  try {
    formattedDate = format(new Date(weddingDate), "dd.MM.yyyy", { locale: ptBR });
  } catch (error) {
    console.error('❌ Erro ao formatar data no NeonPopChicHero:', error);
    formattedDate = weddingDate;
  }

  const handleScrollToNext = () => {
    const nextSection = document.querySelector('#countdown, #couple');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-purple-900/30 to-black">
      {/* Grid cyberpunk de fundo */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-8 gap-1 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="bg-gradient-to-b from-pink-500/10 to-purple-500/10 border border-pink-500/20 animate-pulse" style={{ animationDelay: `${i * 50}ms` }} />
          ))}
        </div>
      </div>

      {/* Elementos neon flutuantes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-pink-500 rounded-full animate-ping neon-glow" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-500 rounded-full animate-pulse neon-glow delay-500" />
        <div className="absolute bottom-1/3 left-1/5 w-5 h-5 bg-pink-400 rounded-full animate-bounce neon-glow delay-1000" />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping neon-glow delay-1500" />
      </div>

      {/* Linhas neon */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-500/50 to-transparent animate-pulse" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent animate-pulse delay-1000" />

      {/* Conteúdo principal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-6xl mx-auto">
            
            {/* Badge futurista */}
            <div className="inline-flex items-center space-x-4 bg-black/80 backdrop-blur-sm border-2 border-pink-500 rounded-lg px-8 py-4 mb-8 neon-glow">
              <Zap className="h-6 w-6 text-pink-500 animate-pulse" fill="currentColor" />
              <span className="font-futuristic text-pink-400 text-sm tracking-[0.3em] uppercase font-bold">
                Digital Love Story
              </span>
              <Sparkles className="h-6 w-6 text-purple-500 animate-pulse" />
            </div>

            {/* Nomes do casal */}
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-futuristic font-black text-white mb-8 leading-none tracking-tight neon-text">
              {coupleNames.split(' ').map((name, index) => (
                <div key={index} className={`${index % 2 === 0 ? 'text-pink-500' : 'text-purple-400'} neon-text-strong`}>
                  {name.toUpperCase()}
                </div>
              ))}
            </h1>

            {/* Data em formato digital */}
            <div className="mb-8">
              <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg px-8 py-4 border border-pink-500/50 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-futuristic font-bold text-pink-400 tracking-wider">
                  {formattedDate}
                </div>
                <div className="w-px h-8 bg-gradient-to-b from-pink-500 to-purple-500" />
                <div className="text-lg font-futuristic text-purple-400 tracking-widest">
                  SAVE THE DATE
                </div>
              </div>
            </div>

            {/* Mensagem cyberpunk */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 border border-pink-500/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse" />
                <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-pink-500 to-purple-500 animate-pulse delay-500" />
                
                <p className="text-lg md:text-xl text-white leading-relaxed font-medium">
                  {welcomeMessage || "Conectem-se conosco nesta celebração futurística do amor! Uma experiência única onde tecnologia e emoção se encontram para criar memórias inesquecíveis."}
                </p>
              </div>
            </div>

            {/* Botões neon */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={handleScrollToNext}
                className="group relative px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-futuristic font-bold text-lg tracking-wider hover:scale-105 transition-all duration-300 neon-glow"
              >
                <span className="relative z-10">ENTER THE EXPERIENCE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              </button>
              
              <a
                href="#countdown"
                className="px-10 py-4 bg-transparent border-2 border-pink-500 text-pink-400 rounded-lg font-futuristic font-bold text-lg tracking-wider hover:bg-pink-500/10 hover:scale-105 transition-all duration-300"
              >
                COUNTDOWN TIMER
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-futuristic text-gray-400 tracking-widest uppercase mb-2">
                Scroll Down
              </span>
              <ArrowDown className="h-6 w-6 text-pink-500 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
        
        .font-futuristic {
          font-family: 'Orbitron', monospace;
        }
        
        .neon-text {
          text-shadow: 0 0 10px #ff1493, 0 0 20px #ff1493, 0 0 30px #ff1493;
        }
        
        .neon-text-strong {
          text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor;
        }
        
        .neon-glow {
          box-shadow: 0 0 10px #ff1493, 0 0 20px #ff1493, 0 0 30px #ff1493;
        }
      `}</style>
    </section>
  );
};

export default NeonPopChicHero;
