export function switchCodeTemplate(props: Record<string, unknown>): string {
  const { checked = false, disabled = false, label = 'Dark mode' } = props;

  const propsStr = [
    checked ? 'checked' : '',
    disabled ? 'disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return `import { Switch, Flex, Text } from '@radix-ui/themes';

<Flex gap="2" align="center">
  <Switch${propsStr ? ' ' + propsStr : ''} />
  <Text size="2">${label}</Text>
</Flex>`;
}
