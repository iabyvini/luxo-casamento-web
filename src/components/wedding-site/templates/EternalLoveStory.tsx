import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface EternalLoveStoryProps {
  ourStory: string;
}

const EternalLoveStory = ({ ourStory }: EternalLoveStoryProps) => {
  const storyParagraphs = ourStory.split('\n').filter(p => p.trim());

  return (
    <section id="story" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-16 h-16 bg-pink-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-pink-400 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-pink-200 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-pink-300 rounded-full"></div>
        
        {/* Floral pattern */}
        <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-pink-100" viewBox="0 0 200 200">
          <path d="M100 20 Q150 60 100 100 Q50 60 100 20 Q140 140 100 180 Q60 140 100 100" fill="currentColor" />
          <circle cx="100" cy="60" r="8" fill="currentColor" />
          <circle cx="100" cy="140" r="8" fill="currentColor" />
          <circle cx="60" cy="100" r="6" fill="currentColor" />
          <circle cx="140" cy="100" r="6" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-pink-400 mr-3" />
            <Heart className="w-8 h-8 text-pink-500 fill-current" />
            <Sparkles className="w-6 h-6 text-pink-400 ml-3" />
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl text-gray-800 mb-4">
            Nossa História de Amor
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full"></div>
        </div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-pink-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-pink-100 relative">
            {/* Decorative quote marks */}
            <div className="absolute top-6 left-6 text-6xl text-pink-200 font-playfair leading-none">
              "
            </div>
            <div className="absolute bottom-6 right-6 text-6xl text-pink-200 font-playfair leading-none transform rotate-180">
              "
            </div>

            {/* Story text */}
            <div className="relative z-10 space-y-6">
              {storyParagraphs.map((paragraph, index) => (
                <p 
                  key={index}
                  className="font-lora text-gray-700 text-lg leading-relaxed text-center md:text-left first:text-xl first:font-medium"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Decorative elements inside the card */}
            <div className="absolute top-1/4 right-8 w-6 h-6 bg-pink-300 rounded-full opacity-30"></div>
            <div className="absolute bottom-1/3 left-8 w-4 h-4 bg-pink-400 rounded-full opacity-20"></div>
          </div>

          {/* Hearts decoration */}
          <div className="flex justify-center mt-12 space-x-4">
            <Heart className="w-6 h-6 text-pink-300 fill-current animate-pulse" style={{ animationDelay: '0s' }} />
            <Heart className="w-8 h-8 text-pink-400 fill-current animate-pulse" style={{ animationDelay: '0.5s' }} />
            <Heart className="w-10 h-10 text-pink-500 fill-current animate-pulse" style={{ animationDelay: '1s' }} />
            <Heart className="w-8 h-8 text-pink-400 fill-current animate-pulse" style={{ animationDelay: '1.5s' }} />
            <Heart className="w-6 h-6 text-pink-300 fill-current animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          {/* Timeline decoration */}
          <div className="mt-16 relative">
            <div className="flex justify-center items-center space-x-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-dancing text-lg">🌟</span>
                </div>
                <p className="mt-3 font-dancing text-pink-600 text-lg">Primeiro Encontro</p>
              </div>
              
              <div className="h-0.5 w-16 bg-gradient-to-r from-pink-300 to-pink-500"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-dancing text-lg">💕</span>
                </div>
                <p className="mt-3 font-dancing text-pink-600 text-lg">Noivado</p>
              </div>
              
              <div className="h-0.5 w-16 bg-gradient-to-r from-pink-300 to-pink-500"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-dancing text-lg">💒</span>
                </div>
                <p className="mt-3 font-dancing text-pink-600 text-lg">Casamento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EternalLoveStory;