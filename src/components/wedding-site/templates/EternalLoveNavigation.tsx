import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';

interface EternalLoveNavigationProps {
  sections: string[];
}

const EternalLoveNavigation = ({ sections }: EternalLoveNavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const sectionLabels: Record<string, string> = {
    hero: 'Início',
    story: 'Nossa História',
    gallery: 'Galeria',
    'event-details': 'Evento',
    rsvp: 'Confirmar Presença',
    gifts: 'Presentes'
  };

  return (
    <nav className="eternal-love-nav fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#8B4B5C] to-[#7A4250] rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white fill-current" />
            </div>
            <div className="hidden sm:block">
              <span className="font-['Crimson_Text'] text-xl font-semibold text-[#8B4B5C]">
                Eternal Love
              </span>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-10">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative group font-['Libre_Baskerville'] text-[#2C2C2C] hover:text-[#8B4B5C] transition-colors duration-300 text-sm font-medium"
              >
                {sectionLabels[section] || section}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B4B5C] to-[#D4AF8C] group-hover:w-full transition-all duration-300 ease-out"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#8B4B5C] hover:bg-[#8B4B5C]/10 rounded-lg transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-[#8B4B5C]/10 shadow-lg">
            <div className="py-4 space-y-2">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-6 py-3 font-['Libre_Baskerville'] text-[#2C2C2C] hover:text-[#8B4B5C] hover:bg-[#8B4B5C]/5 transition-colors duration-200"
                >
                  {sectionLabels[section] || section}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EternalLoveNavigation;