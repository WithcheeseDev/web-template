import { cn } from '@web-templates/utils';
import type { ComponentVariant } from '@web-templates/contracts';

interface VariantSelectorProps {
  variants: ComponentVariant[];
  activeVariant: string | null;
  onSelect: (variant: ComponentVariant) => void;
}

export function VariantSelector({ variants, activeVariant, onSelect }: VariantSelectorProps) {
  if (variants.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {variants.map((v) => (
        <button
          key={v.name}
          onClick={() => onSelect(v)}
          className={cn(
            'px-3 py-1.5 text-sm rounded-md font-medium transition-colors',
            activeVariant === v.name
              ? 'bg-primary/20 text-primary border border-primary/30'
              : 'bg-white/5 text-muted hover:text-foreground hover:bg-white/8 border border-transparent'
          )}
        >
          {v.label}
        </button>
      ))}
    </div>
  );
}
