
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmailConfirmed = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [status, setStatus] = useState<'processing' | 'success' | 'error'>('processing');
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const handleEmailConfirmation = async () => {
      try {
        // Parse URL hash parameters
        const hashParams = new URLSearchParams(location.hash.substring(1));
        const accessToken = hashParams.get('access_token');
        const refreshToken = hashParams.get('refresh_token');
        const type = hashParams.get('type');

        if (accessToken && refreshToken && type === 'signup') {
          // Set the session with the tokens from the email link
          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });

          if (error) {
            console.error('Erro ao estabelecer sessão:', error);
            setStatus('error');
            toast({
              title: "Erro na confirmação",
              description: "Não foi possível confirmar seu email. Tente fazer login novamente.",
              variant: "destructive",
            });
            return;
          }

          setStatus('success');
          toast({
            title: "Email confirmado!",
            description: "Sua conta foi verificada com sucesso.",
          });

          // Start countdown
          const countdownInterval = setInterval(() => {
            setCountdown((prev) => {
              if (prev <= 1) {
                clearInterval(countdownInterval);
                navigate('/dashboard');
                return 0;
              }
              return prev - 1;
            });
          }, 1000);

        } else {
          setStatus('error');
          toast({
            title: "Link inválido",
            description: "O link de confirmação é inválido ou expirou.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Erro no processo de confirmação:', error);
        setStatus('error');
        toast({
          title: "Erro inesperado",
          description: "Ocorreu um erro durante a confirmação. Tente novamente.",
          variant: "destructive",
        });
      }
    };

    handleEmailConfirmation();
  }, [location.hash, navigate, toast]);

  const handleManualRedirect = () => {
    navigate('/dashboard');
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
                Confirmando seu email...
              </h1>
              <p className="text-gray-600">
                Aguarde enquanto verificamos sua conta.
              </p>
            </>
          )}

          {status === 'success' && (
            <>
              <div className="mb-6">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto" fill="currentColor" />
              </div>
              <h1 className="text-2xl font-bold text-green-600 mb-4">
                🎉 Email confirmado com sucesso!
              </h1>
              <p className="text-gray-600 mb-6">
                Sua conta foi verificada. Você será redirecionado para o dashboard em {countdown} segundos.
              </p>
              <Button
                onClick={handleManualRedirect}
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white"
              >
                Ir para o Dashboard Agora
              </Button>
            </>
          )}

          {status === 'error' && (
            <>
              <div className="mb-6">
                <AlertCircle className="h-12 w-12 text-red-500 mx-auto" />
              </div>
              <h1 className="text-2xl font-bold text-red-600 mb-4">
                Erro na confirmação
              </h1>
              <p className="text-gray-600 mb-6">
                Não foi possível confirmar seu email. O link pode estar expirado ou inválido.
              </p>
              <div className="space-y-3">
                <Button
                  onClick={() => navigate('/auth')}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white"
                >
                  Fazer Login
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

export default EmailConfirmed;
