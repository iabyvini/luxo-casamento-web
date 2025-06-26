
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface DashboardHeaderProps {
  userEmail?: string;
  onCreateSite: () => void;
  onSignOut: () => void;
}

const DashboardHeader = ({ userEmail, onCreateSite, onSignOut }: DashboardHeaderProps) => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard - Casamento Luxo</h1>
          <p className="text-gray-600">Bem-vindo, {userEmail}</p>
        </div>
        <div className="flex items-center gap-4">
          <Button onClick={onCreateSite} className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600">
            <Plus className="h-4 w-4" />
            Criar Novo Site
          </Button>
          <Button variant="outline" onClick={onSignOut}>
            Sair
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
