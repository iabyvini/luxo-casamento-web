// Biblioteca de templates limpa - será preenchida com novos templates
export interface ExtendedTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  colors: string[];
  fonts: {
    heading: string;
    body: string;
    accent: string;
  };
  component: string;
  sections: string[];
  mood: string[];
}

export const EXTENDED_TEMPLATE_LIBRARY: ExtendedTemplate[] = [
  // Templates serão adicionados aqui conforme suas instruções
];
