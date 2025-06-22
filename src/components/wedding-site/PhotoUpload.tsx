
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Upload, X, Image } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useModernVisualTokens } from "@/contexts/ModernVisualTokensContext";

interface PhotoUploadProps {
  onPhotoUploaded: (url: string) => void;
}

const PhotoUpload = ({ onPhotoUploaded }: PhotoUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const { toast } = useToast();
  const { couplePhotoUrl, setCouplePhotoUrl } = useModernVisualTokens();

  const uploadPhoto = async (file: File) => {
    try {
      setUploading(true);

      // Validate file type
      if (!file.type.startsWith('image/')) {
        throw new Error('Por favor, selecione apenas arquivos de imagem');
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        throw new Error('A imagem deve ter menos de 5MB');
      }

      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

      const { data, error } = await supabase.storage
        .from('couple-photos')
        .upload(fileName, file);

      if (error) throw error;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('couple-photos')
        .getPublicUrl(fileName);

      console.log('📸 Foto do casal carregada:', publicUrl);
      
      // Update context
      setCouplePhotoUrl(publicUrl);
      onPhotoUploaded(publicUrl);

      toast({
        title: "Foto carregada com sucesso!",
        description: "A foto do casal foi atualizada.",
      });

    } catch (error: any) {
      console.error('Erro ao fazer upload:', error);
      toast({
        title: "Erro ao carregar foto",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      uploadPhoto(file);
    }
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setDragOver(false);
    
    const file = event.dataTransfer.files[0];
    if (file) {
      uploadPhoto(file);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const removePhoto = () => {
    setCouplePhotoUrl(null);
    onPhotoUploaded('');
    toast({
      title: "Foto removida",
      description: "A foto do casal foi removida.",
    });
  };

  return (
    <div className="space-y-4">
      {couplePhotoUrl ? (
        <div className="relative">
          <img
            src={couplePhotoUrl}
            alt="Foto do casal"
            className="w-full max-w-md h-64 object-cover rounded-lg border-2 border-gray-200"
          />
          <Button
            variant="destructive"
            size="sm"
            onClick={removePhoto}
            className="absolute top-2 right-2"
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
            Foto do casal
          </div>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragOver
              ? 'border-blue-400 bg-blue-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <Image className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-sm text-gray-600 mb-4">
            Arraste uma foto aqui ou clique para selecionar
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            id="photo-upload"
            disabled={uploading}
          />
          <label htmlFor="photo-upload">
            <Button
              type="button"
              variant="outline"
              disabled={uploading}
              className="cursor-pointer"
              asChild
            >
              <span>
                <Upload className="h-4 w-4 mr-2" />
                {uploading ? 'Carregando...' : 'Selecionar Foto'}
              </span>
            </Button>
          </label>
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
