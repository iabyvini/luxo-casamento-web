
import { useState } from "react";
import { QuizAnswers, QuizQuestion } from "@/types/quiz";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export const useQuiz = () => {
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

  const submitQuiz = async () => {
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

      // Redirecionar para seleção de templates com os dados do quiz
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

  return {
    currentStep,
    setCurrentStep,
    isSubmitting,
    answers,
    setAnswers,
    submitQuiz
  };
};
