
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ToscanaRSVPSectionProps {
  siteId: string;
  weddingDate: string;
}

const ToscanaRSVPSection = ({ siteId, weddingDate }: ToscanaRSVPSectionProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    confirmacao: "",
    acompanhantes: "0",
    mensagem: ""
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate RSVP submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Confirmação enviada!",
        description: "Obrigado por confirmar sua presença.",
      });
      
      setFormData({
        nome: "",
        email: "",
        confirmacao: "",
        acompanhantes: "0",
        mensagem: ""
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-wide">
          Confirme Sua Presença
        </h2>
        
        <div className="toscana-divider"></div>
        
        <p className="text-lg toscana-accent mb-12">
          Sua presença é fundamental para tornar este dia ainda mais especial
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label className="block text-sm font-medium mb-2">Nome Completo</label>
            <Input
              value={formData.nome}
              onChange={(e) => setFormData({...formData, nome: e.target.value})}
              className="w-full"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">E-mail</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Confirmação</label>
            <select
              value={formData.confirmacao}
              onChange={(e) => setFormData({...formData, confirmacao: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            >
              <option value="">Selecione...</option>
              <option value="sim">Confirmo minha presença</option>
              <option value="nao">Não poderei comparecer</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Número de Acompanhantes</label>
            <select
              value={formData.acompanhantes}
              onChange={(e) => setFormData({...formData, acompanhantes: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-md"
            >
              <option value="0">Apenas eu</option>
              <option value="1">1 acompanhante</option>
              <option value="2">2 acompanhantes</option>
              <option value="3">3 acompanhantes</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Mensagem (opcional)</label>
            <Textarea
              value={formData.mensagem}
              onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
              placeholder="Deixe uma mensagem carinhosa para os noivos..."
              rows={4}
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white py-3"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Confirmar Presença"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ToscanaRSVPSection;
