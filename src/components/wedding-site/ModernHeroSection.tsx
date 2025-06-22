
import { Heart, Calendar, MapPin, ChevronDown } from "lucide-react";
import { QuizAnswers } from "@/types/quiz";
import { useModernVisualTokens } from "@/contexts/ModernVisualTokensContext";

interface ModernHeroSectionProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
  templateName: string;
  quizAnswers?: QuizAnswers;
}

const ModernHeroSection = ({ 
  coupleNames, 
  weddingDate, 
  welcomeMessage, 
  templateName, 
  quizAnswers 
}: ModernHeroSectionProps) => {
  const { modernTokens, templateProfile, couplePhotoUrl } = useModernVisualTokens();

  const formattedDate = new Date(weddingDate).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Definir foto de fundo baseada no template e foto do casal
  const getBackgroundImage = () => {
    // PRIORIDADE 1: Foto do casal enviada pelo cliente
    if (couplePhotoUrl) {
      console.log('🖼️ Usando foto do casal:', couplePhotoUrl);
      return couplePhotoUrl;
    }
    
    // PRIORIDADE 2: Foto baseada no template selecionado
    const backgroundMap: Record<string, string> = {
      'editorial-romantic': 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      'minimal-luxury': 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      'neutral-sophisticated': 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      'classic-contemporary': 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      'natural-modern': 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      'boho-refined': 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
    };
    
    return backgroundMap[templateProfile?.id || 'editorial-romantic'];
  };

  const backgroundImage = getBackgroundImage();
  const heroStyle = templateProfile?.layout.heroStyle || 'fullscreen';

  const handleScrollToNext = () => {
    const nextSection = document.querySelector('#countdown, #couple');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // TEMPLATE 1: Editorial Romântico (Fullscreen Hero)
  if (templateProfile?.id === 'editorial-romantic' || heroStyle === 'fullscreen') {
    return (
      <section id="home" className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              
              {/* Save the Date Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
                <Heart className="h-5 w-5 text-white" fill="currentColor" />
                <span className="font-light text-sm tracking-wider uppercase text-white">
                  Save the Date
                </span>
              </div>

              {/* Couple Names */}
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-6 leading-none">
                {coupleNames}
              </h1>

              {/* Wedding Date */}
              <div className="flex items-center justify-center space-x-3 mb-8">
                <div className="h-px bg-white/30 w-12"></div>
                <div className="flex items-center space-x-3 text-white/90">
                  <Calendar className="h-5 w-5" />
                  <span className="text-xl md:text-2xl font-light tracking-wide">
                    {formattedDate}
                  </span>
                </div>
                <div className="h-px bg-white/30 w-12"></div>
              </div>

              {/* Welcome Message */}
              <div className="max-w-2xl mx-auto mb-16">
                <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
                  {welcomeMessage}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={handleScrollToNext}
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
          >
            <span className="text-xs font-light tracking-wider uppercase mb-2">
              Explore
            </span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>
      </section>
    );
  }

  // TEMPLATE 2: Minimalista Clean (Split Layout)
  if (templateProfile?.id === 'minimal-luxury') {
    return (
      <section id="home" className="min-h-screen bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen">
            
            {/* Image Column */}
            <div className="relative overflow-hidden">
              <div 
                className="h-full min-h-[60vh] lg:min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                {couplePhotoUrl && (
                  <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded text-sm">
                    Foto do casal
                  </div>
                )}
              </div>
            </div>

            {/* Content Column */}
            <div className="flex items-center justify-center p-8 lg:p-16 bg-black text-white">
              <div className="max-w-lg">
                
                {/* Minimalist Badge */}
                <div className="inline-flex items-center space-x-2 border border-white/20 rounded px-4 py-2 mb-8">
                  <Heart className="h-4 w-4" fill="currentColor" />
                  <span className="text-xs font-light tracking-wider uppercase">
                    Save the Date
                  </span>
                </div>

                {/* Couple Names */}
                <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
                  {coupleNames}
                </h1>

                {/* Date */}
                <div className="flex items-center space-x-3 text-xl mb-8 text-white/80">
                  <Calendar className="h-5 w-5" />
                  <span className="font-light">{formattedDate}</span>
                </div>

                {/* Welcome Message */}
                <p className="text-lg leading-relaxed mb-8 text-white/70 font-light">
                  {welcomeMessage}
                </p>

                {/* CTA */}
                <button 
                  onClick={handleScrollToNext}
                  className="px-8 py-3 border border-white/30 hover:bg-white hover:text-black transition-all text-sm font-light tracking-wider uppercase"
                >
                  Explorar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // TEMPLATE 3: Boho Refinado (Overlay com elementos decorativos)
  if (templateProfile?.id === 'boho-refined') {
    return (
      <section id="home" className="relative min-h-screen overflow-hidden bg-amber-50">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-transparent to-amber-800/30"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 text-amber-200/20 text-6xl">❋</div>
        <div className="absolute bottom-20 right-10 text-amber-200/20 text-4xl">✧</div>
        <div className="absolute top-40 right-20 text-amber-300/30 text-5xl">◊</div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              
              {/* Boho Badge */}
              <div className="inline-flex items-center space-x-3 bg-amber-100/90 backdrop-blur-sm border border-amber-200/50 rounded-lg px-6 py-3 mb-8">
                <Heart className="h-5 w-5 text-amber-700" fill="currentColor" />
                <span className="font-medium text-sm tracking-wider text-amber-800">
                  Celebração do Amor
                </span>
              </div>

              {/* Couple Names - Script Font */}
              <h1 className="text-6xl md:text-7xl text-white mb-8 font-script leading-none" 
                  style={{ fontFamily: 'Dancing Script, cursive', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                {coupleNames}
              </h1>

              {/* Decorative Line */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="h-px bg-white/40 w-16"></div>
                <div className="text-white/70 text-2xl">❋</div>
                <div className="flex items-center space-x-3 text-white bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <Calendar className="h-5 w-5" />
                  <span className="text-xl font-light">
                    {formattedDate}
                  </span>
                </div>
                <div className="text-white/70 text-2xl">❋</div>
                <div className="h-px bg-white/40 w-16"></div>
              </div>

              {/* Welcome Message */}
              <div className="max-w-3xl mx-auto mb-12">
                <p className="text-xl text-white/95 leading-relaxed font-light">
                  {welcomeMessage}
                </p>
              </div>

              {/* Boho Decorative Elements */}
              <div className="flex justify-center space-x-8 text-white/60 mb-8">
                <div className="text-2xl">✧</div>
                <div className="text-xl">❋</div>
                <div className="text-2xl">✧</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={handleScrollToNext}
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
          >
            <span className="text-xs font-light tracking-wider uppercase mb-2">
              Continue
            </span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>
      </section>
    );
  }

  // TEMPLATE 4: Clássico Contemporâneo (com monograma)
  if (templateProfile?.id === 'classic-contemporary') {
    const initials = coupleNames.split(' & ').map(name => name.charAt(0)).join('');
    
    return (
      <section id="home" className="relative min-h-screen overflow-hidden bg-amber-50">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/50 to-amber-800/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              
              {/* Monogram */}
              <div className="w-24 h-24 mx-auto mb-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-amber-200">
                <span className="text-3xl font-serif text-amber-800 font-bold">
                  {initials}
                </span>
              </div>

              {/* Classic Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-amber-200/50 rounded px-6 py-3 mb-8">
                <Heart className="h-5 w-5 text-amber-700" fill="currentColor" />
                <span className="font-medium text-sm tracking-wider uppercase text-amber-800">
                  Save the Date
                </span>
              </div>

              {/* Couple Names */}
              <h1 className="text-6xl md:text-7xl font-serif text-white mb-6 leading-tight"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                {coupleNames}
              </h1>

              {/* Date with Classic Styling */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="h-px bg-white/40 w-20"></div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 text-amber-800">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5" />
                    <span className="text-lg font-medium">
                      {formattedDate}
                    </span>
                  </div>
                </div>
                <div className="h-px bg-white/40 w-20"></div>
              </div>

              {/* Welcome Message */}
              <div className="max-w-3xl mx-auto mb-12 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <p className="text-xl text-white leading-relaxed">
                  {welcomeMessage}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={handleScrollToNext}
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
          >
            <span className="text-xs font-light tracking-wider uppercase mb-2">
              Explore
            </span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>
      </section>
    );
  }

  // TEMPLATE 5: Natural Moderno (Split com foco na foto)
  if (templateProfile?.id === 'natural-modern') {
    return (
      <section id="home" className="min-h-screen bg-green-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen">
            
            {/* Content Column */}
            <div className="flex items-center justify-center p-8 lg:p-16 bg-green-50">
              <div className="max-w-lg">
                
                {/* Natural Badge */}
                <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-6 py-3 mb-8">
                  <Heart className="h-4 w-4 text-green-700" fill="currentColor" />
                  <span className="text-sm font-medium tracking-wider uppercase text-green-800">
                    Save the Date
                  </span>
                </div>

                {/* Couple Names */}
                <h1 className="text-5xl md:text-6xl text-green-900 mb-6 leading-tight font-light">
                  {coupleNames}
                </h1>

                {/* Date */}
                <div className="flex items-center space-x-3 text-xl mb-8 text-green-700">
                  <Calendar className="h-6 w-6" />
                  <span>{formattedDate}</span>
                </div>

                {/* Welcome Message */}
                <p className="text-lg leading-relaxed mb-8 text-green-600">
                  {welcomeMessage}
                </p>

                {/* CTA */}
                <button 
                  onClick={handleScrollToNext}
                  className="px-8 py-4 bg-green-700 text-white hover:bg-green-800 transition-colors text-sm font-medium tracking-wider uppercase rounded-lg"
                >
                  Explorar
                </button>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative overflow-hidden">
              <div 
                className="h-full min-h-[60vh] lg:min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              >
                <div className="absolute inset-0 bg-green-900/10"></div>
                {couplePhotoUrl && (
                  <div className="absolute bottom-6 right-6 bg-green-800/80 backdrop-blur-sm text-white px-4 py-2 rounded text-sm">
                    {coupleNames}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // TEMPLATE 6: Neutro Sofisticado (Layout equilibrado)
  return (
    <section id="home" className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen">
          
          {/* Image Column */}
          <div className="relative overflow-hidden">
            <div 
              className="h-full min-h-[60vh] lg:min-h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            >
              <div className="absolute inset-0 bg-gray-900/20"></div>
              {couplePhotoUrl && (
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded text-sm font-medium">
                  {coupleNames}
                </div>
              )}
            </div>
          </div>

          {/* Content Column */}
          <div className="flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-lg text-center lg:text-left">
              
              {/* Sophisticated Badge */}
              <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-6 py-3 mb-8">
                <Heart className="h-4 w-4 text-gray-700" fill="currentColor" />
                <span className="text-sm font-light tracking-wider uppercase text-gray-600">
                  Save the Date
                </span>
              </div>

              {/* Couple Names */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6">
                {coupleNames}
              </h1>

              {/* Date */}
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-2xl mb-8 text-gray-700">
                <Calendar className="h-6 w-6" />
                <span className="font-light">{formattedDate}</span>
              </div>

              {/* Welcome Message */}
              <p className="text-lg leading-relaxed mb-8 text-gray-600 font-light">
                {welcomeMessage}
              </p>

              {/* CTA */}
              <button 
                onClick={handleScrollToNext}
                className="px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm font-light tracking-wider uppercase"
              >
                Explorar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHeroSection;
