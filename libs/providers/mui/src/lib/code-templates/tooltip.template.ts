export function tooltipCodeTemplate(props: Record<string, unknown>): string {
  const { content = 'Tooltip text', side = 'top' } = props;

  const placementMap: Record<string, string> = {
    top: 'top',
    right: 'right',
    bottom: 'bottom',
    left: 'left',
  };

  const propsStr = [
    `title="${content}"`,
    side !== 'top'
      ? `placement="${placementMap[side as string] || 'top'}"`
      : '',
    'arrow',
  ]
    .filter(Boolean)
    .join(' ');

  return `import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

<Tooltip ${propsStr}>
  <Button variant="outlined" size="small">Hover me</Button>
</Tooltip>`;
}
