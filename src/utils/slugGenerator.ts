
export const generateSlug = (coupleNames: string, weddingDate: string): string => {
  console.log('🔧 Gerando slug para:', { coupleNames, weddingDate });
  
  // Normalize couple names with proper accent removal
  const normalizedNames = coupleNames
    .toLowerCase()
    .normalize('NFD') // Decompose accented characters
    .replace(/[\u0300-\u036f]/g, '') // Remove accent marks
    .replace(/[^a-z0-9\s&-]/g, '') // Keep only letters, numbers, spaces, & and -
    .replace(/\s*&\s*/g, '-e-') // Replace & with -e-
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/-+/g, '-') // Replace multiple - with single -
    .replace(/^-|-$/g, '') // Remove leading/trailing -
    .trim(); // Remove any extra whitespace

  // Extract year from wedding date
  const year = new Date(weddingDate).getFullYear();
  
  const slug = `${normalizedNames}-${year}`;
  console.log('✅ Slug gerado:', slug);
  
  return slug;
};

export const sanitizeSlug = (slug: string): string => {
  return slug
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .trim();
};

export const checkSlugAvailability = async (slug: string, currentSiteId?: string) => {
  // This will be implemented when we add the database check
  // For now, return true (available)
  return true;
};

export const generateUniqueSlug = async (baseSlug: string, currentSiteId?: string): Promise<string> => {
  let slug = baseSlug;
  let counter = 1;
  
  while (!(await checkSlugAvailability(slug, currentSiteId))) {
    counter++;
    slug = `${baseSlug}-${counter}`;
  }
  
  return slug;
};

export const validateSlug = (slug: string): { isValid: boolean; error?: string } => {
  if (!slug || slug.length < 3) {
    return { isValid: false, error: "Slug deve ter pelo menos 3 caracteres" };
  }
  
  if (slug.length > 100) {
    return { isValid: false, error: "Slug deve ter no máximo 100 caracteres" };
  }
  
  if (!/^[a-z0-9-]+$/.test(slug)) {
    return { isValid: false, error: "Slug deve conter apenas letras minúsculas, números e hífens" };
  }
  
  if (slug.startsWith('-') || slug.endsWith('-')) {
    return { isValid: false, error: "Slug não pode começar ou terminar com hífen" };
  }
  
  if (slug.includes('--')) {
    return { isValid: false, error: "Slug não pode conter hífens consecutivos" };
  }
  
  return { isValid: true };
};

// Nova função para corrigir slugs existentes
export const fixExistingSlug = (coupleNames: string, weddingDate: string): string => {
  console.log('🔧 Corrigindo slug existente para:', { coupleNames, weddingDate });
  
  // Aplicar a nova lógica de geração
  const correctedSlug = generateSlug(coupleNames, weddingDate);
  
  console.log('✅ Slug corrigido:', correctedSlug);
  return correctedSlug;
};
