import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, X, Camera } from 'lucide-react';

interface Photo {
  id: string;
  photo_url: string;
  caption?: string;
  category?: string;
}

interface EternalLoveGalleryProps {
  photos: Photo[];
}

const EternalLoveGallery = ({ photos }: EternalLoveGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  if (!photos.length) {
    return (
      <section id="gallery" className="eternal-love-section py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="eternal-love-card rounded-3xl p-12 max-w-md mx-auto">
            <Camera className="w-16 h-16 text-[#8B4B5C]/40 mx-auto mb-4" />
            <h3 className="font-['Crimson_Text'] text-2xl text-[#8B4B5C] mb-2">
              Galeria em Breve
            </h3>
            <p className="font-['Libre_Baskerville'] text-[#6B6B6B]">
              Em breve teremos fotos especiais para compartilhar
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="eternal-love-section py-20">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 eternal-love-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B4B5C]/30 to-transparent w-16"></div>
            <Heart className="mx-4 w-6 h-6 text-[#8B4B5C] fill-current" />
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B4B5C]/30 to-transparent w-16"></div>
          </div>
          <h2 className="font-['Crimson_Text'] text-4xl md:text-5xl text-[#8B4B5C] mb-4">
            Nossa Jornada
          </h2>
          <p className="font-['Libre_Baskerville'] text-[#6B6B6B] text-lg max-w-2xl mx-auto">
            Momentos especiais que marcaram nossa história de amor
          </p>
        </div>

        {/* Featured Photo */}
        <div className="eternal-love-scale-in max-w-5xl mx-auto mb-16">
          <div className="relative">
            <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#E8D5C4] to-[#D4AF8C]">
              <img
                src={photos[currentIndex]?.photo_url}
                alt={photos[currentIndex]?.caption || 'Foto do casal'}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Caption */}
              {photos[currentIndex]?.caption && (
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="font-['Amatic_SC'] text-white text-2xl md:text-3xl text-center drop-shadow-lg font-bold">
                    {photos[currentIndex].caption}
                  </p>
                </div>
              )}

              {/* Navigation arrows */}
              <button
                onClick={prevPhoto}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#D4AF8C] rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#8B4B5C] rounded-full opacity-60"></div>
          </div>

          {/* Photo indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#8B4B5C] scale-125' 
                    : 'bg-[#8B4B5C]/30 hover:bg-[#8B4B5C]/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="eternal-love-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => openModal(index)}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={photo.photo_url}
                  alt={photo.caption || `Foto ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B4B5C]/0 to-[#8B4B5C]/0 group-hover:from-[#8B4B5C]/20 group-hover:to-transparent transition-all duration-300"></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full">
            <img
              src={photos[currentIndex]?.photo_url}
              alt={photos[currentIndex]?.caption || 'Foto do casal'}
              className="max-w-full max-h-full object-contain rounded-2xl"
            />
            
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Modal navigation */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Modal caption */}
            {photos[currentIndex]?.caption && (
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-['Amatic_SC'] text-white text-2xl text-center drop-shadow-lg font-bold">
                  {photos[currentIndex].caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default EternalLoveGallery;