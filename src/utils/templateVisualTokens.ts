
import { TemplateProfile } from "@/types/templateProfile";
import { generateVisualTokens, applyVisualTokensToCSS, VisualTokens } from "./visualTokens";

export const getProfileVisualTokens = (profile: TemplateProfile) => {
  return {
    colors: {
      primary: profile.visual.primaryColor,
      secondary: profile.visual.secondaryColor,
      accent: profile.visual.accentColor,
      background: profile.visual.backgroundGradient,
      textureOverlay: profile.visual.textureOverlay
    },
    typography: {
      heading: profile.typography.headingFont,
      body: profile.typography.bodyFont,
      accent: profile.typography.accentFont,
      headingWeight: profile.typography.headingWeight,
      bodyWeight: profile.typography.bodyWeight
    },
    layout: profile.layout,
    decorations: profile.decorations
  };
};

// Re-export functions from visualTokens for backward compatibility
export { generateVisualTokens, applyVisualTokensToCSS, type VisualTokens };
