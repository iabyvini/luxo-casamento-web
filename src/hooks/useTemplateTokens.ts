
import { useTemplateSystem } from './useTemplateSystem';

// Re-exportar o hook principal com nome compatível
export const useTemplateTokens = () => {
  const { getTemplateTokens, applyTokensToDOM } = useTemplateSystem();
  
  return {
    loadTemplateTokens: getTemplateTokens,
    applyTokensToDOM
  };
};

// Re-exportar o hook principal
export { useTemplateSystem };
