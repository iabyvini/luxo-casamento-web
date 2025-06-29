export type TemplateCategory = 
  | 'rustico' 
  | 'praia' 
  | 'classico' 
  | 'moderno' 
  | 'boho' 
  | 'tropical' 
  | 'minimalista' 
  | 'florais' 
  | 'cinematografico' 
  | 'campestre'
  | 'romantico';

export interface TemplateProfile {
  id: string;
  name: string;
  description: string;
  categories: TemplateCategory[];
  palette: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
  };
  fonts: {
    heading: string;
    body: string;
    accent: string;
  };
  sections: string[];
  galleryType: 'carousel' | 'grid' | 'slideshow';
  animationType: 'fade' | 'slide' | 'parallax';
  features: string[];
}

export const TEMPLATE_CATEGORIES: Record<TemplateCategory, { name: string; count: number }> = {
  'rustico': { name: 'Rústico', count: 8 },
  'praia': { name: 'Praia', count: 6 },
  'classico': { name: 'Clássico', count: 10 },
  'moderno': { name: 'Moderno', count: 8 },
  'boho': { name: 'Boho', count: 5 },
  'tropical': { name: 'Tropical', count: 4 },
  'minimalista': { name: 'Minimalista', count: 6 },
  'florais': { name: 'Florais', count: 7 },
  'cinematografico': { name: 'Cinematográfico', count: 3 },
  'campestre': { name: 'Campestre', count: 5 },
  'romantico': { name: 'Romântico', count: 6 }
};

export const TEMPLATE_LIBRARY: TemplateProfile[] = [
  {
    id: 'eternal-love',
    name: 'Eternal Love',
    description: 'Template romântico com elementos florais delicados e tons suaves de rosa',
    categories: ['romantico', 'florais'],
    palette: {
      primary: '#F8BBD9',
      secondary: '#E4A5C7',
      accent: '#D4AF37',
      neutral: '#F5F5F5'
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Lora',
      accent: 'Dancing Script'
    },
    sections: ['hero', 'story', 'gallery', 'event-details', 'rsvp', 'gifts'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Animações suaves', 'Galeria em slideshow', 'Design romântico']
  },
  {
    id: 'rustic-charm',
    name: 'Rustic Charm',
    description: 'Estilo rústico com elementos de madeira e tons terrosos',
    categories: ['rustico', 'campestre'],
    palette: {
      primary: '#D2691E',
      secondary: '#8B4513',
      accent: '#228B22',
      neutral: '#F5F5DC'
    },
    fonts: {
      heading: 'Merriweather',
      body: 'Open Sans',
      accent: 'Caveat'
    },
    sections: ['hero', 'couple', 'story', 'gallery', 'event-details', 'rsvp'],
    galleryType: 'grid',
    animationType: 'slide',
    features: ['Design rústico', 'Galeria em grade', 'Tons terrosos']
  },
  {
    id: 'ocean-breeze',
    name: 'Ocean Breeze',
    description: 'Template inspirado no mar com tons de azul e elementos aquáticos',
    categories: ['praia', 'tropical'],
    palette: {
      primary: '#4682B4',
      secondary: '#87CEEB',
      accent: '#FFD700',
      neutral: '#F0F8FF'
    },
    fonts: {
      heading: 'Montserrat',
      body: 'Nunito',
      accent: 'Kaushan Script'
    },
    sections: ['hero', 'countdown', 'story', 'gallery', 'event-details', 'rsvp'],
    galleryType: 'carousel',
    animationType: 'parallax',
    features: ['Efeitos parallax', 'Tema praia', 'Carrossel de fotos']
  },
  {
    id: 'elegant-classic',
    name: 'Elegant Classic',
    description: 'Elegância clássica com tipografia refinada e ornamentos tradicionais',
    categories: ['classico'],
    palette: {
      primary: '#2F4F4F',
      secondary: '#708090',
      accent: '#DAA520',
      neutral: '#FFFFFF'
    },
    fonts: {
      heading: 'Cormorant Garamond',
      body: 'Crimson Text',
      accent: 'Great Vibes'
    },
    sections: ['hero', 'couple', 'story', 'gallery', 'event-details', 'rsvp', 'gifts'],
    galleryType: 'grid',
    animationType: 'fade',
    features: ['Design clássico', 'Tipografia elegante', 'Layout tradicional']
  },
  {
    id: 'modern-minimalist',
    name: 'Modern Minimalist',
    description: 'Design limpo e contemporâneo com muito espaço em branco',
    categories: ['moderno', 'minimalista'],
    palette: {
      primary: '#2C3E50',
      secondary: '#34495E',
      accent: '#E74C3C',
      neutral: '#ECF0F1'
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
      accent: 'Quicksand'
    },
    sections: ['hero', 'story', 'gallery', 'event-details', 'rsvp'],
    galleryType: 'grid',
    animationType: 'slide',
    features: ['Design minimalista', 'Tipografia moderna', 'Layout limpo']
  },
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
    sections: ['hero', 'countdown', 'gallery', 'event-details', 'rsvp'],
    galleryType: 'carousel',
    animationType: 'slide',
    features: ['Tema tropical', 'Cores vibrantes', 'Carrossel interativo']
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
    sections: ['hero', 'couple', 'story', 'gallery', 'event-details', 'rsvp', 'gifts'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Elementos florais', 'Paleta romântica', 'Slideshow elegante']
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
    sections: ['hero', 'couple', 'story', 'gallery', 'event-details', 'rsvp', 'gifts'],
    galleryType: 'grid',
    animationType: 'fade',
    features: ['Estilo vintage', 'Detalhes dourados', 'Layout clássico']
  }
];
