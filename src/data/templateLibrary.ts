
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
  | 'campestre';

export type GalleryType = 'carousel' | 'grid' | 'slideshow';
export type AnimationType = 'fade' | 'slide' | 'parallax' | 'bounce' | 'zoom';

export interface TemplateSection {
  id: string;
  name: string;
  description: string;
  layout: 'fullwidth' | 'container' | 'split' | 'overlay';
  animations: AnimationType[];
}

export interface TemplateProfile {
  id: string;
  name: string;
  description: string;
  categories: TemplateCategory[];
  
  // Visual Design
  palette: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
  };
  
  typography: {
    heading: string;
    body: string;
    accent: string;
  };
  
  // Layout Configuration
  galleryType: GalleryType;
  animationType: AnimationType;
  
  // Sections Configuration
  sections: TemplateSection[];
  
  // Style Tokens
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
}

// Template: Vintage Floral (Primeiro exemplo implementado)
export const VINTAGE_FLORAL: TemplateProfile = {
  id: 'vintage-floral',
  name: 'Vintage Floral',
  description: 'Template romântico com elementos florais em aquarela, tipografia elegante e paleta suave inspirada em casamentos vintage.',
  categories: ['florais', 'classico'],
  
  palette: {
    primary: '#F0E6D2',
    secondary: '#C8D5B9', 
    accent: '#FAB7B7',
    neutral: '#E8D5C4'
  },
  
  typography: {
    heading: 'Great Vibes',
    body: 'Lora',
    accent: 'Dancing Script'
  },
  
  galleryType: 'grid',
  animationType: 'fade',
  
  sections: [
    {
      id: 'hero',
      name: 'Hero com Aquarela Vintage',
      description: 'Fundo floral sutil em aquarela, nome do casal com Great Vibes, animação fade in',
      layout: 'fullwidth',
      animations: ['fade']
    },
    {
      id: 'welcome',
      name: 'Bem-vindo',
      description: 'Texto introdutório sobre o casamento com bordas decorativas florais',
      layout: 'container',
      animations: ['fade']
    },
    {
      id: 'story',
      name: 'Nossa História',
      description: 'Layout em duas colunas com fotos e texto',
      layout: 'split',
      animations: ['slide']
    },
    {
      id: 'timeline',
      name: 'Cronograma',
      description: 'Blocos com ícones desenhados à mão simulando aquarela',
      layout: 'container',
      animations: ['fade']
    },
    {
      id: 'gifts',
      name: 'Lista de Presentes',
      description: 'Cards com borda floral, fundo pastel e fotos dos itens',
      layout: 'container',
      animations: ['zoom']
    },
    {
      id: 'rsvp',
      name: 'Confirmação de Presença',
      description: 'Campo com botões arredondados estilo delicado',
      layout: 'container',
      animations: ['fade']
    },
    {
      id: 'footer',
      name: 'Rodapé',
      description: 'Fundo com textura papel antigo e redes sociais em tons suaves',
      layout: 'fullwidth',
      animations: ['fade']
    }
  ],
  
  tokens: {
    primary: '#F0E6D2',
    secondary: '#C8D5B9',
    accent: '#FAB7B7',
    background: '#FDFBF7',
    surface: '#FFFFFF',
    text: '#2D2D2D',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    fontFamily: 'Lora, serif',
    headingFont: 'Great Vibes, cursive',
    accentFont: 'Dancing Script, cursive',
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
      sm: '0.375rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    },
    galleryType: 'grid',
    animationType: 'fade'
  }
};

