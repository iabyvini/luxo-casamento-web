
export interface QuizAnswers {
  estilo: string;
  local: string;
  tom: string;
  cores: string;
  data_casamento: string;
  nomes: string;
}

export interface PreviewData {
  coupleNames: string;
  weddingDate: string;
  templateName: string;
  welcomeMessage: string;
  quizAnswers: QuizAnswers;
  customContent?: any;
}
