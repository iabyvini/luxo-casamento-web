
// Sistema de tokens específicos para cada template da biblioteca estendida
export interface TemplateTokens {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontFamily: string;
  borderRadius: string;
  background: string;
  textColor?: string;
  gradients?: {
    hero?: string;
    section?: string;
  };
}

export const TEMPLATE_TOKENS: Record<string, TemplateTokens> = {
  // Templates da biblioteca estendida
  'toscana-elegante': {
    primaryColor: '#3B2F2F',
    secondaryColor: '#EDEDED',
    accentColor: '#A52A2A',
    fontFamily: 'Playfair Display',
    borderRadius: '8px',
    background: '#FAFAFA',
    textColor: '#2c2c2c',
    gradients: {
      hero: 'linear-gradient(135deg, #3B2F2F 0%, #A52A2A 100%)',
      section: 'linear-gradient(to right, #FAFAFA 0%, #EDEDED 100%)'
    }
  },
  'editorial-romantic': {
    primaryColor: '#B76E79',
    secondaryColor: '#FFF0F5',
    accentColor: '#F4C2C2',
    fontFamily: 'Cormorant Garamond',
    borderRadius: '10px',
    background: '#FFFBFB',
    textColor: '#4a4a4a',
    gradients: {
      hero: 'linear-gradient(135deg, #B76E79 0%, #F4C2C2 100%)',
      section: 'linear-gradient(to right, #FFFBFB 0%, #FFF0F5 100%)'
    }
  },
  'minimal-luxury': {
    primaryColor: '#1E1E1E',
    secondaryColor: '#FFFFFF',
    accentColor: '#C0C0C0',
    fontFamily: 'Inter',
    borderRadius: '0px',
    background: '#F9F9F9',
    textColor: '#1E1E1E',
    gradients: {
      hero: 'linear-gradient(135deg, #1E1E1E 0%, #C0C0C0 100%)',
      section: 'linear-gradient(to right, #F9F9F9 0%, #FFFFFF 100%)'
    }
  },
  'neutral-sophisticated': {
    primaryColor: '#706C61',
    secondaryColor: '#F6F2EB',
    accentColor: '#CBAE82',
    fontFamily: 'Lora',
    borderRadius: '5px',
    background: '#FDFBF9',
    textColor: '#3c3c3c',
    gradients: {
      hero: 'linear-gradient(135deg, #706C61 0%, #CBAE82 100%)',
      section: 'linear-gradient(to right, #FDFBF9 0%, #F6F2EB 100%)'
    }
  },
  'classic-contemporary': {
    primaryColor: '#4A3A2D',
    secondaryColor: '#FDFBF3',
    accentColor: '#C49A6C',
    fontFamily: 'Georgia',
    borderRadius: '6px',
    background: '#FFF8E7',
    textColor: '#2c2c2c',
    gradients: {
      hero: 'linear-gradient(135deg, #4A3A2D 0%, #C49A6C 100%)',
      section: 'linear-gradient(to right, #FFF8E7 0%, #FDFBF3 100%)'
    }
  },
  'natural-modern': {
    primaryColor: '#3E5F56',
    secondaryColor: '#EDF5EF',
    accentColor: '#A3C9A8',
    fontFamily: 'Work Sans',
    borderRadius: '6px',
    background: '#F5FBF7',
    textColor: '#2c2c2c',
    gradients: {
      hero: 'linear-gradient(135deg, #3E5F56 0%, #A3C9A8 100%)',
      section: 'linear-gradient(to right, #F5FBF7 0%, #EDF5EF 100%)'
    }
  },
  'boho-refined': {
    primaryColor: '#8C4B2D',
    secondaryColor: '#FFF6F0',
    accentColor: '#DDB892',
    fontFamily: 'Josefin Sans',
    borderRadius: '8px',
    background: '#FDF5F0',
    textColor: '#3c2f2f',
    gradients: {
      hero: 'linear-gradient(135deg, #8C4B2D 0%, #DDB892 100%)',
      section: 'linear-gradient(to right, #FDF5F0 0%, #FFF6F0 100%)'
    }
  },
  // Fallbacks para templates antigos
  'Modern Elegance': {
    primaryColor: '#1E1E1E',
    secondaryColor: '#FFFFFF',
    accentColor: '#C0C0C0',
    fontFamily: 'Inter',
    borderRadius: '4px',
    background: '#F9F9F9',
    textColor: '#1E1E1E'
  },
  'Boho Romance': {
    primaryColor: '#8C4B2D',
    secondaryColor: '#FFF6F0',
    accentColor: '#DDB892',
    fontFamily: 'Josefin Sans',
    borderRadius: '8px',
    background: '#FDF5F0',
    textColor: '#3c2f2f'
  },
  'Garden Romance': {
    primaryColor: '#3E5F56',
    secondaryColor: '#EDF5EF',
    accentColor: '#A3C9A8',
    fontFamily: 'Lora',
    borderRadius: '6px',
    background: '#F5FBF7',
    textColor: '#2c2c2c'
  },
  'Pure Minimalist': {
    primaryColor: '#000000',
    secondaryColor: '#FFFFFF',
    accentColor: '#777777',
    fontFamily: 'Inter',
    borderRadius: '0px',
    background: '#FAFAFA',
    textColor: '#000000'
  },
  'Forest Bohemian': {
    primaryColor: '#4A6741',
    secondaryColor: '#EDF7ED',
    accentColor: '#A2CFA5',
    fontFamily: 'Merriweather',
    borderRadius: '8px',
    background: '#F4FBF5',
    textColor: '#2c2c2c'
  },
  'Cathedral Elegance': {
    primaryColor: '#4A3A2D',
    secondaryColor: '#FDFBF3',
    accentColor: '#C49A6C',
    fontFamily: 'Georgia',
    borderRadius: '6px',
    background: '#FFF8E7',
    textColor: '#2c2c2c'
  },
  'Vintage Mansion': {
    primaryColor: '#6A4E42',
    secondaryColor: '#EFE5DC',
    accentColor: '#D9A5B3',
    fontFamily: 'EB Garamond',
    borderRadius: '6px',
    background: '#F7F2F0',
    textColor: '#3c2c2c'
  }
};

