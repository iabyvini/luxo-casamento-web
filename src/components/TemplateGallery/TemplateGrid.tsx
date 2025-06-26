
import { ExtendedTemplateItem } from "@/data/extendedTemplateLibrary";
import TemplateCard from "./TemplateCard";
import EmptyState from "./EmptyState";

interface TemplateGridProps {
  templates: ExtendedTemplateItem[];
  favorites: string[];
  onPreview: (template: ExtendedTemplateItem) => void;
  onSelect: (template: ExtendedTemplateItem) => void;
  onToggleFavorite: (templateId: string) => void;
}

const TemplateGrid = ({ 
  templates, 
  favorites, 
  onPreview, 
  onSelect, 
  onToggleFavorite 
}: TemplateGridProps) => {
  if (templates.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          template={template}
          isFavorite={favorites.includes(template.id)}
          onPreview={onPreview}
          onSelect={onSelect}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default TemplateGrid;
