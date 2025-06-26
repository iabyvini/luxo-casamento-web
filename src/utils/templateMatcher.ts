
import { QuizAnswers } from "@/types/quiz";
import { TemplateProfile } from "@/types/templateProfile";
import { TEMPLATE_PROFILES } from "@/data/templateProfiles";

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
