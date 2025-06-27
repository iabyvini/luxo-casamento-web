
import { TemplateTokens } from '@/types/template';
import { getTemplateConfig } from './templateLibrary';

// Função para obter tokens de um template
export const getTemplateTokens = (templateId: string): TemplateTokens => {
  const config = getTemplateConfig(templateId);
  return config.tokens;
};

// Função para aplicar tokens como CSS
export const applyTemplateTokensToCSS = (tokens: TemplateTokens, templateId: string): string => {
  return `
    .template-${templateId} {
      --primary-color: ${tokens.primaryColor};
      --secondary-color: ${tokens.secondaryColor};
      --accent-color: ${tokens.accentColor};
      --background-color: ${tokens.backgroundColor};
      --font-family: ${tokens.fontFamily};
      --heading-font: ${tokens.headingFont};
      --border-radius: ${tokens.borderRadius};
    }
    
    .template-${templateId} .template-preview-hero {
      background: linear-gradient(135deg, ${tokens.primaryColor}, ${tokens.accentColor});
      font-family: var(--heading-font);
      color: ${tokens.secondaryColor};
    }
    
    .template-${templateId} .template-preview-hero h3 {
      font-family: var(--heading-font);
      font-weight: 700;
    }
    
    .template-${templateId} .template-preview-hero p {
      font-family: var(--font-family);
    }
  `;
};
