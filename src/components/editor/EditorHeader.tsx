
import { Button } from "@/components/ui/button";
import { Save, Eye } from "lucide-react";

interface EditorHeaderProps {
  onSave: () => void;
  onPreview: () => void;
  saving: boolean;
}

const EditorHeader = ({ onSave, onPreview, saving }: EditorHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Editor do Site</h2>
        <p className="text-gray-600">
          Personalize o conteúdo e aparência do seu site
        </p>
      </div>
      <div className="flex space-x-2">
        <Button variant="outline" onClick={onPreview}>
          <Eye className="h-4 w-4 mr-2" />
          Preview
        </Button>
        <Button onClick={onSave} disabled={saving}>
          <Save className="h-4 w-4 mr-2" />
          {saving ? 'Salvando...' : 'Salvar'}
        </Button>
      </div>
    </div>
  );
};

export default EditorHeader;
