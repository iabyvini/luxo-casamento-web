import React from 'react';
import { Heart } from 'lucide-react';

interface EternalLoveNavigationProps {
  sections: string[];
}

const EternalLoveNavigation = ({ sections }: EternalLoveNavigationProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
    <nav className="eternal-love-nav fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2 text-pink-600">
            <Heart className="w-6 h-6 fill-current" />
            <span className="font-playfair text-xl font-semibold">Eternal Love</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-lora text-sm tracking-wide relative group"
              >
                {sectionLabels[section] || section}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-pink-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative floral elements */}
      <div className="absolute top-0 left-4 w-8 h-8 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-pink-300 to-pink-500 rounded-full"></div>
      </div>
      <div className="absolute top-2 right-8 w-4 h-4 opacity-15">
        <div className="w-full h-full bg-gradient-to-br from-pink-400 to-pink-600 rounded-full"></div>
      </div>
    </nav>
  );
};

export default EternalLoveNavigation;