
import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";

interface ClassicRomanticNavigationProps {
  coupleNames: string;
}

const ClassicRomanticNavigation = ({ coupleNames }: ClassicRomanticNavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#casal', label: 'O Casal' },
    { href: '#historia', label: 'Nossa História' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#evento', label: 'Evento' },
    { href: '#confirmar', label: 'Confirmar Presença' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-rose-100' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo romântico */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Heart className={`h-8 w-8 ${isScrolled ? 'text-rose-400' : 'text-white'} fill-current`} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full animate-pulse" />
              </div>
              <span className={`text-2xl font-serif font-light ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } tracking-wide`}>
                {coupleNames}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-serif font-medium transition-all duration-300 hover:scale-105 relative group ${
                    isScrolled ? 'text-gray-700 hover:text-rose-500' : 'text-white hover:text-rose-200'
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-400 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-all duration-300 ${
                isScrolled ? 'text-gray-800 hover:bg-rose-50' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        
        <div className={`absolute top-0 right-0 h-full w-80 bg-gradient-to-br from-white to-rose-50 shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 pt-24">
            <div className="space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-lg font-serif font-medium text-gray-800 hover:text-rose-500 transition-colors py-2 border-b border-rose-100 hover:border-rose-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Decorative elements */}
            <div className="mt-12 flex justify-center space-x-4">
              <div className="w-3 h-3 bg-rose-200 rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-pink-200 rounded-full animate-pulse delay-100" />
              <div className="w-3 h-3 bg-rose-300 rounded-full animate-pulse delay-200" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </>
  );
};

export default ClassicRomanticNavigation;
