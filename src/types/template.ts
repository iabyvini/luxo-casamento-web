
// Tipos básicos para compatibilidade - serão removidos quando novos templates forem adicionados
import { PreviewData } from '@/types/quiz';

export interface TemplateProps {
  siteData: PreviewData;
  siteId?: string;
}
