
import React from 'react';
import { useModernVisualTokens } from '@/contexts/ModernVisualTokensContext';
import GalleryCarousel from './GalleryCarousel';
import GalleryGrid from './GalleryGrid';
import GallerySlideshow from './GallerySlideshow';

interface AdaptiveGalleryProps {
  images: Array<{
    id: string;
    url: string;
    alt: string;
    caption?: string;
  }>;
  className?: string;
  forceType?: 'carousel' | 'grid' | 'slideshow';
  columns?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const AdaptiveGallery = ({ 
  images, 
  className = '', 
  forceType,
  columns = 3,
  autoPlay = true,
  autoPlayInterval = 5000
}: AdaptiveGalleryProps) => {
  const { modernTokens } = useModernVisualTokens();
  
  // Determinar o tipo de galeria
  const galleryType = forceType || modernTokens?.galleryType || 'grid';
  
  // Aplicar classes de acessibilidade
  const accessibilityProps = {
    role: 'region',
    'aria-label': 'Galeria de fotos',
    'aria-live': galleryType === 'slideshow' ? 'polite' as const : undefined
  };

  const commonProps = {
    images,
    className: `adaptive-gallery ${className}`,
    ...accessibilityProps
  };

  // Renderizar o tipo apropriado de galeria
  switch (galleryType) {
    case 'carousel':
      return <GalleryCarousel {...commonProps} />;
    
    case 'slideshow':
      return (
        <GallerySlideshow 
          {...commonProps}
          autoPlay={autoPlay}
          autoPlayInterval={autoPlayInterval}
        />
      );
    
    case 'grid':
    default:
      return (
        <GalleryGrid 
          {...commonProps}
          columns={columns}
        />
      );
  }
};

export default AdaptiveGallery;
