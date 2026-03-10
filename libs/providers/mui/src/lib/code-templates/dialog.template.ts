export function dialogCodeTemplate(props: Record<string, unknown>): string {
  const {
    title = 'Dialog Title',
    description = 'This is a dialog description.',
  } = props;

  return `import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

<Dialog open={open} onClose={handleClose}>
  <DialogTitle>${title}</DialogTitle>
  <DialogContent>
    <DialogContentText>${description}</DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button color="inherit" onClick={handleClose}>Cancel</Button>
    <Button variant="contained" onClick={handleConfirm}>Confirm</Button>
  </DialogActions>
</Dialog>`;
}
