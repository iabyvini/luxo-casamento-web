
import { RefreshCw, Home, AlertTriangle } from "lucide-react";

interface NotFoundPageProps {
  onRetry?: () => void;
}

const NotFoundPage = ({ onRetry }: NotFoundPageProps) => {
  console.log('🚫 NotFoundPage renderizada');
  
  const handleRetryWithFallback = () => {
    if (onRetry) {
      onRetry();
    } else {
      // Tentar recarregar a página
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-gold-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <AlertTriangle className="w-16 h-16 text-amber-500 mx-auto mb-6" />
          
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Site não encontrado
          </h1>
          
          <p className="text-gray-600 mb-6">
            O site que você está procurando não existe, não está publicado ou pode estar temporariamente indisponível.
          </p>

          <div className="space-y-3">
            <button
              onClick={handleRetryWithFallback}
              className="w-full flex items-center justify-center px-6 py-3 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors"
            >
              <RefreshCw className="w-4 w-4 mr-2" />
              Tentar gerar novamente com estilo padrão
            </button>
            
            <a 
              href="/" 
              className="w-full flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Home className="w-4 h-4 mr-2" />
              Voltar à Home
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-6">
            Se você acredita que isso é um erro, entre em contato conosco.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
