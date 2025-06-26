
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface BohoFestivalNavigationProps {
  coupleNames: string;
}

const BohoFestivalNavigation = ({ coupleNames }: BohoFestivalNavigationProps) => {
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
    { href: '#inicio', label: 'Home' },
    { href: '#casal', label: 'Nossa Vibe' },
    { href: '#galeria', label: 'Momentos' },
    { href: '#evento', label: 'Celebração' },
    { href: '#dresscode', label: 'Dress Code' },
    { href: '#confirmar', label: 'Vem com a gente!' },
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
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b-2 border-orange-200' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo boho */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                  <div className="text-white text-lg">☽</div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 border-2 border-orange-300 rounded-full animate-spin" style={{ animationDuration: '4s' }} />
              </div>
              <span className={`text-2xl font-cursive ${
                isScrolled ? 'text-orange-800' : 'text-white'
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
                  className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                    isScrolled ? 'text-orange-700 hover:text-orange-500' : 'text-white hover:text-orange-200'
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400 transition-all duration-300 group-hover:w-full rounded-full" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-all duration-300 ${
                isScrolled ? 'text-orange-800 hover:bg-orange-50' : 'text-white hover:bg-white/10'
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
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        
        <div className={`absolute top-0 right-0 h-full w-80 bg-gradient-to-br from-orange-50 to-amber-50 shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 pt-24">
            <div className="space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-lg font-medium text-orange-800 hover:text-orange-600 transition-colors py-2 border-b border-orange-200 hover:border-orange-300 font-cursive"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Decorative elements */}
            <div className="mt-12 flex justify-center space-x-6">
              <div className="text-2xl text-orange-400 animate-pulse">☽</div>
              <div className="text-xl text-amber-400 animate-pulse delay-300">✧</div>
              <div className="text-2xl text-orange-500 animate-pulse delay-600">☾</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Pacifico&display=swap');
        
        .font-cursive {
          font-family: 'Dancing Script', cursive;
        }
      `}</style>
    </>
  );
};

export default BohoFestivalNavigation;
