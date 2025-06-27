
import { useCallback } from 'react';
import { TemplateTokens } from '@/types/modernVisualTokens';

const defaultTokens: TemplateTokens = {
  primaryColor: "#000000",
  secondaryColor: "#FFFFFF",
  accentColor: "#C0C0C0",
  backgroundColor: "#F9F9F9",
  fontFamily: "Inter",
  headingFont: "Inter",
  borderRadius: "4px"
};

export const useTemplateTokens = () => {
  const loadTemplateTokens = useCallback((templateName: string): TemplateTokens => {
    console.log('🎨 Usando tokens padrão para:', templateName);
    return defaultTokens;
  }, []);

  const applyTokensToDOM = useCallback((tokens: TemplateTokens) => {
    console.log('🎨 Aplicando CSS custom properties:', tokens);

    document.documentElement.style.setProperty('--template-primary', tokens.primaryColor);
    document.documentElement.style.setProperty('--template-secondary', tokens.secondaryColor);
    document.documentElement.style.setProperty('--template-accent', tokens.accentColor);
    document.documentElement.style.setProperty('--template-background', tokens.backgroundColor);
    document.documentElement.style.setProperty('--template-font-family', tokens.fontFamily);
    document.documentElement.style.setProperty('--template-heading-font', tokens.headingFont);
    document.documentElement.style.setProperty('--template-border-radius', tokens.borderRadius);

    document.documentElement.style.setProperty('--modern-primary', tokens.primaryColor);
    document.documentElement.style.setProperty('--modern-secondary', tokens.secondaryColor);
    document.documentElement.style.setProperty('--modern-accent', tokens.accentColor);
    document.documentElement.style.setProperty('--modern-background', tokens.backgroundColor);
    document.documentElement.style.setProperty('--modern-body-font', tokens.fontFamily);
    document.documentElement.style.setProperty('--modern-heading-font', tokens.headingFont);
    
    console.log('✅ CSS custom properties aplicadas com sucesso');
  }, []);

  return { loadTemplateTokens, applyTokensToDOM };
};
