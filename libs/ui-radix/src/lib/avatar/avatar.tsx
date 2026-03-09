import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { type ReactNode } from 'react';
import styles from './avatar.module.css';

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback: string;
  size?: AvatarSize;
  className?: string;
}

export function Avatar({ src, alt, fallback, size = 'md', className }: AvatarProps) {
  return (
    <AvatarPrimitive.Root className={`${styles.root} ${styles[size]} ${className ?? ''}`}>
      {src && <AvatarPrimitive.Image className={styles.image} src={src} alt={alt ?? ''} />}
      <AvatarPrimitive.Fallback className={styles.fallback} delayMs={src ? 600 : 0}>
        {fallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}

interface AvatarGroupProps {
  children: ReactNode;
}

export function AvatarGroup({ children }: AvatarGroupProps) {
  return <div className={styles.group}>{children}</div>;
}
