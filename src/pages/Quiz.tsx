
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { QuizAnswers } from "@/types/quiz";
import { QUIZ_QUESTIONS } from "@/data/quizQuestions";
import QuizStep from "@/components/QuizStep";
import QuizHeader from "@/components/QuizHeader";

const Quiz = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({} as QuizAnswers);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
  }, [user, navigate]);

  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const isLastStep = currentStep === QUIZ_QUESTIONS.length - 1;
  const isFirstStep = currentStep === 0;

  const handleAnswerChange = (questionId: string, value: string | string[]) => {
    console.log('📝 Resposta alterada:', questionId, value);
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const isCurrentStepValid = () => {
    const question = currentQuestion;
    const answer = answers[question.id as keyof QuizAnswers];
    
    if (question.required) {
      if (question.type === 'multi_select') {
        return Array.isArray(answer) && answer.length > 0;
      }
      return answer !== undefined && answer !== null && answer !== '';
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!user) {
      toast({
        title: "Erro",
        description: "Usuário não autenticado",
        variant: "destructive"
      });
      return;
    }

    if (!isCurrentStepValid()) {
      toast({
        title: "Resposta obrigatória",
        description: "Por favor, responda a pergunta atual antes de continuar.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('🚀 Finalizando quiz com respostas:', answers);

      // Navegar para seleção de template com as respostas do quiz
      navigate('/template-selection', { 
        state: { 
          quizAnswers: answers 
        } 
      });

      toast({
        title: "Quiz finalizado!",
        description: "Agora vamos escolher o template perfeito para vocês.",
      });

    } catch (error: any) {
      console.error('❌ Erro ao finalizar quiz:', error);
      toast({
        title: "Erro ao processar quiz",
        description: error.message || "Não foi possível processar suas respostas. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brown-50 to-gold-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-brown-600 mb-4">Redirecionando para login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brown-50 to-gold-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header with progress */}
        <QuizHeader
          currentStep={currentStep + 1}
          totalSteps={QUIZ_QUESTIONS.length}
          onBack={() => navigate('/')}
        />

        <div className="max-w-4xl mx-auto">
          {/* Question */}
          <QuizStep
            question={currentQuestion}
            value={answers[currentQuestion.id as keyof QuizAnswers] || (currentQuestion.type === 'multi_select' ? [] : '')}
            onChange={(value) => handleAnswerChange(currentQuestion.id, value)}
          />

          {/* Navigation */}
          <div className="flex justify-between pt-8 max-w-2xl mx-auto">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={isFirstStep || isSubmitting}
              className="px-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            
            {isLastStep ? (
              <Button
                onClick={handleSubmit}
                disabled={!isCurrentStepValid() || isSubmitting}
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
                onClick={handleNext}
                disabled={!isCurrentStepValid()}
                className="px-8 bg-gradient-luxury hover:opacity-90 text-white"
              >
                Próximo
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>

          {/* Debug info (only in development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-8 p-4 bg-gray-100 rounded-lg max-w-2xl mx-auto">
              <h3 className="font-semibold mb-2">Debug - Respostas atuais:</h3>
              <pre className="text-xs overflow-auto">
                {JSON.stringify(answers, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
