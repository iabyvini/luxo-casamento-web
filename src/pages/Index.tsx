
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
    navigate("/templates");
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
            Escolha entre 50 templates únicos e personalize completamente seu site de casamento. 
            Galeria de fotos, lista de presentes, confirmação de convidados e muito mais!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 text-lg flex items-center gap-2"
            >
              Explorar Templates
              <ArrowRight className="h-5 w-5" />
            </Button>
            <p className="text-sm text-gray-500">
              ✨ 50 templates únicos • Totalmente personalizável
            </p>
          </div>

          {/* Estatísticas Atualizadas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-500">50+</div>
              <div className="text-gray-600">Templates Únicos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-500">1000+</div>
              <div className="text-gray-600">Sites Criados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-500">100%</div>
              <div className="text-gray-600">Personalizável</div>
            </div>
          </div>
        </div>
      </section>

      <Hero />
      <Features />
      <Templates />
      
      <Footer />
    </div>
  );
};

export default Index;
