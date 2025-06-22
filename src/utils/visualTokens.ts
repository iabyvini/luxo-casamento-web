
import { TemplateProfile } from './templateProfiles';

export interface VisualTokens {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    textureOverlay?: string;
    text: {
      primary: string;
      secondary: string;
      muted: string;
    };
  };
  gradients: {
    hero: string;
    section: string;
    card: string;
    button: string;
  };
  typography: {
    fontFamilies: {
      heading: string;
      body: string;
      accent?: string;
    };
    weights: {
      heading: number;
      body: number;
      bold: number;
    };
    sizes: {
      hero: string;
      title: string;
      subtitle: string;
      body: string;
      small: string;
    };
  };
  spacing: {
    sections: string;
    cards: string;
    elements: string;
    tight: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
    full: string;
  };
  shadows: {
    subtle: string;
    medium: string;
    large: string;
    glow: string;
  };
  decorations: {
    heroElements: DecorationElement[];
    dividers: DecorationElement[];
    backgrounds: DecorationElement[];
  };
}

export interface DecorationElement {
  type: string;
  svg?: string;
  className?: string;
  animation?: string;
}

export const generateVisualTokens = (profile: TemplateProfile): VisualTokens => {
  const baseTokens: VisualTokens = {
    colors: {
      primary: profile.visual.primaryColor,
      secondary: profile.visual.secondaryColor,
      accent: profile.visual.accentColor,
      background: profile.visual.backgroundGradient,
      textureOverlay: profile.visual.textureOverlay,
      text: {
        primary: getTextColor(profile.visual.primaryColor),
        secondary: getTextColor(profile.visual.secondaryColor, 0.8),
        muted: getTextColor(profile.visual.primaryColor, 0.6)
      }
    },
    gradients: {
      hero: profile.visual.backgroundGradient,
      section: generateSectionGradient(profile.visual),
      card: generateCardGradient(profile.visual),
      button: generateButtonGradient(profile.visual)
    },
    typography: {
      fontFamilies: {
        heading: profile.typography.headingFont,
        body: profile.typography.bodyFont,
        accent: profile.typography.accentFont
      },
      weights: {
        heading: profile.typography.headingWeight,
        body: profile.typography.bodyWeight,
        bold: Math.min(profile.typography.headingWeight + 100, 900)
      },
      sizes: generateTypographySizes(profile.layout.spacing)
    },
    spacing: generateSpacing(profile.layout.spacing),
    borderRadius: generateBorderRadius(profile.layout.borderRadius),
    shadows: generateShadows(profile.layout.shadows),
    decorations: generateDecorations(profile.decorations)
  };

  return baseTokens;
};

const getTextColor = (backgroundColor: string, opacity: number = 1): string => {
  // Simplified logic - in a real implementation, you'd calculate luminance
  const darkColors = ['#000000', '#8b4513', '#2c3e50', '#4A2F22'];
  const isDark = darkColors.some(color => backgroundColor.includes(color));
  
  if (isDark) {
    return `rgba(255, 255, 255, ${opacity})`;
  }
  return `rgba(0, 0, 0, ${opacity * 0.9})`;
};

const generateSectionGradient = (visual: TemplateProfile['visual']): string => {
  return `linear-gradient(45deg, ${visual.accentColor}22 0%, ${visual.secondaryColor}11 100%)`;
};

const generateCardGradient = (visual: TemplateProfile['visual']): string => {
  return `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, ${visual.accentColor}33 100%)`;
};

const generateButtonGradient = (visual: TemplateProfile['visual']): string => {
  return `linear-gradient(135deg, ${visual.primaryColor} 0%, ${visual.secondaryColor} 100%)`;
};

const generateTypographySizes = (spacing: 'tight' | 'normal' | 'loose') => {
  const baseMultiplier = spacing === 'tight' ? 0.9 : spacing === 'loose' ? 1.1 : 1;
  
  return {
    hero: `${3.5 * baseMultiplier}rem`,
    title: `${2.5 * baseMultiplier}rem`,
    subtitle: `${1.5 * baseMultiplier}rem`,
    body: `${1 * baseMultiplier}rem`,
    small: `${0.875 * baseMultiplier}rem`
  };
};

