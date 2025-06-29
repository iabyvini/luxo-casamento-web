
import { TemplateProfile } from '../templateTypes';
import { createDefaultTokens } from '../templateUtils';

export const CORE_TEMPLATES: TemplateProfile[] = [
  {
    id: 'eternal-love',
    name: 'Eternal Love',
    description: 'Template romântico com elementos florais delicados e tons suaves de rosa',
    categories: ['romantico', 'florais'],
    palette: {
      primary: '#F8BBD9',
      secondary: '#E4A5C7',
      accent: '#D4AF37',
      neutral: '#F5F5F5'
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Lora',
      accent: 'Dancing Script'
    },
    typography: {
      heading: 'Playfair Display',
      body: 'Lora',
      accent: 'Dancing Script'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#F8BBD9', secondary: '#E4A5C7', accent: '#D4AF37', neutral: '#F5F5F5' },
      fonts: { heading: 'Playfair Display', body: 'Lora', accent: 'Dancing Script' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
    sections: ['hero', 'story', 'gallery', 'event-details', 'rsvp', 'gifts'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Animações suaves', 'Galeria em slideshow', 'Design romântico']
  },
  {
    id: 'rustic-charm',
    name: 'Rustic Charm',
    description: 'Estilo rústico com elementos de madeira e tons terrosos',
    categories: ['rustico', 'campestre'],
    palette: {
      primary: '#D2691E',
      secondary: '#8B4513',
      accent: '#228B22',
      neutral: '#F5F5DC'
    },
    fonts: {
      heading: 'Merriweather',
      body: 'Open Sans',
      accent: 'Caveat'
    },
    typography: {
      heading: 'Merriweather',
      body: 'Open Sans',
      accent: 'Caveat'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#D2691E', secondary: '#8B4513', accent: '#228B22', neutral: '#F5F5DC' },
      fonts: { heading: 'Merriweather', body: 'Open Sans', accent: 'Caveat' },
      galleryType: 'grid',
      animationType: 'slide'
    }),
    sections: ['hero', 'couple', 'story', 'gallery', 'event-details', 'rsvp'],
    galleryType: 'grid',
    animationType: 'slide',
    features: ['Design rústico', 'Galeria em grade', 'Tons terrosos']
  },
  {
    id: 'ocean-breeze',
    name: 'Ocean Breeze',
    description: 'Template inspirado no mar com tons de azul e elementos aquáticos',
    categories: ['praia', 'tropical'],
    palette: {
      primary: '#4682B4',
      secondary: '#87CEEB',
      accent: '#FFD700',
      neutral: '#F0F8FF'
    },
    fonts: {
      heading: 'Montserrat',
      body: 'Nunito',
      accent: 'Kaushan Script'
    },
    typography: {
      heading: 'Montserrat',
      body: 'Nunito',
      accent: 'Kaushan Script'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#4682B4', secondary: '#87CEEB', accent: '#FFD700', neutral: '#F0F8FF' },
      fonts: { heading: 'Montserrat', body: 'Nunito', accent: 'Kaushan Script' },
      galleryType: 'carousel',
      animationType: 'parallax'
    }),
    sections: ['hero', 'countdown', 'story', 'gallery', 'event-details', 'rsvp'],
    galleryType: 'carousel',
    animationType: 'parallax',
    features: ['Efeitos parallax', 'Tema praia', 'Carrossel de fotos']
  },
  {
    id: 'elegant-classic',
    name: 'Elegant Classic',
    description: 'Elegância clássica com tipografia refinada e ornamentos tradicionais',
    categories: ['classico'],
    palette: {
      primary: '#2F4F4F',
      secondary: '#708090',
      accent: '#DAA520',
      neutral: '#FFFFFF'
    },
    fonts: {
      heading: 'Cormorant Garamond',
      body: 'Crimson Text',
      accent: 'Great Vibes'
    },
    typography: {
      heading: 'Cormorant Garamond',
      body: 'Crimson Text',
      accent: 'Great Vibes'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#2F4F4F', secondary: '#708090', accent: '#DAA520', neutral: '#FFFFFF' },
      fonts: { heading: 'Cormorant Garamond', body: 'Crimson Text', accent: 'Great Vibes' },
      galleryType: 'grid',
      animationType: 'fade'
    }),
    sections: ['hero', 'couple', 'story', 'gallery', 'event-details', 'rsvp', 'gifts'],
    galleryType: 'grid',
    animationType: 'fade',
    features: ['Design clássico', 'Tipografia elegante', 'Layout tradicional']
  },
  {
    id: 'modern-minimalist',
    name: 'Modern Minimalist',
    description: 'Design limpo e contemporâneo com muito espaço em branco',
    categories: ['moderno', 'minimalista'],
    palette: {
      primary: '#2C3E50',
      secondary: '#34495E',
      accent: '#E74C3C',
      neutral: '#ECF0F1'
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
      accent: 'Quicksand'
    },
    typography: {
      heading: 'Poppins',
      body: 'Inter',
      accent: 'Quicksand'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#2C3E50', secondary: '#34495E', accent: '#E74C3C', neutral: '#ECF0F1' },
      fonts: { heading: 'Poppins', body: 'Inter', accent: 'Quicksand' },
      galleryType: 'grid',
      animationType: 'slide'
    }),
    sections: ['hero', 'story', 'gallery', 'event-details', 'rsvp'],
    galleryType: 'grid',
    animationType: 'slide',
    features: ['Design minimalista', 'Tipografia moderna', 'Layout limpo']
  }
];
