
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface EmptyStateProps {
  onCreateSite: () => void;
}

const EmptyState = ({ onCreateSite }: EmptyStateProps) => {
  return (
    <div className="text-center py-12">
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Nenhum site criado ainda
        </h2>
        <p className="text-gray-600 mb-6">
          Escolha entre 50 templates únicos e crie seu site de casamento personalizado!
        </p>
        <Button onClick={onCreateSite} size="lg" className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600">
          <Plus className="h-5 w-5" />
          Explorar Templates
        </Button>
      </div>
    </div>
  );
};

export default EmptyState;
