
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Sparkles, Palette, Layout } from "lucide-react";
import { TEMPLATE_LIBRARY, TemplateCategory, TemplateProfile } from "@/data/templateLibrary";
import { searchTemplates, getTemplatesByCategory } from "@/data/templateLibrary";
import TemplateSearchBar from "./TemplateSearchBar";
import TemplateCategoryFilter from "./TemplateCategoryFilter";
import TemplatePreviewCard from "./TemplatePreviewCard";

const ModernTemplateGallery = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory | 'all'>('all');
  const [filteredTemplates, setFilteredTemplates] = useState<TemplateProfile[]>(TEMPLATE_LIBRARY);
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(true);

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

          {/* Enhanced Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">
                Galeria de Templates
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              Explore nossa coleção completa de <span className="font-semibold text-blue-600">{TEMPLATE_LIBRARY.length} templates únicos</span>, 
              cada um cuidadosamente desenvolvido com seu próprio estilo, paleta de cores e personalidade
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Palette className="h-4 w-4" />
                <span>Paletas únicas</span>
              </div>
              <div className="flex items-center gap-1">
                <Layout className="h-4 w-4" />
                <span>Totalmente responsivos</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                <span>Feito com amor</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <TemplateSearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            totalResults={filteredTemplates.length}
            showFilters={showFilters}
            onToggleFilters={() => setShowFilters(!showFilters)}
          />
        </div>
      </div>

      {/* Category Filters */}
      {showFilters && (
        <TemplateCategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          totalTemplates={TEMPLATE_LIBRARY.length}
        />
      )}

      {/* Templates Grid */}
      <div className="container mx-auto px-4 py-8">
        {filteredTemplates.length === 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Nenhum template encontrado
              </h3>
              <p className="text-gray-500 mb-4">
                Não encontramos templates que correspondam aos seus critérios de busca.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Tente:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Verificar a ortografia das palavras</li>
                  <li>Usar termos mais gerais</li>
                  <li>Remover alguns filtros</li>
                  <li>Explorar diferentes categorias</li>
                </ul>
              </div>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory('all');
                }}
                className="mt-4"
              >
                Limpar filtros
              </Button>
            </div>
          </div>
        ) : (
          <>
            {/* Results Info */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-600">
                Mostrando <span className="font-medium">{filteredTemplates.length}</span> template{filteredTemplates.length !== 1 ? 's' : ''}
                {selectedCategory !== 'all' && (
                  <span> na categoria <span className="font-medium">{selectedCategory}</span></span>
                )}
              </div>
            </div>

            {/* Templates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTemplates.map((template) => (
                <TemplatePreviewCard
                  key={template.id}
                  template={template}
                  isHovered={hoveredTemplate === template.id}
                  onHover={() => setHoveredTemplate(template.id)}
                  onLeave={() => setHoveredTemplate(null)}
                />
              ))}
            </div>

            {/* Load More or Pagination could go here */}
            {filteredTemplates.length > 0 && (
              <div className="text-center mt-12 pt-8 border-t">
                <div className="text-sm text-gray-500">
                  ✨ Todos os {filteredTemplates.length} templates foram carregados
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ModernTemplateGallery;
