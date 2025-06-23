
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
  personalidade?: string;
  convidados?: string;
  tema?: string;
}

export interface PreviewData {
  coupleNames: string;
  weddingDate: string;
  templateName: string;
  welcomeMessage: string;
  quizAnswers: QuizAnswers;
  customContent?: {
    hero?: {
      title?: string;
      subtitle?: string;
      message?: string;
      backgroundImage?: string;
    };
    ourStory?: {
      bride?: {
        name?: string;
        description?: string;
        photo?: string;
      };
      groom?: {
        name?: string;
        description?: string;
        photo?: string;
      };
    };
    gallery?: {
      photos?: string[];
    };
    giftList?: {
      items?: Array<{
        name: string;
        price: number;
        image?: string;
        purchased: boolean;
      }>;
    };
  };
}