// Template: Modern Minimalist
export const MODERN_MINIMALIST: TemplateProfile = {
  id: 'modern-minimalist',
  name: 'Modern Minimalist',
  description: 'Design limpo e contemporâneo com tipografia sans-serif, muito espaço em branco e paleta neutra.',
  categories: ['moderno', 'minimalista'],
  
  palette: {
    primary: '#1A1A1A',
    secondary: '#F5F5F5',
    accent: '#4A90E2',
    neutral: '#FFFFFF'
  },
  
  typography: {
    heading: 'Inter',
    body: 'Inter',
    accent: 'Inter'
  },
  
  galleryType: 'carousel',
  animationType: 'fade',
  
  sections: [
    {
      id: 'hero',
      name: 'Hero Minimalista',
      description: 'Fundo branco limpo com tipografia bold e linha decorativa simples',
      layout: 'fullwidth',
      animations: ['fade']
    },
    {
      id: 'about',
      name: 'Sobre Nós',
      description: 'Layout grid simples com foto e texto alinhado',
      layout: 'split',
      animations: ['slide']
    },
    {
      id: 'details',
      name: 'Detalhes do Evento',
      description: 'Cards limpos com ícones minimalistas',
      layout: 'container',
      animations: ['fade']
    },
    {
      id: 'gallery',
      name: 'Galeria',
      description: 'Carrossel horizontal com navegação discreta',
      layout: 'fullwidth',
      animations: ['slide']
    },
    {
      id: 'rsvp',
      name: 'RSVP',
      description: 'Formulário limpo com botões flat',
      layout: 'container',
      animations: ['fade']
    }
  ],
  
  tokens: {
    primary: '#1A1A1A',
    secondary: '#F5F5F5',
    accent: '#4A90E2',
    background: '#FFFFFF',
    surface: '#FAFAFA',
    text: '#1A1A1A',
    textSecondary: '#666666',
    border: '#E0E0E0',
    fontFamily: 'Inter, sans-serif',
    headingFont: 'Inter, sans-serif',
    accentFont: 'Inter, sans-serif',
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
      md: '2rem',
      lg: '3rem',
      xl: '4rem',
      '2xl': '6rem',
    },
    borderRadius: {
      sm: '0rem',
      md: '0rem',
      lg: '0rem',
      xl: '0rem',
    },
    shadows: {
      sm: 'none',
      md: 'none',
      lg: 'none',
    },
    galleryType: 'carousel',
    animationType: 'fade'
  }
};

// Template: Beach Tropical
export const BEACH_TROPICAL: TemplateProfile = {
  id: 'beach-tropical',
  name: 'Beach Tropical',
  description: 'Inspirado em praias paradisíacas com cores oceânicas, folhas tropicais e tipografia descontraída.',
  categories: ['praia', 'tropical'],
  
  palette: {
    primary: '#00B4D8',
    secondary: '#90E0EF',
    accent: '#FFB703',
    neutral: '#F8F9FA'
  },
  
  typography: {
    heading: 'Pacifico',
    body: 'Open Sans',
    accent: 'Dancing Script'
  },
  
  galleryType: 'slideshow',
  animationType: 'slide',
  
  sections: [
    {
      id: 'hero',
      name: 'Hero Tropical',
      description: 'Fundo com ondas do mar e palmeiras, nomes em fonte tropical',
      layout: 'fullwidth',
      animations: ['slide']
    },
    {
      id: 'countdown',
      name: 'Contagem Regressiva',
      description: 'Timer com elementos de praia e conchas',
      layout: 'container',
      animations: ['bounce']
    },
    {
      id: 'story',
      name: 'Nossa História',
      description: 'Seções alternadas com fotos de praia',
      layout: 'split',
      animations: ['slide']
    },
    {
      id: 'location',
      name: 'Local do Evento',
      description: 'Mapa interativo com marcadores personalizados',
      layout: 'fullwidth',
      animations: ['fade']
    },
    {
      id: 'gallery',
      name: 'Galeria de Fotos',
      description: 'Slideshow fullscreen com transições suaves',
      layout: 'fullwidth',
      animations: ['slide']
    }
  ],
  
  tokens: {
    primary: '#00B4D8',
    secondary: '#90E0EF',
    accent: '#FFB703',
    background: 'linear-gradient(135deg, #CAF0F8 0%, #90E0EF 100%)',
    surface: '#FFFFFF',
    text: '#03045E',
    textSecondary: '#0077B6',
    border: '#90E0EF',
    fontFamily: 'Open Sans, sans-serif',
    headingFont: 'Pacifico, cursive',
    accentFont: 'Dancing Script, cursive',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.5rem',
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
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '2.5rem',
    },
    shadows: {
      sm: '0 2px 4px rgba(0, 180, 216, 0.1)',
      md: '0 4px 12px rgba(0, 180, 216, 0.15)',
      lg: '0 8px 24px rgba(0, 180, 216, 0.2)',
    },
    galleryType: 'slideshow',
    animationType: 'slide'
  }
};

