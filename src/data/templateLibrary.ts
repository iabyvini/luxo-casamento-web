
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

// Biblioteca de Templates (começando com 1, expandiremos gradualmente)
export const TEMPLATE_LIBRARY: TemplateProfile[] = [
  VINTAGE_FLORAL
];

// Categorias para filtros
export const TEMPLATE_CATEGORIES = {
  rustico: { name: 'Rústico', count: 0 },
  praia: { name: 'Praia', count: 0 },
  classico: { name: 'Clássico', count: 1 },
  moderno: { name: 'Moderno', count: 0 },
  boho: { name: 'Boho', count: 0 },
  tropical: { name: 'Tropical', count: 0 },
  minimalista: { name: 'Minimalista', count: 0 },
  florais: { name: 'Florais', count: 1 },
  cinematografico: { name: 'Cinematográfico', count: 0 },
  campestre: { name: 'Campestre', count: 0 }
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
    template.description.toLowerCase().includes(lowercaseQuery)
  );
};
