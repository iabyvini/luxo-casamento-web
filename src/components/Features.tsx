
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
  Star
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Palette,
      title: "Editor Intuitivo",
      description: "Personalize cores, fontes e layout com facilidade. Drag & drop simples para criar seu site perfeito."
    },
    {
      icon: Smartphone,
      title: "Design Responsivo",
      description: "Seu site ficará perfeito em qualquer dispositivo - celular, tablet ou computador."
    },
    {
      icon: Users,
      title: "Lista de Convidados",
      description: "Gerencie confirmações de presença e acompanhe quem virá ao seu grande dia."
    },
    {
      icon: Gift,
      title: "Lista de Presentes",
      description: "Integração com lojas online para facilitar a escolha dos presentes pelos convidados."
    },
    {
      icon: MapPin,
      title: "Mapas e Localização",
      description: "Ajude seus convidados a chegarem ao local com mapas integrados e instruções claras."
    },
    {
      icon: Calendar,
      title: "Cronograma do Evento",
      description: "Organize toda a programação do seu casamento de forma clara e elegante."
    },
    {
      icon: Camera,
      title: "Galeria de Fotos",
      description: "Compartilhe suas melhores fotos de casal e momentos especiais da relação."
    },
    {
      icon: Share2,
      title: "Compartilhamento Fácil",
      description: "Link personalizado para compartilhar nas redes sociais e convites digitais."
    }
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-brown-50 rounded-full px-4 py-2 mb-4">
            <Star className="h-4 w-4 text-accent" fill="currentColor" />
            <span className="text-sm font-medium text-brown-700">
              Funcionalidades Completas
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Tudo que Você Precisa para um
            <span className="block gradient-text">Casamento Perfeito</span>
          </h2>
          <p className="text-lg text-brown-600 max-w-2xl mx-auto">
            Ferramentas profissionais para criar, personalizar e gerenciar 
            o site do seu casamento com elegância e simplicidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="luxury-card hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-luxury p-3 rounded-lg inline-flex mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-brown-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-brown-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="luxury-card rounded-2xl p-8 md:p-12 bg-gradient-to-br from-brown-50 to-gold-50">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              Pronto para Começar?
            </h3>
            <p className="text-brown-600 mb-6 max-w-xl mx-auto">
              Junte-se a milhares de casais que já criaram seus sites de casamento conosco. 
              Comece gratuitamente hoje mesmo!
            </p>
            <button className="bg-gradient-luxury hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Criar Meu Site Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
