
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

interface NeonPopChicNavigationProps {
  coupleNames: string;
}

const NeonPopChicNavigation = ({ coupleNames }: NeonPopChicNavigationProps) => {
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
    { href: '#inicio', label: 'HOME' },
    { href: '#countdown', label: 'COUNTDOWN' },
    { href: '#couple', label: 'COUPLE' },
    { href: '#timeline', label: 'TIMELINE' },
    { href: '#evento', label: 'PARTY' },
    { href: '#rsvp', label: 'RSVP' },
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
          ? 'bg-black/95 backdrop-blur-md border-b border-pink-500/50' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo neon */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Zap className="h-8 w-8 text-pink-500 animate-pulse" fill="currentColor" />
                <div className="absolute inset-0 h-8 w-8 text-pink-500 blur-sm animate-pulse" />
              </div>
              <span className="text-2xl font-futuristic font-bold text-white neon-text tracking-wider">
                {coupleNames.toUpperCase()}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="font-futuristic font-bold text-sm tracking-wider text-white hover:text-pink-400 transition-all duration-300 hover:scale-105 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full neon-glow" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-pink-400 transition-colors"
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
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        
        <div className={`absolute top-0 right-0 h-full w-80 bg-gradient-to-b from-black to-purple-900/20 border-l border-pink-500/50 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 pt-24">
            <div className="space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-xl font-futuristic font-bold text-white hover:text-pink-400 transition-colors py-2 border-b border-pink-500/20 hover:border-pink-500/50 tracking-wider"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Decorative elements */}
            <div className="mt-12 flex justify-center space-x-4">
              <div className="w-4 h-4 bg-pink-500 rounded-full animate-pulse neon-glow" />
              <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse delay-300 neon-glow" />
              <div className="w-4 h-4 bg-pink-500 rounded-full animate-pulse delay-600 neon-glow" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Audiowide&display=swap');
        
        .font-futuristic {
          font-family: 'Orbitron', monospace;
        }
        
        .neon-text {
          text-shadow: 0 0 5px #ff1493, 0 0 10px #ff1493, 0 0 15px #ff1493;
        }
        
        .neon-glow {
          box-shadow: 0 0 5px #ff1493, 0 0 10px #ff1493;
        }
      `}</style>
    </>
  );
};

export default NeonPopChicNavigation;
