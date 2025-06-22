
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
    <section id="home" className="relative pt-20 pb-24 min-h-screen overflow-hidden bg-neutral-base">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-3 bg-neutral-card border border-neutral-200 rounded-full px-6 py-3 mb-8 luxury-shadow">
              <div className="flex -space-x-1">
                <div className="h-6 w-6 rounded-full bg-neutral-800 flex items-center justify-center">
                  <Heart className="h-3 w-3 text-white" fill="currentColor" />
                </div>
                <div className="h-6 w-6 rounded-full bg-pink-400 flex items-center justify-center">
                  <Star className="h-3 w-3 text-white" fill="currentColor" />
                </div>
              </div>
              <span className="text-sm font-medium text-neutral-primary">
                Mais de 10.000 casais confiaram em nós
              </span>
            </div>

            {/* Premium Headline - tipografia sólida */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-8 leading-tight">
              <span className="text-neutral-primary">Crie o Site dos</span>
              <span className="block text-neutral-secondary text-6xl md:text-7xl lg:text-8xl font-dancing mt-2">
                Seus Sonhos
              </span>
              <span className="block text-neutral-primary text-3xl md:text-4xl lg:text-5xl font-light mt-4">
                para o Grande Dia
              </span>
            </h1>

            {/* Enhanced Emotional Subtitle */}
            <p className="text-xl md:text-2xl text-neutral-body mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Compartilhe seu amor com o mundo através de um site único, 
              <span className="font-medium text-neutral-secondary"> personalizado pela IA</span> e 
              <span className="font-medium text-neutral-secondary"> criado especialmente para vocês</span>.
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
                className="border-2 border-neutral-600 text-neutral-primary hover:bg-neutral-100 px-8 py-6 text-lg rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg bg-neutral-card"
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
                <span className="text-neutral-primary font-medium">4.9/5</span>
              </div>
              
              <div className="flex items-center space-x-2 text-neutral-body">
                <Users className="h-4 w-4" />
                <span className="text-sm">2.847 avaliações verificadas</span>
              </div>
            </div>
          </div>

          {/* Right Column - Mockup simplificado */}
          <div className="relative">
            {/* Premium Site Mockup */}
            <div className="relative luxury-card p-8 bg-neutral-card">
              <div className="bg-neutral-soft rounded-xl p-8 text-center relative overflow-hidden">
                <div className="inline-flex items-center space-x-3 mb-6">
                  <Heart className="h-8 w-8 text-rose-500" fill="currentColor" />
                  <span className="text-3xl font-dancing font-bold text-neutral-primary">Ana & João</span>
                  <Heart className="h-8 w-8 text-rose-500" fill="currentColor" />
                </div>
                
                <div className="text-neutral-primary mb-2 font-cormorant text-lg font-medium">15 de Dezembro, 2024</div>
                <div className="text-neutral-body font-medium mb-8">Fazenda Vista Alegre • São Paulo</div>
                
                <p className="text-neutral-body mb-8 font-light leading-relaxed">
                  "Depois de 5 anos juntos, chegou o momento de celebrarmos nosso amor eterno. 
                  Junte-se a nós neste dia especial que marcará o início da nossa nova jornada."
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-neutral-card rounded-xl p-4 luxury-shadow">
                    <div className="font-semibold text-neutral-primary mb-1">Cerimônia</div>
                    <div className="text-neutral-body">Capela São José</div>
                    <div className="text-neutral-secondary font-medium">16:00</div>
                  </div>
                  <div className="bg-neutral-card rounded-xl p-4 luxury-shadow">
                    <div className="font-semibold text-neutral-primary mb-1">Recepção</div>
                    <div className="text-neutral-body">Jardim Principal</div>
                    <div className="text-neutral-secondary font-medium">18:00</div>
                  </div>
                  <div className="bg-neutral-card rounded-xl p-4 luxury-shadow">
                    <div className="font-semibold text-neutral-primary mb-1">Festa</div>
                    <div className="text-neutral-body">Salão Dourado</div>
                    <div className="text-neutral-secondary font-medium">20:00</div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="inline-flex items-center space-x-2 bg-neutral-800 text-white px-6 py-3 rounded-full font-medium">
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
