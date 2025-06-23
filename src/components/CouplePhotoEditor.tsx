
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera } from 'lucide-react';
import PhotoUpload from './wedding-site/PhotoUpload';
import { useModernVisualTokens } from '@/contexts/ModernVisualTokensContext';

interface CouplePhotoEditorProps {
  siteId: string;
}

const CouplePhotoEditor: React.FC<CouplePhotoEditorProps> = ({ siteId }) => {
  const { setCouplePhotoUrl } = useModernVisualTokens();

  const handlePhotoUploaded = (url: string) => {
    console.log('📸 Foto do casal atualizada:', url);
    setCouplePhotoUrl(url);
    
    // TODO: Salvar no banco de dados quando necessário
    // Esta funcionalidade será implementada na próxima fase
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Camera className="h-5 w-5" />
          Foto do Casal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Adicione uma foto especial do casal que será exibida na seção principal do site.
          </p>
          <div className="flex justify-center">
            <PhotoUpload onPhotoUploaded={handlePhotoUploaded} />
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-xs text-blue-700">
              💡 A foto será automaticamente otimizada e exibida no site público.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CouplePhotoEditor;
