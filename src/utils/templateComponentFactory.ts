import { ComponentType } from 'react';

// Hero Components
import EternalLoveHero from '@/components/wedding-site/templates/EternalLoveHero';
import RusticCharmHero from '@/components/wedding-site/templates/RusticCharmHero';
import OceanBreezeHero from '@/components/wedding-site/templates/OceanBreezeHero';
import ElegantClassicHero from '@/components/wedding-site/templates/ElegantClassicHero';
import ModernMinimalistHero from '@/components/wedding-site/templates/ModernMinimalistHero';

// Default components
import HeroSection from '@/components/wedding-site/HeroSection';

interface HeroProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
  templateName?: string;
  quizAnswers?: any;
}

type HeroComponent = ComponentType<HeroProps>;

const heroComponents: Record<string, HeroComponent> = {
  'eternal-love': EternalLoveHero,
  'rustic-charm': RusticCharmHero,
  'ocean-breeze': OceanBreezeHero,
  'elegant-classic': ElegantClassicHero,
  'modern-minimalist': ModernMinimalistHero,
};

export const getHeroComponent = (templateName: string): HeroComponent => {
  return heroComponents[templateName] || HeroSection;
};

// Navigation Components - para futuras implementações
export const getNavigationComponent = (templateName: string) => {
  // Por enquanto retorna o padrão, mas pode ser expandido
  return null;
};

// Footer Components - para futuras implementações  
export const getFooterComponent = (templateName: string) => {
  // Por enquanto retorna o padrão, mas pode ser expandido
  return null;
};

// Gallery Components - para futuras implementações
export const getGalleryComponent = (templateName: string) => {
  // Por enquanto retorna o padrão, mas pode ser expandido
  return null;
};