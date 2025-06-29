
import TemplateCard from "./TemplateCard";

interface TemplateGridProps {
  templates: Array<{
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    tags: string[];
  }>;
}

const TemplateGrid = ({ templates }: TemplateGridProps) => {
  if (templates.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Nenhum template encontrado para os filtros selecionados.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          id={template.id}
          name={template.name}
          description={template.description}
          image={template.image}
          category={template.category}
          tags={template.tags}
        />
      ))}
    </div>
  );
};

export default TemplateGrid;
