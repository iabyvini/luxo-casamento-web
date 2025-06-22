
import { TemplateProfile } from './templateProfiles';

export interface VisualTokens {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    textureOverlay?: string;
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
    };
  };
  layout: {
    spacing: 'tight' | 'normal' | 'loose';
    borderRadius: 'sharp' | 'soft' | 'rounded' | 'organic';
    shadows: 'none' | 'subtle' | 'medium' | 'dramatic';
    contentWidth: 'narrow' | 'normal' | 'wide';
  };
  decorations: {
    heroElements: string[];
    sectionDividers: string[];
    backgroundPatterns: string[];
    iconStyle: 'outlined' | 'filled' | 'minimal' | 'decorative';
  };
}

export const generateVisualTokens = (templateProfile: TemplateProfile): VisualTokens => {
  return {
    colors: {
      primary: templateProfile.visual.primaryColor,
      secondary: templateProfile.visual.secondaryColor,
      accent: templateProfile.visual.accentColor,
      background: templateProfile.visual.backgroundGradient,
      textureOverlay: templateProfile.visual.textureOverlay
    },
    typography: {
      fontFamilies: {
        heading: templateProfile.typography.headingFont,
        body: templateProfile.typography.bodyFont,
        accent: templateProfile.typography.accentFont
      },
      weights: {
        heading: templateProfile.typography.headingWeight,
        body: templateProfile.typography.bodyWeight
      }
    },
    layout: templateProfile.layout,
    decorations: templateProfile.decorations
  };
};

export const applyVisualTokensToCSS = (visualTokens: VisualTokens): string => {
  return `
    :root {
      --primary-color: ${visualTokens.colors.primary};
      --secondary-color: ${visualTokens.colors.secondary};
      --accent-color: ${visualTokens.colors.accent};
      --background-gradient: ${visualTokens.colors.background};
      --texture-overlay: ${visualTokens.colors.textureOverlay || 'none'};
      --font-heading: ${visualTokens.typography.fontFamilies.heading};
      --font-body: ${visualTokens.typography.fontFamilies.body};
      --font-accent: ${visualTokens.typography.fontFamilies.accent || visualTokens.typography.fontFamilies.heading};
      --weight-heading: ${visualTokens.typography.weights.heading};
      --weight-body: ${visualTokens.typography.weights.body};
    }

    .hero-dynamic-bg {
      background: var(--background-gradient);
      background-image: var(--texture-overlay);
    }

    .dynamic-heading {
      font-family: var(--font-heading);
      font-weight: var(--weight-heading);
    }

    .dynamic-body {
      font-family: var(--font-body);
      font-weight: var(--weight-body);
    }

    .floating-animation {
      animation: float 6s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }

    .animate-fade-in {
      animation: fadeIn 1s ease-in;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
};
