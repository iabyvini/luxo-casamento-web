
import { Heart, Users } from "lucide-react";
import { useModernVisualTokens } from "@/contexts/ModernVisualTokensContext";

interface OurStorySectionProps {
  coupleNames: string;
  templateName: string;
  customContent?: any;
}

const OurStorySection = ({ coupleNames, templateName, customContent }: OurStorySectionProps) => {
  const { templateProfile } = useModernVisualTokens();
  
  const storyContent = customContent?.ourStory || {};
  const [firstName, secondName] = coupleNames.split(' & ').map(name => name.trim());

  // CORREÇÃO: Ordem correta - Primeira pessoa é a noiva, segunda é o noivo
  const brideName = firstName; // Primeiro nome é da noiva
  const groomName = secondName; // Segundo nome é do noivo

  // Use custom content or fallback to defaults
  const title = storyContent.title || "Nossa História";
  const subtitle = storyContent.subtitle || "Conheçam um pouco mais sobre nós e nossa jornada até este momento especial";
  const story = storyContent.story || `Nos conhecemos há 5 anos através de amigos em comum. O que começou como uma amizade 
    especial floresceu em um amor verdadeiro e profundo. Depois de muitas aventuras juntos, 
    viagens inesquecíveis e momentos únicos, decidimos dar o próximo passo em nossa jornada. 
    Estamos ansiosos para celebrar nosso amor com as pessoas mais importantes de nossas vidas!`;
  
  const brideInfo = storyContent.brideInfo || `Criativa e cheia de vida, ama criar coisas bonitas e 
    experimenta novas receitas. Sonha em construir uma família feliz.`;
  const groomInfo = storyContent.groomInfo || `Apaixonado por tecnologia e por capturar momentos especiais. 
    Ama viajar e descobrir novos lugares ao lado da pessoa amada.`;

  // Estilos baseados no template selecionado
  const getTemplateStyles = () => {
    if (!templateProfile) {
      return {
        bgClass: "bg-gradient-to-br from-green-50 to-white",
        badgeClass: "bg-green-100 text-green-800",
        textClass: "text-gray-800",
        cardClass: "bg-white shadow-lg border-gray-100",
        avatarClass: "bg-gradient-to-br from-green-100 to-green-200 text-green-700",
        accentClass: "text-green-600"
      };
    }

    switch (templateProfile.id) {
      case 'editorial-romantic':
        return {
          bgClass: "bg-gradient-to-br from-gray-50 to-white",
          badgeClass: "bg-gray-100 text-gray-800",
          textClass: "text-gray-900",
          cardClass: "bg-white shadow-xl border-gray-200",
          avatarClass: "bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800",
          accentClass: "text-gray-700"
        };
      
      case 'minimal-luxury':
        return {
          bgClass: "bg-black",
          badgeClass: "bg-gray-800 text-white border border-gray-700",
          textClass: "text-white",
          cardClass: "bg-gray-900 shadow-2xl border-gray-800",
          avatarClass: "bg-gradient-to-br from-gray-800 to-gray-900 text-white",
          accentClass: "text-gray-300"
        };
      
      case 'boho-refined':
        return {
          bgClass: "bg-gradient-to-br from-amber-50 to-orange-50",
          badgeClass: "bg-amber-100 text-amber-800",
          textClass: "text-amber-900",
          cardClass: "bg-white shadow-lg border-amber-200",
          avatarClass: "bg-gradient-to-br from-amber-100 to-orange-200 text-amber-800",
          accentClass: "text-amber-700"
        };
      
      case 'classic-contemporary':
        return {
          bgClass: "bg-gradient-to-br from-amber-50 to-yellow-50",
          badgeClass: "bg-amber-100 text-amber-800",
          textClass: "text-amber-900",
          cardClass: "bg-white shadow-lg border-amber-200",
          avatarClass: "bg-gradient-to-br from-amber-100 to-yellow-200 text-amber-800",
          accentClass: "text-amber-700"
        };
      
      case 'natural-modern':
        return {
          bgClass: "bg-gradient-to-br from-green-50 to-emerald-50",
          badgeClass: "bg-green-100 text-green-800",
          textClass: "text-green-900",
          cardClass: "bg-white shadow-lg border-green-200",
          avatarClass: "bg-gradient-to-br from-green-100 to-emerald-200 text-green-800",
          accentClass: "text-green-700"
        };
      
      case 'neutral-sophisticated':
        return {
          bgClass: "bg-gradient-to-br from-gray-50 to-slate-50",
          badgeClass: "bg-gray-100 text-gray-800",
          textClass: "text-gray-900",
          cardClass: "bg-white shadow-lg border-gray-200",
          avatarClass: "bg-gradient-to-br from-gray-100 to-slate-200 text-gray-800",
          accentClass: "text-gray-700"
        };
      
      default:
        return {
          bgClass: "bg-gradient-to-br from-green-50 to-white",
          badgeClass: "bg-green-100 text-green-800",
          textClass: "text-gray-800",
          cardClass: "bg-white shadow-lg border-gray-100",
          avatarClass: "bg-gradient-to-br from-green-100 to-green-200 text-green-700",
          accentClass: "text-green-600"
        };
    }
  };

  const styles = getTemplateStyles();

  return (
    <section id="story" className={`py-20 ${styles.bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center space-x-2 ${styles.badgeClass} px-4 py-2 rounded-full text-sm font-medium mb-6`}>
            <Users className="h-4 w-4" />
            <span>O Casal</span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-serif ${styles.textClass} mb-6`}>
            {title}
          </h2>
          
          <p className={`text-lg ${styles.textClass} opacity-70 max-w-3xl mx-auto`}>
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* A Noiva - Primeira posição */}
          <div className={`${styles.cardClass} rounded-2xl p-8 border`}>
            <div className="text-center mb-6">
              <div className={`w-32 h-32 mx-auto mb-4 ${styles.avatarClass} rounded-full flex items-center justify-center`}>
                <span className="text-4xl font-serif">
                  {brideName?.charAt(0)}
                </span>
              </div>
              <h3 className={`text-2xl font-serif ${styles.textClass} mb-2`}>
                {brideName}
              </h3>
              <p className={`${styles.accentClass} font-medium`}>A Noiva</p>
            </div>
            
            <div className={`space-y-4 ${styles.textClass} opacity-80`}>
              <p>{brideInfo}</p>
            </div>
          </div>

          {/* O Noivo - Segunda posição */}
          <div className={`${styles.cardClass} rounded-2xl p-8 border`}>
            <div className="text-center mb-6">
              <div className={`w-32 h-32 mx-auto mb-4 ${styles.avatarClass} rounded-full flex items-center justify-center`}>
                <span className="text-4xl font-serif">
                  {groomName?.charAt(0)}
                </span>
              </div>
              <h3 className={`text-2xl font-serif ${styles.textClass} mb-2`}>
                {groomName}
              </h3>
              <p className={`${styles.accentClass} font-medium`}>O Noivo</p>
            </div>
            
            <div className={`space-y-4 ${styles.textClass} opacity-80`}>
              <p>{groomInfo}</p>
            </div>
          </div>
        </div>

        {/* Como se conheceram */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className={`${styles.cardClass} rounded-2xl p-8 border`}>
            <div className="text-center mb-6">
              <Heart className={`h-8 w-8 ${styles.accentClass} mx-auto mb-4`} fill="currentColor" />
              <h3 className={`text-2xl font-serif ${styles.textClass}`}>
                Como Tudo Começou
              </h3>
            </div>
            
            <p className={`${styles.textClass} opacity-80 leading-relaxed text-center`}>
              {story}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
