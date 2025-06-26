
import { QuizQuestion } from "@/types/quiz";

export const quizQuestions: QuizQuestion[] = [
  // Perguntas originais
  {
    id: 'nomes',
    label: 'Nome do casal',
    type: 'text',
    placeholder: 'Ex: Ana & João',
    required: true,
    section: 'Informações Básicas'
  },
  {
    id: 'data_casamento',
    label: 'Já tem data marcada?',
    type: 'date',
    required: true,
    section: 'Informações Básicas'
  },
  {
    id: 'local',
    label: 'Onde será o evento?',
    type: 'multiple_choice',
    options: ['Igreja', 'Salão de Festas', 'Fazenda', 'Praia', 'Outro'],
    required: true,
    section: 'Informações Básicas'
  },
  
  // Novas perguntas expandidas
  {
    id: 'visual_style',
    label: 'Qual estilo combina mais com vocês?',
    type: 'multiple_choice',
    options: ['Clássico', 'Moderno', 'Boho', 'Tropical', 'Minimalista', 'Romântico'],
    required: true,
    section: 'Estilo Visual'
  },
  {
    id: 'typography',
    label: 'Que tipo de fonte mais agrada visualmente?',
    type: 'multiple_choice',
    options: ['Manuscrita', 'Serifada', 'Sem Serifa (Sans-serif)', 'Estilo revista'],
    required: true,
    section: 'Estilo Visual'
  },
  {
    id: 'color_palette',
    label: 'Quais cores representam melhor o casal?',
    type: 'multi_select',
    options: ['Rosé', 'Azul-marinho', 'Verde-oliva', 'Branco minimalista', 'Bege', 'Dourado'],
    required: true,
    section: 'Estilo Visual'
  },
  {
    id: 'animations',
    label: 'Como o site deve se comportar visualmente?',
    type: 'multiple_choice',
    options: ['Sem animações', 'Suaves', 'Marcantes e dinâmicas'],
    required: true,
    section: 'Comportamento'
  },
  {
    id: 'photos',
    label: 'Quantas fotos querem usar no site?',
    type: 'multiple_choice',
    options: ['Nenhuma', 'Algumas', 'Muitas'],
    required: true,
    section: 'Comportamento'
  },
  {
    id: 'emotion',
    label: 'Que sentimento o site deve transmitir?',
    type: 'multiple_choice',
    options: ['Elegância', 'Diversão', 'Tradição', 'Criatividade', 'Aconchego', 'Inovação'],
    required: true,
    section: 'Comportamento'
  },
  
  // Perguntas originais restantes
  {
    id: 'estilo',
    label: 'Qual o estilo do seu casamento?',
    type: 'multiple_choice',
    options: ['Clássico', 'Moderno', 'Romântico', 'Minimalista', 'Vintage', 'Boho'],
    required: true,
    section: 'Preferências Gerais'
  },
  {
    id: 'tom',
    label: 'Qual é o tom do site que vocês preferem?',
    type: 'multiple_choice',
    options: ['Elegante e formal', 'Divertido e descontraído', 'Emotivo e romântico'],
    required: true,
    section: 'Preferências Gerais'
  },
  {
    id: 'cores',
    label: 'Qual a paleta de cores preferida?',
    type: 'multiple_choice',
    options: ['Dourado', 'Rosa claro', 'Azul', 'Verde', 'Neutros', 'Não sei'],
    required: true,
    section: 'Preferências Gerais'
  }
];
