
import { PreviewData } from "@/types/quiz";
import ModernEleganceTemplate from "./templates/ModernElegance/ModernEleganceTemplate";
import BohoRomanceTemplate from "./templates/BohoRomance/BohoRomanceTemplate";
import DefaultTemplate from "./templates/DefaultTemplate/DefaultTemplate";
import ClassicRomanticTemplate from "./templates/ClassicRomantic/ClassicRomanticTemplate";
import EditorialModernTemplate from "./templates/EditorialModern/EditorialModernTemplate";
import BohoFestivalTemplate from "./templates/BohoFestival/BohoFestivalTemplate";
import NeonPopChicTemplate from "./templates/NeonPopChic/NeonPopChicTemplate";
import ToscanaEleganteTemplate from "./templates/ToscanaElegante/ToscanaEleganteTemplate";
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

  // Mapeamento de templates expandido para todos os 50 templates
  const templateMap: Record<string, React.ComponentType<any>> = {
    // Templates da biblioteca estendida (50 templates)
    'Toscana Elegante': ToscanaEleganteTemplate,
    'toscana-elegante': ToscanaEleganteTemplate,
    'Minimalista Mármore': DefaultTemplate,
    'minimalista-marmore': DefaultTemplate,
    'Romântico Floral Escuro': DefaultTemplate,
    'romantico-floral-escuro': DefaultTemplate,
    'Vintage Floral': DefaultTemplate,
    'vintage-floral': DefaultTemplate,
    'Tropical Praia Branca': DefaultTemplate,
    'tropical-praia-branca': DefaultTemplate,
    'Clássico Europeu': ClassicRomanticTemplate,
    'classico-europeu': ClassicRomanticTemplate,
    'Jardim Boho': BohoRomanceTemplate,
    'jardim-boho': BohoRomanceTemplate,
    'Industrial Minimal': EditorialModernTemplate,
    'industrial-minimal': EditorialModernTemplate,
    'Arte Contemporânea': NeonPopChicTemplate,
    'arte-contemporanea': NeonPopChicTemplate,
    'Minimal Chic': ModernEleganceTemplate,
    'minimal-chic': ModernEleganceTemplate,
    'Campo Rústico': DefaultTemplate,
    'campo-rustico': DefaultTemplate,
    'Cinema Noir': DefaultTemplate,
    'cinema-noir': DefaultTemplate,
    'Céu Estrelado': DefaultTemplate,
    'ceu-estrelado': DefaultTemplate,
    'Boho Tropical': BohoRomanceTemplate,
    'boho-tropical': BohoRomanceTemplate,
    'Monocromático Luxo': ModernEleganceTemplate,
    'monocromatico-luxo': ModernEleganceTemplate,
    'Primavera Delicada': DefaultTemplate,
    'primavera-delicada': DefaultTemplate,
    'Urbano Moderno': EditorialModernTemplate,
    'urbano-moderno': EditorialModernTemplate,
    'Outono Dourado': DefaultTemplate,
    'outono-dourado': DefaultTemplate,
    'Lago Sereno': DefaultTemplate,
    'lago-sereno': DefaultTemplate,
    'Festa Latina': DefaultTemplate,
    'festa-latina': DefaultTemplate,
    'Montanha Majestosa': DefaultTemplate,
    'montanha-majestosa': DefaultTemplate,
    'Jardim Secreto': DefaultTemplate,
    'jardim-secreto': DefaultTemplate,
    'Pôr do Sol Infinito': DefaultTemplate,
    'pordosol-infinito': DefaultTemplate,
    'Vintage Gold': DefaultTemplate,
    'vintage-gold': DefaultTemplate,
    'Urbano Chic': EditorialModernTemplate,
    'urbano-chic': EditorialModernTemplate,
    'Tropical Romântico': DefaultTemplate,
    'tropical-romantico': DefaultTemplate,
    'Tropicalia Boho': BohoRomanceTemplate,
    'tropicalia-boho': BohoRomanceTemplate,
    'Rustic Autumn': DefaultTemplate,
    'rustic-autumn': DefaultTemplate,
    'Starry Night': DefaultTemplate,
    'starry-night': DefaultTemplate,
    'Toscana Elegante II': ToscanaEleganteTemplate,
    'toscana-elegante-2': ToscanaEleganteTemplate,
    'Primavera Light': DefaultTemplate,
    'primavera-light': DefaultTemplate,
    'Pôr do Sol Suave': DefaultTemplate,
    'pordosol-suave': DefaultTemplate,
    'Praia Solar': DefaultTemplate,
    'praia-solar': DefaultTemplate,
    'Outono Quente': DefaultTemplate,
    'outono-quente': DefaultTemplate,
    'Montanha Natureza': DefaultTemplate,
    'montanha-natureza': DefaultTemplate,
    'Noir Cinema': DefaultTemplate,
    'noir-cinema': DefaultTemplate,
    'Monet Garden': DefaultTemplate,
    'monet-garden': DefaultTemplate,
    'Minimal Marrom': ModernEleganceTemplate,
    'minimal-marron': ModernEleganceTemplate,
    'Luxe Minimal': ModernEleganceTemplate,
    'luxe-minimal': ModernEleganceTemplate,
    'Lago Calmante': DefaultTemplate,
    'lago-calmante': DefaultTemplate,
    'Jardim Encantado': DefaultTemplate,
    'jardim-encantado': DefaultTemplate,
    'Industrial Urbano': EditorialModernTemplate,
    'industrial-urbano': EditorialModernTemplate,
    'Floral Romântico Claro': DefaultTemplate,
    'floral-romantico-claro': DefaultTemplate,
    'Europeu Sofisticado': ClassicRomanticTemplate,
    'europeu-sofisticado': ClassicRomanticTemplate,
    'Festa Alegre': DefaultTemplate,
    'festa-alegre': DefaultTemplate,
    'Cinzento Luxo': ModernEleganceTemplate,
    'cinzento-luxo': ModernEleganceTemplate,
    'Céu Noturno': DefaultTemplate,
    'ceu-noturno': DefaultTemplate,
    'Chic Urbano': EditorialModernTemplate,
    'chic-urbano': EditorialModernTemplate,
    'Campo Vintage': DefaultTemplate,
    'campo-vintage': DefaultTemplate,
    'Boho Garden': BohoRomanceTemplate,
    'boho-garden': BohoRomanceTemplate,
    'Arte Pop': NeonPopChicTemplate,
    'arte-pop': NeonPopChicTemplate,
    
    // Templates da biblioteca anterior (compatibilidade)
    'Clássico Romântico': ClassicRomanticTemplate,
    'Editorial Moderno': EditorialModernTemplate,
    'Boho Festival': BohoFestivalTemplate,
    'Neon Pop Chic': NeonPopChicTemplate,
    'Modern Elegance': ModernEleganceTemplate,
    'Boho Romance': BohoRomanceTemplate,
    'Garden Romance': BohoRomanceTemplate,
    'Pure Minimalist': ModernEleganceTemplate,
    'Forest Bohemian': BohoRomanceTemplate,
    'Cathedral Elegance': ModernEleganceTemplate,
    'Vintage Mansion': ModernEleganceTemplate,
    'default-template': DefaultTemplate,
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
