
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";

interface QuizNavigationProps {
  isFirstStep: boolean;
  isLastStep: boolean;
  isSubmitting: boolean;
  isCurrentStepValid: boolean;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

const QuizNavigation = ({
  isFirstStep,
  isLastStep,
  isSubmitting,
  isCurrentStepValid,
  onBack,
  onNext,
  onSubmit
}: QuizNavigationProps) => {
  return (
    <div className="flex justify-between pt-8 max-w-2xl mx-auto">
      <Button
        variant="outline"
        onClick={onBack}
        disabled={isFirstStep || isSubmitting}
        className="px-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Voltar
      </Button>
      
      {isLastStep ? (
        <Button
          onClick={onSubmit}
          disabled={!isCurrentStepValid || isSubmitting}
          className="px-8 bg-gradient-luxury hover:opacity-90 text-white"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Processando...
            </>
          ) : (
            <>
              Finalizar Quiz
              <ArrowRight className="h-4 w-4 ml-2" />
            </>
          )}
        </Button>
      ) : (
        <Button
          onClick={onNext}
          disabled={!isCurrentStepValid}
          className="px-8 bg-gradient-luxury hover:opacity-90 text-white"
        >
          Próximo
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      )}
    </div>
  );
};

export default QuizNavigation;
