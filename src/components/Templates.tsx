
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Sparkles, Crown, Camera, Palette } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { InlineLoader } from "./LoadingStates";

const Templates = () => {
  const navigate = useNavigate();
  const [loadingTemplate, setLoadingTemplate] = useState<string | null>(null);

  const templates = [
    {
      id: 1,
      name: "Elegance Royal",
      category: "Clássico",
      colors: ["#a67c52", "#d4af37", "#f5f5f5"],
      description: "Elegância clássica com toques dourados",
      icon: Crown,
      style: "classical",
      preview: {
        couple: "Marina & Eduardo",
        date: "12.05.2024",
        bg: "bg-gradient-to-br from-amber-50 to-yellow-100"
      }
    },
    {
      id: 2,
      name: "Modern Love",
      category: "Moderno",
      colors: ["#2c3e50", "#e74c3c", "#ffffff"],
      description: "Minimalismo contemporâneo e sofisticado",
      icon: Palette,
      style: "modern",
      preview: {
        couple: "Ana & Rafael",
        date: "18.09.2024",
        bg: "bg-gradient-to-br from-slate-50 to-gray-100"
      }
    },
    {
      id: 3,
      name: "Garden Romance",
      category: "Romântico",
      colors: ["#8fbc8f", "#dda0dd", "#f0f8ff"],
      description: "Romance delicado com elementos florais",
      icon: Heart,
      style: "romantic",
      preview: {
        couple: "Isabella & João",
        date: "25.11.2024",
        bg: "bg-gradient-to-br from-pink-50 to-rose-100"
      }
    },
    {
      id: 4,
      name: "Pure Minimalist",
      category: "Minimalista",
      colors: ["#000000", "#ffffff", "#f5f5f5"],
      description: "Simplicidade e elegância em cada detalhe",
      icon: Palette,
      style: "minimal",
      preview: {
        couple: "Camila & Lucas",
        date: "07.04.2024",
        bg: "bg-gradient-to-br from-gray-50 to-white"
      }
    },
    {
      id: 5,
      name: "Vintage Charm",
      category: "Vintage",
      colors: ["#8b4513", "#daa520", "#f5deb3"],
      description: "Charme nostálgico de épocas douradas",
      icon: Camera,
      style: "vintage",
      preview: {
        couple: "Letícia & Pedro",
        date: "14.08.2024",
        bg: "bg-gradient-to-br from-amber-50 to-orange-100"
      }
    },
    {
      id: 6,
      name: "Bohemian Dream",
      category: "Boho",
      colors: ["#d2691e", "#dda0dd", "#f0e68c"],
      description: "Espírito livre com alma artística",
      icon: Sparkles,
      style: "boho",
      preview: {
        couple: "Fernanda & Gabriel",
        date: "30.06.2024",
        bg: "bg-gradient-to-br from-green-50 to-emerald-100"
      }
    }
  ];

  const handleUseTemplate = async (templateName: string) => {
    setLoadingTemplate(templateName);
    
    const coupleNames = prompt("Digite o nome do casal (ex: Ana & João):");
    const weddingDate = prompt("Digite a data do casamento (YYYY-MM-DD):");
    
    if (coupleNames && weddingDate) {
      // Simulate processing time for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      navigate('/preview', { 
        state: { 
          selectedTemplate: templateName,
          quizAnswers: {
            nomes: coupleNames,
            data_casamento: weddingDate
          }
        } 
      });
    }
    
    setLoadingTemplate(null);
  };

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  return (
    <section id="templates" className="py-24 bg-gradient-to-br from-white via-rose-50/30 to-amber-50/30">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Crown className="h-4 w-4" />
            <span>Templates Profissionais</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Escolha o <span className="text-rose-500">Template Perfeito</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Designs profissionais criados especialmente para casamentos brasileiros. 
            Cada template é único e conta sua história de forma especial.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {templates.map((template) => (
            <Card key={template.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className={`${template.preview.bg} p-8 text-center`}>
                {/* Template Preview */}
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/90 shadow-md">
                    <template.icon className="h-6 w-6 text-gray-700" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif text-gray-800">
                      {template.preview.couple}
                    </h3>
                    <div className="w-16 h-px bg-gray-400 mx-auto"></div>
                    <p className="text-sm text-gray-600 font-medium">
                      {template.preview.date}
                    </p>
                  </div>
                  
                  {/* Color Palette */}
                  <div className="flex justify-center space-x-2 pt-4">
                    {template.colors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-medium text-gray-700">{template.category}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {template.name}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {template.description}
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-300 hover:bg-gray-50"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Visualizar
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => handleUseTemplate(template.name)}
                      disabled={loadingTemplate === template.name}
                      className="flex-1 bg-rose-500 hover:bg-rose-600 text-white"
                    >
                      {loadingTemplate === template.name ? (
                        <InlineLoader size="sm" />
                      ) : (
                        <>
                          <Heart className="h-4 w-4 mr-2" />
                          Usar Este
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Não sabe qual escolher?
                </h3>
                <p className="text-gray-600">
                  Nossa IA inteligente criará o template perfeito baseado no seu estilo, 
                  localização e preferências pessoais.
                </p>
              </div>
              
              <Button 
                size="lg"
                onClick={handleStartQuiz}
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-medium"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Fazer Quiz Personalizado
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Templates;
