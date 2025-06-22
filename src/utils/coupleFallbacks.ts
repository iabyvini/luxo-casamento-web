
import { TemplateProfile } from './templateProfiles';

export const COUPLE_FALLBACKS: Record<string, string> = {
  'romantic-garden': 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop&crop=faces',
  'romantic-beach': 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop&crop=faces',
  'minimal-modern': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces',
  'boho-forest': 'https://images.unsplash.com/photo-1537420327992-d6e192287183?w=400&h=400&fit=crop&crop=faces',
  'classic-cathedral': 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=400&fit=crop&crop=faces',
  'vintage-mansion': 'https://images.unsplash.com/photo-1594736797933-d0c1fec2061f?w=400&h=400&fit=crop&crop=faces'
};

export const getFallbackImage = (templateProfile: TemplateProfile): string => {
  return COUPLE_FALLBACKS[templateProfile.id] || COUPLE_FALLBACKS['romantic-garden'];
};

export const getFrameStyle = (templateProfile: TemplateProfile) => {
  const frameStyles = {
    'romantic-garden': {
      borderRadius: 'rounded-3xl',
      border: 'border-4 border-pink-200',
      shadow: 'shadow-pink-200/50 shadow-2xl',
      overlay: 'bg-gradient-to-br from-pink-50/20 to-rose-100/20'
    },
    'romantic-beach': {
      borderRadius: 'rounded-2xl',
      border: 'border-4 border-blue-200',
      shadow: 'shadow-blue-200/50 shadow-2xl',
      overlay: 'bg-gradient-to-br from-blue-50/20 to-cyan-100/20'
    },
    'minimal-modern': {
      borderRadius: 'rounded-lg',
      border: 'border-2 border-gray-300',
      shadow: 'shadow-gray-300/30 shadow-lg',
      overlay: 'bg-white/10'
    },
    'boho-forest': {
      borderRadius: 'rounded-full',
      border: 'border-4 border-amber-200',
      shadow: 'shadow-amber-200/50 shadow-2xl',
      overlay: 'bg-gradient-to-br from-amber-50/20 to-orange-100/20'
    },
    'classic-cathedral': {
      borderRadius: 'rounded-xl',
      border: 'border-4 border-yellow-300',
      shadow: 'shadow-yellow-300/50 shadow-2xl',
      overlay: 'bg-gradient-to-br from-yellow-50/20 to-amber-100/20'
    },
    'vintage-mansion': {
      borderRadius: 'rounded-2xl',
      border: 'border-4 border-amber-300',
      shadow: 'shadow-amber-300/50 shadow-2xl',
      overlay: 'bg-gradient-to-br from-amber-50/20 to-yellow-100/20'
    }
  };

  return frameStyles[templateProfile.id] || frameStyles['romantic-garden'];
};
