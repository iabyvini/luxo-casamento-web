
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, ArrowLeft, Loader2 } from "lucide-react";
import { PreviewData } from "@/types/quiz";

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const previewData = location.state?.previewData as PreviewData;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Aqui será integrado com Supabase quando disponível
      console.log('Dados para autenticação:', formData);
      console.log('Dados do site para salvar:', previewData);
      
      // Simular delay de autenticação
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Navegar para editor após autenticação
      navigate('/editor', { state: { previewData, authenticated: true } });
    } catch (error) {
      console.error('Erro na autenticação:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brown-50 to-gold-50 flex items-center justify-center">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="text-brown-600 hover:text-primary mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Preview
            </Button>
            
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="bg-gradient-luxury p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" fill="white" />
              </div>
              <h1 className="text-2xl font-bold gradient-text">Casamento Luxo</h1>
            </div>
            
            <h2 className="text-xl font-semibold text-brown-800 mb-2">
              {isLogin ? 'Entre na sua conta' : 'Crie sua conta gratuitamente'}
            </h2>
            <p className="text-brown-600">
              {isLogin 
                ? 'Acesse seu painel e gerencie seus sites' 
                : 'Salve seu site personalizado e acesse quando quiser'
              }
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="luxury-card rounded-2xl p-8">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-brown-800">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="seu@email.com"
                  className="border-brown-300 focus:border-primary"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-brown-800">
                  Senha
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder="Sua senha"
                  className="border-brown-300 focus:border-primary"
                  required
                />
              </div>

              {!isLogin && (
                <div>
                  <Label htmlFor="confirmPassword" className="text-brown-800">
                    Confirmar Senha
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    placeholder="Confirme sua senha"
                    className="border-brown-300 focus:border-primary"
                    required
                  />
                </div>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full mt-6 bg-gradient-luxury hover:opacity-90 text-white"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  {isLogin ? 'Entrando...' : 'Criando conta...'}
                </>
              ) : (
                isLogin ? 'Entrar' : 'Criar Conta Gratuita'
              )}
            </Button>

            <div className="text-center mt-4">
              <button
                type="button"
                onClick={() => set isLogin(!isLogin)}
                className="text-primary hover:underline"
              >
                {isLogin 
                  ? 'Não tem conta? Cadastre-se gratuitamente' 
                  : 'Já tem conta? Faça login'
                }
              </button>
            </div>
          </form>

          {/* Preview Info */}
          {previewData && (
            <div className="mt-6 p-4 bg-white/80 rounded-lg border border-brown-200">
              <h3 className="font-semibold text-brown-800 mb-2">
                Seu site será salvo:
              </h3>
              <p className="text-sm text-brown-600">
                <strong>{previewData.coupleNames}</strong> - {previewData.templateName}
              </p>
              <p className="text-sm text-brown-500">
                Data: {new Date(previewData.weddingDate).toLocaleDateString('pt-BR')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
