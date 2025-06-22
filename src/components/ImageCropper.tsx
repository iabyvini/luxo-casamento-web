import React, { useState, useRef, useCallback } from 'react';
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Check, X, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';
import 'react-image-crop/dist/ReactCrop.css';

interface ImageCropperProps {
  isOpen: boolean;
  onClose: () => void;
  onCropComplete: (croppedImageBlob: Blob) => void;
  imageFile: File;
  title?: string;
  aspectRatio?: number;
}

const ImageCropper: React.FC<ImageCropperProps> = ({
  isOpen,
  onClose,
  onCropComplete,
  imageFile,
  title = "Recortar Imagem",
  aspectRatio = 1
}) => {
  const [crop, setCrop] = useState<Crop>({
    unit: '%',
    width: 80,
    height: 80,
    x: 10,
    y: 10,
  });
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [imageSrc, setImageSrc] = useState<string>('');
  const [processing, setProcessing] = useState(false);
  const [scale, setScale] = useState(1);
  const imgRef = useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (imageFile && isOpen) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(imageFile);
    }
  }, [imageFile, isOpen]);

  const onImageLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    
    // Criar um crop quadrado centrado
    const size = Math.min(naturalWidth, naturalHeight);
    const x = (naturalWidth - size) / 2;
    const y = (naturalHeight - size) / 2;
    
    setCrop({
      unit: 'px',
      width: size,
      height: size,
      x,
      y,
    });
  }, [aspectRatio]);

  const getCroppedImg = useCallback(
    (image: HTMLImageElement, pixelCrop: PixelCrop, scale: number): Promise<Blob> => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        throw new Error('No 2d context');
      }

      // Define o tamanho final da imagem (sempre quadrada)
      const targetSize = 800; // Tamanho final da imagem
      canvas.width = targetSize;
      canvas.height = targetSize;

      // Ajustar para o scale
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;

      ctx.drawImage(
        image,
        pixelCrop.x * scaleX,
        pixelCrop.y * scaleY,
        pixelCrop.width * scaleX,
        pixelCrop.height * scaleY,
        0,
        0,
        targetSize,
        targetSize
      );

      return new Promise((resolve) => {
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            }
          },
          'image/jpeg',
          0.85
        );
      });
    },
    []
  );

  const handleCropComplete = async () => {
    if (!completedCrop || !imgRef.current) return;

    setProcessing(true);
    try {
      const croppedImageBlob = await getCroppedImg(imgRef.current, completedCrop, scale);
      onCropComplete(croppedImageBlob);
      onClose();
    } catch (error) {
      console.error('Erro ao recortar imagem:', error);
    } finally {
      setProcessing(false);
    }
  };

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.1, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.1, 1));
  };

  const handleReset = () => {
    setScale(1);
    if (imgRef.current) {
      const { naturalWidth, naturalHeight } = imgRef.current;
      const size = Math.min(naturalWidth, naturalHeight);
      const x = (naturalWidth - size) / 2;
      const y = (naturalHeight - size) / 2;
      setCrop({
        unit: 'px',
        width: size,
        height: size,
        x,
        y,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Ajuste a área de recorte para criar uma imagem quadrada perfeita
          </p>
          
          {imageSrc && (
            <div className="flex justify-center">
              <ReactCrop
                crop={crop}
                onChange={(c) => setCrop(c)}
                onComplete={(c) => setCompletedCrop(c)}
                aspect={aspectRatio}
                minWidth={100}
                minHeight={100}
                keepSelection
              >
                <img
                  ref={imgRef}
                  src={imageSrc}
                  onLoad={onImageLoad}
                  style={{ maxHeight: '400px', maxWidth: '100%', transform: `scale(${scale})` }}
                  alt="Imagem para recorte"
                />
              </ReactCrop>
            </div>
          )}

          <div className="flex justify-center space-x-4 mt-2">
            <button
              type="button"
              onClick={handleZoomOut}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
              aria-label="Zoom Out"
            >
              <ZoomOut className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
              aria-label="Reset"
            >
              <RotateCcw className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleZoomIn}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
              aria-label="Zoom In"
            >
              <ZoomIn className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex justify-end space-x-2 mt-6">
            <Button
              variant="outline"
              onClick={onClose}
              disabled={processing}
            >
              <X className="h-4 w-4 mr-2" />
              Cancelar
            </Button>
            <Button
              onClick={handleCropComplete}
              disabled={!completedCrop || processing}
              className="bg-green-600 hover:bg-green-700"
            >
              <Check className="h-4 w-4 mr-2" />
              {processing ? 'Processando...' : 'Confirmar Recorte'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageCropper;
