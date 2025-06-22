
import { QuizAnswers } from '@/types/quiz';

const CONTEXTUAL_FALLBACKS: Record<string, Record<string, string>> = {
  'Romântico': {
    'Praia': 'Como as ondas que se encontram na areia, nossos corações se unem em uma celebração à beira-mar. Venham testemunhar nosso amor eterno.',
    'Fazenda': 'Entre campos verdejantes e céu aberto, nosso amor floresce como as mais belas flores do campo. Celebrem conosco este momento único.',
    'Igreja': 'Sob as bênçãos divinas, unimos nossos corações em uma cerimônia repleta de amor e emoção. Sejam nossos convidados especiais.',
    'Salão de Festas': 'Em um ambiente acolhedor e romântico, celebramos nosso amor com todos aqueles que amamos. Venham fazer parte desta história.',
    'Outro': 'Em um lugar especial escolhido com carinho, nossos corações se unem em uma celebração única e inesquecível.'
  },
  'Minimalista': {
    'Praia': 'Simplicidade e mar. Dois corações, um futuro. Celebrem conosco este momento de pura essência.',
    'Fazenda': 'Natureza, simplicidade, amor. Junte-se a nós em uma celebração autêntica e verdadeira.',
    'Igreja': 'Tradição e simplicidade se encontram. Venham testemunhar nossa união em sua forma mais pura.',
    'Salão de Festas': 'Elegância simples para um momento extraordinário. Celebrem conosco nosso amor.',
    'Outro': 'Um lugar especial, um momento único. Venham celebrar conosco nossa união.'
  },
  'Boho': {
    'Praia': 'Espíritos livres como o vento do mar. Nossos corações dançam ao ritmo das ondas. Celebrem conosco nossa liberdade de amar.',
    'Fazenda': 'Entre a terra e o céu, nossa alma boêmia encontra seu lar. Venham dançar sob as estrelas em nossa celebração única.',
    'Igreja': 'Tradição e espírito livre se encontram. Celebrem conosco uma cerimônia cheia de personalidade e amor.',
    'Salão de Festas': 'Um ambiente que respira arte e amor. Venham celebrar nossa união em um espaço cheio de magia boêmia.',
    'Outro': 'Em um lugar tão único quanto nosso amor. Celebrem conosco nossa união artística e especial.'
  },
  'Vintage': {
    'Praia': 'Como romances de época à beira-mar, nossa história ganha vida. Venham celebrar nosso amor atemporal.',
    'Fazenda': 'Nostalgia e charme campestre se encontram. Celebrem conosco uma história de amor que transcende o tempo.',
    'Igreja': 'Tradições do passado abraçam nosso presente. Venham testemunhar nossa união repleta de história e emoção.',
    'Salão de Festas': 'Elegância de outros tempos para um amor eterno. Celebrem conosco nossa história vintage.',
    'Outro': 'Um lugar com história para uma história de amor. Venham fazer parte de nosso conto atemporal.'
  },
  'Clássico': {
    'Praia': 'Elegância eterna encontra a beleza do mar. Honrem-nos com sua presença em nossa celebração clássica.',
    'Fazenda': 'Tradição e natureza em perfeita harmonia. Celebrem conosco nosso amor em um ambiente acolhedor.',
    'Igreja': 'Sob a tradição sagrada, unimos nossos corações. Sejam nossos convidados nesta cerimônia solene e emocionante.',
    'Salão de Festas': 'Elegância e sofisticação para celebrar nosso amor. Honrem-nos com sua presença neste momento especial.',
    'Outro': 'Em um ambiente elegante, celebramos nosso amor eterno. Venham fazer parte desta ocasião memorável.'
  },
  'Moderno': {
    'Praia': 'Amor contemporâneo encontra o eterno mar. Celebrem conosco nossa união moderna e significativa.',
    'Fazenda': 'Natureza e modernidade em harmonia. Venham celebrar nosso amor em um ambiente único e atual.',
    'Igreja': 'Tradição renovada para um amor atual. Testemunhem conosco nossa união moderna e emocionante.',
    'Salão de Festas': 'Estilo contemporâneo para um momento atemporal. Celebrem conosco nosso amor moderno.',
    'Outro': 'Um espaço atual para um amor único. Venham fazer parte de nossa celebração contemporânea.'
  }
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
    console.log('OpenAI API não disponível, usando fallback contextual:', error);
  }

  // Fallback contextual baseado em estilo + local + tom
  const styleMessages = CONTEXTUAL_FALLBACKS[answers.estilo] || CONTEXTUAL_FALLBACKS['Clássico'];
  const contextualMessage = styleMessages[answers.local];
  
  if (contextualMessage) {
    // Adapta o tom da mensagem
    if (answers.tom === 'Divertido e descontraído') {
      return contextualMessage.replace(/Celebrem|Venham|Testemunhem/g, 'Vem celebrar') + ' 🎉';
    } else if (answers.tom === 'Emotivo e romântico') {
      return '💕 ' + contextualMessage + ' 💕';
    }
    return contextualMessage;
  }

  // Fallback genérico final
  return 'Junte-se a nós para celebrar nosso amor eterno neste dia especial.';
};

export const createAIPrompt = (answers: QuizAnswers): string => {
  return `Crie uma frase de boas-vindas elegante e personalizada para um site de casamento com as seguintes características específicas:

CONTEXTO DO CASAL:
- Estilo do casamento: ${answers.estilo}
- Local do evento: ${answers.local}
- Tom desejado: ${answers.tom}
- Paleta de cores: ${answers.cores}
- Nomes do casal: ${answers.nomes}
- Data: ${answers.data_casamento}

DIRETRIZES PARA A MENSAGEM:
- Se MINIMALISTA: Use linguagem limpa, direta, sem excessos decorativos
- Se ROMÂNTICO: Inclua metáforas poéticas, linguagem emotiva e delicada
- Se BOHO: Use linguagem livre, artística, com referências à natureza e liberdade
- Se VINTAGE: Adote tom nostálgico, clássico, com charme atemporal
- Se PRAIA: Inclua referências ao mar, ondas, brisa, horizonte
- Se FAZENDA: Mencione natureza, campo, céu aberto, simplicidade rural
- Se IGREJA: Tom respeitoso, solene, com referências à tradição e bênçãos

TOM ESPECÍFICO:
- ${answers.tom === 'Elegante e formal' ? 'Use linguagem formal, sofisticada, convites em terceira pessoa' : ''}
- ${answers.tom === 'Divertido e descontraído' ? 'Use linguagem casual, alegre, com possível emoji discreto' : ''}
- ${answers.tom === 'Emotivo e romântico' ? 'Use linguagem calorosa, íntima, com toques poéticos' : ''}

A frase deve:
- Ter entre 15-30 palavras
- Ser completamente única para esta combinação específica
- Soar natural e autêntica, não genérica
- Estar em português brasileiro
- Não mencionar data específica
- Capturar a essência da combinação estilo + local + tom

Retorne apenas a frase, sem aspas ou formatação adicional.`;
};
