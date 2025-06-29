
import { PreviewData } from "@/types/quiz";
import SiteRenderer from "./SiteRenderer";

interface PreviewSiteProps {
  data: PreviewData;
  siteId?: string;
}

const PreviewSite = ({ data, siteId = "preview" }: PreviewSiteProps) => {
  console.log('🔄 PreviewSite renderizando:', siteId);

  return <SiteRenderer siteData={data} siteId={siteId} />;
};

export default PreviewSite;
