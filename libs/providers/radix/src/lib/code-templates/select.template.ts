export function selectCodeTemplate(props: Record<string, unknown>): string {
  const {
    placeholder = 'Choose option...',
    disabled = false,
  } = props;

  const rootProps = [disabled ? 'disabled' : ''].filter(Boolean).join(' ');

  return `import { Select } from '@radix-ui/themes';

<Select.Root${rootProps ? ' ' + rootProps : ''}>
  <Select.Trigger placeholder="${placeholder}" />
  <Select.Content>
    <Select.Item value="opt1">Option 1</Select.Item>
    <Select.Item value="opt2">Option 2</Select.Item>
    <Select.Item value="opt3">Option 3</Select.Item>
  </Select.Content>
</Select.Root>`;
}
