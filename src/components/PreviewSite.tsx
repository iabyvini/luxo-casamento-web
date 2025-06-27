
import { useEffect } from "react";
import { PreviewData } from "@/types/quiz";
import { useModernVisualTokens } from "@/contexts/ModernVisualTokensContext";
import SiteRenderer from "./SiteRenderer";

interface PreviewSiteProps {
  data: PreviewData;
  siteId?: string;
}

const PreviewSite = ({ data, siteId = "preview" }: PreviewSiteProps) => {
  const { setSiteId } = useModernVisualTokens();

  useEffect(() => {
    console.log('🔄 PreviewSite - Template:', data.templateName);
    console.log('🆔 PreviewSite - SiteId:', siteId);
    
    setSiteId(siteId);
  }, [data.templateName, setSiteId, siteId]);

  return <SiteRenderer siteData={data} siteId={siteId} />;
};

export default PreviewSite;
