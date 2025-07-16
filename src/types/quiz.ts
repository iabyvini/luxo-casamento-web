
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
  customContent?: {
    ourStory?: string;
    giftList?: Array<{
      id: string;
      name: string;
      description: string;
      price: number;
      image_url: string;
      category: string;
      is_purchased: boolean;
    }>;
    bridesmaids?: Array<{
      name: string;
      role: string;
      photo: string;
      description: string;
    }>;
    groomsmen?: Array<{
      name: string;
      role: string;
      photo: string;
      description: string;
    }>;
    galleryPhotos?: Array<{
      id: string;
      photo_url: string;
      caption: string;
      category: string;
    }>;
    eventDetails?: {
      ceremony: {
        time: string;
        location: string;
        address: string;
      };
      reception: {
        time: string;
        location: string;
        address: string;
      };
    };
  };
}
