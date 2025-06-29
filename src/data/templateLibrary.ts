
import { TemplateProfile, TemplateCategory } from './templateTypes';
import { TEMPLATE_CATEGORIES } from './templateCategories';
import { CORE_TEMPLATES } from './templates/coreTemplates';
import { ROMANTIC_TEMPLATES } from './templates/romanticTemplates';
import { MODERN_TEMPLATES } from './templates/modernTemplates';
import { TROPICAL_TEMPLATES } from './templates/tropicalTemplates';
import { SPECIAL_TEMPLATES } from './templates/specialTemplates';
import { MINIMAL_TEMPLATES } from './templates/minimalTemplates';
import { ADDITIONAL_TEMPLATES } from './templates/additionalTemplates';
import { RUSTIC_TEMPLATES } from './templates/rusticTemplates';
import { VIBRANT_TEMPLATES } from './templates/vibrantTemplates';
import { NATURAL_TEMPLATES } from './templates/naturalTemplates';
import { SUNSET_TEMPLATES } from './templates/sunsetTemplates';

// Export types for external use
export type { TemplateProfile, TemplateCategory, GalleryType, AnimationType } from './templateTypes';
export { TEMPLATE_CATEGORIES };

// Combine all templates
export const TEMPLATE_LIBRARY: TemplateProfile[] = [
  ...CORE_TEMPLATES,
  ...ROMANTIC_TEMPLATES,
  ...MODERN_TEMPLATES,
  ...TROPICAL_TEMPLATES,
  ...SPECIAL_TEMPLATES,
  ...MINIMAL_TEMPLATES,
  ...ADDITIONAL_TEMPLATES,
  ...RUSTIC_TEMPLATES,
  ...VIBRANT_TEMPLATES,
  ...NATURAL_TEMPLATES,
  ...SUNSET_TEMPLATES
];

// Utility functions
export const searchTemplates = (query: string): TemplateProfile[] => {
  const lowercaseQuery = query.toLowerCase();
  return TEMPLATE_LIBRARY.filter(template =>
    template.name.toLowerCase().includes(lowercaseQuery) ||
    template.description.toLowerCase().includes(lowercaseQuery) ||
    template.categories.some(cat => cat.toLowerCase().includes(lowercaseQuery)) ||
    template.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
};

export const getTemplatesByCategory = (category: TemplateCategory): TemplateProfile[] => {
  return TEMPLATE_LIBRARY.filter(template => 
    template.categories.includes(category)
  );
};

export const getTemplateById = (id: string): TemplateProfile | undefined => {
  return TEMPLATE_LIBRARY.find(template => template.id === id);
};
