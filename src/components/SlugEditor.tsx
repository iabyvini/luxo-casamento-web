
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Link, Copy } from "lucide-react";
import { generateSlug, validateSlug, generateUniqueSlug } from "@/utils/slugGenerator";
import { useToast } from "@/hooks/use-toast";

interface SlugEditorProps {
  coupleNames: string;
  weddingDate: string;
  currentSlug?: string;
  onSlugChange: (slug: string) => void;
  disabled?: boolean;
}

const SlugEditor = ({ coupleNames, weddingDate, currentSlug, onSlugChange, disabled }: SlugEditorProps) => {
  const [slug, setSlug] = useState(currentSlug || "");
  const [isEditing, setIsEditing] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [validation, setValidation] = useState<{ isValid: boolean; error?: string }>({ isValid: true });
  const { toast } = useToast();

  // Auto-generate slug when couple names or date changes
  useEffect(() => {
    if (!currentSlug && coupleNames && weddingDate) {
      const autoSlug = generateSlug(coupleNames, weddingDate);
      setSlug(autoSlug);
      onSlugChange(autoSlug);
    }
  }, [coupleNames, weddingDate, currentSlug, onSlugChange]);

  const handleSlugChange = (value: string) => {
    const normalizedValue = value
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    setSlug(normalizedValue);
    
    const validation = validateSlug(normalizedValue);
    setValidation(validation);
  };

  const handleSave = async () => {
    if (!validation.isValid) return;
    
    setIsValidating(true);
    try {
      const uniqueSlug = await generateUniqueSlug(slug);
      onSlugChange(uniqueSlug);
      setSlug(uniqueSlug);
      setIsEditing(false);
      
      toast({
        title: "URL atualizada!",
        description: "A URL do seu site foi atualizada com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro ao atualizar URL",
        description: "Tente novamente ou escolha uma URL diferente.",
        variant: "destructive",
      });
    } finally {
      setIsValidating(false);
    }
  };

  const handleCancel = () => {
    setSlug(currentSlug || "");
    setIsEditing(false);
    setValidation({ isValid: true });
  };

  const copyToClipboard = () => {
    const fullUrl = `${window.location.origin}/${slug}`;
    navigator.clipboard.writeText(fullUrl);
    toast({
      title: "URL copiada!",
      description: "A URL foi copiada para a área de transferência.",
    });
  };

  const generateNewSlug = () => {
    if (coupleNames && weddingDate) {
      const newSlug = generateSlug(coupleNames, weddingDate);
      setSlug(newSlug);
      setValidation(validateSlug(newSlug));
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-sm font-medium text-gray-700">URL do Site</Label>
        <p className="text-xs text-gray-500 mb-2">
          Esta será a URL pública do seu site de casamento
        </p>
      </div>

      <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
        <Link className="h-4 w-4 text-gray-400" />
        <span className="text-sm text-gray-600">{window.location.origin}/</span>
        
        {isEditing ? (
          <div className="flex-1 flex items-center space-x-2">
            <Input
              value={slug}
              onChange={(e) => handleSlugChange(e.target.value)}
              placeholder="seu-slug-aqui"
              className={`flex-1 ${!validation.isValid ? 'border-red-500' : ''}`}
              disabled={disabled || isValidating}
            />
            
            <Button
              size="sm"
              onClick={handleSave}
              disabled={!validation.isValid || isValidating || !slug}
              className="bg-green-600 hover:bg-green-700"
            >
              <Check className="h-3 w-3" />
            </Button>
            
            <Button
              size="sm"
              variant="outline"
              onClick={handleCancel}
              disabled={isValidating}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-between">
            <span className="font-medium text-gray-900">{slug || "slug-nao-definido"}</span>
            
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={copyToClipboard}
                disabled={!slug}
              >
                <Copy className="h-3 w-3" />
              </Button>
              
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsEditing(true)}
                disabled={disabled}
              >
                Editar
              </Button>
            </div>
          </div>
        )}
      </div>

      {!validation.isValid && (
        <div className="flex items-center space-x-2">
          <X className="h-4 w-4 text-red-500" />
          <span className="text-sm text-red-600">{validation.error}</span>
        </div>
      )}

      {validation.isValid && slug && (
        <div className="flex items-center space-x-2">
          <Check className="h-4 w-4 text-green-500" />
          <span className="text-sm text-green-600">URL válida</span>
          <Badge variant="secondary" className="text-xs">
            Disponível
          </Badge>
        </div>
      )}

      {isEditing && (
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Dica: Use apenas letras, números e hífens</span>
          <Button
            size="sm"
            variant="ghost"
            onClick={generateNewSlug}
            className="text-xs h-6"
          >
            Gerar automaticamente
          </Button>
        </div>
      )}
    </div>
  );
};

export default SlugEditor;
