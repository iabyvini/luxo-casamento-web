
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { QuizAnswers } from "@/types/quiz";
import { QUIZ_QUESTIONS } from "@/data/quizQuestions";
import QuizHeader from "@/components/QuizHeader";
import QuizStep from "@/components/QuizStep";

const Quiz = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [answers, setAnswers] = useState<QuizAnswers>({
    estilo: '',
    local: '',
    tom: '',
    cores: '',
    data_casamento: '',
    nomes: '',
    visual_style: '',
    typography: '',
    color_palette: [],
    animations: '',
    photos: '',
    emotion: ''
  });

  const handleAnswerChange = (questionId: string, value: string | string[]) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
    console.log(`📝 Resposta atualizada - ${questionId}:`, value);
  };

  const handleNext = () => {
    const currentQuestion = QUIZ_QUESTIONS[currentStep];
    const currentAnswer = answers[currentQuestion.id as keyof QuizAnswers];
    
    if (currentQuestion.required && (!currentAnswer || 
        (Array.isArray(currentAnswer) && currentAnswer.length === 0) ||
        (typeof currentAnswer === 'string' && currentAnswer.trim() === ''))) {
      toast({
        title: "Resposta obrigatória",
        description: "Por favor, responda esta pergunta antes de continuar.",
        variant: "destructive",
      });
      return;
    }

    if (currentStep === QUIZ_QUESTIONS.length - 1) {
      handleSubmit();
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!user) {
      toast({
        title: "Erro de autenticação",
        description: "Usuário não encontrado. Faça login novamente.",
        variant: "destructive",
      });
      navigate('/auth');
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('📤 Enviando quiz expandido:', answers);

      toast({
        title: "Quiz concluído!",
        description: "Agora vamos encontrar os templates perfeitos para vocês.",
      });

      navigate('/template-selection', { 
        state: { quizAnswers: answers }
      });

    } catch (error: any) {
      console.error('❌ Erro ao processar quiz:', error);
      toast({
        title: "Erro ao processar quiz",
        description: error.message || "Não foi possível processar suas respostas. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-brown-50 to-gold-50">
      <div className="container mx-auto px-4 py-8">
        <QuizHeader 
          progress={progress}
          currentStep={currentStep + 1}
          totalSteps={QUIZ_QUESTIONS.length}
        />

        <div className="max-w-2xl mx-auto">
          <QuizStep
            question={currentQuestion}
            value={answers[currentQuestion.id as keyof QuizAnswers]}
            onChange={(value) => handleAnswerChange(currentQuestion.id, value)}
          />

          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="text-brown-600 border-brown-300 hover:bg-brown-50"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Anterior
            </Button>

            <Button
              onClick={handleNext}
              disabled={isSubmitting}
              className="bg-gradient-luxury hover:opacity-90 text-white"
            >
              {isSubmitting ? (
                "Processando..."
              ) : currentStep === QUIZ_QUESTIONS.length - 1 ? (
                "Finalizar"
              ) : (
                <>
                  Próximo
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
