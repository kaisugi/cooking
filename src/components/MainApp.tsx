import { useState } from 'preact/hooks';
import type { Recipe } from '../types/recipe';
import FilterPanel from './FilterPanel';
import RecipeGrid from './RecipeGrid';

interface MainAppProps {
  allIngredients: string[];
  recipes: Recipe[];
}

export default function MainApp({ allIngredients, recipes }: MainAppProps) {
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

  const handleFilterChange = (filters: Set<string>) => {
    setActiveFilters(filters);
  };

  return (
    <>
      <FilterPanel
        allIngredients={allIngredients}
        onFilterChange={handleFilterChange}
      />
      <RecipeGrid
        recipes={recipes}
        activeFilters={activeFilters}
      />
    </>
  );
}
