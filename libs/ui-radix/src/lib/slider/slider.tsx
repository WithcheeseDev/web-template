import * as SliderPrimitive from '@radix-ui/react-slider';
import styles from './slider.module.css';

interface SliderProps {
  defaultValue?: number[];
  value?: number[];
  onValueChange?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}

export function Slider({
  defaultValue = [50],
  value,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  disabled,
}: SliderProps) {
  return (
    <SliderPrimitive.Root
      className={styles.root}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
    >
      <SliderPrimitive.Track className={styles.track}>
        <SliderPrimitive.Range className={styles.range} />
      </SliderPrimitive.Track>
      {(value ?? defaultValue).map((_, i) => (
        <SliderPrimitive.Thumb key={i} className={styles.thumb} />
      ))}
    </SliderPrimitive.Root>
  );
}
