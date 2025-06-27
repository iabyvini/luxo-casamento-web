
import { ExtendedTemplate, TemplateConfig } from '@/types/template';

// Configurações base para templates
const TEMPLATE_CONFIGS: Record<string, TemplateConfig> = {
  'default': {
    id: 'default',
    name: 'Default Template',
    category: 'classic',
    description: 'Template padrão para teste',
    tags: ['simples', 'elegante'],
    colors: ['#1a1a1a', '#ffffff', '#d4af37'],
    fonts: {
      heading: 'Playfair Display',
      body: 'Inter',
      accent: 'Dancing Script'
    },
    sections: ['Hero', 'Couple', 'Event Details'],
    mood: ['elegant', 'classic'],
    tokens: {
      primaryColor: '#1a1a1a',
      secondaryColor: '#ffffff',
      accentColor: '#d4af37',
      backgroundColor: '#fafafa',
      background: '#fafafa',
      textColor: '#1a1a1a',
      fontFamily: 'Inter, sans-serif',
      headingFont: 'Playfair Display, serif',
      borderRadius: '8px'
    }
  }
};

// Função para obter configuração de template
export const getTemplateConfig = (templateId: string): TemplateConfig => {
  return TEMPLATE_CONFIGS[templateId] || TEMPLATE_CONFIGS['default'];
};

// Função para registrar novo template
export const registerTemplate = (config: TemplateConfig): void => {
  TEMPLATE_CONFIGS[config.id] = config;
  console.log('📝 Template registrado:', config.id);
};

// Função para obter todos os templates
export const getAllTemplates = (): ExtendedTemplate[] => {
  return Object.values(TEMPLATE_CONFIGS).map(config => ({
    ...config,
    component: 'DefaultTemplate' // Por enquanto todos usam o mesmo componente
  }));
};

// Função para validar se um template existe
export const templateExists = (templateId: string): boolean => {
  return templateId in TEMPLATE_CONFIGS;
};
