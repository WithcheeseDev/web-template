import { cn } from '@web-templates/utils';
import { useProviderStore } from '../stores/providerStore';
import type { UIProvider } from '@web-templates/contracts';

const PROVIDERS: { id: UIProvider; label: string }[] = [
  { id: 'radix', label: 'Radix' },
  { id: 'mui', label: 'MUI' },
];

export function ProviderToggle() {
  const { activeProvider, setProvider } = useProviderStore();

  return (
    <div className="inline-flex rounded-lg bg-white/5 p-1">
      {PROVIDERS.map((p) => (
        <button
          key={p.id}
          onClick={() => setProvider(p.id)}
          className={cn(
            'px-4 py-1.5 rounded-md text-sm font-medium transition-all',
            activeProvider === p.id
              ? 'bg-primary text-white shadow-sm'
              : 'text-muted hover:text-foreground'
          )}
        >
          {p.label}
        </button>
      ))}
    </div>
  );
}
