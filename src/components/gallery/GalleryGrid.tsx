
import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryGridProps {
  images: Array<{
    id: string;
    url: string;
    alt: string;
    caption?: string;
  }>;
  columns?: number;
  className?: string;
}

const GalleryGrid = ({ images, columns = 3, className = '' }: GalleryGridProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openLightbox = (imageUrl: string, index: number) => {
    setSelectedImage(imageUrl);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(images[nextIndex].url);
  };

  const prevImage = () => {
    const prevIndex = selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    setSelectedIndex(prevIndex);
    setSelectedImage(images[prevIndex].url);
  };

  if (images.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        Nenhuma imagem para exibir
      </div>
    );
  }

  return (
    <div className={`gallery-grid-container ${className}`}>
      {/* Grid */}
      <div 
        className="gallery-grid"
        style={{ 
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          '--columns': columns 
        }}
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            className="gallery-item relative group cursor-pointer aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            onClick={() => openLightbox(image.url, index)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
              <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Caption Overlay */}
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.caption}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-full">
            <img
              src={selectedImage}
              alt={images[selectedIndex]?.alt || "Imagem ampliada"}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Navigation */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Imagem anterior"
            >
              ←
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Próxima imagem"
            >
              →
            </Button>
            
            {/* Close Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white/90 hover:bg-white"
              onClick={closeLightbox}
              aria-label="Fechar"
            >
              ×
            </Button>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {selectedIndex + 1} de {images.length}
            </div>

            {/* Caption */}
            {images[selectedIndex]?.caption && (
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white bg-black/70 px-4 py-2 rounded-lg inline-block max-w-lg">
                  {images[selectedIndex].caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
