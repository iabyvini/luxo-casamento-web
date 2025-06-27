
import { useCallback } from 'react';
import { TemplateTokens } from '@/types/modernVisualTokens';

// Dinamicamente importa todos os tokens JSON
const tokenModules = import.meta.glob('/src/tokens/*.json', { eager: true });

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
    console.log('🎨 Carregando tokens para template:', templateName);
    console.log('📁 Módulos disponíveis:', Object.keys(tokenModules));
    
    // Normalizar nome do template para busca
    const normalizedName = templateName.toLowerCase().replace(/\s+/g, '-');
    console.log('🔍 Nome normalizado:', normalizedName);
    
    // Buscar o módulo correspondente
    const matchingModule = Object.entries(tokenModules).find(([path]) => {
      const fileName = path.split('/').pop()?.replace('.json', '') || '';
      console.log('📄 Verificando arquivo:', fileName, 'vs', normalizedName);
      return fileName === normalizedName;
    });

    if (matchingModule) {
      const tokens = matchingModule[1] as any;
      const finalTokens = tokens.default || tokens;
      console.log('✅ Tokens encontrados para', templateName, ':', finalTokens);
      return finalTokens;
    }

    console.log('⚠️ Tokens não encontrados para', templateName, '- usando padrão');
    console.log('🔍 Tentando buscar por variações...');
    
    // Tentar variações do nome
    const variations = [
      templateName.toLowerCase(),
      templateName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      templateName.toLowerCase().replace(/[^a-z0-9]/g, ''),
    ];
    
    for (const variation of variations) {
      const matchingVariation = Object.entries(tokenModules).find(([path]) => {
        const fileName = path.split('/').pop()?.replace('.json', '') || '';
        return fileName === variation;
      });
      
      if (matchingVariation) {
        const tokens = matchingVariation[1] as any;
        const finalTokens = tokens.default || tokens;
        console.log('✅ Tokens encontrados por variação:', variation, ':', finalTokens);
        return finalTokens;
      }
    }
    
    console.log('❌ Nenhuma variação encontrada, usando tokens padrão');
    return defaultTokens;
  }, []);

  const applyTokensToDOM = useCallback((tokens: TemplateTokens) => {
    console.log('🎨 Aplicando CSS custom properties:', tokens);

    // Aplicar CSS custom properties
    document.documentElement.style.setProperty('--template-primary', tokens.primaryColor);
    document.documentElement.style.setProperty('--template-secondary', tokens.secondaryColor);
    document.documentElement.style.setProperty('--template-accent', tokens.accentColor);
    document.documentElement.style.setProperty('--template-background', tokens.backgroundColor);
    document.documentElement.style.setProperty('--template-font-family', tokens.fontFamily);
    document.documentElement.style.setProperty('--template-heading-font', tokens.headingFont);
    document.documentElement.style.setProperty('--template-border-radius', tokens.borderRadius);

    // Também aplicar como variáveis modernas
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
