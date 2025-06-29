
import { TemplateProfile } from '../templateTypes';
import { createDefaultTokens } from '../templateUtils';

export const MODERN_TEMPLATES: TemplateProfile[] = [
  {
    id: 'boho-dreams',
    name: 'Boho Dreams',
    description: 'Estilo boêmio com elementos étnicos e paleta terrosa',
    categories: ['boho'],
    palette: {
      primary: '#D2B48C',
      secondary: '#BC8F8F',
      accent: '#CD853F',
      neutral: '#FFF8DC'
    },
    fonts: {
      heading: 'Libre Baskerville',
      body: 'Source Sans Pro',
      accent: 'Pacifico'
    },
    typography: {
      heading: 'Libre Baskerville',
      body: 'Source Sans Pro',
      accent: 'Pacifico'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#D2B48C', secondary: '#BC8F8F', accent: '#CD853F', neutral: '#FFF8DC' },
      fonts: { heading: 'Libre Baskerville', body: 'Source Sans Pro', accent: 'Pacifico' },
      galleryType: 'slideshow',
      animationType: 'parallax'
    }),
    sections: ['hero', 'couple', 'story', 'gallery', 'event-details', 'rsvp'],
    galleryType: 'slideshow',
    animationType: 'parallax',
    features: ['Estilo boêmio', 'Elementos étnicos', 'Slideshow dinâmico']
  },
  {
    id: 'tropical-paradise',
    name: 'Tropical Paradise',
    description: 'Cores vibrantes e elementos tropicais para celebrações exóticas',
    categories: ['tropical', 'praia'],
    palette: {
      primary: '#FF6B35',
      secondary: '#F7931E',
      accent: '#FFD23F',
      neutral: '#FFFFFF'
    },
    fonts: {
      heading: 'Raleway',
      body: 'Lato',
      accent: 'Satisfy'
    },
    typography: {
      heading: 'Raleway',
      body: 'Lato',
      accent: 'Satisfy'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#FF6B35', secondary: '#F7931E', accent: '#FFD23F', neutral: '#FFFFFF' },
      fonts: { heading: 'Raleway', body: 'Lato', accent: 'Satisfy' },
      galleryType: 'carousel',
      animationType: 'slide'
    }),
    sections: ['hero', 'countdown', 'gallery', 'event-details', 'rsvp'],
    galleryType: 'carousel',
    animationType: 'slide',
    features: ['Tema tropical', 'Cores vibrantes', 'Carrossel interativo']
  },
  {
    id: 'cinematic-story',
    name: 'Cinematic Story',
    description: 'Inspirado em filmes com cores dramáticas e layouts impactantes',
    categories: ['cinematografico'],
    palette: {
      primary: '#1C1C1C',
      secondary: '#2E2E2E',
      accent: '#FF4500',
      neutral: '#F5F5F5'
    },
    fonts: {
      heading: 'Oswald',
      body: 'Roboto',
      accent: 'Cinzel'
    },
    typography: {
      heading: 'Oswald',
      body: 'Roboto',
      accent: 'Cinzel'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#1C1C1C', secondary: '#2E2E2E', accent: '#FF4500', neutral: '#F5F5F5' },
      fonts: { heading: 'Oswald', body: 'Roboto', accent: 'Cinzel' },
      galleryType: 'slideshow',
      animationType: 'parallax'
    }),
    sections: ['hero', 'story', 'gallery', 'event-details', 'rsvp'],
    galleryType: 'slideshow',
    animationType: 'parallax',
    features: ['Visual cinematográfico', 'Efeitos dramáticos', 'Slideshow fullscreen']
  },
  {
    id: 'vintage-romance',
    name: 'Vintage Romance',
    description: 'Charme vintage com detalhes dourados e tipografia clássica',
    categories: ['classico', 'romantico'],
    palette: {
      primary: '#F5F5DC',
      secondary: '#DEB887',
      accent: '#DAA520',
      neutral: '#FFFFFF'
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Crimson Text',
      accent: 'Alex Brush'
    },
    typography: {
      heading: 'Playfair Display',
      body: 'Crimson Text',
      accent: 'Alex Brush'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#F5F5DC', secondary: '#DEB887', accent: '#DAA520', neutral: '#FFFFFF' },
      fonts: { heading: 'Playfair Display', body: 'Crimson Text', accent: 'Alex Brush' },
      galleryType: 'grid',
      animationType: 'fade'
    }),
    sections: ['hero', 'couple', 'story', 'gallery', 'event-details', 'rsvp', 'gifts'],
    galleryType: 'grid',
    animationType: 'fade',
    features: ['Estilo vintage', 'Detalhes dourados', 'Layout clássico']
  }
];
