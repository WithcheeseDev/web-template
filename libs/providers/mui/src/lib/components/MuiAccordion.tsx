import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export function MuiAccordion(props: Record<string, unknown>) {
  const items = ['Introduction', 'Getting Started', 'Advanced Usage'];

  return (
    <div>
      {items.map((title, i) => (
        <Accordion
          key={i}
          sx={{
            backgroundColor: 'rgba(255,255,255,0.03)',
            '&:before': { display: 'none' },
          }}
        >
          <AccordionSummary
            expandIcon={<span style={{ color: '#a1a1aa' }}>&#9660;</span>}
          >
            <Typography variant="body2">{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              Content for {title.toLowerCase()} section.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
