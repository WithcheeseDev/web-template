import { Link } from 'react-router-dom';
import type { ComponentRegistryEntry } from '@web-templates/contracts';
import { cn } from '@web-templates/utils';

interface ComponentCardProps {
  entry: ComponentRegistryEntry;
}

export function ComponentCard({ entry }: ComponentCardProps) {
  const { contract, implementations } = entry;
  const providers = Object.keys(implementations) as string[];

  return (
    <Link
      to={`/playground/${contract.id}`}
      className="glass-card p-5 flex flex-col gap-3 transition-all hover:scale-[1.02] no-underline group"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-foreground font-semibold text-base group-hover:text-primary transition-colors">
          {contract.name}
        </h3>
        <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-muted capitalize">
          {contract.category}
        </span>
      </div>
      <p className="text-sm text-muted leading-relaxed">{contract.description}</p>
      <div className="flex gap-2 mt-auto pt-2">
        {providers.map((p) => (
          <span
            key={p}
            className={cn(
              'text-xs px-2 py-0.5 rounded-md font-medium',
              p === 'radix'
                ? 'bg-violet-500/15 text-violet-400'
                : 'bg-blue-500/15 text-blue-400'
            )}
          >
            {p === 'radix' ? 'Radix' : 'MUI'}
          </span>
        ))}
      </div>
    </Link>
  );
}
