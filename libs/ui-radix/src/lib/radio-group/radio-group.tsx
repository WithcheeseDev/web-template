import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as LabelPrimitive from '@radix-ui/react-label';
import { useId } from 'react';
import styles from './radio-group.module.css';

interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface RadioGroupProps {
  options: RadioOption[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
}

export function RadioGroup({
  options,
  defaultValue,
  value,
  onValueChange,
  orientation = 'vertical',
}: RadioGroupProps) {
  const groupId = useId();

  return (
    <RadioGroupPrimitive.Root
      className={styles.root}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      orientation={orientation}
      style={orientation === 'horizontal' ? { flexDirection: 'row' } : undefined}
    >
      {options.map((option) => {
        const itemId = `${groupId}-${option.value}`;
        return (
          <div key={option.value} className={styles.item}>
            <RadioGroupPrimitive.Item
              className={styles.radio}
              value={option.value}
              id={itemId}
              disabled={option.disabled}
            >
              <RadioGroupPrimitive.Indicator className={styles.indicator} />
            </RadioGroupPrimitive.Item>
            <LabelPrimitive.Root className={styles.label} htmlFor={itemId}>
              {option.label}
            </LabelPrimitive.Root>
          </div>
        );
      })}
    </RadioGroupPrimitive.Root>
  );
}
