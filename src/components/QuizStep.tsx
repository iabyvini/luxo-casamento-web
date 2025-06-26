
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QuizQuestion } from "@/types/quiz";
import { Loader2 } from "lucide-react";
import MultiSelectQuestion from "./MultiSelectQuestion";

interface QuizStepProps {
  question: QuizQuestion;
  value: string | string[];
  onChange: (value: string | string[]) => void;
}

const QuizStep = ({ question, value, onChange }: QuizStepProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="luxury-card rounded-2xl p-8 space-y-8">
        {question.section && (
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-brown-100 text-brown-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <span>{question.section}</span>
            </div>
          </div>
        )}

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

          {question.type === 'multi_select' && question.options && (
            <MultiSelectQuestion
              question={{
                id: question.id,
                label: question.label,
                options: question.options
              }}
              values={Array.isArray(value) ? value : []}
              onChange={onChange}
            />
          )}

          {question.type === 'text' && (
            <div>
              <Label htmlFor={question.id} className="text-brown-800 text-lg">
                {question.placeholder}
              </Label>
              <Input
                id={question.id}
                type="text"
                value={typeof value === 'string' ? value : ''}
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
                value={typeof value === 'string' ? value : ''}
                onChange={(e) => onChange(e.target.value)}
                className="mt-2 text-lg p-4 border-brown-300 focus:border-primary"
                required={question.required}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizStep;
