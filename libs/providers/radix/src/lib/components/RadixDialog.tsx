import { Dialog, Button, Flex } from '@radix-ui/themes';

export function RadixDialog(props: Record<string, unknown>) {
  const {
    open = true,
    title = 'Dialog Title',
    description = 'This is a dialog description.',
  } = props;

  return (
    <Dialog.Root open={open as boolean}>
      <Dialog.Trigger>
        <Button variant="soft">Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>{title as string}</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          {description as string}
        </Dialog.Description>
        <Flex gap="3" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Confirm</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
