
import { Heart, Users } from "lucide-react";

interface OurStorySectionProps {
  coupleNames: string;
  templateName: string;
  customContent?: any;
}

const OurStorySection = ({ coupleNames, templateName, customContent }: OurStorySectionProps) => {
  const storyContent = customContent?.ourStory || {};
  const [firstName, secondName] = coupleNames.split(' & ').map(name => name.trim());

  // Use custom content or fallback to defaults
  const title = storyContent.title || "Nossa História";
  const subtitle = storyContent.subtitle || "Conheçam um pouco mais sobre nós e nossa jornada até este momento especial";
  const story = storyContent.story || `Nos conhecemos há 5 anos através de amigos em comum. O que começou como uma amizade 
    especial floresceu em um amor verdadeiro e profundo. Depois de muitas aventuras juntos, 
    viagens inesquecíveis e momentos únicos, decidimos dar o próximo passo em nossa jornada. 
    Estamos ansiosos para celebrar nosso amor com as pessoas mais importantes de nossas vidas!`;
  
  const groomName = storyContent.groomName || firstName;
  const brideName = storyContent.brideName || secondName;
  const groomInfo = storyContent.groomInfo || `Apaixonado por tecnologia e por capturar momentos especiais. 
    Ama viajar e descobrir novos lugares ao lado da pessoa amada.`;
  const brideInfo = storyContent.brideInfo || `Criativa e cheia de vida, ama criar coisas bonitas e 
    experimenta novas receitas. Sonha em construir uma família feliz.`;

  return (
    <section id="our-story" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            <span>O Casal</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            {title}
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Noivo */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                <span className="text-4xl font-serif text-green-700">
                  {groomName?.charAt(0)}
                </span>
              </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-2">
                {groomName}
              </h3>
              <p className="text-green-600 font-medium">O Noivo</p>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>{groomInfo}</p>
            </div>
          </div>

          {/* Noiva */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                <span className="text-4xl font-serif text-green-700">
                  {brideName?.charAt(0)}
                </span>
              </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-2">
                {brideName}
              </h3>
              <p className="text-green-600 font-medium">A Noiva</p>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>{brideInfo}</p>
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
              {story}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
