
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface BohoRomanceNavigationProps {
  coupleNames: string;
}

const BohoRomanceNavigation = ({ coupleNames }: BohoRomanceNavigationProps) => {
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
    { href: '#home', label: 'Início' },
    { href: '#couple', label: 'O Casal' },
    { href: '#story', label: 'Nossa História' },
    { href: '#gallery', label: 'Galeria' },
    { href: '#event', label: 'Evento' },
    { href: '#rsvp', label: 'Confirmar Presença' },
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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-amber-50/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌸</span>
              <span className={`text-2xl font-script ${
                isScrolled ? 'text-amber-800' : 'text-white'
              }`}>
                {coupleNames}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-colors hover:opacity-70 ${
                    isScrolled ? 'text-amber-700' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 ${isScrolled ? 'text-amber-800' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
        
        <div className={`absolute top-0 right-0 h-full w-80 bg-amber-50 shadow-xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 pt-24">
            <div className="space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-lg font-medium text-amber-800 hover:text-amber-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .font-script {
          font-family: 'Dancing Script', cursive;
        }
      `}</style>
    </>
  );
};

export default BohoRomanceNavigation;
