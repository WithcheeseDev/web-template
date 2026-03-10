export function tooltipCodeTemplate(props: Record<string, unknown>): string {
  const { content = 'Tooltip text', side = 'top' } = props;

  const propsStr = [
    `content="${content}"`,
    side !== 'top' ? `side="${side}"` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return `import { Tooltip, Button } from '@radix-ui/themes';

<Tooltip ${propsStr}>
  <Button variant="soft">Hover me</Button>
</Tooltip>`;
}
