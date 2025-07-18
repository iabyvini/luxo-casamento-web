import React, { useState } from 'react';
import { Heart, Send, CheckCircle, User, Users, MessageCircle } from 'lucide-react';
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
        title: "Erro",
        description: "Por favor, preencha os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "RSVP Confirmado! 💕",
        description: "Obrigado por confirmar sua presença. Mal podemos esperar para celebrar com você!",
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
        title: "Erro",
        description: "Houve um problema ao enviar sua confirmação. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-br from-pink-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full"></div>
        <div className="absolute top-1/3 right-20 w-20 h-20 bg-pink-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-200 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-pink-500 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent w-20"></div>
            <Heart className="mx-4 w-8 h-8 text-pink-500 fill-current" />
            <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent w-20"></div>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl text-gray-800 mb-4">
            Confirme sua Presença
          </h2>
          
          <p className="font-lora text-gray-600 text-lg max-w-2xl mx-auto">
            Sua presença tornará nosso dia ainda mais especial. Por favor, confirme até 30 dias antes do casamento.
          </p>
        </div>

        {/* RSVP Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-pink-100 relative">
            {/* Decorative elements */}
            <div className="absolute top-6 right-6 w-8 h-8 bg-pink-100 rounded-full opacity-50"></div>
            <div className="absolute bottom-6 left-6 w-6 h-6 bg-pink-200 rounded-full opacity-30"></div>

            <div className="space-y-6">
              {/* Name and Contact */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-lora text-gray-700 font-medium flex items-center">
                    <User className="w-4 h-4 mr-2 text-pink-500" />
                    Nome Completo *
                  </label>
                  <Input
                    name="guestName"
                    value={formData.guestName}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="font-lora text-gray-700 font-medium">
                    E-mail
                  </label>
                  <Input
                    name="guestEmail"
                    type="email"
                    value={formData.guestEmail}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-lora text-gray-700 font-medium">
                  Telefone
                </label>
                <Input
                  name="guestPhone"
                  value={formData.guestPhone}
                  onChange={handleInputChange}
                  placeholder="(11) 99999-9999"
                  className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
                />
              </div>

              {/* Attendance */}
              <div className="space-y-4">
                <label className="font-lora text-gray-700 font-medium flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-pink-500" />
                  Você estará presente? *
                </label>
                
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => handleAttendanceChange(true)}
                    className={`flex-1 py-4 px-6 rounded-2xl border-2 transition-all duration-300 ${
                      formData.willAttend === 'true'
                        ? 'bg-pink-500 border-pink-500 text-white shadow-lg'
                        : 'bg-white border-pink-200 text-gray-700 hover:border-pink-300'
                    }`}
                  >
                    <div className="text-center">
                      <span className="text-2xl mb-2 block">💕</span>
                      <span className="font-lora font-medium">Sim, estarei lá!</span>
                    </div>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => handleAttendanceChange(false)}
                    className={`flex-1 py-4 px-6 rounded-2xl border-2 transition-all duration-300 ${
                      formData.willAttend === 'false'
                        ? 'bg-gray-500 border-gray-500 text-white shadow-lg'
                        : 'bg-white border-pink-200 text-gray-700 hover:border-pink-300'
                    }`}
                  >
                    <div className="text-center">
                      <span className="text-2xl mb-2 block">😢</span>
                      <span className="font-lora font-medium">Não poderei comparecer</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Companion Count */}
              {formData.willAttend === 'true' && (
                <div className="space-y-2">
                  <label className="font-lora text-gray-700 font-medium flex items-center">
                    <Users className="w-4 h-4 mr-2 text-pink-500" />
                    Número de acompanhantes
                  </label>
                  <select
                    name="companionCount"
                    value={formData.companionCount}
                    onChange={(e) => setFormData(prev => ({ ...prev, companionCount: e.target.value }))}
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:border-pink-400 focus:ring-pink-200 font-lora"
                  >
                    <option value="0">Apenas eu</option>
                    <option value="1">Eu + 1 acompanhante</option>
                    <option value="2">Eu + 2 acompanhantes</option>
                    <option value="3">Eu + 3 acompanhantes</option>
                    <option value="4">Eu + 4 acompanhantes</option>
                  </select>
                </div>
              )}

              {/* Dietary Restrictions */}
              {formData.willAttend === 'true' && (
                <div className="space-y-2">
                  <label className="font-lora text-gray-700 font-medium">
                    Restrições alimentares
                  </label>
                  <Input
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleInputChange}
                    placeholder="Ex: vegetariano, intolerância à lactose, etc."
                    className="border-pink-200 focus:border-pink-400 focus:ring-pink-200"
                  />
                </div>
              )}

              {/* Message */}
              <div className="space-y-2">
                <label className="font-lora text-gray-700 font-medium flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2 text-pink-500" />
                  Mensagem especial (opcional)
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Deixe uma mensagem carinhosa para os noivos..."
                  rows={4}
                  className="border-pink-200 focus:border-pink-400 focus:ring-pink-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-lora font-medium text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    Enviando...
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
        <div className="flex justify-center mt-12 space-x-3">
          {[...Array(5)].map((_, i) => (
            <Heart 
              key={i}
              className={`w-4 h-4 text-pink-${300 + (i % 3) * 100} fill-current animate-pulse`}
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EternalLoveRSVP;