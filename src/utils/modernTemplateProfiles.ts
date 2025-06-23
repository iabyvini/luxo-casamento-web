
import { QuizAnswers } from "@/types/quiz";

export interface ModernTemplateProfile {
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
    backgroundColor: string;
    textColor: string;
    overlayColor: string;
  };
  typography: {
    headingFont: string;
    bodyFont: string;
    scriptFont: string;
    headingWeight: number;
    bodyWeight: number;
  };
  layout: {
    heroStyle: 'fullscreen' | 'split' | 'overlay';
    spacing: 'tight' | 'normal' | 'generous';
    borderRadius: 'none' | 'subtle' | 'soft';
    shadows: 'none' | 'subtle' | 'soft';
  };
  aesthetics: {
    photoTreatment: 'natural' | 'film' | 'dramatic' | 'soft';
    decorativeElements: string[];
    backgroundTexture?: string;
  };
}

export const MODERN_TEMPLATE_PROFILES: ModernTemplateProfile[] = [
  // Editorial Romântico
  {
    id: 'editorial-romantic',
    name: 'Editorial Romance',
    archetype: 'Romântico Editorial',
    mood: { romantic: 10, elegant: 9, playful: 3, natural: 6, classic: 7, modern: 8 },
    visual: {
      primaryColor: '#1a1a1a',
      secondaryColor: '#f8f6f3',
      accentColor: '#d4af37',
      backgroundColor: '#ffffff',
      textColor: '#2c2c2c',
      overlayColor: 'rgba(0, 0, 0, 0.3)'
    },
    typography: {
      headingFont: 'Playfair Display',
      bodyFont: 'Inter',
      scriptFont: 'Dancing Script',
      headingWeight: 400,
      bodyWeight: 300
    },
    layout: {
      heroStyle: 'fullscreen',
      spacing: 'generous',
      borderRadius: 'none',
      shadows: 'none'
    },
    aesthetics: {
      photoTreatment: 'natural',
      decorativeElements: ['fine-lines', 'minimal-ornaments'],
      backgroundTexture: 'subtle-grain'
    }
  },

  // Minimalista Luxo
  {
    id: 'minimal-luxury',
    name: 'Minimal Luxury',
    archetype: 'Minimalista Luxuoso',
    mood: { romantic: 5, elegant: 10, playful: 1, natural: 2, classic: 8, modern: 10 },
    visual: {
      primaryColor: '#000000',
      secondaryColor: '#f5f5f5',
      accentColor: '#c9a96e',
      backgroundColor: '#ffffff',
      textColor: '#333333',
      overlayColor: 'rgba(0, 0, 0, 0.4)'
    },
    typography: {
      headingFont: 'Cormorant Garamond',
      bodyFont: 'Inter',
      scriptFont: 'Allura',
      headingWeight: 300,
      bodyWeight: 300
    },
    layout: {
      heroStyle: 'fullscreen',
      spacing: 'generous',
      borderRadius: 'none',
      shadows: 'none'
    },
    aesthetics: {
      photoTreatment: 'dramatic',
      decorativeElements: ['geometric-lines', 'spacing'],
    }
  },

  // Neutro Sofisticado
  {
    id: 'neutral-sophisticated',
    name: 'Neutral Sophistication',
    archetype: 'Neutro Sofisticado',
    mood: { romantic: 7, elegant: 9, playful: 2, natural: 5, classic: 8, modern: 7 },
    visual: {
      primaryColor: '#2c2c2c',
      secondaryColor: '#f8f6f2',
      accentColor: '#a67c52',
      backgroundColor: '#fafafa',
      textColor: '#4a4a4a',
      overlayColor: 'rgba(44, 44, 44, 0.3)'
    },
    typography: {
      headingFont: 'Crimson Text',
      bodyFont: 'Inter',
      scriptFont: 'Great Vibes',
      headingWeight: 400,
      bodyWeight: 300
    },
    layout: {
      heroStyle: 'split',
      spacing: 'generous',
      borderRadius: 'subtle',
      shadows: 'subtle'
    },
    aesthetics: {
      photoTreatment: 'soft',
      decorativeElements: ['botanical-simple', 'thin-borders'],
    }
  },

  // Clássico Contemporâneo
  {
    id: 'classic-contemporary',
    name: 'Classic Contemporary',
    archetype: 'Clássico Contemporâneo',
    mood: { romantic: 8, elegant: 10, playful: 2, natural: 4, classic: 9, modern: 6 },
    visual: {
      primaryColor: '#1e1e1e',
      secondaryColor: '#f9f7f4',
      accentColor: '#b8860b',
      backgroundColor: '#ffffff',
      textColor: '#333333',
      overlayColor: 'rgba(30, 30, 30, 0.35)'
    },
    typography: {
      headingFont: 'Playfair Display',
      bodyFont: 'Source Sans Pro',
      scriptFont: 'Pinyon Script',
      headingWeight: 400,
      bodyWeight: 300
    },
    layout: {
      heroStyle: 'overlay',
      spacing: 'normal',
      borderRadius: 'subtle',
      shadows: 'soft'
    },
    aesthetics: {
      photoTreatment: 'film',
      decorativeElements: ['classic-ornaments', 'serif-details'],
    }
  },

  // Natural Moderno
  {
    id: 'natural-modern',
    name: 'Natural Modern',
    archetype: 'Natural Moderno',
    mood: { romantic: 6, elegant: 7, playful: 4, natural: 9, classic: 4, modern: 8 },
    visual: {
      primaryColor: '#2d3436',
      secondaryColor: '#f1f2f6',
      accentColor: '#6c5ce7',
      backgroundColor: '#ffffff',
      textColor: '#2d3436',
      overlayColor: 'rgba(45, 52, 54, 0.25)'
    },
    typography: {
      headingFont: 'Lora',
      bodyFont: 'Inter',
      scriptFont: 'Sacramento',
      headingWeight: 400,
      bodyWeight: 300
    },
    layout: {
      heroStyle: 'split',
      spacing: 'generous',
      borderRadius: 'soft',
      shadows: 'subtle'
    },
    aesthetics: {
      photoTreatment: 'natural',
      decorativeElements: ['organic-shapes', 'nature-inspired'],
    }
  },

  // Boho Refinado
  {
    id: 'boho-refined',
    name: 'Refined Bohemian',
    archetype: 'Boho Refinado',
    mood: { romantic: 8, elegant: 6, playful: 7, natural: 8, classic: 3, modern: 5 },
    visual: {
      primaryColor: '#3d2914',
      secondaryColor: '#f6f1eb',
      accentColor: '#d4a574',
      backgroundColor: '#fefcf9',
      textColor: '#5d4e37',
      overlayColor: 'rgba(61, 41, 20, 0.3)'
    },
    typography: {
      headingFont: 'Libre Baskerville',
      bodyFont: 'Inter',
      scriptFont: 'Satisfy',
      headingWeight: 400,
      bodyWeight: 300
    },
    layout: {
      heroStyle: 'overlay',
      spacing: 'normal',
      borderRadius: 'soft',
      shadows: 'subtle'
    },
    aesthetics: {
      photoTreatment: 'soft',
      decorativeElements: ['boho-elements', 'watercolor-touches'],
    }
  }
];

