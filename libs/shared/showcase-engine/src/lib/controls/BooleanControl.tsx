interface BooleanControlProps {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  description?: string;
}

export function BooleanControl({
  label,
  value,
  onChange,
  description,
}: BooleanControlProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label className="text-sm text-foreground/70">{label}</label>
        <button
          type="button"
          role="switch"
          aria-checked={value}
          onClick={() => onChange(!value)}
          className={`
            relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border border-white/10
            transition-colors duration-200 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-primary/50
            ${value ? 'bg-primary' : 'bg-white/10'}
          `}
        >
          <span
            className={`
              pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-sm
              transition-transform duration-200 ease-in-out
              ${value ? 'translate-x-5' : 'translate-x-0'}
            `}
          />
        </button>
      </div>
      {description && (
        <p className="text-xs text-muted mt-1">{description}</p>
      )}
    </div>
  );
}
