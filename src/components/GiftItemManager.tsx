
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Edit2, Save, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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
  const [items, setItems] = useState<GiftItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Geral',
    image_url: ''
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

  const handleSaveItem = async () => {
    if (!formData.name || !formData.price) {
      toast({
        title: "Campos obrigatórios",
        description: "Nome e preço são obrigatórios",
        variant: "destructive",
      });
      return;
    }

    try {
      const itemData = {
        site_id: siteId,
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        category: formData.category,
        image_url: formData.image_url || null
      };

      if (editingItem) {
        const { error } = await supabase
          .from('gift_items')
          .update(itemData)
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

      setFormData({ name: '', description: '', price: '', category: 'Geral', image_url: '' });
      setEditingItem(null);
      setShowAddForm(false);
      fetchItems();
    } catch (error: any) {
      toast({
        title: "Erro ao salvar item",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleEditItem = (item: GiftItem) => {
    setFormData({
      name: item.name,
      description: item.description || '',
      price: item.price.toString(),
      category: item.category,
      image_url: item.image_url || ''
    });
    setEditingItem(item.id);
    setShowAddForm(true);
  };

  const handleDeleteItem = async (itemId: string) => {
    try {
      const { error } = await supabase
        .from('gift_items')
        .delete()
        .eq('id', itemId);

      if (error) throw error;

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
    setFormData({ name: '', description: '', price: '', category: 'Geral', image_url: '' });
    setEditingItem(null);
    setShowAddForm(false);
  };

  if (loading) {
    return <div className="text-center py-8">Carregando itens...</div>;
  }

  return (
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Categoria</Label>
                <Input
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  placeholder="Ex: Cozinha, Casa, Decoração"
                />
              </div>
              <div>
                <Label>URL da Imagem</Label>
                <Input
                  value={formData.image_url}
                  onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="flex space-x-2">
              <Button onClick={handleSaveItem} className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                {editingItem ? 'Atualizar' : 'Adicionar'}
              </Button>
              <Button variant="outline" onClick={handleCancelEdit} className="flex items-center gap-2">
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
              {item.image_url && (
                <img 
                  src={item.image_url} 
                  alt={item.name}
                  className="w-full h-32 object-cover rounded mb-3"
                />
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
                    onClick={() => handleDeleteItem(item.id)}
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
          <p>Nenhum item adicionado ainda.</p>
          <p className="text-sm">Clique em "Adicionar Item" para começar sua lista de presentes.</p>
        </div>
      )}
    </div>
  );
};

export default GiftItemManager;
