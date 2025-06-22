
import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";

interface ModernNavigationProps {
  coupleNames: string;
}

const ModernNavigation = ({ coupleNames }: ModernNavigationProps) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'home', label: 'Início' },
    { id: 'countdown', label: 'Contagem' },
    { i: 'couple', label: 'O Casal' },
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo/Names */}
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center">
              <Heart className="h-4 w-4 text-white" fill="currentColor" />
            </div>
            <span className="modern-heading text-xl text-black">
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
                    ? 'text-black border-b border-black pb-1' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black hover:text-gray-600"
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
          <div className="md:hidden border-t border-gray-100 py-6 bg-white">
            <div className="space-y-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-0 py-2 text-sm font-light tracking-wider uppercase transition-colors ${
                    activeSection === section.id 
                      ? 'text-black font-normal' 
                      : 'text-gray-600 hover:text-black'
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
