import { Switch, Flex, Text } from '@radix-ui/themes';

export function RadixSwitch(props: Record<string, unknown>) {
  const { checked = false, disabled = false, label = 'Dark mode' } = props;

  return (
    <Flex gap="2" align="center">
      <Switch checked={checked as boolean} disabled={disabled as boolean} />
      <Text size="2">{label as string}</Text>
    </Flex>
  );
}
