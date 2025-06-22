import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Sparkles, Leaf, Crown, Zap, Flower2, Camera, Palette } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { InlineLoader } from "./LoadingStates";
import { ScrollToSection } from "./SmoothScroll";

const Templates = () => {
  const navigate = useNavigate();
  const [loadingTemplate, setLoadingTemplate] = useState<string | null>(null);

  const templates = [
    {
      id: 1,
      name: "Elegance Royal",
      category: "Clássico",
      image: "/placeholder.svg?height=400&width=300",
      colors: ["#a67c52", "#d4af37", "#f5f5f5"],
      description: "Majestade e tradição em cada detalhe",
      icon: Crown,
      style: "classical",
      features: ["Tipografia serifada", "Ornamentos dourados", "Layout tradicional"]
    },
    {
      id: 2,
      name: "Modern Love",
      category: "Moderno",
      image: "/placeholder.svg?height=400&width=300",
      colors: ["#2c3e50", "#e74c3c", "#ffffff"],
      description: "Minimalismo contemporâneo e elegante",
      icon: Zap,
      style: "modern",
      features: ["Design clean", "Tipografia sans-serif", "Layouts assimétricos"]
    },
    {
      id: 3,
      name: "Garden Romance",
      category: "Romântico",
      image: "/placeholder.svg?height=400&width=300",
      colors: ["#8fbc8f", "#dda0dd", "#f0f8ff"],
      description: "Amor florescendo em jardins secretos",
      icon: Flower2,
      style: "romantic",
      features: ["Elementos florais", "Cores suaves", "Detalhes delicados"]
    },
    {
      id: 4,
      name: "Pure Minimalist",
      category: "Minimalista",
      image: "/placeholder.svg?height=400&width=300",
      colors: ["#000000", "#ffffff", "#f5f5f5"],
      description: "Simplicidade que fala por si só",
      icon: Palette,
      style: "minimal",
      features: ["Espaços brancos", "Tipografia limpa", "Foco no essencial"]
    },
    {
      id: 5,
      name: "Vintage Charm",
      category: "Vintage",
      image: "/placeholder.svg?height=400&width=300",
      colors: ["#8b4513", "#daa520", "#f5deb3"],
      description: "Nostalgia e charme de épocas passadas",
      icon: Camera,
      style: "vintage",
      features: ["Filtros sépia", "Ornamentos clássicos", "Texturas vintage"]
    },
    {
      id: 6,
      name: "Bohemian Dream",
      category: "Boho",
      image: "/placeholder.svg?height=400&width=300",
      colors: ["#d2691e", "#dda0dd", "#f0e68c"],
      description: "Espírito livre com alma artística",
      icon: Leaf,
      style: "boho",
      features: ["Elementos naturais", "Texturas orgânicas", "Liberdade criativa"]
    }
  ];

  const categories = ["Todos", "Clássico", "Moderno", "Romântico", "Minimalista", "Vintage", "Boho"];

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

  const getTemplateStyle = (style: string) => {
    switch (style) {
      case 'classical':
        return "bg-gradient-to-br from-amber-50 to-yellow-100 border-amber-200";
      case 'modern':
        return "bg-gradient-to-br from-slate-50 to-gray-100 border-slate-200";
      case 'romantic':
        return "bg-gradient-to-br from-pink-50 to-rose-100 border-pink-200";
      case 'minimal':
        return "bg-gradient-to-br from-gray-50 to-white border-gray-200";
      case 'vintage':
        return "bg-gradient-to-br from-amber-50 to-orange-100 border-orange-200";
      case 'boho':
        return "bg-gradient-to-br from-green-50 to-emerald-100 border-green-200";
      default:
        return "bg-gradient-to-br from-brown-50 to-gold-50 border-brown-200";
    }
  };

  return (
    <section id="templates" className="py-24 bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-gradient-luxury"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-gradient-luxury"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 elegant-entrance">
          <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm border border-amber-200 rounded-full px-6 py-3 mb-6 luxury-shadow">
            <div className="flex -space-x-1">
              <Crown className="h-5 w-5 text-amber-600" />
              <Sparkles className="h-5 w-5 text-rose-500" fill="currentColor" />
              <Heart className="h-5 w-5 text-pink-500" fill="currentColor" />
            </div>
            <span className="text-sm font-medium text-brown-700">
              Templates Luxuosos & Personalizados
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-8">
            <span className="text-brown-800">Escolha o Template</span>
            <span className="block gradient-text text-5xl md:text-6xl lg:text-7xl font-dancing mt-2">
              Perfeito para Vocês
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-brown-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Designs profissionais criados especialmente para casamentos brasileiros. 
            <span className="font-medium text-amber-700"> Cada template conta sua história única</span>.
          </p>

          {/* Enhanced Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={
                  index === 0 
                    ? "btn-premium text-white px-6 py-3 rounded-full font-medium" 
                    : "border-2 border-brown-300 text-brown-700 hover:bg-brown-50 px-6 py-3 rounded-full font-medium bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Premium Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {templates.map((template, index) => (
            <Card key={template.id} className={`template-card luxury-card overflow-hidden group relative ${getTemplateStyle(template.style)} elegant-entrance`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                {/* Template Preview Area */}
                <div className="aspect-[4/5] p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    {template.style === 'classical' && (
                      <>
                        <Crown className="absolute top-4 left-4 h-8 w-8" />
                        <Crown className="absolute bottom-4 right-4 h-8 w-8" />
                      </>
                    )}
                    {template.style === 'romantic' && (
                      <>
                        <Heart className="absolute top-4 left-4 h-6 w-6" fill="currentColor" />
                        <Flower2 className="absolute top-4 right-4 h-6 w-6" />
                        <Heart className="absolute bottom-4 right-4 h-6 w-6" fill="currentColor" />
                      </>
                    )}
                    {template.style === 'boho' && (
                      <>
                        <Leaf className="absolute top-4 left-4 h-7 w-7" />
                        <Sparkles className="absolute top-4 right-4 h-5 w-5" />
                        <Leaf className="absolute bottom-4 right-4 h-7 w-7" />
                      </>
                    )}
                  </div>

                  {/* Template Icon */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 mb-6 luxury-shadow group-hover:scale-110 transition-transform duration-300">
                    <template.icon className="h-12 w-12 text-brown-600" />
                  </div>
                  
                  {/* Template Preview */}
                  <div className="text-2xl font-dancing font-bold gradient-text mb-3">
                    {template.name}
                  </div>
                  
                  <div className="text-brown-600 mb-4 font-light leading-relaxed">
                    {template.description}
                  </div>
                  
                  {/* Color Palette */}
                  <div className="flex justify-center space-x-2 mb-4">
                    {template.colors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className="w-6 h-6 rounded-full border-2 border-white shadow-lg"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  {/* Features */}
                  <div className="text-xs text-brown-500 space-y-1">
                    {template.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-1">
                        <Sparkles className="h-3 w-3" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Button size="sm" variant="secondary" className="bg-white/95 text-brown-800 hover:bg-white rounded-xl px-6 py-3 font-medium">
                      <Eye className="h-4 w-4 mr-2" />
                      Visualizar Preview
                    </Button>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-gradient-luxury text-white text-xs px-3 py-2 rounded-full font-medium shadow-lg">
                  {template.category}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair font-semibold text-brown-800 mb-3 text-lg">
                  {template.name}
                </h3>
                <p className="text-brown-600 mb-6 leading-relaxed font-light">
                  {template.description}
                </p>
                <Button 
                  size="sm" 
                  onClick={() => handleUseTemplate(template.name)}
                  disabled={loadingTemplate === template.name}
                  className="w-full btn-premium text-white font-medium py-3 disabled:opacity-50"
                >
                  {loadingTemplate === template.name ? (
                    <InlineLoader size="sm" />
                  ) : (
                    <>
                      <Heart className="mr-2 h-4 w-4" fill="currentColor" />
                      Usar Este Template
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA with smooth scroll navigation */}
        <div className="text-center elegant-entrance" style={{ animationDelay: '0.6s' }}>
          <div className="luxury-card rounded-3xl p-12 bg-gradient-to-br from-white/95 to-amber-50/80 backdrop-blur-sm border-2 border-amber-200/50">
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-luxury p-4 rounded-2xl">
                  <Sparkles className="h-8 w-8 text-white" fill="currentColor" />
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-playfair font-bold gradient-text mb-4">
                Não sabe qual escolher?
              </h3>
              
              <p className="text-brown-600 mb-8 text-lg leading-relaxed font-light">
                Nossa IA inteligente criará o template perfeito baseado no seu estilo, 
                <span className="font-medium text-amber-700"> localização e preferências pessoais</span>.
              </p>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleStartQuiz}
                className="border-2 border-brown-300 text-brown-700 hover:bg-brown-50 px-10 py-4 text-lg rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <Sparkles className="mr-2 h-5 w-5" fill="currentColor" />
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
