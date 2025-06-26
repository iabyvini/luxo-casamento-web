
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface QuizHeaderProps {
  currentStep: number;
  totalSteps: number;
  progress: number;
}

const QuizHeader = ({ currentStep, totalSteps, progress }: QuizHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}
          className="text-brown-600 hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao Dashboard
        </Button>
        
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-brown-200 rounded-full px-4 py-2">
            <Sparkles className="h-4 w-4 text-accent" fill="currentColor" />
            <span className="text-sm font-medium text-brown-700">
              Quiz Personalizado
            </span>
          </div>
        </div>
        
        <div className="text-sm text-brown-600">
          {currentStep + 1} de {totalSteps}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-brown-200 rounded-full h-2 mb-12">
        <div 
          className="bg-gradient-luxury h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default QuizHeader;
