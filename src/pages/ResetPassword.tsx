
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Loader2, AlertCircle, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [status, setStatus] = useState<'processing' | 'ready' | 'error'>('processing');
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const handlePasswordReset = async () => {
      try {
        // Parse URL hash parameters
        const hashParams = new URLSearchParams(location.hash.substring(1));
        const accessToken = hashParams.get('access_token');
        const refreshToken = hashParams.get('refresh_token');
        const type = hashParams.get('type');

        if (accessToken && refreshToken && type === 'recovery') {
          // Set the session with the tokens from the email link
          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });

          if (error) {
            console.error('Erro ao estabelecer sessão:', error);
            setStatus('error');
            toast({
              title: "Erro na validação",
              description: "Link inválido ou expirado. Tente solicitar um novo link.",
              variant: "destructive",
            });
            return;
          }

          setStatus('ready');
          toast({
            title: "Link validado!",
            description: "Agora você pode definir sua nova senha.",
          });

        } else {
          setStatus('error');
          toast({
            title: "Link inválido",
            description: "O link de recuperação é inválido ou expirou.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Erro no processo de reset:', error);
        setStatus('error');
        toast({
          title: "Erro inesperado",
          description: "Ocorreu um erro durante a validação. Tente novamente.",
          variant: "destructive",
        });
      }
    };

    handlePasswordReset();
  }, [location.hash, toast]);

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast({
        title: "Senhas não coincidem",
        description: "Por favor, verifique se as senhas são iguais.",
        variant: "destructive",
      });
      return;
    }

    if (newPassword.length < 6) {
      toast({
        title: "Senha muito curta",
        description: "A senha deve ter pelo menos 6 caracteres.",
        variant: "destructive",
      });
      return;
    }

    setIsUpdating(true);

    try {
      const { error } = await supabase.auth.updateUser({ 
        password: newPassword 
      });

      if (error) {
        toast({
          title: "Erro ao atualizar senha",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Senha atualizada!",
        description: "Sua senha foi alterada com sucesso.",
      });

      // Redirect to dashboard after successful password update
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);

    } catch (error: any) {
      console.error('Erro ao atualizar senha:', error);
      toast({
        title: "Erro inesperado",
        description: "Não foi possível atualizar sua senha. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm border border-rose-200 rounded-2xl p-8 shadow-lg text-center">
          
          {status === 'processing' && (
            <>
              <div className="mb-6">
                <Loader2 className="h-12 w-12 text-rose-500 animate-spin mx-auto" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Validando link de recuperação...
              </h1>
              <p className="text-gray-600">
                Aguarde enquanto verificamos seu link de recuperação.
              </p>
            </>
          )}

          {status === 'ready' && (
            <>
              <div className="mb-6">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto" fill="currentColor" />
              </div>
              <h1 className="text-2xl font-bold text-green-600 mb-4">
                🔒 Definir Nova Senha
              </h1>
              <p className="text-gray-600 mb-6">
                Crie uma nova senha segura para sua conta.
              </p>
              
              <form onSubmit={handlePasswordUpdate} className="space-y-4 text-left">
                <div>
                  <Label htmlFor="newPassword" className="text-gray-800">
                    Nova Senha
                  </Label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      type={showPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Digite sua nova senha"
                      className="border-rose-300 focus:border-rose-500 pr-10"
                      required
                      minLength={6}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirmPassword" className="text-gray-800">
                    Confirmar Nova Senha
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirme sua nova senha"
                      className="border-rose-300 focus:border-rose-500 pr-10"
                      required
                      minLength={6}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isUpdating || !newPassword || !confirmPassword}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white"
                >
                  {isUpdating ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Atualizando...
                    </>
                  ) : (
                    'Atualizar Senha'
                  )}
                </Button>
              </form>
            </>
          )}

          {status === 'error' && (
            <>
              <div className="mb-6">
                <AlertCircle className="h-12 w-12 text-red-500 mx-auto" />
              </div>
              <h1 className="text-2xl font-bold text-red-600 mb-4">
                Erro na recuperação
              </h1>
              <p className="text-gray-600 mb-6">
                Não foi possível validar seu link. O link pode estar expirado ou inválido.
              </p>
              <div className="space-y-3">
                <Button
                  onClick={() => navigate('/auth')}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white"
                >
                  Tentar Novamente
                </Button>
                <Button
                  onClick={() => navigate('/')}
                  variant="outline"
                  className="w-full border-rose-300 text-rose-600 hover:bg-rose-50"
                >
                  Voltar ao Início
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
