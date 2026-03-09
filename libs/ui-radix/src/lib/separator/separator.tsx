import * as SeparatorPrimitive from '@radix-ui/react-separator';
import styles from './separator.module.css';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}

export function Separator({ orientation = 'horizontal', decorative = true }: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      className={styles.root}
      orientation={orientation}
      decorative={decorative}
    />
  );
}
