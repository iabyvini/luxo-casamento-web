
import React from 'react';
import { TemplateProps } from '@/types/template';
import { useTemplateSystem } from '@/hooks/useTemplateSystem';

// Re-exportar tipos para compatibilidade
export type { TemplateProps, TemplateConfig } from '@/types/template';

interface BaseTemplateProps extends TemplateProps {
  templateId: string;
  children: React.ReactNode;
}

export const BaseTemplate: React.FC<BaseTemplateProps> = ({ 
  siteData, 
  siteId, 
  templateId,
  children
}) => {
  const { getTemplateTokens, applyTokensToDOM } = useTemplateSystem();

  React.useEffect(() => {
    const tokens = getTemplateTokens(templateId);
    applyTokensToDOM(tokens, templateId);
  }, [templateId, getTemplateTokens, applyTokensToDOM]);

  return (
    <div className={`template-${templateId}`} data-template-id={templateId}>
      {children}
    </div>
  );
};
