import { useState, useEffect } from 'preact/hooks';
import type { Recipe } from '../types/recipe';
import { shuffleArray } from '../utils/shuffle';

interface RecipeGridProps {
  recipes: Recipe[];
  activeFilters: Set<string>;
}

export default function RecipeGrid({ recipes, activeFilters }: RecipeGridProps) {
  const [displayRecipes, setDisplayRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    let filtered = recipes;

    // Apply filters (AND logic)
    if (activeFilters.size > 0) {
      filtered = recipes.filter(recipe =>
        Array.from(activeFilters).every(filter =>
          recipe.ingredients.includes(filter)
        )
      );
    }

    // Shuffle and update
    setDisplayRecipes(shuffleArray(filtered));
  }, [recipes, activeFilters]);

  if (displayRecipes.length === 0 && activeFilters.size > 0) {
    return (
      <div class="text-center py-12 text-text-muted">
        <p class="text-lg">該当する料理が見つかりません</p>
        <p class="text-sm mt-2">フィルターの条件を変更してみてください</p>
      </div>
    );
  }

  return (
    <div class="space-y-3 md:space-y-4">
      {displayRecipes.map((recipe, index) => (
        <div
          key={`${recipe.name}-${index}`}
          class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-4 md:p-6 animate-fade-in-up"
          style={`animation-delay: ${index * 0.05}s`}
        >
          <div class="flex items-center flex-wrap gap-2 mb-3 md:mb-4">
            {recipe.url ? (
              <a
                href={recipe.url}
                target="_blank"
                rel="noopener noreferrer"
                class="recipe-link text-lg md:text-xl font-bold hover:text-accent-blue transition-colors"
              >
                {recipe.name}
              </a>
            ) : (
              <span class="text-lg md:text-xl font-bold text-text-dark">
                {recipe.name}
              </span>
            )}
            {recipe.category && (
              <span class="inline-block px-1.5 py-0.5 md:px-2 text-[10px] md:text-xs border border-gray-300 rounded text-gray-500 whitespace-nowrap">
                {recipe.category}
              </span>
            )}
          </div>

          <div class="flex flex-wrap gap-2">
            {recipe.ingredients.map((ingredient) => (
              <span
                key={ingredient}
                class="inline-block px-2 py-1 text-sm bg-green-50 text-green-800 rounded"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
