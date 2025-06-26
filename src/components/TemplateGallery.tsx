
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Eye, Heart, Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { EXTENDED_TEMPLATE_LIBRARY, ExtendedTemplateItem } from "@/data/extendedTemplateLibrary";

const TemplateGallery = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [favorites, setFavorites] = useState<string[]>([]);

  const categories = [
    { id: "all", name: "Todos", count: EXTENDED_TEMPLATE_LIBRARY.length },
    { id: "romantic", name: "Romântico", count: EXTENDED_TEMPLATE_LIBRARY.filter(t => t.category === 'romantic').length },
    { id: "modern", name: "Moderno", count: EXTENDED_TEMPLATE_LIBRARY.filter(t => t.category === 'modern').length },
    { id: "boho", name: "Boho", count: EXTENDED_TEMPLATE_LIBRARY.filter(t => t.category === 'boho').length },
    { id: "vintage", name: "Vintage", count: EXTENDED_TEMPLATE_LIBRARY.filter(t => t.category === 'vintage').length },
    { id: "tropical", name: "Tropical", count: EXTENDED_TEMPLATE_LIBRARY.filter(t => t.category === 'tropical').length },
    { id: "minimal", name: "Minimal", count: EXTENDED_TEMPLATE_LIBRARY.filter(t => t.category === 'minimal').length },
    { id: "rustic", name: "Rústico", count: EXTENDED_TEMPLATE_LIBRARY.filter(t => t.category === 'rustic').length },
    { id: "glamour", name: "Glamour", count: EXTENDED_TEMPLATE_LIBRARY.filter(t => t.category === 'glamour').length },
    { id: "artistic", name: "Artístico", count: EXTENDED_TEMPLATE_LIBRARY.filter(t => t.category === 'artistic').length },
    { id: "classic", name: "Clássico", count: EXTENDED_TEMPLATE_LIBRARY.filter(t => t.category === 'classic').length }
  ];

  const filteredTemplates = EXTENDED_TEMPLATE_LIBRARY.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleTemplateSelect = (template: ExtendedTemplateItem) => {
    // Criar um novo site com o template selecionado
    navigate('/preview', { 
      state: { 
        selectedTemplate: template,
        siteData: {
          templateName: template.name,
          coupleNames: "João & Maria",
          weddingDate: "2024-12-25",
          welcomeMessage: "Bem-vindos ao nosso casamento!",
          quizAnswers: {}
        }
      }
    });
  };

  const handlePreview = (template: ExtendedTemplateItem) => {
    navigate(`/template-preview/${template.id}`);
  };

  const toggleFavorite = (templateId: string) => {
    setFavorites(prev => 
      prev.includes(templateId) 
        ? prev.filter(id => id !== templateId)
        : [...prev, templateId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Escolha Seu Template Perfeito
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore nossa coleção de 50 templates únicos, cada um com seu próprio estilo e personalidade
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Buscar templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                <Filter className="h-3 w-3" />
                {category.name}
                <Badge variant="secondary" className="ml-1">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTemplates.map((template) => (
            <Card key={template.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* Template Preview */}
              <CardHeader className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br relative overflow-hidden"
                     style={{
                       background: `linear-gradient(135deg, ${template.colors[0]}, ${template.colors[1]})`
                     }}>
                  
                  {/* Mock Content Preview */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-center items-center text-center">
                    <div className="text-white mb-2" 
                         style={{ fontFamily: template.fonts.heading }}>
                      <h3 className="text-lg font-bold mb-1">João & Maria</h3>
                      <p className="text-sm opacity-80">25 • 12 • 2024</p>
                    </div>
                    <div className="text-white text-xs opacity-60" 
                         style={{ fontFamily: template.fonts.body }}>
                      {template.sections.slice(0, 3).join(" • ")}
                    </div>
                  </div>

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handlePreview(template)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleTemplateSelect(template)}
                      className="bg-rose-500 hover:bg-rose-600 text-white"
                    >
                      Escolher
                    </Button>
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(template.id)}
                    className="absolute top-2 right-2 p-2 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all"
                  >
                    <Heart 
                      className={`h-4 w-4 ${favorites.includes(template.id) ? 'text-red-500 fill-current' : 'text-gray-600'}`} 
                    />
                  </button>
                </div>
              </CardHeader>

              <CardContent className="p-4">
                <div className="mb-3">
                  <h3 className="font-bold text-gray-900 mb-1">{template.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{template.description}</p>
                </div>

                {/* Color Palette */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-gray-500">Cores:</span>
                  <div className="flex gap-1">
                    {template.colors.slice(0, 4).map((color, idx) => (
                      <div
                        key={idx}
                        className="w-4 h-4 rounded-full border border-gray-200"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {template.tags.slice(0, 3).map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Category */}
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="capitalize">
                    {template.category}
                  </Badge>
                  <div className="text-xs text-gray-500">
                    {template.sections.length} seções
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Nenhum template encontrado</p>
              <p className="text-sm">Tente ajustar sua busca ou filtros</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateGallery;
