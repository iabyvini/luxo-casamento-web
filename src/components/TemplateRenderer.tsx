
import React, { useEffect } from 'react';
import { TemplateProfile } from '@/data/templateLibrary';
import { useModernVisualTokens } from '@/contexts/ModernVisualTokensContext';

interface TemplateRendererProps {
  template: TemplateProfile;
  children: React.ReactNode;
}

const TemplateRenderer = ({ template, children }: TemplateRendererProps) => {
  const { applyModernTokens } = useModernVisualTokens();

  useEffect(() => {
    // Aplicar tokens visuais do template
    applyModernTokens(template.id);
    
    // Aplicar CSS custom properties baseadas no template
    const root = document.documentElement;
    
    // Cores
    root.style.setProperty('--template-primary', template.tokens.primary);
    root.style.setProperty('--template-secondary', template.tokens.secondary);
    root.style.setProperty('--template-accent', template.tokens.accent);
    root.style.setProperty('--template-background', template.tokens.background);
    root.style.setProperty('--template-surface', template.tokens.surface);
    root.style.setProperty('--template-text', template.tokens.text);
    root.style.setProperty('--template-text-secondary', template.tokens.textSecondary);
    root.style.setProperty('--template-border', template.tokens.border);
    
    // Tipografia
    root.style.setProperty('--template-font-family', template.tokens.fontFamily);
    root.style.setProperty('--template-heading-font', template.tokens.headingFont);
    root.style.setProperty('--template-accent-font', template.tokens.accentFont);
    
    // Espaçamentos
    Object.entries(template.tokens.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--template-spacing-${key}`, value);
    });
    
    // Border radius
    Object.entries(template.tokens.borderRadius).forEach(([key, value]) => {
      root.style.setProperty(`--template-radius-${key}`, value);
    });
    
    // Shadows
    Object.entries(template.tokens.shadows).forEach(([key, value]) => {
      root.style.setProperty(`--template-shadow-${key}`, value);
    });
    
    // Font sizes
    Object.entries(template.tokens.fontSize).forEach(([key, value]) => {
      root.style.setProperty(`--template-text-${key}`, value);
    });
  }, [template, applyModernTokens]);

  return (
    <div 
      className={`template-renderer template-${template.id}`}
      data-template={template.id}
      data-gallery-type={template.galleryType}
      data-animation-type={template.animationType}
      style={{
        backgroundColor: template.tokens.background,
        color: template.tokens.text,
        fontFamily: template.tokens.fontFamily
      }}
    >
      {children}
    </div>
  );
};

export default TemplateRenderer;