const generateSpacing = (spacing: 'tight' | 'normal' | 'loose') => {
  const multiplier = spacing === 'tight' ? 0.8 : spacing === 'loose' ? 1.3 : 1;
  
  return {
    sections: `${5 * multiplier}rem`,
    cards: `${2 * multiplier}rem`,
    elements: `${1.5 * multiplier}rem`,
    tight: `${0.5 * multiplier}rem`
  };
};

const generateBorderRadius = (radius: 'sharp' | 'soft' | 'rounded' | 'organic') => {
  switch (radius) {
    case 'sharp':
      return { small: '0', medium: '0', large: '0', full: '0' };
    case 'soft':
      return { small: '0.25rem', medium: '0.5rem', large: '0.75rem', full: '9999px' };
    case 'rounded':
      return { small: '0.5rem', medium: '1rem', large: '1.5rem', full: '9999px' };
    case 'organic':
      return { small: '1rem', medium: '2rem', large: '3rem', full: '50%' };
    default:
      return { small: '0.5rem', medium: '1rem', large: '1.5rem', full: '9999px' };
  }
};

const generateShadows = (shadows: 'none' | 'subtle' | 'medium' | 'dramatic') => {
  switch (shadows) {
    case 'none':
      return {
        subtle: 'none',
        medium: 'none',
        large: 'none',
        glow: 'none'
      };
    case 'subtle':
      return {
        subtle: '0 1px 3px rgba(0,0,0,0.1)',
        medium: '0 4px 6px rgba(0,0,0,0.1)',
        large: '0 10px 15px rgba(0,0,0,0.1)',
        glow: '0 0 20px rgba(0,0,0,0.1)'
      };
    case 'medium':
      return {
        subtle: '0 2px 4px rgba(0,0,0,0.15)',
        medium: '0 8px 16px rgba(0,0,0,0.15)',
        large: '0 20px 40px rgba(0,0,0,0.15)',
        glow: '0 0 30px rgba(0,0,0,0.2)'
      };
    case 'dramatic':
      return {
        subtle: '0 4px 8px rgba(0,0,0,0.25)',
        medium: '0 12px 24px rgba(0,0,0,0.25)',
        large: '0 32px 64px rgba(0,0,0,0.25)',
        glow: '0 0 50px rgba(0,0,0,0.3)'
      };
    default:
      return {
        subtle: '0 2px 4px rgba(0,0,0,0.1)',
        medium: '0 8px 16px rgba(0,0,0,0.1)',
        large: '0 20px 40px rgba(0,0,0,0.1)',
        glow: '0 0 30px rgba(0,0,0,0.15)'
      };
  }
};

const generateDecorations = (decorations: TemplateProfile['decorations']) => {
  return {
    heroElements: decorations.heroElements.map(element => ({
      type: element,
      className: `decoration-${element}`,
      animation: getDecorationAnimation(element)
    })),
    dividers: decorations.sectionDividers.map(divider => ({
      type: divider,
      svg: getSectionDividerSVG(divider),
      className: `divider-${divider}`
    })),
    backgrounds: decorations.backgroundPatterns.map(pattern => ({
      type: pattern,
      className: `bg-pattern-${pattern}`,
      svg: getBackgroundPatternSVG(pattern)
    }))
  };
};

const getDecorationAnimation = (element: string): string => {
  const floatingElements = ['hearts', 'butterflies', 'feathers', 'leaves'];
  if (floatingElements.includes(element)) {
    return 'floating-animation';
  }
  return 'fade-in';
};

