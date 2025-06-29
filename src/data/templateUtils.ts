
import { TemplateProfile, GalleryType, AnimationType } from './templateTypes';

export const createDefaultTokens = (template: Partial<TemplateProfile>) => ({
  primary: template.palette?.primary || '#8B5A3C',
  secondary: template.palette?.secondary || '#D4B08A',
  accent: template.palette?.accent || '#D4AF37',
  background: '#FFFFFF',
  surface: '#F8F9FA',
  text: '#2C3E50',
  textSecondary: '#6C757D',
  border: '#DEE2E6',
  fontFamily: template.fonts?.body || 'Inter',
  headingFont: template.fonts?.heading || 'Playfair Display',
  accentFont: template.fonts?.accent || 'Dancing Script',
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
    sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px rgba(0, 0, 0, 0.15)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.2)',
  },
  galleryType: template.galleryType || 'grid' as GalleryType,
  animationType: template.animationType || 'fade' as AnimationType
});
