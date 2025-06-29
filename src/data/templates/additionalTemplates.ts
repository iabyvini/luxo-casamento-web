
import { TemplateProfile } from '../templateTypes';
import { createDefaultTokens } from '../templateUtils';

export const ADDITIONAL_TEMPLATES: TemplateProfile[] = [
  {
    id: 'classico-europeu',
    name: 'Clássico Europeu',
    description: 'Elegância europeia com molduras douradas e tipografia serifada',
    categories: ['classico'],
    palette: {
      primary: '#F5F5DC',
      secondary: '#DAA520',
      accent: '#8B4513',
      neutral: '#FFFACD'
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
      palette: { primary: '#F5F5DC', secondary: '#DAA520', accent: '#8B4513', neutral: '#FFFACD' },
      fonts: { heading: 'Playfair Display', body: 'Crimson Text', accent: 'Great Vibes' },
      galleryType: 'grid',
      animationType: 'slide'
    }),
    sections: ['hero', 'story', 'timeline', 'gifts', 'gallery', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'slide',
    features: ['Moldura dourada', 'Serifas elegantes', 'Layout clássico']
  },
  {
    id: 'jardim-boho',
    name: 'Jardim Boho',
    description: 'Tons terrosos com elementos de folhas secas e visual descontraído',
    categories: ['boho', 'campestre'],
    palette: {
      primary: '#D2B48C',
      secondary: '#F5DEB3',
      accent: '#CD853F',
      neutral: '#DEB887'
    },
    fonts: {
      heading: 'Satisfy',
      body: 'Open Sans',
      accent: 'Kalam'
    },
    typography: {
      heading: 'Satisfy',
      body: 'Open Sans',
      accent: 'Kalam'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#D2B48C', secondary: '#F5DEB3', accent: '#CD853F', neutral: '#DEB887' },
      fonts: { heading: 'Satisfy', body: 'Open Sans', accent: 'Kalam' },
      galleryType: 'grid',
      animationType: 'parallax'
    }),
    sections: ['hero', 'welcome', 'story', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'parallax',
    features: ['Folhas flutuantes', 'Bordas orgânicas', 'Ícones boêmios']
  },
  {
    id: 'boho-garden',
    name: 'Boho Garden',
    description: 'Elementos botânicos com ilustrações de folhas em tons terrosos',
    categories: ['boho', 'florais'],
    palette: {
      primary: '#F5DEB3',
      secondary: '#D2B48C',
      accent: '#A0522D',
      neutral: '#8FBC8F'
    },
    fonts: {
      heading: 'Satisfy',
      body: 'Open Sans',
      accent: 'Kalam'
    },
    typography: {
      heading: 'Satisfy',
      body: 'Open Sans',
      accent: 'Kalam'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#F5DEB3', secondary: '#D2B48C', accent: '#A0522D', neutral: '#8FBC8F' },
      fonts: { heading: 'Satisfy', body: 'Open Sans', accent: 'Kalam' },
      galleryType: 'grid',
      animationType: 'parallax'
    }),
    sections: ['hero', 'welcome', 'story', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'parallax',
    features: ['Ilustrações botânicas', 'Parallax leve', 'Corações desenhados']
  },
  {
    id: 'noir-cinema',
    name: 'Noir Cinema',
    description: 'Estilo cinema clássico em preto e branco com acentos vermelhos',
    categories: ['cinematografico'],
    palette: {
      primary: '#000000',
      secondary: '#FFFFFF',
      accent: '#8B0000',
      neutral: '#2F2F2F'
    },
    fonts: {
      heading: 'Cinzel',
      body: 'Crimson Text',
      accent: 'Abril Fatface'
    },
    typography: {
      heading: 'Cinzel',
      body: 'Crimson Text',
      accent: 'Abril Fatface'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#000000', secondary: '#FFFFFF', accent: '#8B0000', neutral: '#2F2F2F' },
      fonts: { heading: 'Cinzel', body: 'Crimson Text', accent: 'Abril Fatface' },
      galleryType: 'slideshow',
      animationType: 'slide'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gallery', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'slide',
    features: ['Estilo P&B', 'Hover vermelho', 'Ícones de filme']
  },
  {
    id: 'urbano-moderno',
    name: 'Urbano Moderno',
    description: 'Clean e moderno com detalhes urbanos contemporâneos',
    categories: ['moderno'],
    palette: {
      primary: '#2F4F4F',
      secondary: '#FFFFFF',
      accent: '#808080',
      neutral: '#D3D3D3'
    },
    fonts: {
      heading: 'Roboto Condensed',
      body: 'Open Sans',
      accent: 'Lato'
    },
    typography: {
      heading: 'Roboto Condensed',
      body: 'Open Sans',
      accent: 'Lato'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#2F4F4F', secondary: '#FFFFFF', accent: '#808080', neutral: '#D3D3D3' },
      fonts: { heading: 'Roboto Condensed', body: 'Open Sans', accent: 'Lato' },
      galleryType: 'grid',
      animationType: 'slide'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'slide',
    features: ['Design urbano', 'Ícones modernos', 'Layout limpo']
  }
];
