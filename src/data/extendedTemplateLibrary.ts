
export interface ExtendedTemplateItem {
  id: string;
  name: string;
  description: string;
  category: 'romantic' | 'modern' | 'boho' | 'vintage' | 'tropical' | 'minimal' | 'rustic' | 'glamour' | 'artistic' | 'classic';
  tags: string[];
  colors: string[];
  fonts: {
    heading: string;
    body: string;
    accent?: string;
  };
  previewImage?: string;
  component: string;
  sections: string[];
  mood: string[];
}

export const EXTENDED_TEMPLATE_LIBRARY: ExtendedTemplateItem[] = [
  // Templates 1-10 (já existentes, atualizados)
  {
    id: 'toscana-elegante',
    name: 'Toscana Elegante',
    description: 'Editorial preto e branco sofisticado inspirado nos ciprestes toscanos',
    category: 'classic',
    tags: ['editorial', 'sofisticado', 'preto-branco', 'europeu'],
    colors: ['#000000', '#FFFFFF', '#8B8B8B', '#F5F5F5'],
    fonts: {
      heading: 'Playfair Display',
      body: 'Inter',
      accent: 'Crimson Text'
    },
    component: 'ToscanaEleganteTemplate',
    sections: ['hero', 'historia', 'padrinhos', 'cronograma', 'rsvp', 'galeria', 'footer'],
    mood: ['elegante', 'sofisticado', 'editorial', 'clássico']
  },
  {
    id: 'minimalista-marmore',
    name: 'Minimalista Mármore',
    description: 'Clean com textura marmorizada e tipografia delicada',
    category: 'minimal',
    tags: ['clean', 'mármore', 'minimal', 'sofisticado'],
    colors: ['#FFFFFF', '#F8F8F8', '#D3D3D3', '#A8A8A8'],
    fonts: {
      heading: 'Dancing Script',
      body: 'Inter',
      accent: 'Inter'
    },
    component: 'MinimalistaMarmore',
    sections: ['hero', 'historia', 'rsvp', 'presentes', 'galeria', 'footer'],
    mood: ['clean', 'elegante', 'minimal', 'sofisticado']
  },
  {
    id: 'romantico-floral-escuro',
    name: 'Romântico Floral Escuro',
    description: 'Fundo preto com elementos florais delicados e animações suaves',
    category: 'romantic',
    tags: ['floral', 'escuro', 'romântico', 'animado'],
    colors: ['#000000', '#2D2D2D', '#8B4B8B', '#DDA0DD'],
    fonts: {
      heading: 'Cormorant Garamond',
      body: 'Inter',
      accent: 'Dancing Script'
    },
    component: 'RomanticoFloralEscuro',
    sections: ['hero', 'historia', 'rsvp', 'galeria', 'poesia', 'footer'],
    mood: ['romântico', 'elegante', 'misterioso', 'floral']
  },

  // Templates 11-20
  {
    id: 'vintage-floral',
    name: 'Vintage Floral',
    description: 'Romântico floral com ilustrações em aquarela e tons pastel',
    category: 'vintage',
    tags: ['vintage', 'floral', 'aquarela', 'pastel'],
    colors: ['#F0E6D2', '#C8D5B9', '#FAB7B7', '#E8D5C4'],
    fonts: {
      heading: 'Great Vibes',
      body: 'Lora',
      accent: 'Dancing Script'
    },
    component: 'VintageFloral',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'historia', 'footer'],
    mood: ['vintage', 'romântico', 'delicado', 'floral']
  },
  {
    id: 'tropical-praia-branca',
    name: 'Tropical Praia Branca',
    description: 'Praia ensolarada, leve e arejado com tons de azul e areia',
    category: 'tropical',
    tags: ['praia', 'tropical', 'branco', 'ensolarado'],
    colors: ['#FFFFFF', '#F5F5DC', '#4682B4', '#87CEEB'],
    fonts: {
      heading: 'Caveat',
      body: 'Nunito',
      accent: 'Pacifico'
    },
    component: 'TropicalPraiaBranca',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'localizacao', 'footer'],
    mood: ['tropical', 'descontraído', 'ensolarado', 'praiano']
  },
  {
    id: 'classico-europeu',
    name: 'Clássico Europeu',
    description: 'Inspirado em casamentos italianos clássicos com elegância atemporal',
    category: 'classic',
    tags: ['clássico', 'europeu', 'italiano', 'elegante'],
    colors: ['#F5F5DC', '#DAA520', '#8B4513', '#FFFACD'],
    fonts: {
      heading: 'Playfair Display',
      body: 'Crimson Text',
      accent: 'Great Vibes'
    },
    component: 'ClassicoEuropeu',
    sections: ['hero', 'timeline', 'galeria', 'rsvp', 'historia', 'presentes', 'footer'],
    mood: ['clássico', 'elegante', 'tradicional', 'sofisticado']
  },
  {
    id: 'jardim-boho',
    name: 'Jardim Boho',
    description: 'Natural com folhas secas e tons terrosos, estilo boêmio',
    category: 'boho',
    tags: ['boho', 'natural', 'terroso', 'jardim'],
    colors: ['#D2B48C', '#F5DEB3', '#CD853F', '#DEB887'],
    fonts: {
      heading: 'Satisfy',
      body: 'Open Sans',
      accent: 'Kalam'
    },
    component: 'JardimBoho',
    sections: ['hero', 'galeria', 'cronograma', 'casal', 'rsvp', 'footer'],
    mood: ['natural', 'boêmio', 'descontraído', 'terroso']
  },
  {
    id: 'industrial-minimal',
    name: 'Industrial Minimal',
    description: 'Moderno e urbano com fontes geométricas e tons industriais',
    category: 'modern',
    tags: ['industrial', 'minimal', 'urbano', 'geométrico'],
    colors: ['#2F4F4F', '#FFFFFF', '#B87333', '#708090'],
    fonts: {
      heading: 'Oswald',
      body: 'Roboto',
      accent: 'Exo 2'
    },
    component: 'IndustrialMinimal',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'interativo', 'footer'],
    mood: ['moderno', 'urbano', 'industrial', 'minimal']
  },

  // Templates 21-30
  {
    id: 'arte-contemporanea',
    name: 'Arte Contemporânea',
    description: 'Cores vibrantes e formas geométricas com layout assimétrico',
    category: 'artistic',
    tags: ['contemporâneo', 'vibrante', 'geométrico', 'assimétrico'],
    colors: ['#4169E1', '#FF7F50', '#FFD700', '#FFFFFF'],
    fonts: {
      heading: 'Montserrat',
      body: 'Source Sans Pro',
      accent: 'Raleway'
    },
    component: 'ArteContemporanea',
    sections: ['hero', 'galeria', 'cronograma', 'rsvp', 'colagens', 'footer'],
    mood: ['artístico', 'vibrante', 'moderno', 'criativo']
  },
  {
    id: 'minimal-chic',
    name: 'Minimal Chic',
    description: 'Luxo simples com foco em espaços brancos e tipografia clean',
    category: 'minimal',
    tags: ['minimal', 'chic', 'luxo', 'branco'],
    colors: ['#000000', '#FFFFFF', '#F5F5DC', '#C0C0C0'],
    fonts: {
      heading: 'Inter',
      body: 'Inter',
      accent: 'Poppins'
    },
    component: 'MinimalChic',
    sections: ['hero', 'cronograma', 'rsvp', 'galeria', 'animado', 'footer'],
    mood: ['minimal', 'chic', 'luxuoso', 'elegante']
  },
  {
    id: 'campo-rustico',
    name: 'Campo Rústico',
    description: 'Elementos de madeira e flores silvestres com tons quentes',
    category: 'rustic',
    tags: ['rústico', 'campo', 'madeira', 'flores'],
    colors: ['#8FBC8F', '#8B4513', '#F5DEB3', '#DEB887'],
    fonts: {
      heading: 'Fredoka One',
      body: 'Merriweather',
      accent: 'Cabin'
    },
    component: 'CampoRustico',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'kraft', 'footer'],
    mood: ['rústico', 'acolhedor', 'natural', 'campestre']
  },
  {
    id: 'cinema-noir',
    name: 'Cinema Noir',
    description: 'Preto e branco com acentos vermelhos estilo cinema clássico',
    category: 'vintage',
    tags: ['cinema', 'noir', 'clássico', 'dramático'],
    colors: ['#000000', '#FFFFFF', '#8B0000', '#2F2F2F'],
    fonts: {
      heading: 'Cinzel',
      body: 'Crimson Text',
      accent: 'Abril Fatface'
    },
    component: 'CinemaNoir',
    sections: ['hero', 'cronograma', 'rsvp', 'galeria', 'poster', 'footer'],
    mood: ['dramático', 'clássico', 'cinematográfico', 'elegante']
  },
  {
    id: 'ceu-estrelado',
    name: 'Céu Estrelado',
    description: 'Noturno com estrelas e constelações em tons de azul e dourado',
    category: 'romantic',
    tags: ['noturno', 'estrelas', 'constelação', 'místico'],
    colors: ['#191970', '#FFD700', '#C0C0C0', '#4682B4'],
    fonts: {
      heading: 'Cinzel Decorative',
      body: 'Libre Baskerville',
      accent: 'Dancing Script'
    },
    component: 'CeuEstrelado',
    sections: ['hero', 'rsvp', 'cronograma', 'galeria', 'constelacao', 'footer'],
    mood: ['romântico', 'místico', 'noturno', 'mágico']
  },

  // Templates 31-40
  {
    id: 'boho-tropical',
    name: 'Boho Tropical',
    description: 'Estilo livre com palmeiras e elementos florais tropicais',
    category: 'boho',
    tags: ['boho', 'tropical', 'palmeiras', 'livre'],
    colors: ['#228B22', '#DDA0DD', '#F5DEB3', '#98FB98'],
    fonts: {
      heading: 'Lobster',
      body: 'Nunito',
      accent: 'Pacifico'
    },
    component: 'BohoTropical',
    sections: ['hero', 'galeria', 'rsvp', 'cronograma', 'botanica', 'footer'],
    mood: ['boêmio', 'tropical', 'descontraído', 'natural']
  },
  {
    id: 'monocromatico-luxo',
    name: 'Monocromático Luxo',
    description: 'Ultra minimalista com tons de cinza e foco tipográfico',
    category: 'minimal',
    tags: ['monocromático', 'luxo', 'tipografia', 'minimal'],
    colors: ['#808080', '#000000', '#C0C0C0', '#F5F5F5'],
    fonts: {
      heading: 'Abril Fatface',
      body: 'Inter',
      accent: 'Montserrat'
    },
    component: 'MonocromaticoLuxo',
    sections: ['hero', 'galeria', 'rsvp', 'cronograma', 'microinteracoes', 'footer'],
    mood: ['luxuoso', 'minimal', 'sofisticado', 'moderno']
  },
  {
    id: 'primavera-delicada',
    name: 'Primavera Delicada',
    description: 'Cores suaves da primavera com elementos florais delicados',
    category: 'romantic',
    tags: ['primavera', 'delicado', 'floral', 'suave'],
    colors: ['#FFB6C1', '#98FB98', '#F0E68C', '#E6E6FA'],
    fonts: {
      heading: 'Sacramento',
      body: 'Lato',
      accent: 'Great Vibes'
    },
    component: 'PrimaveraDelicada',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'flores', 'footer'],
    mood: ['delicado', 'primaveril', 'romântico', 'suave']
  },
  {
    id: 'urbano-moderno',
    name: 'Urbano Moderno',
    description: 'Estilo metropolitano com cores neutras e linhas limpas',
    category: 'modern',
    tags: ['urbano', 'moderno', 'metropolitano', 'neutro'],
    colors: ['#2F4F4F', '#FFFFFF', '#808080', '#D3D3D3'],
    fonts: {
      heading: 'Roboto Condensed',
      body: 'Open Sans',
      accent: 'Lato'
    },
    component: 'UrbanoModerno',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'cidade', 'footer'],
    mood: ['urbano', 'moderno', 'sofisticado', 'cosmopolita']
  },
  {
    id: 'outono-dourado',
    name: 'Outono Dourado',
    description: 'Tons quentes do outono com elementos naturais dourados',
    category: 'rustic',
    tags: ['outono', 'dourado', 'quente', 'natural'],
    colors: ['#DAA520', '#8B4513', '#CD853F', '#F4A460'],
    fonts: {
      heading: 'Playfair Display',
      body: 'Merriweather',
      accent: 'Dancing Script'
    },
    component: 'OutonoDourado',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'folhas', 'footer'],
    mood: ['acolhedor', 'dourado', 'natural', 'sazonal']
  },

  // Templates 41-50
  {
    id: 'lago-sereno',
    name: 'Lago Sereno',
    description: 'Inspirado em lagos tranquilos com tons de azul e verde',
    category: 'romantic',
    tags: ['lago', 'sereno', 'azul', 'tranquilo'],
    colors: ['#4682B4', '#87CEEB', '#98FB98', '#F0F8FF'],
    fonts: {
      heading: 'Cormorant Garamond',
      body: 'Source Sans Pro',
      accent: 'Dancing Script'
    },
    component: 'LagoSereno',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'agua', 'footer'],
    mood: ['sereno', 'tranquilo', 'natural', 'relaxante']
  },
  {
    id: 'festa-latina',
    name: 'Festa Latina',
    description: 'Cores vibrantes e energia latina com elementos festivos',
    category: 'tropical',
    tags: ['latino', 'festa', 'vibrante', 'energia'],
    colors: ['#FF6347', '#FFD700', '#32CD32', '#FF1493'],
    fonts: {
      heading: 'Salsa',
      body: 'Nunito',
      accent: 'Dancing Script'
    },
    component: 'FestaLatina',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'fiesta', 'footer'],
    mood: ['festivo', 'vibrante', 'energético', 'alegre']
  },
  {
    id: 'montanha-majestosa',
    name: 'Montanha Majestosa',
    description: 'Inspirado em paisagens montanhosas com tons terrosos',
    category: 'rustic',
    tags: ['montanha', 'majestoso', 'terroso', 'paisagem'],
    colors: ['#8B4513', '#2F4F4F', '#F5DEB3', '#CD853F'],
    fonts: {
      heading: 'Fjalla One',
      body: 'Open Sans',
      accent: 'Cabin'
    },
    component: 'MontanhaMajestosa',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'picos', 'footer'],
    mood: ['majestoso', 'natural', 'grandioso', 'aventureiro']
  },
  {
    id: 'jardim-secreto',
    name: 'Jardim Secreto',
    description: 'Místico e encantado com elementos de jardim secreto',
    category: 'romantic',
    tags: ['jardim', 'secreto', 'místico', 'encantado'],
    colors: ['#228B22', '#8FBC8F', '#DDA0DD', '#F0E68C'],
    fonts: {
      heading: 'Cinzel Decorative',
      body: 'Libre Baskerville',
      accent: 'Great Vibes'
    },
    component: 'JardimSecreto',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'mistico', 'footer'],
    mood: ['místico', 'encantado', 'secreto', 'mágico']
  },
  {
    id: 'pordosol-infinito',
    name: 'Pôr do Sol Infinito',
    description: 'Cores do pôr do sol com gradientes suaves e românticos',
    category: 'romantic',
    tags: ['pôr-do-sol', 'infinito', 'gradiente', 'romântico'],
    colors: ['#FF6347', '#FFD700', '#FF69B4', '#FFA500'],
    fonts: {
      heading: 'Pacifico',
      body: 'Lato',
      accent: 'Dancing Script'
    },
    component: 'PordosolInfinito',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'horizonte', 'footer'],
    mood: ['romântico', 'caloroso', 'infinito', 'dourado']
  }
];

export const getTemplatesByCategory = (category: string): ExtendedTemplateItem[] => {
  return EXTENDED_TEMPLATE_LIBRARY.filter(template => template.category === category);
};

export const getTemplatesByTags = (tags: string[]): ExtendedTemplateItem[] => {
  return EXTENDED_TEMPLATE_LIBRARY.filter(template => 
    template.tags.some(tag => tags.includes(tag))
  );
};

export const searchTemplates = (query: string): ExtendedTemplateItem[] => {
  const searchTerm = query.toLowerCase();
  return EXTENDED_TEMPLATE_LIBRARY.filter(template => 
    template.name.toLowerCase().includes(searchTerm) ||
    template.description.toLowerCase().includes(searchTerm) ||
    template.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};
