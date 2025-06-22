
import React, { useState, useRef } from 'react';
import { Camera, Upload, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useVisualTokens } from '@/contexts/VisualTokensContext';
import ImageCropper from '../ImageCropper';
import { uploadImage, validateImageFile, createFileFromBlob } from '@/utils/supabaseStorage';
import { useToast } from '@/hooks/use-toast';

interface PhotoUploadProps {
  onPhotoChange?: (photoUrl: string | null) => void;
  frameStyle: 'floral' | 'vintage' | 'modern' | 'geometric' | 'organic';
  fallbackIllustration?: string;
  compact?: boolean;
  siteId?: string;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({ 
  onPhotoChange, 
  frameStyle, 
  fallbackIllustration,
  compact = false,
  siteId
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [showCropper, setShowCropper] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { visualTokens, isCustomThemeActive, couplePhotoUrl, setCouplePhotoUrl } = useVisualTokens();
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
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

    setSelectedFile(file);
    setShowCropper(true);
  };

  const handleCropComplete = async (croppedBlob: Blob) => {
    if (!siteId) {
      // Para preview, usar URL local
      const url = URL.createObjectURL(croppedBlob);
      setCouplePhotoUrl(url);
      onPhotoChange?.(url);
      return;
    }

    setIsUploading(true);
    try {
      const imageUrl = await uploadImage(croppedBlob, 'couple-photos', siteId);
      
      if (!imageUrl) {
        throw new Error('Falha no upload da imagem');
      }

      setCouplePhotoUrl(imageUrl);
      onPhotoChange?.(imageUrl);
      
      toast({
        title: "Foto carregada!",
        description: "A foto do casal foi adicionada com sucesso.",
      });
    } catch (error: any) {
      toast({
        title: "Erro no upload",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemovePhoto = () => {
    setCouplePhotoUrl(null);
    onPhotoChange?.(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getFrameClasses = () => {
    const primaryColor = visualTokens?.colors.primary || '#a67c52';
    
    switch (frameStyle) {
      case 'floral':
        return {
          container: 'rounded-3xl shadow-2xl bg-gradient-to-br from-white to-pink-50',
          border: `border-4`,
          borderColor: isCustomThemeActive ? primaryColor : '#f8bbd9',
          shadow: 'shadow-pink-200/50'
        };
      case 'vintage':
        return {
          container: 'rounded-2xl shadow-2xl bg-gradient-to-br from-amber-50 to-yellow-100',
          border: 'border-4',
          borderColor: isCustomThemeActive ? primaryColor : '#d97706',
          shadow: 'shadow-amber-200/50'
        };
      case 'modern':
        return {
          container: 'rounded-lg shadow-xl bg-white',
          border: 'border-2',
          borderColor: isCustomThemeActive ? primaryColor : '#374151',
          shadow: 'shadow-gray-300/30'
        };
      case 'geometric':
        return {
          container: 'rounded-xl shadow-xl bg-gradient-to-br from-blue-50 to-indigo-100',
          border: 'border-3',
          borderColor: isCustomThemeActive ? primaryColor : '#3b82f6',
          shadow: 'shadow-blue-200/50'
        };
      case 'organic':
        return {
          container: 'rounded-full shadow-xl bg-gradient-to-br from-green-50 to-emerald-100',
          border: 'border-4',
          borderColor: isCustomThemeActive ? primaryColor : '#10b981',
          shadow: 'shadow-emerald-200/50'
        };
      default:
        return {
          container: 'rounded-2xl shadow-lg bg-gradient-to-br from-neutral-50 to-amber-100',
          border: 'border-3',
          borderColor: isCustomThemeActive ? primaryColor : '#a67c52',
          shadow: 'shadow-neutral-200/40'
        };
    }
  };

  const getFallbackContent = () => {
    const frameConfig = getFrameClasses();
    
    return (
      <div className="w-full h-full flex items-center justify-center text-current">
        <div className="text-center">
          <div className="text-4xl mb-3 opacity-40">💕</div>
          <p className="text-xs font-medium" style={{ color: frameConfig.borderColor }}>
            Sua foto aqui
          </p>
        </div>
      </div>
    );
  };

  const frameConfig = getFrameClasses();
  const size = compact ? 'w-32 h-32 md:w-40 md:h-40' : 'w-48 h-48 md:w-64 md:h-64';

  return (
    <>
      <div className="relative">
        <div 
          className={`${size} overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${frameConfig.container} ${frameConfig.border} ${frameConfig.shadow}`}
          style={{ 
            borderColor: frameConfig.borderColor
          }}
        >
          {couplePhotoUrl ? (
            <div className="relative w-full h-full">
              <img 
                src={couplePhotoUrl} 
                alt="Foto do casal" 
                className="w-full h-full object-cover"
              />
              <Button
                onClick={handleRemovePhoto}
                size="sm"
                variant="destructive"
                className="absolute top-2 right-2 h-6 w-6 p-0 rounded-full opacity-80 hover:opacity-100"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ) : (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="w-full h-full hover:bg-opacity-80 transition-all duration-300"
            >
              {getFallbackContent()}
            </div>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />

        {!couplePhotoUrl && !compact && (
          <Button
            onClick={() => fileInputRef.current?.click()}
            className="mt-3 w-full transition-all duration-300 hover:scale-105 text-sm"
            style={{ 
              background: isCustomThemeActive ? visualTokens?.colors.primary : '#3C2B20',
              color: 'white'
            }}
            disabled={isUploading}
          >
            <Upload className="h-4 w-4 mr-2" />
            {isUploading ? 'Carregando...' : 'Adicionar Foto'}
          </Button>
        )}

        {couplePhotoUrl && !compact && (
          <div className="flex items-center justify-center mt-2">
            <Check className="h-4 w-4 text-green-600 mr-1" />
            <span className="text-xs text-green-600 font-medium">Foto adicionada</span>
          </div>
        )}
      </div>

      {selectedFile && (
        <ImageCropper
          isOpen={showCropper}
          onClose={() => setShowCropper(false)}
          onCropComplete={handleCropComplete}
          imageFile={selectedFile}
          title="Recortar Foto do Casal"
        />
      )}
    </>
  );
};

export default PhotoUpload;
