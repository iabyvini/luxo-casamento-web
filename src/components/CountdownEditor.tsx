
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Clock } from 'lucide-react';

interface CountdownEditorProps {
  customContent: any;
  onUpdateContent: (section: string, updates: any) => void;
}

const CountdownEditor: React.FC<CountdownEditorProps> = ({ 
  customContent, 
  onUpdateContent 
}) => {
  const countdownContent = customContent?.countdown || {};

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Contagem Regressiva
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Título da Seção</Label>
          <Input
            value={countdownContent.title || ''}
            onChange={(e) => onUpdateContent('countdown', { ...countdownContent, title: e.target.value })}
            placeholder="Faltam apenas..."
          />
        </div>
        
        <div>
          <Label>Mensagem</Label>
          <Textarea
            value={countdownContent.message || ''}
            onChange={(e) => onUpdateContent('countdown', { ...countdownContent, message: e.target.value })}
            placeholder="Mensagem especial para a contagem regressiva..."
            rows={3}
          />
        </div>

        <div>
          <Label>Texto do Botão (se aplicável)</Label>
          <Input
            value={countdownContent.buttonText || ''}
            onChange={(e) => onUpdateContent('countdown', { ...countdownContent, buttonText: e.target.value })}
            placeholder="Ver Mais Detalhes"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default CountdownEditor;
