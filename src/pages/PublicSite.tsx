
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Heart, Calendar, MapPin, Gift, MessageCircle, Users, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useToast } from '@/hooks/use-toast';

interface SiteData {
  id: string;
  couple_names: string;
  wedding_date: string;
  template_name: string;
  ai_welcome_message: string;
  custom_content: any;
  quiz_answers: any;
}

interface RSVPForm {
  guest_name: string;
  guest_email: string;
  guest_phone: string;
  will_attend: boolean;
  companion_count: number;
  dietary_restrictions: string;
  message: string;
}

interface MessageForm {
  sender_name: string;
  sender_email: string;
  message: string;
}

const PublicSite = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [siteData, setSiteData] = useState<SiteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [rsvpForm, setRSVPForm] = useState<RSVPForm>({
    guest_name: '',
    guest_email: '',
    guest_phone: '',
    will_attend: true,
    companion_count: 0,
    dietary_restrictions: '',
    message: ''
  });
  const [messageForm, setMessageForm] = useState<MessageForm>({
    sender_name: '',
    sender_email: '',
    message: ''
  });

  useEffect(() => {
    if (slug) {
      fetchSiteData();
      incrementViewCount();
    }
  }, [slug]);

  const fetchSiteData = async () => {
    try {
      const { data, error } = await supabase
        .from('wedding_sites')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          toast({
            title: "Site não encontrado",
            description: "Este site não existe ou não está publicado.",
            variant: "destructive",
          });
          navigate('/');
          return;
        }
        throw error;
      }

      setSiteData(data);
    } catch (error: any) {
      console.error('Erro ao carregar site:', error);
      toast({
        title: "Erro ao carregar site",
        description: "Não foi possível carregar o site de casamento.",
        variant: "destructive",
      });
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const incrementViewCount = async () => {
    try {
      const { error } = await supabase.rpc('increment_view_count', { site_slug: slug });
      if (error) console.error('Erro ao incrementar visualizações:', error);
    } catch (error) {
      console.error('Erro ao incrementar visualizações:', error);
    }
  };

  const handleRSVPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!siteData || !rsvpForm.guest_name) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('rsvp_responses')
        .insert({
          site_id: siteData.id,
          ...rsvpForm
        });

      if (error) throw error;

      toast({
        title: "Confirmação enviada!",
        description: "Obrigado por confirmar sua presença.",
      });

      // Limpar formulário
      setRSVPForm({
        guest_name: '',
        guest_email: '',
        guest_phone: '',
        will_attend: true,
        companion_count: 0,
        dietary_restrictions: '',
        message: ''
      });
    } catch (error: any) {
      toast({
        title: "Erro ao enviar confirmação",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!siteData || !messageForm.sender_name || !messageForm.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e mensagem.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('messages')
        .insert({
          site_id: siteData.id,
          ...messageForm
        });

      if (error) throw error;

      toast({
        title: "Mensagem enviada!",
        description: "Sua mensagem foi enviada para os noivos.",
      });

      // Limpar formulário
      setMessageForm({
        sender_name: '',
        sender_email: '',
        message: ''
      });
    } catch (error: any) {
      toast({
        title: "Erro ao enviar mensagem",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="animate-pulse text-center">
          <Heart className="h-12 w-12 text-rose-500 mx-auto mb-4 animate-bounce" />
          <p className="text-lg text-gray-600">Carregando site do casamento...</p>
        </div>
      </div>
    );
  }

  if (!siteData) return null;

  const weddingDate = new Date(siteData.wedding_date);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Header do Site */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-rose-600 hover:text-rose-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              {siteData.couple_names}
            </h1>
            <div className="flex items-center justify-center gap-4 text-xl text-gray-600 mb-8">
              <Calendar className="h-6 w-6 text-rose-500" />
              <span>{format(weddingDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</span>
            </div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              {siteData.ai_welcome_message || "Venham celebrar conosco este momento especial!"}
            </p>
          </div>
        </section>

        {/* Confirmação de Presença */}
        <section id="rsvp" className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Users className="h-6 w-6 text-rose-500" />
                Confirmação de Presença
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRSVPSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nome Completo *</label>
                    <Input
                      value={rsvpForm.guest_name}
                      onChange={(e) => setRSVPForm(prev => ({ ...prev, guest_name: e.target.value }))}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">E-mail</label>
                    <Input
                      type="email"
                      value={rsvpForm.guest_email}
                      onChange={(e) => setRSVPForm(prev => ({ ...prev, guest_email: e.target.value }))}
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Telefone</label>
                    <Input
                      value={rsvpForm.guest_phone}
                      onChange={(e) => setRSVPForm(prev => ({ ...prev, guest_phone: e.target.value }))}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Acompanhantes</label>
                    <Input
                      type="number"
                      min="0"
                      value={rsvpForm.companion_count}
                      onChange={(e) => setRSVPForm(prev => ({ ...prev, companion_count: parseInt(e.target.value) || 0 }))}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Você irá comparecer?</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={rsvpForm.will_attend}
                        onChange={() => setRSVPForm(prev => ({ ...prev, will_attend: true }))}
                        className="mr-2"
                      />
                      Sim, estarei presente
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={!rsvpForm.will_attend}
                        onChange={() => setRSVPForm(prev => ({ ...prev, will_attend: false }))}
                        className="mr-2"
                      />
                      Não poderei comparecer
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Restrições Alimentares</label>
                  <Input
                    value={rsvpForm.dietary_restrictions}
                    onChange={(e) => setRSVPForm(prev => ({ ...prev, dietary_restrictions: e.target.value }))}
                    placeholder="Vegetariano, alergia a frutos do mar, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Mensagem (opcional)</label>
                  <Textarea
                    value={rsvpForm.message}
                    onChange={(e) => setRSVPForm(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Deixe uma mensagem especial para os noivos..."
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600">
                  Confirmar Presença
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Recados para os Noivos */}
        <section className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <MessageCircle className="h-6 w-6 text-rose-500" />
                Recados para os Noivos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleMessageSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Seu Nome *</label>
                    <Input
                      value={messageForm.sender_name}
                      onChange={(e) => setMessageForm(prev => ({ ...prev, sender_name: e.target.value }))}
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">E-mail</label>
                    <Input
                      type="email"
                      value={messageForm.sender_email}
                      onChange={(e) => setMessageForm(prev => ({ ...prev, sender_email: e.target.value }))}
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Sua Mensagem *</label>
                  <Textarea
                    value={messageForm.message}
                    onChange={(e) => setMessageForm(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Deixe seus parabéns e desejos de felicidade..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Lista de Presentes Placeholder */}
        <section className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Gift className="h-6 w-6 text-rose-500" />
                Lista de Presentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Gift className="h-16 w-16 text-rose-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Lista de Presentes em Breve
                </h3>
                <p className="text-gray-600">
                  Os noivos estão preparando uma lista especial de presentes. Em breve você poderá escolher um presente especial para eles!
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-rose-200">
          <p className="text-gray-600">
            Site criado com ❤️ por Casamento Luxo
          </p>
        </footer>
      </main>
    </div>
  );
};

export default PublicSite;
