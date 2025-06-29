
import { TemplateProfile } from '../templateTypes';
import { createDefaultTokens } from '../templateUtils';

export const NATURAL_TEMPLATES: TemplateProfile[] = [
  {
    id: 'lago-sereno',
    name: 'Lago Sereno',
    description: 'Tons de azul e verde, fundo com textura de água, visual calmo e relaxante',
    categories: ['praia', 'classico'],
    palette: {
      primary: '#4682B4',
      secondary: '#87CEEB',
      accent: '#98FB98',
      neutral: '#F0F8FF'
    },
    fonts: {
      heading: 'Cormorant Garamond',
      body: 'Source Sans Pro',
      accent: 'Dancing Script'
    },
    typography: {
      heading: 'Cormorant Garamond',
      body: 'Source Sans Pro',
      accent: 'Dancing Script'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#4682B4', secondary: '#87CEEB', accent: '#98FB98', neutral: '#F0F8FF' },
      fonts: { heading: 'Cormorant Garamond', body: 'Source Sans Pro', accent: 'Dancing Script' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Ondas animadas', 'Hover azul', 'Ícones de água']
  },
  {
    id: 'montanha-majestosa',
    name: 'Montanha Majestosa',
    description: 'Tons terrosos, fundo com montanhas, visual grandioso e natural',
    categories: ['rustico', 'campestre'],
    palette: {
      primary: '#8B4513',
      secondary: '#2F4F4F',
      accent: '#F5DEB3',
      neutral: '#CD853F'
    },
    fonts: {
      heading: 'Fjalla One',
      body: 'Open Sans',
      accent: 'Cabin'
    },
    typography: {
      heading: 'Fjalla One',
      body: 'Open Sans',
      accent: 'Cabin'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#8B4513', secondary: '#2F4F4F', accent: '#F5DEB3', neutral: '#CD853F' },
      fonts: { heading: 'Fjalla One', body: 'Open Sans', accent: 'Cabin' },
      galleryType: 'grid',
      animationType: 'parallax'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'parallax',
    features: ['Parallax nas montanhas', 'Hover marrom', 'Ícones de montanha']
  },
  {
    id: 'jardim-secreto',
    name: 'Jardim Secreto',
    description: 'Fundo branco, elementos de jardim, visual místico e encantado',
    categories: ['florais', 'romantico'],
    palette: {
      primary: '#228B22',
      secondary: '#8FBC8F',
      accent: '#DDA0DD',
      neutral: '#F0E68C'
    },
    fonts: {
      heading: 'Cinzel Decorative',
      body: 'Libre Baskerville',
      accent: 'Great Vibes'
    },
    typography: {
      heading: 'Cinzel Decorative',
      body: 'Libre Baskerville',
      accent: 'Great Vibes'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#228B22', secondary: '#8FBC8F', accent: '#DDA0DD', neutral: '#F0E68C' },
      fonts: { heading: 'Cinzel Decorative', body: 'Libre Baskerville', accent: 'Great Vibes' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'story', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Flores e folhas fade-in', 'Hover verde', 'Ícones de jardim']
  },
  {
    id: 'jardim-encantado',
    name: 'Jardim Encantado',
    description: 'Fundo branco, elementos de jardim, visual místico e encantado',
    categories: ['florais', 'romantico'],
    palette: {
      primary: '#228B22',
      secondary: '#8FBC8F',
      accent: '#DDA0DD',
      neutral: '#F0E68C'
    },
    fonts: {
      heading: 'Cinzel Decorative',
      body: 'Libre Baskerville',
      accent: 'Great Vibes'
    },
    typography: {
      heading: 'Cinzel Decorative',
      body: 'Libre Baskerville',
      accent: 'Great Vibes'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#228B22', secondary: '#8FBC8F', accent: '#DDA0DD', neutral: '#F0E68C' },
      fonts: { heading: 'Cinzel Decorative', body: 'Libre Baskerville', accent: 'Great Vibes' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'story', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Flores e folhas fade-in', 'Hover verde', 'Ícones de jardim']
  }
];
