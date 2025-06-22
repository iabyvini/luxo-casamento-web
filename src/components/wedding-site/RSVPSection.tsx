
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Users, CheckCircle, Calendar, Phone, Mail } from "lucide-react";

interface RSVPSectionProps {
  weddingDate: string;
  templateName: string;
}

const RSVPSection = ({ weddingDate }: RSVPSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    attendance: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const confirmDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              
              <h3 className="text-2xl font-serif text-gray-800 mb-4">
                Confirmação Recebida!
              </h3>
              
              <p className="text-gray-600 mb-6">
                Obrigado por confirmar sua presença. Estamos ansiosos para celebrar este momento especial com você!
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-green-600">
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
    <section id="rsvp" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            <span>RSVP</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            Confirme sua Presença
          </h2>
          
          <p className="text-lg text-gray-600 mb-4">
            Sua presença é muito importante para nós. Por favor, confirme até {confirmDate}.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
            <Calendar className="h-4 w-4" />
            <span>Prazo: {confirmDate}</span>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 space-y-6">
            <div>
              <Label htmlFor="name" className="text-gray-800 font-medium">
                Nome Completo *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Seu nome completo"
                className="border-gray-300 focus:border-green-500 mt-2"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-gray-800 font-medium">
                  E-mail
                </Label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="seu@email.com"
                    className="border-gray-300 focus:border-green-500 pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-800 font-medium">
                  Telefone
                </Label>
                <div className="relative mt-2">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="border-gray-300 focus:border-green-500 pl-10"
                  />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="guests" className="text-gray-800 font-medium">
                Número de Convidados *
              </Label>
              <select
                id="guests"
                value={formData.guests}
                onChange={(e) => handleInputChange('guests', e.target.value)}
                className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none"
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
              <Label className="text-gray-800 font-medium mb-3 block">
                Confirmação de Presença *
              </Label>
              <div className="space-y-2">
                <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                  <input
                    type="radio"
                    value="sim"
                    checked={formData.attendance === 'sim'}
                    onChange={(e) => handleInputChange('attendance', e.target.value)}
                    className="text-green-600"
                    required
                  />
                  <span className="text-gray-700">✅ Sim, estarei presente!</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                  <input
                    type="radio"
                    value="nao"
                    checked={formData.attendance === 'nao'}
                    onChange={(e) => handleInputChange('attendance', e.target.value)}
                    className="text-green-600"
                    required
                  />
                  <span className="text-gray-700">❌ Infelizmente não poderei comparecer</span>
                </label>
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="text-gray-800 font-medium">
                Mensagem (Opcional)
              </Label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Deixe uma mensagem carinhosa para os noivos..."
                rows={3}
                className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
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
