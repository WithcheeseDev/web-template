export function switchCodeTemplate(props: Record<string, unknown>): string {
  const { checked = false, disabled = false, label = 'Dark mode' } = props;

  const switchProps = [
    checked ? 'checked' : '',
    disabled ? 'disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return `import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

<FormControlLabel
  control={<Switch${switchProps ? ' ' + switchProps : ''} />}
  label="${label}"
/>`;
}
