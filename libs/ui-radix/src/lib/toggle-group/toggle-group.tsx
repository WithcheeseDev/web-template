import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import styles from './toggle-group.module.css';

interface ToggleGroupItem {
  value: string;
  label: string;
}

interface ToggleGroupSingleProps {
  type: 'single';
  items: ToggleGroupItem[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

interface ToggleGroupMultipleProps {
  type: 'multiple';
  items: ToggleGroupItem[];
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
}

type ToggleGroupProps = ToggleGroupSingleProps | ToggleGroupMultipleProps;

export function ToggleGroup(props: ToggleGroupProps) {
  const { type, items } = props;

  if (type === 'single') {
    const { defaultValue, value, onValueChange } = props;
    return (
      <ToggleGroupPrimitive.Root
        className={styles.root}
        type="single"
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
      >
        {items.map((item) => (
          <ToggleGroupPrimitive.Item key={item.value} className={styles.item} value={item.value}>
            {item.label}
          </ToggleGroupPrimitive.Item>
        ))}
      </ToggleGroupPrimitive.Root>
    );
  }

  const { defaultValue, value, onValueChange } = props;
  return (
    <ToggleGroupPrimitive.Root
      className={styles.root}
      type="multiple"
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
    >
      {items.map((item) => (
        <ToggleGroupPrimitive.Item key={item.value} className={styles.item} value={item.value}>
          {item.label}
        </ToggleGroupPrimitive.Item>
      ))}
    </ToggleGroupPrimitive.Root>
  );
}
