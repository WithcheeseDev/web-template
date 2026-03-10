import { Select } from '@radix-ui/themes';

export function RadixSelect(props: Record<string, unknown>) {
  const {
    value = '',
    placeholder = 'Choose option...',
    disabled = false,
  } = props;

  const options = [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' },
    { label: 'Option 3', value: 'opt3' },
  ];

  return (
    <Select.Root value={value as string} disabled={disabled as boolean}>
      <Select.Trigger placeholder={placeholder as string} />
      <Select.Content>
        {options.map((opt) => (
          <Select.Item key={opt.value} value={opt.value}>
            {opt.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
