
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brown-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-luxury p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" fill="white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold gradient-text">Casamento Luxo</h1>
              <span className="text-xs text-brown-400 -mt-1">Sites</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-brown-600 hover:text-primary transition-colors">
              Início
            </a>
            <a href="#templates" className="text-brown-600 hover:text-primary transition-colors">
              Templates
            </a>
            <a href="#funcionalidades" className="text-brown-600 hover:text-primary transition-colors">
              Funcionalidades
            </a>
            <a href="#precos" className="text-brown-600 hover:text-primary transition-colors">
              Preços
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-brown-600 hover:text-primary">
              Entrar
            </Button>
            <Button className="bg-gradient-luxury hover:opacity-90 text-white">
              Criar Site Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-brown-600" />
            ) : (
              <Menu className="h-6 w-6 text-brown-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-brown-100 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-brown-600 hover:text-primary transition-colors">
                Início
              </a>
              <a href="#templates" className="text-brown-600 hover:text-primary transition-colors">
                Templates
              </a>
              <a href="#funcionalidades" className="text-brown-600 hover:text-primary transition-colors">
                Funcionalidades
              </a>
              <a href="#precos" className="text-brown-600 hover:text-primary transition-colors">
                Preços
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-brown-100">
                <Button variant="ghost" className="text-brown-600 hover:text-primary justify-start">
                  Entrar
                </Button>
                <Button className="bg-gradient-luxury hover:opacity-90 text-white">
                  Criar Site Grátis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
