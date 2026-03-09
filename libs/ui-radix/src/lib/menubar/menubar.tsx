import * as MenubarPrimitive from '@radix-ui/react-menubar';
import styles from './menubar.module.css';

interface MenubarMenuItem {
  label: string;
  shortcut?: string;
  disabled?: boolean;
  onSelect?: () => void;
}

interface MenubarMenu {
  label: string;
  items: MenubarMenuItem[];
}

interface MenubarProps {
  menus: MenubarMenu[];
}

export function Menubar({ menus }: MenubarProps) {
  return (
    <MenubarPrimitive.Root className={styles.root}>
      {menus.map((menu) => (
        <MenubarPrimitive.Menu key={menu.label}>
          <MenubarPrimitive.Trigger className={styles.trigger}>
            {menu.label}
          </MenubarPrimitive.Trigger>
          <MenubarPrimitive.Portal>
            <MenubarPrimitive.Content className={styles.content} align="start" sideOffset={5}>
              {menu.items.map((item, i) => (
                <MenubarPrimitive.Item
                  key={i}
                  className={styles.item}
                  disabled={item.disabled}
                  onSelect={item.onSelect}
                >
                  {item.label}
                  {item.shortcut && <span className={styles.rightSlot}>{item.shortcut}</span>}
                </MenubarPrimitive.Item>
              ))}
            </MenubarPrimitive.Content>
          </MenubarPrimitive.Portal>
        </MenubarPrimitive.Menu>
      ))}
    </MenubarPrimitive.Root>
  );
}
