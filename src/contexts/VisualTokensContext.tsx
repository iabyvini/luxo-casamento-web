
import React, { createContext, useContext, useEffect, useState } from 'react';
import { VisualTokens } from '@/utils/visualTokens';
import { QuizAnswers } from '@/types/quiz';
import { findBestTemplateProfile, generateVisualTokens, applyVisualTokensToCSS } from '@/utils/templateProfiles';

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
    setVisualTokens(tokens);
    setIsCustomThemeActive(true);
    
    // Apply CSS variables
    const styleId = 'global-visual-tokens';
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }
    
    // Enhanced CSS with conditional gold override
    styleElement.textContent = `
      ${applyVisualTokensToCSS(tokens)}
      
      /* Conditional gold override - disable when custom theme is active */
      .custom-theme-active .bg-gradient-luxury {
        background: var(--primary-color) !important;
      }
      
      .custom-theme-active .gradient-text {
        background: var(--primary-color) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-clip: text !important;
      }
      
      .custom-theme-active .luxury-shadow {
        box-shadow: 0 25px 50px -12px var(--primary-color)15, 0 10px 20px -5px var(--primary-color)08 !important;
      }
      
      /* Background layer tokens */
      .hero-dynamic-bg {
        background: var(--background-gradient);
        background-image: var(--texture-overlay);
      }
      
      .section-bg-dynamic {
        background: var(--background-gradient);
        position: relative;
      }
      
      .section-bg-dynamic::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: var(--texture-overlay);
        opacity: 0.05;
        pointer-events: none;
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
