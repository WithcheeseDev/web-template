import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { forwardRef, type ReactNode } from 'react';
import styles from './accordion.module.css';

interface AccordionItem {
  value: string;
  trigger: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  collapsible?: boolean;
}

export function Accordion({ items, type = 'single', defaultValue, collapsible = true }: AccordionProps) {
  const rootProps =
    type === 'single'
      ? {
          type: 'single' as const,
          defaultValue: defaultValue as string | undefined,
          collapsible,
        }
      : {
          type: 'multiple' as const,
          defaultValue: defaultValue as string[] | undefined,
        };

  return (
    <AccordionPrimitive.Root className={styles.root} {...rootProps}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionPrimitive.Root>
  );
}

const AccordionItem = forwardRef<HTMLDivElement, AccordionPrimitive.AccordionItemProps>(
  ({ children, className, ...props }, ref) => (
    <AccordionPrimitive.Item ref={ref} className={`${styles.item} ${className ?? ''}`} {...props}>
      {children}
    </AccordionPrimitive.Item>
  )
);
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionPrimitive.AccordionTriggerProps>(
  ({ children, className, ...props }, ref) => (
    <AccordionPrimitive.Header className={styles.header}>
      <AccordionPrimitive.Trigger ref={ref} className={`${styles.trigger} ${className ?? ''}`} {...props}>
        {children}
        <span className={styles.chevron} aria-hidden>&#9660;</span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = forwardRef<HTMLDivElement, AccordionPrimitive.AccordionContentProps>(
  ({ children, className, ...props }, ref) => (
    <AccordionPrimitive.Content ref={ref} className={`${styles.contentWrapper} ${className ?? ''}`} {...props}>
      <div className={styles.content}>{children}</div>
    </AccordionPrimitive.Content>
  )
);
AccordionContent.displayName = 'AccordionContent';
