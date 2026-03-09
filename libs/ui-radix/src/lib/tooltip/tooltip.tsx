import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { type ReactNode } from 'react';
import styles from './tooltip.module.css';

type TooltipSide = 'top' | 'right' | 'bottom' | 'left';

interface TooltipProps {
  children: ReactNode;
  content: string;
  side?: TooltipSide;
  sideOffset?: number;
}

export function Tooltip({ children, content, side = 'top', sideOffset = 5 }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className={styles.content}
            side={side}
            sideOffset={sideOffset}
          >
            {content}
            <TooltipPrimitive.Arrow className={styles.arrow} />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
