
import { TemplateProfile } from '../templateTypes';
import { createDefaultTokens } from '../templateUtils';

export const MINIMAL_TEMPLATES: TemplateProfile[] = [
  {
    id: 'minimal-chic',
    name: 'Minimal Chic',
    description: 'Minimalista elegante com fundo branco e detalhes sutis',
    categories: ['minimalista', 'moderno'],
    palette: {
      primary: '#FFFFFF',
      secondary: '#000000',
      accent: '#F5F5F5',
      neutral: '#C0C0C0'
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter',
      accent: 'Poppins'
    },
    typography: {
      heading: 'Inter',
      body: 'Inter',
      accent: 'Poppins'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#FFFFFF', secondary: '#000000', accent: '#F5F5F5', neutral: '#C0C0C0' },
      fonts: { heading: 'Inter', body: 'Inter', accent: 'Poppins' },
      galleryType: 'grid',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'fade',
    features: ['Visual clean', 'Linhas finas', 'Cards com sombra']
  },
  {
    id: 'minimal-marron',
    name: 'Minimal Marrom',
    description: 'Minimalista sofisticado em tons terrosos',
    categories: ['minimalista'],
    palette: {
      primary: '#8B4513',
      secondary: '#D2B48C',
      accent: '#F5DEB3',
      neutral: '#DEB887'
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter',
      accent: 'Poppins'
    },
    typography: {
      heading: 'Inter',
      body: 'Inter',
      accent: 'Poppins'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#8B4513', secondary: '#D2B48C', accent: '#F5DEB3', neutral: '#DEB887' },
      fonts: { heading: 'Inter', body: 'Inter', accent: 'Poppins' },
      galleryType: 'grid',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'fade',
    features: ['Tons terrosos', 'Timeline vertical', 'Cards clean']
  },
  {
    id: 'luxe-minimal',
    name: 'Luxe Minimal',
    description: 'Minimalismo luxuoso com detalhes dourados',
    categories: ['minimalista', 'classico'],
    palette: {
      primary: '#FFFFFF',
      secondary: '#000000',
      accent: '#FFD700',
      neutral: '#F5F5F5'
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Inter',
      accent: 'Great Vibes'
    },
    typography: {
      heading: 'Playfair Display',
      body: 'Inter',
      accent: 'Great Vibes'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#FFFFFF', secondary: '#000000', accent: '#FFD700', neutral: '#F5F5F5' },
      fonts: { heading: 'Playfair Display', body: 'Inter', accent: 'Great Vibes' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Brilho dourado', 'Linhas finas', 'Hover luxuoso']
  },
  {
    id: 'monocromatico-luxo',
    name: 'Monocromático Luxo',
    description: 'Ultra minimalista em tons de cinza com elegância sofisticada',
    categories: ['minimalista', 'moderno'],
    palette: {
      primary: '#808080',
      secondary: '#000000',
      accent: '#C0C0C0',
      neutral: '#F5F5F5'
    },
    fonts: {
      heading: 'Abril Fatface',
      body: 'Inter',
      accent: 'Montserrat'
    },
    typography: {
      heading: 'Abril Fatface',
      body: 'Inter',
      accent: 'Montserrat'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#808080', secondary: '#000000', accent: '#C0C0C0', neutral: '#F5F5F5' },
      fonts: { heading: 'Abril Fatface', body: 'Inter', accent: 'Montserrat' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Ultra minimal', 'Monocromático', 'Sofisticado']
  },
  {
    id: 'cinzento-luxo',
    name: 'Cinzento Luxo',
    description: 'Elegância monocromática com detalhes metálicos',
    categories: ['moderno', 'minimalista'],
    palette: {
      primary: '#808080',
      secondary: '#000000',
      accent: '#C0C0C0',
      neutral: '#F5F5F5'
    },
    fonts: {
      heading: 'Abril Fatface',
      body: 'Inter',
      accent: 'Montserrat'
    },
    typography: {
      heading: 'Abril Fatface',
      body: 'Inter',
      accent: 'Montserrat'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#808080', secondary: '#000000', accent: '#C0C0C0', neutral: '#F5F5F5' },
      fonts: { heading: 'Abril Fatface', body: 'Inter', accent: 'Montserrat' },
      galleryType: 'grid',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'fade',
    features: ['Tons metálicos', 'Monocromático', 'Hover elegante']
  },
  {
    id: 'industrial-minimal',
    name: 'Industrial Minimal',
    description: 'Estética industrial com layout split e acentos em cobre',
    categories: ['moderno', 'minimalista'],
    palette: {
      primary: '#2F4F4F',
      secondary: '#FFFFFF',
      accent: '#B87333',
      neutral: '#708090'
    },
    fonts: {
      heading: 'Oswald',
      body: 'Roboto',
      accent: 'Exo 2'
    },
    typography: {
      heading: 'Oswald',
      body: 'Roboto',
      accent: 'Exo 2'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#2F4F4F', secondary: '#FFFFFF', accent: '#B87333', neutral: '#708090' },
      fonts: { heading: 'Oswald', body: 'Roboto', accent: 'Exo 2' },
      galleryType: 'slideshow',
      animationType: 'slide'
    }),
    sections: ['hero', 'presentation', 'timeline', 'gallery', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'slide',
    features: ['Layout split', 'Motion blur', 'Grid tipográfico']
  }
];
