
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Sparkles } from "lucide-react";

const Templates = () => {
  const templates = [
    {
      id: 1,
      name: "Elegance",
      category: "Clássico",
      image: "/placeholder.svg?height=400&width=300",
      colors: ["#a67c52", "#d4af37", "#f5f5f5"],
      description: "Design clássico com toques dourados elegantes"
    },
    {
      id: 2,
      name: "Modern Love",
      category: "Moderno",
      image: "/placeholder.svg?height=400&width=300",
      colors: ["#2c3e50", "#e74c3c", "#ffffff"],
      description: "Linhas clean e tipografia moderna"
    },
    {
      id: 3,
      name: "Garden Romance",
      category: "Romântico",
      image: "/placeholder.svg?height=400&width=300",
      colors: ["#8fbc8f", "#dda0dd", "#f0f8ff"],
      description: "Inspirado em jardins e natureza"
    },
    {
      id: 4,
      name: "Minimalist",
      category: "Minimalista",
      image: "/placeholder.svg?height=400&width=300",
      colors: ["#000000", "#ffffff", "#f5f5f5"],
      description: "Simplicidade e elegância em cada detalhe"
    },
    {
      id: 5,
      name: "Vintage Charm",
      category: "Vintage",
      image: "/placeholder.svg?height=400&width=300",
      colors: ["#8b4513", "#daa520", "#f5deb3"],
      description: "Nostalgia e charme do passado"
    },
    {
      id: 6,
      name: "Bohemian Dream",
      category: "Boho",
      image: "/placeholder.svg?height=400&width=300",
      colors: ["#d2691e", "#dda0dd", "#f0e68c"],
      description: "Espírito livre com toques artísticos"
    }
  ];

  const categories = ["Todos", "Clássico", "Moderno", "Romântico", "Minimalista", "Vintage", "Boho"];

  return (
    <section id="templates" className="py-20 bg-gradient-to-br from-gold-50 to-brown-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-brown-200 rounded-full px-4 py-2 mb-4">
            <Sparkles className="h-4 w-4 text-accent" fill="currentColor" />
            <span className="text-sm font-medium text-brown-700">
              Templates Luxuosos
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Escolha o Template
            <span className="block gradient-text">Perfeito para Vocês</span>
          </h2>
          <p className="text-lg text-brown-600 max-w-2xl mx-auto mb-8">
            Designs profissionais criados especialmente para casamentos brasileiros. 
            Cada template é totalmente personalizável.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={
                  index === 0 
                    ? "bg-gradient-luxury text-white" 
                    : "border-brown-300 text-brown-700 hover:bg-brown-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {templates.map((template) => (
            <Card key={template.id} className="luxury-card overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-brown-100 to-gold-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Heart className="h-12 w-12 text-primary mx-auto mb-4" fill="currentColor" />
                    <div className="text-xl font-bold gradient-text mb-2">
                      {template.name}
                    </div>
                    <div className="text-sm text-brown-600 mb-4">
                      {template.description}
                    </div>
                    <div className="flex justify-center space-x-2">
                      {template.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button size="sm" variant="secondary" className="bg-white/90 text-brown-800">
                    <Eye className="h-4 w-4 mr-2" />
                    Visualizar
                  </Button>
                </div>
                <div className="absolute top-3 right-3 bg-brown-800 text-white text-xs px-2 py-1 rounded-full">
                  {template.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-brown-800 mb-2">
                  {template.name}
                </h3>
                <p className="text-sm text-brown-600 mb-4">
                  {template.description}
                </p>
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-luxury hover:opacity-90 text-white"
                >
                  Usar Este Template
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Templates CTA */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-brown-300 text-brown-700 hover:bg-brown-50 px-8 py-4"
          >
            Ver Todos os Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Templates;
