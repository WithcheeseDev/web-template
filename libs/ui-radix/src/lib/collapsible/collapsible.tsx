import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { type ReactNode } from 'react';
import styles from './collapsible.module.css';

interface CollapsibleProps {
  triggerLabel: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function Collapsible({ triggerLabel, children, defaultOpen }: CollapsibleProps) {
  return (
    <CollapsiblePrimitive.Root className={styles.root} defaultOpen={defaultOpen}>
      <CollapsiblePrimitive.Trigger className={styles.trigger}>
        {triggerLabel}
        <span aria-hidden>&#9660;</span>
      </CollapsiblePrimitive.Trigger>
      <CollapsiblePrimitive.Content className={styles.contentWrapper}>
        <div className={styles.content}>{children}</div>
      </CollapsiblePrimitive.Content>
    </CollapsiblePrimitive.Root>
  );
}
