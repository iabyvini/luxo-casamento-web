import { QuizAnswers } from "@/types/quiz";
import { generateVisualTokens, applyVisualTokensToCSS, VisualTokens } from "./visualTokens";

export interface TemplateProfile {
  id: string;
  name: string;
  archetype: string;
  mood: {
    romantic: number;
    elegant: number;
    playful: number;
    natural: number;
    classic: number;
    modern: number;
  };
  visual: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundGradient: string;
    textureOverlay?: string;
  };
  typography: {
    headingFont: string;
    bodyFont: string;
    accentFont?: string;
    headingWeight: number;
    bodyWeight: number;
  };
  decorations: {
    heroElements: string[];
    sectionDividers: string[];
    backgroundPatterns: string[];
    iconStyle: 'outlined' | 'filled' | 'minimal' | 'decorative';
  };
  layout: {
    spacing: 'tight' | 'normal' | 'loose';
    borderRadius: 'sharp' | 'soft' | 'rounded' | 'organic';
    shadows: 'none' | 'subtle' | 'medium' | 'dramatic';
    contentWidth: 'narrow' | 'normal' | 'wide';
  };
  emotions: {
    welcomeKeywords: string[];
    toneAdjectives: string[];
    visualMetaphors: string[];
  };
}

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

export const calculateMoodScore = (answers: QuizAnswers): Record<string, number> => {
  const scores = {
    romantic: 0,
    elegant: 0,
    playful: 0,
    natural: 0,
    classic: 0,
    modern: 0
  };

  // Análise do estilo
  switch (answers.estilo) {
    case 'Romântico':
      scores.romantic += 10;
      scores.elegant += 6;
      break;
    case 'Minimalista':
      scores.modern += 10;
      scores.elegant += 8;
      break;
    case 'Boho':
      scores.natural += 10;
      scores.playful += 8;
      scores.romantic += 6;
      break;
    case 'Clássico':
      scores.classic += 10;
      scores.elegant += 9;
      break;
    case 'Vintage':
      scores.classic += 8;
      scores.romantic += 7;
      scores.elegant += 8;
      break;
    case 'Moderno':
      scores.modern += 10;
      scores.elegant += 7;
      break;
  }

  // Análise do local
  switch (answers.local) {
    case 'Praia':
      scores.natural += 8;
      scores.playful += 6;
      scores.romantic += 5;
      break;
    case 'Fazenda':
      scores.natural += 10;
      scores.romantic += 7;
      break;
    case 'Igreja':
      scores.classic += 8;
      scores.elegant += 7;
      break;
    case 'Salão de Festas':
      scores.elegant += 6;
      scores.classic += 4;
      break;
  }

  // Análise do tom
  switch (answers.tom) {
    case 'Elegante e formal':
      scores.elegant += 8;
      scores.classic += 6;
      break;
    case 'Divertido e descontraído':
      scores.playful += 10;
      scores.modern += 5;
      break;
    case 'Emotivo e romântico':
      scores.romantic += 10;
      scores.elegant += 4;
      break;
  }

  // Análise das cores
  switch (answers.cores) {
    case 'Rosa claro':
      scores.romantic += 8;
      scores.playful += 4;
      break;
    case 'Azul':
      scores.elegant += 6;
      scores.classic += 4;
      break;
    case 'Verde':
      scores.natural += 8;
      scores.romantic += 4;
      break;
    case 'Dourado':
      scores.elegant += 8;
      scores.classic += 6;
      break;
    case 'Neutros':
      scores.elegant += 6;
      scores.modern += 4;
      break;
  }

  return scores;
};

export const findBestTemplateProfile = (answers: QuizAnswers): TemplateProfile => {
  const moodScores = calculateMoodScore(answers);
  
  let bestMatch = TEMPLATE_PROFILES[0];
  let bestScore = 0;

  TEMPLATE_PROFILES.forEach(profile => {
    let score = 0;
    
    // Calcula a similaridade entre os mood scores
    Object.keys(moodScores).forEach(mood => {
      const userScore = moodScores[mood];
      const profileScore = profile.mood[mood as keyof typeof profile.mood];
      
      // Penaliza diferenças grandes, recompensa similaridades
      const similarity = 10 - Math.abs(userScore - profileScore);
      score += Math.max(0, similarity);
    });

    // Bônus por combinação específica de estilo + local
    const archetype = `${answers.estilo} + ${answers.local}`;
    if (profile.archetype.includes(answers.estilo)) {
      score += 20;
    }
    if (profile.archetype.includes(answers.local)) {
      score += 15;
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = profile;
    }
  });

  return bestMatch;
};

export const getProfileVisualTokens = (profile: TemplateProfile) => {
  return {
    colors: {
      primary: profile.visual.primaryColor,
      secondary: profile.visual.secondaryColor,
      accent: profile.visual.accentColor,
      background: profile.visual.backgroundGradient,
      textureOverlay: profile.visual.textureOverlay
    },
    typography: {
      heading: profile.typography.headingFont,
      body: profile.typography.bodyFont,
      accent: profile.typography.accentFont,
      headingWeight: profile.typography.headingWeight,
      bodyWeight: profile.typography.bodyWeight
    },
    layout: profile.layout,
    decorations: profile.decorations
  };
};

// Re-export functions from visualTokens for backward compatibility
export { generateVisualTokens, applyVisualTokensToCSS, type VisualTokens };
