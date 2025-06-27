
import { PreviewData } from "@/types/quiz";
import DefaultTemplate from "./templates/DefaultTemplate/DefaultTemplate";
import ErrorBoundary from "./ErrorBoundary";

interface SiteRendererProps {
  siteData: PreviewData;
  siteId?: string;
}

const SiteRenderer = ({ siteData, siteId = "preview" }: SiteRendererProps) => {
  console.log('🎨 SiteRenderer - Template:', siteData.templateName);
  console.log('🆔 SiteRenderer - SiteId:', siteId);

  // Por enquanto, usar apenas o template padrão
  const correctedSiteData = {
    ...siteData,
    templateName: "default-template"
  };

  console.log('✅ Usando template padrão temporário');

  return (
    <ErrorBoundary>
      <DefaultTemplate siteData={correctedSiteData} siteId={siteId} />
    </ErrorBoundary>
  );
};

export default SiteRenderer;
