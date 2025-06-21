
import { useState } from "react";
import { Heart } from "lucide-react";

interface WeddingSiteNavigationProps {
  coupleNames: string;
}

const WeddingSiteNavigation = ({ coupleNames }: WeddingSiteNavigationProps) => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Início' },
    { id: 'story', label: 'Nossa História' },
    { id: 'details', label: 'Detalhes' },
    { id: 'gallery', label: 'Fotos' },
    { id: 'rsvp', label: 'Confirmar Presença' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brown-100 luxury-shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Couple Names */}
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-primary" fill="currentColor" />
            <span className="font-bold text-lg gradient-text">
              {coupleNames}
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section.id 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-brown-700'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-brown-700 hover:text-primary">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-current"></div>
                <div className="w-full h-0.5 bg-current"></div>
                <div className="w-full h-0.5 bg-current"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden border-t border-brown-100 py-4">
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium px-3 py-1 rounded-full transition-colors ${
                  activeSection === section.id 
                    ? 'bg-primary text-white' 
                    : 'text-brown-700 hover:bg-brown-50'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default WeddingSiteNavigation;
