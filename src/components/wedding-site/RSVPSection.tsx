
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Calendar, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface RSVPSectionProps {
  weddingDate: string;
  templateName: string;
  siteId?: string;
  customContent?: {
    enabled?: boolean;
    title?: string;
    message?: string;
    deadline?: string;
    fields?: {
      companions?: boolean;
      dietary_restrictions?: boolean;
      message?: boolean;
    };
  };
}

const RSVPSection = ({ weddingDate, templateName, siteId, customContent }: RSVPSectionProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    guest_name: '',
    guest_email: '',
    guest_phone: '',
    will_attend: true,
    companion_count: 0,
    dietary_restrictions: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Se a seção está desabilitada, não renderizar
  if (customContent?.enabled === false) {
    return null;
  }

  const sectionTitle = customContent?.title || "Confirmação de Presença";
  const sectionMessage = customContent?.message || "Por favor, confirme sua presença até a data indicada. Sua confirmação é muito importante para nós!";
  const deadline = customContent?.deadline;
  const fields = customContent?.fields || {
    companions: true,
    dietary_restrictions: true,
    message: true
  };

  const formattedDeadline = deadline ? new Date(deadline).toLocaleDateString('pt-BR') : null;
  const weddingDateFormatted = new Date(weddingDate).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

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

    setSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('rsvp_responses')
        .insert({
          site_id: siteId,
          guest_name: formData.guest_name,
          guest_email: formData.guest_email,
          guest_phone: formData.guest_phone,
          will_attend: formData.will_attend,
          companion_count: formData.companion_count,
          dietary_restrictions: formData.dietary_restrictions,
          message: formData.message
        });

      if (error) throw error;

      setSubmitted(true);
      toast({
        title: "Confirmação enviada!",
        description: "Obrigado por confirmar sua presença!",
      });
    } catch (error: any) {
      toast({
        title: "Erro ao enviar confirmação",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="rsvp" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 rounded-2xl p-12 border border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Confirmação Recebida!
              </h2>
              <p className="text-gray-600 mb-6">
                Obrigado por confirmar sua presença. Estamos ansiosos para celebrar este momento especial com você!
              </p>
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <Heart className="h-5 w-5" fill="currentColor" />
                <span className="font-medium">Até breve!</span>
                <Heart className="h-5 w-5" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="h-4 w-4" />
            <span>RSVP</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            {sectionTitle}
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            {sectionMessage}
          </p>

          {formattedDeadline && (
            <div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
              <Calendar className="h-4 w-4" />
              <span>Confirme até: {formattedDeadline}</span>
            </div>
          )}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                Casamento - {weddingDateFormatted}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="guest_name">Nome Completo *</Label>
                    <Input
                      id="guest_name"
                      type="text"
                      required
                      value={formData.guest_name}
                      onChange={(e) => setFormData(prev => ({ ...prev, guest_name: e.target.value }))}
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="guest_email">E-mail</Label>
                    <Input
                      id="guest_email"
                      type="email"
                      value={formData.guest_email}
                      onChange={(e) => setFormData(prev => ({ ...prev, guest_email: e.target.value }))}
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="guest_phone">Telefone/WhatsApp</Label>
                  <Input
                    id="guest_phone"
                    type="tel"
                    value={formData.guest_phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, guest_phone: e.target.value }))}
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <Label>Você irá comparecer? *</Label>
                  <div className="flex space-x-4 mt-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="will_attend"
                        checked={formData.will_attend === true}
                        onChange={() => setFormData(prev => ({ ...prev, will_attend: true }))}
                        className="text-green-600"
                      />
                      <span>Sim, estarei presente</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="will_attend"
                        checked={formData.will_attend === false}
                        onChange={() => setFormData(prev => ({ ...prev, will_attend: false }))}
                        className="text-red-600"
                      />
                      <span>Não poderei comparecer</span>
                    </label>
                  </div>
                </div>

                {formData.will_attend && fields.companions && (
                  <div>
                    <Label htmlFor="companion_count">Número de Acompanhantes</Label>
                    <Input
                      id="companion_count"
                      type="number"
                      min="0"
                      max="5"
                      value={formData.companion_count}
                      onChange={(e) => setFormData(prev => ({ ...prev, companion_count: parseInt(e.target.value) || 0 }))}
                    />
                  </div>
                )}

                {formData.will_attend && fields.dietary_restrictions && (
                  <div>
                    <Label htmlFor="dietary_restrictions">Restrições Alimentares</Label>
                    <Input
                      id="dietary_restrictions"
                      type="text"
                      value={formData.dietary_restrictions}
                      onChange={(e) => setFormData(prev => ({ ...prev, dietary_restrictions: e.target.value }))}
                      placeholder="Vegetariano, alergia a frutos do mar, etc."
                    />
                  </div>
                )}

                {fields.message && (
                  <div>
                    <Label htmlFor="message">Mensagem para os Noivos</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Deixe uma mensagem carinhosa para os noivos..."
                      rows={4}
                    />
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                  disabled={submitting}
                >
                  {submitting ? 'Enviando...' : 'Confirmar Presença'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
