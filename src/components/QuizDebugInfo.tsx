
import { QuizAnswers } from "@/types/quiz";

interface QuizDebugInfoProps {
  answers: QuizAnswers;
}

const QuizDebugInfo = ({ answers }: QuizDebugInfoProps) => {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-lg max-w-2xl mx-auto">
      <h3 className="font-semibold mb-2">Debug - Respostas atuais:</h3>
      <pre className="text-xs overflow-auto">
        {JSON.stringify(answers, null, 2)}
      </pre>
    </div>
  );
};

export default QuizDebugInfo;
