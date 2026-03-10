export function inputCodeTemplate(props: Record<string, unknown>): string {
  const {
    placeholder = 'Enter text...',
    disabled = false,
    type = 'text',
    label = 'Label',
  } = props;

  const propsStr = [
    'variant="outlined"',
    'size="small"',
    `label="${label}"`,
    placeholder !== 'Enter text...' ? `placeholder="${placeholder}"` : '',
    type !== 'text' ? `type="${type}"` : '',
    disabled ? 'disabled' : '',
    'fullWidth',
  ]
    .filter(Boolean)
    .join(' ');

  return `import TextField from '@mui/material/TextField';

<TextField ${propsStr} />`;
}
