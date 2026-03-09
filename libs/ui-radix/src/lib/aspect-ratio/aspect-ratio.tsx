import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { type ReactNode } from 'react';

interface AspectRatioProps {
  ratio?: number;
  children: ReactNode;
}

export function AspectRatio({ ratio = 16 / 9, children }: AspectRatioProps) {
  return (
    <div style={{ width: '100%', overflow: 'hidden', borderRadius: 'var(--radius-md)' }}>
      <AspectRatioPrimitive.Root ratio={ratio}>
        {children}
      </AspectRatioPrimitive.Root>
    </div>
  );
}
