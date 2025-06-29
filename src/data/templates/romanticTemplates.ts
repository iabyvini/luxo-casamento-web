
import { TemplateProfile } from '../templateTypes';
import { createDefaultTokens } from '../templateUtils';

export const ROMANTIC_TEMPLATES: TemplateProfile[] = [
  {
    id: 'vintage-floral',
    name: 'Vintage Floral',
    description: 'Fundo bege com flores em aquarela, visual romântico e delicado',
    categories: ['florais', 'romantico', 'classico'],
    palette: {
      primary: '#F0E6D2',
      secondary: '#C8D5B9',
      accent: '#FAB7B7',
      neutral: '#E8D5C4'
    },
    fonts: {
      heading: 'Great Vibes',
      body: 'Lora',
      accent: 'Dancing Script'
    },
    typography: {
      heading: 'Great Vibes',
      body: 'Lora',
      accent: 'Dancing Script'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#F0E6D2', secondary: '#C8D5B9', accent: '#FAB7B7', neutral: '#E8D5C4' },
      fonts: { heading: 'Great Vibes', body: 'Lora', accent: 'Dancing Script' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'story', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Aquarela vintage', 'Bordas florais', 'Animação fade suave']
  },
  {
    id: 'floral-elegance',
    name: 'Floral Elegance',
    description: 'Delicados elementos florais com paleta suave e romântica',
    categories: ['florais', 'romantico'],
    palette: {
      primary: '#E6E6FA',
      secondary: '#DDA0DD',
      accent: '#DA70D6',
      neutral: '#F8F8FF'
    },
    fonts: {
      heading: 'Crimson Pro',
      body: 'Source Serif Pro',
      accent: 'Sacramento'
    },
    typography: {
      heading: 'Crimson Pro',
      body: 'Source Serif Pro',
      accent: 'Sacramento'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#E6E6FA', secondary: '#DDA0DD', accent: '#DA70D6', neutral: '#F8F8FF' },
      fonts: { heading: 'Crimson Pro', body: 'Source Serif Pro', accent: 'Sacramento' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
    sections: ['hero', 'couple', 'story', 'gallery', 'event-details', 'rsvp', 'gifts'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Elementos florais', 'Paleta romântica', 'Slideshow elegante']
  },
  {
    id: 'romantico-floral-escuro',
    name: 'Romântico Floral Escuro',
    description: 'Fundo preto com flores delicadas e clima misterioso',
    categories: ['romantico', 'florais'],
    palette: {
      primary: '#000000',
      secondary: '#2D2D2D',
      accent: '#8B4B8B',
      neutral: '#DDA0DD'
    },
    fonts: {
      heading: 'Cormorant Garamond',
      body: 'Inter',
      accent: 'Dancing Script'
    },
    typography: {
      heading: 'Cormorant Garamond',
      body: 'Inter',
      accent: 'Dancing Script'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#000000', secondary: '#2D2D2D', accent: '#8B4B8B', neutral: '#DDA0DD' },
      fonts: { heading: 'Cormorant Garamond', body: 'Inter', accent: 'Dancing Script' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'story', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Flores no escuro', 'Hover com brilho', 'Moldura floral']
  },
  {
    id: 'floral-romantico-claro',
    name: 'Floral Romântico Claro',
    description: 'Flores delicadas em fundo branco com tons pastéis',
    categories: ['florais', 'romantico'],
    palette: {
      primary: '#FFB6C1',
      secondary: '#98FB98',
      accent: '#F0E68C',
      neutral: '#E6E6FA'
    },
    fonts: {
      heading: 'Cormorant Garamond',
      body: 'Inter',
      accent: 'Dancing Script'
    },
    typography: {
      heading: 'Cormorant Garamond',
      body: 'Inter',
      accent: 'Dancing Script'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#FFB6C1', secondary: '#98FB98', accent: '#F0E68C', neutral: '#E6E6FA' },
      fonts: { heading: 'Cormorant Garamond', body: 'Inter', accent: 'Dancing Script' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'story', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Flores pastéis', 'Moldura floral', 'Hover colorido']
  },
  {
    id: 'primavera-delicada',
    name: 'Primavera Delicada',
    description: 'Cores alegres da primavera com flores coloridas',
    categories: ['florais', 'romantico'],
    palette: {
      primary: '#FFB6C1',
      secondary: '#98FB98',
      accent: '#F0E68C',
      neutral: '#E6E6FA'
    },
    fonts: {
      heading: 'Sacramento',
      body: 'Lato',
      accent: 'Great Vibes'
    },
    typography: {
      heading: 'Sacramento',
      body: 'Lato',
      accent: 'Great Vibes'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#FFB6C1', secondary: '#98FB98', accent: '#F0E68C', neutral: '#E6E6FA' },
      fonts: { heading: 'Sacramento', body: 'Lato', accent: 'Great Vibes' },
      galleryType: 'grid',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'story', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'fade',
    features: ['Flores coloridas', 'Tons pastéis', 'Visual alegre']
  },
  {
    id: 'folk-romantico',
    name: 'Folk Romântico',
    description: 'Ilustrações folk com cores quentes e tipografia personalizada',
    categories: ['romantico', 'florais'],
    palette: {
      primary: '#FFADAD',
      secondary: '#FFD6A5',
      accent: '#FDFFB6',
      neutral: '#CAFFBF'
    },
    fonts: {
      heading: 'Amatic SC',
      body: 'Open Sans',
      accent: 'Indie Flower'
    },
    typography: {
      heading: 'Amatic SC',
      body: 'Open Sans',
      accent: 'Indie Flower'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#FFADAD', secondary: '#FFD6A5', accent: '#FDFFB6', neutral: '#CAFFBF' },
      fonts: { heading: 'Amatic SC', body: 'Open Sans', accent: 'Indie Flower' },
      galleryType: 'grid',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'story', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'fade',
    features: ['Ilustrações folk', 'Estilo scrapbook', 'Ícones artesanais']
  }
];
