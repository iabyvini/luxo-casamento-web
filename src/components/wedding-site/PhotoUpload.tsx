
import React, { useState, useRef } from 'react';
import { Camera, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    switch (frameStyle) {
      case 'floral':
        return 'rounded-3xl border-4 border-pink-200 shadow-lg bg-gradient-to-br from-pink-50 to-rose-100';
      case 'vintage':
        return 'rounded-lg border-8 border-amber-600 shadow-2xl bg-gradient-to-br from-amber-50 to-yellow-100';
      case 'modern':
        return 'rounded-none border-2 border-gray-900 shadow-xl bg-white';
      case 'geometric':
        return 'clip-path-hexagon border-4 border-blue-500 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100';
      case 'organic':
        return 'rounded-full border-6 border-green-400 shadow-lg bg-gradient-to-br from-green-50 to-emerald-100';
      default:
        return 'rounded-2xl border-4 border-brown-300 shadow-lg bg-gradient-to-br from-brown-50 to-amber-100';
    }
  };

  const getFallbackContent = () => {
    if (fallbackIllustration) {
      return (
        <div className="w-full h-full bg-gradient-to-br from-pink-100 to-amber-100 flex items-center justify-center text-brown-600">
          <div className="text-center">
            <div className="text-6xl mb-4 opacity-30">💕</div>
            <p className="text-sm font-light">Sua foto aqui</p>
          </div>
        </div>
      );
    }
    
    return (
      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-500">
        <div className="text-center">
          <Camera className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p className="text-sm">Clique para adicionar sua foto</p>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      <div className={`w-48 h-48 md:w-64 md:h-64 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${getFrameClasses()}`}>
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
          className="mt-4 w-full bg-gradient-luxury hover:opacity-90"
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
