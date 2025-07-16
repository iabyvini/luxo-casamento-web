import { Trees, Calendar, MapPin } from "lucide-react";

interface RusticCharmHeroProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
}

const RusticCharmHero = ({ coupleNames, weddingDate, welcomeMessage }: RusticCharmHeroProps) => {
  const formattedDate = new Date(weddingDate).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const handleConfirmPresence = () => {
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background com textura de madeira */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.7), rgba(160, 82, 45, 0.6)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23D2691E"/><path d="M0 0h100v10H0zM0 20h100v10H0zM0 40h100v10H0zM0 60h100v10H0zM0 80h100v10H0z" fill="%23A0522D" opacity="0.3"/></svg>')`
        }}
      />

      {/* Elementos naturais */}
      <div className="absolute inset-0">
        <Trees className="absolute top-20 left-10 w-12 h-12 text-green-600 opacity-60" />
        <Trees className="absolute top-32 right-20 w-16 h-16 text-green-700 opacity-40" />
        <Trees className="absolute bottom-40 left-1/4 w-10 h-10 text-green-800 opacity-50" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Conteúdo principal */}
          <div className="lg:w-1/2 text-white mb-12 lg:mb-0">
            {/* Badge rústico */}
            <div className="inline-flex items-center space-x-2 bg-yellow-800/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-yellow-600/50 mb-6">
              <Trees className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">Casamento no Campo</span>
            </div>

            {/* Nomes do casal */}
            <h1 className="font-merriweather text-5xl md:text-7xl font-bold mb-6 leading-tight text-yellow-100">
              {coupleNames}
            </h1>

            {/* Decoração rústica */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-1 bg-gradient-to-r from-yellow-600 to-green-600 w-16 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
              <div className="h-1 bg-gradient-to-r from-green-600 to-yellow-600 w-16 rounded-full"></div>
            </div>

            {/* Data e local */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-yellow-400" />
                <span className="font-caveat text-2xl text-yellow-100">{formattedDate}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-yellow-400" />
                <span className="font-caveat text-xl text-yellow-200">Fazenda Vila Encantada</span>
              </div>
            </div>

            {/* Mensagem */}
            <p className="text-yellow-50 text-lg leading-relaxed mb-8 max-w-lg">
              {welcomeMessage}
            </p>

            {/* Botão CTA */}
            <button
              onClick={handleConfirmPresence}
              className="bg-gradient-to-r from-yellow-700 to-yellow-800 hover:from-yellow-800 hover:to-yellow-900 text-white px-10 py-4 rounded-lg text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-yellow-600/50"
            >
              Confirmar Presença
            </button>
          </div>

          {/* Área da foto - estilo moldura rústica */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Moldura de madeira */}
              <div className="w-80 h-96 bg-gradient-to-br from-yellow-800 to-yellow-900 p-6 transform rotate-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-yellow-600 to-yellow-700 relative overflow-hidden">
                  {/* Foto placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-800/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Trees className="w-20 h-20 text-yellow-300" />
                  </div>
                  
                  {/* Etiqueta rústica */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-yellow-900/80 backdrop-blur-sm px-3 py-2 rounded text-center border border-yellow-700">
                      <span className="text-yellow-100 font-caveat text-lg">
                        Isabella & Gabriel
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-700 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-600 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator estilo rústico */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-yellow-400 rounded-lg flex justify-center bg-yellow-800/50 backdrop-blur-sm">
          <div className="w-2 h-4 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default RusticCharmHero;