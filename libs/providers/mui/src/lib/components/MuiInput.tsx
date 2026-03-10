import TextField from '@mui/material/TextField';

export function MuiInput(props: Record<string, unknown>) {
  const {
    placeholder = 'Enter text...',
    value = '',
    disabled = false,
    type = 'text',
    label = 'Label',
  } = props;

  return (
    <TextField
      variant="outlined"
      size="small"
      label={label as string}
      placeholder={placeholder as string}
      value={value as string}
      disabled={disabled as boolean}
      type={type as string}
      fullWidth
    />
  );
}
