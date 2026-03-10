export function checkboxCodeTemplate(
  props: Record<string, unknown>
): string {
  const { checked = false, disabled = false, label = 'Accept terms' } = props;

  const checkboxProps = [
    checked ? 'checked' : '',
    disabled ? 'disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return `import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

<FormControlLabel
  control={<Checkbox${checkboxProps ? ' ' + checkboxProps : ''} />}
  label="${label}"
/>`;
}
