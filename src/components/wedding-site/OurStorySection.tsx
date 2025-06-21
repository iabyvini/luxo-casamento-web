
import { Heart, Users, Calendar, Sparkles } from "lucide-react";

interface OurStorySectionProps {
  coupleNames: string;
  templateName: string;
}

const OurStorySection = ({ coupleNames, templateName }: OurStorySectionProps) => {
  const [firstName, secondName] = coupleNames.split(' & ').map(name => name.trim());

  const getStoryByTemplate = (template: string) => {
    switch (template) {
      case 'Bohemian Dream':
        return {
          title: "Nossa Jornada Livre",
          story: `Como duas almas livres que se encontraram no momento perfeito, ${firstName} e ${secondName} descobriram que o amor verdadeiro não segue regras, apenas o coração. Nossa história começou de forma espontânea e cresceu naturalmente, como flores selvagens que florescem onde o vento as leva.`,
          milestone1: "Primeiro Encontro",
          milestone1Desc: "Um encontro casual que mudou tudo",
          milestone2: "Primeira Viagem",
          milestone2Desc: "Descobrindo o mundo juntos",
          milestone3: "O Pedido",
          milestone3Desc: "Uma proposta sob as estrelas"
        };
      case 'Vintage Charm':
        return {
          title: "Um Amor Atemporal",
          story: `Como em uma história dos tempos antigos, ${firstName} e ${secondName} encontraram um amor que transcende épocas. Nossa jornada é uma carta de amor escrita com momentos preciosos, memórias douradas e a promessa de um futuro construído sobre a base sólida de um amor verdadeiro e duradouro.`,
          milestone1: "O Primeiro Olhar",
          milestone1Desc: "Quando o tempo parou",
          milestone2: "Cartas de Amor",
          milestone2Desc: "Palavras que aqueceram o coração",
          milestone3: "A Promessa",
          milestone3Desc: "Um compromisso eterno"
        };
      case 'Modern Love':
        return {
          title: "Amor Contemporâneo",
          story: `Em um mundo conectado, ${firstName} e ${secondName} provaram que o amor real ainda existe. Nossa história moderna é feita de mensagens carinhosas, videochamadas apaixonadas e momentos reais que construíram uma base sólida para um futuro juntos.`,
          milestone1: "Match Perfeito",
          milestone1Desc: "Quando a tecnologia nos uniu",
          milestone2: "Primeiro Date",
          milestone2Desc: "Do virtual para o real",
          milestone3: "Next Level",
          milestone3Desc: "Decidindo construir juntos"
        };
      default:
        return {
          title: "Nossa História de Amor",
          story: `${firstName} e ${secondName} se encontraram e descobriram que algumas pessoas são destinadas a estar juntas. Nossa história é feita de momentos simples que se tornaram extraordinários, risos compartilhados e a certeza de que encontramos nossa pessoa para toda a vida.`,
          milestone1: "Primeiro Encontro",
          milestone1Desc: "Quando tudo começou",
          milestone2: "Namorando",
          milestone2Desc: "Construindo memórias",
          milestone3: "Noivado",
          milestone3Desc: "O sim mais importante"
        };
    }
  };

  const storyContent = getStoryByTemplate(templateName);

  return (
    <section id="story" className="py-20 bg-gradient-to-br from-brown-50 to-gold-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-brown-200 rounded-full px-6 py-3 mb-6">
            <Heart className="h-5 w-5 text-primary" fill="currentColor" />
            <span className="font-medium text-brown-700">Nossa História</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {storyContent.title}
          </h2>
          
          <p className="text-lg md:text-xl text-brown-600 leading-relaxed max-w-3xl mx-auto">
            {storyContent.story}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-luxury rounded-full"></div>
          
          <div className="space-y-16">
            {/* Milestone 1 */}
            <div className="flex items-center justify-between">
              <div className="w-5/12 text-right pr-8">
                <div className="luxury-card rounded-xl p-6">
                  <h3 className="text-xl font-bold text-brown-800 mb-2">
                    {storyContent.milestone1}
                  </h3>
                  <p className="text-brown-600">
                    {storyContent.milestone1Desc}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center w-2/12">
                <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center luxury-shadow">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="w-5/12"></div>
            </div>

            {/* Milestone 2 */}
            <div className="flex items-center justify-between">
              <div className="w-5/12"></div>
              
              <div className="flex items-center justify-center w-2/12">
                <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center luxury-shadow">
                  <Heart className="h-6 w-6 text-white" fill="currentColor" />
                </div>
              </div>
              
              <div className="w-5/12 text-left pl-8">
                <div className="luxury-card rounded-xl p-6">
                  <h3 className="text-xl font-bold text-brown-800 mb-2">
                    {storyContent.milestone2}
                  </h3>
                  <p className="text-brown-600">
                    {storyContent.milestone2Desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="flex items-center justify-between">
              <div className="w-5/12 text-right pr-8">
                <div className="luxury-card rounded-xl p-6">
                  <h3 className="text-xl font-bold text-brown-800 mb-2">
                    {storyContent.milestone3}
                  </h3>
                  <p className="text-brown-600">
                    {storyContent.milestone3Desc}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center w-2/12">
                <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center luxury-shadow">
                  <Sparkles className="h-6 w-6 text-white" fill="currentColor" />
                </div>
              </div>
              
              <div className="w-5/12"></div>
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="block md:hidden mt-16">
          <div className="space-y-8">
            {[
              { title: storyContent.milestone1, desc: storyContent.milestone1Desc, icon: Users },
              { title: storyContent.milestone2, desc: storyContent.milestone2Desc, icon: Heart },
              { title: storyContent.milestone3, desc: storyContent.milestone3Desc, icon: Sparkles }
            ].map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-luxury rounded-full flex items-center justify-center luxury-shadow flex-shrink-0">
                    <IconComponent className="h-5 w-5 text-white" fill={milestone.icon === Heart || milestone.icon === Sparkles ? "currentColor" : "none"} />
                  </div>
                  <div className="luxury-card rounded-lg p-4 flex-1">
                    <h3 className="font-bold text-brown-800 mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-brown-600 text-sm">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
