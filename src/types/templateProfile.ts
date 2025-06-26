
export interface TemplateProfile {
  id: string;
  name: string;
  archetype: string;
  mood: {
    romantic: number;
    elegant: number;
    playful: number;
    natural: number;
    classic: number;
    modern: number;
  };
  visual: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundGradient: string;
    textureOverlay?: string;
  };
  typography: {
    headingFont: string;
    bodyFont: string;
    accentFont?: string;
    headingWeight: number;
    bodyWeight: number;
  };
  decorations: {
    heroElements: string[];
    sectionDividers: string[];
    backgroundPatterns: string[];
    iconStyle: 'outlined' | 'filled' | 'minimal' | 'decorative';
  };
  layout: {
    spacing: 'tight' | 'normal' | 'loose';
    borderRadius: 'sharp' | 'soft' | 'rounded' | 'organic';
    shadows: 'none' | 'subtle' | 'medium' | 'dramatic';
    contentWidth: 'narrow' | 'normal' | 'wide';
  };
  emotions: {
    welcomeKeywords: string[];
    toneAdjectives: string[];
    visualMetaphors: string[];
  };
}
