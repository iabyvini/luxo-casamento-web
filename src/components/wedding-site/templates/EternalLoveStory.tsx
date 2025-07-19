import React from 'react';
import { Heart, Quote } from 'lucide-react';

interface EternalLoveStoryProps {
  ourStory: string;
}

const EternalLoveStory = ({ ourStory }: EternalLoveStoryProps) => {
  const storyParagraphs = ourStory.split('\n').filter(p => p.trim());

  return (
    <section id="story" className="eternal-love-section py-20">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 eternal-love-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B4B5C]/30 to-transparent w-16"></div>
            <Quote className="mx-4 w-6 h-6 text-[#D4AF8C]" />
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B4B5C]/30 to-transparent w-16"></div>
          </div>
          <h2 className="font-['Crimson_Text'] text-4xl md:text-5xl text-[#8B4B5C] mb-4">
            Nossa História de Amor
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8B4B5C] to-[#D4AF8C] mx-auto rounded-full"></div>
        </div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto eternal-love-scale-in">
          <div className="eternal-love-card rounded-3xl p-8 md:p-16 relative overflow-hidden">
            
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-20 h-20 bg-[#D4AF8C] rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#8B4B5C] rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-[#E8D5C4] rounded-full"></div>
            </div>

            {/* Quote mark decoration */}
            <div className="absolute top-8 left-8 w-16 h-16 text-[#D4AF8C]/30">
              <Quote className="w-full h-full" />
            </div>

            {/* Story text */}
            <div className="relative z-10 space-y-8">
              {storyParagraphs.map((paragraph, index) => (
                <p 
                  key={index}
                  className={`font-['Libre_Baskerville'] text-[#2C2C2C] leading-relaxed ${
                    index === 0 
                      ? 'text-xl md:text-2xl font-medium text-center mb-12' 
                      : 'text-lg'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Decorative signature */}
            <div className="mt-12 pt-8 border-t border-[#8B4B5C]/20 text-center">
              <p className="font-['Amatic_SC'] text-2xl text-[#8B4B5C] font-bold">
                Com amor eterno ♡
              </p>
            </div>
          </div>
        </div>

        {/* Timeline decoration */}
        <div className="mt-20 eternal-love-fade-in">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center items-center space-x-8 md:space-x-16">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B4B5C] to-[#7A4250] rounded-full flex items-center justify-center shadow-xl mb-4">
                  <span className="text-white text-2xl">💕</span>
                </div>
                <p className="font-['Amatic_SC'] text-[#8B4B5C] text-lg font-bold text-center">
                  Primeiro<br />Encontro
                </p>
              </div>
              
              <div className="h-0.5 w-12 md:w-20 bg-gradient-to-r from-[#8B4B5C] to-[#D4AF8C]"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF8C] to-[#C19B6C] rounded-full flex items-center justify-center shadow-xl mb-4">
                  <span className="text-white text-2xl">💍</span>
                </div>
                <p className="font-['Amatic_SC'] text-[#8B4B5C] text-lg font-bold text-center">
                  Pedido de<br />Casamento
                </p>
              </div>
              
              <div className="h-0.5 w-12 md:w-20 bg-gradient-to-r from-[#D4AF8C] to-[#8B4B5C]"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B4B5C] to-[#D4AF8C] rounded-full flex items-center justify-center shadow-xl mb-4">
                  <span className="text-white text-2xl">👰‍♀️</span>
                </div>
                <p className="font-['Amatic_SC'] text-[#8B4B5C] text-lg font-bold text-center">
                  Nosso<br />Casamento
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hearts decoration */}
        <div className="flex justify-center mt-16 space-x-3">
          {[...Array(5)].map((_, i) => (
            <Heart 
              key={i}
              className="w-4 h-4 text-[#D4AF8C] fill-current animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EternalLoveStory;