
import { supabase } from "@/integrations/supabase/client";

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export const validateImageFile = (file: File): ValidationResult => {
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Tipo de arquivo não suportado. Use JPEG, PNG ou WebP.' };
  }

  if (file.size > maxSize) {
    return { valid: false, error: 'Arquivo muito grande. Máximo 5MB.' };
  }

  return { valid: true };
};

export const uploadImage = async (
  file: File | Blob, 
  bucketName: string, 
  siteId: string
): Promise<string | null> => {
  try {
    // Gerar nome único para o arquivo
    const fileExt = file instanceof File ? file.name.split('.').pop() : 'jpg';
    const fileName = `${siteId}_${Date.now()}.${fileExt}`;
    
    console.log(`📤 Fazendo upload para bucket: ${bucketName}, arquivo: ${fileName}`);

    // Upload do arquivo
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: true
      });

    if (uploadError) {
      console.error('❌ Erro no upload:', uploadError);
      throw new Error(`Erro no upload: ${uploadError.message}`);
    }

    console.log('✅ Upload realizado:', uploadData);

    // Obter URL pública
    const { data: urlData } = supabase.storage
      .from(bucketName)
      .getPublicUrl(fileName);

    const photoUrl = urlData.publicUrl;
    console.log('🔗 URL gerada:', photoUrl);

    return photoUrl;
  } catch (error: any) {
    console.error('❌ Erro completo no upload:', error);
    return null;
  }
};

export const deleteImage = async (bucketName: string, filePath: string): Promise<void> => {
  try {
    console.log(`🗑️ Deletando arquivo: ${bucketName}/${filePath}`);
    
    const { error } = await supabase.storage
      .from(bucketName)
      .remove([filePath]);

    if (error) {
      console.error('❌ Erro ao deletar:', error);
      throw error;
    }

    console.log('✅ Arquivo deletado com sucesso');
  } catch (error: any) {
    console.error('❌ Erro ao deletar arquivo:', error);
    throw error;
  }
};

export const extractPathFromUrl = (url: string, bucketName: string): string | null => {
  try {
    const bucketPath = `/storage/v1/object/public/${bucketName}/`;
    const pathIndex = url.indexOf(bucketPath);
    
    if (pathIndex === -1) return null;
    
    return url.substring(pathIndex + bucketPath.length);
  } catch (error) {
    console.error('❌ Erro ao extrair path:', error);
    return null;
  }
};
