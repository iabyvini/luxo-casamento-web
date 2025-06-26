
import { PreviewData } from "@/types/quiz";
import ModernEleganceTemplate from "./templates/ModernElegance/ModernEleganceTemplate";
import BohoRomanceTemplate from "./templates/BohoRomance/BohoRomanceTemplate";
import PreviewSite from "./PreviewSite"; // Fallback para templates antigos

interface SiteRendererProps {
  siteData: PreviewData;
  siteId?: string;
}

const SiteRenderer = ({ siteData, siteId = "preview" }: SiteRendererProps) => {
  console.log('🎨 SiteRenderer - Template:', siteData.templateName);
  console.log('🆔 SiteRenderer - SiteId:', siteId);

  // Mapeamento de templates
  const templateMap: Record<string, React.ComponentType<any>> = {
    'Modern Elegance': ModernEleganceTemplate,
    'Boho Romance': BohoRomanceTemplate,
    'Garden Romance': BohoRomanceTemplate, // Fallback
    'Pure Minimalist': ModernEleganceTemplate, // Fallback
    'Forest Bohemian': BohoRomanceTemplate, // Fallback
    'Cathedral Elegance': ModernEleganceTemplate, // Fallback
    'Vintage Mansion': ModernEleganceTemplate, // Fallback
  };

  // Verificar se existe um template específico
  const SelectedTemplate = templateMap[siteData.templateName];

  if (SelectedTemplate) {
    console.log('✅ Usando template específico:', siteData.templateName);
    return <SelectedTemplate siteData={siteData} siteId={siteId} />;
  }

  // Fallback para o sistema antigo
  console.log('🔄 Usando sistema de template antigo para:', siteData.templateName);
  return <PreviewSite data={siteData} siteId={siteId} />;
};

export default SiteRenderer;
