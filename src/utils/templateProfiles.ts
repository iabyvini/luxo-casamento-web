
import { QuizAnswers } from '@/types/quiz';

export interface TemplateProfile {
  id: string;
  name: string;
  description: string;
  style: string;
  colors: string[];
  mood: string;
  target_audience: string;
}

const defaultProfile: TemplateProfile = {
  id: 'default',
  name: 'Template Padrão',
  description: 'Template versátil que se adapta a qualquer estilo de casamento',
  style: 'Clássico',
  colors: ['#8B5A3C', '#D4B08A', '#F4E5D3'],
  mood: 'Elegante e atemporal',
  target_audience: 'Todos os casais'
};

export const getTemplateProfile = (templateId: string): TemplateProfile => {
  // Por enquanto, sempre retornar o perfil padrão
  // Quando novos templates forem adicionados, implementar busca real
  return defaultProfile;
};

export const matchTemplateToAnswers = (answers: QuizAnswers): TemplateProfile => {
  // Por enquanto, sempre retornar o perfil padrão
  // Quando novos templates forem adicionados, implementar matching baseado nas respostas
  return defaultProfile;
};

export const getAllTemplateProfiles = (): TemplateProfile[] => {
  return [defaultProfile];
};
