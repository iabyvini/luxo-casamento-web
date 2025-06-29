
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryCarouselProps {
  images: Array<{
    id: string;
    url: string;
    alt: string;
    caption?: string;
  }>;
  className?: string;
}

const GalleryCarousel = ({ images, className = '' }: GalleryCarouselProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  if (images.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        Nenhuma imagem para exibir
      </div>
    );
  }

  return (
    <div className={`gallery-carousel-container ${className}`}>
      <div className="relative">
        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white"
          onClick={scrollLeft}
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white"
          onClick={scrollRight}
          aria-label="Próxima imagem"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="gallery-carousel overflow-x-auto"
          style={{ scrollbarWidth: 'thin' }}
        >
          {images.map((image) => (
            <div
              key={image.id}
              className="gallery-item flex-shrink-0 w-72 h-48 relative group cursor-pointer"
              onClick={() => openLightbox(image.url)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-md"
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded-lg flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Caption */}
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                  <p className="text-sm">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="max-w-full max-h-full object-contain"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white/90 hover:bg-white"
              onClick={closeLightbox}
              aria-label="Fechar"
            >
              ×
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryCarousel;
