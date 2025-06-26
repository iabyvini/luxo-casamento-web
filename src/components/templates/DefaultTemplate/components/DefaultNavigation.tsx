
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface DefaultNavigationProps {
  coupleNames: string;
}

const DefaultNavigation = ({ coupleNames }: DefaultNavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#inicio", label: "Início" },
    { href: "#casal", label: "O Casal" },
    { href: "#historia", label: "Nossa História" },
    { href: "#galeria", label: "Galeria" },
    { href: "#evento", label: "Evento" },
    { href: "#presentes", label: "Presentes" },
    { href: "#confirmar", label: "Confirmação" },
    { href: "#mensagens", label: "Mensagens" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-playfair text-xl font-bold text-brown-800">
            {coupleNames}
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-brown-700 hover:text-brown-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-brown-700 hover:text-brown-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default DefaultNavigation;