export const findBestModernTemplate = (answers: QuizAnswers): ModernTemplateProfile => {
  const moodScores = calculateMoodScore(answers);
  
  let bestMatch = MODERN_TEMPLATE_PROFILES[0];
  let bestScore = 0;

  MODERN_TEMPLATE_PROFILES.forEach(profile => {
    let score = 0;
    
    // Calcula similaridade entre mood scores
    Object.keys(moodScores).forEach(mood => {
      const userScore = moodScores[mood];
      const profileScore = profile.mood[mood as keyof typeof profile.mood];
      const similarity = 10 - Math.abs(userScore - profileScore);
      score += Math.max(0, similarity);
    });

    // Bônus por estilo específico
    if (profile.archetype.toLowerCase().includes(answers.estilo.toLowerCase())) {
      score += 25;
    }

    // Bônus por local
    if (answers.local === 'Igreja' && profile.id === 'classic-contemporary') score += 15;
    if (answers.local === 'Praia' && profile.id === 'natural-modern') score += 15;
    if (answers.local === 'Fazenda' && profile.id === 'boho-refined') score += 15;
    if (answers.local === 'Salão de Festas' && profile.id === 'minimal-luxury') score += 15;

    if (score > bestScore) {
      bestScore = score;
      bestMatch = profile;
    }
  });

  return bestMatch;
};

const calculateMoodScore = (answers: QuizAnswers): Record<string, number> => {
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
      scores.elegant += 7;
      break;
    case 'Minimalista':
      scores.modern += 10;
      scores.elegant += 8;
      break;
    case 'Boho':
      scores.natural += 9;
      scores.playful += 6;
      scores.romantic += 5;
      break;
    case 'Clássico':
      scores.classic += 10;
      scores.elegant += 9;
      break;
    case 'Vintage':
      scores.classic += 8;
      scores.romantic += 7;
      scores.elegant += 6;
      break;
    case 'Moderno':
      scores.modern += 10;
      scores.elegant += 7;
      break;
  }

  // Análise do tom
  switch (answers.tom) {
    case 'Elegante e formal':
      scores.elegant += 8;
      scores.classic += 6;
      break;
    case 'Divertido e descontraído':
      scores.playful += 8;
      scores.modern += 5;
      break;
    case 'Emotivo e romântico':
      scores.romantic += 10;
      break;
  }

  return scores;
};
