
import { useEffect } from "react";
import { PreviewData } from "@/types/quiz";
import { useModernVisualTokens } from "@/contexts/ModernVisualTokensContext";
import { useTemplateSystem } from "@/hooks/useTemplateSystem";
import SiteRenderer from "./SiteRenderer";

interface PreviewSiteProps {
  data: PreviewData;
  siteId?: string;
}

const PreviewSite = ({ data, siteId = "preview" }: PreviewSiteProps) => {
  const { setSiteId } = useModernVisualTokens();
  const { getTemplateTokens, applyTokensToDOM } = useTemplateSystem();

  useEffect(() => {
    console.log('🔄 PreviewSite - Template:', data.templateName);
    console.log('🆔 PreviewSite - SiteId:', siteId);
    
    setSiteId(siteId);

    // Aplicar tokens do template
    if (data.templateName) {
      const tokens = getTemplateTokens(data.templateName);
      applyTokensToDOM(tokens, siteId);
    }
  }, [data.templateName, setSiteId, siteId, getTemplateTokens, applyTokensToDOM]);

  return <SiteRenderer siteData={data} siteId={siteId} />;
};

export default PreviewSite;
