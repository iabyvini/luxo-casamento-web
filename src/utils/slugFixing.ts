
import { supabase } from "@/integrations/supabase/client";

// Função para corrigir problemas específicos de acentuação
export const fixAccentIssues = (text: string): string => {
  return text
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[ñ]/g, 'n')
    .replace(/[ÀÁÂÃÄÅ]/g, 'A')
    .replace(/[ÈÉÊË]/g, 'E')
    .replace(/[ÌÍÎÏ]/g, 'I')
    .replace(/[ÒÓÔÕÖ]/g, 'O')
    .replace(/[ÙÚÛÜ]/g, 'U')
    .replace(/[Ç]/g, 'C')
    .replace(/[Ñ]/g, 'N');
};

export const generateCorrectSlug = (coupleNames: string, weddingDate: string): string => {
  console.log('🔧 Gerando slug correto para:', { coupleNames, weddingDate });
  
  // Primeiro, normalizar e remover acentos corretamente
  const normalizedNames = coupleNames
    .toLowerCase()
    .trim()
    // Usar nossa função personalizada para remover acentos
    .replace(/[àáâãäåèéêëìíîïòóôõöùúûüç]/g, (char) => {
      const accentsMap: { [key: string]: string } = {
        'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a',
        'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e',
        'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i',
        'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o',
        'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u',
        'ç': 'c'
      };
      return accentsMap[char] || char;
    })
    // Remover caracteres especiais exceto espaços, & e -
    .replace(/[^a-z0-9\s&-]/g, '')
    // Substituir & por -e-
    .replace(/\s*&\s*/g, '-e-')
    // Substituir espaços por hífens
    .replace(/\s+/g, '-')
    // Remover hífens múltiplos
    .replace(/-+/g, '-')
    // Remover hífens no início e fim
    .replace(/^-|-$/g, '');

  const year = new Date(weddingDate).getFullYear();
  const slug = `${normalizedNames}-${year}`;
  
  console.log('✅ Slug correto gerado:', slug);
  return slug;
};

// Função para corrigir slugs específicos conhecidos
export const getCorrectSlugMapping = (): { [key: string]: string } => {
  return {
    'gabriela-e-felipe-2026-4963': 'gabriela-e-felipe-2026',
    'flora-e-vincius-2026-8293': 'flora-e-vinicius-2026', 
    'ana-e-joo-2026-8304': 'ana-e-joao-2026'
  };
};

export const fixSpecificSlugs = async () => {
  const slugMapping = getCorrectSlugMapping();
  
  for (const [oldSlug, newSlug] of Object.entries(slugMapping)) {
    console.log(`🔄 Corrigindo slug: ${oldSlug} -> ${newSlug}`);
    
    const { error } = await supabase
      .from('wedding_sites')
      .update({ slug: newSlug })
      .eq('slug', oldSlug);
    
    if (error) {
      console.error(`❌ Erro ao corrigir slug ${oldSlug}:`, error);
    } else {
      console.log(`✅ Slug ${oldSlug} corrigido para ${newSlug}`);
    }
  }
};
