import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

export function MuiDialog(props: Record<string, unknown>) {
  const {
    open = true,
    title = 'Dialog Title',
    description = 'This is a dialog description.',
  } = props;

  return (
    <Dialog
      open={open as boolean}
      PaperProps={{
        sx: { backgroundColor: 'rgba(30, 30, 35, 0.95)' },
      }}
    >
      <DialogTitle>{title as string}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description as string}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="inherit">Cancel</Button>
        <Button variant="contained">Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}
