
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Star, Palette, Heart } from "lucide-react";

interface Template {
  id: string;
  name: string;
  description: string;
  image: string;
  colors: string[];
  features: string[];
  style: string;
  couples: string;
  mockData: {
    coupleNames: string;
    weddingDate: string;
    location: string;
  };
}

interface TemplateCardProps {
  template: Template;
  onPreview: (templateId: string) => void;
  onUseTemplate: (templateId: string) => void;
}

const TemplateCard = ({ template, onPreview, onUseTemplate }: TemplateCardProps) => {
  return (
    <Card className="template-card group overflow-hidden">
      <div className="relative">
        {/* Template Preview Image */}
        <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                <Heart className="h-8 w-8 text-rose-600" fill="currentColor" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">
                {template.couples}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {template.mockData.weddingDate.split('-').reverse().join('/')}
              </p>
              <div className="text-xs text-gray-500">
                {template.mockData.location}
              </div>
            </div>
          </div>
          
          {/* Style Badge */}
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-white/90 text-gray-700">
              {template.style}
            </Badge>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-neutral-primary mb-2">
                {template.name}
              </h3>
              <p className="text-neutral-body text-sm mb-3">
                {template.description}
              </p>
            </div>
          </div>

          {/* Color Palette */}
          <div className="mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <Palette className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600 font-medium">Paleta de Cores</span>
            </div>
            <div className="flex space-x-2">
              {template.colors.map((color, idx) => (
                <div
                  key={idx}
                  className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Características:</h4>
            <div className="flex flex-wrap gap-1">
              {template.features.map((feature, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <Button
              variant="outline"
              onClick={() => onPreview(template.id)}
              className="flex-1 text-sm"
            >
              <Eye className="h-4 w-4 mr-2" />
              Visualizar
            </Button>
            <Button
              onClick={() => onUseTemplate(template.id)}
              className="flex-1 bg-gradient-luxury hover:opacity-90 text-white text-sm"
            >
              <Star className="h-4 w-4 mr-2" />
              Usar Template
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default TemplateCard;
