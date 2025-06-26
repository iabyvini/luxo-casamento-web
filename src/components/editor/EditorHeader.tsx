
import { Button } from "@/components/ui/button";
import { Save, Eye, Globe, EyeOff } from "lucide-react";

interface EditorHeaderProps {
  coupleNames: string;
  onPreview: () => void;
  onPublishToggle: () => Promise<void>;
  isPublished: boolean;
}

const EditorHeader = ({ coupleNames, onPreview, onPublishToggle, isPublished }: EditorHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Editor - {coupleNames}</h1>
        <p className="text-gray-600 mt-1">
          Personalize o conteúdo e aparência do seu site
        </p>
      </div>
      <div className="flex space-x-3">
        <Button variant="outline" onClick={onPreview} className="flex items-center gap-2">
          <Eye className="h-4 w-4" />
          Visualizar Site
        </Button>
        <Button 
          onClick={onPublishToggle}
          variant={isPublished ? "destructive" : "default"}
          className="flex items-center gap-2"
        >
          {isPublished ? (
            <>
              <EyeOff className="h-4 w-4" />
              Despublicar
            </>
          ) : (
            <>
              <Globe className="h-4 w-4" />
              Publicar Site
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default EditorHeader;
