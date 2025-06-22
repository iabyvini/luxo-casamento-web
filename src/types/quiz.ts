
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
  slug: string;
  couple_names: string;
  wedding_date: string;
  template_name: string;
  quiz_answers: QuizAnswers;
  ai_welcome_message: string;
  custom_content?: Record<string, any>;
  is_published: boolean;
  domain_custom?: string;
  analytics_data?: Record<string, any>;
  views_count: number;
  created_at?: string;
  updated_at?: string;
}

export interface PreviewData {
  coupleNames: string;
  weddingDate: string;
  templateName: string;
  welcomeMessage: string;
  quizAnswers: QuizAnswers;
}

export interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
  phone?: string;
  avatar_url?: string;
  subscription_status: 'free' | 'premium' | 'enterprise';
  subscription_end?: string;
  created_at: string;
  updated_at: string;
}

export interface GiftList {
  id: string;
  site_id: string;
  gift_type: 'store_link' | 'pix' | 'custom';
  title: string;
  description?: string;
  store_name?: string;
  store_url?: string;
  pix_key?: string;
  target_amount?: number;
  current_amount: number;
  commission_rate: number;
  is_active: boolean;
  created_at: string;
}

export interface RSVPResponse {
  id: string;
  site_id: string;
  guest_name: string;
  guest_email?: string;
  guest_phone?: string;
  will_attend: boolean;
  companion_count: number;
  dietary_restrictions?: string;
  message?: string;
  confirmed_at: string;
}

export interface Message {
  id: string;
  site_id: string;
  sender_name: string;
  sender_email?: string;
  message: string;
  is_approved: boolean;
  created_at: string;
}
