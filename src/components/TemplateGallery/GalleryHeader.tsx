
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface GalleryHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const GalleryHeader = ({ searchQuery, onSearchChange }: GalleryHeaderProps) => {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Escolha Seu Template Perfeito
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore nossa coleção de 50 templates únicos, cada um com seu próprio estilo e personalidade
          </p>
        </div>

        {/* Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Buscar templates..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryHeader;
