
import { TemplateCategory } from './templateTypes';

export const TEMPLATE_CATEGORIES: Record<TemplateCategory, { name: string; count: number }> = {
  'rustico': { name: 'Rústico', count: 8 },
  'praia': { name: 'Praia', count: 6 },
  'classico': { name: 'Clássico', count: 10 },
  'moderno': { name: 'Moderno', count: 8 },
  'boho': { name: 'Boho', count: 5 },
  'tropical': { name: 'Tropical', count: 4 },
  'minimalista': { name: 'Minimalista', count: 6 },
  'florais': { name: 'Florais', count: 7 },
  'cinematografico': { name: 'Cinematográfico', count: 3 },
  'campestre': { name: 'Campestre', count: 5 },
  'romantico': { name: 'Romântico', count: 6 }
};
