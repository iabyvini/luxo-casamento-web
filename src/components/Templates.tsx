import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import TemplatesHeader from "./templates/TemplatesHeader";
import TemplateCard from "./templates/TemplateCard";

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
        <TemplatesHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onPreview={handlePreview}
              onUseTemplate={handleUseTemplate}
            />
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
