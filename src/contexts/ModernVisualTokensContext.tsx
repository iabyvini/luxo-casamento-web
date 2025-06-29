import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { QuizAnswers } from '@/types/quiz';
import { supabase } from "@/integrations/supabase/client";
import { getTemplateById, AnimationType, GalleryType } from '@/data/templateLibrary';

interface ModernVisualTokens {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
  };
  typography: {
    fontFamily: string;
    headingFont: string;
    accentFont: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
  galleryType: GalleryType;
  animationType: AnimationType;
}

interface ModernVisualTokensContextType {
  modernTokens: ModernVisualTokens | null;
  isModernThemeActive: boolean;
  couplePhotoUrl: string | null;
  templateProfile: any | null;
  applyModernTokens: (templateId: string, quizAnswers?: QuizAnswers) => void;
  resetModernTokens: () => void;
  setCouplePhotoUrl: (url: string | null) => void;
  setSiteId: (siteId: string) => void;
}

const defaultTokens: ModernVisualTokens = {
  colors: {
    primary: '#8B5A3C',
    secondary: '#D4B08A',
    accent: '#F4E5D3',
    background: '#FDFBF7',
    surface: '#FFFFFF',
    text: '#2D2D2D',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    headingFont: 'Playfair Display, serif',
    accentFont: 'Dancing Script, cursive',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  },
  galleryType: 'grid',
  animationType: 'fade'
};

const ModernVisualTokensContext = createContext<ModernVisualTokensContextType | undefined>(undefined);

interface ModernVisualTokensProviderProps {
  children: ReactNode;
  templateName?: string;
}

export const ModernVisualTokensProvider = ({ 
  children, 
  templateName 
}: ModernVisualTokensProviderProps) => {
  const [modernTokens, setModernTokens] = useState<ModernVisualTokens>(defaultTokens);
  const [isModernThemeActive, setIsModernThemeActive] = useState(false);
  const [couplePhotoUrl, setCouplePhotoUrlState] = useState<string | null>(null);
  const [templateProfile, setTemplateProfile] = useState<any | null>(null);
  const [currentSiteId, setCurrentSiteId] = useState<string>('');

  const setCouplePhotoUrl = (url: string | null) => {
    setCouplePhotoUrlState(url);
    if (url) {
      localStorage.setItem('couplePhotoUrl', url);
    } else {
      localStorage.removeItem('couplePhotoUrl');
    }
  };

  const setSiteId = (siteId: string) => {
    setCurrentSiteId(siteId);
    loadCouplePhoto(siteId);
  };

  const loadCouplePhoto = async (siteId: string) => {
    if (!siteId) return;
    
    try {
      const { data, error } = await supabase
        .from('wedding_sites')
        .select('couple_photo_url')
        .eq('id', siteId)
        .single();

      if (error) {
        console.error('Erro ao carregar foto do casal:', error);
        return;
      }

      if (data?.couple_photo_url) {
        setCouplePhotoUrl(data.couple_photo_url);
      }
    } catch (error) {
      console.error('Erro ao carregar foto do casal:', error);
    }
  };

  const applyModernTokens = (templateId: string, quizAnswers?: QuizAnswers) => {
    const template = getTemplateById(templateId);
    if (template) {
      // Convert template tokens to ModernVisualTokens format
      const modernTokensFromTemplate: ModernVisualTokens = {
        colors: {
          primary: template.tokens.primary,
          secondary: template.tokens.secondary,
          accent: template.tokens.accent,
          background: template.tokens.background,
          surface: template.tokens.surface,
          text: template.tokens.text,
          textSecondary: template.tokens.textSecondary,
          border: template.tokens.border,
        },
        typography: {
          fontFamily: template.tokens.fontFamily,
          headingFont: template.tokens.headingFont,
          accentFont: template.tokens.accentFont,
        },
        fontSize: template.tokens.fontSize,
        spacing: template.tokens.spacing,
        borderRadius: template.tokens.borderRadius,
        shadows: template.tokens.shadows,
        galleryType: template.tokens.galleryType,
        animationType: template.tokens.animationType,
      };

      setModernTokens(modernTokensFromTemplate);
      setTemplateProfile(template);
      setIsModernThemeActive(true);
      document.body.classList.add('modern-theme-active');
    }
  };

  const resetModernTokens = () => {
    setModernTokens(defaultTokens);
    setTemplateProfile(null);
    setIsModernThemeActive(false);
    document.body.classList.remove('modern-theme-active');
  };

  return (
    <ModernVisualTokensContext.Provider value={{ 
      modernTokens, 
      isModernThemeActive,
      couplePhotoUrl,
      templateProfile,
      applyModernTokens, 
      resetModernTokens,
      setCouplePhotoUrl,
      setSiteId
    }}>
      {children}
    </ModernVisualTokensContext.Provider>
  );
};

export const useModernVisualTokens = () => {
  const context = useContext(ModernVisualTokensContext);
  if (context === undefined) {
    throw new Error('useModernVisualTokens must be used within a ModernVisualTokensProvider');
  }
  return context;
};
