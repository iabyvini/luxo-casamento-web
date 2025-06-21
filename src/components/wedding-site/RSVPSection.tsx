
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Users, CheckCircle, Calendar } from "lucide-react";

interface RSVPSectionProps {
  weddingDate: string;
  templateName: string;
}

const RSVPSection = ({ weddingDate, templateName }: RSVPSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attendance: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const confirmDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getRSVPTitle = (template: string) => {
    switch (template) {
      case 'Bohemian Dream':
        return "Confirme Sua Energia";
      case 'Vintage Charm':
        return "Reserve Seu Lugar";
      case 'Modern Love':
        return "RSVP Online";
      case 'Minimalist':
        return "Confirmação";
      default:
        return "Confirme Sua Presença";
    }
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 bg-gradient-to-br from-brown-50 to-gold-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="luxury-card rounded-2xl p-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-brown-800 mb-4">
                Confirmação Recebida!
              </h3>
              
              <p className="text-brown-600 mb-6">
                Obrigado por confirmar sua presença. Estamos ansiosos para celebrar este momento especial com você!
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-primary">
                <Heart className="h-5 w-5" fill="currentColor" />
                <span className="font-medium">Até logo!</span>
                <Heart className="h-5 w-5" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-br from-brown-50 to-gold-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-brown-200 rounded-full px-6 py-3 mb-6">
            <Users className="h-5 w-5 text-primary" />
            <span className="font-medium text-brown-700">RSVP</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {getRSVPTitle(templateName)}
          </h2>
          
          <p className="text-lg text-brown-600 mb-4">
            Sua presença é muito importante para nós. Por favor, confirme até {confirmDate}.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-brown-500 text-sm">
            <Calendar className="h-4 w-4" />
            <span>Prazo: {confirmDate}</span>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="luxury-card rounded-2xl p-8 space-y-6">
            <div>
              <Label htmlFor="name" className="text-brown-800 font-medium">
                Nome Completo *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Seu nome completo"
                className="border-brown-300 focus:border-primary mt-2"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-brown-800 font-medium">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="seu@email.com"
                className="border-brown-300 focus:border-primary mt-2"
              />
            </div>

            <div>
              <Label htmlFor="guests" className="text-brown-800 font-medium">
                Número de Convidados *
              </Label>
              <select
                id="guests"
                value={formData.guests}
                onChange={(e) => handleInputChange('guests', e.target.value)}
                className="w-full mt-2 px-3 py-2 border border-brown-300 rounded-md focus:border-primary focus:outline-none"
                required
              >
                <option value="1">1 pessoa</option>
                <option value="2">2 pessoas</option>
                <option value="3">3 pessoas</option>
                <option value="4">4 pessoas</option>
                <option value="5+">5+ pessoas</option>
              </select>
            </div>

            <div>
              <Label className="text-brown-800 font-medium mb-3 block">
                Confirmação de Presença *
              </Label>
              <div className="space-y-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    value="sim"
                    checked={formData.attendance === 'sim'}
                    onChange={(e) => handleInputChange('attendance', e.target.value)}
                    className="text-primary"
                    required
                  />
                  <span className="text-brown-700">✅ Sim, estarei presente!</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    value="nao"
                    checked={formData.attendance === 'nao'}
                    onChange={(e) => handleInputChange('attendance', e.target.value)}
                    className="text-primary"
                    required
                  />
                  <span className="text-brown-700">❌ Infelizmente não poderei comparecer</span>
                </label>
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="text-brown-800 font-medium">
                Mensagem (Opcional)
              </Label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Deixe uma mensagem carinhosa para os noivos..."
                rows={3}
                className="w-full mt-2 px-3 py-2 border border-brown-300 rounded-md focus:border-primary focus:outline-none resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-luxury hover:opacity-90 text-white py-3 text-lg"
            >
              <Heart className="h-5 w-5 mr-2" fill="currentColor" />
              Confirmar Presença
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
