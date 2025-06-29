
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Palette, Type, Layout, Sparkles } from "lucide-react";
import { TemplateProfile, TEMPLATE_CATEGORIES } from "@/data/templateLibrary";

interface TemplatePreviewCardProps {
  template: TemplateProfile;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const TemplatePreviewCard = ({ template, isHovered, onHover, onLeave }: TemplatePreviewCardProps) => {
  const navigate = useNavigate();

  const handleTemplateSelect = () => {
    navigate(`/template-preview/${template.id}`);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={handleTemplateSelect}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Template Preview Area */}
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{ 
            background: `linear-gradient(135deg, ${template.palette.primary} 0%, ${template.palette.secondary} 50%, ${template.palette.accent} 100%)` 
          }}
        />
        
        {/* Template Name Preview */}
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
              Preview Template
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="text-center">
            <Button
              size="sm"
              className="bg-white text-gray-900 hover:bg-gray-100 mb-3"
            >
              <Eye className="h-4 w-4 mr-2" />
              Visualizar Template
            </Button>
            <div className="text-white text-xs space-y-1">
              <div>Galeria: {template.galleryType}</div>
              <div>Animação: {template.animationType}</div>
              <div>{template.sections.length} seções</div>
            </div>
          </div>
        </div>

        {/* Template Type Badge */}
        <div className="absolute top-3 left-3">
          <Badge 
            variant="secondary" 
            className="bg-white/90 text-gray-700 backdrop-blur-sm"
          >
            <Sparkles className="h-3 w-3 mr-1" />
            {template.galleryType}
          </Badge>
        </div>
      </div>
      
      {/* Template Information */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
            {template.name}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {template.description}
        </p>
        
        {/* Categories */}
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
              +{template.categories.length - 2} mais
            </span>
          )}
        </div>

        {/* Template Details */}
        <div className="space-y-2">
          {/* Color Palette */}
          <div className="flex items-center gap-2">
            <Palette className="h-3 w-3 text-gray-500" />
            <span className="text-xs text-gray-500">Cores:</span>
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
          
          {/* Typography */}
          <div className="flex items-center gap-2">
            <Type className="h-3 w-3 text-gray-500" />
            <span className="text-xs text-gray-500">Fonte:</span>
            <span 
              className="text-xs text-gray-700 truncate"
              style={{ fontFamily: template.typography.heading }}
            >
              {template.typography.heading}
            </span>
          </div>

          {/* Layout Type */}
          <div className="flex items-center gap-2">
            <Layout className="h-3 w-3 text-gray-500" />
            <span className="text-xs text-gray-500">Layout:</span>
            <span className="text-xs text-gray-700">
              {template.sections.length} seções • {template.animationType}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePreviewCard;
