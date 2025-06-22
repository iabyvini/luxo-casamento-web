
export interface TemplateStyle {
  name: string;
  colors: string[];
  fonts: {
    primary: string;
    secondary: string;
  };
  spacing: 'tight' | 'normal' | 'loose';
  decorations: string[];
  shadows: boolean;
}

export const getDynamicTemplate = (estilo: string, local: string, cores: string): TemplateStyle => {
  const baseStyles: Record<string, Partial<TemplateStyle>> = {
    'Minimalista': {
      fonts: { primary: 'Inter', secondary: 'Inter' },
      spacing: 'loose',
      decorations: ['minimal-lines', 'geometric'],
      shadows: false
    },
    'Romântico': {
      fonts: { primary: 'Playfair Display', secondary: 'Inter' },
      spacing: 'normal',
      decorations: ['hearts', 'flowers', 'rings'],
      shadows: true
    },
    'Boho': {
      fonts: { primary: 'Dancing Script', secondary: 'Inter' },
      spacing: 'normal',
      decorations: ['feathers', 'dreamcatcher', 'leaves'],
      shadows: true
    },
    'Vintage': {
      fonts: { primary: 'Crimson Text', secondary: 'Inter' },
      spacing: 'normal',
      decorations: ['ornaments', 'frames', 'lace'],
      shadows: true
    },
    'Clássico': {
      fonts: { primary: 'Cormorant Garamond', secondary: 'Inter' },
      spacing: 'normal',
      decorations: ['classic-borders', 'columns'],
      shadows: true
    },
    'Moderno': {
      fonts: { primary: 'Poppins', secondary: 'Inter' },
      spacing: 'tight',
      decorations: ['geometric', 'abstract'],
      shadows: false
    }
  };

  const locationColors: Record<string, string[]> = {
    'Praia': ['#4A90E2', '#87CEEB', '#F0F8FF', '#FFE4B5'],
    'Fazenda': ['#8FBC8F', '#DEB887', '#F5F5DC', '#228B22'],
    'Igreja': ['#8B4513', '#DAA520', '#F5DEB3', '#4B0082'],
    'Salão de Festas': ['#DC143C', '#FFD700', '#FFFAF0', '#8B0000'],
    'Outro': ['#708090', '#C0C0C0', '#F8F8FF', '#2F4F4F']
  };

  const colorPalettes: Record<string, string[]> = {
    'Rosa claro': ['#FFB6C1', '#FFC0CB', '#FFCCCB', '#FFF0F5'],
    'Azul': ['#4169E1', '#6495ED', '#B0C4DE', '#F0F8FF'],
    'Verde': ['#32CD32', '#90EE90', '#98FB98', '#F0FFF0'],
    'Dourado': ['#FFD700', '#FFA500', '#FFFF99', '#FFFACD'],
    'Neutros': ['#8B4513', '#A0522D', '#D2B48C', '#FFF8DC'],
    'Não sei': ['#9370DB', '#DDA0DD', '#E6E6FA', '#F8F8FF']
  };

  const baseStyle = baseStyles[estilo] || baseStyles['Clássico'];
  const primaryColors = colorPalettes[cores] || colorPalettes['Dourado'];
  const locationTones = locationColors[local] || locationColors['Outro'];

  // Combina cores escolhidas com tons do local
  const combinedColors = [
    primaryColors[0], // Cor principal
    locationTones[0],  // Tom do local
    primaryColors[1], // Cor secundária
    locationTones[2] || '#FFFFFF' // Cor de fundo
  ];

  return {
    name: `${estilo} ${local} ${cores}`,
    colors: combinedColors,
    fonts: baseStyle.fonts || { primary: 'Inter', secondary: 'Inter' },
    spacing: baseStyle.spacing || 'normal',
    decorations: baseStyle.decorations || ['hearts'],
    shadows: baseStyle.shadows !== false
  };
};

export const templateMapping: Record<string, string> = {
  'Clássico': 'Elegance',
  'Moderno': 'Modern Love',
  'Romântico': 'Garden Romance',
  'Minimalista': 'Minimalist',
  'Vintage': 'Vintage Charm',
  'Boho': 'Bohemian Dream'
};

export const getTemplateFromStyle = (estilo: string): string => {
  return templateMapping[estilo] || 'Elegance';
};

export const getTemplateColors = (template: string): string[] => {
  const colorMap: Record<string, string[]> = {
    'Elegance': ['#a67c52', '#d4af37', '#f5f5f5'],
    'Modern Love': ['#2c3e50', '#e74c3c', '#ffffff'],
    'Garden Romance': ['#8fbc8f', '#dda0dd', '#f0f8ff'],
    'Minimalist': ['#000000', '#ffffff', '#f5f5f5'],
    'Vintage Charm': ['#8b4513', '#daa520', '#f5deb3'],
    'Bohemian Dream': ['#d2691e', '#dda0dd', '#f0e68c']
  };
  
  return colorMap[template] || colorMap['Elegance'];
};
