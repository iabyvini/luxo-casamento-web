
import { Card, CardContent } from "@/components/ui/card";
import { 
  Palette, 
  Smartphone, 
  Users, 
  Gift, 
  MapPin, 
  Calendar,
  Camera,
  Share2,
  Star,
  Heart,
  Sparkles,
  Zap
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  const features = [
    {
      icon: Palette,
      title: "Personalização Inteligente",
      description: "Nossa IA cria designs únicos baseados no seu estilo e personalidade como casal.",
      emotion: "Seja autêntico e único",
      color: "from-purple-400 to-pink-400",
      delay: "0s"
    },
    {
      icon: Heart,
      title: "Histórias que Emocionam",
      description: "Conte sua linda história de amor de forma visual e tocante para todos os convidados.",
      emotion: "Compartilhe seu amor",
      color: "from-rose-400 to-red-400",
      delay: "0.1s"
    },
    {
      icon: Smartphone,
      title: "Perfeito em Qualquer Tela",
      description: "Seus convidados verão o site perfeito no celular, tablet ou computador.",
      emotion: "Alcance todos, onde estiverem",
      color: "from-blue-400 to-cyan-400",
      delay: "0.2s"
    },
    {
      icon: Users,
      title: "Lista VIP de Convidados",
      description: "Gerencie confirmações com elegância e saiba exatamente quem celebrará com vocês.",
      emotion: "Organize sem estresse",
      color: "from-green-400 to-emerald-400",
      delay: "0.3s"
    },
    {
      icon: Gift,
      title: "Lista de Presentes Integrada",
      description: "Facilite a vida dos convidados com integração às melhores lojas online.",
      emotion: "Receba exatamente o que desejam",
      color: "from-amber-400 to-orange-400",
      delay: "0.4s"
    },
    {
      icon: MapPin,
      title: "Nunca Mais se Percam",
      description: "Mapas integrados e instruções claras para garantir que todos cheguem no horário.",
      emotion: "Todos no lugar certo, na hora certa",
      color: "from-teal-400 to-green-400",
      delay: "0.5s"
    },
    {
      icon: Calendar,
      title: "Timeline do Dia Perfeito",
      description: "Organize cada momento especial para que nada seja esquecido ou atrasado.",
      emotion: "Cada segundo planejado com amor",
      color: "from-indigo-400 to-purple-400",
      delay: "0.6s"
    },
    {
      icon: Camera,
      title: "Galeria de Memórias",
      description: "Compartilhe os momentos mais especiais da jornada de vocês até o altar.",
      emotion: "Revivam cada momento mágico",
      color: "from-pink-400 to-rose-400",
      delay: "0.7s"
    }
  ];

  return (
    <section id="funcionalidades" className="py-24 bg-white relative overflow-hidden">
      {/* Single minimal decorative element */}
      <div className="absolute top-32 right-24 opacity-[0.08]">
        <div className="w-8 h-8 rounded-full bg-gradient-luxury"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 elegant-entrance">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-200 rounded-full px-6 py-3 mb-6 luxury-shadow">
            <div className="bg-gradient-luxury p-2 rounded-full">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-medium text-[#3C2B20]">
              Funcionalidades que Encantam
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-8">
            <span className="text-[#3C2B20]">Tudo que Vocês Precisam</span>
            <span className="block gradient-text text-5xl md:text-6xl lg:text-7xl font-dancing mt-2">
              para um Dia Perfeito
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-[#5D4037] max-w-3xl mx-auto leading-relaxed font-light">
            Ferramentas inteligentes que transformam a organização do seu casamento em uma 
            <span className="font-medium text-[#3C2B20]"> experiência mágica e sem estresse</span>.
          </p>
        </div>

        {/* Dynamic Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="luxury-card hover:scale-105 transition-all duration-500 group cursor-pointer relative overflow-hidden elegant-entrance"
              style={{ animationDelay: feature.delay }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <CardContent className="p-8 text-center relative">
                <div className={`bg-gradient-to-br ${feature.color} p-4 rounded-2xl inline-flex mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-lg font-playfair font-semibold text-[#3C2B20] mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-[#5D4037] text-sm leading-relaxed mb-4 font-light">
                  {feature.description}
                </p>
                
                <div className="bg-gradient-to-r from-amber-50 to-rose-50 rounded-full px-4 py-2 border border-amber-200/50">
                  <span className="text-xs font-medium text-[#3C2B20] flex items-center justify-center space-x-1">
                    <Heart className="h-3 w-3" fill="currentColor" />
                    <span>{feature.emotion}</span>
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center elegant-entrance" style={{ animationDelay: '0.8s' }}>
          <div className="luxury-card rounded-3xl p-12 md:p-16 bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 border-2 border-amber-200/50 relative overflow-hidden">
            {/* Single minimal background decoration */}
            <div className="absolute bottom-8 right-8 text-amber-200 opacity-[0.08]">
              <Sparkles className="h-12 w-12" fill="currentColor" />
            </div>
            
            <div className="max-w-3xl mx-auto relative">
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-luxury p-6 rounded-3xl luxury-shadow">
                  <Heart className="h-12 w-12 text-white" fill="currentColor" />
                </div>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-playfair font-bold text-[#3C2B20] mb-6">
                Prontos para Começar esta Jornada?
              </h3>
              
              <p className="text-[#5D4037] mb-10 text-xl leading-relaxed font-light">
                Junte-se a mais de <span className="font-bold text-[#3C2B20]">10.000 casais apaixonados</span> que já criaram 
                seus sites de casamento conosco. <span className="font-medium text-[#3C2B20]">O amor de vocês merece ser celebrado com estilo!</span>
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button 
                  onClick={handleStartQuiz}
                  className="btn-premium text-white px-10 py-4 text-lg font-medium group transition-all duration-300 hover:scale-105"
                >
                  <Sparkles className="mr-3 h-5 w-5" fill="currentColor" />
                  Criar Nosso Site Agora
                  <Heart className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform" fill="currentColor" />
                </button>
                
                <div className="flex items-center space-x-2 text-[#5D4037]">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400" fill="currentColor" />
                    ))}
                  </div>
                  <span className="font-medium">Gratuito para começar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
