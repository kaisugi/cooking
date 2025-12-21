import { useState, useRef } from 'preact/hooks';
import type { Recipe } from '../types/recipe';
import FilterPanel from './FilterPanel';
import RecipeGrid from './RecipeGrid';

interface MainAppProps {
  allIngredients: string[];
  recipes: Recipe[];
}

export default function MainApp({ allIngredients, recipes }: MainAppProps) {
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
  const recipeGridRef = useRef<HTMLDivElement>(null);
  const previousFilterCount = useRef<number>(0);

  const handleFilterChange = (filters: Set<string>) => {
    const isFilterAdded = filters.size > previousFilterCount.current;

    setActiveFilters(filters);
    previousFilterCount.current = filters.size;

    // フィルターを追加した時だけスクロール
    if (isFilterAdded && recipeGridRef.current) {
      const yOffset = -20; // 少し余白を持たせる
      const y = recipeGridRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <FilterPanel
        allIngredients={allIngredients}
        onFilterChange={handleFilterChange}
      />
      <RecipeGrid
        ref={recipeGridRef}
        recipes={recipes}
        activeFilters={activeFilters}
      />
    </>
  );
}
