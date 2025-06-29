
import { TemplateProfile } from '../templateTypes';
import { createDefaultTokens } from '../templateUtils';

export const RUSTIC_TEMPLATES: TemplateProfile[] = [
  {
    id: 'campo-vintage',
    name: 'Campo Vintage',
    description: 'Visual acolhedor com textura de papel e elementos vintage',
    categories: ['campestre', 'classico'],
    palette: {
      primary: '#8FBC8F',
      secondary: '#8B4513',
      accent: '#F5DEB3',
      neutral: '#DEB887'
    },
    fonts: {
      heading: 'Fredoka One',
      body: 'Merriweather',
      accent: 'Cabin'
    },
    typography: {
      heading: 'Fredoka One',
      body: 'Merriweather',
      accent: 'Cabin'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#8FBC8F', secondary: '#8B4513', accent: '#F5DEB3', neutral: '#DEB887' },
      fonts: { heading: 'Fredoka One', body: 'Merriweather', accent: 'Cabin' },
      galleryType: 'grid',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gallery', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'fade',
    features: ['Textura papel', 'Bordas desenhadas', 'Selo vintage']
  },
  {
    id: 'outono-dourado',
    name: 'Outono Dourado',
    description: 'Tons quentes de outono com folhas douradas',
    categories: ['campestre', 'classico'],
    palette: {
      primary: '#DAA520',
      secondary: '#8B4513',
      accent: '#CD853F',
      neutral: '#F4A460'
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Merriweather',
      accent: 'Dancing Script'
    },
    typography: {
      heading: 'Playfair Display',
      body: 'Merriweather',
      accent: 'Dancing Script'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#DAA520', secondary: '#8B4513', accent: '#CD853F', neutral: '#F4A460' },
      fonts: { heading: 'Playfair Display', body: 'Merriweather', accent: 'Dancing Script' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Folhas caindo', 'Tons dourados', 'Acolhedor']
  },
  {
    id: 'rustic-autumn',
    name: 'Rustic Autumn',
    description: 'Tons terrosos, folhas de outono, visual rústico e acolhedor',
    categories: ['rustico', 'campestre'],
    palette: {
      primary: '#8B4513',
      secondary: '#DAA520',
      accent: '#CD853F',
      neutral: '#F4A460'
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Merriweather',
      accent: 'Dancing Script'
    },
    typography: {
      heading: 'Playfair Display',
      body: 'Merriweather',
      accent: 'Dancing Script'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#8B4513', secondary: '#DAA520', accent: '#CD853F', neutral: '#F4A460' },
      fonts: { heading: 'Playfair Display', body: 'Merriweather', accent: 'Dancing Script' },
      galleryType: 'grid',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'fade',
    features: ['Folhas caindo', 'Tons dourados', 'Acolhedor']
  },
  {
    id: 'campo-rustico',
    name: 'Campo Rústico',
    description: 'Tons terrosos, textura de papel, elementos rústicos, visual acolhedor',
    categories: ['rustico', 'campestre'],
    palette: {
      primary: '#8FBC8F',
      secondary: '#8B4513',
      accent: '#F5DEB3',
      neutral: '#DEB887'
    },
    fonts: {
      heading: 'Fredoka One',
      body: 'Merriweather',
      accent: 'Cabin'
    },
    typography: {
      heading: 'Fredoka One',
      body: 'Merriweather',
      accent: 'Cabin'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#8FBC8F', secondary: '#8B4513', accent: '#F5DEB3', neutral: '#DEB887' },
      fonts: { heading: 'Fredoka One', body: 'Merriweather', accent: 'Cabin' },
      galleryType: 'grid',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gallery', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'fade',
    features: ['Textura papel', 'Bordas desenhadas', 'Selo rústico']
  }
];
