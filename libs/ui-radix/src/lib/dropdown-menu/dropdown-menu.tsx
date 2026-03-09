import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { type ReactNode } from 'react';
import styles from './dropdown-menu.module.css';

interface DropdownMenuItem {
  label: string;
  shortcut?: string;
  disabled?: boolean;
  onSelect?: () => void;
}

interface DropdownMenuProps {
  trigger: ReactNode;
  items: DropdownMenuItem[];
  label?: string;
  sideOffset?: number;
}

export function DropdownMenu({ trigger, items, label, sideOffset = 5 }: DropdownMenuProps) {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>{trigger}</DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content className={styles.content} sideOffset={sideOffset}>
          {label && <DropdownMenuPrimitive.Label className={styles.label}>{label}</DropdownMenuPrimitive.Label>}
          {items.map((item, i) => (
            <DropdownMenuPrimitive.Item
              key={i}
              className={styles.item}
              disabled={item.disabled}
              onSelect={item.onSelect}
            >
              {item.label}
              {item.shortcut && <span className={styles.rightSlot}>{item.shortcut}</span>}
            </DropdownMenuPrimitive.Item>
          ))}
          <DropdownMenuPrimitive.Arrow className={styles.arrow} />
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}
