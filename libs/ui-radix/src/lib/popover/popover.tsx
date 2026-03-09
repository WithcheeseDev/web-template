import * as PopoverPrimitive from '@radix-ui/react-popover';
import { type ReactNode } from 'react';
import styles from './popover.module.css';

interface PopoverProps {
  trigger: ReactNode;
  children: ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
}

export function Popover({ trigger, children, side = 'bottom', sideOffset = 5 }: PopoverProps) {
  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content className={styles.content} side={side} sideOffset={sideOffset}>
          {children}
          <PopoverPrimitive.Close className={styles.close} aria-label="Close">
            &times;
          </PopoverPrimitive.Close>
          <PopoverPrimitive.Arrow className={styles.arrow} />
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
