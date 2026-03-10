import { TextField, Text } from '@radix-ui/themes';

export function RadixInput(props: Record<string, unknown>) {
  const {
    placeholder = 'Enter text...',
    value = '',
    disabled = false,
    type = 'text',
    label = 'Label',
  } = props;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Text as="label" size="2" weight="medium">
        {label as string}
      </Text>
      <TextField.Root
        placeholder={placeholder as string}
        value={value as string}
        disabled={disabled as boolean}
        type={type as 'text' | 'password' | 'email'}
      />
    </div>
  );
}
