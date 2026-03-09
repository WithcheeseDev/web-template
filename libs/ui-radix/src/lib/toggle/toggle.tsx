import * as TogglePrimitive from '@radix-ui/react-toggle';
import { type ReactNode } from 'react';
import styles from './toggle.module.css';

interface ToggleProps {
  children: ReactNode;
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  disabled?: boolean;
}

export function Toggle({ children, pressed, defaultPressed, onPressedChange, disabled }: ToggleProps) {
  return (
    <TogglePrimitive.Root
      className={styles.root}
      pressed={pressed}
      defaultPressed={defaultPressed}
      onPressedChange={onPressedChange}
      disabled={disabled}
    >
      {children}
    </TogglePrimitive.Root>
  );
}
