
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useQuizLogic } from "@/hooks/useQuizLogic";
import { QUIZ_QUESTIONS } from "@/data/quizQuestions";
import QuizStep from "@/components/QuizStep";
import QuizHeader from "@/components/QuizHeader";
import QuizNavigation from "@/components/QuizNavigation";
import QuizDebugInfo from "@/components/QuizDebugInfo";

const Quiz = () => {
  const navigate = useNavigate();
  const {
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
  } = useQuizLogic();

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
        <QuizHeader
          currentStep={currentStep + 1}
          totalSteps={QUIZ_QUESTIONS.length}
          progress={progress}
        />

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="px-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Início
            </Button>
          </div>

          <QuizStep
            question={currentQuestion}
            value={getCurrentAnswer()}
            onChange={(value) => handleAnswerChange(currentQuestion.id, value)}
          />

          <QuizNavigation
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            isSubmitting={isSubmitting}
            isCurrentStepValid={isCurrentStepValid()}
            onBack={handleBack}
            onNext={handleNext}
            onSubmit={handleSubmit}
          />

          <QuizDebugInfo answers={answers} />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
