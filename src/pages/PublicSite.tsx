
import { useParams } from "react-router-dom";
import { VisualTokensProvider } from "@/contexts/VisualTokensContext";
import { ModernVisualTokensProvider } from "@/contexts/ModernVisualTokensContext";
import { useSiteData } from "@/hooks/useSiteData";
import { validateSiteData, logValidationResults } from "@/utils/siteValidation";
import LoadingSpinner from "@/components/PublicSite/LoadingSpinner";
import NotFoundPage from "@/components/PublicSite/NotFoundPage";
import SiteRenderer from "@/components/SiteRenderer";

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

  // Validar dados antes de renderizar
  const validation = validateSiteData(siteData);
  logValidationResults(validation, `PublicSite (${slug})`);

  if (!validation.isValid) {
    console.error('🚫 Dados do site inválidos:', validation.errors);
    return <NotFoundPage />;
  }

  // Preparar dados no formato PreviewData com fallbacks
  const previewData = {
    coupleNames: siteData.couple_names || 'Casal',
    weddingDate: siteData.wedding_date,
    welcomeMessage: siteData.ai_welcome_message || 'Bem-vindos ao nosso casamento!',
    templateName: siteData.template_name || 'default-template',
    quizAnswers: siteData.quiz_answers || {}
  };

  console.log('🌐 PublicSite - Renderizando:', previewData.templateName, 'para slug:', slug);

  // Renderizar sempre com os provedores de contexto para compatibilidade
  return (
    <VisualTokensProvider>
      <ModernVisualTokensProvider>
        <SiteRenderer 
          siteData={previewData} 
          siteId={siteData.id} 
        />
      </ModernVisualTokensProvider>
    </VisualTokensProvider>
  );
};

export default PublicSite;
