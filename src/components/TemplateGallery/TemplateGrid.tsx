
import { ExtendedTemplate } from "@/data/extendedTemplateLibrary";
import TemplateCard from "./TemplateCard";
import EmptyState from "./EmptyState";

interface TemplateGridProps {
  templates: ExtendedTemplate[];
  favorites: string[];
  onPreview: (template: ExtendedTemplate) => void;
  onSelect: (template: ExtendedTemplate) => void;
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
