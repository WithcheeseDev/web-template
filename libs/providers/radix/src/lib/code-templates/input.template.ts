export function inputCodeTemplate(props: Record<string, unknown>): string {
  const {
    placeholder = 'Enter text...',
    disabled = false,
    type = 'text',
    label = 'Label',
  } = props;

  const propsStr = [
    placeholder !== 'Enter text...' ? `placeholder="${placeholder}"` : '',
    type !== 'text' ? `type="${type}"` : '',
    disabled ? 'disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return `import { TextField, Text } from '@radix-ui/themes';

<div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
  <Text as="label" size="2" weight="medium">${label}</Text>
  <TextField.Root${propsStr ? ' ' + propsStr : ''} />
</div>`;
}
