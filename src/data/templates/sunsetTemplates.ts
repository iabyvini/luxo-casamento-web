
import { TemplateProfile } from '../templateTypes';
import { createDefaultTokens } from '../templateUtils';

export const SUNSET_TEMPLATES: TemplateProfile[] = [
  {
    id: 'pordosol-infinito',
    name: 'Pôr do Sol Infinito',
    description: 'Gradientes suaves, tons quentes, visual romântico e caloroso',
    categories: ['romantico', 'tropical'],
    palette: {
      primary: '#FF6347',
      secondary: '#FFD700',
      accent: '#FF69B4',
      neutral: '#FFA500'
    },
    fonts: {
      heading: 'Pacifico',
      body: 'Lato',
      accent: 'Dancing Script'
    },
    typography: {
      heading: 'Pacifico',
      body: 'Lato',
      accent: 'Dancing Script'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#FF6347', secondary: '#FFD700', accent: '#FF69B4', neutral: '#FFA500' },
      fonts: { heading: 'Pacifico', body: 'Lato', accent: 'Dancing Script' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Gradiente animado no hero', 'Hover laranja', 'Ícones de sol']
  },
  {
    id: 'pordosol-suave',
    name: 'Pôr do Sol Suave',
    description: 'Gradientes suaves, tons quentes, visual romântico e caloroso',
    categories: ['romantico', 'tropical'],
    palette: {
      primary: '#FF6347',
      secondary: '#FFD700',
      accent: '#FF69B4',
      neutral: '#FFA500'
    },
    fonts: {
      heading: 'Pacifico',
      body: 'Lato',
      accent: 'Dancing Script'
    },
    typography: {
      heading: 'Pacifico',
      body: 'Lato',
      accent: 'Dancing Script'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#FF6347', secondary: '#FFD700', accent: '#FF69B4', neutral: '#FFA500' },
      fonts: { heading: 'Pacifico', body: 'Lato', accent: 'Dancing Script' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Gradiente animado no hero', 'Hover laranja', 'Ícones de sol']
  },
  {
    id: 'starry-night',
    name: 'Starry Night',
    description: 'Fundo azul escuro, estrelas, visual místico e romântico',
    categories: ['cinematografico', 'romantico'],
    palette: {
      primary: '#191970',
      secondary: '#FFD700',
      accent: '#C0C0C0',
      neutral: '#4682B4'
    },
    fonts: {
      heading: 'Cinzel Decorative',
      body: 'Libre Baskerville',
      accent: 'Dancing Script'
    },
    typography: {
      heading: 'Cinzel Decorative',
      body: 'Libre Baskerville',
      accent: 'Dancing Script'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#191970', secondary: '#FFD700', accent: '#C0C0C0', neutral: '#4682B4' },
      fonts: { heading: 'Cinzel Decorative', body: 'Libre Baskerville', accent: 'Dancing Script' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Estrelas piscando', 'Hover dourado', 'Ícones de estrelas']
  }
];
