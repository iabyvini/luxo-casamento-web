
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin } from 'lucide-react';

interface EventDetailsEditorProps {
  customContent: any;
  onUpdateContent: (section: string, updates: any) => void;
}

const EventDetailsEditor: React.FC<EventDetailsEditorProps> = ({ 
  customContent, 
  onUpdateContent 
}) => {
  const eventContent = customContent?.eventDetails || {};

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Detalhes do Evento
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Título da Seção</Label>
          <Input
            value={eventContent.title || ''}
            onChange={(e) => onUpdateContent('eventDetails', { ...eventContent, title: e.target.value })}
            placeholder="Detalhes da Cerimônia"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Local da Cerimônia</Label>
            <Input
              value={eventContent.ceremonyVenue || ''}
              onChange={(e) => onUpdateContent('eventDetails', { ...eventContent, ceremonyVenue: e.target.value })}
              placeholder="Nome do local"
            />
          </div>
          
          <div>
            <Label>Endereço da Cerimônia</Label>
            <Input
              value={eventContent.ceremonyAddress || ''}
              onChange={(e) => onUpdateContent('eventDetails', { ...eventContent, ceremonyAddress: e.target.value })}
              placeholder="Endereço completo"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Horário da Cerimônia</Label>
            <Input
              value={eventContent.ceremonyTime || ''}
              onChange={(e) => onUpdateContent('eventDetails', { ...eventContent, ceremonyTime: e.target.value })}
              placeholder="15:00"
            />
          </div>
          
          <div>
            <Label>Horário da Festa</Label>
            <Input
              value={eventContent.receptionTime || ''}
              onChange={(e) => onUpdateContent('eventDetails', { ...eventContent, receptionTime: e.target.value })}
              placeholder="18:00"
            />
          </div>
        </div>

        <div>
          <Label>Informações Adicionais</Label>
          <Textarea
            value={eventContent.additionalInfo || ''}
            onChange={(e) => onUpdateContent('eventDetails', { ...eventContent, additionalInfo: e.target.value })}
            placeholder="Código de vestimenta, estacionamento, etc..."
            rows={3}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default EventDetailsEditor;
