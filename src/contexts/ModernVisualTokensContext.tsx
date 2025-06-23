
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ModernVisualTokens, generateModernVisualTokens, applyModernVisualTokensToCSS } from '@/utils/modernVisualTokens';
import { QuizAnswers } from '@/types/quiz';
import { findBestModernTemplate } from '@/utils/modernTemplateProfiles';

interface ModernVisualTokensContextType {
  modernTokens: ModernVisualTokens | null;
  isModernThemeActive: boolean;
  couplePhotoUrl: string | null;
  templateProfile: any | null;
  applyModernTokens: (quizAnswers: QuizAnswers) => void;
  resetModernTokens: () => void;
  setCouplePhotoUrl: (url: string | null) => void;
  setSiteId: (siteId: string) => void;
}

const ModernVisualTokensContext = createContext<ModernVisualTokensContextType | undefined>(undefined);

export const ModernVisualTokensProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modernTokens, setModernTokens] = useState<ModernVisualTokens | null>(null);
  const [isModernThemeActive, setIsModernThemeActive] = useState(false);
  const [couplePhotoUrl, setCouplePhotoUrlState] = useState<string | null>(null);
  const [templateProfile, setTemplateProfile] = useState<any | null>(null);
  const [currentSiteId, setCurrentSiteId] = useState<string | null>(null);

  // Auto-detectar siteId da URL quando não está definido
  useEffect(() => {
    if (!currentSiteId) {
      const path = window.location.pathname;
      
      // Para rotas do editor: /editor/[siteId]
      const editorMatch = path.match(/^\/editor\/([^\/]+)$/);
      if (editorMatch) {
        setSiteId(editorMatch[1]);
        return;
      }
      
      // Para sites públicos: /site/[slug] - vamos usar o slug como identificador
      const publicMatch = path.match(/^\/site\/([^\/]+)$/);
      if (publicMatch) {
        setSiteId(`public_${publicMatch[1]}`);
        return;
      }
    }
  }, [currentSiteId]);

  const setSiteId = (siteId: string) => {
    setCurrentSiteId(siteId);
    // Carregar a foto específica deste site
    const savedPhotoUrl = localStorage.getItem(`couplePhotoUrl_${siteId}`);
    setCouplePhotoUrlState(savedPhotoUrl);
  };

  const setCouplePhotoUrl = (url: string | null) => {
    setCouplePhotoUrlState(url);
    if (currentSiteId) {
      if (url) {
        localStorage.setItem(`couplePhotoUrl_${currentSiteId}`, url);
      } else {
        localStorage.removeItem(`couplePhotoUrl_${currentSiteId}`);
      }
    }
  };

  // Limpar foto quando não há site ID definido (para evitar foto órfã)
  useEffect(() => {
    if (!currentSiteId) {
      setCouplePhotoUrlState(null);
    }
  }, [currentSiteId]);

  const applyModernTokens = (quizAnswers: QuizAnswers) => {
    console.log('🎨 Aplicando tokens modernos para:', quizAnswers);
    
    const profile = findBestModernTemplate(quizAnswers);
    const tokens = generateModernVisualTokens(profile);
    
    console.log('📋 Template selecionado:', profile.name, profile.id);
    console.log('🎨 Tokens gerados:', tokens);
    
    setTemplateProfile(profile);
    setModernTokens(tokens);
    setIsModernThemeActive(true);
    
    // Apply CSS
    const styleId = 'modern-visual-tokens';
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }
    
    const cssContent = applyModernVisualTokensToCSS(tokens);
    styleElement.textContent = cssContent;
    
    console.log('✅ CSS aplicado:', cssContent.substring(0, 200) + '...');
    
    // Aplicar classes no body
    document.body.classList.add('modern-theme-active');
    document.body.classList.add(`template-${profile.id}`);
    
    // Definir variáveis CSS globais adicionais
    document.documentElement.style.setProperty('--template-id', profile.id);
    document.documentElement.style.setProperty('--template-name', profile.name);
  };

  const resetModernTokens = () => {
    setModernTokens(null);
    setTemplateProfile(null);
    setIsModernThemeActive(false);
    const styleElement = document.getElementById('modern-visual-tokens');
    if (styleElement) {
      styleElement.remove();
    }
    document.body.classList.remove('modern-theme-active');
    // Remove todas as classes de template
    document.body.className = document.body.className.replace(/template-[\w-]+/g, '');
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
