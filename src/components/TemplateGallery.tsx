
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EXTENDED_TEMPLATE_LIBRARY, ExtendedTemplateItem } from "@/data/extendedTemplateLibrary";
import { getTemplateTokens, applyTemplateTokensToCSS } from "@/utils/templateTokens";
import GalleryHeader from "./TemplateGallery/GalleryHeader";
import CategoryFilters from "./TemplateGallery/CategoryFilters";
import TemplateGrid from "./TemplateGallery/TemplateGrid";

const TemplateGallery = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [favorites, setFavorites] = useState<string[]>([]);

  // Apply all template styles on mount
  useEffect(() => {
    const styleId = 'template-gallery-styles';
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }
    
    // Generate CSS for all templates
    const allTemplateCSS = EXTENDED_TEMPLATE_LIBRARY.map(template => {
      const tokens = getTemplateTokens(template.id);
      return applyTemplateTokensToCSS(tokens, template.id);
    }).join('\n');
    
    styleElement.textContent = allTemplateCSS;
    
    console.log('✅ Template gallery styles applied for', EXTENDED_TEMPLATE_LIBRARY.length, 'templates');
    
    return () => {
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);

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
    navigate('/quiz', { 
      state: { 
        selectedTemplate: template.name,
        templateId: template.id
      }
    });
  };

  const handlePreview = (template: ExtendedTemplateItem) => {
    console.log('🔍 Navigating to preview for template:', template.id);
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
      <GalleryHeader 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <CategoryFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="container mx-auto px-4 py-8">
        <TemplateGrid
          templates={filteredTemplates}
          favorites={favorites}
          onPreview={handlePreview}
          onSelect={handleTemplateSelect}
          onToggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
};

export default TemplateGallery;
