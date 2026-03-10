export function checkboxCodeTemplate(props: Record<string, unknown>): string {
  const { checked = false, disabled = false, label = 'Accept terms' } = props;

  const propsStr = [
    checked ? 'checked' : '',
    disabled ? 'disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return `import { Checkbox, Flex, Text } from '@radix-ui/themes';

<Flex gap="2" align="center">
  <Checkbox${propsStr ? ' ' + propsStr : ''} />
  <Text size="2">${label}</Text>
</Flex>`;
}
