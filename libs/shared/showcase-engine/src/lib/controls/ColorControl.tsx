interface ColorControlProps {
  label: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  description?: string;
}

export function ColorControl({
  label,
  value,
  options,
  onChange,
  description,
}: ColorControlProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-foreground/70">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            title={opt.label}
            onClick={() => onChange(opt.value)}
            className={`
              h-7 w-7 rounded-full border-2 transition-all duration-150
              focus:outline-none focus:ring-2 focus:ring-primary/50
              ${
                value === opt.value
                  ? 'border-white scale-110 shadow-lg'
                  : 'border-transparent hover:border-white/30'
              }
            `}
            style={{ backgroundColor: opt.value }}
            aria-label={opt.label}
          />
        ))}
      </div>
      {description && (
        <p className="text-xs text-muted mt-1">{description}</p>
      )}
    </div>
  );
}
