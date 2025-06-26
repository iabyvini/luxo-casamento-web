
import { useState } from "react";
import { QuizAnswers, QuizQuestion } from "@/types/quiz";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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

  const generateSlug = (coupleNames: string, weddingDate: string) => {
    const names = coupleNames.toLowerCase()
      .replace(/[^a-z0-9\s&-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/&/g, 'e');
    
    const year = new Date(weddingDate).getFullYear();
    const timestamp = Date.now().toString().slice(-4);
    
    return `${names}-${year}-${timestamp}`;
  };

  const getTemplateFromStyle = (style: string) => {
    const templateMap: Record<string, string> = {
      'Clássico': 'Classic Elegance',
      'Moderno': 'Modern Minimalist',
      'Romântico': 'Romantic Garden',
      'Minimalista': 'Clean Modern',
      'Vintage': 'Vintage Romance',
      'Boho': 'Boho Chic'
    };
    return templateMap[style] || 'Classic Elegance';
  };

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
      const slug = generateSlug(answers.nomes, answers.data_casamento);
      const templateName = getTemplateFromStyle(answers.estilo);
      
      const welcomeMessage = `Bem-vindos ao nosso site de casamento! Estamos muito felizes em compartilhar este momento especial com vocês. Confirme sua presença e deixe seu carinho para nós!`;

      console.log('📤 Enviando quiz expandido:', answers);

      const { data, error } = await supabase
        .from('wedding_sites')
        .insert({
          user_id: user.id,
          slug,
          couple_names: answers.nomes,
          wedding_date: answers.data_casamento,
          template_name: templateName,
          quiz_answers: answers as any,
          ai_welcome_message: welcomeMessage,
          custom_content: {
            hero: {
              title: answers.nomes,
              subtitle: `${new Date(answers.data_casamento).toLocaleDateString('pt-BR')}`,
              message: welcomeMessage
            }
          },
          is_published: false
        })
        .select()
        .single();

      if (error) throw error;

      console.log('✅ Quiz expandido salvo no Supabase:', data);

      toast({
        title: "Site criado com sucesso!",
        description: "Seu site de casamento foi gerado. Agora você pode editá-lo e publicá-lo.",
      });

      navigate(`/editor/${data.id}`);

    } catch (error: any) {
      console.error('❌ Erro ao salvar quiz expandido:', error);
      toast({
        title: "Erro ao criar site",
        description: error.message || "Não foi possível criar seu site. Tente novamente.",
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
