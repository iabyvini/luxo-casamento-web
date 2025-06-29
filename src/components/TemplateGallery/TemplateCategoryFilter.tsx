
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Grid, Image, Palette, Sparkles } from "lucide-react";
import { TemplateCategory, TEMPLATE_CATEGORIES } from "@/data/templateLibrary";

interface TemplateCategoryFilterProps {
  selectedCategory: TemplateCategory | 'all';
  onCategoryChange: (category: TemplateCategory | 'all') => void;
  totalTemplates: number;
}

const getCategoryIcon = (category: string) => {
  const icons = {
    'rustico': '🌾',
    'praia': '🏖️',
    'classico': '👑',
    'moderno': '🏙️',
    'boho': '🪶',
    'tropical': '🌺',
    'minimalista': '⚪',
    'florais': '🌸',
    'cinematografico': '🎬',
    'campestre': '🌿'
  };
  return icons[category as keyof typeof icons] || '✨';
};

const TemplateCategoryFilter = ({ 
  selectedCategory, 
  onCategoryChange, 
  totalTemplates 
}: TemplateCategoryFilterProps) => {
  return (
    <div className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3 mb-4">
          <Filter className="h-4 w-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Filtrar por categoria:</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {/* All Templates Button */}
          <Button
            variant={selectedCategory === 'all' ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange('all')}
            className="flex items-center gap-2 h-10 px-4"
          >
            <Grid className="h-3 w-3" />
            <span>Todos</span>
            <Badge 
              variant={selectedCategory === 'all' ? "secondary" : "outline"} 
              className="ml-1"
            >
              {totalTemplates}
            </Badge>
          </Button>
          
          {/* Category Buttons */}
          {Object.entries(TEMPLATE_CATEGORIES).map(([key, category]) => (
            <Button
              key={key}
              variant={selectedCategory === key ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(key as TemplateCategory)}
              className="flex items-center gap-2 h-10 px-4"
            >
              <span className="text-sm">{getCategoryIcon(key)}</span>
              <span>{category.name}</span>
              <Badge 
                variant={selectedCategory === key ? "secondary" : "outline"} 
                className="ml-1"
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Category Description */}
        {selectedCategory !== 'all' && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">
                {TEMPLATE_CATEGORIES[selectedCategory]?.name}
              </span>
            </div>
            <p className="text-xs text-blue-700 mt-1">
              {getCategoryDescription(selectedCategory)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const getCategoryDescription = (category: TemplateCategory): string => {
  const descriptions = {
    'rustico': 'Templates com elementos naturais, madeira e tons terrosos para casamentos ao ar livre.',
    'praia': 'Designs inspirados no mar com cores oceânicas e elementos tropicais.',
    'classico': 'Elegância atemporal com tipografia refinada e ornamentos tradicionais.',
    'moderno': 'Linhas limpas, minimalismo e paleta contemporânea para casais modernos.',
    'boho': 'Estilo boêmio com elementos étnicos, penas e paleta terrosa.',
    'tropical': 'Cores vibrantes e elementos tropicais para celebrações exóticas.',
    'minimalista': 'Design limpo com muito espaço em branco e tipografia simples.',
    'florais': 'Delicados elementos florais e paletas suaves e românticas.',
    'cinematografico': 'Inspirado em filmes com cores dramáticas e layouts impactantes.',
    'campestre': 'Charme rural com elementos naturais e atmosfera acolhedora.'
  };
  
  return descriptions[category] || 'Template único com características especiais.';
};

export default TemplateCategoryFilter;
