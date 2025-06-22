
import { useState, useEffect } from "react";
import { Gift, ShoppingCart, Heart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface GiftItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  image_url?: string;
  is_purchased: boolean;
  purchased_by?: string;
}

interface GiftListSectionProps {
  siteId: string;
  customContent?: {
    enabled?: boolean;
    title?: string;
    message?: string;
  };
}

const GiftListSection = ({ siteId, customContent }: GiftListSectionProps) => {
  const { toast } = useToast();
  const [items, setItems] = useState<GiftItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<GiftItem | null>(null);
  const [purchaseForm, setPurchaseForm] = useState({
    buyer_name: '',
    buyer_email: '',
    buyer_phone: '',
    message: ''
  });

  // Se a seção está desabilitada, não renderizar
  if (customContent?.enabled === false) {
    return null;
  }

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
      console.error('Erro ao carregar itens:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePurchaseItem = async () => {
    if (!selectedItem || !purchaseForm.buyer_name) {
      toast({
        title: "Dados obrigatórios",
        description: "Nome do comprador é obrigatório",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('gift_items')
        .update({
          is_purchased: true,
          purchased_by: purchaseForm.buyer_name,
          purchased_at: new Date().toISOString()
        })
        .eq('id', selectedItem.id);

      if (error) throw error;

      toast({
        title: "Presente comprado! 🎁",
        description: `Obrigado por presentear ${selectedItem.name}!`,
      });

      // Reset form
      setPurchaseForm({ buyer_name: '', buyer_email: '', buyer_phone: '', message: '' });
      setSelectedItem(null);
      
      // Refresh items
      fetchItems();
    } catch (error: any) {
      toast({
        title: "Erro ao processar compra",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const sectionTitle = customContent?.title || "Lista de Presentes";
  const sectionMessage = customContent?.message || "Sua presença já é o melhor presente, mas se quiserem nos presentear, ficamos muito gratos! Escolha um dos itens abaixo:";

  const availableItems = items.filter(item => !item.is_purchased);
  const purchasedItems = items.filter(item => item.is_purchased);

  // Group items by category
  const itemsByCategory = availableItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, GiftItem[]>);

  if (loading) {
    return (
      <section id="gifts" className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <p>Carregando lista de presentes...</p>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section id="gifts" className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Gift className="h-4 w-4" />
            <span>Lista de Presentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            {sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A lista de presentes ainda está sendo preparada. Volte em breve!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="gifts" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Gift className="h-4 w-4" />
            <span>Lista de Presentes</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            {sectionTitle}
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            {sectionMessage}
          </p>

          {/* Progress Stats */}
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>{availableItems.length} disponíveis</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <span>{purchasedItems.length} já presenteados</span>
            </div>
          </div>
        </div>

        {/* Items by Category */}
        {Object.entries(itemsByCategory).map(([category, categoryItems]) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              {category}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryItems.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {item.image_url && (
                    <div className="mb-4">
                      <img 
                        src={item.image_url} 
                        alt={item.name}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  )}
                  
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.name}
                    </h4>
                    
                    {item.description && (
                      <p className="text-gray-600 mb-4 text-sm">
                        {item.description}
                      </p>
                    )}
                    
                    <div className="text-2xl font-bold text-green-600 mb-4">
                      R$ {item.price.toFixed(2)}
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="w-full bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                          onClick={() => setSelectedItem(item)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Presentear
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <Gift className="h-5 w-5 text-green-600" />
                            Presentear: {item.name}
                          </DialogTitle>
                        </DialogHeader>
                        
                        <div className="space-y-4">
                          <div className="text-center p-4 bg-green-50 rounded-lg">
                            <p className="text-lg font-semibold text-green-800">
                              R$ {item.price.toFixed(2)}
                            </p>
                            <p className="text-sm text-green-600">
                              Sua contribuição será convertida em dinheiro para os noivos
                            </p>
                          </div>

                          <div className="space-y-3">
                            <div>
                              <Label>Seu Nome *</Label>
                              <Input
                                value={purchaseForm.buyer_name}
                                onChange={(e) => setPurchaseForm(prev => ({ ...prev, buyer_name: e.target.value }))}
                                placeholder="Como você gostaria de ser identificado"
                              />
                            </div>
                            
                            <div>
                              <Label>Seu Email</Label>
                              <Input
                                type="email"
                                value={purchaseForm.buyer_email}
                                onChange={(e) => setPurchaseForm(prev => ({ ...prev, buyer_email: e.target.value }))}
                                placeholder="seu@email.com"
                              />
                            </div>
                            
                            <div>
                              <Label>Telefone</Label>
                              <Input
                                value={purchaseForm.buyer_phone}
                                onChange={(e) => setPurchaseForm(prev => ({ ...prev, buyer_phone: e.target.value }))}
                                placeholder="(11) 99999-9999"
                              />
                            </div>
                            
                            <div>
                              <Label>Mensagem para os noivos</Label>
                              <Textarea
                                value={purchaseForm.message}
                                onChange={(e) => setPurchaseForm(prev => ({ ...prev, message: e.target.value }))}
                                placeholder="Deixe uma mensagem carinhosa..."
                                rows={3}
                              />
                            </div>
                          </div>

                          <Button 
                            onClick={handlePurchaseItem}
                            className="w-full bg-green-600 hover:bg-green-700"
                            disabled={!purchaseForm.buyer_name}
                          >
                            <Heart className="h-4 w-4 mr-2" />
                            Confirmar Presente
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Purchased Items Section */}
        {purchasedItems.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Presentes já escolhidos ❤️
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {purchasedItems.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200 opacity-75">
                  {item.image_url && (
                    <div className="mb-4">
                      <img 
                        src={item.image_url} 
                        alt={item.name}
                        className="w-full h-48 object-cover rounded-lg grayscale"
                      />
                    </div>
                  )}
                  
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-gray-600 mb-2">
                      {item.name}
                    </h4>
                    
                    <div className="text-lg font-bold text-gray-500 mb-2">
                      R$ {item.price.toFixed(2)}
                    </div>

                    <div className="flex items-center justify-center space-x-2 text-green-600">
                      <Check className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        Presenteado por {item.purchased_by}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GiftListSection;
