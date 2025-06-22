
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Templates from "@/components/Templates";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";

const Index = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Se o usuário estiver logado, redirecionar para o dashboard
    if (user && !loading) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // Se o usuário estiver logado, não mostrar a página inicial
  if (user) {
    return null;
  }

  const handleGetStarted = () => {
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <Header />
      
      {/* Hero Section Atualizada */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Crie o Site de Casamento
            <span className="text-rose-500 block">dos Seus Sonhos</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Plataforma completa para criar sites de casamento únicos, com lista de presentes real, 
            confirmação de convidados e muito mais. Tudo em poucos cliques!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 text-lg flex items-center gap-2"
            >
              Começar Gratuitamente
              <ArrowRight className="h-5 w-5" />
            </Button>
            <p className="text-sm text-gray-500">
              ✨ Grátis para sempre • Sem cartão de crédito
            </p>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-500">1000+</div>
              <div className="text-gray-600">Sites Criados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-500">50k+</div>
              <div className="text-gray-600">Convidados Confirmados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-500">R$ 2M+</div>
              <div className="text-gray-600">Em Presentes</div>
            </div>
          </div>
        </div>
      </section>

      <Hero />
      <Features />
      <Templates />
      
      {/* CTA Final */}
      <section className="py-20 bg-rose-500 text-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comece Seu Site de Casamento Hoje
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a milhares de casais que já criaram seus sites conosco
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={handleGetStarted}
            className="px-8 py-4 text-lg"
          >
            Criar Meu Site Agora
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
