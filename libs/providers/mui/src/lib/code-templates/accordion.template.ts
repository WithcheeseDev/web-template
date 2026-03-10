export function accordionCodeTemplate(
  props: Record<string, unknown>
): string {
  const { type = 'single' } = props;

  return `import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

<div>
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="body2">Introduction</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography variant="body2" color="text.secondary">
        Content for introduction section.${type === 'multiple' ? ' (Multiple sections can be open)' : ''}
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="body2">Getting Started</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography variant="body2" color="text.secondary">
        Content for getting started section.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="body2">Advanced Usage</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography variant="body2" color="text.secondary">
        Content for advanced usage section.
      </Typography>
    </AccordionDetails>
  </Accordion>
</div>`;
}
