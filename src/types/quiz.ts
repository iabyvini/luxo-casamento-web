
export interface QuizQuestion {
  id: string;
  label: string;
  type: 'multiple_choice' | 'text' | 'date';
  options?: string[];
  placeholder?: string;
  required: boolean;
}

export interface QuizAnswers {
  estilo: string;
  local: string;
  tom: string;
  cores: string;
  data_casamento: string;
  nomes: string;
}

export interface WeddingSite {
  id?: string;
  user_id?: string;
  couple_names: string;
  wedding_date: string;
  template_name: string;
  quiz_answers: QuizAnswers;
  ai_welcome_message: string;
  created_at?: string;
}

export interface PreviewData {
  coupleNames: string;
  weddingDate: string;
  templateName: string;
  welcomeMessage: string;
  quizAnswers: QuizAnswers;
}
