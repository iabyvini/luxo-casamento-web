
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
