
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { CalendarDays, Clock, MapPin, Users, Mail, Phone, MessageSquare, CheckCircle, XCircle } from "lucide-react";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

const PublicSite = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [siteData, setSiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [willAttend, setWillAttend] = useState<boolean>(true);
  const [companionCount, setCompanionCount] = useState(0);
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!slug) {
      setError("Site não encontrado");
      setLoading(false);
      return;
    }

    const fetchSiteData = async () => {
      try {
        setLoading(true);
        
        // Increment view count
        const { error: incrementError } = await supabase.rpc('increment_site_views', { 
          site_slug: slug 
        });
        
        if (incrementError) {
          console.error('Error incrementing views:', incrementError);
        }

        // Fetch site data
        const { data, error } = await supabase
          .from('wedding_sites')
          .select('*')
          .eq('slug', slug)
          .eq('is_published', true)
          .single();

        if (error) {
          throw error;
        }

        if (!data) {
          setError("Site não encontrado ou não publicado");
          return;
        }

        setSiteData(data);
      } catch (error: any) {
        console.error('Error fetching site:', error);
        setError("Erro ao carregar o site");
      } finally {
        setLoading(false);
      }
    };

    fetchSiteData();
  }, [slug]);

  const { toast } = useToast();

  const handleRSVPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!guestName || !guestEmail) {
      toast({
        title: "Preencha os campos",
        description: "Por favor, preencha seu nome e email.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('rsvp_responses')
        .insert([
          {
            site_id: siteData.id,
            guest_name: guestName,
            guest_email: guestEmail,
            guest_phone: guestPhone,
            will_attend: willAttend,
            companion_count: companionCount,
            dietary_restrictions: dietaryRestrictions,
            message: message,
          },
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Confirmação enviada!",
        description: "Agradecemos por confirmar sua presença.",
      });

      // Clear form fields
      setGuestName("");
      setGuestEmail("");
      setGuestPhone("");
      setWillAttend(true);
      setCompanionCount(0);
      setDietaryRestrictions("");
      setMessage("");
    } catch (error: any) {
      console.error('Error submitting RSVP:', error);
      toast({
        title: "Erro ao confirmar",
        description: "Ocorreu um erro ao enviar sua confirmação. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <Skeleton className="w-[280px] h-[32px] rounded-md mb-4" />
        <Skeleton className="w-[200px] h-[24px] rounded-md mb-2" />
        <Skeleton className="w-[350px] h-[20px] rounded-md mb-1" />
        <Skeleton className="w-[300px] h-[20px] rounded-md mb-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Skeleton className="w-[150px] h-[24px] rounded-md mb-2" />
            <Skeleton className="w-full h-[150px] rounded-md mb-4" />
          </div>
          <div>
            <Skeleton className="w-[150px] h-[24px] rounded-md mb-2" />
            <Skeleton className="w-full h-[150px] rounded-md mb-4" />
          </div>
        </div>

        <Skeleton className="w-[200px] h-[24px] rounded-md mb-2" />
        <Skeleton className="w-full h-[100px] rounded-md mb-4" />

        <Skeleton className="w-[200px] h-[24px] rounded-md mb-2" />
        <Skeleton className="w-full h-[40px] rounded-md mb-4" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold text-red-500">{error}</h1>
        <Button onClick={() => navigate('/')} className="mt-4">Voltar ao Início</Button>
      </div>
    );
  }

  if (!siteData) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold text-gray-500">Site não encontrado</h1>
        <Button onClick={() => navigate('/')} className="mt-4">Voltar ao Início</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-rose-700 mb-2">{siteData.couple_names}</h1>
          <p className="text-gray-600">
            {siteData.wedding_date && format(new Date(siteData.wedding_date), 'dd/MM/yyyy')}
          </p>
        </header>

        {/* Event Details Section */}
        <section className="bg-white/80 backdrop-blur-sm border border-rose-200 rounded-2xl p-6 shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Detalhes do Evento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center text-gray-700 mb-2">
                <CalendarDays className="h-5 w-5 mr-2 text-rose-500" />
                <span>
                  {siteData.wedding_date && format(new Date(siteData.wedding_date), 'EEEE, dd \'de\' MMMM \'de\' yyyy', { locale: ptBR })}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* RSVP Section */}
        <section className="bg-white/80 backdrop-blur-sm border border-rose-200 rounded-2xl p-6 shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Confirme sua Presença</h2>
          <form onSubmit={handleRSVPSubmit} className="space-y-4">
            <div>
              <Label htmlFor="guestName" className="text-gray-800">Nome Completo</Label>
              <Input
                id="guestName"
                type="text"
                placeholder="Seu nome"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="border-rose-300 focus:border-rose-500"
                required
              />
            </div>
            <div>
              <Label htmlFor="guestEmail" className="text-gray-800">Email</Label>
              <Input
                id="guestEmail"
                type="email"
                placeholder="seu@email.com"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                className="border-rose-300 focus:border-rose-500"
                required
              />
            </div>
            <div>
              <Label htmlFor="guestPhone" className="text-gray-800">Telefone (Opcional)</Label>
              <Input
                id="guestPhone"
                type="tel"
                placeholder="(11) 99999-9999"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                className="border-rose-300 focus:border-rose-500"
              />
            </div>
            <div>
              <Label className="text-gray-800">Confirmação</Label>
              <div className="flex items-center space-x-4">
                <Button
                  type="button"
                  variant={willAttend ? "default" : "outline"}
                  className={` ${willAttend
                    ? "bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white"
                    : "border-rose-300 text-rose-600 hover:bg-rose-50"
                    }`}
                  onClick={() => setWillAttend(true)}
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Sim, estarei presente
                </Button>
                <Button
                  type="button"
                  variant={!willAttend ? "default" : "outline"}
                  className={`${!willAttend
                    ? "bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white"
                    : "border-rose-300 text-rose-600 hover:bg-rose-50"
                    }`}
                  onClick={() => setWillAttend(false)}
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  Não poderei comparecer
                </Button>
              </div>
            </div>
            {willAttend && (
              <div>
                <Label htmlFor="companionCount" className="text-gray-800">Número de Acompanhantes</Label>
                <Input
                  id="companionCount"
                  type="number"
                  min="0"
                  max="10"
                  value={companionCount}
                  onChange={(e) => setCompanionCount(parseInt(e.target.value) || 0)}
                  className="border-rose-300 focus:border-rose-500"
                />
              </div>
            )}
            {willAttend && (
              <div>
                <Label htmlFor="dietaryRestrictions" className="text-gray-800">Restrições Alimentares (Opcional)</Label>
                <Input
                  id="dietaryRestrictions"
                  type="text"
                  placeholder="Ex: Vegetariano, alérgico a frutos do mar..."
                  value={dietaryRestrictions}
                  onChange={(e) => setDietaryRestrictions(e.target.value)}
                  className="border-rose-300 focus:border-rose-500"
                />
              </div>
            )}
            <div>
              <Label htmlFor="message" className="text-gray-800">Mensagem (Opcional)</Label>
              <Textarea
                id="message"
                placeholder="Deixe uma mensagem para os noivos"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border-rose-300 focus:border-rose-500 resize-none"
              />
            </div>
            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white"
            >
              {submitting ? 'Enviando...' : 'Confirmar Presença'}
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default PublicSite;
