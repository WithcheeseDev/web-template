interface NumberControlProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  description?: string;
}

export function NumberControl({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  description,
}: NumberControlProps) {
  const decrement = () => {
    const next = value - step;
    if (min !== undefined && next < min) return;
    onChange(next);
  };

  const increment = () => {
    const next = value + step;
    if (max !== undefined && next > max) return;
    onChange(next);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-foreground/70">{label}</label>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={decrement}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm text-foreground hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label={`Decrease ${label}`}
        >
          &minus;
        </button>
        <input
          type="number"
          value={value}
          onChange={(e) => {
            const parsed = parseFloat(e.target.value);
            if (!isNaN(parsed)) onChange(parsed);
          }}
          min={min}
          max={max}
          step={step}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-foreground text-center focus:outline-none focus:ring-2 focus:ring-primary/50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button
          type="button"
          onClick={increment}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm text-foreground hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label={`Increase ${label}`}
        >
          +
        </button>
      </div>
      {description && (
        <p className="text-xs text-muted mt-1">{description}</p>
      )}
    </div>
  );
}
