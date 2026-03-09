import * as LabelPrimitive from '@radix-ui/react-label';
import styles from './label.module.css';

interface LabelProps {
  htmlFor?: string;
  children: string;
  required?: boolean;
}

export function Label({ htmlFor, children, required }: LabelProps) {
  return (
    <LabelPrimitive.Root className={styles.root} htmlFor={htmlFor}>
      {children}
      {required && <span className={styles.required}> *</span>}
    </LabelPrimitive.Root>
  );
}
