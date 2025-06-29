
import { TemplateProfile } from '../templateTypes';
import { createDefaultTokens } from '../templateUtils';

export const TROPICAL_TEMPLATES: TemplateProfile[] = [
  {
    id: 'tropical-praia-branca',
    name: 'Tropical Praia Branca',
    description: 'Fundo branco limpo com detalhes tropicais e tons de azul',
    categories: ['tropical', 'praia'],
    palette: {
      primary: '#FFFFFF',
      secondary: '#F5F5DC',
      accent: '#4682B4',
      neutral: '#87CEEB'
    },
    fonts: {
      heading: 'Caveat',
      body: 'Nunito',
      accent: 'Pacifico'
    },
    typography: {
      heading: 'Caveat',
      body: 'Nunito',
      accent: 'Pacifico'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#FFFFFF', secondary: '#F5F5DC', accent: '#4682B4', neutral: '#87CEEB' },
      fonts: { heading: 'Caveat', body: 'Nunito', accent: 'Pacifico' },
      galleryType: 'grid',
      animationType: 'slide'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gallery', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'slide',
    features: ['Tema praia clean', 'Ícones marinhos', 'Polaroid gallery']
  },
  {
    id: 'praia-solar',
    name: 'Praia Solar',
    description: 'Visual ensolarado com tons de azul e areia',
    categories: ['praia'],
    palette: {
      primary: '#FFFFFF',
      secondary: '#F5F5DC',
      accent: '#4682B4',
      neutral: '#87CEEB'
    },
    fonts: {
      heading: 'Caveat',
      body: 'Nunito',
      accent: 'Pacifico'
    },
    typography: {
      heading: 'Caveat',
      body: 'Nunito',
      accent: 'Pacifico'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#FFFFFF', secondary: '#F5F5DC', accent: '#4682B4', neutral: '#87CEEB' },
      fonts: { heading: 'Caveat', body: 'Nunito', accent: 'Pacifico' },
      galleryType: 'grid',
      animationType: 'slide'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gallery', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'slide',
    features: ['Escrita na areia', 'Ícones de conchas', 'Gradiente azul']
  },
  {
    id: 'boho-tropical',
    name: 'Boho Tropical',
    description: 'Mistura descontraída de elementos boho e tropicais',
    categories: ['boho', 'tropical'],
    palette: {
      primary: '#228B22',
      secondary: '#DDA0DD',
      accent: '#F5DEB3',
      neutral: '#98FB98'
    },
    fonts: {
      heading: 'Lobster',
      body: 'Nunito',
      accent: 'Pacifico'
    },
    typography: {
      heading: 'Lobster',
      body: 'Nunito',
      accent: 'Pacifico'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#228B22', secondary: '#DDA0DD', accent: '#F5DEB3', neutral: '#98FB98' },
      fonts: { heading: 'Lobster', body: 'Nunito', accent: 'Pacifico' },
      galleryType: 'grid',
      animationType: 'parallax'
    }),
    sections: ['hero', 'welcome', 'story', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'parallax',
    features: ['Folhas tropicais', 'Parallax leve', 'Bordas orgânicas']
  },
  {
    id: 'tropical-romantico',
    name: 'Tropical Romântico',
    description: 'Fundo branco, elementos tropicais, visual leve e romântico',
    categories: ['tropical', 'romantico'],
    palette: {
      primary: '#FF6347',
      secondary: '#32CD32',
      accent: '#FFD700',
      neutral: '#87CEEB'
    },
    fonts: {
      heading: 'Pacifico',
      body: 'Nunito',
      accent: 'Dancing Script'
    },
    typography: {
      heading: 'Pacifico',
      body: 'Nunito',
      accent: 'Dancing Script'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#FF6347', secondary: '#32CD32', accent: '#FFD700', neutral: '#87CEEB' },
      fonts: { heading: 'Pacifico', body: 'Nunito', accent: 'Dancing Script' },
      galleryType: 'grid',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'story', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'fade',
    features: ['Visual romântico tropical', 'Elementos aquáticos', 'Folhas decorativas']
  }
];
