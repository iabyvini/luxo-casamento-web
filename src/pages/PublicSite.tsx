
import { useParams } from "react-router-dom";
import { VisualTokensProvider } from "@/contexts/VisualTokensContext";
import { ModernVisualTokensProvider } from "@/contexts/ModernVisualTokensContext";
import { useSiteData } from "@/hooks/useSiteData";
import LoadingSpinner from "@/components/PublicSite/LoadingSpinner";
import NotFoundPage from "@/components/PublicSite/NotFoundPage";
import ModernSiteRenderer from "@/components/PublicSite/ModernSiteRenderer";
import ClassicSiteRenderer from "@/components/PublicSite/ClassicSiteRenderer";

const PublicSite = () => {
  const { slug } = useParams<{ slug: string }>();
  const { siteData, loading, notFound } = useSiteData(slug);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (notFound || !siteData) {
    return <NotFoundPage />;
  }

  // Check if it's a modern template
  const isModernTemplate = siteData.template_name.toLowerCase().includes('modern');

  if (isModernTemplate) {
    return (
      <ModernVisualTokensProvider>
        <ModernSiteRenderer siteData={siteData} />
      </ModernVisualTokensProvider>
    );
  }

  return (
    <VisualTokensProvider>
      <ClassicSiteRenderer siteData={siteData} />
    </VisualTokensProvider>
  );
};

export default PublicSite;
