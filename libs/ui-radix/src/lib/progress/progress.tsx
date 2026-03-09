import * as ProgressPrimitive from '@radix-ui/react-progress';
import styles from './progress.module.css';

interface ProgressProps {
  value: number;
  max?: number;
}

export function Progress({ value, max = 100 }: ProgressProps) {
  const percentage = (value / max) * 100;
  return (
    <ProgressPrimitive.Root className={styles.root} value={value} max={max}>
      <ProgressPrimitive.Indicator
        className={styles.indicator}
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}
