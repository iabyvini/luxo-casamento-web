
import React, { useState, useRef } from 'react';
import { Camera, Upload, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useModernVisualTokens } from '@/contexts/ModernVisualTokensContext';

interface PhotoUploadProps {
  frameStyle?: 'classic' | 'modern' | 'rustic';
  compact?: boolean;
  siteId: string;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({ 
  frameStyle = 'classic', 
  compact = false,
  siteId 
}) => {
  const { couplePhotoUrl, setCouplePhotoUrl } = useModernVisualTokens();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const validateImageFile = (file: File): { valid: boolean; error?: string } => {
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

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    console.log('📁 Arquivo selecionado:', file.name, file.size, file.type);

    const validation = validateImageFile(file);
    if (!validation.valid) {
      toast({
        title: "Arquivo inválido",
        description: validation.error,
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    try {
      // Remover foto anterior se existir
      if (couplePhotoUrl) {
        const oldPath = extractPathFromUrl(couplePhotoUrl);
        if (oldPath) {
          console.log('🗑️ Removendo foto anterior:', oldPath);
          await supabase.storage
            .from('couple-photos')
            .remove([oldPath]);
        }
      }

      // Nome único para o arquivo
      const fileExt = file.name.split('.').pop();
      const fileName = `couple_${siteId}_${Date.now()}.${fileExt}`;
      
      console.log('📤 Fazendo upload:', fileName);

      // Upload do arquivo
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('couple-photos')
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
        .from('couple-photos')
        .getPublicUrl(fileName);

      const photoUrl = urlData.publicUrl;
      console.log('🔗 URL gerada:', photoUrl);

      // Salvar no banco de dados
      const { error: dbError } = await supabase
        .from('wedding_sites')
        .update({ couple_photo_url: photoUrl })
        .eq('id', siteId);

      if (dbError) {
        console.error('❌ Erro ao salvar no banco:', dbError);
        throw new Error('Falha ao salvar no banco de dados');
      }

      // Atualizar contexto
      setCouplePhotoUrl(photoUrl);
      
      console.log('✅ Upload concluído com sucesso!');
      toast({
        title: "Foto enviada!",
        description: "A foto do casal foi atualizada com sucesso.",
      });

    } catch (error: any) {
      console.error('❌ Erro completo:', error);
      toast({
        title: "Erro no upload",
        description: error.message || "Não foi possível enviar a foto. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const extractPathFromUrl = (url: string): string | null => {
    try {
      const bucketPath = '/storage/v1/object/public/couple-photos/';
      const pathIndex = url.indexOf(bucketPath);
      
      if (pathIndex === -1) return null;
      
      return url.substring(pathIndex + bucketPath.length);
    } catch (error) {
      console.error('❌ Erro ao extrair path:', error);
      return null;
    }
  };

  const handleRemovePhoto = async () => {
    if (!couplePhotoUrl) return;

    try {
      console.log('🗑️ Removendo foto:', couplePhotoUrl);

      // Remover do storage
      const path = extractPathFromUrl(couplePhotoUrl);
      if (path) {
        await supabase.storage
          .from('couple-photos')
          .remove([path]);
      }

      // Remover do banco de dados
      const { error } = await supabase
        .from('wedding_sites')
        .update({ couple_photo_url: null })
        .eq('id', siteId);

      if (error) {
        console.error('❌ Erro ao remover do banco:', error);
        throw new Error('Falha ao remover do banco de dados');
      }

      setCouplePhotoUrl(null);
      console.log('✅ Foto removida com sucesso!');
      toast({
        title: "Foto removida",
        description: "A foto do casal foi removida com sucesso.",
      });
    } catch (error: any) {
      console.error('❌ Erro ao remover foto:', error);
      toast({
        title: "Erro ao remover",
        description: error.message || "Não foi possível remover a foto.",
        variant: "destructive",
      });
    }
  };

  if (compact) {
    return (
      <div className="flex items-center space-x-2">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        <Button
          variant="outline"
          size="sm"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
        >
          {uploading ? (
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
          ) : (
            <Camera className="h-4 w-4 mr-2" />
          )}
          {couplePhotoUrl ? 'Trocar Foto' : 'Adicionar Foto'}
        </Button>
        
        {couplePhotoUrl && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRemovePhoto}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {couplePhotoUrl ? (
        <div className="relative">
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
            <img
              src={couplePhotoUrl}
              alt="Foto do casal"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-center space-x-2 mt-4">
            <Button
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
            >
              {uploading ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <Camera className="h-4 w-4 mr-2" />
              )}
              Trocar Foto
            </Button>
            <Button
              variant="destructive"
              onClick={handleRemovePhoto}
            >
              <X className="h-4 w-4 mr-2" />
              Remover
            </Button>
          </div>
        </div>
      ) : (
        <div 
          className="aspect-[4/3] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors"
          onClick={() => fileInputRef.current?.click()}
        >
          {uploading ? (
            <div className="text-center">
              <Loader2 className="h-8 w-8 text-gray-400 mx-auto mb-2 animate-spin" />
              <p className="text-sm text-gray-500">Enviando...</p>
            </div>
          ) : (
            <div className="text-center">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 font-medium">Clique para adicionar foto</p>
              <p className="text-xs text-gray-500 mt-1">PNG, JPG ou WebP até 5MB</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
