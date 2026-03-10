import { cn } from '@web-templates/utils';
import { CATEGORIES } from '@web-templates/contracts';
import type { ComponentCategory, UIProvider } from '@web-templates/contracts';

interface FilterBarProps {
  selectedCategory: ComponentCategory | 'all';
  onCategoryChange: (category: ComponentCategory | 'all') => void;
  selectedProvider: UIProvider | 'all';
  onProviderChange: (provider: UIProvider | 'all') => void;
}

export function FilterBar({
  selectedCategory,
  onCategoryChange,
  selectedProvider,
  onProviderChange,
}: FilterBarProps) {
  const categoryFilters: { id: ComponentCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All' },
    ...CATEGORIES.map((c) => ({ id: c.id, label: c.label })),
  ];

  const providerFilters: { id: UIProvider | 'all'; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'radix', label: 'Radix' },
    { id: 'mui', label: 'MUI' },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex flex-wrap gap-1.5">
        {categoryFilters.map((f) => (
          <button
            key={f.id}
            onClick={() => onCategoryChange(f.id)}
            className={cn(
              'px-3 py-1.5 text-sm rounded-lg font-medium transition-colors',
              selectedCategory === f.id
                ? 'bg-primary text-white'
                : 'bg-white/5 text-muted hover:text-foreground hover:bg-white/8'
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="flex gap-1.5 sm:ml-auto">
        {providerFilters.map((f) => (
          <button
            key={f.id}
            onClick={() => onProviderChange(f.id)}
            className={cn(
              'px-3 py-1.5 text-sm rounded-lg font-medium transition-colors',
              selectedProvider === f.id
                ? 'bg-white/15 text-foreground'
                : 'bg-white/5 text-muted hover:text-foreground hover:bg-white/8'
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}
