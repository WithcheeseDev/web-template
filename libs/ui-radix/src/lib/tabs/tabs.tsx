import * as TabsPrimitive from '@radix-ui/react-tabs';
import { type ReactNode } from 'react';
import styles from './tabs.module.css';

interface TabItem {
  value: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultValue?: string;
}

export function Tabs({ items, defaultValue }: TabsProps) {
  return (
    <TabsPrimitive.Root className={styles.root} defaultValue={defaultValue ?? items[0]?.value}>
      <TabsPrimitive.List className={styles.list}>
        {items.map((item) => (
          <TabsPrimitive.Trigger key={item.value} className={styles.trigger} value={item.value}>
            {item.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {items.map((item) => (
        <TabsPrimitive.Content key={item.value} className={styles.content} value={item.value}>
          {item.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
}
