import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export function MuiSwitch(props: Record<string, unknown>) {
  const { checked = false, disabled = false, label = 'Dark mode' } = props;

  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked as boolean}
          disabled={disabled as boolean}
        />
      }
      label={label as string}
    />
  );
}
