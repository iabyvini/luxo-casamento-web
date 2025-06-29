
import { QuizAnswers } from '@/types/quiz';
import { TEMPLATE_LIBRARY, getTemplateById } from '@/data/templateLibrary';

export type { TemplateProfile } from '@/data/templateLibrary';

export const getTemplateProfile = (templateId: string) => {
  const template = getTemplateById(templateId);
  if (!template) {
    // Retorna o primeiro template como fallback
    return TEMPLATE_LIBRARY[0];
  }
  return template;
};

export const matchTemplateToAnswers = (answers: QuizAnswers) => {
  // Por enquanto retorna o primeiro template
  // TODO: Implementar lógica de matching mais sofisticada
  return TEMPLATE_LIBRARY[0];
};

export const getAllTemplateProfiles = () => {
  return TEMPLATE_LIBRARY;
};
