
import React, { createContext, useContext, useEffect, useState } from 'react';
import { VisualTokens } from '@/utils/visualTokens';
import { QuizAnswers } from '@/types/quiz';
import { findBestTemplateProfile, generateVisualTokens, applyVisualTokensToCSS } from '@/utils/templateProfiles';
import { getBackgroundToken, generateBackgroundCSS } from '@/utils/backgroundTokens';

interface VisualTokensContextType {
  visualTokens: VisualTokens | null;
  isCustomThemeActive: boolean;
  applyTokens: (quizAnswers: QuizAnswers) => void;
  resetTokens: () => void;
}

const VisualTokensContext = createContext<VisualTokensContextType | undefined>(undefined);

export const VisualTokensProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visualTokens, setVisualTokens] = useState<VisualTokens | null>(null);
  const [isCustomThemeActive, setIsCustomThemeActive] = useState(false);

  const applyTokens = (quizAnswers: QuizAnswers) => {
    const templateProfile = findBestTemplateProfile(quizAnswers);
    const tokens = generateVisualTokens(templateProfile);
    const backgroundToken = getBackgroundToken(templateProfile);
    
    setVisualTokens(tokens);
    setIsCustomThemeActive(true);
    
    // Apply CSS variables with background tokens
    const styleId = 'global-visual-tokens';
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }
    
    styleElement.textContent = `
      ${applyVisualTokensToCSS(tokens)}
      ${generateBackgroundCSS(backgroundToken)}
      
      /* Disable gold theme when custom tokens are active */
      body.custom-theme-active .bg-gradient-luxury {
        background: var(--primary-color) !important;
      }
      
      body.custom-theme-active .gradient-text {
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-clip: text !important;
      }
      
      body.custom-theme-active .luxury-shadow {
        box-shadow: 0 25px 50px -12px color-mix(in srgb, var(--primary-color) 15%, transparent), 
                    0 10px 20px -5px color-mix(in srgb, var(--primary-color) 8%, transparent) !important;
      }
      
      /* Template-specific backgrounds */
      .section-bg-dynamic {
        background: var(--template-bg-gradient);
        position: relative;
      }
      
      .section-bg-dynamic::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: var(--template-bg-texture);
        opacity: 0.05;
        pointer-events: none;
      }
      
      /* Contextual hero backgrounds */
      .hero-template-bg {
        background: var(--template-bg-gradient);
        background-image: var(--template-bg-texture);
      }
    `;
    
    // Add custom theme class to body
    document.body.classList.add('custom-theme-active');
  };

  const resetTokens = () => {
    setVisualTokens(null);
    setIsCustomThemeActive(false);
    const styleElement = document.getElementById('global-visual-tokens');
    if (styleElement) {
      styleElement.remove();
    }
    // Remove custom theme class
    document.body.classList.remove('custom-theme-active');
  };

  return (
    <VisualTokensContext.Provider value={{ 
      visualTokens, 
      isCustomThemeActive, 
      applyTokens, 
      resetTokens 
    }}>
      {children}
    </VisualTokensContext.Provider>
  );
};

export const useVisualTokens = () => {
  const context = useContext(VisualTokensContext);
  if (context === undefined) {
    throw new Error('useVisualTokens must be used within a VisualTokensProvider');
  }
  return context;
};
