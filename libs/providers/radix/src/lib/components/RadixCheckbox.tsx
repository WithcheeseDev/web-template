import { Checkbox, Flex, Text } from '@radix-ui/themes';

export function RadixCheckbox(props: Record<string, unknown>) {
  const { checked = false, disabled = false, label = 'Accept terms' } = props;

  return (
    <Flex gap="2" align="center">
      <Checkbox checked={checked as boolean} disabled={disabled as boolean} />
      <Text size="2">{label as string}</Text>
    </Flex>
  );
}
