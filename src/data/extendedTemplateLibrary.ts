
import { ExtendedTemplate } from '@/types/template';
import { getAllTemplates } from '@/utils/templateLibrary';

// Interface para compatibilidade (já movida para types/template.ts)
export type { ExtendedTemplate } from '@/types/template';

// Biblioteca de templates - agora gerenciada pelo utilitário
export const EXTENDED_TEMPLATE_LIBRARY: ExtendedTemplate[] = getAllTemplates();

// Função para obter template por ID
export const getTemplateById = (id: string): ExtendedTemplate | undefined => {
  return EXTENDED_TEMPLATE_LIBRARY.find(template => template.id === id);
};

// Função para obter templates por categoria
export const getTemplatesByCategory = (category: string): ExtendedTemplate[] => {
  return EXTENDED_TEMPLATE_LIBRARY.filter(template => template.category === category);
};
