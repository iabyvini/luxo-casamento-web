
import { QuizAnswers } from '@/types/quiz';
import { TemplateProfile, TEMPLATE_LIBRARY, getTemplateById } from '@/data/templateLibrary';

export { TemplateProfile } from '@/data/templateLibrary';

export const getTemplateProfile = (templateId: string): TemplateProfile => {
  const template = getTemplateById(templateId);
  if (!template) {
    // Retorna o primeiro template como fallback
    return TEMPLATE_LIBRARY[0];
  }
  return template;
};

export const matchTemplateToAnswers = (answers: QuizAnswers): TemplateProfile => {
  // Por enquanto retorna o primeiro template
  // TODO: Implementar lógica de matching mais sofisticada
  return TEMPLATE_LIBRARY[0];
};

export const getAllTemplateProfiles = (): TemplateProfile[] => {
  return TEMPLATE_LIBRARY;
};
