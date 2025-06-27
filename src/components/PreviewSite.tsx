
import { useEffect } from "react";
import { PreviewData } from "@/types/quiz";
import { useModernVisualTokens } from "@/contexts/ModernVisualTokensContext";
import SiteRenderer from "./SiteRenderer";

interface PreviewSiteProps {
  data: PreviewData;
  siteId?: string;
}

const PreviewSite = ({ data, siteId = "preview" }: PreviewSiteProps) => {
  const { applyModernTokens, applyTemplateTokens, setSiteId, templateTokens } = useModernVisualTokens();

  useEffect(() => {
    console.log('🔄 PreviewSite - Aplicando tokens para:', data.quizAnswers);
    console.log('🎨 PreviewSite - Template:', data.templateName);
    console.log('🆔 PreviewSite - SiteId:', siteId);
    console.log('📋 PreviewSite - Template ID:', data.quizAnswers?.template_id);
    
    // FASE 1: Aplicar tokens específicos do template baseado no id
    if (data.quizAnswers?.template_id) {
      console.log('🎯 Aplicando tokens específicos para template_id:', data.quizAnswers.template_id);
      applyTemplateTokens(data.quizAnswers.template_id);
    } else {
      console.warn('⚠️ Template ID não encontrado nos quiz answers');
    }
    
    // FASE 2: Definir o site ID para gerenciar fotos específicas
    setSiteId(siteId);
    
    if (data.quizAnswers) {
      // Aplicar os tokens modernos
      console.log('🎨 Aplicando tokens modernos...');
      applyModernTokens(data.quizAnswers);
    }
  }, [data.templateName, data.quizAnswers, applyModernTokens, applyTemplateTokens, setSiteId, siteId]);

  // Debug: mostrar tokens aplicados
  useEffect(() => {
    if (templateTokens) {
      console.log('🎨 Tokens aplicados no PreviewSite:', templateTokens);
      console.log('🎨 Cor primária:', templateTokens.primaryColor);
      console.log('🎨 Fonte:', templateTokens.fontFamily);
    }
  }, [templateTokens]);

  return <SiteRenderer siteData={data} siteId={siteId} />;
};

export default PreviewSite;
