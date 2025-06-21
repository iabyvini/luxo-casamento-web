
import { QuizAnswers } from '@/types/quiz';

const FALLBACK_MESSAGES: Record<string, string> = {
  'Clássico': 'Com elegância e tradição, celebramos nosso amor eterno em uma cerimônia que marca o início de nossa jornada juntos.',
  'Moderno': 'Dois corações, um futuro. Venha celebrar conosco o início de nossa história moderna de amor.',
  'Romântico': 'Como flores que desabrocham na primavera, nosso amor floresce em cada momento. Celebre conosco este dia especial.',
  'Minimalista': 'Simplicidade e amor. Junte-se a nós neste momento único e especial.',
  'Vintage': 'Como uma história de amor atemporal, nossos corações se unem em uma celebração cheia de charme e nostalgia.',
  'Boho': 'Livres como o vento, nossos espíritos se encontram. Celebre conosco nossa união artística e única.'
};

export const generateWelcomeMessage = async (answers: QuizAnswers): Promise<string> => {
  try {
    // Primeiro, tentamos gerar com IA (placeholder para Edge Function)
    const response = await fetch('/api/generate-welcome', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(answers),
    });

    if (response.ok) {
      const data = await response.json();
      return data.message;
    }
  } catch (error) {
    console.log('OpenAI API não disponível, usando fallback:', error);
  }

  // Fallback baseado no estilo escolhido
  const fallbackMessage = FALLBACK_MESSAGES[answers.estilo];
  if (fallbackMessage) {
    return fallbackMessage;
  }

  // Fallback genérico final
  return 'Junte-se a nós para celebrar nosso amor eterno neste dia especial.';
};

export const createAIPrompt = (answers: QuizAnswers): string => {
  return `Crie uma frase de boas-vindas elegante e personalizada para um site de casamento com as seguintes características:

- Estilo do casamento: ${answers.estilo}
- Tom desejado: ${answers.tom}
- Local do evento: ${answers.local}
- Paleta de cores: ${answers.cores}
- Nomes do casal: ${answers.nomes}

A frase deve:
- Ter entre 15-25 palavras
- Refletir o estilo e tom escolhidos
- Ser calorosa e convidativa
- Estar em português brasileiro
- Não mencionar data específica

Retorne apenas a frase, sem aspas ou formatação adicional.`;
};
