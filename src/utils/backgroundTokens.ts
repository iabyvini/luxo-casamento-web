
import { TemplateProfile } from './templateProfiles';

export interface BackgroundToken {
  gradient: string;
  texture?: string;
  pattern?: string;
  overlay?: string;
}

export const BACKGROUND_TOKENS: Record<string, BackgroundToken> = {
  'romantic-garden': {
    gradient: 'linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 50%, #dda0dd 100%)',
    texture: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23dda0dd" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    pattern: 'scattered-petals'
  },
  'romantic-beach': {
    gradient: 'linear-gradient(135deg, #87CEEB 0%, #4A90E2 50%, #FFE4B5 100%)',
    texture: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%234A90E2" fill-opacity="0.05"%3E%3Cpath d="M20 20c0 11.046-8.954 20-20 20v20h40V20H20z"/%3E%3C/g%3E%3C/svg%3E")',
    pattern: 'gentle-waves'
  },
  'minimal-modern': {
    gradient: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
    texture: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23000000" fill-opacity="0.02"%3E%3Cpath d="M0 0h20v20H0V0zm10 10h10v10H10V10z"/%3E%3C/g%3E%3C/svg%3E")',
    pattern: 'subtle-grid'
  },
  'boho-forest': {
    gradient: 'linear-gradient(135deg, #f0e68c 0%, #dda0dd 30%, #d2691e 100%)',
    texture: 'url("data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23d2691e" fill-opacity="0.03"%3E%3Cpath d="M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z" fill-rule="nonzero"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    pattern: 'organic-shapes'
  },
  'classic-cathedral': {
    gradient: 'linear-gradient(135deg, #f5deb3 0%, #daa520 50%, #8b4513 100%)',
    texture: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill-rule="evenodd"%3E%3Cg fill="%23daa520" fill-opacity="0.04"%3E%3Cpath d="M0 100V.5h100V100H0zM50 .5a50 50 0 1 1 0 100 50 50 0 0 1 0-100z" fill-rule="nonzero"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    pattern: 'damask'
  },
  'vintage-mansion': {
    gradient: 'linear-gradient(135deg, #f5deb3 0%, #daa520 30%, #8b4513 100%)',
    texture: 'url("data:image/svg+xml,%3Csvg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%238b4513" fill-opacity="0.03"%3E%3Cpath d="M60 60c33.137 0 60-26.863 60-60s-26.863-60-60-60-60 26.863-60 60 26.863 60 60 60z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    pattern: 'vintage-wallpaper'
  }
};

export const getBackgroundToken = (templateProfile: TemplateProfile): BackgroundToken => {
  return BACKGROUND_TOKENS[templateProfile.id] || BACKGROUND_TOKENS['minimal-modern'];
};

export const generateBackgroundCSS = (backgroundToken: BackgroundToken): string => {
  return `
    --template-bg-gradient: ${backgroundToken.gradient};
    --template-bg-texture: ${backgroundToken.texture || 'none'};
    --template-bg-pattern: ${backgroundToken.pattern || 'none'};
  `;
};
