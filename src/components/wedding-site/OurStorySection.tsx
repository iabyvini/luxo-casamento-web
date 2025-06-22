
import { Heart, Clock } from "lucide-react";
import { QuizAnswers } from "@/types/quiz";
import { useEffect } from "react";

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
  
  // Conteúdo mais emocional e personalizado
  const storyContent = customContent?.content || 
    `Nossa história começou de uma forma especial e única. O que era apenas amizade se transformou em algo muito maior - um amor verdadeiro e profundo que cresceu a cada dia. Juntos, construímos memórias inesquecíveis e agora estamos prontos para dar o próximo passo em nossas vidas. Este é o início de uma nova jornada, e queremos compartilhar este momento mágico com todas as pessoas que amamos.`;
  
  const timeline = customContent?.timeline || [
    {
      year: "2020",
      title: "Primeiro Encontro",
      description: "Foi quando nossos caminhos se cruzaram pela primeira vez e soubemos que algo especial estava começando."
    },
    {
      year: "2022", 
      title: "Pedido de Casamento",
      description: "O momento mais emocionante de nossas vidas, quando decidimos construir nosso futuro juntos."
    },
    {
      year: "2024",
      title: "O Grande Dia",
      description: "Chegou a hora de celebrar nosso amor com todos que são especiais para nós."
    }
  ];

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

        {/* Cards dos noivos separados */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mt-16">
          {/* Primeiro noivo */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
              <span className="text-4xl font-serif text-green-700">
                {firstName?.charAt(0)}
              </span>
            </div>
            <h3 className="text-2xl font-serif text-gray-800 mb-2">
              {firstName}
            </h3>
            <p className="text-green-600 font-medium mb-4">
              {firstName?.toLowerCase().includes('ana') || firstName?.toLowerCase().includes('maria') || firstName?.toLowerCase().includes('camila') || firstName?.toLowerCase().includes('flora') || firstName?.toLowerCase().includes('isabella') ? 'A Noiva' : 'O Noivo'}
            </p>
            <p className="text-gray-600">
              Com um coração cheio de sonhos e amor pela vida, trouxe luz e alegria para esta história de amor.
            </p>
          </div>

          {/* Segundo noivo */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
              <span className="text-4xl font-serif text-green-700">
                {secondName?.charAt(0)}
              </span>
            </div>
            <h3 className="text-2xl font-serif text-gray-800 mb-2">
              {secondName}
            </h3>
            <p className="text-green-600 font-medium mb-4">
              {secondName?.toLowerCase().includes('ana') || secondName?.toLowerCase().includes('maria') || secondName?.toLowerCase().includes('camila') || secondName?.toLowerCase().includes('flora') || secondName?.toLowerCase().includes('isabella') ? 'A Noiva' : 'O Noivo'}
            </p>
            <p className="text-gray-600">
              Apaixonado pela vida e dedicado em construir momentos especiais ao lado de quem ama.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