// Template: Rustic Country
export const RUSTIC_COUNTRY: TemplateProfile = {
  id: 'rustic-country',
  name: 'Rustic Country',
  description: 'Estilo campestre com madeira, tons terrosos e elementos naturais para casamentos rústicos.',
  categories: ['rustico', 'campestre'],
  
  palette: {
    primary: '#8B4513',
    secondary: '#D2B48C',
    accent: '#228B22',
    neutral: '#F5F5DC'
  },
  
  typography: {
    heading: 'Fredoka One',
    body: 'Cabin',
    accent: 'Caveat'
  },
  
  galleryType: 'grid',
  animationType: 'fade',
  
  sections: [
    {
      id: 'hero',
      name: 'Hero Rústico',
      description: 'Fundo de madeira envelhecida com elementos florais silvestres',
      layout: 'fullwidth',
      animations: ['fade']
    },
    {
      id: 'welcome',
      name: 'Boas-vindas',
      description: 'Texto em placa de madeira com bordas ornamentadas',
      layout: 'container',
      animations: ['slide']
    },
    {
      id: 'timeline',
      name: 'Cronograma',
      description: 'Timeline vertical com ícones de fazenda',
      layout: 'container',
      animations: ['slide']
    },
    {
      id: 'gallery',
      name: 'Momentos Especiais',
      description: 'Grid de fotos com molduras rústicas',
      layout: 'container',
      animations: ['zoom']
    },
    {
      id: 'location',
      name: 'Como Chegar',
      description: 'Mapa estilizado com ilustrações campestres',
      layout: 'split',
      animations: ['fade']
    }
  ],
  
  tokens: {
    primary: '#8B4513',
    secondary: '#D2B48C',
    accent: '#228B22',
    background: '#FFF8DC',
    surface: '#FFFFFF',
    text: '#654321',
    textSecondary: '#8B7355',
    border: '#D2B48C',
    fontFamily: 'Cabin, sans-serif',
    headingFont: 'Fredoka One, cursive',
    accentFont: 'Caveat, cursive',
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
      sm: '0 1px 3px rgba(139, 69, 19, 0.1)',
      md: '0 4px 6px rgba(139, 69, 19, 0.15)',
      lg: '0 10px 15px rgba(139, 69, 19, 0.2)',
    },
    galleryType: 'grid',
    animationType: 'fade'
  }
};

// Template: Boho Chic
export const BOHO_CHIC: TemplateProfile = {
  id: 'boho-chic',
  name: 'Boho Chic',
  description: 'Estilo boêmio com elementos étnicos, penas, dreamcatchers e paleta terrosa.',
  categories: ['boho'],
  
  palette: {
    primary: '#D2691E',
    secondary: '#DDA0DD',
    accent: '#F0E68C',
    neutral: '#F5E6D3'
  },
  
  typography: {
    heading: 'Indie Flower',
    body: 'Nunito',
    accent: 'Satisfy'
  },
  
  galleryType: 'carousel',
  animationType: 'parallax',
  
  sections: [
    {
      id: 'hero',
      name: 'Hero Boêmio',
      description: 'Mandala de fundo com penas flutuantes e tipografia manuscrita',
      layout: 'fullwidth',
      animations: ['parallax']
    },
    {
      id: 'love-story',
      name: 'História de Amor',
      description: 'Seções com ornamentos étnicos e divisores decorativos',
      layout: 'container',
      animations: ['slide']
    },
    {
      id: 'ceremony',
      name: 'Cerimônia',
      description: 'Cards com bordas étnicas e ícones boho',
      layout: 'split',
      animations: ['fade']
    },
    {
      id: 'gallery',
      name: 'Galeria Boho',
      description: 'Carrossel com molduras vintage e filtros sépia',
      layout: 'fullwidth',
      animations: ['slide']
    },
    {
      id: 'wishes',
      name: 'Desejos',
      description: 'Área para mensagens com dreamcatcher decorativo',
      layout: 'container',
      animations: ['fade']
    }
  ],
  
  tokens: {
    primary: '#D2691E',
    secondary: '#DDA0DD',
    accent: '#F0E68C',
    background: 'linear-gradient(45deg, #F5E6D3 0%, #E6E6FA 100%)',
    surface: '#FFFFFF',
    text: '#8B4513',
    textSecondary: '#CD853F',
    border: '#DDA0DD',
    fontFamily: 'Nunito, sans-serif',
    headingFont: 'Indie Flower, cursive',
    accentFont: 'Satisfy, cursive',
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
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
    shadows: {
      sm: '0 2px 4px rgba(210, 105, 30, 0.1)',
      md: '0 4px 8px rgba(210, 105, 30, 0.15)',
      lg: '0 8px 16px rgba(210, 105, 30, 0.2)',
    },
    galleryType: 'carousel',
    animationType: 'parallax'
  }
};

