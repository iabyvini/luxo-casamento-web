
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircle, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  sender_name: string;
  message: string;
  created_at: string;
  is_approved: boolean;
}

interface MessagesSectionProps {
  siteId?: string;
  customContent?: {
    enabled?: boolean;
    title?: string;
    moderation?: boolean;
  };
}

const MessagesSection = ({ siteId, customContent }: MessagesSectionProps) => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    sender_name: '',
    message: ''
  });

  // Se a seção está desabilitada, não renderizar
  if (customContent?.enabled === false) {
    return null;
  }

  const sectionTitle = customContent?.title || "Recados para os Noivos";
  const moderationEnabled = customContent?.moderation !== false;

  useEffect(() => {
    if (siteId) {
      fetchMessages();
    }
  }, [siteId]);

  const fetchMessages = async () => {
    if (!siteId) return;

    try {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .eq('site_id', siteId)
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!siteId) {
      toast({
        title: "Erro",
        description: "ID do site não encontrado.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.sender_name.trim() || !formData.message.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e mensagem.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('messages')
        .insert({
          site_id: siteId,
          sender_name: formData.sender_name.trim(),
          message: formData.message.trim(),
          is_approved: !moderationEnabled
        });

      if (error) throw error;

      setFormData({ sender_name: '', message: '' });
      
      if (!moderationEnabled) {
        // Se não há moderação, recarregar mensagens
        fetchMessages();
      }

      toast({
        title: "Mensagem enviada!",
        description: moderationEnabled 
          ? "Sua mensagem será exibida após aprovação dos noivos."
          : "Sua mensagem foi publicada com sucesso!",
      });
    } catch (error: any) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="messages" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="h-4 w-4" />
            <span>Mensagens</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            {sectionTitle}
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Deixe uma mensagem carinhosa para os noivos! Suas palavras farão parte deste momento especial.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Formulário para nova mensagem */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="sender_name">Seu Nome *</Label>
                  <Input
                    id="sender_name"
                    type="text"
                    required
                    value={formData.sender_name}
                    onChange={(e) => setFormData(prev => ({ ...prev, sender_name: e.target.value }))}
                    placeholder="Como você gostaria de assinar?"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Sua Mensagem *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Deixe uma mensagem carinhosa para os noivos..."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                  disabled={submitting}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {submitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>

                {moderationEnabled && (
                  <p className="text-sm text-gray-500 text-center">
                    * Sua mensagem será exibida após aprovação dos noivos
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Lista de mensagens */}
          <div className="space-y-6">
            {loading ? (
              <div className="text-center py-8">
                <p className="text-gray-600">Carregando mensagens...</p>
              </div>
            ) : messages.length === 0 ? (
              <div className="text-center py-12">
                <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Ainda não há mensagens</p>
                <p className="text-gray-500 text-sm">Seja o primeiro a deixar um recado para os noivos!</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif text-gray-800">
                    Mensagens dos Convidados
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {messages.length} {messages.length === 1 ? 'mensagem' : 'mensagens'} de carinho
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {messages.map((message) => (
                    <Card key={message.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-green-700 font-semibold text-sm">
                              {message.sender_name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-800">
                                {message.sender_name}
                              </h4>
                              <span className="text-xs text-gray-500">
                                {new Date(message.created_at).toLocaleDateString('pt-BR')}
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                              {message.message}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Heart className="h-4 w-4 text-red-400" fill="currentColor" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagesSection;
