
import { Heart, Users } from "lucide-react";

interface CoupleSectionProps {
  coupleNames: string;
}

const CoupleSection = ({ coupleNames }: CoupleSectionProps) => {
  const [firstName, secondName] = coupleNames.split(' & ').map(name => name.trim());

  return (
    <section id="couple" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            <span>O Casal</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            Nossa História
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheçam um pouco mais sobre nós e nossa jornada até este momento especial
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Noivo */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                <span className="text-4xl font-serif text-green-700">
                  {firstName?.charAt(0)}
                </span>
              </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-2">
                {firstName}
              </h3>
              <p className="text-green-600 font-medium">O Noivo</p>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Idade:</strong> 28 anos
              </p>
              <p>
                <strong>Profissão:</strong> Engenheiro
              </p>
              <p>
                <strong>Hobby:</strong> Fotografia e Viagens
              </p>
              <p>
                <strong>Sobre:</strong> Apaixonado por tecnologia e por capturar momentos especiais. 
                Ama viajar e descobrir novos lugares ao lado da pessoa amada.
              </p>
            </div>
          </div>

          {/* Noiva */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                <span className="text-4xl font-serif text-green-700">
                  {secondName?.charAt(0)}
                </span>
              </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-2">
                {secondName}
              </h3>
              <p className="text-green-600 font-medium">A Noiva</p>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Idade:</strong> 26 anos
              </p>
              <p>
                <strong>Profissão:</strong> Designer
              </p>
              <p>
                <strong>Hobby:</strong> Arte e Culinária
              </p>
              <p>
                <strong>Sobre:</strong> Criativa e cheia de vida, ama criar coisas bonitas e 
                experimenta novas receitas. Sonha em construir uma família feliz.
              </p>
            </div>
          </div>
        </div>

        {/* Como se conheceram */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-6">
              <Heart className="h-8 w-8 text-green-600 mx-auto mb-4" fill="currentColor" />
              <h3 className="text-2xl font-serif text-gray-800">
                Como Tudo Começou
              </h3>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-center">
              Nos conhecemos há 5 anos através de amigos em comum. O que começou como uma amizade 
              especial floresceu em um amor verdadeiro e profundo. Depois de muitas aventuras juntos, 
              viagens inesquecíveis e momentos únicos, decidimos dar o próximo passo em nossa jornada. 
              Estamos ansiosos para celebrar nosso amor com as pessoas mais importantes de nossas vidas!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
