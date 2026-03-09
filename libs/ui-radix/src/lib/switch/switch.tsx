import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as LabelPrimitive from '@radix-ui/react-label';
import { useId } from 'react';
import styles from './switch.module.css';

interface SwitchProps {
  label?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export function Switch({ label, defaultChecked, checked, onCheckedChange, disabled }: SwitchProps) {
  const id = useId();

  return (
    <div className={styles.wrapper}>
      {label && (
        <LabelPrimitive.Root className={styles.label} htmlFor={id}>
          {label}
        </LabelPrimitive.Root>
      )}
      <SwitchPrimitive.Root
        className={styles.root}
        id={id}
        defaultChecked={defaultChecked}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
      >
        <SwitchPrimitive.Thumb className={styles.thumb} />
      </SwitchPrimitive.Root>
    </div>
  );
}
