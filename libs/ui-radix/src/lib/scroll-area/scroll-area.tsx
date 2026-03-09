import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { type ReactNode } from 'react';
import styles from './scroll-area.module.css';

interface ScrollAreaProps {
  children: ReactNode;
  width?: string | number;
  height?: string | number;
}

export function ScrollArea({ children, width = '100%', height = 200 }: ScrollAreaProps) {
  return (
    <ScrollAreaPrimitive.Root className={styles.root} style={{ width, height }}>
      <ScrollAreaPrimitive.Viewport className={styles.viewport}>
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar className={styles.scrollbar} orientation="vertical">
        <ScrollAreaPrimitive.Thumb className={styles.thumb} />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Scrollbar className={styles.scrollbar} orientation="horizontal">
        <ScrollAreaPrimitive.Thumb className={styles.thumb} />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Corner className={styles.corner} />
    </ScrollAreaPrimitive.Root>
  );
}
