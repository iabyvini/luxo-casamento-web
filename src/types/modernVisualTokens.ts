
import { ModernVisualTokens } from '@/utils/modernVisualTokens';
import { QuizAnswers } from '@/types/quiz';

export interface TemplateTokens {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  fontFamily: string;
  headingFont: string;
  borderRadius: string;
}

export interface ModernVisualTokensContextType {
  modernTokens: ModernVisualTokens | null;
  isModernThemeActive: boolean;
  couplePhotoUrl: string | null;
  templateProfile: any | null;
  templateTokens: TemplateTokens | null;
  applyModernTokens: (quizAnswers: QuizAnswers) => void;
  applyTemplateTokens: (templateName: string) => void;
  resetModernTokens: () => void;
  setCouplePhotoUrl: (url: string | null) => void;
  setSiteId: (siteId: string) => void;
}
