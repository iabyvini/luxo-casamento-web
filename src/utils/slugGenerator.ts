
export const generateSlug = (coupleNames: string, weddingDate: string): string => {
  // Normalize couple names
  const normalizedNames = coupleNames
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9\s&-]/g, '') // Keep only letters, numbers, spaces, & and -
    .replace(/\s*&\s*/g, '-e-') // Replace & with -e-
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/-+/g, '-') // Replace multiple - with single -
    .replace(/^-|-$/g, ''); // Remove leading/trailing -

  // Extract year from wedding date
  const year = new Date(weddingDate).getFullYear();
  
  return `${normalizedNames}-${year}`;
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
