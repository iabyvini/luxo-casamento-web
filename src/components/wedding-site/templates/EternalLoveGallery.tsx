import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, X } from 'lucide-react';

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

  if (!photos.length) return null;

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-pink-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-pink-300">
          <path d="M50 5 Q70 30 50 50 Q30 30 50 5 Q70 70 50 95 Q30 70 50 50" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 w-24 h-24 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-pink-400">
          <circle cx="50" cy="20" r="8" fill="currentColor" />
          <circle cx="30" cy="40" r="6" fill="currentColor" />
          <circle cx="70" cy="40" r="6" fill="currentColor" />
          <circle cx="50" cy="60" r="8" fill="currentColor" />
          <circle cx="30" cy="80" r="6" fill="currentColor" />
          <circle cx="70" cy="80" r="6" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent w-24"></div>
            <Heart className="mx-4 w-6 h-6 text-pink-500 fill-current" />
            <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent w-24"></div>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-gray-800 mb-4">
            Nossa Jornada
          </h2>
          <p className="font-lora text-gray-600 text-lg max-w-2xl mx-auto">
            Momentos especiais que marcaram nossa história de amor
          </p>
        </div>

        {/* Main Slideshow */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={photos[currentIndex]?.photo_url}
              alt={photos[currentIndex]?.caption || 'Foto do casal'}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            
            {/* Caption */}
            {photos[currentIndex]?.caption && (
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-dancing text-xl md:text-2xl text-center drop-shadow-lg">
                  {photos[currentIndex].caption}
                </p>
              </div>
            )}

            {/* Navigation arrows */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-pink-600" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-pink-600" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-pink-500 scale-125' 
                    : 'bg-pink-200 hover:bg-pink-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-4xl mx-auto">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => openModal(index)}
              className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <img
                src={photo.photo_url}
                alt={photo.caption || `Foto ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/20 transition-colors duration-300"></div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={photos[currentIndex]?.photo_url}
              alt={photos[currentIndex]?.caption || 'Foto do casal'}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Modal navigation */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Modal caption */}
            {photos[currentIndex]?.caption && (
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-dancing text-xl text-center drop-shadow-lg">
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