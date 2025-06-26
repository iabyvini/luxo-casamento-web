
import { TemplateProfile } from "@/types/templateProfile";

export const TEMPLATE_PROFILES: TemplateProfile[] = [
  // Romântico + Diferentes contextos
  {
    id: 'romantic-garden',
    name: 'Garden Romance',
    archetype: 'Romântico + Jardim/Fazenda',
    mood: { romantic: 10, elegant: 8, playful: 4, natural: 9, classic: 6, modern: 2 },
    visual: {
      primaryColor: '#8fbc8f',
      secondaryColor: '#dda0dd',
      accentColor: '#f0f8ff',
      backgroundGradient: 'linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 50%, #dda0dd 100%)',
      textureOverlay: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23dda0dd" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
    },
    typography: {
      headingFont: 'Playfair Display',
      bodyFont: 'Inter',
      accentFont: 'Dancing Script',
      headingWeight: 700,
      bodyWeight: 400
    },
    decorations: {
      heroElements: ['roses', 'vines', 'butterflies', 'hearts'],
      sectionDividers: ['floral-line', 'vine-border'],
      backgroundPatterns: ['scattered-petals', 'watercolor-wash'],
      iconStyle: 'decorative'
    },
    layout: {
      spacing: 'normal',
      borderRadius: 'organic',
      shadows: 'medium',
      contentWidth: 'normal'
    },
    emotions: {
      welcomeKeywords: ['florescer', 'jardim', 'natureza', 'amor eterno'],
      toneAdjectives: ['delicado', 'encantador', 'poético'],
      visualMetaphors: ['flores que desabrocham', 'jardim secreto', 'primavera do amor']
    }
  },
  {
    id: 'romantic-beach',
    name: 'Seaside Romance',
    archetype: 'Romântico + Praia',
    mood: { romantic: 10, elegant: 7, playful: 6, natural: 8, classic: 4, modern: 3 },
    visual: {
      primaryColor: '#4A90E2',
      secondaryColor: '#87CEEB',
      accentColor: '#FFE4B5',
      backgroundGradient: 'linear-gradient(135deg, #87CEEB 0%, #4A90E2 50%, #FFE4B5 100%)',
      textureOverlay: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%234A90E2" fill-opacity="0.1"%3E%3Cpath d="M20 20c0 11.046-8.954 20-20 20v20h40V20H20z"/%3E%3C/g%3E%3C/svg%3E")'
    },
    typography: {
      headingFont: 'Playfair Display',
      bodyFont: 'Inter',
      accentFont: 'Caveat',
      headingWeight: 600,
      bodyWeight: 400
    },
    decorations: {
      heroElements: ['waves', 'seashells', 'starfish', 'hearts'],
      sectionDividers: ['wave-line', 'nautical-rope'],
      backgroundPatterns: ['gentle-waves', 'sea-foam'],
      iconStyle: 'outlined'
    },
    layout: {
      spacing: 'loose',
      borderRadius: 'soft',
      shadows: 'subtle',
      contentWidth: 'wide'
    },
    emotions: {
      welcomeKeywords: ['ondas', 'mar', 'horizonte', 'brisa'],
      toneAdjectives: ['sereno', 'refrescante', 'livre'],
      visualMetaphors: ['ondas que se encontram', 'horizonte infinito', 'brisa do amor']
    }
  },
  
  // Minimalista + Diferentes contextos
  {
    id: 'minimal-modern',
    name: 'Pure Minimalist',
    archetype: 'Minimalista + Moderno',
    mood: { romantic: 3, elegant: 9, playful: 2, natural: 2, classic: 4, modern: 10 },
    visual: {
      primaryColor: '#000000',
      secondaryColor: '#ffffff',
      accentColor: '#f5f5f5',
      backgroundGradient: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
    },
    typography: {
      headingFont: 'Inter',
      bodyFont: 'Inter',
      headingWeight: 700,
      bodyWeight: 400
    },
    decorations: {
      heroElements: ['geometric-lines', 'minimal-dots'],
      sectionDividers: ['thin-line', 'dot-separator'],
      backgroundPatterns: ['subtle-grid'],
      iconStyle: 'minimal'
    },
    layout: {
      spacing: 'loose',
      borderRadius: 'sharp',
      shadows: 'none',
      contentWidth: 'narrow'
    },
    emotions: {
      welcomeKeywords: ['essência', 'simplicidade', 'clareza'],
      toneAdjectives: ['limpo', 'direto', 'elegante'],
      visualMetaphors: ['linhas puras', 'espaço respira', 'beleza simples']
    }
  },

  // Boho + Diferentes contextos
  {
    id: 'boho-forest',
    name: 'Forest Bohemian',
    archetype: 'Boho + Natureza',
    mood: { romantic: 7, elegant: 5, playful: 8, natural: 10, classic: 3, modern: 4 },
    visual: {
      primaryColor: '#d2691e',
      secondaryColor: '#dda0dd',
      accentColor: '#f0e68c',
      backgroundGradient: 'linear-gradient(135deg, #f0e68c 0%, #dda0dd 30%, #d2691e 100%)',
      textureOverlay: 'url("data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23d2691e" fill-opacity="0.1"%3E%3Cpath d="M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z" fill-rule="nonzero"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
    },
    typography: {
      headingFont: 'Dancing Script',
      bodyFont: 'Inter',
      accentFont: 'Caveat',
      headingWeight: 700,
      bodyWeight: 400
    },
    decorations: {
      heroElements: ['feathers', 'dreamcatcher', 'leaves', 'mandalas'],
      sectionDividers: ['vine-line', 'feather-border'],
      backgroundPatterns: ['organic-shapes', 'watercolor-splash'],
      iconStyle: 'decorative'
    },
    layout: {
      spacing: 'normal',
      borderRadius: 'organic',
      shadows: 'medium',
      contentWidth: 'normal'
    },
    emotions: {
      welcomeKeywords: ['liberdade', 'alma', 'natureza', 'arte'],
      toneAdjectives: ['livre', 'autêntico', 'criativo'],
      visualMetaphors: ['espírito livre', 'arte da vida', 'conexão natural']
    }
  },

  // Clássico + Diferentes contextos
  {
    id: 'classic-cathedral',
    name: 'Cathedral Elegance',
    archetype: 'Clássico + Igreja',
    mood: { romantic: 8, elegant: 10, playful: 2, natural: 3, classic: 10, modern: 1 },
    visual: {
      primaryColor: '#8b4513',
      secondaryColor: '#daa520',
      accentColor: '#f5deb3',
      backgroundGradient: 'linear-gradient(135deg, #f5deb3 0%, #daa520 50%, #8b4513 100%)',
      textureOverlay: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill-rule="evenodd"%3E%3Cg fill="%23daa520" fill-opacity="0.1"%3E%3Cpath d="M0 100V.5h100V100H0zM50 .5a50 50 0 1 1 0 100 50 50 0 0 1 0-100z" fill-rule="nonzero"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
    },
    typography: {
      headingFont: 'Cormorant Garamond',
      bodyFont: 'Inter',
      accentFont: 'Crimson Text',
      headingWeight: 700,
      bodyWeight: 400
    },
    decorations: {
      heroElements: ['ornate-borders', 'crowns', 'flourishes', 'crosses'],
      sectionDividers: ['ornate-line', 'classic-border'],
      backgroundPatterns: ['damask', 'baroque-pattern'],
      iconStyle: 'decorative'
    },
    layout: {
      spacing: 'normal',
      borderRadius: 'soft',
      shadows: 'dramatic',
      contentWidth: 'normal'
    },
    emotions: {
      welcomeKeywords: ['tradição', 'sagrado', 'solene', 'eternidade'],
      toneAdjectives: ['majestoso', 'reverente', 'atemporal'],
      visualMetaphors: ['união sagrada', 'tradição eterna', 'momento solene']
    }
  },

  // Vintage + Diferentes contextos
  {
    id: 'vintage-mansion',
    name: 'Vintage Mansion',
    archetype: 'Vintage + Salão de Festas',
    mood: { romantic: 8, elegant: 9, playful: 5, natural: 4, classic: 9, modern: 2 },
    visual: {
      primaryColor: '#8b4513',
      secondaryColor: '#daa520',
      accentColor: '#f5deb3',
      backgroundGradient: 'linear-gradient(135deg, #f5deb3 0%, #daa520 30%, #8b4513 100%)',
      textureOverlay: 'url("data:image/svg+xml,%3Csvg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%238b4513" fill-opacity="0.05"%3E%3Cpath d="M60 60c33.137 0 60-26.863 60-60s-26.863-60-60-60-60 26.863-60 60 26.863 60 60 60z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
    },
    typography: {
      headingFont: 'Crimson Text',
      bodyFont: 'Inter',
      accentFont: 'Dancing Script',
      headingWeight: 600,
      bodyWeight: 400
    },
    decorations: {
      heroElements: ['vintage-frames', 'lace-patterns', 'antique-ornaments'],
      sectionDividers: ['vintage-line', 'lace-border'],
      backgroundPatterns: ['vintage-wallpaper', 'aged-paper'],
      iconStyle: 'decorative'
    },
    layout: {
      spacing: 'normal',
      borderRadius: 'soft',
      shadows: 'medium',
      contentWidth: 'normal'
    },
    emotions: {
      welcomeKeywords: ['nostalgia', 'charme', 'memórias', 'história'],
      toneAdjectives: ['charmoso', 'nostálgico', 'elegante'],
      visualMetaphors: ['carta de amor', 'memórias douradas', 'história atemporal']
    }
  }
];
