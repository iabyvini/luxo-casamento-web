
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
    'ana-e-joo-2026-8304': 'ana-e-joao-2026',
    // Correções específicas para variações de acentuação
    'flora-e-vinicius-2025-9347': 'flora-e-vinicius-2025-9347',
    'flora-e-vincius-2025-9347': 'flora-e-vinicius-2025-9347', // Slug sem "i"
    // Adicionar variações comuns
    'flora-e-vinícius-2025-9347': 'flora-e-vinicius-2025-9347', // Com acento
    'flora-e-vincius-2025-9347-alt': 'flora-e-vinicius-2025-9347'  // Alternativa para evitar duplicata
  };
};

// Nova função para detectar similaridade melhorada
export const findSimilarSlug = (inputSlug: string, availableSlugs: string[]): string | null => {
  console.log('🔍 Procurando slug similar para:', inputSlug);
  console.log('📋 Slugs disponíveis:', availableSlugs);
  
  const normalizeForComparison = (slug: string) => {
    return slug
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^a-z0-9-]/g, '') // Remove caracteres especiais
      .trim();
  };
  
  const normalizedInput = normalizeForComparison(inputSlug);
  console.log('🔧 Input normalizado:', normalizedInput);
  
  // Busca exata normalizada
  for (const availableSlug of availableSlugs) {
    const normalizedAvailable = normalizeForComparison(availableSlug);
    console.log('🔍 Comparando:', normalizedInput, 'vs', normalizedAvailable);
    
    if (normalizedInput === normalizedAvailable) {
      console.log('✅ Match exato encontrado:', availableSlug);
      return availableSlug;
    }
  }
  
  // Busca por similaridade (permitindo pequenas diferenças como "vincius" vs "vinicius")
  for (const availableSlug of availableSlugs) {
    const normalizedAvailable = normalizeForComparison(availableSlug);
    
    // Calcular distância de Levenshtein simples
    const similarity = calculateSimilarity(normalizedInput, normalizedAvailable);
    console.log('📊 Similaridade entre', normalizedInput, 'e', normalizedAvailable, ':', similarity);
    
    // Se similaridade > 85% e diferença <= 2 caracteres
    if (similarity > 85 && Math.abs(normalizedInput.length - normalizedAvailable.length) <= 2) {
      console.log('✅ Match por similaridade encontrado:', availableSlug);
      return availableSlug;
    }
  }
  
  console.log('❌ Nenhum slug similar encontrado');
  return null;
};

// Função auxiliar para calcular similaridade simples
const calculateSimilarity = (str1: string, str2: string): number => {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  
  if (longer.length === 0) return 100;
  
  const editDistance = levenshteinDistance(longer, shorter);
  return ((longer.length - editDistance) / longer.length) * 100;
};

// Implementação simples da distância de Levenshtein
const levenshteinDistance = (str1: string, str2: string): number => {
  const matrix = [];
  
  if (str1.length === 0) return str2.length;
  if (str2.length === 0) return str1.length;
  
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  
  return matrix[str2.length][str1.length];
};

export const fixSpecificSlugs = async () => {
  const slugMapping = getCorrectSlugMapping();
  
  for (const [oldSlug, newSlug] of Object.entries(slugMapping)) {
    // Pular se o slug já está correto
    if (oldSlug === newSlug) {
      console.log(`✅ Slug ${oldSlug} já está correto, pulando...`);
      continue;
    }
    
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
