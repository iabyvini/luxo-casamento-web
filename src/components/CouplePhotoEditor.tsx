
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera } from 'lucide-react';
import PhotoUpload from './wedding-site/PhotoUpload';

interface CouplePhotoEditorProps {
  siteId: string;
}

const CouplePhotoEditor: React.FC<CouplePhotoEditorProps> = ({ siteId }) => {
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
            <PhotoUpload
              frameStyle="modern"
              compact={false}
              siteId={siteId}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CouplePhotoEditor;
