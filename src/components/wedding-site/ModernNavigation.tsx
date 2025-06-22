
import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { useModernVisualTokens } from "@/contexts/ModernVisualTokensContext";

interface ModernNavigationProps {
  coupleNames: string;
}

const ModernNavigation = ({ coupleNames }: ModernNavigationProps) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { modernTokens, templateProfile } = useModernVisualTokens();

  const sections = [
    { id: 'home', label: 'Início' },
    { id: 'countdown', label: 'Contagem' },
    { id: 'couple', label: 'O Casal' },
    { id: 'story', label: 'História' },
    { id: 'gallery', label: 'Galeria' },
    { id: 'details', label: 'Detalhes' },
    { id: 'rsvp', label: 'RSVP' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Estilos baseados no template
  const getNavStyles = () => {
    const baseStyles = "fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b";
    
    if (!templateProfile) return `${baseStyles} bg-white/95 border-gray-100`;
    
    switch (templateProfile.id) {
      case 'minimal-luxury':
        return `${baseStyles} bg-black/90 border-white/10`;
      case 'boho-refined':
        return `${baseStyles} bg-white/85 border-amber-200/50`;
      case 'natural-modern':
        return `${baseStyles} bg-white/90 border-green-100/50`;
      case 'classic-contemporary':
        return `${baseStyles} bg-white/95 border-amber-100`;
      default:
        return `${baseStyles} bg-white/95 border-gray-100`;
    }
  };

  const getTextColor = () => {
    if (!templateProfile) return 'text-black';
    
    switch (templateProfile.id) {
      case 'minimal-luxury':
        return 'text-white';
      case 'boho-refined':
        return 'text-amber-900';
      case 'natural-modern':
        return 'text-green-900';
      case 'classic-contemporary':
        return 'text-amber-900';
      default:
        return 'text-black';
    }
  };

  const getHoverColor = () => {
    if (!templateProfile) return 'hover:text-black';
    
    switch (templateProfile.id) {
      case 'minimal-luxury':
        return 'hover:text-gray-200';
      case 'boho-refined':
        return 'hover:text-amber-700';
      case 'natural-modern':
        return 'hover:text-green-700';
      case 'classic-contemporary':
        return 'hover:text-amber-700';
      default:
        return 'hover:text-black';
    }
  };

  const iconBgColor = modernTokens?.colors.primary || '#000000';
  const textColor = getTextColor();
  const hoverColor = getHoverColor();

  return (
    <nav className={getNavStyles()}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo/Names */}
          <div className="flex items-center space-x-3">
            <div 
              className="h-8 w-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: iconBgColor }}
            >
              <Heart className="h-4 w-4 text-white" fill="currentColor" />
            </div>
            <span className={`modern-heading text-xl ${textColor}`}>
              {coupleNames}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-light tracking-wider uppercase transition-colors ${
                  activeSection === section.id 
                    ? `${textColor} border-b pb-1`
                    : `text-gray-500 ${hoverColor}`
                }`}
                style={activeSection === section.id ? {
                  borderBottomColor: iconBgColor
                } : {}}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${textColor} ${hoverColor}`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t py-6 bg-white/95" 
               style={{ borderTopColor: modernTokens?.colors.secondary || '#f5f5f5' }}>
            <div className="space-y-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-0 py-2 text-sm font-light tracking-wider uppercase transition-colors ${
                    activeSection === section.id 
                      ? `${textColor} font-normal` 
                      : `text-gray-500 ${hoverColor}`
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ModernNavigation;
