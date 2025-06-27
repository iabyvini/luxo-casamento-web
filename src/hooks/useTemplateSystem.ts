
import { useCallback, useMemo } from 'react';
import { TemplateTokens, TemplateConfig } from '@/types/template';

const DEFAULT_TOKENS: TemplateTokens = {
  primaryColor: "#1a1a1a",
  secondaryColor: "#ffffff",
  accentColor: "#d4af37",
  backgroundColor: "#fafafa",
  fontFamily: "Inter, sans-serif",
  headingFont: "Playfair Display, serif",
  borderRadius: "8px"
};

export const useTemplateSystem = () => {
  const getTemplateTokens = useCallback((templateId: string): TemplateTokens => {
    // Por enquanto retorna tokens padrão, mas pode ser expandido
    console.log('🎨 Carregando tokens para template:', templateId);
    return DEFAULT_TOKENS;
  }, []);

  const applyTokensToDOM = useCallback((tokens: TemplateTokens, templateId?: string) => {
    const prefix = templateId || 'template';
    
    // Aplicar CSS custom properties
    document.documentElement.style.setProperty(`--${prefix}-primary`, tokens.primaryColor);
    document.documentElement.style.setProperty(`--${prefix}-secondary`, tokens.secondaryColor);
    document.documentElement.style.setProperty(`--${prefix}-accent`, tokens.accentColor);
    document.documentElement.style.setProperty(`--${prefix}-background`, tokens.backgroundColor);
    document.documentElement.style.setProperty(`--${prefix}-font-family`, tokens.fontFamily);
    document.documentElement.style.setProperty(`--${prefix}-heading-font`, tokens.headingFont);
    document.documentElement.style.setProperty(`--${prefix}-border-radius`, tokens.borderRadius);

    console.log('✅ Tokens aplicados ao DOM:', { templateId, tokens });
  }, []);

  const generateTemplateCSS = useCallback((tokens: TemplateTokens, templateId: string): string => {
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
    `;
  }, []);

  return {
    getTemplateTokens,
    applyTokensToDOM,
    generateTemplateCSS,
    defaultTokens: DEFAULT_TOKENS
  };
};
