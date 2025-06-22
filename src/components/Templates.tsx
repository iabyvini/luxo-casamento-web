
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Palette, Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Templates = () => {
  const navigate = useNavigate();

  const templates = [
    {
      id: "classico",
      name: "Clássico Elegante",
      description: "Perfeito para casamentos tradicionais com toque sofisticado",
      image: "/lovable-uploads/classic-template.jpg",
      colors: ["#D4AF37", "#FFFFFF", "#3C2B20"],
      features: ["Layout tradicional", "Tipografia elegante", "Cores douradas"],
      style: "Tradicional",
      couples: "Ana & João",
      mockData: {
        coupleNames: "Ana & João",
        weddingDate: "2024-12-25",
        location: "Igreja São José, SP"
      }
    },
    {
      id: "moderno",
      name: "Moderno Minimalista",
      description: "Design clean e contemporâneo para casais modernos",
      image: "/lovable-uploads/modern-template.jpg", 
      colors: ["#2D2D2D", "#FFFFFF", "#E5E5E5"],
      features: ["Design minimalista", "Layout responsivo", "Tipografia moderna"],
      style: "Contemporâneo",
      couples: "Camila & Daniel",
      mockData: {
        coupleNames: "Camila & Daniel", 
        weddingDate: "2024-11-30",
        location: "Espaço Villa Moderna, SP"
      }
    },
    {
      id: "boho",
      name: "Boho Chic",
      description: "Estilo livre e natural para casamentos ao ar livre",
      image: "/lovable-uploads/boho-template.jpg",
      colors: ["#D2691E", "#8FBC8F", "#F5F5DC"],
      features: ["Elementos naturais", "Cores terrosas", "Estilo descontraído"],
      style: "Natural",
      couples: "Flora & Vinícius", 
      mockData: {
        coupleNames: "Flora & Vinícius",
        weddingDate: "2024-10-15", 
        location: "Fazenda Vista Verde, Ibiúna"
      }
    },
    {
      id: "vintage",
      name: "Vintage Romance",
      description: "Inspirado no romantismo dos anos dourados",
      image: "/lovable-uploads/vintage-template.jpg",
      colors: ["#8B0000", "#FFD700", "#F5F5F5"],
      features: ["Ornamentos clássicos", "Paleta vintage", "Romantismo retrô"],
      style: "Retrô",
      couples: "Isabella & Ricardo",
      mockData: {
        coupleNames: "Isabella & Ricardo",
        weddingDate: "2024-09-20",
        location: "Palacete dos Cedros, SP"
      }
    }
  ];

  const handlePreview = (templateId: string) => {
    navigate(`/template-preview/${templateId}`);
  };

  const handleUseTemplate = (templateId: string) => {
    navigate('/quiz', { state: { selectedTemplate: templateId } });
  };

  return (
    <section id="templates" className="py-24 bg-gradient-to-br from-neutral-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Palette className="h-4 w-4" />
            <span>Templates Exclusivos</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-primary mb-6">
            Escolha Seu Template Perfeito
          </h2>
          
          <p className="text-xl text-neutral-body max-w-3xl mx-auto leading-relaxed">
            Cada template foi cuidadosamente criado para diferentes estilos de casamento. 
            Personalize cores, textos e imagens para criar um site único.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {templates.map((template) => (
            <Card key={template.id} className="template-card group overflow-hidden">
              <div className="relative">
                {/* Template Preview Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                        <Heart className="h-8 w-8 text-rose-600" fill="currentColor" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">
                        {template.couples}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {template.mockData.weddingDate.split('-').reverse().join('/')}
                      </p>
                      <div className="text-xs text-gray-500">
                        {template.mockData.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Style Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700">
                      {template.style}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-primary mb-2">
                        {template.name}
                      </h3>
                      <p className="text-neutral-body text-sm mb-3">
                        {template.description}
                      </p>
                    </div>
                  </div>

                  {/* Color Palette */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Palette className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600 font-medium">Paleta de Cores</span>
                    </div>
                    <div className="flex space-x-2">
                      {template.colors.map((color, idx) => (
                        <div
                          key={idx}
                          className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Características:</h4>
                    <div className="flex flex-wrap gap-1">
                      {template.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => handlePreview(template.id)}
                      className="flex-1 text-sm"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Visualizar
                    </Button>
                    <Button
                      onClick={() => handleUseTemplate(template.id)}
                      className="flex-1 bg-gradient-luxury hover:opacity-90 text-white text-sm"
                    >
                      <Star className="h-4 w-4 mr-2" />
                      Usar Template
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-primary mb-4">
              Não encontrou o template ideal?
            </h3>
            <p className="text-neutral-body mb-6">
              Todos os templates são totalmente personalizáveis. Você pode ajustar cores, 
              fontes, layouts e muito mais durante a criação do seu site.
            </p>
            <Button 
              onClick={() => navigate('/quiz')}
              size="lg"
              className="bg-gradient-luxury hover:opacity-90 text-white"
            >
              Começar Personalização
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Templates;
