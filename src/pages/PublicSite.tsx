
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

  // Mostrar loading enquanto carrega
  if (loading) {
    return <LoadingSpinner message="Carregando site do casamento..." />;
  }

  // Mostrar erro se não encontrou o site
  if (notFound || !siteData) {
    return <NotFoundPage />;
  }

  // Verificar se é template moderno
  const isModernTemplate = siteData.template_name && 
    siteData.template_name.toLowerCase().includes('modern');

  // Renderizar template moderno
  if (isModernTemplate) {
    return (
      <ModernVisualTokensProvider>
        <ModernSiteRenderer siteData={siteData} />
      </ModernVisualTokensProvider>
    );
  }

  // Renderizar template clássico
  return (
    <VisualTokensProvider>
      <ClassicSiteRenderer siteData={siteData} />
    </VisualTokensProvider>
  );
};

export default PublicSite;
