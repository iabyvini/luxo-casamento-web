
import { PreviewData } from "@/types/quiz";
import DefaultTemplate from "./templates/DefaultTemplate/DefaultTemplate";
import ErrorBoundary from "./ErrorBoundary";
import { templateExists } from "@/utils/templateLibrary";

interface SiteRendererProps {
  siteData: PreviewData;
  siteId?: string;
}

const SiteRenderer = ({ siteData, siteId = "preview" }: SiteRendererProps) => {
  console.log('🎨 SiteRenderer - Template:', siteData.templateName);
  console.log('🆔 SiteRenderer - SiteId:', siteId);

  // Verificar se o template existe
  const templateName = siteData.templateName || 'default-template';
  
  if (!templateExists(templateName)) {
    console.warn('⚠️ Template não encontrado:', templateName, '- usando template padrão');
  }

  const correctedSiteData = {
    ...siteData,
    templateName: "default-template"
  };

  console.log('✅ Renderizando com template:', correctedSiteData.templateName);

  return (
    <ErrorBoundary>
      <DefaultTemplate siteData={correctedSiteData} siteId={siteId} />
    </ErrorBoundary>
  );
};

export default SiteRenderer;
