
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ModernVisualTokens, generateModernVisualTokens, applyModernVisualTokensToCSS } from '@/utils/modernVisualTokens';
import { QuizAnswers } from '@/types/quiz';
import { findBestModernTemplate } from '@/utils/modernTemplateProfiles';
import { supabase } from '@/integrations/supabase/client';

// Dinamicamente importa todos os tokens JSON
const tokenModules = import.meta.glob('/src/tokens/*.json', { eager: true });

interface TemplateTokens {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  fontFamily: string;
  headingFont: string;
  borderRadius: string;
}

interface ModernVisualTokensContextType {
  modernTokens: ModernVisualTokens | null;
  isModernThemeActive: boolean;
  couplePhotoUrl: string | null;
  templateProfile: any | null;
  templateTokens: TemplateTokens | null;
  applyModernTokens: (quizAnswers: QuizAnswers) => void;
  applyTemplateTokens: (templateName: string) => void;
  resetModernTokens: () => void;
  setCouplePhotoUrl: (url: string | null) => void;
  setSiteId: (siteId: string) => void;
}

const defaultTokens: TemplateTokens = {
  primaryColor: "#000000",
  secondaryColor: "#FFFFFF",
  accentColor: "#C0C0C0",
  backgroundColor: "#F9F9F9",
  fontFamily: "Inter",
  headingFont: "Inter",
  borderRadius: "4px"
};

const ModernVisualTokensContext = createContext<ModernVisualTokensContextType | undefined>(undefined);

export const ModernVisualTokensProvider: React.FC<{ children: React.ReactNode; templateName?: string }> = ({ children, templateName }) => {
  const [modernTokens, setModernTokens] = useState<ModernVisualTokens | null>(null);
  const [isModernThemeActive, setIsModernThemeActive] = useState(false);
  const [couplePhotoUrl, setCouplePhotoUrlState] = useState<string | null>(null);
  const [templateProfile, setTemplateProfile] = useState<any | null>(null);
  const [templateTokens, setTemplateTokens] = useState<TemplateTokens | null>(null);
  const [currentSiteId, setCurrentSiteId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Função para carregar tokens específicos do template
  const loadTemplateTokens = (templateName: string): TemplateTokens => {
    console.log('🎨 Carregando tokens para template:', templateName);
    console.log('📁 Módulos disponíveis:', Object.keys(tokenModules));
    
    // Normalizar nome do template para busca
    const normalizedName = templateName.toLowerCase().replace(/\s+/g, '-');
    
    // Buscar o módulo correspondente
    const matchingModule = Object.entries(tokenModules).find(([path]) => {
      const fileName = path.split('/').pop()?.replace('.json', '') || '';
      return fileName === normalizedName;
    });

    if (matchingModule) {
      const tokens = matchingModule[1] as any;
      console.log('✅ Tokens encontrados:', tokens.default || tokens);
      return tokens.default || tokens;
    }

    console.log('⚠️ Tokens não encontrados, usando padrão para:', templateName);
    return defaultTokens;
  };

  // Aplicar tokens de template específico
  const applyTemplateTokens = (templateName: string) => {
    console.log('🔄 Aplicando tokens do template:', templateName);
    
    const tokens = loadTemplateTokens(templateName);
    setTemplateTokens(tokens);

    // Aplicar CSS custom properties
    document.documentElement.style.setProperty('--template-primary', tokens.primaryColor);
    document.documentElement.style.setProperty('--template-secondary', tokens.secondaryColor);
    document.documentElement.style.setProperty('--template-accent', tokens.accentColor);
    document.documentElement.style.setProperty('--template-background', tokens.backgroundColor);
    document.documentElement.style.setProperty('--template-font-family', tokens.fontFamily);
    document.documentElement.style.setProperty('--template-heading-font', tokens.headingFont);
    document.documentElement.style.setProperty('--template-border-radius', tokens.borderRadius);

    // Também aplicar como variáveis modernas
    document.documentElement.style.setProperty('--modern-primary', tokens.primaryColor);
    document.documentElement.style.setProperty('--modern-secondary', tokens.secondaryColor);
    document.documentElement.style.setProperty('--modern-accent', tokens.accentColor);
    document.documentElement.style.setProperty('--modern-background', tokens.backgroundColor);
    document.documentElement.style.setProperty('--modern-body-font', tokens.fontFamily);
    document.documentElement.style.setProperty('--modern-heading-font', tokens.headingFont);

    console.log('✅ Tokens aplicados com sucesso');
  };

  // Aplicar tokens automaticamente quando templateName muda
  useEffect(() => {
    if (templateName) {
      applyTemplateTokens(templateName);
    }
  }, [templateName]);

  // Função para definir siteId e carregar foto do banco
  const setSiteId = (siteId: string) => {
    if (siteId && siteId !== currentSiteId && !isLoading) {
      console.log('📝 Definindo siteId:', siteId);
      setCurrentSiteId(siteId);
      loadCouplePhotoFromDatabase(siteId);
    }
  };

  // Carregar foto do banco de dados
  const loadCouplePhotoFromDatabase = async (siteId: string) => {
    if (isLoading) return;
    
    console.log('🗄️ Carregando foto do banco para siteId:', siteId);
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase
        .from('wedding_sites')
        .select('couple_photo_url')
        .eq('id', siteId)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('❌ Erro ao buscar foto do banco:', error);
        setCouplePhotoUrlState(null);
        return;
      }

      if (data?.couple_photo_url) {
        console.log('✅ Foto encontrada no banco:', data.couple_photo_url);
        setCouplePhotoUrlState(data.couple_photo_url);
      } else {
        console.log('ℹ️ Nenhuma foto encontrada no banco');
        setCouplePhotoUrlState(null);
      }
    } catch (error) {
      console.error('❌ Erro na consulta da foto:', error);
      setCouplePhotoUrlState(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Detectar siteId automaticamente para URLs públicas (apenas uma vez)
  useEffect(() => {
    const detectSiteId = async () => {
      if (currentSiteId || isLoading) return;
      
      const path = window.location.pathname;
      
      // Para rotas do editor: /editor/[siteId]
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
    };

    detectSiteId();
  }, []);

  // Função para atualizar foto (usada pelo componente PhotoUpload)
  const setCouplePhotoUrl = (url: string | null) => {
    console.log('💾 Atualizando foto no contexto:', url);
    setCouplePhotoUrlState(url);
  };

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