// Template: Classic Elegance
export const CLASSIC_ELEGANCE: TemplateProfile = {
  id: 'classic-elegance',
  name: 'Classic Elegance',
  description: 'Template clássico e elegante com dourado, tipografia serifada e ornamentos tradicionais.',
  categories: ['classico'],
  
  palette: {
    primary: '#8B4513',
    secondary: '#DAA520',
    accent: '#F5DEB3',
    neutral: '#FFFACD'
  },
  
  typography: {
    heading: 'Cinzel',
    body: 'Libre Baskerville',
    accent: 'Cinzel Decorative'
  },
  
  galleryType: 'grid',
  animationType: 'fade',
  
  sections: [
    {
      id: 'hero',
      name: 'Hero Clássico',
      description: 'Fundo ornamentado com molduras douradas e tipografia serifada',
      layout: 'fullwidth',
      animations: ['fade']
    },
    {
      id: 'invitation',
      name: 'Convite',
      description: 'Texto formal com bordas decorativas clássicas',
      layout: 'container',
      animations: ['fade']
    },
    {
      id: 'couple',
      name: 'O Casal',
      description: 'Fotos em molduras ornamentadas com biografia elegante',
      layout: 'split',
      animations: ['slide']
    },
    {
      id: 'ceremony-details',
      name: 'Detalhes da Cerimônia',
      description: 'Informações em cards com bordas douradas',
      layout: 'container',
      animations: ['fade']
    },
    {
      id: 'gallery',
      name: 'Galeria de Momentos',
      description: 'Grid de fotos com molduras clássicas',
      layout: 'container',
      animations: ['zoom']
    }
  ],
  
  tokens: {
    primary: '#8B4513',
    secondary: '#DAA520',
    accent: '#F5DEB3',
    background: '#FFFEF7',
    surface: '#FFFFFF',
    text: '#654321',
    textSecondary: '#8B7355',
    border: '#DAA520',
    fontFamily: 'Libre Baskerville, serif',
    headingFont: 'Cinzel, serif',
    accentFont: 'Cinzel Decorative, cursive',
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
      sm: '0.125rem',
      md: '0.25rem',
      lg: '0.375rem',
      xl: '0.5rem',
    },
    shadows: {
      sm: '0 1px 3px rgba(218, 165, 32, 0.1)',
      md: '0 4px 6px rgba(218, 165, 32, 0.15)',
      lg: '0 10px 15px rgba(218, 165, 32, 0.2)',
    },
    galleryType: 'grid',
    animationType: 'fade'
  }
};

// Template: Garden Romance
export const GARDEN_ROMANCE: TemplateProfile = {
  id: 'garden-romance',
  name: 'Garden Romance',
  description: 'Inspirado em jardins românticos com flores delicadas, verde suave e tipografia manuscrita.',
  categories: ['florais', 'classico'],
  
  palette: {
    primary: '#8FBC8F',
    secondary: '#DDA0DD',
    accent: '#F0F8FF',
    neutral: '#F5FFFA'
  },
  
  typography: {
    heading: 'Sacramento',
    body: 'Merriweather',
    accent: 'Great Vibes'
  },
  
  galleryType: 'slideshow',
  animationType: 'fade',
  
  sections: [
    {
      id: 'hero',
      name: 'Hero Jardim',
      description: 'Fundo com pétalas flutuantes e tipografia romântica',
      layout: 'fullwidth',
      animations: ['fade']
    },
    {
      id: 'love-poem',
      name: 'Poema de Amor',
      description: 'Versos românticos com bordas florais',
      layout: 'container',
      animations: ['slide']
    },
    {
      id: 'garden-party',
      name: 'Festa no Jardim',
      description: 'Detalhes do evento com ilustrações botânicas',
      layout: 'split',
      animations: ['fade']
    },
    {
      id: 'flower-gallery',
      name: 'Galeria Floral',
      description: 'Slideshow com transições suaves e bordas florais',
      layout: 'fullwidth',
      animations: ['slide']
    },
    {
      id: 'garden-map',
      name: 'Localização',
      description: 'Mapa ilustrado com elementos de jardim',
      layout: 'container',
      animations: ['fade']
    }
  ],
  
  tokens: {
    primary: '#8FBC8F',
    secondary: '#DDA0DD',
    accent: '#F0F8FF',
    background: 'linear-gradient(135deg, #F5FFFA 0%, #F0F8FF 100%)',
    surface: '#FFFFFF',
    text: '#2F4F4F',
    textSecondary: '#696969',
    border: '#DDA0DD',
    fontFamily: 'Merriweather, serif',
    headingFont: 'Sacramento, cursive',
    accentFont: 'Great Vibes, cursive',
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
      sm: '0.5rem',
      md: '0.75rem',
      lg: '1rem',
      xl: '1.25rem',
    },
    shadows: {
      sm: '0 1px 3px rgba(143, 188, 143, 0.1)',
      md: '0 4px 6px rgba(143, 188, 143, 0.15)',
      lg: '0 10pk 15px rgba(143, 188, 143, 0.2)',
    },
    galleryType: 'slideshow',
    animationType: 'fade'
  }
};

