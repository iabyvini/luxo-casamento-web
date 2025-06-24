
import { supabase } from "@/integrations/supabase/client";
import { generateSlug } from "./slugGenerator";

export interface SiteMigrationResult {
  success: boolean;
  siteId: string;
  oldSlug: string;
  newSlug: string;
  error?: string;
}

export const migrateSingleSiteSlug = async (
  siteId: string, 
  coupleNames: string, 
  weddingDate: string
): Promise<SiteMigrationResult> => {
  try {
    console.log('🔄 Migrando slug para site:', { siteId, coupleNames, weddingDate });
    
    // Buscar o site atual
    const { data: currentSite, error: fetchError } = await supabase
      .from('wedding_sites')
      .select('slug')
      .eq('id', siteId)
      .single();

    if (fetchError) throw fetchError;
    
    const oldSlug = currentSite.slug;
    const newSlug = generateSlug(coupleNames, weddingDate);
    
    console.log('🔄 Slug migration:', { oldSlug, newSlug });
    
    // Se o slug já está correto, não fazer nada
    if (oldSlug === newSlug) {
      console.log('✅ Slug já está correto');
      return {
        success: true,
        siteId,
        oldSlug,
        newSlug,
      };
    }
    
    // Atualizar o slug
    const { error: updateError } = await supabase
      .from('wedding_sites')
      .update({ slug: newSlug })
      .eq('id', siteId);

    if (updateError) throw updateError;
    
    console.log('✅ Slug migrado com sucesso');
    return {
      success: true,
      siteId,
      oldSlug,
      newSlug,
    };
    
  } catch (error: any) {
    console.error('❌ Erro ao migrar slug:', error);
    return {
      success: false,
      siteId,
      oldSlug: 'unknown',
      newSlug: 'unknown',
      error: error.message,
    };
  }
};

export const migrateAllSiteSlugs = async (): Promise<SiteMigrationResult[]> => {
  try {
    console.log('🔄 Iniciando migração de todos os slugs...');
    
    // Buscar todos os sites
    const { data: sites, error: fetchError } = await supabase
      .from('wedding_sites')
      .select('id, slug, couple_names, wedding_date');

    if (fetchError) throw fetchError;
    
    const results: SiteMigrationResult[] = [];
    
    for (const site of sites || []) {
      const result = await migrateSingleSiteSlug(
        site.id,
        site.couple_names,
        site.wedding_date
      );
      results.push(result);
    }
    
    console.log('✅ Migração concluída:', results);
    return results;
    
  } catch (error: any) {
    console.error('❌ Erro na migração geral:', error);
    return [];
  }
};
