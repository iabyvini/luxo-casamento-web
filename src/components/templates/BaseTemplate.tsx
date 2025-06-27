
import React from 'react';
import { TemplateProps, TemplateConfig } from '@/types/template';
import { useTemplateSystem } from '@/hooks/useTemplateSystem';

// Re-exportar tipos para compatibilidade
export type { TemplateProps, TemplateConfig } from '@/types/template';

interface BaseTemplateProps extends TemplateProps {
  templateId?: string;
  templateConfig?: TemplateConfig;
  children: React.ReactNode;
}

export const BaseTemplate: React.FC<BaseTemplateProps> = ({ 
  siteData, 
  siteId, 
  templateId,
  templateConfig,
  children
}) => {
  const { getTemplateTokens, applyTokensToDOM } = useTemplateSystem();

  React.useEffect(() => {
    const effectiveTemplateId = templateId || templateConfig?.id || 'default';
    const tokens = getTemplateTokens(effectiveTemplateId);
    applyTokensToDOM(tokens, effectiveTemplateId);
  }, [templateId, templateConfig, getTemplateTokens, applyTokensToDOM]);

  const effectiveTemplateId = templateId || templateConfig?.id || 'default';

  return (
    <div className={`template-${effectiveTemplateId}`} data-template-id={effectiveTemplateId}>
      {children}
    </div>
  );
};