const getSectionDividerSVG = (divider: string): string => {
  const svgMap: Record<string, string> = {
    'floral-line': `<svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg"><path d="M0,10 Q50,5 100,10 T200,10" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="100" cy="10" r="3" fill="currentColor"/></svg>`,
    'wave-line': `<svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg"><path d="M0,10 Q25,5 50,10 T100,10 T150,10 T200,10" stroke="currentColor" stroke-width="2" fill="none"/></svg>`,
    'thin-line': `<svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="10" x2="200" y2="10" stroke="currentColor" stroke-width="1"/></svg>`,
    'ornate-line': `<svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg"><path d="M0,10 L80,10 Q90,5 100,10 Q110,15 120,10 L200,10" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="100" cy="10" r="4" fill="currentColor"/></svg>`
  };
  
  return svgMap[divider] || svgMap['thin-line'];
};

const getBackgroundPatternSVG = (pattern: string): string => {
  const patternMap: Record<string, string> = {
    'scattered-petals': `url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="currentColor" fill-opacity="0.1"%3E%3Ccircle cx="15" cy="15" r="2"/%3E%3Ccircle cx="45" cy="25" r="1.5"/%3E%3Ccircle cx="25" cy="45" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    'gentle-waves': `url("data:image/svg+xml,%3Csvg width="100" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0,10 Q25,5 50,10 T100,10" stroke="currentColor" stroke-width="1" fill="none" opacity="0.2"/%3E%3C/svg%3E")`,
    'subtle-grid': `url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg stroke="currentColor" stroke-width="1" opacity="0.1"%3E%3Cpath d="M40 0v40H0V0z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
  };
  
  return patternMap[pattern] || '';
};

export const applyVisualTokensToCSS = (tokens: VisualTokens): string => {
  return `
    :root {
      --color-primary: ${tokens.colors.primary};
      --color-secondary: ${tokens.colors.secondary};
      --color-accent: ${tokens.colors.accent};
      --color-text-primary: ${tokens.colors.text.primary};
      --color-text-secondary: ${tokens.colors.text.secondary};
      --color-text-muted: ${tokens.colors.text.muted};
      
      --gradient-hero: ${tokens.gradients.hero};
      --gradient-section: ${tokens.gradients.section};
      --gradient-card: ${tokens.gradients.card};
      --gradient-button: ${tokens.gradients.button};
      
      --font-heading: ${tokens.typography.fontFamilies.heading};
      --font-body: ${tokens.typography.fontFamilies.body};
      --font-accent: ${tokens.typography.fontFamilies.accent || tokens.typography.fontFamilies.heading};
      
      --weight-heading: ${tokens.typography.weights.heading};
      --weight-body: ${tokens.typography.weights.body};
      --weight-bold: ${tokens.typography.weights.bold};
      
      --size-hero: ${tokens.typography.sizes.hero};
      --size-title: ${tokens.typography.sizes.title};
      --size-subtitle: ${tokens.typography.sizes.subtitle};
      --size-body: ${tokens.typography.sizes.body};
      --size-small: ${tokens.typography.sizes.small};
      
      --spacing-sections: ${tokens.spacing.sections};
      --spacing-cards: ${tokens.spacing.cards};
      --spacing-elements: ${tokens.spacing.elements};
      --spacing-tight: ${tokens.spacing.tight};
      
      --radius-small: ${tokens.borderRadius.small};
      --radius-medium: ${tokens.borderRadius.medium};
      --radius-large: ${tokens.borderRadius.large};
      --radius-full: ${tokens.borderRadius.full};
      
      --shadow-subtle: ${tokens.shadows.subtle};
      --shadow-medium: ${tokens.shadows.medium};
      --shadow-large: ${tokens.shadows.large};
      --shadow-glow: ${tokens.shadows.glow};
    }
    
    .hero-background {
      background: var(--gradient-hero);
      ${tokens.colors.textureOverlay ? `background-image: ${tokens.colors.textureOverlay};` : ''}
    }
    
    .section-background {
      background: var(--gradient-section);
    }
    
    .card-background {
      background: var(--gradient-card);
    }
    
    .button-gradient {
      background: var(--gradient-button);
    }
    
    .floating-animation {
      animation: float 6s ease-in-out infinite;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
  `;
};
