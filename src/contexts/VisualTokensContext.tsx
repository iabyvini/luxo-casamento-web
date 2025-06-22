
import React, { createContext, useContext, useEffect, useState } from 'react';
import { VisualTokens } from '@/utils/visualTokens';
import { QuizAnswers } from '@/types/quiz';
import { findBestTemplateProfile, generateVisualTokens, applyVisualTokensToCSS } from '@/utils/templateProfiles';
import { getBackgroundToken, generateBackgroundCSS } from '@/utils/backgroundTokens';

interface VisualTokensContextType {
  visualTokens: VisualTokens | null;
  isCustomThemeActive: boolean;
  couplePhotoUrl: string | null;
  applyTokens: (quizAnswers: QuizAnswers) => void;
  resetTokens: () => void;
  setCouplePhotoUrl: (url: string | null) => void;
}

const VisualTokensContext = createContext<VisualTokensContextType | undefined>(undefined);

export const VisualTokensProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visualTokens, setVisualTokens] = useState<VisualTokens | null>(null);
  const [isCustomThemeActive, setIsCustomThemeActive] = useState(false);
  const [couplePhotoUrl, setCouplePhotoUrlState] = useState<string | null>(null);

  // Persist photo URL to localStorage
  const setCouplePhotoUrl = (url: string | null) => {
    setCouplePhotoUrlState(url);
    if (url) {
      localStorage.setItem('couplePhotoUrl', url);
    } else {
      localStorage.removeItem('couplePhotoUrl');
    }
  };

  // Load photo URL from localStorage on mount
  useEffect(() => {
    const savedPhotoUrl = localStorage.getItem('couplePhotoUrl');
    if (savedPhotoUrl) {
      setCouplePhotoUrlState(savedPhotoUrl);
    }
  }, []);

  const applyTokens = (quizAnswers: QuizAnswers) => {
    // Usar o novo sistema moderno como padrão
    const { findBestModernTemplate, generateModernVisualTokens, applyModernVisualTokensToCSS } = require('@/utils/modernTemplateProfiles');
    const { generateModernVisualTokens: genTokens, applyModernVisualTokensToCSS: applyCSS } = require('@/utils/modernVisualTokens');
    
    const modernTemplate = findBestModernTemplate(quizAnswers);
    const modernTokens = genTokens(modernTemplate);
    
    // Converter para o formato antigo para compatibilidade
    const legacyTokens = {
      colors: {
        primary: modernTokens.colors.primary,
        secondary: modernTokens.colors.secondary,
        accent: modernTokens.colors.accent,
        background: modernTokens.colors.background,
        textureOverlay: undefined
      },
      typography: {
        fontFamilies: {
          heading: modernTokens.typography.heading.family,
          body: modernTokens.typography.body.family,
          accent: modernTokens.typography.script.family
        },
        weights: {
          heading: modernTokens.typography.heading.weight,
          body: modernTokens.typography.body.weight
        }
      },
      layout: {
        spacing: 'normal' as const,
        borderRadius: 'soft' as const,
        shadows: 'subtle' as const,
        contentWidth: 'normal' as const
      },
      decorations: {
        heroElements: [],
        sectionDividers: [],
        backgroundPatterns: [],
        iconStyle: 'minimal' as const
      }
    };
    
    setVisualTokens(legacyTokens);
    setIsCustomThemeActive(true);
    
    // Aplicar CSS moderno
    const styleId = 'global-visual-tokens';
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }
    
    styleElement.textContent = `
      ${applyCSS(modernTokens)}
      
      /* Modern theme overrides */
      body.custom-theme-active {
        font-family: ${modernTokens.typography.body.family}, sans-serif;
        color: ${modernTokens.colors.text};
        background: ${modernTokens.colors.background};
      }
      
      body.custom-theme-active .modern-active {
        --primary-color: ${modernTokens.colors.primary};
        --secondary-color: ${modernTokens.colors.secondary};
        --accent-color: ${modernTokens.colors.accent};
        --background-color: ${modernTokens.colors.background};
        --text-color: ${modernTokens.colors.text};
      }
    `;
    
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
