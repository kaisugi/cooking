import { useState } from 'preact/hooks';

interface FilterPanelProps {
  allIngredients: string[];
  onFilterChange: (filters: Set<string>) => void;
}

export default function FilterPanel({ allIngredients, onFilterChange }: FilterPanelProps) {
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

  const toggleFilter = (ingredient: string) => {
    const newFilters = new Set(activeFilters);
    if (newFilters.has(ingredient)) {
      newFilters.delete(ingredient);
    } else {
      newFilters.add(ingredient);
    }
    setActiveFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleKeyDown = (event: KeyboardEvent, ingredient: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFilter(ingredient);
    }
  };

  return (
    <div class="bg-white rounded-xl shadow-md p-6 mb-6 animate-fade-in-up" style="animation-delay: 0.1s">
      <label class="block text-sm font-medium text-gray-500 mb-3">
        食材でフィルター:
      </label>
      <div class="flex flex-wrap gap-2">
        {allIngredients.map((ingredient) => (
          <button
            key={ingredient}
            onClick={() => toggleFilter(ingredient)}
            onKeyDown={(e) => handleKeyDown(e, ingredient)}
            tabIndex={0}
            class={`
              min-h-[44px] px-3 py-1.5 rounded-full border text-sm
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-blue-400
              ${activeFilters.has(ingredient)
                ? 'bg-green-100 border-green-400 text-green-800 font-medium'
                : 'bg-blue-50 border-blue-300 text-blue-700 hover:-translate-y-0.5'
              }
            `}
          >
            {ingredient}
          </button>
        ))}
      </div>
    </div>
  );
}
