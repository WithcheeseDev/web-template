import { Tooltip, Button } from '@radix-ui/themes';

export function RadixTooltip(props: Record<string, unknown>) {
  const { content = 'Tooltip text', side = 'top' } = props;

  return (
    <Tooltip
      content={content as string}
      side={side as 'top' | 'right' | 'bottom' | 'left'}
    >
      <Button variant="soft">Hover me</Button>
    </Tooltip>
  );
}
