
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface MultiSelectQuestionProps {
  question: {
    id: string;
    label: string;
    options: string[];
  };
  values: string[];
  onChange: (values: string[]) => void;
}

const MultiSelectQuestion = ({ question, values, onChange }: MultiSelectQuestionProps) => {
  const handleToggle = (option: string) => {
    const newValues = values.includes(option)
      ? values.filter(v => v !== option)
      : [...values, option];
    onChange(newValues);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-brown-800 mb-4">{question.label}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {question.options.map((option) => (
          <div key={option} className="flex items-center space-x-3">
            <Checkbox
              id={`${question.id}-${option}`}
              checked={values.includes(option)}
              onCheckedChange={() => handleToggle(option)}
              className="border-brown-300"
            />
            <Label
              htmlFor={`${question.id}-${option}`}
              className="text-brown-700 cursor-pointer"
            >
              {option}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectQuestion;
