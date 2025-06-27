
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
    
    // DEBUG: Verificar dados recebidos
    console.log('📊 DEBUG - Dados completos:', {
      templateName: data.templateName,
      quizAnswers: data.quizAnswers,
      template_id: data.quizAnswers?.template_id,
      siteId: siteId
    });
    
    // FASE 1: Aplicar tokens específicos do template baseado no template_id (não templateName)
    if (data.quizAnswers?.template_id) {
      console.log('✅ Usando template_id dos quizAnswers:', data.quizAnswers.template_id);
      
      // DEBUG: Verificar se a função será chamada
      console.log('🎯 DEBUG - Chamando applyTemplateTokens com:', data.quizAnswers.template_id);
      applyTemplateTokens(data.quizAnswers.template_id);
    } else if (siteId && siteId.startsWith('preview-')) {
      // Se estamos em um preview e não temos template_id nos quizAnswers,
      // extrair o templateId do siteId
      const templateId = siteId.replace('preview-', '');
      console.log('✅ Extraindo templateId do siteId:', templateId);
      
      // DEBUG: Verificar se a função será chamada
      console.log('🎯 DEBUG - Chamando applyTemplateTokens com:', templateId);
      applyTemplateTokens(templateId);
    } else {
      console.log('⚠️ Nenhum template_id encontrado, usando fallback');
      console.log('🔍 DEBUG - Valores disponíveis:', {
        'data.quizAnswers': data.quizAnswers,
        'data.quizAnswers?.template_id': data.quizAnswers?.template_id,
        'siteId': siteId,
        'siteId.startsWith("preview-")': siteId?.startsWith('preview-')
      });
    }
    
    // FASE 2: Definir o site ID para gerenciar fotos específicas
    setSiteId(siteId);
    
    if (data.quizAnswers) {
      console.log('🔧 DEBUG - Aplicando tokens modernos...');
      // Aplicar os tokens modernos
      applyModernTokens(data.quizAnswers);
      
      // Manter compatibilidade com sistema antigo
      applyTokens(data.quizAnswers);
    }
  }, [data.templateName, data.quizAnswers, applyTokens, applyModernTokens, applyTemplateTokens, setSiteId, siteId]);

  return <SiteRenderer siteData={data} siteId={siteId} />;
};

export default PreviewSite;
