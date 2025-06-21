
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Heart, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-brown-50 to-gold-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 text-gold-200 floating-animation">
        <Heart className="h-8 w-8" fill="currentColor" />
      </div>
      <div className="absolute top-40 right-20 text-brown-200 floating-animation" style={{ animationDelay: '2s' }}>
        <Sparkles className="h-6 w-6" fill="currentColor" />
      </div>
      <div className="absolute bottom-20 left-20 text-gold-200 floating-animation" style={{ animationDelay: '4s' }}>
        <Star className="h-7 w-7" fill="currentColor" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-brown-200 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-accent" fill="currentColor" />
            <span className="text-sm font-medium text-brown-700">
              Mais de 10.000 casais confiaram em nós
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Crie o Site do Seu
            <span className="block gradient-text">Casamento dos Sonhos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-brown-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Templates luxuosos, editor intuitivo e todas as funcionalidades que você precisa para 
            compartilhar o amor da sua vida com família e amigos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-luxury hover:opacity-90 text-white px-8 py-4 text-lg group w-full sm:w-auto"
            >
              Começar Gratuitamente
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-brown-300 text-brown-700 hover:bg-brown-50 px-8 py-4 text-lg w-full sm:w-auto"
            >
              Ver Templates
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-1 text-sm text-brown-500">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-accent" fill="currentColor" />
              ))}
            </div>
            <span className="ml-2">4.9/5 baseado em 2.847 avaliações</span>
          </div>
        </div>

        {/* Hero Image/Mockup */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative">
            <div className="luxury-card rounded-2xl p-8 mx-4">
              <div className="bg-gradient-to-br from-brown-50 to-gold-50 rounded-xl p-8 text-center">
                <div className="inline-flex items-center space-x-2 mb-4">
                  <Heart className="h-6 w-6 text-primary" fill="currentColor" />
                  <span className="text-2xl font-bold gradient-text">Ana & João</span>
                  <Heart className="h-6 w-6 text-primary" fill="currentColor" />
                </div>
                <p className="text-brown-600 mb-4">15 de Dezembro, 2024</p>
                <p className="text-sm text-brown-500 mb-6">
                  Junte-se a nós para celebrar nosso amor eterno
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white/80 rounded-lg p-4">
                    <div className="font-semibold text-brown-700">Cerimônia</div>
                    <div className="text-brown-500">Igreja São José</div>
                    <div className="text-brown-400">16:00</div>
                  </div>
                  <div className="bg-white/80 rounded-lg p-4">
                    <div className="font-semibold text-brown-700">Recepção</div>
                    <div className="text-brown-500">Fazenda Vista Alegre</div>
                    <div className="text-brown-400">18:00</div>
                  </div>
                  <div className="bg-white/80 rounded-lg p-4">
                    <div className="font-semibold text-brown-700">Festa</div>
                    <div className="text-brown-500">Salão Dourado</div>
                    <div className="text-brown-400">20:00</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating elements around mockup */}
            <div className="absolute -top-4 -left-4 bg-white luxury-shadow rounded-full p-3">
              <Heart className="h-6 w-6 text-accent" fill="currentColor" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white luxury-shadow rounded-full p-3">
              <Sparkles className="h-6 w-6 text-primary" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
