
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

export type GalleryType = 'carousel' | 'grid' | 'slideshow';
export type AnimationType = 'fade' | 'slide' | 'parallax';

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
  typography: {
    heading: string;
    body: string;
    accent: string;
  };
  tokens: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    fontFamily: string;
    headingFont: string;
    accentFont: string;
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
    galleryType: GalleryType;
    animationType: AnimationType;
  };
  sections: string[];
  galleryType: GalleryType;
  animationType: AnimationType;
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

const createDefaultTokens = (template: Partial<TemplateProfile>) => ({
  primary: template.palette?.primary || '#8B5A3C',
  secondary: template.palette?.secondary || '#D4B08A',
  accent: template.palette?.accent || '#D4AF37',
  background: '#FFFFFF',
  surface: '#F8F9FA',
  text: '#2C3E50',
  textSecondary: '#6C757D',
  border: '#DEE2E6',
  fontFamily: template.fonts?.body || 'Inter',
  headingFont: template.fonts?.heading || 'Playfair Display',
  accentFont: template.fonts?.accent || 'Dancing Script',
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px rgba(0, 0, 0, 0.15)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.2)',
  },
  galleryType: template.galleryType || 'grid' as GalleryType,
  animationType: template.animationType || 'fade' as AnimationType
});

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
    typography: {
      heading: 'Playfair Display',
      body: 'Lora',
      accent: 'Dancing Script'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#F8BBD9', secondary: '#E4A5C7', accent: '#D4AF37', neutral: '#F5F5F5' },
      fonts: { heading: 'Playfair Display', body: 'Lora', accent: 'Dancing Script' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
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
    typography: {
      heading: 'Merriweather',
      body: 'Open Sans',
      accent: 'Caveat'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#D2691E', secondary: '#8B4513', accent: '#228B22', neutral: '#F5F5DC' },
      fonts: { heading: 'Merriweather', body: 'Open Sans', accent: 'Caveat' },
      galleryType: 'grid',
      animationType: 'slide'
    }),
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
    typography: {
      heading: 'Montserrat',
      body: 'Nunito',
      accent: 'Kaushan Script'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#4682B4', secondary: '#87CEEB', accent: '#FFD700', neutral: '#F0F8FF' },
      fonts: { heading: 'Montserrat', body: 'Nunito', accent: 'Kaushan Script' },
      galleryType: 'carousel',
      animationType: 'parallax'
    }),
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
    typography: {
      heading: 'Cormorant Garamond',
      body: 'Crimson Text',
      accent: 'Great Vibes'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#2F4F4F', secondary: '#708090', accent: '#DAA520', neutral: '#FFFFFF' },
      fonts: { heading: 'Cormorant Garamond', body: 'Crimson Text', accent: 'Great Vibes' },
      galleryType: 'grid',
      animationType: 'fade'
    }),
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
    typography: {
      heading: 'Poppins',
      body: 'Inter',
      accent: 'Quicksand'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#2C3E50', secondary: '#34495E', accent: '#E74C3C', neutral: '#ECF0F1' },
      fonts: { heading: 'Poppins', body: 'Inter', accent: 'Quicksand' },
      galleryType: 'grid',
      animationType: 'slide'
    }),
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
    typography: {
      heading: 'Crimson Pro',
      body: 'Source Serif Pro',
      accent: 'Sacramento'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#E6E6FA', secondary: '#DDA0DD', accent: '#DA70D6', neutral: '#F8F8FF' },
      fonts: { heading: 'Crimson Pro', body: 'Source Serif Pro', accent: 'Sacramento' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
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

// Funções utilitárias
export const searchTemplates = (query: string): TemplateProfile[] => {
  const lowercaseQuery = query.toLowerCase();
  return TEMPLATE_LIBRARY.filter(template =>
    template.name.toLowerCase().includes(lowercaseQuery) ||
    template.description.toLowerCase().includes(lowercaseQuery) ||
    template.categories.some(cat => cat.toLowerCase().includes(lowercaseQuery)) ||
    template.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
};

export const getTemplatesByCategory = (category: TemplateCategory): TemplateProfile[] => {
  return TEMPLATE_LIBRARY.filter(template => 
    template.categories.includes(category)
  );
};

export const getTemplateById = (id: string): TemplateProfile | undefined => {
  return TEMPLATE_LIBRARY.find(template => template.id === id);
};
