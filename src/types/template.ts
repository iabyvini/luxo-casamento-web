
import { PreviewData } from '@/types/quiz';

export interface TemplateProps {
  siteData: PreviewData;
  siteId?: string;
}

export interface TemplateColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

export interface TemplateFonts {
  heading: string;
  body: string;
  accent: string;
}

export interface TemplateTokens {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  fontFamily: string;
  headingFont: string;
  borderRadius: string;
}

export interface TemplateConfig {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  colors: string[];
  fonts: TemplateFonts;
  sections: string[];
  mood: string[];
  tokens: TemplateTokens;
}

export interface ExtendedTemplate extends TemplateConfig {
  component: string;
}
