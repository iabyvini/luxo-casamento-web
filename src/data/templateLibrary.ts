
export interface TemplateLibraryItem {
  id: string;
  name: string;
  description: string;
  style: 'romantic' | 'modern' | 'boho' | 'futuristic';
  mood: string[];
  colors: string[];
  previewImage?: string;
  component: string;
}

export const TEMPLATE_LIBRARY: TemplateLibraryItem[] = [
  {
    id: 'classic-romantic',
    name: 'Clássico Romântico',
    description: 'Elegância atemporal com toques florais e tipografia serifada refinada.',
    style: 'romantic',
    mood: ['elegante', 'romântico', 'tradicional', 'sofisticado'],
    colors: ['dourado', 'rosa claro', 'branco', 'marrom suave'],
    component: 'ClassicRomanticTemplate'
  },
  {
    id: 'editorial-modern',
    name: 'Editorial Moderno',
    description: 'Design editorial minimalista com grandes espaços e tipografia ousada.',
    style: 'modern',
    mood: ['moderno', 'minimalista', 'editorial', 'sofisticado'],
    colors: ['preto', 'branco', 'nude', 'cinza'],
    component: 'EditorialModernTemplate'
  },
  {
    id: 'boho-festival',
    name: 'Boho Festival',
    description: 'Vibes naturais e descontraídas com elementos orgânicos e cores terrosas.',
    style: 'boho',
    mood: ['natural', 'descontraído', 'boêmio', 'caloroso'],
    colors: ['terracota', 'areia', 'azul céu', 'laranja'],
    component: 'BohoFestivalTemplate'
  },
  {
    id: 'neon-pop-chic',
    name: 'Neon Pop Chic',
    description: 'Estética cyberpunk com cores neon e elementos futuristas animados.',
    style: 'futuristic',
    mood: ['futurista', 'vibrante', 'ousado', 'tecnológico'],
    colors: ['rosa neon', 'roxo', 'preto', 'ciano'],
    component: 'NeonPopChicTemplate'
  }
];

export const getTemplateByStyle = (style: string, mood: string[] = []): TemplateLibraryItem[] => {
  return TEMPLATE_LIBRARY.filter(template => {
    const styleMatch = template.style === style.toLowerCase();
    const moodMatch = mood.length === 0 || mood.some(m => template.mood.includes(m.toLowerCase()));
    return styleMatch || moodMatch;
  }).sort((a, b) => {
    // Priorizar templates que têm mais matches de mood
    const aMatches = mood.filter(m => a.mood.includes(m.toLowerCase())).length;
    const bMatches = mood.filter(m => b.mood.includes(m.toLowerCase())).length;
    return bMatches - aMatches;
  });
};

export const getRecommendedTemplates = (
  quizAnswers: { estilo: string; local: string; tom: string; cores: string }
): TemplateLibraryItem[] => {
  const styleMapping: Record<string, string> = {
    'Romântico': 'romantic',
    'Minimalista': 'modern',
    'Boho': 'boho',
    'Moderno': 'modern',
    'Clássico': 'romantic',
    'Vintage': 'romantic'
  };

  const moodMapping: Record<string, string[]> = {
    'Elegante e formal': ['elegante', 'sofisticado', 'tradicional'],
    'Divertido e descontraído': ['descontraído', 'natural', 'vibrante'],
    'Emotivo e romântico': ['romântico', 'caloroso', 'elegante']
  };

  const primaryStyle = styleMapping[quizAnswers.estilo] || 'romantic';
  const moods = moodMapping[quizAnswers.tom] || [];

  // Se for um estilo mais único, incluir template específico
  if (quizAnswers.estilo === 'Moderno' && quizAnswers.tom === 'Divertido e descontraído') {
    return [TEMPLATE_LIBRARY.find(t => t.id === 'neon-pop-chic')!].filter(Boolean);
  }

  const recommendations = getTemplateByStyle(primaryStyle, moods);
  
  // Garantir que sempre temos pelo menos 2 opções
  if (recommendations.length < 2) {
    const additional = TEMPLATE_LIBRARY.filter(t => !recommendations.includes(t)).slice(0, 2);
    recommendations.push(...additional);
  }

  return recommendations.slice(0, 4);
};
