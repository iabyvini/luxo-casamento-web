import { ComponentType } from 'react';

// Eternal Love Components
import EternalLoveHero from '@/components/wedding-site/templates/EternalLoveHero';
import EternalLoveNavigation from '@/components/wedding-site/templates/EternalLoveNavigation';
import EternalLoveGallery from '@/components/wedding-site/templates/EternalLoveGallery';
import EternalLoveStory from '@/components/wedding-site/templates/EternalLoveStory';
import EternalLoveRSVP from '@/components/wedding-site/templates/EternalLoveRSVP';
import EternalLoveFooter from '@/components/wedding-site/templates/EternalLoveFooter';

// Other Hero Components
import RusticCharmHero from '@/components/wedding-site/templates/RusticCharmHero';
import OceanBreezeHero from '@/components/wedding-site/templates/OceanBreezeHero';
import ElegantClassicHero from '@/components/wedding-site/templates/ElegantClassicHero';
import ModernMinimalistHero from '@/components/wedding-site/templates/ModernMinimalistHero';

// Default components
import HeroSection from '@/components/wedding-site/HeroSection';
import WeddingSiteNavigation from '@/components/wedding-site/WeddingSiteNavigation';
import GallerySection from '@/components/wedding-site/GallerySection';
import OurStorySection from '@/components/wedding-site/OurStorySection';
import RSVPSection from '@/components/wedding-site/RSVPSection';
import FooterSection from '@/components/wedding-site/FooterSection';

// Component Props Interfaces
interface HeroProps {
  coupleNames: string;
  weddingDate: string;
  welcomeMessage: string;
  templateName?: string;
  quizAnswers?: any;
}

interface NavigationProps {
  sections: string[];
}

interface GalleryProps {
  photos: Array<{
    id: string;
    photo_url: string;
    caption?: string;
    category?: string;
  }>;
}

interface StoryProps {
  ourStory: string;
}

interface RSVPProps {
  siteId: string;
}

interface FooterProps {
  coupleNames: string;
  weddingDate: string;
  eventDetails?: any;
}

// Component Types
type HeroComponent = ComponentType<HeroProps>;
type NavigationComponent = ComponentType<NavigationProps>;
type GalleryComponent = ComponentType<GalleryProps>;
type StoryComponent = ComponentType<StoryProps>;
type RSVPComponent = ComponentType<RSVPProps>;
type FooterComponent = ComponentType<FooterProps>;

// Component Maps
const heroComponents: Record<string, HeroComponent> = {
  'eternal-love': EternalLoveHero,
  'rustic-charm': RusticCharmHero,
  'ocean-breeze': OceanBreezeHero,
  'elegant-classic': ElegantClassicHero,
  'modern-minimalist': ModernMinimalistHero,
};

const navigationComponents: Record<string, NavigationComponent> = {
  'eternal-love': EternalLoveNavigation,
};

const galleryComponents: Record<string, GalleryComponent> = {
  'eternal-love': EternalLoveGallery,
};

const storyComponents: Record<string, StoryComponent> = {
  'eternal-love': EternalLoveStory,
};

const rsvpComponents: Record<string, RSVPComponent> = {
  'eternal-love': EternalLoveRSVP,
};

const footerComponents: Record<string, FooterComponent> = {
  'eternal-love': EternalLoveFooter,
};

// Component Getters
export const getHeroComponent = (templateName: string): HeroComponent => {
  return heroComponents[templateName] || HeroSection;
};

export const getNavigationComponent = (templateName: string): NavigationComponent | null => {
  return navigationComponents[templateName] || null;
};

export const getGalleryComponent = (templateName: string): GalleryComponent | null => {
  return galleryComponents[templateName] || null;
};

export const getStoryComponent = (templateName: string): StoryComponent | null => {
  return storyComponents[templateName] || null;
};

export const getRSVPComponent = (templateName: string): RSVPComponent | null => {
  return rsvpComponents[templateName] || null;
};

export const getFooterComponent = (templateName: string): FooterComponent | null => {
  return footerComponents[templateName] || null;
};