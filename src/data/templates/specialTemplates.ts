
import { TemplateProfile } from '../templateTypes';
import { createDefaultTokens } from '../templateUtils';

export const SPECIAL_TEMPLATES: TemplateProfile[] = [
  {
    id: 'aurora-boreal',
    name: 'Aurora Boreal',
    description: 'Atmosfera mágica com gradientes de aurora e estrelas',
    categories: ['cinematografico', 'romantico'],
    palette: {
      primary: '#0B0C10',
      secondary: '#1F2833',
      accent: '#66FCF1',
      neutral: '#45A29E'
    },
    fonts: {
      heading: 'Cinzel Decorative',
      body: 'Lato',
      accent: 'Sacramento'
    },
    typography: {
      heading: 'Cinzel Decorative',
      body: 'Lato',
      accent: 'Sacramento'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#0B0C10', secondary: '#1F2833', accent: '#66FCF1', neutral: '#45A29E' },
      fonts: { heading: 'Cinzel Decorative', body: 'Lato', accent: 'Sacramento' },
      galleryType: 'slideshow',
      animationType: 'parallax'
    }),
    sections: ['hero', 'welcome', 'story', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'parallax',
    features: ['Aurora animada', 'Estrelas piscando', 'Efeito glow']
  },
  {
    id: 'vinhedo-italiano',
    name: 'Vinhedo Italiano',
    description: 'Elegância bucólica inspirada nos vinhedos da Toscana',
    categories: ['classico', 'campestre'],
    palette: {
      primary: '#800020',
      secondary: '#F8F4E3',
      accent: '#C1A57B',
      neutral: '#556B2F'
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Crimson Text',
      accent: 'Great Vibes'
    },
    typography: {
      heading: 'Playfair Display',
      body: 'Crimson Text',
      accent: 'Great Vibes'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#800020', secondary: '#F8F4E3', accent: '#C1A57B', neutral: '#556B2F' },
      fonts: { heading: 'Playfair Display', body: 'Crimson Text', accent: 'Great Vibes' },
      galleryType: 'grid',
      animationType: 'parallax'
    }),
    sections: ['hero', 'welcome', 'story', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'parallax',
    features: ['Vinhedos', 'Folhas de parreira', 'Efeito selo']
  },
  {
    id: 'nevoeiro-elegante',
    name: 'Nevoeiro Elegante',
    description: 'Minimalismo sofisticado com tons frios e névoa suave',
    categories: ['minimalista', 'moderno'],
    palette: {
      primary: '#E0E0E0',
      secondary: '#A9A9A9',
      accent: '#696969',
      neutral: '#FFFFFF'
    },
    fonts: {
      heading: 'Cormorant Garamond',
      body: 'Inter',
      accent: 'Great Vibes'
    },
    typography: {
      heading: 'Cormorant Garamond',
      body: 'Inter',
      accent: 'Great Vibes'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#E0E0E0', secondary: '#A9A9A9', accent: '#696969', neutral: '#FFFFFF' },
      fonts: { heading: 'Cormorant Garamond', body: 'Inter', accent: 'Great Vibes' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'story', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Névoa animada', 'P&B elegante', 'Desfoque suave']
  },
  {
    id: 'campestre-leve',
    name: 'Campestre Leve',
    description: 'Paleta pastel com flores silvestres e visual descontraído',
    categories: ['campestre', 'florais'],
    palette: {
      primary: '#F5F5DC',
      secondary: '#C1E1C1',
      accent: '#FFF5BA',
      neutral: '#EAD2AC'
    },
    fonts: {
      heading: 'Sacramento',
      body: 'Lato',
      accent: 'Dancing Script'
    },
    typography: {
      heading: 'Sacramento',
      body: 'Lato',
      accent: 'Dancing Script'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#F5F5DC', secondary: '#C1E1C1', accent: '#FFF5BA', neutral: '#EAD2AC' },
      fonts: { heading: 'Sacramento', body: 'Lato', accent: 'Dancing Script' },
      galleryType: 'grid',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'story', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'fade',
    features: ['Aquarela floral', 'Tons pastéis', 'Ilustrações sutis']
  }
];
