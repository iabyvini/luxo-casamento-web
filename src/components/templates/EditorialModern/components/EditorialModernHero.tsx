
import { ArrowDown } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface EditorialModernHeroProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
  templateName: string;
  quizAnswers: any;
}

const EditorialModernHero = ({ 
  coupleNames, 
  weddingDate, 
  welcomeMessage 
}: EditorialModernHeroProps) => {
  let formattedDate = '';
  try {
    formattedDate = format(new Date(weddingDate), "dd.MM.yyyy", { locale: ptBR });
  } catch (error) {
    console.error('❌ Erro ao formatar data no EditorialModernHero:', error);
    formattedDate = weddingDate;
  }

  const handleScrollToNext = () => {
    const nextSection = document.querySelector('#manifesto, #countdown');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Grid de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-px h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="bg-white/5 border border-white/10" />
          ))}
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Coluna esquerda - Texto */}
            <div className="space-y-12">
              <div>
                <div className="text-sm tracking-[0.3em] text-gray-400 mb-4 uppercase">
                  Wedding Editorial
                </div>
                
                <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight mb-8">
                  {coupleNames.split(' ').map((name, index) => (
                    <div key={index} className={index % 2 === 0 ? 'text-white' : 'text-gray-300'}>
                      {name}
                    </div>
                  ))}
                </h1>

                <div className="text-2xl md:text-3xl font-light tracking-wider text-gray-300">
                  {formattedDate}
                </div>
              </div>

              <div className="max-w-md">
                <p className="text-lg leading-relaxed text-gray-300 font-light">
                  {welcomeMessage || "Um editorial sobre amor, compromisso e a celebração de dois corações que se tornaram um."}
                </p>
              </div>

              <div className="pt-8">
                <button
                  onClick={handleScrollToNext}
                  className="group flex items-center space-x-4 text-white hover:text-gray-300 transition-colors"
                >
                  <span className="text-sm tracking-[0.2em] uppercase">Explore</span>
                  <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Coluna direita - Visual */}
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 rounded-none">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-sm tracking-[0.2em] text-white/70 uppercase mb-2">
                    Issue #001
                  </div>
                  <div className="text-2xl font-light text-white">
                    Love Story
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-white/20" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10" />
            </div>
          </div>

          {/* Rodapé da hero */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex justify-between items-center text-sm text-gray-400 tracking-wider">
              <div>VOLUME I</div>
              <div className="flex space-x-8">
                <div>WEDDING</div>
                <div>EDITORIAL</div>
                <div>{new Date().getFullYear()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default EditorialModernHero;
