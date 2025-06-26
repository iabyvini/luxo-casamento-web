
import QuizStep from "@/components/QuizStep";
import QuizHeader from "@/components/QuizHeader";
import { QuizAnswers } from "@/types/quiz";
import { useQuiz } from "@/hooks/useQuiz";
import { quizQuestions } from "@/data/quizQuestions";

const Quiz = () => {
  const {
    currentStep,
    setCurrentStep,
    isSubmitting,
    answers,
    setAnswers,
    submitQuiz
  } = useQuiz();

  const currentQuestion = quizQuestions[currentStep];
  const currentValue = answers[currentQuestion.id as keyof QuizAnswers];
  
  const isValid = currentQuestion.required ? 
    (Array.isArray(currentValue) ? currentValue.length > 0 : !!currentValue) : 
    true;

  const handleAnswer = (value: string | string[]) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const handleNext = async () => {
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      await submitQuiz();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep + 1) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-brown-50 to-gold-50">
      <QuizHeader 
        currentStep={currentStep}
        totalSteps={quizQuestions.length}
        progress={progress}
      />

      <QuizStep
        question={currentQuestion}
        value={currentValue}
        onChange={handleAnswer}
        onNext={handleNext}
        onBack={handleBack}
        isFirst={currentStep === 0}
        isLast={currentStep === quizQuestions.length - 1}
        isValid={isValid}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default Quiz;
