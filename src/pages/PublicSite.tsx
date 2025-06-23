
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
  console.log('🌐 PublicSite renderizado com slug:', slug);
  
  const { siteData, loading, notFound } = useSiteData(slug);

  console.log('📊 PublicSite - Estados atuais:', { 
    hasSlug: !!slug,
    hasSiteData: !!siteData, 
    loading, 
    notFound,
    siteId: siteData?.id,
    coupleName: siteData?.couple_names,
    templateName: siteData?.template_name
  });

  // Mostrar loading enquanto carrega
  if (loading) {
    console.log('⏳ PublicSite: Exibindo loading spinner');
    return <LoadingSpinner message="Carregando site do casamento..." />;
  }

  // Mostrar não encontrado se houver erro ou site não existir
  if (notFound || !siteData) {
    console.log('🚫 PublicSite: Exibindo página não encontrada', { notFound, hasSiteData: !!siteData });
    return <NotFoundPage />;
  }

  // Verificar se é template moderno
  const isModernTemplate = siteData.template_name && 
    siteData.template_name.toLowerCase().includes('modern');

  console.log('🎯 PublicSite: Renderizando site:', {
    id: siteData.id,
    couple_names: siteData.couple_names,
    template_name: siteData.template_name,
    isModernTemplate
  });

  // Renderizar template moderno
  if (isModernTemplate) {
    console.log('🔮 Renderizando template moderno');
    return (
      <ModernVisualTokensProvider>
        <ModernSiteRenderer siteData={siteData} />
      </ModernVisualTokensProvider>
    );
  }

  // Renderizar template clássico
  console.log('🎨 Renderizando template clássico');
  return (
    <VisualTokensProvider>
      <ClassicSiteRenderer siteData={siteData} />
    </VisualTokensProvider>
  );
};

export default PublicSite;