// Template: Urban Modern
export const URBAN_MODERN: TemplateProfile = {
  id: 'urban-modern',
  name: 'Urban Modern',
  description: 'Estilo urbano contemporâneo com linhas retas, cores neutras e tipografia geométrica.',
  categories: ['moderno'],
  
  palette: {
    primary: '#2C3E50',
    secondary: '#E74C3C',
    accent: '#FFFFFF',
    neutral: '#ECF0F1'
  },
  
  typography: {
    heading: 'Oswald',
    body: 'Lato',
    accent: 'Exo 2'
  },
  
  galleryType: 'carousel',
  animationType: 'slide',
  
  sections: [
    {
      id: 'hero',
      name: 'Hero Urbano',
      description: 'Fundo geométrico com tipografia bold e linhas limpas',
      layout: 'fullwidth',
      animations: ['slide']
    },
    {
      id: 'about',
      name: 'Sobre o Casal',
      description: 'Layout minimalista com fotos em grid',
      layout: 'split',
      animations: ['fade']
    },
    {
      id: 'venue',
      name: 'Local Urbano',
      description: 'Detalhes do venue com mapa interativo',
      layout: 'container',
      animations: ['slide']
    },
    {
      id: 'timeline',
      name: 'Timeline do Evento',
      description: 'Cronograma vertical com ícones modernos',
      layout: 'container',
      animations: ['fade']
    },
    {
      id: 'city-gallery',
      name: 'Galeria da Cidade',
      description: 'Carrossel horizontal com fotos urbanas',
      layout: 'fullwidth',
      animations: ['slide']
    }
  ],
  
  tokens: {
    primary: '#2C3E50',
    secondary: '#E74C3C',
    accent: '#FFFFFF',
    background: '#FFFFFF',
    surface: '#F8F9FA',
    text: '#2C3E50',
    textSecondary: '#7F8C8D',
    border: '#BDC3C7',
    fontFamily: 'Lato, sans-serif',
    headingFont: 'Oswald, sans-serif',
    accentFont: 'Exo 2, sans-serif',
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
      sm: '0rem',
      md: '0.125rem',
      lg: '0.25rem',
      xl: '0.375rem',
    },
    shadows: {
      sm: '0 1px 3px rgba(44, 62, 80, 0.1)',
      md: '0 4px 6px rgba(44, 62, 80, 0.15)',
      lg: '0 10px 15px rgba(44, 62, 80, 0.2)',
    },
    galleryType: 'carousel',
    animationType: 'slide'
  }
};

