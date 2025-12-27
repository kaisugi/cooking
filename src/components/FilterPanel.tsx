import { useState } from 'preact/hooks';

interface FilterPanelProps {
    allIngredients: string[];
    onFilterChange: (filters: Set<string>) => void;
}

interface StickyFilterBarProps {
    activeFilters: Set<string>;
    onRemove: (ingredient: string) => void;
    onClearAll: () => void;
}

interface CollapsibleFilterPanelProps {
    allIngredients: string[];
    activeFilters: Set<string>;
    isExpanded: boolean;
    onToggle: () => void;
    onToggleFilter: (ingredient: string) => void;
}

// Sticky Selected Filters Bar Component
function StickyFilterBar({ activeFilters, onRemove, onClearAll }: StickyFilterBarProps) {
    const handleKeyDown = (event: KeyboardEvent, ingredient: string) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onRemove(ingredient);
        }
    };

    return (
        <div class="sticky top-0 z-30 bg-white/95 backdrop-blur-sm shadow-md rounded-xl p-3 mb-3">
            <div class="flex items-center gap-2 flex-wrap">
                <span class="text-xs font-medium text-gray-600 whitespace-nowrap">選択中:</span>
                <div class="flex flex-wrap gap-2 flex-1">
                    {Array.from(activeFilters).map((ingredient) => (
                        <button
                            key={ingredient}
                            onClick={() => onRemove(ingredient)}
                            onKeyDown={(e) => handleKeyDown(e, ingredient)}
                            tabIndex={0}
                            class="min-h-[44px] px-3 py-1.5 rounded-full bg-green-100 border border-green-400 text-green-800 font-medium text-sm flex items-center gap-1.5 transition-all duration-200 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                            aria-label={`${ingredient}を削除`}
                        >
                            {ingredient}
                            <span class="text-green-600 font-bold" aria-hidden="true">
                                ×
                            </span>
                        </button>
                    ))}
                </div>
                <button
                    onClick={onClearAll}
                    tabIndex={0}
                    class="min-h-[44px] px-4 py-1.5 rounded-full bg-gray-100 border border-gray-300 text-gray-700 text-sm font-medium transition-all duration-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 whitespace-nowrap"
                    aria-label="すべてのフィルターをクリア"
                >
                    すべてクリア
                </button>
            </div>
        </div>
    );
}

// Collapsible Filter Selection Panel Component
function CollapsibleFilterPanel({
    allIngredients,
    activeFilters,
    isExpanded,
    onToggle,
    onToggleFilter,
}: CollapsibleFilterPanelProps) {
    const handleKeyDown = (event: KeyboardEvent, ingredient: string) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onToggleFilter(ingredient);
        }
    };

    return (
        <div class="bg-white rounded-xl shadow-md mb-6 overflow-hidden">
            {/* Collapsible Header */}
            <button
                onClick={onToggle}
                class="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400"
                aria-expanded={isExpanded}
                aria-controls="filter-panel-content"
                aria-label="食材フィルターパネルを開閉"
            >
                <span class="text-sm font-medium text-gray-700">食材でフィルター</span>
                <svg
                    class={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {/* Collapsible Content */}
            <div
                id="filter-panel-content"
                class={`transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
                style="overflow: hidden;"
                aria-hidden={!isExpanded}
            >
                <div class="px-6 pt-3 pb-6">
                    <div class="flex flex-wrap gap-2">
                        {allIngredients.map((ingredient) => (
                            <button
                                key={ingredient}
                                onClick={() => onToggleFilter(ingredient)}
                                onKeyDown={(e) => handleKeyDown(e, ingredient)}
                                tabIndex={isExpanded ? 0 : -1}
                                class={`
                  min-h-[44px] px-3 py-1.5 rounded-full border text-sm
                  transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-blue-400
                  ${
                      activeFilters.has(ingredient)
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
            </div>
        </div>
    );
}

// Main FilterPanel Component
export default function FilterPanel({ allIngredients, onFilterChange }: FilterPanelProps) {
    const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
    const [isPanelExpanded, setIsPanelExpanded] = useState<boolean>(true);

    const toggleFilter = (ingredient: string) => {
        const newFilters = new Set(activeFilters);
        const isAdding = !newFilters.has(ingredient);

        if (newFilters.has(ingredient)) {
            newFilters.delete(ingredient);
        } else {
            newFilters.add(ingredient);
        }

        setActiveFilters(newFilters);
        onFilterChange(newFilters);

        // Auto-collapse when first filter is added
        if (isAdding && newFilters.size === 1) {
            setIsPanelExpanded(false);
        }
    };

    const removeFilter = (ingredient: string) => {
        const newFilters = new Set(activeFilters);
        newFilters.delete(ingredient);
        setActiveFilters(newFilters);
        onFilterChange(newFilters);

        // Auto-expand when last filter is removed
        if (newFilters.size === 0) {
            setIsPanelExpanded(true);
        }
    };

    const clearAllFilters = () => {
        const newFilters = new Set<string>();
        setActiveFilters(newFilters);
        onFilterChange(newFilters);

        // Auto-expand when all filters are cleared
        setIsPanelExpanded(true);
    };

    const togglePanel = () => {
        setIsPanelExpanded(!isPanelExpanded);
    };

    return (
        <>
            {/* Sticky Selected Filters Bar */}
            {activeFilters.size > 0 && (
                <StickyFilterBar
                    activeFilters={activeFilters}
                    onRemove={removeFilter}
                    onClearAll={clearAllFilters}
                />
            )}

            {/* Collapsible Filter Selection Panel */}
            <CollapsibleFilterPanel
                allIngredients={allIngredients}
                activeFilters={activeFilters}
                isExpanded={isPanelExpanded}
                onToggle={togglePanel}
                onToggleFilter={toggleFilter}
            />
        </>
    );
}
