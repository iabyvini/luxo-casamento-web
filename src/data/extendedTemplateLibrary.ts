
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
  {
    id: 'vintage-floral',
    name: 'Vintage Floral',
    description: 'Romântico floral com ilustrações em aquarela e tons pastel',
    category: 'vintage',
    tags: ['vintage', 'floral', 'aquarela', 'pastel'],
    colors: ['#6A4E42', '#EFE5DC', '#D9A5B3', '#F7F2F0'],
    fonts: {
      heading: 'EB Garamond',
      body: 'EB Garamond',
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
    colors: ['#F5DEB3', '#DAA520', '#8B4513', '#FFFACD'],
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

  // Templates 11-30 (continuação dos existentes)
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
  {
    id: 'boho-tropical',
    name: 'Boho Tropical',
    description: 'Estilo livre com palmeiras e elementos florais tropicais',
    category: 'boho',
    tags: ['boho', 'tropical', 'palmeiras', 'livre'],
    colors: ['#228B22', '#DDA0DD', '#A5D6A7', '#FFF3E0'],
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
    colors: ['#2F4F4F', '#FFFFFF', '#9E9E9E', '#E0E0E0'],
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
  {
    id: 'lago-sereno',
    name: 'Lago Sereno',
    description: 'Inspirado em lagos tranquilos com tons de azul e verde',
    category: 'romantic',
    tags: ['lago', 'sereno', 'azul', 'tranquilo'],
    colors: ['#4A90E2', '#AEDFF7', '#9CC0E7', '#EAF6FF'],
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

  // Templates 31-50 (novos templates adicionados)
  {
    id: 'vintage-gold',
    name: 'Vintage Gold',
    description: 'Elegância vintage com tons dourados e detalhes clássicos',
    category: 'vintage',
    tags: ['vintage', 'dourado', 'elegante', 'clássico'],
    colors: ['#E6D3B3', '#A68C63', '#D4AF37', '#F5EDE1'],
    fonts: {
      heading: 'Great Vibes',
      body: 'Great Vibes',
      accent: 'Great Vibes'
    },
    component: 'VintageGold',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'historia', 'footer'],
    mood: ['vintage', 'elegante', 'clássico', 'sofisticado']
  },
  {
    id: 'urbano-chic',
    name: 'Urbano Chic',
    description: 'Estilo urbano sofisticado com elementos metropolitanos',
    category: 'modern',
    tags: ['urbano', 'chic', 'metropolitano', 'sofisticado'],
    colors: ['#3A3A3A', '#FFFFFF', '#9E9E9E', '#E0E0E0'],
    fonts: {
      heading: 'Roboto Condensed',
      body: 'Roboto Condensed',
      accent: 'Lato'
    },
    component: 'UrbanoChic',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'cidade', 'footer'],
    mood: ['urbano', 'chic', 'sofisticado', 'cosmopolita']
  },
  {
    id: 'tropical-romantico',
    name: 'Tropical Romântico',
    description: 'Romance tropical com cores vibrantes e elementos naturais',
    category: 'tropical',
    tags: ['tropical', 'romântico', 'vibrante', 'natural'],
    colors: ['#155E63', '#F9FBF2', '#F28500', '#FFFDF7'],
    fonts: {
      heading: 'Poppins',
      body: 'Poppins',
      accent: 'Dancing Script'
    },
    component: 'TropicalRomantico',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'natureza', 'footer'],
    mood: ['tropical', 'romântico', 'vibrante', 'natural']
  },
  {
    id: 'tropicalia-boho',
    name: 'Tropicalia Boho',
    description: 'Fusão de tropical e boho com elementos orgânicos',
    category: 'boho',
    tags: ['tropicalia', 'boho', 'orgânico', 'livre'],
    colors: ['#388E3C', '#E1BEE7', '#A5D6A7', '#FFF3E0'],
    fonts: {
      heading: 'Lobster',
      body: 'Lobster',
      accent: 'Pacifico'
    },
    component: 'TropicaliaBoho',
    sections: ['hero', 'galeria', 'rsvp', 'cronograma', 'botanica', 'footer'],
    mood: ['boêmio', 'tropical', 'orgânico', 'livre']
  },
  {
    id: 'rustic-autumn',
    name: 'Rustic Autumn',
    description: 'Outono rústico com tons terrosos e elementos naturais',
    category: 'rustic',
    tags: ['rústico', 'outono', 'terroso', 'natural'],
    colors: ['#B87333', '#8B4513', '#D2B48C', '#F4A460'],
    fonts: {
      heading: 'Merriweather',
      body: 'Merriweather',
      accent: 'Dancing Script'
    },
    component: 'RusticAutumn',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'folhas', 'footer'],
    mood: ['rústico', 'acolhedor', 'natural', 'sazonal']
  },
  {
    id: 'starry-night',
    name: 'Starry Night',
    description: 'Noite estrelada com elementos místicos e românticos',
    category: 'romantic',
    tags: ['estrelado', 'noite', 'místico', 'romântico'],
    colors: ['#0B1E3A', '#FEDD6A', '#A8C0E6', '#2E4A7E'],
    fonts: {
      heading: 'Cinzel Decorative',
      body: 'Cinzel Decorative',
      accent: 'Dancing Script'
    },
    component: 'StarryNight',
    sections: ['hero', 'rsvp', 'cronograma', 'galeria', 'constelacao', 'footer'],
    mood: ['romântico', 'místico', 'noturno', 'mágico']
  },
  {
    id: 'toscana-elegante-2',
    name: 'Toscana Elegante II',
    description: 'Segunda versão do estilo toscano com refinamentos adicionais',
    category: 'classic',
    tags: ['toscano', 'elegante', 'refinado', 'europeu'],
    colors: ['#1A1A1A', '#FAFAFA', '#7A7A7A', '#EFEFEF'],
    fonts: {
      heading: 'Playfair Display',
      body: 'Playfair Display',
      accent: 'Crimson Text'
    },
    component: 'ToscanaElegante2',
    sections: ['hero', 'historia', 'padrinhos', 'cronograma', 'rsvp', 'galeria', 'footer'],
    mood: ['elegante', 'sofisticado', 'refinado', 'clássico']
  },
  {
    id: 'primavera-light',
    name: 'Primavera Light',
    description: 'Primavera suave com cores claras e delicadas',
    category: 'romantic',
    tags: ['primavera', 'light', 'delicado', 'suave'],
    colors: ['#FFD1DC', '#C1EDC1', '#F2E394', '#E6E6FA'],
    fonts: {
      heading: 'Sacramento',
      body: 'Sacramento',
      accent: 'Great Vibes'
    },
    component: 'PrimaveraLight',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'flores', 'footer'],
    mood: ['delicado', 'primaveril', 'suave', 'romântico']
  },
  {
    id: 'pordosol-suave',
    name: 'Pôr do Sol Suave',
    description: 'Pôr do sol suave com gradientes delicados',
    category: 'romantic',
    tags: ['pôr-do-sol', 'suave', 'gradiente', 'romântico'],
    colors: ['#FF7F50', '#FFDAB9', '#FF69B4', '#FFEFD5'],
    fonts: {
      heading: 'Pacifico',
      body: 'Pacifico',
      accent: 'Dancing Script'
    },
    component: 'PordosolSuave',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'horizonte', 'footer'],
    mood: ['romântico', 'suave', 'caloroso', 'dourado']
  },
  {
    id: 'praia-solar',
    name: 'Praia Solar',
    description: 'Praia ensolarada com tons vibrantes e energia tropical',
    category: 'tropical',
    tags: ['praia', 'solar', 'tropical', 'energético'],
    colors: ['#FFF9E6', '#FAF3DD', '#4EA9D9', '#E3F2FD'],
    fonts: {
      heading: 'Caveat',
      body: 'Caveat',
      accent: 'Pacifico'
    },
    component: 'PraiaSolar',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'localizacao', 'footer'],
    mood: ['tropical', 'energético', 'ensolarado', 'praiano']
  },
  {
    id: 'outono-quente',
    name: 'Outono Quente',
    description: 'Outono com tons quentes e acolhedores',
    category: 'rustic',
    tags: ['outono', 'quente', 'acolhedor', 'natural'],
    colors: ['#C67E17', '#7A3E1A', '#A97439', '#F4A460'],
    fonts: {
      heading: 'Playfair Display',
      body: 'Playfair Display',
      accent: 'Dancing Script'
    },
    component: 'OutonoQuente',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'folhas', 'footer'],
    mood: ['acolhedor', 'quente', 'natural', 'sazonal']
  },
  {
    id: 'montanha-natureza',
    name: 'Montanha Natureza',
    description: 'Paisagem montanhosa com elementos naturais majestosos',
    category: 'rustic',
    tags: ['montanha', 'natureza', 'majestoso', 'natural'],
    colors: ['#7A4513', '#3A3F44', '#D9B48F', '#D2A679'],
    fonts: {
      heading: 'Fjalla One',
      body: 'Fjalla One',
      accent: 'Cabin'
    },
    component: 'MontanhaNatureza',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'picos', 'footer'],
    mood: ['majestoso', 'natural', 'grandioso', 'aventureiro']
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
      body: 'Fjalla One',
      accent: 'Cabin'
    },
    component: 'MontanhaMajestosa',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'picos', 'footer'],
    mood: ['majestoso', 'natural', 'grandioso', 'aventureiro']
  },
  {
    id: 'noir-cinema',
    name: 'Noir Cinema',
    description: 'Estilo cinema noir com dramaticidade e elegância',
    category: 'vintage',
    tags: ['noir', 'cinema', 'dramático', 'elegante'],
    colors: ['#141414', '#FBFBFB', '#A20000', '#2A2A2A'],
    fonts: {
      heading: 'Cinzel',
      body: 'Cinzel',
      accent: 'Abril Fatface'
    },
    component: 'NoirCinema',
    sections: ['hero', 'cronograma', 'rsvp', 'galeria', 'poster', 'footer'],
    mood: ['dramático', 'elegante', 'cinematográfico', 'clássico']
  },
  {
    id: 'monet-garden',
    name: 'Monet Garden',
    description: 'Inspirado nos jardins de Monet com cores impressionistas',
    category: 'artistic',
    tags: ['monet', 'jardim', 'impressionista', 'artístico'],
    colors: ['#8FAABB', '#F3EADC', '#EBCFC2', '#FFFFFF'],
    fonts: {
      heading: 'Montserrat',
      body: 'Montserrat',
      accent: 'Great Vibes'
    },
    component: 'MonetGarden',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'jardim', 'footer'],
    mood: ['artístico', 'impressionista', 'natural', 'delicado']
  },
  {
    id: 'minimal-marron',
    name: 'Minimal Marrom',
    description: 'Minimalismo com tons marrons e elegância terrosa',
    category: 'minimal',
    tags: ['minimal', 'marrom', 'terroso', 'elegante'],
    colors: ['#FFFFFF', '#F0EDE8', '#B0A89E', '#E5E0D6'],
    fonts: {
      heading: 'Dancing Script',
      body: 'Dancing Script',
      accent: 'Poppins'
    },
    component: 'MinimalMarron',
    sections: ['hero', 'cronograma', 'rsvp', 'galeria', 'minimal', 'footer'],
    mood: ['minimal', 'elegante', 'terroso', 'sofisticado']
  },
  {
    id: 'luxe-minimal',
    name: 'Luxe Minimal',
    description: 'Luxo minimalista com foco em elegância e simplicidade',
    category: 'minimal',
    tags: ['luxe', 'minimal', 'elegante', 'sofisticado'],
    colors: ['#000000', '#FFFFFF', '#C0C0C0', '#F7F7F7'],
    fonts: {
      heading: 'Inter',
      body: 'Inter',
      accent: 'Poppins'
    },
    component: 'LuxeMinimal',
    sections: ['hero', 'cronograma', 'rsvp', 'galeria', 'luxo', 'footer'],
    mood: ['luxuoso', 'minimal', 'elegante', 'sofisticado']
  },
  {
    id: 'lago-calmante',
    name: 'Lago Calmante',
    description: 'Lago tranquilo com atmosfera serena e relaxante',
    category: 'romantic',
    tags: ['lago', 'calmante', 'sereno', 'tranquilo'],
    colors: ['#4A90E2', '#AEDFF7', '#9CC0E7', '#EAF6FF'],
    fonts: {
      heading: 'Cormorant Garamond',
      body: 'Cormorant Garamond',
      accent: 'Dancing Script'
    },
    component: 'LagoCalmante',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'agua', 'footer'],
    mood: ['sereno', 'tranquilo', 'natural', 'relaxante']
  },
  {
    id: 'jardim-encantado',
    name: 'Jardim Encantado',
    description: 'Jardim mágico com elementos encantados e místicos',
    category: 'romantic',
    tags: ['jardim', 'encantado', 'mágico', 'místico'],
    colors: ['#2E8B57', '#A2CD5A', '#DDA0DD', '#F0E68C'],
    fonts: {
      heading: 'Cinzel Decorative',
      body: 'Cinzel Decorative',
      accent: 'Great Vibes'
    },
    component: 'JardimEncantado',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'mistico', 'footer'],
    mood: ['místico', 'encantado', 'mágico', 'romântico']
  },
  {
    id: 'industrial-urbano',
    name: 'Industrial Urbano',
    description: 'Estilo industrial urbano com elementos metálicos',
    category: 'modern',
    tags: ['industrial', 'urbano', 'metálico', 'moderno'],
    colors: ['#3A3A3A', '#EDEDED', '#A05A2C', '#C0C0C0'],
    fonts: {
      heading: 'Oswald',
      body: 'Oswald',
      accent: 'Exo 2'
    },
    component: 'IndustrialUrbano',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'industrial', 'footer'],
    mood: ['industrial', 'urbano', 'moderno', 'metálico']
  },
  {
    id: 'floral-romantico-claro',
    name: 'Floral Romântico Claro',
    description: 'Romance floral com tons claros e delicados',
    category: 'romantic',
    tags: ['floral', 'romântico', 'claro', 'delicado'],
    colors: ['#FFF8F0', '#FFEFE6', '#DCA2A2', '#FFF8F0'],
    fonts: {
      heading: 'Cormorant Garamond',
      body: 'Cormorant Garamond',
      accent: 'Dancing Script'
    },
    component: 'FloralRomanticoClaro',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'flores', 'footer'],
    mood: ['romântico', 'delicado', 'floral', 'suave']
  },
  {
    id: 'europeu-sofisticado',
    name: 'Europeu Sofisticado',
    description: 'Elegância europeia com refinamento e sofisticação',
    category: 'classic',
    tags: ['europeu', 'sofisticado', 'elegante', 'refinado'],
    colors: ['#F7EBDD', '#CCAA7A', '#8B5E3C', '#FFF5E6'],
    fonts: {
      heading: 'Playfair Display',
      body: 'Playfair Display',
      accent: 'Great Vibes'
    },
    component: 'EuropeuSofisticado',
    sections: ['hero', 'timeline', 'galeria', 'rsvp', 'historia', 'presentes', 'footer'],
    mood: ['sofisticado', 'elegante', 'refinado', 'europeu']
  },
  {
    id: 'festa-alegre',
    name: 'Festa Alegre',
    description: 'Celebração alegre com cores vibrantes e energia festiva',
    category: 'tropical',
    tags: ['festa', 'alegre', 'vibrante', 'energético'],
    colors: ['#FF4500', '#FFD700', '#32CD32', '#FF69B4'],
    fonts: {
      heading: 'Salsa',
      body: 'Salsa',
      accent: 'Dancing Script'
    },
    component: 'FestaAlegre',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'fiesta', 'footer'],
    mood: ['festivo', 'alegre', 'energético', 'vibrante']
  },
  {
    id: 'cinzento-luxo',
    name: 'Cinzento Luxo',
    description: 'Luxo em tons de cinza com elegância monocromática',
    category: 'minimal',
    tags: ['cinzento', 'luxo', 'monocromático', 'elegante'],
    colors: ['#707070', '#000000', '#A0A0A0', '#F0F0F0'],
    fonts: {
      heading: 'Abril Fatface',
      body: 'Abril Fatface',
      accent: 'Montserrat'
    },
    component: 'CinzentoLuxo',
    sections: ['hero', 'galeria', 'rsvp', 'cronograma', 'luxo', 'footer'],
    mood: ['luxuoso', 'elegante', 'monocromático', 'sofisticado']
  },
  {
    id: 'ceu-noturno',
    name: 'Céu Noturno',
    description: 'Céu noturno com estrelas e atmosfera mística',
    category: 'romantic',
    tags: ['céu', 'noturno', 'estrelas', 'místico'],
    colors: ['#101030', '#FFD600', '#C0C0C0', '#294A74'],
    fonts: {
      heading: 'Cinzel Decorative',
      body: 'Cinzel Decorative',
      accent: 'Dancing Script'
    },
    component: 'CeuNoturno',
    sections: ['hero', 'rsvp', 'cronograma', 'galeria', 'constelacao', 'footer'],
    mood: ['místico', 'noturno', 'romântico', 'mágico']
  },
  {
    id: 'chic-urbano',
    name: 'Chic Urbano',
    description: 'Urbanidade chic com estilo metropolitano sofisticado',
    category: 'modern',
    tags: ['chic', 'urbano', 'metropolitano', 'sofisticado'],
    colors: ['#2A2A2A', '#FFFFFF', '#B0B0B0', '#F0F0F0'],
    fonts: {
      heading: 'Inter',
      body: 'Inter',
      accent: 'Lato'
    },
    component: 'ChicUrbano',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'cidade', 'footer'],
    mood: ['chic', 'urbano', 'sofisticado', 'metropolitano']
  },
  {
    id: 'campo-vintage',
    name: 'Campo Vintage',
    description: 'Campo com estilo vintage e elementos rústicos',
    category: 'vintage',
    tags: ['campo', 'vintage', 'rústico', 'natural'],
    colors: ['#A0A070', '#8B572A', '#E6D6B3', '#EEE4D5'],
    fonts: {
      heading: 'Fredoka One',
      body: 'Fredoka One',
      accent: 'Cabin'
    },
    component: 'CampoVintage',
    sections: ['hero', 'cronograma', 'galeria', 'rsvp', 'kraft', 'footer'],
    mood: ['vintage', 'rústico', 'natural', 'acolhedor']
  },
  {
    id: 'boho-garden',
    name: 'Boho Garden',
    description: 'Jardim boêmio com elementos naturais e orgânicos',
    category: 'boho',
    tags: ['boho', 'jardim', 'natural', 'orgânico'],
    colors: ['#C8A97E', '#F1E6D1', '#B17B4E', '#EEE2D0'],
    fonts: {
      heading: 'Satisfy',
      body: 'Satisfy',
      accent: 'Kalam'
    },
    component: 'BohoGarden',
    sections: ['hero', 'galeria', 'cronograma', 'casal', 'rsvp', 'footer'],
    mood: ['boêmio', 'natural', 'orgânico', 'descontraído']
  },
  {
    id: 'arte-pop',
    name: 'Arte Pop',
    description: 'Estilo pop art com cores vibrantes e elementos artísticos',
    category: 'artistic',
    tags: ['arte', 'pop', 'vibrante', 'artístico'],
    colors: ['#FF1493', '#1E90FF', '#FFD700', '#FFFFFF'],
    fonts: {
      heading: 'Montserrat',
      body: 'Montserrat',
      accent: 'Raleway'
    },
    component: 'ArtePop',
    sections: ['hero', 'galeria', 'cronograma', 'rsvp', 'arte', 'footer'],
    mood: ['artístico', 'vibrante', 'pop', 'criativo']
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
      body: 'Pacifico',
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
