
import React, { createContext, useContext, useEffect, useState } from 'react';
import { VisualTokens } from '@/utils/visualTokens';
import { QuizAnswers } from '@/types/quiz';
import { findBestTemplateProfile, generateVisualTokens, applyVisualTokensToCSS } from '@/utils/templateProfiles';
import { getTemplateTokens, applyTemplateTokensToCSS } from '@/utils/templateTokens';

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
    console.log('🎨 Aplicando tokens para:', quizAnswers);
    
    try {
      // Prioridade 1: Se tem template_id específico, usar tokens específicos
      if (quizAnswers.template_id) {
        console.log('🎯 Usando tokens específicos para template:', quizAnswers.template_id);
        const specificTokens = getTemplateTokens(quizAnswers.template_id);
        
        // Convert to legacy format for compatibility
        const legacyTokens: VisualTokens = {
          colors: {
            primary: specificTokens.primaryColor,
            secondary: specificTokens.secondaryColor,
            accent: specificTokens.accentColor,
            background: specificTokens.background,
            textureOverlay: undefined
          },
          typography: {
            fontFamilies: {
              heading: specificTokens.fontFamily,
              body: specificTokens.fontFamily,
              accent: specificTokens.fontFamily
            },
            weights: {
              heading: 600,
              body: 400
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
        
        // Apply specific template CSS
        const styleId = 'global-visual-tokens';
        let styleElement = document.getElementById(styleId) as HTMLStyleElement;
        
        if (!styleElement) {
          styleElement = document.createElement('style');
          styleElement.id = styleId;
          document.head.appendChild(styleElement);
        }
        
        const specificCSS = applyTemplateTokensToCSS(specificTokens, quizAnswers.template_id);
        const legacyCSS = applyVisualTokensToCSS(legacyTokens);
        
        styleElement.textContent = `
          ${specificCSS}
          ${legacyCSS}
          
          /* Enhanced template-specific styles */
          body.custom-theme-active {
            font-family: ${specificTokens.fontFamily}, serif;
            color: ${specificTokens.textColor || specificTokens.primaryColor};
            background: ${specificTokens.background};
          }
        `;
        
        console.log('✅ Tokens específicos aplicados para template:', quizAnswers.template_id);
      } else {
        // Prioridade 2: Usar sistema de template profiles tradicional
        console.log('📋 Usando sistema tradicional de template profiles');
        const templateProfile = findBestTemplateProfile(quizAnswers);
        const tokens = generateVisualTokens(templateProfile);
        
        console.log('📋 Template profile selecionado:', templateProfile);
        console.log('🎨 Tokens gerados:', tokens);
        
        setVisualTokens(tokens);
        setIsCustomThemeActive(true);
        
        // Apply CSS
        const styleId = 'global-visual-tokens';
        let styleElement = document.getElementById(styleId) as HTMLStyleElement;
        
        if (!styleElement) {
          styleElement = document.createElement('style');
          styleElement.id = styleId;
          document.head.appendChild(styleElement);
        }
        
        const cssContent = applyVisualTokensToCSS(tokens);
        styleElement.textContent = cssContent;
        
        console.log('✅ CSS aplicado via sistema tradicional');
      }
      
      // Apply theme class to body
      document.body.classList.add('custom-theme-active');
      
    } catch (error) {
      console.error('❌ Erro ao aplicar tokens:', error);
      // Fallback to basic theme
      setIsCustomThemeActive(false);
    }
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
