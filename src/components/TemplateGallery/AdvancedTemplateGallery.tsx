
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Heart, ArrowLeft, Filter, Eye, Palette, Type } from "lucide-react";
import { TEMPLATE_LIBRARY, TEMPLATE_CATEGORIES, TemplateCategory, TemplateProfile } from "@/data/templateLibrary";
import { searchTemplates, getTemplatesByCategory } from "@/data/templateLibrary";

const AdvancedTemplateGallery = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory | 'all'>('all');
  const [filteredTemplates, setFilteredTemplates] = useState<TemplateProfile[]>(TEMPLATE_LIBRARY);
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);

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
              Galeria Completa de Templates
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore nossa coleção de {TEMPLATE_LIBRARY.length} templates únicos, 
              cada um cuidadosamente desenvolvido com seu próprio estilo, paleta de cores e personalidade
            </p>
            <div className="mt-4 text-sm text-gray-500">
              ✨ Todos os templates são responsivos e otimizados para dispositivos móveis
            </div>
          </div>

          {/* Enhanced Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Buscar por nome, estilo ou características..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Heart className="h-4 w-4" />
              {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''} encontrado{filteredTemplates.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Category Filters */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === 'all' ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory('all')}
              className="flex items-center gap-2 h-10"
            >
              <Filter className="h-3 w-3" />
              Todos os Templates
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
                className="flex items-center gap-2 h-10"
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

      {/* Enhanced Templates Grid */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => handleTemplateSelect(template)}
                onMouseEnter={() => setHoveredTemplate(template.id)}
                onMouseLeave={() => setHoveredTemplate(null)}
              >
                {/* Enhanced Template Preview */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{ 
                      background: `linear-gradient(135deg, ${template.palette.primary} 0%, ${template.palette.secondary} 50%, ${template.palette.accent} 100%)` 
                    }}
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="text-center">
                      <div 
                        className="text-2xl font-bold mb-2 line-clamp-1"
                        style={{ 
                          fontFamily: template.typography.heading,
                          color: template.tokens.text 
                        }}
                      >
                        {template.name}
                      </div>
                      <div 
                        className="text-sm opacity-75"
                        style={{ 
                          fontFamily: template.typography.body,
                          color: template.tokens.textSecondary 
                        }}
                      >
                        Preview
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Hover Overlay */}
                  <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredTemplate === template.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="text-center">
                      <Button
                        size="sm"
                        className="bg-white text-gray-900 hover:bg-gray-100 mb-2"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Visualizar
                      </Button>
                      <div className="text-white text-xs">
                        Galeria: {template.galleryType} • Animação: {template.animationType}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Template Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
                      {template.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {template.description}
                  </p>
                  
                  {/* Enhanced Categories */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {template.categories.slice(0, 2).map((category) => (
                      <span 
                        key={category}
                        className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
                      >
                        {TEMPLATE_CATEGORIES[category]?.name || category}
                      </span>
                    ))}
                    {template.categories.length > 2 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        +{template.categories.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Enhanced Color Palette & Typography Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Palette className="h-3 w-3 text-gray-500" />
                      <span className="text-xs text-gray-500">Paleta:</span>
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
                    
                    <div className="flex items-center gap-2">
                      <Type className="h-3 w-3 text-gray-500" />
                      <span className="text-xs text-gray-500">Fonte:</span>
                      <span className="text-xs text-gray-700 truncate">
                        {template.typography.heading}
                      </span>
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

export default AdvancedTemplateGallery;
