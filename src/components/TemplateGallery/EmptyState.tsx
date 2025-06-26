
import { Search } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="text-center py-12">
      <div className="text-gray-500 mb-4">
        <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
        <p className="text-lg font-medium">Nenhum template encontrado</p>
        <p className="text-sm">Tente ajustar sua busca ou filtros</p>
      </div>
    </div>
  );
};

export default EmptyState;
