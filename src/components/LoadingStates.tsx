
import { Loader2, Heart, Sparkles } from "lucide-react";

interface LoadingSpinnerProps {
  message?: string;
  type?: 'default' | 'premium' | 'romantic';
}

export const LoadingSpinner = ({ message = "Carregando...", type = 'default' }: LoadingSpinnerProps) => {
  const getStyle = () => {
    switch (type) {
      case 'premium':
        return "bg-gradient-to-br from-amber-50 to-gold-50";
      case 'romantic':
        return "bg-gradient-to-br from-rose-50 to-pink-50";
      default:
        return "bg-white";
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'premium':
        return <Sparkles className="h-8 w-8 text-amber-600 animate-spin" fill="currentColor" />;
      case 'romantic':
        return <Heart className="h-8 w-8 text-rose-500 animate-pulse" fill="currentColor" />;
      default:
        return <Loader2 className="h-8 w-8 text-primary animate-spin" />;
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${getStyle()}`}>
      <div className="text-center luxury-card p-12 bg-white/90 backdrop-blur-sm">
        <div className="flex justify-center mb-6">
          {getIcon()}
        </div>
        <h2 className="text-2xl font-playfair font-bold text-brown-800 mb-4">
          {message}
        </h2>
        {type === 'premium' && (
          <p className="text-brown-600 animate-fade-in">
            Nossa IA está criando algo especial para vocês...
          </p>
        )}
        {type === 'romantic' && (
          <p className="text-brown-600 animate-fade-in">
            Preparando seu site dos sonhos com muito carinho...
          </p>
        )}
      </div>
    </div>
  );
};

export const InlineLoader = ({ size = 'sm' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClass = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6', 
    lg: 'h-8 w-8'
  }[size];

  return (
    <div className="flex items-center justify-center">
      <Loader2 className={`${sizeClass} animate-spin text-primary`} />
    </div>
  );
};
