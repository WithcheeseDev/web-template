import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export function MuiCheckbox(props: Record<string, unknown>) {
  const { checked = false, disabled = false, label = 'Accept terms' } = props;

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked as boolean}
          disabled={disabled as boolean}
        />
      }
      label={label as string}
    />
  );
}
