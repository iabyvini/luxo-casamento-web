
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface TemplateCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
}

const TemplateCard = ({ id, name, description, image, category, tags }: TemplateCardProps) => {
  const navigate = useNavigate();

  const handlePreview = () => {
    navigate(`/template-preview/${id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-gray-200 relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Button
            onClick={handlePreview}
            size="sm"
            className="bg-white text-gray-900 hover:bg-gray-100"
          >
            <Eye className="h-4 w-4 mr-2" />
            Visualizar
          </Button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {category}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
