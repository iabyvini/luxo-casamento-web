
import { Heart, Calendar, MapPin } from "lucide-react";
import { QuizAnswers } from "@/types/quiz";
import { useVisualTokens } from "@/contexts/VisualTokensContext";
import { findBestTemplateProfile } from "@/utils/templateProfiles";
import { getFallbackImage } from "@/utils/coupleFallbacks";

interface HeroSectionProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
  templateName: string;
  quizAnswers?: QuizAnswers;
}

const HeroSection = ({ coupleNames, weddingDate, welcomeMessage, templateName, quizAnswers }: HeroSectionProps) => {
  const { visualTokens, isCustomThemeActive, couplePhotoUrl } = useVisualTokens();

  const formattedDate = new Date(weddingDate).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const getDisplayPhoto = () => {
    if (couplePhotoUrl) return couplePhotoUrl;
    
    const templateProfile = quizAnswers ? findBestTemplateProfile(quizAnswers) : null;
    if (templateProfile) {
      return getFallbackImage(templateProfile);
    }
    
    return null;
  };

  const handleConfirmPresence = () => {
    const rsvpSection = document.getElementById('rsvp');
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const displayPhoto = getDisplayPhoto();

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Couple Photo */}
          <div className="order-2 lg:order-1 flex justify-center">
            {displayPhoto ? (
              <div className="relative">
                <div 
                  className="w-80 h-96 md:w-96 md:h-[480px] overflow-hidden rounded-2xl shadow-2xl transition-all duration-300"
                  style={{
                    borderColor: isCustomThemeActive ? visualTokens?.colors.primary : '#84A98C'
                  }}
                >
                  <img 
                    src={displayPhoto} 
                    alt="Foto do casal" 
                    className="w-full h-full object-cover"
                  />
                  
                  {!couplePhotoUrl && (
                    <div className="absolute inset-0 bg-green-50/20" />
                  )}
                </div>
                
                {!couplePhotoUrl && (
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-gray-600">
                      Imagem ilustrativa
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <div className="w-80 h-96 md:w-96 md:h-[480px] bg-gradient-to-br from-green-100 to-green-200 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 opacity-40">💕</div>
                  <p className="text-green-700 font-medium">
                    Foto do casal
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="h-4 w-4" fill="currentColor" />
                <span>Save the Date</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-serif text-gray-800 leading-tight">
                {coupleNames}
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-2xl text-gray-600">
                <Calendar className="h-6 w-6" />
                <span className="font-medium">{formattedDate}</span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>Local será informado em breve</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <Heart className="h-5 w-5 mr-2 text-green-600" fill="currentColor" />
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Mensagem Especial
                </span>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {welcomeMessage}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleConfirmPresence}
                className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors shadow-lg"
              >
                Confirmar Presença
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 font-medium text-gray-600">
            Role para ver mais
          </span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
