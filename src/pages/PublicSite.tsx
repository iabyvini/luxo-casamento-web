
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
  console.log('🌐 PublicSite carregado com slug:', slug);
  
  const { siteData, loading, notFound } = useSiteData(slug);

  console.log('📊 Estado atual:', { siteData: !!siteData, loading, notFound, slug });

  if (loading) {
    console.log('⏳ Exibindo loading...');
    return <LoadingSpinner />;
  }

  if (notFound || !siteData) {
    console.log('🚫 Exibindo página não encontrada');
    return <NotFoundPage />;
  }

  console.log('🎯 Renderizando site:', siteData.couple_names, 'Template:', siteData.template_name);

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
