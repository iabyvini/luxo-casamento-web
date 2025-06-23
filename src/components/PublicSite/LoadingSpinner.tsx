
interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner = ({ message = "Carregando..." }: LoadingSpinnerProps) => {
  console.log('⏳ LoadingSpinner renderizado com mensagem:', message);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-gold-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600 mx-auto mb-4"></div>
        <p className="text-lg text-gray-600">{message}</p>
        <p className="text-sm text-gray-500 mt-2">
          Se demorar muito, verifique sua conexão
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
