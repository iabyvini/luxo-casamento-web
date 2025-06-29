
import { QuizAnswers } from '@/types/quiz';
import { TemplateProfile, TEMPLATE_LIBRARY, TemplateCategory } from '@/data/templateLibrary';

interface TemplateMatch {
  template: TemplateProfile;
  score: number;
  reasons: string[];
}

export const findBestTemplateMatch = (answers: QuizAnswers): TemplateMatch => {
  const matches = getTemplateRecommendations(answers);
  return matches.length > 0 ? matches[0] : {
    template: TEMPLATE_LIBRARY[0], // Fallback para o primeiro template
    score: 50,
    reasons: ['Template padrão selecionado']
  };
};

export const getTemplateRecommendations = (answers: QuizAnswers): TemplateMatch[] => {
  const matches: TemplateMatch[] = [];

  TEMPLATE_LIBRARY.forEach(template => {
    const score = calculateTemplateScore(template, answers);
    const reasons = generateMatchReasons(template, answers);
    
    matches.push({
      template,
      score,
      reasons
    });
  });

  // Ordenar por score (maior primeiro)
  return matches.sort((a, b) => b.score - a.score);
};

const calculateTemplateScore = (template: TemplateProfile, answers: QuizAnswers): number => {
  let score = 0;
  
  // Analisar estilo
  const styleMapping: Record<string, TemplateCategory[]> = {
    'Romântico': ['florais', 'classico'],
    'Minimalista': ['minimalista', 'moderno'],
    'Boho': ['boho', 'campestre'],
    'Clássico': ['classico', 'florais'],
    'Vintage': ['florais', 'classico'],
    'Moderno': ['moderno', 'minimalista']
  };

  const matchingCategories = styleMapping[answers.estilo] || [];
  const categoryMatches = template.categories.filter(cat => 
    matchingCategories.includes(cat)
  ).length;
  
  score += categoryMatches * 25;

  // Analisar local
  const locationMapping: Record<string, TemplateCategory[]> = {
    'Praia': ['praia', 'tropical'],
    'Fazenda': ['rustico', 'boho', 'campestre'],
    'Igreja': ['classico', 'florais'],
    'Salão de Festas': ['moderno', 'minimalista'],
    'Jardim': ['florais', 'boho'],
    'Ao ar livre': ['campestre', 'rustico']
  };

  const locationCategories = locationMapping[answers.local] || [];
  const locationMatches = template.categories.filter(cat => 
    locationCategories.includes(cat)
  ).length;
  
  score += locationMatches * 20;

  // Analisar tom
  const toneMapping: Record<string, TemplateCategory[]> = {
    'Elegante e formal': ['classico', 'minimalista'],
    'Divertido e descontraído': ['boho', 'tropical'],
    'Emotivo e romântico': ['florais', 'classico']
  };

  const toneCategories = toneMapping[answers.tom] || [];
  const toneMatches = template.categories.filter(cat => 
    toneCategories.includes(cat)
  ).length;
  
  score += toneMatches * 15;

  // Score base
  score += 10;

  return Math.min(score, 100);
};

const generateMatchReasons = (template: TemplateProfile, answers: QuizAnswers): string[] => {
  const reasons: string[] = [];
  
  if (template.categories.includes('florais') && answers.estilo === 'Romântico') {
    reasons.push('Combina com seu estilo romântico');
  }
  
  if (template.categories.includes('classico') && answers.local === 'Igreja') {
    reasons.push('Perfeito para cerimônias em igreja');
  }
  
  if (template.categories.includes('praia') && answers.local === 'Praia') {
    reasons.push('Ideal para casamentos na praia');
  }
  
  if (template.galleryType === 'grid' && answers.tema !== 'Minimalista') {
    reasons.push('Galeria organizada para suas fotos');
  }
  
  if (template.animationType === 'fade' && answers.tom === 'Elegante e formal') {
    reasons.push('Animações suaves e elegantes');
  }

  if (reasons.length === 0) {
    reasons.push('Template versátil que se adapta ao seu casamento');
  }
  
  return reasons;
};

export const getPopularTemplates = (): TemplateProfile[] => {
  // Por enquanto retorna todos os templates disponíveis
  return TEMPLATE_LIBRARY;
};

export const getTemplatesByCategory = (category: TemplateCategory): TemplateProfile[] => {
  return TEMPLATE_LIBRARY.filter(template => 
    template.categories.includes(category)
  );
};
