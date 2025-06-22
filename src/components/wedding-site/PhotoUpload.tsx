
import React, { useState, useRef } from 'react';
import { Camera, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useVisualTokens } from '@/contexts/VisualTokensContext';

interface PhotoUploadProps {
  onPhotoChange: (photoUrl: string | null) => void;
  frameStyle: 'floral' | 'vintage' | 'modern' | 'geometric' | 'organic';
  fallbackIllustration?: string;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({ 
  onPhotoChange, 
  frameStyle, 
  fallbackIllustration 
}) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { visualTokens, isCustomThemeActive } = useVisualTokens();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = e.target?.result as string;
        setPhotoUrl(url);
        onPhotoChange(url);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setPhotoUrl(null);
    onPhotoChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getFrameClasses = () => {
    // Use visual tokens when available for truly contextual frames
    const primaryColor = visualTokens?.colors.primary || '#a67c52';
    const secondaryColor = visualTokens?.colors.secondary || '#d4af37';
    
    switch (frameStyle) {
      case 'floral':
        return {
          container: 'rounded-3xl shadow-2xl bg-gradient-to-br from-white to-pink-50',
          border: `border-8 border-opacity-30`,
          borderColor: isCustomThemeActive ? primaryColor : '#f8bbd9',
          shadow: `shadow-[0_20px_40px_-12px_${primaryColor}30]`
        };
      case 'vintage':
        return {
          container: 'rounded-lg shadow-2xl bg-gradient-to-br from-amber-50 to-yellow-100',
          border: 'border-8 border-opacity-50',
          borderColor: isCustomThemeActive ? primaryColor : '#d97706',
          shadow: `shadow-[0_25px_50px_-12px_${primaryColor}25]`
        };
      case 'modern':
        return {
          container: 'rounded-none shadow-xl bg-white',
          border: 'border-4 border-opacity-90',
          borderColor: isCustomThemeActive ? primaryColor : '#374151',
          shadow: `shadow-[0_20px_25px_-5px_${primaryColor}20]`
        };
      case 'geometric':
        return {
          container: 'rounded-lg shadow-xl bg-gradient-to-br from-blue-50 to-indigo-100',
          border: 'border-6 border-opacity-60',
          borderColor: isCustomThemeActive ? primaryColor : '#3b82f6',
          shadow: `shadow-[0_20px_40px_-10px_${primaryColor}30]`
        };
      case 'organic':
        return {
          container: 'rounded-full shadow-xl bg-gradient-to-br from-green-50 to-emerald-100',
          border: 'border-8 border-opacity-40',
          borderColor: isCustomThemeActive ? primaryColor : '#10b981',
          shadow: `shadow-[0_25px_45px_-10px_${primaryColor}25]`
        };
      default:
        return {
          container: 'rounded-2xl shadow-lg bg-gradient-to-br from-brown-50 to-amber-100',
          border: 'border-4 border-opacity-50',
          borderColor: isCustomThemeActive ? primaryColor : '#a67c52',
          shadow: `shadow-[0_15px_35px_-8px_${primaryColor}20]`
        };
    }
  };

  const getFallbackContent = () => {
    const frameConfig = getFrameClasses();
    
    if (fallbackIllustration) {
      return (
        <div className="w-full h-full flex items-center justify-center text-current">
          <div className="text-center">
            <div className="text-6xl mb-4 opacity-30">💕</div>
            <p className="text-sm font-light" style={{ color: frameConfig.borderColor }}>
              Sua foto aqui
            </p>
          </div>
        </div>
      );
    }
    
    return (
      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <div className="text-center" style={{ color: frameConfig.borderColor }}>
          <Camera className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p className="text-sm">Clique para adicionar sua foto</p>
        </div>
      </div>
    );
  };

  const frameConfig = getFrameClasses();

  return (
    <div className="relative">
      <div 
        className={`w-48 h-48 md:w-64 md:h-64 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${frameConfig.container} ${frameConfig.border}`}
        style={{ 
          borderColor: frameConfig.borderColor,
          boxShadow: frameConfig.shadow
        }}
      >
        {photoUrl ? (
          <div className="relative w-full h-full">
            <img 
              src={photoUrl} 
              alt="Foto do casal" 
              className="w-full h-full object-cover"
            />
            <Button
              onClick={handleRemovePhoto}
              size="sm"
              variant="destructive"
              className="absolute top-2 right-2 h-8 w-8 p-0 rounded-full"
            >
              <X className="h-4 w-4" />
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

      {!photoUrl && (
        <Button
          onClick={() => fileInputRef.current?.click()}
          className="mt-4 w-full transition-all duration-300 hover:scale-105"
          style={{ 
            background: isCustomThemeActive ? visualTokens?.colors.primary : undefined,
            color: 'white'
          }}
          disabled={isUploading}
        >
          <Upload className="h-4 w-4 mr-2" />
          {isUploading ? 'Carregando...' : 'Adicionar Foto'}
        </Button>
      )}
    </div>
  );
};

export default PhotoUpload;
