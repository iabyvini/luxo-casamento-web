
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ModernVisualTokens, generateModernVisualTokens, applyModernVisualTokensToCSS } from '@/utils/modernVisualTokens';
import { QuizAnswers } from '@/types/quiz';
import { findBestModernTemplate } from '@/utils/modernTemplateProfiles';
import { supabase } from '@/integrations/supabase/client';

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

  // FASE 1: Detectar siteId corretamente para URLs públicas
  useEffect(() => {
    const detectSiteId = async () => {
      if (!currentSiteId) {
        const path = window.location.pathname;
        
        // Para rotas do editor: /editor/[siteId] - usar o siteId diretamente
        const editorMatch = path.match(/^\/editor\/([^\/]+)$/);
        if (editorMatch) {
          const realSiteId = editorMatch[1];
          console.log('🎯 Detectado siteId do editor:', realSiteId);
          setSiteId(realSiteId);
          return;
        }
        
        // Para sites públicos: /site/[slug] - buscar o siteId real no banco
        const publicMatch = path.match(/^\/site\/([^\/]+)$/);
        if (publicMatch) {
          const slug = publicMatch[1];
          console.log('🔍 Buscando siteId para slug público:', slug);
          
          try {
            const { data, error } = await supabase
              .from('wedding_sites')
              .select('id')
              .eq('slug', slug)
              .single();

            if (error) {
              console.error('❌ Erro ao buscar site:', error);
              return;
            }

            if (data) {
              console.log('✅ SiteId encontrado:', data.id);
              setSiteId(data.id);
            }
          } catch (error) {
            console.error('❌ Erro na consulta:', error);
          }
        }
      }
    };

    detectSiteId();
  }, [currentSiteId]);

  // FASE 2: Função para definir siteId e carregar foto
  const setSiteId = (siteId: string) => {
    console.log('📝 Definindo siteId:', siteId);
    setCurrentSiteId(siteId);
    
    // FASE 3: Carregar foto com fallback inteligente
    loadCouplePhoto(siteId);
  };

  // FASE 3: Sistema de fallback inteligente para carregamento da foto
  const loadCouplePhoto = async (siteId: string) => {
    console.log('📸 Carregando foto para siteId:', siteId);
    
    // Prioridade 1: Foto salva no localStorage
    const savedPhotoUrl = localStorage.getItem(`couplePhotoUrl_${siteId}`);
    if (savedPhotoUrl) {
      console.log('✅ Foto encontrada no localStorage:', savedPhotoUrl);
      setCouplePhotoUrlState(savedPhotoUrl);
      return;
    }

    // Prioridade 2: Verificar se há foto no banco (implementação futura)
    // Por enquanto, mantemos null para usar o sistema de placeholder existente
    console.log('ℹ️ Nenhuma foto encontrada, usando placeholder');
    setCouplePhotoUrlState(null);
  };

  // FASE 4: Função para salvar foto com sincronização
  const setCouplePhotoUrl = (url: string | null) => {
    console.log('💾 Salvando foto:', url);
    setCouplePhotoUrlState(url);
    
    if (currentSiteId) {
      if (url) {
        localStorage.setItem(`couplePhotoUrl_${currentSiteId}`, url);
        console.log('✅ Foto salva no localStorage para siteId:', currentSiteId);
      } else {
        localStorage.removeItem(`couplePhotoUrl_${currentSiteId}`);
        console.log('🗑️ Foto removida do localStorage para siteId:', currentSiteId);
      }
    }
  };

  // Limpar foto quando não há site ID definido
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
