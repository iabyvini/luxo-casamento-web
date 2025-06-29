
import { QuizAnswers } from '@/types/quiz';

interface TemplateMatch {
  id: string;
  name: string;
  score: number;
  reasons: string[];
}

export const findBestTemplateMatch = (answers: QuizAnswers): TemplateMatch => {
  // Por enquanto, sempre retornar um template padrão
  // Quando novos templates forem adicionados, implementar lógica de matching
  
  return {
    id: 'default',
    name: 'Template Padrão',
    score: 100,
    reasons: ['Template base para todos os estilos']
  };
};

export const getTemplateRecommendations = (answers: QuizAnswers): TemplateMatch[] => {
  // Por enquanto, sempre retornar apenas o template padrão
  return [findBestTemplateMatch(answers)];
};
