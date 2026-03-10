interface RangeControlProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  description?: string;
}

export function RangeControl({
  label,
  value,
  min,
  max,
  step,
  onChange,
  description,
}: RangeControlProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label className="text-sm text-foreground/70">{label}</label>
        <span className="text-xs font-mono text-foreground/50">{value}</span>
      </div>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-white/10 accent-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted">{min}</span>
        <span className="text-xs text-muted">{max}</span>
      </div>
      {description && (
        <p className="text-xs text-muted mt-1">{description}</p>
      )}
    </div>
  );
}
