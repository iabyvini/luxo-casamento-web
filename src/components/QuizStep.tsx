
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QuizQuestion } from "@/types/quiz";
import { Loader2 } from "lucide-react";

interface QuizStepProps {
  question: QuizQuestion;
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
  isFirst: boolean;
  isLast: boolean;
  isValid: boolean;
  isSubmitting?: boolean;
}

const QuizStep = ({ 
  question, 
  value, 
  onChange, 
  onNext, 
  onBack, 
  isFirst, 
  isLast, 
  isValid,
  isSubmitting = false
}: QuizStepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid && !isSubmitting) {
      onNext();
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="luxury-card rounded-2xl p-8 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold gradient-text">
            {question.label}
          </h2>
        </div>

        <div className="space-y-4">
          {question.type === 'multiple_choice' && question.options && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {question.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => onChange(option)}
                  className={`p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                    value === option
                      ? 'border-primary bg-primary/10 shadow-md'
                      : 'border-brown-200 hover:border-brown-300'
                  }`}
                >
                  <span className="font-medium text-brown-800">{option}</span>
                </button>
              ))}
            </div>
          )}

          {question.type === 'text' && (
            <div>
              <Label htmlFor={question.id} className="text-brown-800 text-lg">
                {question.placeholder}
              </Label>
              <Input
                id={question.id}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={question.placeholder}
                className="mt-2 text-lg p-4 border-brown-300 focus:border-primary"
                required={question.required}
              />
            </div>
          )}

          {question.type === 'date' && (
            <div>
              <Label htmlFor={question.id} className="text-brown-800 text-lg">
                Data do Casamento
              </Label>
              <Input
                id={question.id}
                type="date"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="mt-2 text-lg p-4 border-brown-300 focus:border-primary"
                required={question.required}
              />
            </div>
          )}
        </div>

        <div className="flex justify-between pt-6">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            disabled={isFirst || isSubmitting}
            className="px-8"
          >
            Voltar
          </Button>
          
          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="px-8 bg-gradient-luxury hover:opacity-90 text-white"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Criando Site...
              </>
            ) : (
              isLast ? 'Criar Site' : 'Próximo'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QuizStep;
