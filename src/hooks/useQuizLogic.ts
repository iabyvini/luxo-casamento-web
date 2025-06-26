
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { QuizAnswers } from "@/types/quiz";
import { QUIZ_QUESTIONS } from "@/data/quizQuestions";

export const useQuizLogic = () => {
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
  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

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

  const getCurrentAnswer = () => {
    const answer = answers[currentQuestion.id as keyof QuizAnswers];
    
    if (currentQuestion.type === 'multi_select') {
      return Array.isArray(answer) ? answer : [];
    }
    
    return typeof answer === 'string' ? answer : '';
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

  return {
    currentStep,
    answers,
    isSubmitting,
    currentQuestion,
    isLastStep,
    isFirstStep,
    progress,
    handleAnswerChange,
    handleNext,
    handleBack,
    isCurrentStepValid,
    getCurrentAnswer,
    handleSubmit,
    user
  };
};
