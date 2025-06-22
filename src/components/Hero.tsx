import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Heart, Sparkles, Play, Camera, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ScrollToSection } from "./SmoothScroll";

const Hero = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  return (
    <section id="home" className="relative pt-20 pb-24 min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50">
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-luxury"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-luxury"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-gradient-luxury"></div>
      </div>

      {/* Floating romantic elements */}
      <div className="absolute top-32 left-16 text-pink-300 romantic-float">
        <Heart className="h-8 w-8 decorative-heart" fill="currentColor" />
      </div>
      <div className="absolute top-48 right-24 text-yellow-300 romantic-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="h-6 w-6 decorative-sparkle" fill="currentColor" />
      </div>
      <div className="absolute bottom-32 left-32 text-pink-200 romantic-float" style={{ animationDelay: '4s' }}>
        <Heart className="h-10 w-10 decorative-heart" fill="currentColor" />
      </div>
      <div className="absolute top-40 left-1/2 text-amber-300 romantic-float" style={{ animationDelay: '1s' }}>
        <Star className="h-7 w-7 decorative-sparkle" fill="currentColor" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left elegant-entrance">
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm border border-amber-200 rounded-full px-6 py-3 mb-8 luxury-shadow">
              <div className="flex -space-x-1">
                <div className="h-6 w-6 rounded-full bg-gradient-luxury flex items-center justify-center">
                  <Heart className="h-3 w-3 text-white" fill="currentColor" />
                </div>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 flex items-center justify-center">
                  <Star className="h-3 w-3 text-white" fill="currentColor" />
                </div>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 flex items-center justify-center">
                  <Sparkles className="h-3 w-3 text-white" fill="currentColor" />
                </div>
              </div>
              <span className="text-sm font-medium text-brown-700">
                Mais de 10.000 casais confiaram em nós
              </span>
            </div>

            {/* Premium Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-8 leading-tight">
              <span className="text-brown-800">Crie o Site dos</span>
              <span className="block gradient-text text-6xl md:text-7xl lg:text-8xl font-dancing mt-2">
                Seus Sonhos
              </span>
              <span className="block text-brown-700 text-3xl md:text-4xl lg:text-5xl font-light mt-4">
                para o Grande Dia
              </span>
            </h1>

            {/* Enhanced Emotional Subtitle */}
            <p className="text-xl md:text-2xl text-brown-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Compartilhe seu amor com o mundo através de um site único, 
              <span className="font-medium text-amber-700"> personalizado pela IA</span> e 
              <span className="font-medium text-rose-700"> criado especialmente para vocês</span>.
            </p>

            {/* Premium CTA Buttons with correct navigation */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Button 
                size="lg" 
                onClick={handleStartQuiz}
                className="btn-premium group text-lg px-10 py-6 shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="mr-3 h-5 w-5" fill="currentColor" />
                Começar Gratuitamente
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <ScrollToSection
                sectionId="templates"
                className="border-2 border-brown-300 text-brown-700 hover:bg-brown-50 px-8 py-6 text-lg rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Templates
              </ScrollToSection>
            </div>

            {/* Enhanced Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400" fill="currentColor" />
                  ))}
                </div>
                <span className="text-brown-600 font-medium">4.9/5</span>
              </div>
              
              <div className="flex items-center space-x-2 text-brown-500">
                <Users className="h-4 w-4" />
                <span className="text-sm">2.847 avaliações verificadas</span>
              </div>
            </div>
          </div>

          {/* Right Column - Premium Mockup */}
          <div className="relative elegant-entrance" style={{ animationDelay: '0.3s' }}>
            {/* Floating elements around mockup */}
            <div className="absolute -top-6 -left-6 bg-white luxury-shadow rounded-2xl p-4 romantic-float">
              <Heart className="h-8 w-8 text-rose-400" fill="currentColor" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white luxury-shadow rounded-2xl p-4 romantic-float" style={{ animationDelay: '2s' }}>
              <Camera className="h-8 w-8 text-amber-500" />
            </div>
            <div className="absolute top-20 -right-4 bg-gradient-luxury text-white rounded-xl p-3 romantic-float" style={{ animationDelay: '1s' }}>
              <Sparkles className="h-6 w-6" fill="currentColor" />
            </div>

            {/* Premium Site Mockup */}
            <div className="relative luxury-card p-8 bg-white/95">
              <div className="bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50 rounded-xl p-8 text-center relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-4 left-4 text-pink-200 opacity-50">
                  <Heart className="h-6 w-6" fill="currentColor" />
                </div>
                <div className="absolute bottom-4 right-4 text-amber-200 opacity-50">
                  <Sparkles className="h-6 w-6" fill="currentColor" />
                </div>
                
                {/* Mockup header */}
                <div className="inline-flex items-center space-x-3 mb-6">
                  <Heart className="h-8 w-8 text-rose-500" fill="currentColor" />
                  <span className="text-3xl font-dancing font-bold gradient-text">Ana & João</span>
                  <Heart className="h-8 w-8 text-rose-500" fill="currentColor" />
                </div>
                
                <div className="text-brown-600 mb-2 font-cormorant text-lg">15 de Dezembro, 2024</div>
                <div className="text-amber-700 font-medium mb-8">Fazenda Vista Alegre • São Paulo</div>
                
                <p className="text-brown-600 mb-8 font-light italic leading-relaxed">
                  "Depois de 5 anos juntos, chegou o momento de celebrarmos nosso amor eterno. 
                  Junte-se a nós neste dia especial que marcará o início da nossa nova jornada."
                </p>
                
                {/* Mockup event cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 luxury-shadow">
                    <div className="font-semibold text-brown-700 mb-1">Cerimônia</div>
                    <div className="text-brown-500">Capela São José</div>
                    <div className="text-amber-600 font-medium">16:00</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 luxury-shadow">
                    <div className="font-semibold text-brown-700 mb-1">Recepção</div>
                    <div className="text-brown-500">Jardim Principal</div>
                    <div className="text-amber-600 font-medium">18:00</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 luxury-shadow">
                    <div className="font-semibold text-brown-700 mb-1">Festa</div>
                    <div className="text-brown-500">Salão Dourado</div>
                    <div className="text-amber-600 font-medium">20:00</div>
                  </div>
                </div>
                
                {/* Premium CTA in mockup */}
                <div className="mt-8">
                  <div className="inline-flex items-center space-x-2 bg-gradient-luxury text-white px-6 py-3 rounded-full font-medium">
                    <Heart className="h-4 w-4" fill="currentColor" />
                    <span>Confirmar Presença</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
