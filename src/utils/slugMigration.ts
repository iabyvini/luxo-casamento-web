
import { supabase } from "@/integrations/supabase/client";
import { generateSlug, validateSlug } from "./slugGenerator";

export interface SiteMigrationResult {
  siteId: string;
  oldSlug: string;
  newSlug: string;
  success: boolean;
  error?: string;
}

export const migrateAllSiteSlugs = async (): Promise<SiteMigrationResult[]> => {
  try {
    console.log('🔄 Iniciando migração de todos os slugs...');
    
    // Buscar todos os sites
    const { data: sites, error } = await supabase
      .from('wedding_sites')
      .select('id, couple_names, wedding_date, slug');

    if (error) {
      throw error;
    }

    if (!sites || sites.length === 0) {
      console.log('📭 Nenhum site encontrado para migração');
      return [];
    }

    const results: SiteMigrationResult[] = [];

    for (const site of sites) {
      const { id, couple_names, wedding_date, slug: currentSlug } = site;
      
      try {
        // Gerar o slug correto usando a função centralizada
        const correctSlug = generateSlug(couple_names, wedding_date);
        
        // Verificar se o slug precisa ser corrigido
        if (currentSlug === correctSlug) {
          console.log(`✅ Slug já está correto: ${currentSlug}`);
          results.push({
            siteId: id,
            oldSlug: currentSlug,
            newSlug: correctSlug,
            success: true
          });
          continue;
        }

        // Validar o novo slug
        const validation = validateSlug(correctSlug);
        if (!validation.isValid) {
          console.error(`❌ Slug inválido para ${couple_names}: ${validation.error}`);
          results.push({
            siteId: id,
            oldSlug: currentSlug,
            newSlug: correctSlug,
            success: false,
            error: validation.error
          });
          continue;
        }

        // Atualizar o slug no banco
        const { error: updateError } = await supabase
          .from('wedding_sites')
          .update({ slug: correctSlug })
          .eq('id', id);

        if (updateError) {
          console.error(`❌ Erro ao atualizar slug para ${couple_names}:`, updateError);
          results.push({
            siteId: id,
            oldSlug: currentSlug,
            newSlug: correctSlug,
            success: false,
            error: updateError.message
          });
        } else {
          console.log(`✅ Slug atualizado: ${currentSlug} → ${correctSlug}`);
          results.push({
            siteId: id,
            oldSlug: currentSlug,
            newSlug: correctSlug,
            success: true
          });
        }

      } catch (siteError: any) {
        console.error(`❌ Erro ao processar site ${couple_names}:`, siteError);
        results.push({
          siteId: id,
          oldSlug: currentSlug,
          newSlug: currentSlug,
          success: false,
          error: siteError.message
        });
      }
    }

    console.log('✅ Migração concluída:', results);
    return results;

  } catch (error: any) {
    console.error('💥 Erro geral na migração:', error);
    throw error;
  }
};
