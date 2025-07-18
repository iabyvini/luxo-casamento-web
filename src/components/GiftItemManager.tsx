
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Edit2, Save, X, Upload, Image as ImageIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { uploadImage, deleteImage, extractPathFromUrl, validateImageFile } from "@/utils/supabaseStorage";
import ImageCropper from "./ImageCropper";

interface GiftItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url?: string;
  is_purchased: boolean;
  purchased_by?: string;
}

interface GiftItemManagerProps {
  siteId: string;
}

const GiftItemManager = ({ siteId }: GiftItemManagerProps) => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<GiftItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showCropper, setShowCropper] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Geral',
  });

  useEffect(() => {
    fetchItems();
  }, [siteId]);

  const fetchItems = async () => {
    try {
      const { data, error } = await supabase
        .from('gift_items')
        .select('*')
        .eq('site_id', siteId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setItems(data || []);
    } catch (error: any) {
      toast({
        title: "Erro ao carregar itens",
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
    setShowCropper(true);
  };

  const handleCropComplete = (croppedBlob: Blob) => {
    const url = URL.createObjectURL(croppedBlob);
    setPreviewUrl(url);
    // Criar um arquivo a partir do blob para upload
    const croppedFile = new File([croppedBlob], selectedFile?.name || 'cropped-image.jpg', {
      type: croppedBlob.type
    });
    setSelectedFile(croppedFile);
  };

  const handleSaveItem = async () => {
    if (!formData.name || !formData.price) {
      toast({
        title: "Campos obrigatórios",
        description: "Nome e preço são obrigatórios",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    try {
      let imageUrl = null;

      // Upload da imagem se houver arquivo selecionado
      if (selectedFile && selectedFile instanceof File) {
        imageUrl = await uploadImage(selectedFile, 'gift-images', siteId);
        if (!imageUrl) {
          throw new Error('Falha no upload da imagem');
        }
      }

      const itemData = {
        site_id: siteId,
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        category: formData.category,
        image_url: imageUrl
      };

      if (editingItem) {
        // Se está editando e tem nova imagem, deletar a antiga
        if (imageUrl) {
          const editingItemData = items.find(item => item.id === editingItem);
          if (editingItemData?.image_url) {
            const oldImagePath = extractPathFromUrl(editingItemData.image_url, 'gift-images');
            if (oldImagePath) {
              await deleteImage('gift-images', oldImagePath);
            }
          }
        }

        const { error } = await supabase
          .from('gift_items')
          .update(imageUrl ? itemData : { ...itemData, image_url: undefined })
          .eq('id', editingItem);

        if (error) throw error;
        
        toast({
          title: "Item atualizado!",
          description: "O item foi atualizado com sucesso.",
        });
      } else {
        const { error } = await supabase
          .from('gift_items')
          .insert([itemData]);

        if (error) throw error;
        
        toast({
          title: "Item adicionado!",
          description: "O item foi adicionado à lista de presentes.",
        });
      }

      handleCancelEdit();
      fetchItems();
    } catch (error: any) {
      toast({
        title: "Erro ao salvar item",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleEditItem = (item: GiftItem) => {
    setFormData({
      name: item.name,
      description: item.description || '',
      price: item.price.toString(),
      category: item.category,
    });
    setEditingItem(item.id);
    setShowAddForm(true);
    // Reset file selection for editing
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDeleteItem = async (item: GiftItem) => {
    try {
      // Deletar do banco
      const { error } = await supabase
        .from('gift_items')
        .delete()
        .eq('id', item.id);

      if (error) throw error;

      // Deletar imagem do storage se existir
      if (item.image_url) {
        const imagePath = extractPathFromUrl(item.image_url, 'gift-images');
        if (imagePath) {
          await deleteImage('gift-images', imagePath);
        }
      }

      toast({
        title: "Item removido!",
        description: "O item foi removido da lista de presentes.",
      });
      
      fetchItems();
    } catch (error: any) {
      toast({
        title: "Erro ao remover item",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleCancelEdit = () => {
    setFormData({ name: '', description: '', price: '', category: 'Geral' });
    setEditingItem(null);
    setShowAddForm(false);
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  if (loading) {
    return <div className="text-center py-8">Carregando itens...</div>;
  }

  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Itens da Lista de Presentes</h3>
          <Button 
            onClick={() => setShowAddForm(true)}
            className="flex items-center gap-2"
            disabled={showAddForm}
          >
            <Plus className="h-4 w-4" />
            Adicionar Item
          </Button>
        </div>

        {showAddForm && (
          <Card className="p-4 border-2 border-dashed">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Nome do Item *</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Ex: Jogo de panelas"
                  />
                </div>
                <div>
                  <Label>Preço (R$) *</Label>
                  <Input
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                    placeholder="0.00"
                  />
                </div>
              </div>
              
              <div>
                <Label>Descrição</Label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Descrição do item..."
                  rows={2}
                />
              </div>

              <div>
                <Label>Categoria</Label>
                <Input
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  placeholder="Ex: Cozinha, Casa, Decoração"
                />
              </div>

              <div>
                <Label>Imagem do Item</Label>
                <div className="mt-2">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    onChange={handleFileSelect}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    A imagem será automaticamente recortada em formato quadrado. Formatos aceitos: JPEG, PNG, WebP. Máximo 5MB.
                  </p>
                </div>
              </div>

              {previewUrl && (
                <div className="mt-4">
                  <Label>Preview</Label>
                  <div className="mt-2 relative w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={previewUrl} 
                      alt="Preview" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              <div className="flex space-x-2">
                <Button 
                  onClick={handleSaveItem} 
                  className="flex items-center gap-2"
                  disabled={uploading}
                >
                  <Save className="h-4 w-4" />
                  {uploading ? 'Salvando...' : (editingItem ? 'Atualizar' : 'Adicionar')}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleCancelEdit} 
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
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardContent className="p-4">
                {item.image_url ? (
                  <div className="aspect-square mb-3 overflow-hidden rounded">
                    <img 
                      src={item.image_url} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-square bg-gray-100 rounded mb-3 flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-gray-400" />
                  </div>
                )}
                
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <Badge variant={item.is_purchased ? "destructive" : "default"}>
                      {item.is_purchased ? "Comprado" : "Disponível"}
                    </Badge>
                  </div>
                  
                  {item.description && (
                    <p className="text-xs text-gray-600 line-clamp-2">{item.description}</p>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-green-600">
                      R$ {item.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-gray-500">{item.category}</span>
                  </div>

                  {item.is_purchased && item.purchased_by && (
                    <p className="text-xs text-gray-500">
                      Comprado por: {item.purchased_by}
                    </p>
                  )}

                  <div className="flex space-x-1 pt-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => handleEditItem(item)}
                      disabled={showAddForm}
                      className="flex-1"
                    >
                      <Edit2 className="h-3 w-3" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="destructive" 
                      onClick={() => handleDeleteItem(item)}
                      disabled={showAddForm}
                      className="flex-1"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {items.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <ImageIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Nenhum item adicionado ainda.</p>
            <p className="text-sm">Clique em "Adicionar Item" para começar sua lista de presentes.</p>
          </div>
        )}
      </div>

      {selectedFile && (
        <ImageCropper
          isOpen={showCropper}
          onClose={() => setShowCropper(false)}
          onCropComplete={handleCropComplete}
          imageFile={selectedFile}
          title="Recortar Imagem do Presente"
        />
      )}
    </>
  );
};

export default GiftItemManager;
