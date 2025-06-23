
import { supabase } from "@/integrations/supabase/client";

// Função para fazer upload de imagem
export const uploadImage = async (file: File | Blob, bucket: string, path: string): Promise<string | null> => {
  try {
    console.log('📤 Iniciando upload para bucket:', bucket, 'path:', path);
    
    const fileExt = file instanceof File ? file.name.split('.').pop() : 'jpg';
    const fileName = `${path}.${fileExt}`;

    console.log('📁 Nome do arquivo final:', fileName);

    // Fazer upload do arquivo
    const { data, error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: true // Permite substituir arquivo existente
      });

    if (uploadError) {
      console.error('❌ Erro no upload:', uploadError);
      throw new Error(`Erro no upload: ${uploadError.message}`);
    }

    console.log('✅ Upload realizado:', data);

    // Obter URL pública do arquivo
    const { data: urlData } = supabase.storage
      .from(bucket)
      .getPublicUrl(fileName);

    console.log('🔗 URL pública gerada:', urlData.publicUrl);

    return urlData.publicUrl;
  } catch (error: any) {
    console.error('❌ Erro ao fazer upload:', error);
    throw error;
  }
};

// Função para deletar imagem
export const deleteImage = async (bucket: string, path: string): Promise<boolean> => {
  try {
    console.log('🗑️ Deletando arquivo:', bucket, path);
    
    const { error } = await supabase.storage
      .from(bucket)
      .remove([path]);

    if (error) {
      console.error('❌ Erro ao deletar:', error);
      return false;
    }

    console.log('✅ Arquivo deletado com sucesso');
    return true;
  } catch (error) {
    console.error('❌ Erro ao deletar imagem:', error);
    return false;
  }
};

// Função para extrair o path da URL pública
export const extractPathFromUrl = (url: string, bucket: string): string | null => {
  try {
    const bucketPath = `/storage/v1/object/public/${bucket}/`;
    const pathIndex = url.indexOf(bucketPath);
    
    if (pathIndex === -1) return null;
    
    return url.substring(pathIndex + bucketPath.length);
  } catch (error) {
    console.error('❌ Erro ao extrair path:', error);
    return null;
  }
};

// Validar arquivo de imagem
export const validateImageFile = (file: File): { valid: boolean; error?: string } => {
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

// Criar blob file a partir de blob
export const createFileFromBlob = (blob: Blob, fileName: string): File => {
  return new File([blob], fileName, { type: blob.type });
};
