
import React, { createContext, useContext, useState } from 'react';
import { QuizAnswers } from '@/types/quiz';

interface VisualTokensContextType {
  visualTokens: any | null;
  isCustomThemeActive: boolean;
  couplePhotoUrl: string | null;
  applyTokens: (quizAnswers: QuizAnswers) => void;
  resetTokens: () => void;
  setCouplePhotoUrl: (url: string | null) => void;
}

const VisualTokensContext = createContext<VisualTokensContextType | undefined>(undefined);

export const VisualTokensProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visualTokens, setVisualTokens] = useState<any | null>(null);
  const [isCustomThemeActive, setIsCustomThemeActive] = useState(false);
  const [couplePhotoUrl, setCouplePhotoUrlState] = useState<string | null>(null);

  const setCouplePhotoUrl = (url: string | null) => {
    setCouplePhotoUrlState(url);
    if (url) {
      localStorage.setItem('couplePhotoUrl', url);
    } else {
      localStorage.removeItem('couplePhotoUrl');
    }
  };

  const applyTokens = (quizAnswers: QuizAnswers) => {
    console.log('🎨 Aplicando tokens básicos para:', quizAnswers);
    setIsCustomThemeActive(true);
    document.body.classList.add('custom-theme-active');
  };

  const resetTokens = () => {
    setVisualTokens(null);
    setIsCustomThemeActive(false);
    const styleElement = document.getElementById('global-visual-tokens');
    if (styleElement) {
      styleElement.remove();
    }
    document.body.classList.remove('custom-theme-active');
  };

  return (
    <VisualTokensContext.Provider value={{ 
      visualTokens, 
      isCustomThemeActive,
      couplePhotoUrl,
      applyTokens, 
      resetTokens,
      setCouplePhotoUrl
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
