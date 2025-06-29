
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GallerySlideshowProps {
  images: Array<{
    id: string;
    url: string;
    alt: string;
    caption?: string;
  }>;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

const GallerySlideshow = ({ 
  images, 
  autoPlay = true, 
  autoPlayInterval = 5000,
  className = '' 
}: GallerySlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, images.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (images.length === 0) {
    return (
      <div className="gallery-slideshow bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Nenhuma imagem para exibir</p>
      </div>
    );
  }

  return (
    <div className={`gallery-slideshow relative ${className}`}>
      {/* Main Image */}
      <div className="relative w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`gallery-item absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'active opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index <= 2 ? 'eager' : 'lazy'}
            />
            
            {/* Image Caption */}
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-lg text-center max-w-3xl mx-auto">
                  {image.caption}
                </p>
              </div>
            )}
          </div>
        ))}
        
        {/* Overlay Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
          {/* Previous Button */}
          <Button
            variant="outline"
            size="icon"
            className="bg-white/90 hover:bg-white"
            onClick={prevSlide}
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          {/* Next Button */}
          <Button
            variant="outline"
            size="icon"
            className="bg-white/90 hover:bg-white"
            onClick={nextSlide}
            aria-label="Próxima imagem"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-black/50 rounded-full px-4 py-2">
        {/* Play/Pause Button */}
        {images.length > 1 && (
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:text-white hover:bg-white/20"
            onClick={togglePlayPause}
            aria-label={isPlaying ? 'Pausar slideshow' : 'Reproduzir slideshow'}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        )}

        {/* Dot Indicators */}
        <div className="flex space-x-1">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-6' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>

        {/* Image Counter */}
        <span className="text-white text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  );
};

export default GallerySlideshow;
