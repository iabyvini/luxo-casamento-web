
import { ModernTemplateProfile } from './modernTemplateProfiles';

export interface ModernVisualTokens {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    overlay: string;
  };
  typography: {
    heading: {
      family: string;
      weight: number;
    };
    body: {
      family: string;
      weight: number;
    };
    script: {
      family: string;
    };
  };
  layout: {
    heroStyle: string;
    spacing: string;
    borderRadius: string;
    shadows: string;
  };
  aesthetics: {
    photoTreatment: string;
    decorativeElements: string[];
    backgroundTexture?: string;
  };
}

export const generateModernVisualTokens = (profile: ModernTemplateProfile): ModernVisualTokens => {
  return {
    colors: {
      primary: profile.visual.primaryColor,
      secondary: profile.visual.secondaryColor,
      accent: profile.visual.accentColor,
      background: profile.visual.backgroundColor,
      text: profile.visual.textColor,
      overlay: profile.visual.overlayColor,
    },
    typography: {
      heading: {
        family: profile.typography.headingFont,
        weight: profile.typography.headingWeight,
      },
      body: {
        family: profile.typography.bodyFont,
        weight: profile.typography.bodyWeight,
      },
      script: {
        family: profile.typography.scriptFont,
      },
    },
    layout: {
      heroStyle: profile.layout.heroStyle,
      spacing: profile.layout.spacing,
      borderRadius: profile.layout.borderRadius,
      shadows: profile.layout.shadows,
    },
    aesthetics: {
      photoTreatment: profile.aesthetics.photoTreatment,
      decorativeElements: profile.aesthetics.decorativeElements,
      backgroundTexture: profile.aesthetics.backgroundTexture,
    },
  };
};

export const applyModernVisualTokensToCSS = (tokens: ModernVisualTokens): string => {
  return `
    :root {
      --modern-primary: ${tokens.colors.primary};
      --modern-secondary: ${tokens.colors.secondary};
      --modern-accent: ${tokens.colors.accent};
      --modern-background: ${tokens.colors.background};
      --modern-text: ${tokens.colors.text};
      --modern-overlay: ${tokens.colors.overlay};
      
      --modern-heading-font: ${tokens.typography.heading.family};
      --modern-heading-weight: ${tokens.typography.heading.weight};
      --modern-body-font: ${tokens.typography.body.family};
      --modern-body-weight: ${tokens.typography.body.weight};
      --modern-script-font: ${tokens.typography.script.family};
      
      --modern-spacing: ${tokens.layout.spacing === 'generous' ? '2rem' : tokens.layout.spacing === 'normal' ? '1.5rem' : '1rem'};
      --modern-border-radius: ${tokens.layout.borderRadius === 'soft' ? '12px' : tokens.layout.borderRadius === 'subtle' ? '6px' : '0px'};
    }

    /* Modern Hero Styles */
    .modern-hero-fullscreen {
      height: 100vh;
      background-size: cover;
      background-position: center;
      position: relative;
    }

    .modern-hero-overlay {
      background: var(--modern-overlay);
      position: absolute;
      inset: 0;
    }

    .modern-hero-content {
      position: relative;
      z-index: 10;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
    }

    /* Modern Typography */
    .modern-heading {
      font-family: var(--modern-heading-font), serif;
      font-weight: var(--modern-heading-weight);
      color: var(--modern-primary);
      line-height: 1.2;
      letter-spacing: -0.02em;
    }

    .modern-body {
      font-family: var(--modern-body-font), sans-serif;
      font-weight: var(--modern-body-weight);
      color: var(--modern-text);
      line-height: 1.6;
    }

    .modern-script {
      font-family: var(--modern-script-font), cursive;
      color: var(--modern-accent);
    }

    /* Modern Layout */
    .modern-section {
      padding: calc(var(--modern-spacing) * 3) var(--modern-spacing);
      background: var(--modern-background);
    }

    .modern-card {
      background: var(--modern-secondary);
      border-radius: var(--modern-border-radius);
      padding: var(--modern-spacing);
      ${tokens.layout.shadows !== 'none' ? `box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);` : ''}
      border: 1px solid rgba(0, 0, 0, 0.05);
    }

    /* Photo Treatments */
    .modern-photo-natural {
      filter: none;
    }

    .modern-photo-film {
      filter: contrast(1.1) saturate(0.9) brightness(1.05);
    }

    .modern-photo-dramatic {
      filter: contrast(1.2) saturate(0.8) brightness(0.95);
    }

    .modern-photo-soft {
      filter: brightness(1.1) saturate(0.95) contrast(0.95);
    }

    /* Animations */
    .modern-fade-in {
      animation: modernFadeIn 1.2s ease-out;
    }

    @keyframes modernFadeIn {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .modern-float {
      animation: modernFloat 6s ease-in-out infinite;
    }

    @keyframes modernFloat {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }

    /* Responsive */
    @media (max-width: 768px) {
      .modern-section {
        padding: calc(var(--modern-spacing) * 2) var(--modern-spacing);
      }
      
      .modern-hero-fullscreen {
        height: 70vh;
      }
    }
  `;
};
