
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
  // 1. Editorial Romântico - Baseado na imagem de referência
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
      overlayColor: 'rgba(0, 0, 0, 0.4)'
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
      photoTreatment: 'dramatic',
      decorativeElements: ['fine-lines', 'minimal-ornaments'],
      backgroundTexture: 'subtle-grain'
    }
  },

  // 2. Minimalista Luxo - Baseado na imagem preta/branca
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
      overlayColor: 'rgba(0, 0, 0, 0.5)'
    },
    typography: {
      headingFont: 'Inter',
      bodyFont: 'Inter',
      scriptFont: 'Allura',
      headingWeight: 200,
      bodyWeight: 300
    },
    layout: {
      heroStyle: 'split',
      spacing: 'generous',
      borderRadius: 'none',
      shadows: 'none'
    },
    aesthetics: {
      photoTreatment: 'dramatic',
      decorativeElements: ['geometric-lines', 'negative-space'],
    }
  },

  // 3. Boho Refinado - Baseado nas imagens com elementos decorativos
  {
    id: 'boho-refined',
    name: 'Refined Bohemian',
    archetype: 'Boho Refinado',
    mood: { romantic: 8, elegant: 6, playful: 7, natural: 8, classic: 3, modern: 5 },
    visual: {
      primaryColor: '#8B4513',
      secondaryColor: '#F5E6D3',
      accentColor: '#D2691E',
      backgroundColor: '#FDF5E6',
      textColor: '#5D4037',
      overlayColor: 'rgba(139, 69, 19, 0.3)'
    },
    typography: {
      headingFont: 'Dancing Script',
      bodyFont: 'Inter',
      scriptFont: 'Dancing Script',
      headingWeight: 700,
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
      decorativeElements: ['boho-elements', 'floral-ornaments'],
    }
  },

  // 4. Clássico Contemporâneo - Baseado na imagem com monograma
  {
    id: 'classic-contemporary',
    name: 'Classic Contemporary',
    archetype: 'Clássico Contemporâneo',
    mood: { romantic: 8, elegant: 10, playful: 2, natural: 4, classic: 10, modern: 6 },
    visual: {
      primaryColor: '#8B4513',
      secondaryColor: '#F5DEB3',
      accentColor: '#DAA520',
      backgroundColor: '#FFFAF0',
      textColor: '#654321',
      overlayColor: 'rgba(139, 69, 19, 0.4)'
    },
    typography: {
      headingFont: 'Playfair Display',
      bodyFont: 'Inter',  
      scriptFont: 'Great Vibes',
      headingWeight: 600,
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
      decorativeElements: ['classic-ornaments', 'monogram'],
    }
  },

  // 5. Natural Moderno - Baseado na imagem verde/natural
  {
    id: 'natural-modern',
    name: 'Natural Modern',
    archetype: 'Natural Moderno',
    mood: { romantic: 6, elegant: 7, playful: 4, natural: 10, classic: 4, modern: 8 },
    visual: {
      primaryColor: '#2E7D32',
      secondaryColor: '#E8F5E8',
      accentColor: '#66BB6A',
      backgroundColor: '#F1F8E9',
      textColor: '#1B5E20',
      overlayColor: 'rgba(46, 125, 50, 0.3)'
    },
    typography: {
      headingFont: 'Inter',
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

  // 6. Neutro Sofisticado - Baseado na imagem neutra/elegante
  {
    id: 'neutral-sophisticated',
    name: 'Neutral Sophistication',
    archetype: 'Neutro Sofisticado',
    mood: { romantic: 7, elegant: 9, playful: 2, natural: 5, classic: 8, modern: 7 },
    visual: {
      primaryColor: '#6D4C41',
      secondaryColor: '#F5F5F5',
      accentColor: '#8D6E63',
      backgroundColor: '#FAFAFA',
      textColor: '#5D4037',
      overlayColor: 'rgba(109, 76, 65, 0.3)'
    },
    typography: {
      headingFont: 'Inter',
      bodyFont: 'Inter',
      scriptFont: 'Great Vibes',
      headingWeight: 300,
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
      decorativeElements: ['minimal-lines', 'subtle-textures'],
    }
  }
];

export const findBestModernTemplate = (answers: QuizAnswers): ModernTemplateProfile => {
  console.log('🎯 Selecionando template para:', answers);
  
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

    // Bônus específicos por combinações
    
    // Romântico + qualquer local = Editorial Romântico
    if (answers.estilo === 'Romântico' && profile.id === 'editorial-romantic') {
      score += 30;
    }
    
    // Minimalista = Minimal Luxury
    if (answers.estilo === 'Minimalista' && profile.id === 'minimal-luxury') {
      score += 30;
    }
    
    // Boho = Boho Refinado
    if (answers.estilo === 'Boho' && profile.id === 'boho-refined') {
      score += 30;
    }
    
    // Clássico + Igreja = Clássico Contemporâneo
    if (answers.estilo === 'Clássico' && profile.id === 'classic-contemporary') {
      score += 30;
    }
    
    // Moderno + qualquer = Natural Moderno ou Neutro
    if (answers.estilo === 'Moderno') {
      if (answers.local === 'Fazenda' && profile.id === 'natural-modern') {
        score += 25;
      } else if (profile.id === 'neutral-sophisticated') {
        score += 20;
      }
    }

    // Vintage = Neutro Sofisticado
    if (answers.estilo === 'Vintage' && profile.id === 'neutral-sophisticated') {
      score += 25;
    }

    // Bônus por local
    if (answers.local === 'Igreja' && profile.id === 'classic-contemporary') score += 15;
    if (answers.local === 'Praia' && profile.id === 'natural-modern') score += 15;
    if (answers.local === 'Fazenda' && (profile.id === 'boho-refined' || profile.id === 'natural-modern')) score += 15;
    if (answers.local === 'Salão de Festas' && profile.id === 'minimal-luxury') score += 15;

    console.log(`📊 Template ${profile.name}: ${score} pontos`);

    if (score > bestScore) {
      bestScore = score;
      bestMatch = profile;
    }
  });

  console.log(`🏆 Template selecionado: ${bestMatch.name} (${bestScore} pontos)`);
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
