
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Heart } from 'lucide-react';

interface OurStoryEditorProps {
  customContent: any;
  onUpdateContent: (section: string, updates: any) => void;
}

const OurStoryEditor: React.FC<OurStoryEditorProps> = ({ 
  customContent, 
  onUpdateContent 
}) => {
  const storyContent = customContent?.ourStory || {};

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="h-5 w-5" />
          Nossa História
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Título da Seção</Label>
          <Input
            value={storyContent.title || ''}
            onChange={(e) => onUpdateContent('ourStory', { ...storyContent, title: e.target.value })}
            placeholder="Nossa História"
          />
        </div>
        
        <div>
          <Label>Subtítulo</Label>
          <Input
            value={storyContent.subtitle || ''}
            onChange={(e) => onUpdateContent('ourStory', { ...storyContent, subtitle: e.target.value })}
            placeholder="Como tudo começou..."
          />
        </div>

        <div>
          <Label>História do Casal</Label>
          <Textarea
            value={storyContent.story || ''}
            onChange={(e) => onUpdateContent('ourStory', { ...storyContent, story: e.target.value })}
            placeholder="Conte aqui a história de vocês..."
            rows={6}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Nome do Noivo</Label>
            <Input
              value={storyContent.groomName || ''}
              onChange={(e) => onUpdateContent('ourStory', { ...storyContent, groomName: e.target.value })}
              placeholder="Nome do noivo"
            />
          </div>
          
          <div>
            <Label>Nome da Noiva</Label>
            <Input
              value={storyContent.brideName || ''}
              onChange={(e) => onUpdateContent('ourStory', { ...storyContent, brideName: e.target.value })}
              placeholder="Nome da noiva"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Sobre o Noivo</Label>
            <Textarea
              value={storyContent.groomInfo || ''}
              onChange={(e) => onUpdateContent('ourStory', { ...storyContent, groomInfo: e.target.value })}
              placeholder="Informações sobre o noivo..."
              rows={3}
            />
          </div>
          
          <div>
            <Label>Sobre a Noiva</Label>
            <Textarea
              value={storyContent.brideInfo || ''}
              onChange={(e) => onUpdateContent('ourStory', { ...storyContent, brideInfo: e.target.value })}
              placeholder="Informações sobre a noiva..."
              rows={3}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OurStoryEditor;
