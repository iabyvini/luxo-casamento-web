
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X, Filter } from "lucide-react";

interface TemplateSearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalResults: number;
  showFilters?: boolean;
  onToggleFilters?: () => void;
}

const TemplateSearchBar = ({ 
  searchQuery, 
  onSearchChange, 
  totalResults,
  showFilters = false,
  onToggleFilters
}: TemplateSearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const clearSearch = () => {
    onSearchChange("");
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors ${
            isFocused ? 'text-blue-500' : 'text-gray-400'
          }`} />
          <Input
            placeholder="Buscar por nome, estilo, cores ou características..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`pl-10 pr-10 h-12 text-base transition-all ${
              isFocused ? 'ring-2 ring-blue-500 border-blue-500' : ''
            }`}
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-gray-100"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Results Counter */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="font-medium text-blue-600">{totalResults}</span>
            <span>template{totalResults !== 1 ? 's' : ''} encontrado{totalResults !== 1 ? 's' : ''}</span>
          </div>

          {/* Filter Toggle */}
          {onToggleFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={onToggleFilters}
              className={`flex items-center gap-2 ${showFilters ? 'bg-blue-50 border-blue-200' : ''}`}
            >
              <Filter className="h-4 w-4" />
              Filtros
            </Button>
          )}
        </div>
      </div>

      {/* Search Suggestions */}
      {searchQuery.length > 0 && searchQuery.length < 3 && (
        <div className="mt-2 text-xs text-gray-500">
          Digite pelo menos 3 caracteres para buscar
        </div>
      )}

      {/* Popular Searches */}
      {!searchQuery && (
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-xs text-gray-500">Populares:</span>
          {[
            'Romântico', 'Minimalista', 'Praia', 'Rústico', 
            'Dourado', 'Floral', 'Moderno'
          ].map((term) => (
            <button
              key={term}
              onClick={() => onSearchChange(term)}
              className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
            >
              {term}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TemplateSearchBar;
