import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as LabelPrimitive from '@radix-ui/react-label';
import { useId } from 'react';
import styles from './checkbox.module.css';

interface CheckboxProps {
  label?: string;
  defaultChecked?: boolean;
  checked?: boolean | 'indeterminate';
  onCheckedChange?: (checked: boolean | 'indeterminate') => void;
  disabled?: boolean;
}

export function Checkbox({ label, defaultChecked, checked, onCheckedChange, disabled }: CheckboxProps) {
  const id = useId();

  return (
    <div className={styles.wrapper}>
      <CheckboxPrimitive.Root
        className={styles.root}
        id={id}
        defaultChecked={defaultChecked}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
      >
        <CheckboxPrimitive.Indicator className={styles.indicator}>
          &#10003;
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label && (
        <LabelPrimitive.Root className={styles.label} htmlFor={id}>
          {label}
        </LabelPrimitive.Root>
      )}
    </div>
  );
}
