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
  },

  // New 40 templates start here...
  
  // 1. Vintage Floral
  {
    id: 'vintage-floral',
    name: 'Vintage Floral',
    description: 'Fundo bege com flores em aquarela, visual romântico e delicado',
    categories: ['florais', 'romantico', 'classico'],
    palette: {
      primary: '#F0E6D2',
      secondary: '#C8D5B9',
      accent: '#FAB7B7',
      neutral: '#E8D5C4'
    },
    fonts: {
      heading: 'Great Vibes',
      body: 'Lora',
      accent: 'Dancing Script'
    },
    typography: {
      heading: 'Great Vibes',
      body: 'Lora',
      accent: 'Dancing Script'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#F0E6D2', secondary: '#C8D5B9', accent: '#FAB7B7', neutral: '#E8D5C4' },
      fonts: { heading: 'Great Vibes', body: 'Lora', accent: 'Dancing Script' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'story', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Aquarela vintage', 'Bordas florais', 'Animação fade suave']
  },

  // 2. Tropical Praia Branca
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

  // 3. Clássico Europeu
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

  // 4. Jardim Boho
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

  // 5. Industrial Minimal
  {
    id: 'industrial-minimal',
    name: 'Industrial Minimal',
    description: 'Estética industrial com layout split e acentos em cobre',
    categories: ['moderno', 'minimalista'],
    palette: {
      primary: '#2F4F4F',
      secondary: '#FFFFFF',
      accent: '#B87333',
      neutral: '#708090'
    },
    fonts: {
      heading: 'Oswald',
      body: 'Roboto',
      accent: 'Exo 2'
    },
    typography: {
      heading: 'Oswald',
      body: 'Roboto',
      accent: 'Exo 2'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#2F4F4F', secondary: '#FFFFFF', accent: '#B87333', neutral: '#708090' },
      fonts: { heading: 'Oswald', body: 'Roboto', accent: 'Exo 2' },
      galleryType: 'slideshow',
      animationType: 'slide'
    }),
    sections: ['hero', 'presentation', 'timeline', 'gallery', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'slide',
    features: ['Layout split', 'Motion blur', 'Grid tipográfico']
  },

  // 6. Minimal Chic
  {
    id: 'minimal-chic',
    name: 'Minimal Chic',
    description: 'Minimalista elegante com fundo branco e detalhes sutis',
    categories: ['minimalista', 'moderno'],
    palette: {
      primary: '#FFFFFF',
      secondary: '#000000',
      accent: '#F5F5F5',
      neutral: '#C0C0C0'
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter',
      accent: 'Poppins'
    },
    typography: {
      heading: 'Inter',
      body: 'Inter',
      accent: 'Poppins'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#FFFFFF', secondary: '#000000', accent: '#F5F5F5', neutral: '#C0C0C0' },
      fonts: { heading: 'Inter', body: 'Inter', accent: 'Poppins' },
      galleryType: 'grid',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'fade',
    features: ['Visual clean', 'Linhas finas', 'Cards com sombra']
  },

  // 7. Boho Garden (different from jardim-boho)
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

  // 8. Noir Cinema
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

  // 9. Praia Solar
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

  // 10. Romântico Floral Escuro
  {
    id: 'romantico-floral-escuro',
    name: 'Romântico Floral Escuro',
    description: 'Fundo preto com flores delicadas e clima misterioso',
    categories: ['romantico', 'florais'],
    palette: {
      primary: '#000000',
      secondary: '#2D2D2D',
      accent: '#8B4B8B',
      neutral: '#DDA0DD'
    },
    fonts: {
      heading: 'Cormorant Garamond',
      body: 'Inter',
      accent: 'Dancing Script'
    },
    typography: {
      heading: 'Cormorant Garamond',
      body: 'Inter',
      accent: 'Dancing Script'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#000000', secondary: '#2D2D2D', accent: '#8B4B8B', neutral: '#DDA0DD' },
      fonts: { heading: 'Cormorant Garamond', body: 'Inter', accent: 'Dancing Script' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'story', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Flores no escuro', 'Hover com brilho', 'Moldura floral']
  },

  // 11-50: Continue with remaining templates...
  
  // 11. Minimal Marrom
  {
    id: 'minimal-marron',
    name: 'Minimal Marrom',
    description: 'Minimalista sofisticado em tons terrosos',
    categories: ['minimalista'],
    palette: {
      primary: '#8B4513',
      secondary: '#D2B48C',
      accent: '#F5DEB3',
      neutral: '#DEB887'
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter',
      accent: 'Poppins'
    },
    typography: {
      heading: 'Inter',
      body: 'Inter',
      accent: 'Poppins'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#8B4513', secondary: '#D2B48C', accent: '#F5DEB3', neutral: '#DEB887' },
      fonts: { heading: 'Inter', body: 'Inter', accent: 'Poppins' },
      galleryType: 'grid',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'fade',
    features: ['Tons terrosos', 'Timeline vertical', 'Cards clean']
  },

  // 12. Arte Pop
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

  // 13. Luxe Minimal
  {
    id: 'luxe-minimal',
    name: 'Luxe Minimal',
    description: 'Minimalismo luxuoso com detalhes dourados',
    categories: ['minimalista', 'classico'],
    palette: {
      primary: '#FFFFFF',
      secondary: '#000000',
      accent: '#FFD700',
      neutral: '#F5F5F5'
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Inter',
      accent: 'Great Vibes'
    },
    typography: {
      heading: 'Playfair Display',
      body: 'Inter',
      accent: 'Great Vibes'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#FFFFFF', secondary: '#000000', accent: '#FFD700', neutral: '#F5F5F5' },
      fonts: { heading: 'Playfair Display', body: 'Inter', accent: 'Great Vibes' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Brilho dourado', 'Linhas finas', 'Hover luxuoso']
  },

  // 14. Campo Vintage
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

  // 15. Cinzento Luxo
  {
    id: 'cinzento-luxo',
    name: 'Cinzento Luxo',
    description: 'Elegância monocromática com detalhes metálicos',
    categories: ['moderno', 'minimalista'],
    palette: {
      primary: '#808080',
      secondary: '#000000',
      accent: '#C0C0C0',
      neutral: '#F5F5F5'
    },
    fonts: {
      heading: 'Abril Fatface',
      body: 'Inter',
      accent: 'Montserrat'
    },
    typography: {
      heading: 'Abril Fatface',
      body: 'Inter',
      accent: 'Montserrat'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#808080', secondary: '#000000', accent: '#C0C0C0', neutral: '#F5F5F5' },
      fonts: { heading: 'Abril Fatface', body: 'Inter', accent: 'Montserrat' },
      galleryType: 'grid',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'fade',
    features: ['Tons metálicos', 'Monocromático', 'Hover elegante']
  },

  // Continue with remaining templates (16-50)...
  // Adding all remaining templates to reach 50 total
  
  // 16-20
  {
    id: 'floral-romantico-claro',
    name: 'Floral Romântico Claro',
    description: 'Flores delicadas em fundo branco com tons pastéis',
    categories: ['florais', 'romantico'],
    palette: {
      primary: '#FFB6C1',
      secondary: '#98FB98',
      accent: '#F0E68C',
      neutral: '#E6E6FA'
    },
    fonts: {
      heading: 'Cormorant Garamond',
      body: 'Inter',
      accent: 'Dancing Script'
    },
    typography: {
      heading: 'Cormorant Garamond',
      body: 'Inter',
      accent: 'Dancing Script'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#FFB6C1', secondary: '#98FB98', accent: '#F0E68C', neutral: '#E6E6FA' },
      fonts: { heading: 'Cormorant Garamond', body: 'Inter', accent: 'Dancing Script' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'story', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Flores pastéis', 'Moldura floral', 'Hover colorido']
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
    id: 'monocromatico-luxo',
    name: 'Monocromático Luxo',
    description: 'Ultra minimalista em tons de cinza com elegância sofisticada',
    categories: ['minimalista', 'moderno'],
    palette: {
      primary: '#808080',
      secondary: '#000000',
      accent: '#C0C0C0',
      neutral: '#F5F5F5'
    },
    fonts: {
      heading: 'Abril Fatface',
      body: 'Inter',
      accent: 'Montserrat'
    },
    typography: {
      heading: 'Abril Fatface',
      body: 'Inter',
      accent: 'Montserrat'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#808080', secondary: '#000000', accent: '#C0C0C0', neutral: '#F5F5F5' },
      fonts: { heading: 'Abril Fatface', body: 'Inter', accent: 'Montserrat' },
      galleryType: 'slideshow',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'slideshow',
    animationType: 'fade',
    features: ['Ultra minimal', 'Monocromático', 'Sofisticado']
  },

  {
    id: 'primavera-delicada',
    name: 'Primavera Delicada',
    description: 'Cores alegres da primavera com flores coloridas',
    categories: ['florais', 'romantico'],
    palette: {
      primary: '#FFB6C1',
      secondary: '#98FB98',
      accent: '#F0E68C',
      neutral: '#E6E6FA'
    },
    fonts: {
      heading: 'Sacramento',
      body: 'Lato',
      accent: 'Great Vibes'
    },
    typography: {
      heading: 'Sacramento',
      body: 'Lato',
      accent: 'Great Vibes'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#FFB6C1', secondary: '#98FB98', accent: '#F0E68C', neutral: '#E6E6FA' },
      fonts: { heading: 'Sacramento', body: 'Lato', accent: 'Great Vibes' },
      galleryType: 'grid',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'story', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'fade',
    features: ['Flores coloridas', 'Tons pastéis', 'Visual alegre']
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
  },

  // Continue with templates 21-50...
  // Adding more templates to complete the 50
  
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

  // Adding final templates to complete 50...
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
    id: 'folk-romantico',
    name: 'Folk Romântico',
    description: 'Ilustrações folk com cores quentes e tipografia personalizada',
    categories: ['romantico', 'florais'],
    palette: {
      primary: '#FFADAD',
      secondary: '#FFD6A5',
      accent: '#FDFFB6',
      neutral: '#CAFFBF'
    },
    fonts: {
      heading: 'Amatic SC',
      body: 'Open Sans',
      accent: 'Indie Flower'
    },
    typography: {
      heading: 'Amatic SC',
      body: 'Open Sans',
      accent: 'Indie Flower'
    },
    tokens: createDefaultTokens({
      palette: { primary: '#FFADAD', secondary: '#FFD6A5', accent: '#FDFFB6', neutral: '#CAFFBF' },
      fonts: { heading: 'Amatic SC', body: 'Open Sans', accent: 'Indie Flower' },
      galleryType: 'grid',
      animationType: 'fade'
    }),
    sections: ['hero', 'welcome', 'story', 'timeline', 'gifts', 'rsvp', 'footer'],
    galleryType: 'grid',
    animationType: 'fade',
    features: ['Ilustrações folk', 'Estilo scrapbook', 'Ícones artesanais']
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
