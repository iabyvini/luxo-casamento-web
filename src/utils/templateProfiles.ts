
// Re-export everything from the refactored files for backward compatibility
export type { TemplateProfile } from "@/types/templateProfile";
export { TEMPLATE_PROFILES } from "@/data/templateProfiles";
export { calculateMoodScore, findBestTemplateProfile } from "@/utils/templateMatcher";
export { getProfileVisualTokens, generateVisualTokens, applyVisualTokensToCSS, type VisualTokens } from "@/utils/templateVisualTokens";
