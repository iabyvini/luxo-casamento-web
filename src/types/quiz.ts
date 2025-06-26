
export interface QuizAnswers {
  estilo: string;
  cores: string;
  personalidade: string;
  local: string;
  convidados: string;
  tema: string;
  tom: string;
  data_casamento: string;
  nomes: string;
  template_id?: string;
  visual_style?: string;
  font_preference?: string;
  color_scheme?: string;
  // Add missing properties that are being used in the codebase
  emotion?: string;
  color_palette?: string[];
  typography?: string;
  animations?: string;
  photos?: string;
}

export interface QuizQuestion {
  id: string;
  label: string;
  type: 'text' | 'date' | 'multiple_choice' | 'multi_select';
  placeholder?: string;
  options?: string[];
  required: boolean;
  section: string;
}

export interface PreviewData {
  coupleNames: string;
  weddingDate: string;
  templateName: string;
  welcomeMessage: string;
  quizAnswers: QuizAnswers;
}
