
import React, { useState, useRef } from 'react';
import { Camera, Upload, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { uploadImage, deleteImage, extractPathFromUrl, validateImageFile } from '@/utils/supabaseStorage';
import { useModernVisualTokens } from '@/contexts/ModernVisualTokensContext';
import { supabase } from '@/integrations/supabase/client';

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

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

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
      // Deletar foto anterior se existir
      if (couplePhotoUrl) {
        const oldPath = extractPathFromUrl(couplePhotoUrl, 'couple-photos');
        if (oldPath) {
          await deleteImage('couple-photos', oldPath);
        }
      }

      // Upload nova foto para Supabase Storage
      const photoUrl = await uploadImage(file, 'couple-photos', `${siteId}/couple`);
      
      if (photoUrl) {
        // Salvar URL no banco de dados
        const { error } = await supabase
          .from('wedding_sites')
          .update({ couple_photo_url: photoUrl })
          .eq('id', siteId);

        if (error) {
          console.error('Erro ao salvar URL no banco:', error);
          throw new Error('Falha ao salvar no banco de dados');
        }

        // Atualizar contexto
        setCouplePhotoUrl(photoUrl);
        
        toast({
          title: "Foto enviada!",
          description: "A foto do casal foi atualizada com sucesso.",
        });
      } else {
        throw new Error('Falha no upload');
      }
    } catch (error) {
      console.error('Erro no upload:', error);
      toast({
        title: "Erro no upload",
        description: "Não foi possível enviar a foto. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemovePhoto = async () => {
    if (!couplePhotoUrl) return;

    try {
      // Remover do storage
      const path = extractPathFromUrl(couplePhotoUrl, 'couple-photos');
      if (path) {
        await deleteImage('couple-photos', path);
      }

      // Remover do banco de dados
      const { error } = await supabase
        .from('wedding_sites')
        .update({ couple_photo_url: null })
        .eq('id', siteId);

      if (error) {
        console.error('Erro ao remover URL do banco:', error);
        throw new Error('Falha ao remover do banco de dados');
      }

      setCouplePhotoUrl(null);
      toast({
        title: "Foto removida",
        description: "A foto do casal foi removida com sucesso.",
      });
    } catch (error) {
      console.error('Erro ao remover foto:', error);
      toast({
        title: "Erro ao remover",
        description: "Não foi possível remover a foto.",
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
