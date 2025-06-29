
import React, { createContext, useContext, ReactNode } from 'react';

interface ModernVisualTokens {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  fontFamily: string;
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
}

const defaultTokens: ModernVisualTokens = {
  primary: '#8B5A3C',
  secondary: '#D4B08A',
  accent: '#F4E5D3',
  background: '#FDFBF7',
  surface: '#FFFFFF',
  text: '#2D2D2D',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
  fontFamily: 'Inter, sans-serif',
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
};

const ModernVisualTokensContext = createContext<ModernVisualTokens>(defaultTokens);

interface ModernVisualTokensProviderProps {
  children: ReactNode;
  templateName?: string;
}

export const ModernVisualTokensProvider = ({ 
  children, 
  templateName 
}: ModernVisualTokensProviderProps) => {
  // Para agora, sempre usar os tokens padrão
  // Quando novos templates forem adicionados, podemos customizar baseado no templateName
  
  return (
    <ModernVisualTokensContext.Provider value={defaultTokens}>
      {children}
    </ModernVisualTokensContext.Provider>
  );
};

export const useModernVisualTokens = () => {
  const context = useContext(ModernVisualTokensContext);
  if (!context) {
    throw new Error('useModernVisualTokens must be used within a ModernVisualTokensProvider');
  }
  return context;
};
