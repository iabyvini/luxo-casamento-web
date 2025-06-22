
import { Heart, Clock } from "lucide-react";
import { QuizAnswers } from "@/types/quiz";

interface OurStorySectionProps {
  coupleNames: string;
  templateName: string;
  quizAnswers?: QuizAnswers;
  customContent?: {
    enabled?: boolean;
    title?: string;
    content?: string;
    timeline?: Array<{
      year: string;
      title: string;
      description: string;
    }>;
  };
}

const OurStorySection = ({ coupleNames, templateName, quizAnswers, customContent }: OurStorySectionProps) => {
  // Se a seção está desabilitada, não renderizar
  if (customContent?.enabled === false) {
    return null;
  }

  const [firstName, secondName] = coupleNames.split(' & ').map(name => name.trim());
  const sectionTitle = customContent?.title || "Nossa História";
  const storyContent = customContent?.content || `${firstName} e ${secondName} se conheceram de uma forma muito especial. O que começou como uma amizade floresceu em um amor verdadeiro e profundo. Hoje, estão prontos para dar o próximo passo em suas vidas juntos.`;
  const timeline = customContent?.timeline || [];

  return (
    <section id="our-story" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="h-4 w-4" fill="currentColor" />
            <span>Nossa História</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            {sectionTitle}
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              {storyContent}
            </p>
          </div>
        </div>

        {/* Timeline */}
        {timeline.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Clock className="h-4 w-4" />
                <span>Nossa Jornada</span>
              </div>
              <h3 className="text-2xl font-serif text-gray-800">
                Marcos do Nosso Relacionamento
              </h3>
            </div>

            <div className="relative">
              {/* Linha vertical */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200 rounded-full"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100 relative">
                        {/* Seta */}
                        <div className={`absolute top-6 w-4 h-4 bg-white border-green-100 transform rotate-45 ${
                          index % 2 === 0 
                            ? 'left-0 -translate-x-1/2 border-l border-b' 
                            : 'right-0 translate-x-1/2 border-r border-t'
                        }`}></div>
                        
                        <div className="space-y-3">
                          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            <span>{item.year}</span>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-800">
                            {item.title}
                          </h4>
                          <p className="text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Marcador central */}
                    <div className="w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg z-10 relative"></div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Casal Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mt-16">
          {/* Primeiro */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
              <span className="text-4xl font-serif text-green-700">
                {firstName?.charAt(0)}
              </span>
            </div>
            <h3 className="text-2xl font-serif text-gray-800 mb-2">
              {firstName}
            </h3>
            <p className="text-green-600 font-medium mb-4">O Noivo</p>
            <p className="text-gray-600">
              Apaixonado pela vida e por construir momentos especiais ao lado de quem ama.
            </p>
          </div>

          {/* Segunda */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
              <span className="text-4xl font-serif text-green-700">
                {secondName?.charAt(0)}
              </span>
            </div>
            <h3 className="text-2xl font-serif text-gray-800 mb-2">
              {secondName}
            </h3>
            <p className="text-green-600 font-medium mb-4">A Noiva</p>
            <p className="text-gray-600">
              Criativa e cheia de sonhos, sempre em busca de construir uma família feliz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
