
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import QuizStep from "@/components/QuizStep";
import { QuizQuestion, QuizAnswers } from "@/types/quiz";
import { Button } from "@/components/ui/button";

const Quiz = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    estilo: '',
    local: '',
    tom: '',
    cores: '',
    data_casamento: '',
    nomes: ''
  });

  const questions: QuizQuestion[] = [
    {
      id: 'estilo',
      label: 'Qual o estilo do seu casamento?',
      type: 'multiple_choice',
      options: ['Clássico', 'Moderno', 'Romântico', 'Minimalista', 'Vintage', 'Boho'],
      required: true
    },
    {
      id: 'local',
      label: 'Onde será o evento?',
      type: 'multiple_choice',
      options: ['Igreja', 'Salão de Festas', 'Fazenda', 'Praia', 'Outro'],
      required: true
    },
    {
      id: 'tom',
      label: 'Qual é o tom do site que vocês preferem?',
      type: 'multiple_choice',
      options: ['Elegante e formal', 'Divertido e descontraído', 'Emotivo e romântico'],
      required: true
    },
    {
      id: 'cores',
      label: 'Qual a paleta de cores preferida?',
      type: 'multiple_choice',
      options: ['Dourado', 'Rosa claro', 'Azul', 'Verde', 'Neutros', 'Não sei'],
      required: true
    },
    {
      id: 'data_casamento',
      label: 'Já tem data marcada?',
      type: 'date',
      required: true
    },
    {
      id: 'nomes',
      label: 'Nome do casal',
      type: 'text',
      placeholder: 'Ex: Ana & João',
      required: true
    }
  ];

  const currentQuestion = questions[currentStep];
  const currentValue = answers[currentQuestion.id as keyof QuizAnswers];
  const isValid = currentQuestion.required ? !!currentValue : true;

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submeter quiz e ir para preview
      navigate('/preview', { state: { quizAnswers: answers } });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-brown-50 to-gold-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-brown-600 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Início
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
            {currentStep + 1} de {questions.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-brown-200 rounded-full h-2 mb-12">
          <div 
            className="bg-gradient-luxury h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question */}
        <QuizStep
          question={currentQuestion}
          value={currentValue}
          onChange={handleAnswer}
          onNext={handleNext}
          onBack={handleBack}
          isFirst={currentStep === 0}
          isLast={currentStep === questions.length - 1}
          isValid={isValid}
        />
      </div>
    </div>
  );
};

export default Quiz;
