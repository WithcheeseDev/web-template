import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

export function MuiTooltip(props: Record<string, unknown>) {
  const { content = 'Tooltip text', side = 'top' } = props;

  const placementMap: Record<string, 'top' | 'right' | 'bottom' | 'left'> = {
    top: 'top',
    right: 'right',
    bottom: 'bottom',
    left: 'left',
  };

  return (
    <Tooltip
      title={content as string}
      placement={placementMap[side as string] || 'top'}
      arrow
    >
      <Button variant="outlined" size="small">
        Hover me
      </Button>
    </Tooltip>
  );
}
