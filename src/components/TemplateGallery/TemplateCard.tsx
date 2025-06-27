
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Heart } from "lucide-react";
import { ExtendedTemplate } from "@/data/extendedTemplateLibrary";
import { getTemplateTokens } from "@/utils/templateTokens";

interface TemplateCardProps {
  template: ExtendedTemplate;
  isFavorite: boolean;
  onPreview: (template: ExtendedTemplate) => void;
  onSelect: (template: ExtendedTemplate) => void;
  onToggleFavorite: (templateId: string) => void;
}

const TemplateCard = ({ 
  template, 
  isFavorite, 
  onPreview, 
  onSelect, 
  onToggleFavorite 
}: TemplateCardProps) => {
  const tokens = getTemplateTokens(template.id);

  const renderTemplatePreview = () => {
    return (
      <div 
        className={`aspect-[4/3] relative overflow-hidden template-${template.id}`}
        style={{
          background: `linear-gradient(135deg, ${tokens.primaryColor}, ${tokens.accentColor})`
        }}
      >
        {/* Template Preview Content */}
        <div className="absolute inset-0 p-4 flex flex-col justify-center items-center text-center template-preview-hero">
          <div className="text-white mb-2" style={{ fontFamily: tokens.fontFamily }}>
            <h3 className="text-lg font-bold mb-1">João & Maria</h3>
            <p className="text-sm opacity-80">25 • 12 • 2024</p>
          </div>
          <div className="text-white text-xs opacity-60" style={{ fontFamily: tokens.fontFamily }}>
            {template.sections.slice(0, 3).join(" • ")}
          </div>
          
          {/* Visual Elements específicos do template */}
          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
            <div className="text-xs opacity-60" style={{ fontFamily: tokens.fontFamily }}>
              {template.category}
            </div>
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: tokens.accentColor }}
            ></div>
          </div>
        </div>

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => onPreview(template)}
          >
            <Eye className="h-4 w-4 mr-1" />
            Preview
          </Button>
          <Button
            size="sm"
            onClick={() => onSelect(template)}
            className="bg-rose-500 hover:bg-rose-600 text-white"
          >
            Escolher
          </Button>
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => onToggleFavorite(template.id)}
          className="absolute top-2 right-2 p-2 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all"
        >
          <Heart 
            className={`h-4 w-4 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-600'}`} 
          />
        </button>
      </div>
    );
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Template Preview */}
      <CardHeader className="p-0">
        {renderTemplatePreview()}
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
  );
};

export default TemplateCard;
