
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

interface GeneralTabProps {
  localData: any;
  templateName: string;
  onUpdateData: (field: string, value: any) => void;
  onSave: () => void;
  saving: boolean;
}

const GeneralTab = ({ localData, templateName, onUpdateData, onSave, saving }: GeneralTabProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Informações Básicas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Nomes do Casal</Label>
            <Input
              value={localData.couple_names}
              onChange={(e) => onUpdateData('couple_names', e.target.value)}
              placeholder="Ana & João"
            />
          </div>
          
          <div>
            <Label>Data do Casamento</Label>
            <Input
              type="date"
              value={localData.wedding_date}
              onChange={(e) => onUpdateData('wedding_date', e.target.value)}
            />
          </div>
          
          <div>
            <Label>Mensagem de Boas-vindas</Label>
            <Textarea
              value={localData.ai_welcome_message}
              onChange={(e) => onUpdateData('ai_welcome_message', e.target.value)}
              placeholder="Mensagem de boas-vindas personalizada..."
              rows={3}
            />
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">Template</p>
              <p className="text-sm text-gray-600">{templateName}</p>
            </div>
            <Badge variant="outline">{templateName}</Badge>
          </div>

          <div className="flex justify-end pt-4">
            <Button onClick={onSave} disabled={saving} className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              {saving ? 'Salvando...' : 'Salvar Alterações'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GeneralTab;
