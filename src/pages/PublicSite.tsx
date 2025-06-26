
import { useParams } from "react-router-dom";
import { VisualTokensProvider } from "@/contexts/VisualTokensContext";
import { ModernVisualTokensProvider } from "@/contexts/ModernVisualTokensContext";
import { useSiteData } from "@/hooks/useSiteData";
import LoadingSpinner from "@/components/PublicSite/LoadingSpinner";
import NotFoundPage from "@/components/PublicSite/NotFoundPage";
import ModernSiteRenderer from "@/components/PublicSite/ModernSiteRenderer";
import ClassicSiteRenderer from "@/components/PublicSite/ClassicSiteRenderer";
import DebugInfo from "@/components/PublicSite/DebugInfo";

const PublicSite = () => {
  const { slug } = useParams<{ slug: string }>();
  
  console.log('🧪 Slug bruto recebido:', slug);
  console.log('🧪 Slug normalizado:', slug?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim());
  
  console.log('🌐 PublicSite renderizado com slug da URL:', slug);
  
  const { siteData, loading, notFound } = useSiteData(slug);

  console.log('📊 PublicSite - Estados detalhados:', { 
    slug_recebido: slug,
    hasSlug: !!slug,
    hasSiteData: !!siteData, 
    loading_state: loading, 
    notFound_state: notFound,
    siteId: siteData?.id,
    coupleName: siteData?.couple_names,
    templateName: siteData?.template_name,
    isPublished: siteData?.is_published,
    slugFromData: siteData?.slug
  });

  // DEBUG: Log completo do siteData quando disponível
  if (siteData) {
    console.log('✅ PublicSite: siteData completo encontrado:', {
      id: siteData.id,
      slug: siteData.slug,
      couple_names: siteData.couple_names,
      is_published: siteData.is_published,
      template_name: siteData.template_name,
      wedding_date: siteData.wedding_date
    });
  }

  // DEBUG: Estado atual para troubleshooting
  console.log('🔍 PublicSite: Decisão de renderização:', {
    shouldShowLoading: loading,
    shouldShowNotFound: notFound || !siteData,
    shouldShowSite: !loading && !notFound && !!siteData
  });

  // Mostrar loading enquanto carrega - AGUARDAR o hook terminar
  if (loading) {
    console.log('⏳ PublicSite: Exibindo loading spinner - aguardando useSiteData');
    return (
      <>
        <LoadingSpinner message="Carregando site do casamento..." />
        <DebugInfo slug={slug} />
      </>
    );
  }

  // IMPORTANTE: Só mostrar erro após loading terminar E confirmar que não há dados
  if (notFound) {
    console.log('🚫 PublicSite: notFound=true, exibindo página de erro');
    return (
      <>
        <NotFoundPage />
        <DebugInfo slug={slug} />
      </>
    );
  }

  if (!siteData) {
    console.log('🚫 PublicSite: siteData é null/undefined após loading, exibindo página de erro');
    return (
      <>
        <NotFoundPage />
        <DebugInfo slug={slug} />
      </>
    );
  }

  // Se chegou até aqui, temos dados válidos
  console.log('✅ PublicSite: Dados válidos encontrados, procedendo com renderização');

  // Verificar se é template moderno
  const isModernTemplate = siteData.template_name && 
    siteData.template_name.toLowerCase().includes('modern');

  console.log('🎯 PublicSite: Renderizando site confirmado:', {
    id: siteData.id,
    couple_names: siteData.couple_names,
    template_name: siteData.template_name,
    isModernTemplate,
    slug: siteData.slug
  });

  // Renderizar template moderno
  if (isModernTemplate) {
    console.log('🔮 Renderizando template moderno para:', siteData.couple_names);
    return (
      <ModernVisualTokensProvider>
        <ModernSiteRenderer siteData={siteData} />
        <DebugInfo slug={slug} />
      </ModernVisualTokensProvider>
    );
  }

  // Renderizar template clássico - SEMPRE usar VisualTokensProvider
  console.log('🎨 Renderizando template clássico para:', siteData.couple_names);
  return (
    <VisualTokensProvider>
      <ClassicSiteRenderer siteData={siteData} />
      <DebugInfo slug={slug} />
    </VisualTokensProvider>
  );
};

export default PublicSite;
