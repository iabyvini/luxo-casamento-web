
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import QuizStep from "@/components/QuizStep";
import { QuizQuestion, QuizAnswers } from "@/types/quiz";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

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

  const handleNext = async () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      await submitQuiz();
    }
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
      
      // Gerar mensagem de boas-vindas simples
      const welcomeMessage = `Bem-vindos ao nosso site de casamento! Estamos muito felizes em compartilhar este momento especial com vocês. Confirme sua presença e deixe seu carinho para nós!`;

      const { data, error } = await supabase
        .from('wedding_sites')
        .insert({
          user_id: user.id,
          slug,
          couple_names: answers.nomes,
          wedding_date: answers.data_casamento,
          template_name: templateName,
          quiz_answers: answers,
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

      toast({
        title: "Site criado com sucesso!",
        description: "Seu site de casamento foi gerado. Agora você pode editá-lo e publicá-lo.",
      });

      // Redirecionar para o editor
      navigate(`/editor/${data.id}`);

    } catch (error: any) {
      console.error('Erro ao criar site:', error);
      toast({
        title: "Erro ao criar site",
        description: error.message || "Não foi possível criar seu site. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
            onClick={() => navigate('/dashboard')}
            className="text-brown-600 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Dashboard
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
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
};

export default Quiz;
