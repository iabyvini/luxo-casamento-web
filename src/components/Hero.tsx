
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Heart, Users, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ScrollToSection } from "./SmoothScroll";

const Hero = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  return (
    <section id="home" className="relative pt-20 pb-24 min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50">
      {/* Simplified background - only geometric shapes, no floating elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-luxury"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-luxury"></div>
      </div>

      {/* Single static decorative element per corner - maximum opacity 0.1 */}
      <div className="absolute top-32 right-24 text-amber-300 opacity-[0.08]">
        <div className="w-8 h-8 rounded-full bg-current"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Premium Badge - contraste melhorado */}
            <div className="inline-flex items-center space-x-3 bg-white/95 backdrop-blur-sm border border-amber-200 rounded-full px-6 py-3 mb-8 luxury-shadow">
              <div className="flex -space-x-1">
                <div className="h-6 w-6 rounded-full bg-gradient-luxury flex items-center justify-center">
                  <Heart className="h-3 w-3 text-white" fill="currentColor" />
                </div>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 flex items-center justify-center">
                  <Star className="h-3 w-3 text-white" fill="currentColor" />
                </div>
              </div>
              <span className="text-sm font-medium text-[#3C2B20]">
                Mais de 10.000 casais confiaram em nós
              </span>
            </div>

            {/* Premium Headline - tipografia com contraste fixo */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-8 leading-tight">
              <span className="text-[#3C2B20]">Crie o Site dos</span>
              <span className="block gradient-text text-6xl md:text-7xl lg:text-8xl font-dancing mt-2">
                Seus Sonhos
              </span>
              <span className="block text-[#3C2B20] text-3xl md:text-4xl lg:text-5xl font-light mt-4">
                para o Grande Dia
              </span>
            </h1>

            {/* Enhanced Emotional Subtitle - contraste melhorado */}
            <p className="text-xl md:text-2xl text-[#5D4037] mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Compartilhe seu amor com o mundo através de um site único, 
              <span className="font-medium text-[#3C2B20]"> personalizado pela IA</span> e 
              <span className="font-medium text-[#3C2B20]"> criado especialmente para vocês</span>.
            </p>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Button 
                size="lg" 
                onClick={handleStartQuiz}
                className="btn-premium group text-lg px-10 py-6 shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Começar Gratuitamente
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <ScrollToSection
                sectionId="templates"
                className="border-2 border-[#5D4037] text-[#3C2B20] hover:bg-brown-50 px-8 py-6 text-lg rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white/90 backdrop-blur-sm"
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
                <span className="text-[#3C2B20] font-medium">4.9/5</span>
              </div>
              
              <div className="flex items-center space-x-2 text-[#5D4037]">
                <Users className="h-4 w-4" />
                <span className="text-sm">2.847 avaliações verificadas</span>
              </div>
            </div>
          </div>

          {/* Right Column - Mockup simplificado */}
          <div className="relative">
            {/* Single decorative element around mockup - static, low opacity */}
            <div className="absolute -top-6 -left-6 bg-white luxury-shadow rounded-2xl p-4 opacity-80">
              <Heart className="h-8 w-8 text-rose-400" fill="currentColor" />
            </div>

            {/* Premium Site Mockup - contraste melhorado */}
            <div className="relative luxury-card p-8 bg-white/98">
              <div className="bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50 rounded-xl p-8 text-center relative overflow-hidden">
                {/* Mockup header - tipografia com contraste */}
                <div className="inline-flex items-center space-x-3 mb-6">
                  <Heart className="h-8 w-8 text-rose-500" fill="currentColor" />
                  <span className="text-3xl font-dancing font-bold gradient-text">Ana & João</span>
                  <Heart className="h-8 w-8 text-rose-500" fill="currentColor" />
                </div>
                
                <div className="text-[#3C2B20] mb-2 font-cormorant text-lg font-medium">15 de Dezembro, 2024</div>
                <div className="text-[#5D4037] font-medium mb-8">Fazenda Vista Alegre • São Paulo</div>
                
                <p className="text-[#3C2B20] mb-8 font-light leading-relaxed">
                  "Depois de 5 anos juntos, chegou o momento de celebrarmos nosso amor eterno. 
                  Junte-se a nós neste dia especial que marcará o início da nossa nova jornada."
                </p>
                
                {/* Mockup event cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 luxury-shadow">
                    <div className="font-semibold text-[#3C2B20] mb-1">Cerimônia</div>
                    <div className="text-[#5D4037]">Capela São José</div>
                    <div className="text-amber-700 font-medium">16:00</div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 luxury-shadow">
                    <div className="font-semibold text-[#3C2B20] mb-1">Recepção</div>
                    <div className="text-[#5D4037]">Jardim Principal</div>
                    <div className="text-amber-700 font-medium">18:00</div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 luxury-shadow">
                    <div className="font-semibold text-[#3C2B20] mb-1">Festa</div>
                    <div className="text-[#5D4037]">Salão Dourado</div>
                    <div className="text-amber-700 font-medium">20:00</div>
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
