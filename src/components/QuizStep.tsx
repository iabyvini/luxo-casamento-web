
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QuizQuestion } from "@/types/quiz";
import { Calendar } from "lucide-react";

interface QuizStepProps {
  question: QuizQuestion;
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
  isFirst: boolean;
  isLast: boolean;
  isValid: boolean;
}

const QuizStep = ({ 
  question, 
  value, 
  onChange, 
  onNext, 
  onBack, 
  isFirst, 
  isLast, 
  isValid 
}: QuizStepProps) => {
  const handleOptionClick = (option: string) => {
    onChange(option);
  };

  const renderInput = () => {
    switch (question.type) {
      case 'multiple_choice':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {question.options?.map((option) => (
              <Button
                key={option}
                variant={value === option ? "default" : "outline"}
                className={`h-auto p-4 text-left justify-start ${
                  value === option 
                    ? "bg-gradient-luxury text-white" 
                    : "border-brown-300 text-brown-700 hover:bg-brown-50"
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        );
      
      case 'date':
        return (
          <div className="relative">
            <Input
              type="date"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="pl-10 border-brown-300 focus:border-primary"
            />
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-brown-500" />
          </div>
        );
      
      case 'text':
        return (
          <Input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={question.placeholder}
            className="border-brown-300 focus:border-primary"
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="luxury-card rounded-2xl p-8 mb-8">
        <Label className="text-2xl font-bold text-brown-800 mb-6 block">
          {question.label}
        </Label>
        
        <div className="mb-8">
          {renderInput()}
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={onBack}
            disabled={isFirst}
            className="border-brown-300 text-brown-700 hover:bg-brown-50"
          >
            Voltar
          </Button>
          
          <Button
            onClick={onNext}
            disabled={!isValid}
            className="bg-gradient-luxury hover:opacity-90 text-white"
          >
            {isLast ? 'Gerar Meu Site' : 'Próxima'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizStep;
