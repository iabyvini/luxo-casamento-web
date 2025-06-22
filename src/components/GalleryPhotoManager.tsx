
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, Upload, X, Image as ImageIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { uploadImage, deleteImage, extractPathFromUrl, validateImageFile } from "@/utils/supabaseStorage";

interface GalleryPhoto {
  id: string;
  photo_url: string;
  caption?: string;
  category: string;
  display_order: number;
}

interface GalleryPhotoManagerProps {
  siteId: string;
}

const GalleryPhotoManager = ({ siteId }: GalleryPhotoManagerProps) => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    caption: '',
    category: 'Ensaio'
  });

  useEffect(() => {
    fetchPhotos();
  }, [siteId]);

  const fetchPhotos = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_photos')
        .select('*')
        .eq('site_id', siteId)
        .order('display_order', { ascending: true });

      if (error) throw error;
      setPhotos(data || []);
    } catch (error: any) {
      toast({
        title: "Erro ao carregar fotos",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const validation = validateImageFile(file);
    if (!validation.valid) {
      toast({
        title: "Arquivo inválido",
        description: validation.error,
        variant: "destructive",
      });
      return;
    }

    setSelectedFile(file);
    
    // Criar preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleAddPhoto = async () => {
    if (!selectedFile) {
      toast({
        title: "Selecione uma imagem",
        description: "É necessário selecionar uma imagem para adicionar à galeria",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    try {
      // Upload da imagem
      const imageUrl = await uploadImage(selectedFile, 'gallery-photos', siteId);
      
      if (!imageUrl) {
        throw new Error('Falha no upload da imagem');
      }

      const nextOrder = Math.max(...photos.map(p => p.display_order), 0) + 1;
      
      const { error } = await supabase
        .from('gallery_photos')
        .insert([{
          site_id: siteId,
          photo_url: imageUrl,
          caption: formData.caption || null,
          category: formData.category,
          display_order: nextOrder
        }]);

      if (error) throw error;

      toast({
        title: "Foto adicionada!",
        description: "A foto foi adicionada à galeria.",
      });

      // Reset form
      setFormData({ caption: '', category: 'Ensaio' });
      setSelectedFile(null);
      setPreviewUrl(null);
      setShowAddForm(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      
      fetchPhotos();
    } catch (error: any) {
      toast({
        title: "Erro ao adicionar foto",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleDeletePhoto = async (photo: GalleryPhoto) => {
    try {
      // Deletar do banco
      const { error } = await supabase
        .from('gallery_photos')
        .delete()
        .eq('id', photo.id);

      if (error) throw error;

      // Tentar deletar do storage
      const imagePath = extractPathFromUrl(photo.photo_url, 'gallery-photos');
      if (imagePath) {
        await deleteImage('gallery-photos', imagePath);
      }

      toast({
        title: "Foto removida!",
        description: "A foto foi removida da galeria.",
      });
      
      fetchPhotos();
    } catch (error: any) {
      toast({
        title: "Erro ao remover foto",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleCancelAdd = () => {
    setFormData({ caption: '', category: 'Ensaio' });
    setSelectedFile(null);
    setPreviewUrl(null);
    setShowAddForm(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  if (loading) {
    return <div className="text-center py-8">Carregando fotos...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Fotos da Galeria</h3>
        <Button 
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2"
          disabled={showAddForm}
        >
          <Plus className="h-4 w-4" />
          Adicionar Foto
        </Button>
      </div>

      {showAddForm && (
        <Card className="p-4 border-2 border-dashed">
          <div className="space-y-4">
            <div>
              <Label>Selecionar Imagem *</Label>
              <div className="mt-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/webp"
                  onChange={handleFileSelect}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Formatos aceitos: JPEG, PNG, WebP. Máximo 5MB.
                </p>
              </div>
            </div>

            {previewUrl && (
              <div className="mt-4">
                <Label>Preview</Label>
                <div className="mt-2 relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={previewUrl} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Legenda</Label>
                <Input
                  value={formData.caption}
                  onChange={(e) => setFormData(prev => ({ ...prev, caption: e.target.value }))}
                  placeholder="Descrição da foto..."
                />
              </div>
              <div>
                <Label>Categoria</Label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                >
                  <option value="Ensaio">Ensaio</option>
                  <option value="Preparativos">Preparativos</option>
                  <option value="Cerimônia">Cerimônia</option>
                  <option value="Festa">Festa</option>
                  <option value="Detalhes">Detalhes</option>
                  <option value="Família">Família</option>
                </select>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button 
                onClick={handleAddPhoto} 
                className="flex items-center gap-2"
                disabled={uploading || !selectedFile}
              >
                <Upload className="h-4 w-4" />
                {uploading ? 'Enviando...' : 'Adicionar Foto'}
              </Button>
              <Button 
                variant="outline" 
                onClick={handleCancelAdd}
                className="flex items-center gap-2"
                disabled={uploading}
              >
                <X className="h-4 w-4" />
                Cancelar
              </Button>
            </div>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <Card key={photo.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={photo.photo_url} 
                  alt={photo.caption || 'Foto da galeria'}
                  className="w-full h-48 object-cover"
                />
                <Button
                  size="sm"
                  variant="destructive"
                  className="absolute top-2 right-2"
                  onClick={() => handleDeletePhoto(photo)}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
              
              <div className="p-3">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {photo.category}
                  </span>
                </div>
                
                {photo.caption && (
                  <p className="text-sm text-gray-600">{photo.caption}</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {photos.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <ImageIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>Nenhuma foto adicionada ainda.</p>
          <p className="text-sm">Clique em "Adicionar Foto" para começar sua galeria.</p>
        </div>
      )}
    </div>
  );
};

export default GalleryPhotoManager;
