
import { supabase } from "@/integrations/supabase/client";
import { generateSlug } from "./slugGenerator";

export const generateCorrectSlug = (coupleNames: string, weddingDate: string): string => {
  console.log('🔧 Gerando slug correto para:', { coupleNames, weddingDate });
  
  // Usar a função centralizada do slugGenerator
  const slug = generateSlug(coupleNames, weddingDate);
  
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
