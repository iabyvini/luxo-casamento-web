
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
  const { applyModernTokens, setSiteId } = useModernVisualTokens();

  useEffect(() => {
    console.log('🔄 PreviewSite - Aplicando tokens para:', data.quizAnswers);
    console.log('🆔 PreviewSite - SiteId:', siteId);
    
    // FASE 2: Definir o site ID para gerenciar fotos específicas
    setSiteId(siteId);
    
    if (data.quizAnswers) {
      // Aplicar os tokens modernos
      applyModernTokens(data.quizAnswers);
      
      // Manter compatibilidade com sistema antigo
      applyTokens(data.quizAnswers);
    }
  }, [data.quizAnswers, applyTokens, applyModernTokens, setSiteId, siteId]);

  return <SiteRenderer siteData={data} siteId={siteId} />;
};

export default PreviewSite;
