
import { supabase } from "@/integrations/supabase/client";

// Função para fazer upload de imagem
export const uploadImage = async (file: File | Blob, bucket: string, path: string): Promise<string | null> => {
  try {
    const fileExt = file instanceof File ? file.name.split('.').pop() : 'jpg';
    const fileName = `${path}/${Date.now()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(fileName, file);

    if (uploadError) {
      console.error('Erro no upload:', uploadError);
      return null;
    }

    // Obter URL pública do arquivo
    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(fileName);

    return data.publicUrl;
  } catch (error) {
    console.error('Erro ao fazer upload:', error);
    return null;
  }
};

// Função para deletar imagem
export const deleteImage = async (bucket: string, path: string): Promise<boolean> => {
  try {
    const { error } = await supabase.storage
      .from(bucket)
      .remove([path]);

    if (error) {
      console.error('Erro ao deletar:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Erro ao deletar imagem:', error);
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
    console.error('Erro ao extrair path:', error);
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
