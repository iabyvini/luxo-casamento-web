
import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";

interface WeddingSiteNavigationProps {
  coupleNames: string;
}

const WeddingSiteNavigation = ({ coupleNames }: WeddingSiteNavigationProps) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'home', label: 'Início' },
    { id: 'countdown', label: 'Contagem' },
    { id: 'couple', label: 'O Casal' },
    { id: 'bridesmaids', label: 'Padrinhos' },
    { id: 'gifts', label: 'Presentes' },
    { id: 'rsvp', label: 'RSVP' },
    { id: 'messages', label: 'Recados' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Couple Names */}
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-green-600" fill="currentColor" />
            <span className="font-serif text-xl font-bold text-gray-800">
              {coupleNames}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  activeSection === section.id 
                    ? 'text-green-600 border-b-2 border-green-600 pb-1' 
                    : 'text-gray-700'
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
              className="text-gray-700 hover:text-green-600"
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
          <div className="md:hidden border-t border-gray-200 py-4 bg-white">
            <div className="grid grid-cols-2 gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                    activeSection === section.id 
                      ? 'bg-green-100 text-green-700' 
                      : 'text-gray-700 hover:bg-gray-50'
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

export default WeddingSiteNavigation;
