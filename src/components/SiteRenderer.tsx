
import { PreviewData } from "@/types/quiz";
import ModernEleganceTemplate from "./templates/ModernElegance/ModernEleganceTemplate";
import BohoRomanceTemplate from "./templates/BohoRomance/BohoRomanceTemplate";
import DefaultTemplate from "./templates/DefaultTemplate/DefaultTemplate";
import ClassicRomanticTemplate from "./templates/ClassicRomantic/ClassicRomanticTemplate";
import EditorialModernTemplate from "./templates/EditorialModern/EditorialModernTemplate";
import BohoFestivalTemplate from "./templates/BohoFestival/BohoFestivalTemplate";
import NeonPopChicTemplate from "./templates/NeonPopChic/NeonPopChicTemplate";
import PreviewSite from "./PreviewSite";
import ErrorBoundary from "./ErrorBoundary";

interface SiteRendererProps {
  siteData: PreviewData;
  siteId?: string;
}

const SiteRenderer = ({ siteData, siteId = "preview" }: SiteRendererProps) => {
  console.log('🎨 SiteRenderer - Template original:', siteData.templateName);
  console.log('🆔 SiteRenderer - SiteId:', siteId);

  // Aplicar fallback se template_name estiver ausente
  let templateName = siteData.templateName;
  if (!templateName) {
    console.warn("❗ template_name ausente, aplicando fallback");
    templateName = "default-template";
  }

  // Mapeamento de templates com fallback garantido
  const templateMap: Record<string, React.ComponentType<any>> = {
    // Novos templates da biblioteca
    'Clássico Romântico': ClassicRomanticTemplate,
    'Editorial Moderno': EditorialModernTemplate,
    'Boho Festival': BohoFestivalTemplate,
    'Neon Pop Chic': NeonPopChicTemplate,
    
    // Templates existentes
    'Modern Elegance': ModernEleganceTemplate,
    'Boho Romance': BohoRomanceTemplate,
    'Garden Romance': BohoRomanceTemplate, // Fallback
    'Pure Minimalist': ModernEleganceTemplate, // Fallback
    'Forest Bohemian': BohoRomanceTemplate, // Fallback
    'Cathedral Elegance': ModernEleganceTemplate, // Fallback
    'Vintage Mansion': ModernEleganceTemplate, // Fallback
    'default-template': DefaultTemplate, // Template de fallback seguro
  };

  // Verificar se existe um template específico
  let SelectedTemplate = templateMap[templateName];

  if (!SelectedTemplate) {
    console.warn(`⚠️ Template "${templateName}" não encontrado. Usando fallback padrão.`);
    SelectedTemplate = DefaultTemplate;
    templateName = "default-template";
  }

  // Criar dados corrigidos com template garantido
  const correctedSiteData = {
    ...siteData,
    templateName: templateName
  };

  console.log('✅ Usando template:', templateName);

  // Renderizar com ErrorBoundary para capturar erros inesperados
  return (
    <ErrorBoundary>
      {SelectedTemplate === DefaultTemplate ? (
        <SelectedTemplate siteData={correctedSiteData} siteId={siteId} />
      ) : (
        <ErrorBoundary fallback={<DefaultTemplate siteData={correctedSiteData} siteId={siteId} />}>
          <SelectedTemplate siteData={correctedSiteData} siteId={siteId} />
        </ErrorBoundary>
      )}
    </ErrorBoundary>
  );
};

export default SiteRenderer;
