
import React, { createContext, useContext, useEffect, useState } from 'react';
import { VisualTokens } from '@/utils/visualTokens';
import { QuizAnswers } from '@/types/quiz';
import { findBestTemplateProfile, generateVisualTokens, applyVisualTokensToCSS } from '@/utils/templateProfiles';

interface VisualTokensContextType {
  visualTokens: VisualTokens | null;
  applyTokens: (quizAnswers: QuizAnswers) => void;
  resetTokens: () => void;
}

const VisualTokensContext = createContext<VisualTokensContextType | undefined>(undefined);

export const VisualTokensProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visualTokens, setVisualTokens] = useState<VisualTokens | null>(null);

  const applyTokens = (quizAnswers: QuizAnswers) => {
    const templateProfile = findBestTemplateProfile(quizAnswers);
    const tokens = generateVisualTokens(templateProfile);
    setVisualTokens(tokens);
    
    // Apply CSS variables
    const styleId = 'global-visual-tokens';
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }
    
    styleElement.textContent = applyVisualTokensToCSS(tokens);
  };

  const resetTokens = () => {
    setVisualTokens(null);
    const styleElement = document.getElementById('global-visual-tokens');
    if (styleElement) {
      styleElement.remove();
    }
  };

  return (
    <VisualTokensContext.Provider value={{ visualTokens, applyTokens, resetTokens }}>
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
