import { Calendar, ArrowRight } from "lucide-react";

interface ModernMinimalistHeroProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
}

const ModernMinimalistHero = ({ coupleNames, weddingDate, welcomeMessage }: ModernMinimalistHeroProps) => {
  const formattedDate = new Date(weddingDate).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const handleConfirmPresence = () => {
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-slate-50">
      {/* Grid geométrico sutil */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(44, 62, 80, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(44, 62, 80, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Elementos geométricos */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-1 h-32 bg-slate-300"></div>
        <div className="absolute top-32 right-20 w-32 h-1 bg-slate-300"></div>
        <div className="absolute bottom-40 left-20 w-1 h-24 bg-red-400"></div>
        <div className="absolute bottom-40 left-20 w-24 h-1 bg-red-400"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 min-h-screen items-center">
          {/* Conteúdo textual */}
          <div className="space-y-8">
            {/* Badge minimalista */}
            <div className="inline-flex items-center space-x-2 bg-slate-800 text-white px-4 py-2 text-sm font-medium">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>

            {/* Nomes - tipografia limpa */}
            <div>
              <h1 className="font-poppins text-6xl md:text-8xl font-light text-slate-800 leading-none mb-4">
                {coupleNames.split(' & ')[0]}
              </h1>
              <div className="flex items-center space-x-6 mb-4">
                <div className="h-px bg-slate-300 flex-1"></div>
                <span className="font-poppins text-2xl text-slate-600 font-light">&</span>
                <div className="h-px bg-slate-300 flex-1"></div>
              </div>
              <h1 className="font-poppins text-6xl md:text-8xl font-light text-slate-800 leading-none">
                {coupleNames.split(' & ')[1]}
              </h1>
            </div>

            {/* Mensagem minimalista */}
            <div className="max-w-lg">
              <p className="font-inter text-lg text-slate-600 leading-relaxed">
                {welcomeMessage}
              </p>
            </div>

            {/* Botão CTA limpo */}
            <button
              onClick={handleConfirmPresence}
              className="group inline-flex items-center space-x-3 bg-slate-800 hover:bg-red-600 text-white px-8 py-4 transition-all duration-300"
            >
              <span className="font-poppins font-medium">Confirmar Presença</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Informações adicionais */}
            <div className="pt-8 space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-px bg-red-400"></div>
                <span className="font-inter text-sm text-slate-500">São Paulo, Brasil</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-px bg-red-400"></div>
                <span className="font-inter text-sm text-slate-500">16:00 - 23:00</span>
              </div>
            </div>
          </div>

          {/* Área visual minimalista */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Container principal */}
              <div className="w-96 h-96 relative">
                {/* Foto principal */}
                <div className="w-80 h-80 bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-400/10 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-slate-400 rounded-full mx-auto mb-4"></div>
                      <span className="font-poppins text-slate-600 text-sm">I & G</span>
                    </div>
                  </div>
                </div>

                {/* Elemento geométrico sobreposto */}
                <div className="absolute top-16 right-0 w-32 h-32 bg-red-500 opacity-90"></div>
                
                {/* Label minimalista */}
                <div className="absolute bottom-0 left-0 bg-slate-800 text-white px-6 py-3">
                  <span className="font-poppins text-sm font-light">
                    Isabella & Gabriel
                  </span>
                </div>

                {/* Elementos decorativos geométricos */}
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-2 border-slate-400"></div>
                <div className="absolute -top-4 -left-4 w-6 h-6 bg-slate-800"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator minimalista */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-slate-300 relative">
            <div className="absolute bottom-0 w-px h-4 bg-slate-800 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernMinimalistHero;