import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { type ReactNode } from 'react';
import styles from './hover-card.module.css';

interface HoverCardProps {
  trigger: ReactNode;
  children: ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
}

export function HoverCard({ trigger, children, side = 'bottom', sideOffset = 5 }: HoverCardProps) {
  return (
    <HoverCardPrimitive.Root>
      <HoverCardPrimitive.Trigger asChild>{trigger}</HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Portal>
        <HoverCardPrimitive.Content className={styles.content} side={side} sideOffset={sideOffset}>
          {children}
          <HoverCardPrimitive.Arrow className={styles.arrow} />
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Portal>
    </HoverCardPrimitive.Root>
  );
}
