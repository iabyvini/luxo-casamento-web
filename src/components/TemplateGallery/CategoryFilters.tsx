
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter } from "lucide-react";

interface Category {
  id: string;
  name: string;
  count: number;
}

interface CategoryFiltersProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilters = ({ categories, selectedCategory, onCategoryChange }: CategoryFiltersProps) => {
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category.id)}
              className="flex items-center gap-2"
            >
              <Filter className="h-3 w-3" />
              {category.name}
              <Badge variant="secondary" className="ml-1">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;
