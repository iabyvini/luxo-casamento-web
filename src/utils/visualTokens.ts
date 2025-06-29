
import { TemplateProfile } from '@/data/templateLibrary';

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
      primary: templateProfile.palette.primary,
      secondary: templateProfile.palette.secondary,
      accent: templateProfile.palette.accent,
      background: templateProfile.tokens.background,
    },
    typography: {
      fontFamilies: {
        heading: templateProfile.typography.heading,
        body: templateProfile.typography.body,
        accent: templateProfile.typography.accent
      },
      weights: {
        heading: 400,
        body: 300
      }
    },
    layout: {
      spacing: 'normal',
      borderRadius: 'soft',
      shadows: 'subtle',
      contentWidth: 'normal'
    },
    decorations: {
      heroElements: ['floral-background'],
      sectionDividers: ['decorative-line'],
      backgroundPatterns: ['watercolor-texture'],
      iconStyle: 'decorative'
    }
  };
};

export const applyVisualTokensToCSS = (visualTokens: VisualTokens): string => {
  return `
    :root {
      --primary-color: ${visualTokens.colors.primary};
      --secondary-color: ${visualTokens.colors.secondary};
      --accent-color: ${visualTokens.colors.accent};
      --background-gradient: ${visualTokens.colors.background};
      --font-heading: ${visualTokens.typography.fontFamilies.heading};
      --font-body: ${visualTokens.typography.fontFamilies.body};
      --font-accent: ${visualTokens.typography.fontFamilies.accent || visualTokens.typography.fontFamilies.heading};
      --weight-heading: ${visualTokens.typography.weights.heading};
      --weight-body: ${visualTokens.typography.weights.body};
    }

    .hero-dynamic-bg {
      background: var(--background-gradient);
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
