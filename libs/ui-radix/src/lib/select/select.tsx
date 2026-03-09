import * as SelectPrimitive from '@radix-ui/react-select';
import { forwardRef } from 'react';
import styles from './select.module.css';

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectGroup {
  label?: string;
  options: SelectOption[];
}

interface SelectProps {
  placeholder?: string;
  groups: SelectGroup[];
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
}

export function Select({ placeholder = 'Select...', groups, value, onValueChange, defaultValue }: SelectProps) {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange} defaultValue={defaultValue}>
      <SelectPrimitive.Trigger className={styles.trigger}>
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>&#9660;</SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className={styles.content} position="popper" sideOffset={4}>
          <SelectPrimitive.Viewport className={styles.viewport}>
            {groups.map((group, gi) => (
              <SelectPrimitive.Group key={gi}>
                {group.label && (
                  <SelectPrimitive.Label className={styles.label}>
                    {group.label}
                  </SelectPrimitive.Label>
                )}
                {group.options.map((option) => (
                  <SelectItem key={option.value} value={option.value} disabled={option.disabled}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectPrimitive.Group>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}

const SelectItem = forwardRef<HTMLDivElement, SelectPrimitive.SelectItemProps>(
  ({ children, ...props }, ref) => (
    <SelectPrimitive.Item className={styles.item} ref={ref} {...props}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className={styles.itemIndicator}>
        &#10003;
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
);
SelectItem.displayName = 'SelectItem';
