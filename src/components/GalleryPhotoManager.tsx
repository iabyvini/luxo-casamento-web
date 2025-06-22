
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, Upload, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    photo_url: '',
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

  const handleAddPhoto = async () => {
    if (!formData.photo_url) {
      toast({
        title: "URL obrigatória",
        description: "A URL da foto é obrigatória",
        variant: "destructive",
      });
      return;
    }

    try {
      const nextOrder = Math.max(...photos.map(p => p.display_order), 0) + 1;
      
      const { error } = await supabase
        .from('gallery_photos')
        .insert([{
          site_id: siteId,
          photo_url: formData.photo_url,
          caption: formData.caption || null,
          category: formData.category,
          display_order: nextOrder
        }]);

      if (error) throw error;

      toast({
        title: "Foto adicionada!",
        description: "A foto foi adicionada à galeria.",
      });

      setFormData({ photo_url: '', caption: '', category: 'Ensaio' });
      setShowAddForm(false);
      fetchPhotos();
    } catch (error: any) {
      toast({
        title: "Erro ao adicionar foto",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDeletePhoto = async (photoId: string) => {
    try {
      const { error } = await supabase
        .from('gallery_photos')
        .delete()
        .eq('id', photoId);

      if (error) throw error;

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
              <Label>URL da Foto *</Label>
              <Input
                value={formData.photo_url}
                onChange={(e) => setFormData(prev => ({ ...prev, photo_url: e.target.value }))}
                placeholder="https://exemplo.com/foto.jpg"
              />
              <p className="text-xs text-gray-500 mt-1">
                Cole aqui o link da foto (pode usar serviços como Imgur, Google Drive público, etc.)
              </p>
            </div>
            
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
              <Button onClick={handleAddPhoto} className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Adicionar Foto
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  setFormData({ photo_url: '', caption: '', category: 'Ensaio' });
                  setShowAddForm(false);
                }}
                className="flex items-center gap-2"
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
                  onClick={() => handleDeletePhoto(photo.id)}
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
          <Upload className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>Nenhuma foto adicionada ainda.</p>
          <p className="text-sm">Clique em "Adicionar Foto" para começar sua galeria.</p>
        </div>
      )}
    </div>
  );
};

export default GalleryPhotoManager;
