
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, ArrowLeft, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    confirmPassword: ''
  });

  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(formData.email, formData.password);
        if (!error) {
          navigate(from, { replace: true });
        }
      } else {
        if (formData.password !== formData.confirmPassword) {
          throw new Error('As senhas não coincidem');
        }
        
        const { error } = await signUp(formData.email, formData.password, formData.fullName);
        if (!error) {
          // Aguardar confirmação por email antes de redirecionar
          setIsLogin(true);
        }
      }
    } catch (error: any) {
      console.error('Erro na autenticação:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!formData.email) {
      toast({
        title: "Email necessário",
        description: "Por favor, digite seu email para recuperar a senha.",
        variant: "destructive",
      });
      return;
    }

    setIsResettingPassword(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(formData.email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        toast({
          title: "Erro ao enviar email",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Email enviado!",
        description: "Verifique sua caixa de entrada para redefinir sua senha.",
      });

    } catch (error: any) {
      console.error('Erro ao resetar senha:', error);
      toast({
        title: "Erro inesperado",
        description: "Não foi possível enviar o email. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsResettingPassword(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="text-rose-600 hover:text-rose-700 mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Início
            </Button>
            
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" fill="white" />
              </div>
              <h1 className="text-2xl font-bold text-rose-600">Casamento Luxo</h1>
            </div>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {isLogin ? 'Entre na sua conta' : 'Crie sua conta gratuitamente'}
            </h2>
            <p className="text-gray-600">
              {isLogin 
                ? 'Acesse seu painel e gerencie seus sites' 
                : 'Comece a criar sites de casamento únicos'
              }
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm border border-rose-200 rounded-2xl p-8 shadow-lg">
            <div className="space-y-4">
              {!isLogin && (
                <div>
                  <Label htmlFor="fullName" className="text-gray-800">
                    Nome Completo
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Seu nome completo"
                    className="border-rose-300 focus:border-rose-500"
                    required={!isLogin}
                  />
                </div>
              )}

              <div>
                <Label htmlFor="email" className="text-gray-800">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="seu@email.com"
                  className="border-rose-300 focus:border-rose-500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-800">
                  Senha
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder="Sua senha"
                  className="border-rose-300 focus:border-rose-500"
                  required
                />
              </div>

              {!isLogin && (
                <div>
                  <Label htmlFor="confirmPassword" className="text-gray-800">
                    Confirmar Senha
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    placeholder="Confirme sua senha"
                    className="border-rose-300 focus:border-rose-500"
                    required
                  />
                </div>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full mt-6 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white"
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

            {isLogin && (
              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  disabled={isResettingPassword}
                  className="text-rose-600 hover:text-rose-700 hover:underline text-sm"
                >
                  {isResettingPassword ? (
                    <>
                      <Loader2 className="h-3 w-3 mr-1 animate-spin inline" />
                      Enviando...
                    </>
                  ) : (
                    'Esqueci minha senha'
                  )}
                </button>
              </div>
            )}

            <div className="text-center mt-4">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-rose-600 hover:text-rose-700 hover:underline"
              >
                {isLogin 
                  ? 'Não tem conta? Cadastre-se gratuitamente' 
                  : 'Já tem conta? Faça login'
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
