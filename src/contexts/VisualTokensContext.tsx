
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
    const templateProfile = findBestTemplateProfile(quizAnswers);
    const tokens = generateVisualTokens(templateProfile);
    const backgroundToken = getBackgroundToken(templateProfile);
    
    setVisualTokens(tokens);
    setIsCustomThemeActive(true);
    
    // Apply CSS variables with background tokens and COMPLETE gold override
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
      
      /* ELIMINAÇÃO TOTAL do sistema dourado quando tokens personalizados estão ativos */
      body.custom-theme-active .bg-gradient-luxury,
      body.custom-theme-active .gradient-luxury,
      body.custom-theme-active .btn-premium {
        background: var(--primary-color) !important;
      }
      
      body.custom-theme-active .gradient-text {
        background: none !important;
        -webkit-background-clip: unset !important;
        -webkit-text-fill-color: unset !important;
        background-clip: unset !important;
        color: var(--primary-color) !important;
      }
      
      body.custom-theme-active .luxury-shadow {
        box-shadow: 0 25px 50px -12px color-mix(in srgb, var(--primary-color) 8%, transparent), 
                    0 10px 20px -5px color-mix(in srgb, var(--primary-color) 4%, transparent) !important;
      }
      
      /* Sobrescrever TODAS as referências de cores douradas */
      body.custom-theme-active .text-accent,
      body.custom-theme-active .border-accent,
      body.custom-theme-active .bg-accent {
        color: var(--primary-color) !important;
        border-color: var(--primary-color) !important;
        background-color: var(--secondary-color) !important;
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
        opacity: 0.03;
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
