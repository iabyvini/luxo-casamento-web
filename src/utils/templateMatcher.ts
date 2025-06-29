
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
    'Moderno': ['moderno', 'minimalista'],
    'Rústico': ['rustico', 'campestre'],
    'Tropical': ['tropical', 'praia'],
    'Cinematográfico': ['cinematografico']
  };

  const matchingCategories = styleMapping[answers.estilo] || [];
  const categoryMatches = template.categories.filter(cat => 
    matchingCategories.includes(cat)
  ).length;
  
  score += categoryMatches * 25;

  // Analisar local do casamento
  const locationMapping: Record<string, TemplateCategory[]> = {
    'Praia': ['praia', 'tropical'],
    'Fazenda': ['rustico', 'boho', 'campestre'],
    'Igreja': ['classico', 'florais'],
    'Salão de Festas': ['moderno', 'minimalista', 'classico'],
    'Jardim': ['florais', 'boho', 'campestre'],
    'Ao ar livre': ['campestre', 'rustico', 'boho'],
    'Destination': ['tropical', 'praia'],
    'Casa': ['minimalista', 'moderno'],
    'Hotel': ['classico', 'moderno']
  };

  const locationCategories = locationMapping[answers.local] || [];
  const locationMatches = template.categories.filter(cat => 
    locationCategories.includes(cat)
  ).length;
  
  score += locationMatches * 20;

  // Analisar tom do evento
  const toneMapping: Record<string, TemplateCategory[]> = {
    'Elegante e formal': ['classico', 'minimalista', 'cinematografico'],
    'Divertido e descontraído': ['boho', 'tropical', 'praia'],
    'Emotivo e romântico': ['florais', 'classico'],
    'Íntimo e familiar': ['campestre', 'rustico'],
    'Luxuoso': ['classico', 'cinematografico'],
    'Moderno e sofisticado': ['moderno', 'minimalista']
  };

  const toneCategories = toneMapping[answers.tom] || [];
  const toneMatches = template.categories.filter(cat => 
    toneCategories.includes(cat)
  ).length;
  
  score += toneMatches * 15;

  // Analisar cores preferidas (se houver)
  if (answers.cores) {
    const colorPreferences = answers.cores;
    let colorScore = 0;
    
    // Mapear cores para templates
    if (colorPreferences.includes('Rosa') && 
        (template.palette.primary.includes('pink') || 
         template.palette.secondary.includes('pink') ||
         template.name.toLowerCase().includes('rose'))) {
      colorScore += 10;
    }
    
    if (colorPreferences.includes('Azul') && 
        (template.palette.primary.includes('blue') || 
         template.categories.includes('praia') ||
         template.categories.includes('tropical'))) {
      colorScore += 10;
    }
    
    if (colorPreferences.includes('Verde') && 
        (template.palette.primary.includes('green') || 
         template.categories.includes('florais') ||
         template.categories.includes('campestre'))) {
      colorScore += 10;
    }
    
    score += colorScore;
  }

  // Bonus por features específicas
  if (answers.galeria === 'Slideshow' && template.galleryType === 'slideshow') {
    score += 10;
  }
  
  if (answers.animacoes === 'Suaves' && template.animationType === 'fade') {
    score += 5;
  } else if (answers.animacoes === 'Dramáticas' && template.animationType === 'parallax') {
    score += 5;
  }

  // Score base
  score += 10;

  return Math.min(score, 100);
};

const generateMatchReasons = (template: TemplateProfile, answers: QuizAnswers): string[] => {
  const reasons: string[] = [];
  
  // Razões baseadas no estilo
  if (template.categories.includes('florais') && answers.estilo === 'Romântico') {
    reasons.push('Perfeitamente romântico com elementos florais');
  }
  
  if (template.categories.includes('classico') && answers.local === 'Igreja') {
    reasons.push('Ideal para cerimônias tradicionais em igreja');
  }
  
  if (template.categories.includes('praia') && answers.local === 'Praia') {
    reasons.push('Captura a essência de casamentos na praia');
  }
  
  if (template.categories.includes('rustico') && answers.local === 'Fazenda') {
    reasons.push('Combina com o charme rústico da fazenda');
  }
  
  if (template.categories.includes('moderno') && answers.estilo === 'Minimalista') {
    reasons.push('Design limpo e contemporâneo');
  }
  
  if (template.categories.includes('boho') && answers.estilo === 'Boho') {
    reasons.push('Estilo boêmio autêntico');
  }

  // Razões baseadas em características técnicas
  if (template.galleryType === 'grid' && answers.tom !== 'Minimalista') {
    reasons.push('Galeria organizada para destacar suas fotos');
  }
  
  if (template.animationType === 'fade' && answers.tom === 'Elegante e formal') {
    reasons.push('Animações suaves e elegantes');
  }
  
  if (template.animationType === 'parallax' && answers.tom === 'Divertido e descontraído') {
    reasons.push('Efeitos visuais dinâmicos e modernos');
  }
  
  // Razões baseadas na paleta de cores
  if (template.palette.primary.includes('#FF') || template.palette.secondary.includes('#FF')) {
    reasons.push('Paleta de cores calorosa e acolhedora');
  }
  
  if (template.palette.primary.includes('#00') || template.palette.primary.includes('#4') || template.palette.primary.includes('#B')) {
    reasons.push('Tons suaves e serenos');
  }

  // Razões genéricas se não houver matches específicos
  if (reasons.length === 0) {
    reasons.push('Template versátil que se adapta ao seu estilo');
    reasons.push('Design profissional e bem estruturado');
  }
  
  // Limitar a 3 razões principais
  return reasons.slice(0, 3);
};

export const getPopularTemplates = (): TemplateProfile[] => {
  // Retorna templates mais populares baseado em características comuns
  return TEMPLATE_LIBRARY.filter(template => 
    template.categories.includes('classico') || 
    template.categories.includes('florais') ||
    template.categories.includes('moderno')
  ).slice(0, 6);
};

export const getTemplatesByCategory = (category: TemplateCategory): TemplateProfile[] => {
  return TEMPLATE_LIBRARY.filter(template => 
    template.categories.includes(category)
  );
};

// Função auxiliar para recomendações baseadas em templates similares
export const getSimilarTemplates = (templateId: string, limit: number = 3): TemplateProfile[] => {
  const currentTemplate = TEMPLATE_LIBRARY.find(t => t.id === templateId);
  if (!currentTemplate) return [];
  
  // Encontrar templates com categorias similares
  const similarTemplates = TEMPLATE_LIBRARY
    .filter(template => 
      template.id !== templateId &&
      template.categories.some(cat => currentTemplate.categories.includes(cat))
    )
    .sort((a, b) => {
      // Ordenar por número de categorias em comum
      const aCommon = a.categories.filter(cat => currentTemplate.categories.includes(cat)).length;
      const bCommon = b.categories.filter(cat => currentTemplate.categories.includes(cat)).length;
      return bCommon - aCommon;
    })
    .slice(0, limit);
    
  return similarTemplates;
};

// Função para análise de tendências
export const getTrendingTemplates = (): TemplateProfile[] => {
  // Simular templates em alta baseado em características modernas
  return TEMPLATE_LIBRARY.filter(template => 
    template.animationType === 'parallax' ||
    template.galleryType === 'slideshow' ||
    template.categories.includes('cinematografico') ||
    template.categories.includes('moderno')
  ).slice(0, 4);
};
