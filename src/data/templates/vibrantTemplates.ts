
import { TemplateProfile } from '../templateTypes';
import { createDefaultTokens } from '../templateUtils';

export const VIBRANT_TEMPLATES: TemplateProfile[] = [
  {
    id: 'arte-pop',
    name: 'Arte Pop',
    description: 'Cores vibrantes com elementos geométricos divertidos',
    categories: ['moderno'],
    palette: {
      primary: '#4169E1',
      secondary: '#FF7F50',
      accent: '#FFD700',
      neutral: '#FFFFFF'
    },
    fonts: {
      heading: 'Montserrat',
      body: 'Source Sans Pro',
      accent: 'Raleway'
    },
    typography: {
      heading: 'Montserrat',
      body: 'Source Sans Pro',
      accent: 'Raleway'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#4169E1', secondary: '#FF7F50', accent: '#FFD700', neutral: '#FFFFFF' },
      fonts: { heading: 'Montserrat', body: 'Source Sans Pro', accent: 'Raleway' },
      galleryType: 'grid',
      animationType: 'slide'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gallery', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'slide',
    features: ['Fundo geométrico', 'Ícones pop', 'Bordas coloridas']
  },
  {
    id: 'festa-latina',
    name: 'Festa Latina',
    description: 'Cores vibrantes, elementos festivos, visual alegre e animado',
    categories: ['tropical', 'moderno'],
    palette: {
      primary: '#FF6347',
      secondary: '#FFD700',
      accent: '#32CD32',
      neutral: '#FF1493'
    },
    fonts: {
      heading: 'Salsa',
      body: 'Nunito',
      accent: 'Dancing Script'
    },
    typography: {
      heading: 'Salsa',
      body: 'Nunito',
      accent: 'Dancing Script'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#FF6347', secondary: '#FFD700', accent: '#32CD32', neutral: '#FF1493' },
      fonts: { heading: 'Salsa', body: 'Nunito', accent: 'Dancing Script' },
      galleryType: 'carousel',
      animationType: 'slide'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'carousel',
    animationType: 'slide',
    features: ['Confetes animados', 'Hover colorido', 'Ícones festivos']
  },
  {
    id: 'festa-alegre',
    name: 'Festa Alegre',
    description: 'Cores vibrantes, elementos festivos, visual alegre e animado',
    categories: ['tropical', 'moderno'],
    palette: {
      primary: '#FF6347',
      secondary: '#FFD700',
      accent: '#32CD32',
      neutral: '#FF1493'
    },
    fonts: {
      heading: 'Salsa',
      body: 'Nunito',
      accent: 'Dancing Script'
    },
    typography: {
      heading: 'Salsa',
      body: 'Nunito',
      accent: 'Dancing Script'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#FF6347', secondary: '#FFD700', accent: '#32CD32', neutral: '#FF1493' },
      fonts: { heading: 'Salsa', body: 'Nunito', accent: 'Dancing Script' },
      galleryType: 'carousel',
      animationType: 'slide'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'carousel',
    animationType: 'slide',
    features: ['Confetes animados', 'Hover colorido', 'Ícones festivos']
  },
  {
    id: 'arte-contemporanea',
    name: 'Arte Contemporânea',
    description: 'Cores vibrantes, formas geométricas, layout assimétrico e moderno',
    categories: ['moderno'],
    palette: {
      primary: '#4169E1',
      secondary: '#FF7F50',
      accent: '#FFD700',
      neutral: '#FFFFFF'
    },
    fonts: {
      heading: 'Montserrat',
      body: 'Source Sans Pro',
      accent: 'Raleway'
    },
    typography: {
      heading: 'Montserrat',
      body: 'Source Sans Pro',
      accent: 'Raleway'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#4169E1', secondary: '#FF7F50', accent: '#FFD700', neutral: '#FFFFFF' },
      fonts: { heading: 'Montserrat', body: 'Source Sans Pro', accent: 'Raleway' },
      galleryType: 'grid',
      animationType: 'slide'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gallery', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'slide',
    features: ['Fundo geométrico', 'Ícones pop', 'Bordas coloridas']
  }
];
