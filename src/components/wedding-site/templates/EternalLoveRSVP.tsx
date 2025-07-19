import React, { useState } from 'react';
import { Heart, Send, CheckCircle, User, Users, MessageCircle, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface EternalLoveRSVPProps {
  siteId: string;
}

const EternalLoveRSVP = ({ siteId }: EternalLoveRSVPProps) => {
  const [formData, setFormData] = useState({
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    willAttend: '',
    companionCount: '0',
    dietaryRestrictions: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAttendanceChange = (willAttend: boolean) => {
    setFormData(prev => ({ 
      ...prev, 
      willAttend: willAttend.toString(),
      companionCount: willAttend ? prev.companionCount : '0'
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.guestName || !formData.willAttend) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e confirme sua presença.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Confirmação recebida! ✨",
        description: "Obrigado por confirmar. Mal podemos esperar para celebrar com você!",
      });
      
      // Reset form
      setFormData({
        guestName: '',
        guestEmail: '',
        guestPhone: '',
        willAttend: '',
        companionCount: '0',
        dietaryRestrictions: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Erro no envio",
        description: "Houve um problema. Tente novamente em alguns instantes.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="eternal-love-section py-20">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 eternal-love-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B4B5C]/30 to-transparent w-16"></div>
            <Heart className="mx-4 w-6 h-6 text-[#8B4B5C] fill-current" />
            <div className="h-px bg-gradient-to-r from-transparent via-[#8B4B5C]/30 to-transparent w-16"></div>
          </div>
          <h2 className="font-['Crimson_Text'] text-4xl md:text-5xl text-[#8B4B5C] mb-4">
            Confirme sua Presença
          </h2>
          <p className="font-['Libre_Baskerville'] text-[#6B6B6B] text-lg max-w-2xl mx-auto">
            Sua presença tornará nosso dia ainda mais especial.<br />
            Por favor, confirme até 30 dias antes da cerimônia.
          </p>
        </div>

        {/* RSVP Form */}
        <div className="max-w-2xl mx-auto eternal-love-scale-in">
          <form onSubmit={handleSubmit} className="eternal-love-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            
            {/* Decorative elements */}
            <div className="absolute top-6 right-6 w-12 h-12 bg-[#D4AF8C]/10 rounded-full"></div>
            <div className="absolute bottom-6 left-6 w-8 h-8 bg-[#8B4B5C]/10 rounded-full"></div>

            <div className="space-y-8">
              
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="font-['Crimson_Text'] text-2xl text-[#8B4B5C] mb-6 text-center">
                  Suas Informações
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-['Libre_Baskerville'] text-[#2C2C2C] font-medium flex items-center text-sm">
                      <User className="w-4 h-4 mr-2 text-[#8B4B5C]" />
                      Nome Completo *
                    </label>
                    <Input
                      name="guestName"
                      value={formData.guestName}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      className="border-[#8B4B5C]/20 focus:border-[#8B4B5C] focus:ring-[#8B4B5C]/20 rounded-lg font-['Libre_Baskerville']"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-['Libre_Baskerville'] text-[#2C2C2C] font-medium flex items-center text-sm">
                      <Mail className="w-4 h-4 mr-2 text-[#8B4B5C]" />
                      E-mail
                    </label>
                    <Input
                      name="guestEmail"
                      type="email"
                      value={formData.guestEmail}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="border-[#8B4B5C]/20 focus:border-[#8B4B5C] focus:ring-[#8B4B5C]/20 rounded-lg font-['Libre_Baskerville']"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-['Libre_Baskerville'] text-[#2C2C2C] font-medium flex items-center text-sm">
                    <Phone className="w-4 h-4 mr-2 text-[#8B4B5C]" />
                    Telefone
                  </label>
                  <Input
                    name="guestPhone"
                    value={formData.guestPhone}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                    className="border-[#8B4B5C]/20 focus:border-[#8B4B5C] focus:ring-[#8B4B5C]/20 rounded-lg font-['Libre_Baskerville']"
                  />
                </div>
              </div>

              {/* Attendance Confirmation */}
              <div className="space-y-6">
                <label className="font-['Libre_Baskerville'] text-[#2C2C2C] font-medium flex items-center justify-center text-lg">
                  <CheckCircle className="w-5 h-5 mr-2 text-[#8B4B5C]" />
                  Você estará presente? *
                </label>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handleAttendanceChange(true)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                      formData.willAttend === 'true'
                        ? 'bg-[#8B4B5C] border-[#8B4B5C] text-white shadow-xl'
                        : 'bg-white border-[#8B4B5C]/20 text-[#2C2C2C] hover:border-[#8B4B5C]/40'
                    }`}
                  >
                    <div className="text-center">
                      <span className="text-3xl mb-2 block">💕</span>
                      <span className="font-['Libre_Baskerville'] font-medium">
                        Sim, estarei lá!
                      </span>
                    </div>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => handleAttendanceChange(false)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                      formData.willAttend === 'false'
                        ? 'bg-gray-500 border-gray-500 text-white shadow-xl'
                        : 'bg-white border-[#8B4B5C]/20 text-[#2C2C2C] hover:border-[#8B4B5C]/40'
                    }`}
                  >
                    <div className="text-center">
                      <span className="text-3xl mb-2 block">😔</span>
                      <span className="font-['Libre_Baskerville'] font-medium">
                        Não poderei comparecer
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Additional Information for Attendees */}
              {formData.willAttend === 'true' && (
                <div className="space-y-6 eternal-love-fade-in">
                  <div className="space-y-2">
                    <label className="font-['Libre_Baskerville'] text-[#2C2C2C] font-medium flex items-center text-sm">
                      <Users className="w-4 h-4 mr-2 text-[#8B4B5C]" />
                      Número de acompanhantes
                    </label>
                    <select
                      name="companionCount"
                      value={formData.companionCount}
                      onChange={(e) => setFormData(prev => ({ ...prev, companionCount: e.target.value }))}
                      className="w-full px-4 py-3 border border-[#8B4B5C]/20 rounded-lg focus:border-[#8B4B5C] focus:ring-[#8B4B5C]/20 font-['Libre_Baskerville'] bg-white"
                    >
                      <option value="0">Apenas eu</option>
                      <option value="1">Eu + 1 acompanhante</option>
                      <option value="2">Eu + 2 acompanhantes</option>
                      <option value="3">Eu + 3 acompanhantes</option>
                      <option value="4">Eu + 4 acompanhantes</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-['Libre_Baskerville'] text-[#2C2C2C] font-medium text-sm">
                      Restrições alimentares
                    </label>
                    <Input
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleInputChange}
                      placeholder="Ex: vegetariano, intolerância à lactose..."
                      className="border-[#8B4B5C]/20 focus:border-[#8B4B5C] focus:ring-[#8B4B5C]/20 rounded-lg font-['Libre_Baskerville']"
                    />
                  </div>
                </div>
              )}

              {/* Message */}
              <div className="space-y-2">
                <label className="font-['Libre_Baskerville'] text-[#2C2C2C] font-medium flex items-center text-sm">
                  <MessageCircle className="w-4 h-4 mr-2 text-[#8B4B5C]" />
                  Mensagem especial (opcional)
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Deixe uma mensagem carinhosa para os noivos..."
                  rows={4}
                  className="border-[#8B4B5C]/20 focus:border-[#8B4B5C] focus:ring-[#8B4B5C]/20 rounded-lg resize-none font-['Libre_Baskerville']"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 eternal-love-button font-['Libre_Baskerville'] font-medium text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    Enviando confirmação...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-3" />
                    Confirmar Presença
                  </div>
                )}
              </Button>
            </div>
          </form>
        </div>

        {/* Decorative hearts */}
        <div className="flex justify-center mt-12 space-x-3 eternal-love-fade-in">
          {[...Array(5)].map((_, i) => (
            <Heart 
              key={i}
              className="w-4 h-4 text-[#D4AF8C] fill-current animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EternalLoveRSVP;