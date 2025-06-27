
import { useEffect, useRef } from "react";
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
  const hasAppliedTokens = useRef(false);

  useEffect(() => {
    // Evitar aplicação duplicada
    if (hasAppliedTokens.current) {
      console.log('⚠️ PreviewSite - Tokens já aplicados, pulando...');
      return;
    }

    console.log('🔄 PreviewSite - Iniciando aplicação de tokens para:', data.quizAnswers?.template_id);
    console.log('🎨 PreviewSite - Template:', data.templateName);
    console.log('🆔 PreviewSite - SiteId:', siteId);
    
    // Definir o site ID PRIMEIRO (para gerenciar fotos específicas)
    setSiteId(siteId);
    
    // PRIORIDADE 1: Aplicar tokens específicos do template baseado no template_id
    let templateIdToUse = null;
    
    if (data.quizAnswers?.template_id) {
      templateIdToUse = data.quizAnswers.template_id;
      console.log('✅ Usando template_id dos quizAnswers:', templateIdToUse);
    } else if (siteId && siteId.startsWith('preview-')) {
      // Se estamos em um preview e não temos template_id nos quizAnswers,
      // extrair o templateId do siteId
      templateIdToUse = siteId.replace('preview-', '');
      console.log('✅ Extraindo templateId do siteId:', templateIdToUse);
    } else {
      console.log('⚠️ Nenhum template_id encontrado, usando templateName como fallback');
      templateIdToUse = data.templateName;
    }
    
    if (templateIdToUse) {
      console.log('🎯 DEBUG - Aplicando tokens para template:', templateIdToUse);
      applyTemplateTokens(templateIdToUse);
    }
    
    // PRIORIDADE 2: Sistema moderno e legado para compatibilidade
    if (data.quizAnswers) {
      console.log('🔧 DEBUG - Aplicando sistemas de tokens adicionais...');
      
      // Aplicar os tokens modernos (apenas se necessário)
      applyModernTokens(data.quizAnswers);
      
      // Manter compatibilidade com sistema antigo (apenas se template_id não foi usado)
      if (!data.quizAnswers.template_id) {
        console.log('🔄 DEBUG - Aplicando sistema legado como fallback...');
        applyTokens(data.quizAnswers);
      }
    }
    
    // Marcar como aplicado para evitar loops
    hasAppliedTokens.current = true;
    
    console.log('✅ PreviewSite - Aplicação de tokens concluída');
    
    // Cleanup ao desmontar o componente
    return () => {
      hasAppliedTokens.current = false;
    };
  }, [data.templateName, data.quizAnswers?.template_id, siteId]); // Dependências específicas e estáveis

  return <SiteRenderer siteData={data} siteId={siteId} />;
};

export default PreviewSite;
