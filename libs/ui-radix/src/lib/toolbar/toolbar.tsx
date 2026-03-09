import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import { type ReactNode } from 'react';
import styles from './toolbar.module.css';

interface ToolbarProps {
  children: ReactNode;
}

export function Toolbar({ children }: ToolbarProps) {
  return (
    <ToolbarPrimitive.Root className={styles.root}>
      {children}
    </ToolbarPrimitive.Root>
  );
}

export function ToolbarButton({ children, ...props }: ToolbarPrimitive.ToolbarButtonProps) {
  return (
    <ToolbarPrimitive.Button className={styles.button} {...props}>
      {children}
    </ToolbarPrimitive.Button>
  );
}

export function ToolbarSeparator() {
  return <ToolbarPrimitive.Separator className={styles.separator} />;
}

export function ToolbarLink({ children, ...props }: ToolbarPrimitive.ToolbarLinkProps) {
  return (
    <ToolbarPrimitive.Link className={styles.link} {...props}>
      {children}
    </ToolbarPrimitive.Link>
  );
}

export function ToolbarToggleGroup({ children, ...props }: ToolbarPrimitive.ToolbarToggleGroupSingleProps) {
  return (
    <ToolbarPrimitive.ToggleGroup {...props}>
      {children}
    </ToolbarPrimitive.ToggleGroup>
  );
}

export function ToolbarToggleItem({ children, ...props }: ToolbarPrimitive.ToolbarToggleItemProps) {
  return (
    <ToolbarPrimitive.ToggleItem className={styles.button} {...props}>
      {children}
    </ToolbarPrimitive.ToggleItem>
  );
}
