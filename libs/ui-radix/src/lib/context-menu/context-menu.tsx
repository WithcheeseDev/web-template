import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { type ReactNode } from 'react';
import styles from './context-menu.module.css';

interface ContextMenuItem {
  label: string;
  shortcut?: string;
  disabled?: boolean;
  onSelect?: () => void;
}

interface ContextMenuProps {
  trigger: ReactNode;
  items: ContextMenuItem[];
}

export function ContextMenu({ trigger, items }: ContextMenuProps) {
  return (
    <ContextMenuPrimitive.Root>
      <ContextMenuPrimitive.Trigger asChild>{trigger}</ContextMenuPrimitive.Trigger>
      <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.Content className={styles.content}>
          {items.map((item, i) => (
            <ContextMenuPrimitive.Item
              key={i}
              className={styles.item}
              disabled={item.disabled}
              onSelect={item.onSelect}
            >
              {item.label}
              {item.shortcut && <span className={styles.rightSlot}>{item.shortcut}</span>}
            </ContextMenuPrimitive.Item>
          ))}
        </ContextMenuPrimitive.Content>
      </ContextMenuPrimitive.Portal>
    </ContextMenuPrimitive.Root>
  );
}
