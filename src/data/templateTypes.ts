
export type TemplateCategory = 
  | 'rustico' 
  | 'praia' 
  | 'classico' 
  | 'moderno' 
  | 'boho' 
  | 'tropical' 
  | 'minimalista' 
  | 'florais' 
  | 'cinematografico' 
  | 'campestre'
  | 'romantico';

export type GalleryType = 'carousel' | 'grid' | 'slideshow';
export type AnimationType = 'fade' | 'slide' | 'parallax';

export interface TemplateProfile {
  id: string;
  name: string;
  description: string;
  categories: TemplateCategory[];
  palette: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
  };
  fonts: {
    heading: string;
    body: string;
    accent: string;
  };
  typography: {
    heading: string;
    body: string;
    accent: string;
  };
  tokens: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    fontFamily: string;
    headingFont: string;
    accentFont: string;
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
    galleryType: GalleryType;
    animationType: AnimationType;
  };
  sections: string[];
  galleryType: GalleryType;
  animationType: AnimationType;
  features: string[];
}
