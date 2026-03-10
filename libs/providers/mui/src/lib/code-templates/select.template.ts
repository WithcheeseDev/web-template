export function selectCodeTemplate(props: Record<string, unknown>): string {
  const {
    placeholder = 'Choose option...',
    disabled = false,
  } = props;

  const formControlProps = [
    'size="small"',
    'fullWidth',
    disabled ? 'disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return `import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

<FormControl ${formControlProps}>
  <InputLabel>Select</InputLabel>
  <Select label="Select" displayEmpty>
    <MenuItem value="" disabled>${placeholder}</MenuItem>
    <MenuItem value="opt1">Option 1</MenuItem>
    <MenuItem value="opt2">Option 2</MenuItem>
    <MenuItem value="opt3">Option 3</MenuItem>
  </Select>
</FormControl>`;
}