export const getTemplateTokens = (templateId: string): TemplateTokens => {
  const tokens = TEMPLATE_TOKENS[templateId];
  
  if (!tokens) {
    console.warn(`⚠️ Tokens não encontrados para template: ${templateId}`);
    // Fallback para um template padrão
    return TEMPLATE_TOKENS['minimal-luxury'];
  }
  
  return tokens;
};

export const applyTemplateTokensToCSS = (tokens: TemplateTokens, templateId: string): string => {
  return `
    /* Template-specific tokens for ${templateId} */
    .template-${templateId} {
      --primary-color: ${tokens.primaryColor};
      --secondary-color: ${tokens.secondaryColor};
      --accent-color: ${tokens.accentColor};
      --background-color: ${tokens.background};
      --text-color: ${tokens.textColor || tokens.primaryColor};
      --font-family-main: ${tokens.fontFamily}, serif;
      --border-radius: ${tokens.borderRadius};
      --hero-gradient: ${tokens.gradients?.hero || `linear-gradient(135deg, ${tokens.primaryColor} 0%, ${tokens.accentColor} 100%)`};
      --section-gradient: ${tokens.gradients?.section || `linear-gradient(to right, ${tokens.background} 0%, ${tokens.secondaryColor} 100%)`};
    }
    
    .template-${templateId} .template-preview-hero {
      background: var(--hero-gradient);
      color: white;
      font-family: var(--font-family-main);
    }
    
    .template-${templateId} .template-preview-content {
      background: var(--background-color);
      color: var(--text-color);
      font-family: var(--font-family-main);
    }
    
    .template-${templateId} .template-accent {
      color: var(--accent-color);
    }
    
    .template-${templateId} .template-button {
      background: var(--primary-color);
      color: white;
      border-radius: var(--border-radius);
      font-family: var(--font-family-main);
    }
    
    .template-${templateId} .template-card {
      background: var(--secondary-color);
      border-radius: var(--border-radius);
      border: 1px solid ${tokens.accentColor}20;
    }
  `;
};
