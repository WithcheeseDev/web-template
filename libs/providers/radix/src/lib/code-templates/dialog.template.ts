export function dialogCodeTemplate(props: Record<string, unknown>): string {
  const {
    title = 'Dialog Title',
    description = 'This is a dialog description.',
  } = props;

  return `import { Dialog, Button, Flex } from '@radix-ui/themes';

<Dialog.Root>
  <Dialog.Trigger>
    <Button variant="soft">Open Dialog</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>${title}</Dialog.Title>
    <Dialog.Description size="2" mb="4">${description}</Dialog.Description>
    <Flex gap="3" justify="end">
      <Dialog.Close>
        <Button variant="soft" color="gray">Cancel</Button>
      </Dialog.Close>
      <Dialog.Close>
        <Button>Confirm</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>`;
}
