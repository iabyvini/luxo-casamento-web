
import { useEffect } from "react";
import { PreviewData } from "@/types/quiz";
import { useVisualTokens } from "@/contexts/VisualTokensContext";
import { useModernVisualTokens } from "@/contexts/ModernVisualTokensContext";
import SiteRenderer from "./SiteRenderer";

interface PreviewSiteProps {
  data: PreviewData;
  siteId?: string;
}

const PreviewSite = ({ data, siteId = "preview" }: PreviewSiteProps) => {
  const { applyTokens } = useVisualTokens();
  const { applyModernTokens, applyTemplateTokens, setSiteId } = useModernVisualTokens();

  useEffect(() => {
    console.log('🔄 PreviewSite - Aplicando tokens para:', data.quizAnswers);
    console.log('🎨 PreviewSite - Template:', data.templateName);
    console.log('🆔 PreviewSite - SiteId:', siteId);
    
    // FASE 1: Aplicar tokens específicos do template baseado no templateName
    if (data.templateName) {
      applyTemplateTokens(data.templateName);
    }
    
    // FASE 2: Definir o site ID para gerenciar fotos específicas
    setSiteId(siteId);
    
    if (data.quizAnswers) {
      // Aplicar os tokens modernos
      applyModernTokens(data.quizAnswers);
      
      // Manter compatibilidade com sistema antigo
      applyTokens(data.quizAnswers);
    }
  }, [data.templateName, data.quizAnswers, applyTokens, applyModernTokens, applyTemplateTokens, setSiteId, siteId]);

  return <SiteRenderer siteData={data} siteId={siteId} />;
};

export default PreviewSite;
