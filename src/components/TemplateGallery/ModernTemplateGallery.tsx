
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Heart, ArrowLeft, Filter } from "lucide-react";
import { TEMPLATE_LIBRARY, TEMPLATE_CATEGORIES, TemplateCategory, TemplateProfile } from "@/data/templateLibrary";
import { searchTemplates, getTemplatesByCategory } from "@/data/templateLibrary";

const ModernTemplateGallery = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory | 'all'>('all');
  const [filteredTemplates, setFilteredTemplates] = useState<TemplateProfile[]>(TEMPLATE_LIBRARY);

  useEffect(() => {
    let templates = TEMPLATE_LIBRARY;
    
    // Filtrar por categoria
    if (selectedCategory !== 'all') {
      templates = getTemplatesByCategory(selectedCategory);
    }
    
    // Filtrar por busca
    if (searchQuery.trim()) {
      templates = searchTemplates(searchQuery).filter(template => 
        selectedCategory === 'all' || template.categories.includes(selectedCategory)
      );
    }
    
    setFilteredTemplates(templates);
  }, [searchQuery, selectedCategory]);

  const handleTemplateSelect = (template: TemplateProfile) => {
    // Por enquanto, navega para o preview com o template selecionado
    navigate(`/template-preview/${template.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center mb-6">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Escolha Seu Template Perfeito
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore nossa coleção de templates únicos, cada um com seu próprio estilo e personalidade
            </p>
          </div>

          {/* Search */}
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
        </div>
      </div>

      {/* Category Filters */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === 'all' ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory('all')}
              className="flex items-center gap-2"
            >
              <Filter className="h-3 w-3" />
              Todos
              <Badge variant="secondary" className="ml-1">
                {TEMPLATE_LIBRARY.length}
              </Badge>
            </Button>
            
            {Object.entries(TEMPLATE_CATEGORIES).map(([key, category]) => (
              <Button
                key={key}
                variant={selectedCategory === key ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(key as TemplateCategory)}
                className="flex items-center gap-2"
              >
                <Filter className="h-3 w-3" />
                {category.name}
                <Badge variant="secondary" className="ml-1">
                  {getTemplatesByCategory(key as TemplateCategory).length}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="container mx-auto px-4 py-8">
        {filteredTemplates.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Nenhum template encontrado
            </h3>
            <p className="text-gray-500">
              Tente ajustar seus filtros ou termo de busca
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleTemplateSelect(template)}
              >
                {/* Template Preview */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{ 
                      background: `linear-gradient(135deg, ${template.palette.primary} 0%, ${template.palette.secondary} 50%, ${template.palette.accent} 100%)` 
                    }}
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div 
                        className="text-2xl font-bold mb-2"
                        style={{ 
                          fontFamily: template.typography.heading,
                          color: template.palette.primary 
                        }}
                      >
                        {template.name}
                      </div>
                      <div 
                        className="text-sm opacity-75"
                        style={{ 
                          fontFamily: template.typography.body,
                          color: template.tokens.text 
                        }}
                      >
                        Preview
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      className="bg-white text-gray-900 hover:bg-gray-100"
                    >
                      Visualizar
                    </Button>
                  </div>
                </div>
                
                {/* Template Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-gray-900">{template.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{template.description}</p>
                  
                  {/* Categories */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {template.categories.map((category) => (
                      <span 
                        key={category}
                        className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded"
                      >
                        {TEMPLATE_CATEGORIES[category]?.name || category}
                      </span>
                    ))}
                  </div>

                  {/* Color Palette */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Cores:</span>
                    <div className="flex gap-1">
                      {Object.values(template.palette).map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border border-gray-200"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModernTemplateGallery;