// Template: Cinematic Drama
export const CINEMATIC_DRAMA: TemplateProfile = {
  id: 'cinematic-drama',
  name: 'Cinematic Drama',
  description: 'Inspirado em filmes românticos com cores dramáticas, tipografia bold e layouts fullscreen.',
  categories: ['cinematografico'],
  
  palette: {
    primary: '#1C1C1C',
    secondary: '#B8860B',
    accent: '#FFD700',
    neutral: '#2F2F2F'
  },
  
  typography: {
    heading: 'Abril Fatface',
    body: 'Source Sans Pro',
    accent: 'Lobster'
  },
  
  galleryType: 'slideshow',
  animationType: 'parallax',
  
  sections: [
    {
      id: 'hero',
      name: 'Hero Cinematográfico',
      description: 'Fundo fullscreen com overlay dramático e tipografia bold',
      layout: 'fullwidth',
      animations: ['parallax']
    },
    {
      id: 'movie-poster',
      name: 'Poster do Filme',
      description: 'Seção estilo poster de filme com foto do casal',
      layout: 'fullwidth',
      animations: ['zoom']
    },
    {
      id: 'love-story',
      name: 'Nossa História',
      description: 'Timeline cinematográfica com cenas marcantes',
      layout: 'container',
      animations: ['slide']
    },
    {
      id: 'premiere',
      name: 'A Estreia',
      description: 'Detalhes do casamento estilo premiere de filme',
      layout: 'split',
      animations: ['fade']
    },
    {
      id: 'film-gallery',
      name: 'Rolo de Filme',
      description: 'Slideshow com efeitos cinematográficos',
      layout: 'fullwidth',
      animations: ['slide']
    }
  ],
  
  tokens: {
    primary: '#1C1C1C',
    secondary: '#B8860B',
    accent: '#FFD700',
    background: 'linear-gradient(135deg, #1C1C1C 0%, #2F2F2F 100%)',
    surface: '#2A2A2A',
    text: '#FFFFFF',
    textSecondary: '#CCCCCC',
    border: '#B8860B',
    fontFamily: 'Source Sans Pro, sans-serif',
    headingFont: 'Abril Fatface, cursive',
    accentFont: 'Lobster, cursive',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
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
      sm: '0 2px 4px rgba(0, 0, 0, 0.3)',
      md: '0 4px 8px rgba(0, 0, 0, 0.4)',
      lg: '0 8px 16px rgba(0, 0, 0, 0.5)',
    },
    galleryType: 'slideshow',
    animationType: 'parallax'
  }
};

// Biblioteca de Templates (expandindo gradualmente)
export const TEMPLATE_LIBRARY: TemplateProfile[] = [
  VINTAGE_FLORAL,
  MODERN_MINIMALIST,
  BEACH_TROPICAL,
  RUSTIC_COUNTRY,
  BOHO_CHIC,
  CLASSIC_ELEGANCE,
  GARDEN_ROMANCE,
  URBAN_MODERN,
  CINEMATIC_DRAMA
  // TODO: Adicionar mais 41 templates gradualmente
];

// Categorias para filtros com contagem atualizada
export const TEMPLATE_CATEGORIES = {
  rustico: { name: 'Rústico', count: TEMPLATE_LIBRARY.filter(t => t.categories.includes('rustico')).length },
  praia: { name: 'Praia', count: TEMPLATE_LIBRARY.filter(t => t.categories.includes('praia')).length },
  classico: { name: 'Clássico', count: TEMPLATE_LIBRARY.filter(t => t.categories.includes('classico')).length },
  moderno: { name: 'Moderno', count: TEMPLATE_LIBRARY.filter(t => t.categories.includes('moderno')).length },
  boho: { name: 'Boho', count: TEMPLATE_LIBRARY.filter(t => t.categories.includes('boho')).length },
  tropical: { name: 'Tropical', count: TEMPLATE_LIBRARY.filter(t => t.categories.includes('tropical')).length },
  minimalista: { name: 'Minimalista', count: TEMPLATE_LIBRARY.filter(t => t.categories.includes('minimalista')).length },
  florais: { name: 'Florais', count: TEMPLATE_LIBRARY.filter(t => t.categories.includes('florais')).length },
  cinematografico: { name: 'Cinematográfico', count: TEMPLATE_LIBRARY.filter(t => t.categories.includes('cinematografico')).length },
  campestre: { name: 'Campestre', count: TEMPLATE_LIBRARY.filter(t => t.categories.includes('campestre')).length }
};

// Funções utilitárias
export const getTemplateById = (id: string): TemplateProfile | undefined => {
  return TEMPLATE_LIBRARY.find(template => template.id === id);
};

export const getTemplatesByCategory = (category: TemplateCategory): TemplateProfile[] => {
  return TEMPLATE_LIBRARY.filter(template => 
    template.categories.includes(category)
  );
};

export const searchTemplates = (query: string): TemplateProfile[] => {
  const lowercaseQuery = query.toLowerCase();
  return TEMPLATE_LIBRARY.filter(template =>
    template.name.toLowerCase().includes(lowercaseQuery) ||
    template.description.toLowerCase().includes(lowercaseQuery) ||
    template.categories.some(cat => cat.toLowerCase().includes(lowercaseQuery))
  );
};

export const getPopularTemplates = (): TemplateProfile[] => {
  // Por enquanto retorna os primeiros 6 como populares
  return TEMPLATE_LIBRARY.slice(0, 6);
};

export const getRecommendedTemplates = (limit: number = 3): TemplateProfile[] => {
  // Algoritmo simples de recomendação - pode ser expandido
  return TEMPLATE_LIBRARY.slice(0, limit);
};
