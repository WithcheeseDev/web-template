import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export function MuiSelect(props: Record<string, unknown>) {
  const {
    value = '',
    placeholder = 'Choose option...',
    disabled = false,
  } = props;

  const options = [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' },
    { label: 'Option 3', value: 'opt3' },
  ];

  return (
    <FormControl size="small" fullWidth disabled={disabled as boolean}>
      <InputLabel>Select</InputLabel>
      <Select value={value as string} label="Select" displayEmpty>
        <MenuItem value="" disabled>
          {placeholder as string}
        </MenuItem>
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
