
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { ModernVisualTokens, generateModernVisualTokens, applyModernVisualTokensToCSS } from '@/utils/modernVisualTokens';
import { QuizAnswers } from '@/types/quiz';
import { findBestModernTemplate } from '@/utils/modernTemplateProfiles';
import { TemplateTokens, ModernVisualTokensContextType } from '@/types/modernVisualTokens';
import { useTemplateTokens } from '@/hooks/useTemplateTokens';
import { useCouplePhoto } from '@/hooks/useCouplePhoto';
import { useSiteIdDetection } from '@/hooks/useSiteIdDetection';

const ModernVisualTokensContext = createContext<ModernVisualTokensContextType | undefined>(undefined);

export const ModernVisualTokensProvider: React.FC<{ children: React.ReactNode; templateName?: string }> = ({ children, templateName }) => {
  const [modernTokens, setModernTokens] = useState<ModernVisualTokens | null>(null);
  const [isModernThemeActive, setIsModernThemeActive] = useState(false);
  const [couplePhotoUrl, setCouplePhotoUrlState] = useState<string | null>(null);
  const [templateProfile, setTemplateProfile] = useState<any | null>(null);
  const [templateTokens, setTemplateTokens] = useState<TemplateTokens | null>(null);
  const [currentSiteId, setCurrentSiteId] = useState<string | null>(null);
  const [appliedTemplateId, setAppliedTemplateId] = useState<string | null>(null);

  const { loadTemplateTokens, applyTokensToDOM } = useTemplateTokens();
  const { loadCouplePhotoFromDatabase, isLoading } = useCouplePhoto();
  const { detectSiteId } = useSiteIdDetection();

  // Aplicar tokens de template específico
  const applyTemplateTokens = useCallback((templateName: string) => {
    console.log('🔄 DEBUG - applyTemplateTokens chamada com:', templateName);
    
    // Evitar aplicação duplicada
    if (appliedTemplateId === templateName) {
      console.log('⚠️ DEBUG - Tokens já aplicados para:', templateName, ', pulando...');
      return;
    }
    
    const tokens = loadTemplateTokens(templateName);
    setTemplateTokens(tokens);
    setAppliedTemplateId(templateName);

    applyTokensToDOM(tokens);
    console.log('✅ DEBUG - Tokens aplicados com sucesso para:', templateName);
  }, [loadTemplateTokens, applyTokensToDOM, appliedTemplateId]);

  // Função para definir siteId e carregar foto do banco
  const setSiteId = useCallback((siteId: string) => {
    if (siteId && siteId !== currentSiteId && !isLoading) {
      console.log('📝 Definindo siteId:', siteId);
      setCurrentSiteId(siteId);
      loadCouplePhotoFromDatabase(siteId).then(photoUrl => {
        if (photoUrl) {
          setCouplePhotoUrlState(photoUrl);
        }
      });
    }
  }, [currentSiteId, isLoading, loadCouplePhotoFromDatabase]);

  // Função para atualizar foto (usada pelo componente PhotoUpload)
  const setCouplePhotoUrl = useCallback((url: string | null) => {
    console.log('💾 Atualizando foto no contexto:', url);
    setCouplePhotoUrlState(url);
  }, []);

  const applyModernTokens = useCallback((quizAnswers: QuizAnswers) => {
    console.log('🎨 DEBUG - applyModernTokens chamada para:', quizAnswers);
    
    const profile = findBestModernTemplate(quizAnswers);
    const tokens = generateModernVisualTokens(profile);
    
    console.log('📋 DEBUG - Template selecionado:', profile.name, profile.id);
    console.log('🎨 DEBUG - Tokens gerados:', tokens);
    
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
    
    console.log('✅ DEBUG - CSS aplicado:', cssContent.substring(0, 200) + '...');
    
    // Aplicar classes no body
    document.body.classList.add('modern-theme-active');
    document.body.classList.add(`template-${profile.id}`);
    
    // Definir variáveis CSS globais adicionais
    document.documentElement.style.setProperty('--template-id', profile.id);
    document.documentElement.style.setProperty('--template-name', profile.name);
  }, []);

  const resetModernTokens = useCallback(() => {
    setModernTokens(null);
    setTemplateProfile(null);
    setIsModernThemeActive(false);
    setAppliedTemplateId(null);
    const styleElement = document.getElementById('modern-visual-tokens');
    if (styleElement) {
      styleElement.remove();
    }
    document.body.classList.remove('modern-theme-active');
    // Remove todas as classes de template
    document.body.className = document.body.className.replace(/template-[\w-]+/g, '');
  }, []);

  // Detectar siteId automaticamente para URLs públicas (apenas uma vez)
  useEffect(() => {
    const initializeSiteId = async () => {
      if (currentSiteId || isLoading) return;
      
      const detectedSiteId = await detectSiteId();
      if (detectedSiteId) {
        setSiteId(detectedSiteId);
      }
    };

    initializeSiteId();
  }, [currentSiteId, isLoading, detectSiteId, setSiteId]);

  // Aplicar tokens automaticamente quando templateName muda (APENAS UMA VEZ)
  useEffect(() => {
    if (templateName && templateName !== appliedTemplateId) {
      console.log('🔄 DEBUG - useEffect templateName:', templateName);
      applyTemplateTokens(templateName);
    }
  }, [templateName, applyTemplateTokens, appliedTemplateId]);

  return (
    <ModernVisualTokensContext.Provider value={{ 
      modernTokens, 
      isModernThemeActive,
      couplePhotoUrl,
      templateProfile,
      templateTokens,
      applyModernTokens, 
      applyTemplateTokens,
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
