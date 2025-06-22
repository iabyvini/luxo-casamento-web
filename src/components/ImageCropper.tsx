
import React, { useState, useRef, useCallback } from 'react';
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Check, X, RotateCcw } from 'lucide-react';
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
    width: 70,
    height: 70,
    x: 15,
    y: 15,
  });
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [imageSrc, setImageSrc] = useState<string>('');
  const [processing, setProcessing] = useState(false);
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
    const image = e.currentTarget;
    const { naturalWidth, naturalHeight } = image;
    
    // Calcular crop inicial baseado na menor dimensão para garantir que seja quadrado
    const minDimension = Math.min(naturalWidth, naturalHeight);
    const cropSize = Math.min(70, (minDimension / Math.max(naturalWidth, naturalHeight)) * 100);
    
    setCrop({
      unit: '%',
      width: cropSize,
      height: cropSize,
      x: (100 - cropSize) / 2,
      y: (100 - cropSize) / 2,
    });
  }, []);

  const getCroppedImg = useCallback(
    (image: HTMLImageElement, pixelCrop: PixelCrop): Promise<Blob> => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        throw new Error('No 2d context');
      }

      // Calcular as proporções reais da imagem
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;

      // Usar as dimensões exatas do crop (mantendo proporções)
      const cropWidth = pixelCrop.width * scaleX;
      const cropHeight = pixelCrop.height * scaleY;
      
      // Definir o tamanho do canvas baseado no crop real
      // Para manter qualidade, usar um tamanho adequado mas proporcional
      const maxSize = 800;
      const cropRatio = cropWidth / cropHeight;
      
      let canvasWidth, canvasHeight;
      
      if (cropRatio === 1) {
        // Crop quadrado
        canvasWidth = canvasHeight = maxSize;
      } else if (cropRatio > 1) {
        // Crop mais largo que alto
        canvasWidth = maxSize;
        canvasHeight = maxSize / cropRatio;
      } else {
        // Crop mais alto que largo
        canvasHeight = maxSize;
        canvasWidth = maxSize * cropRatio;
      }

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      // Desenhar a imagem recortada mantendo proporções
      ctx.drawImage(
        image,
        pixelCrop.x * scaleX,
        pixelCrop.y * scaleY,
        cropWidth,
        cropHeight,
        0,
        0,
        canvasWidth,
        canvasHeight
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
      const croppedImageBlob = await getCroppedImg(imgRef.current, completedCrop);
      onCropComplete(croppedImageBlob);
      onClose();
    } catch (error) {
      console.error('Erro ao recortar imagem:', error);
    } finally {
      setProcessing(false);
    }
  };

  const handleReset = () => {
    if (imgRef.current) {
      const { naturalWidth, naturalHeight } = imgRef.current;
      const minDimension = Math.min(naturalWidth, naturalHeight);
      const cropSize = Math.min(70, (minDimension / Math.max(naturalWidth, naturalHeight)) * 100);
      
      setCrop({
        unit: '%',
        width: cropSize,
        height: cropSize,
        x: (100 - cropSize) / 2,
        y: (100 - cropSize) / 2,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Ajuste a área de recorte arrastando e redimensionando. A imagem será salva mantendo as proporções do recorte selecionado.
          </p>
          
          {imageSrc && (
            <div className="flex justify-center">
              <div className="crop-container relative w-full max-w-2xl bg-gray-100 rounded-lg overflow-hidden" style={{ height: '500px' }}>
                <ReactCrop
                  crop={crop}
                  onChange={(c) => setCrop(c)}
                  onComplete={(c) => setCompletedCrop(c)}
                  aspect={aspectRatio}
                  minWidth={50}
                  minHeight={50}
                  keepSelection
                  className="w-full h-full"
                >
                  <img
                    ref={imgRef}
                    src={imageSrc}
                    onLoad={onImageLoad}
                    alt="Imagem para recorte"
                    className="w-full h-full object-contain"
                  />
                </ReactCrop>
              </div>
            </div>
          )}

          <div className="flex justify-center mt-4">
            <Button
              type="button"
              onClick={handleReset}
              variant="outline"
              className="flex items-center gap-2"
              disabled={processing}
            >
              <RotateCcw className="h-4 w-4" />
              Resetar
            </Button>
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
