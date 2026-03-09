import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { type ReactNode } from 'react';
import styles from './navigation-menu.module.css';

interface NavLink {
  label: string;
  href: string;
}

interface NavMenuSection {
  trigger: string;
  links: NavLink[];
}

interface NavigationMenuProps {
  sections: NavMenuSection[];
}

export function NavigationMenu({ sections }: NavigationMenuProps) {
  return (
    <NavigationMenuPrimitive.Root className={styles.root}>
      <NavigationMenuPrimitive.List className={styles.list}>
        {sections.map((section) => (
          <NavigationMenuPrimitive.Item key={section.trigger}>
            <NavigationMenuPrimitive.Trigger className={styles.trigger}>
              {section.trigger}
            </NavigationMenuPrimitive.Trigger>
            <NavigationMenuPrimitive.Content className={styles.content}>
              <ul style={{ listStyle: 'none', padding: 'var(--space-3)', margin: 0 }}>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <NavigationMenuPrimitive.Link className={styles.link} href={link.href}>
                      {link.label}
                    </NavigationMenuPrimitive.Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuPrimitive.Content>
          </NavigationMenuPrimitive.Item>
        ))}
        <NavigationMenuPrimitive.Indicator className={styles.indicator} />
      </NavigationMenuPrimitive.List>

      <div style={{ perspective: 2000, position: 'absolute', top: '100%', left: 0, width: '100%' }}>
        <NavigationMenuPrimitive.Viewport className={styles.viewport} />
      </div>
    </NavigationMenuPrimitive.Root>
  );
}

export function NavigationMenuSimple({ children }: { children: ReactNode }) {
  return (
    <NavigationMenuPrimitive.Root className={styles.root}>
      <NavigationMenuPrimitive.List className={styles.list}>
        {children}
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  );
}
