export function tabsCodeTemplate(props: Record<string, unknown>): string {
  const { activeTab = 'tab1' } = props;
  const tabIndex = activeTab === 'tab1' ? 0 : activeTab === 'tab2' ? 1 : 2;

  return `import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

<Box sx={{ width: '100%' }}>
  <Tabs value={${tabIndex}}>
    <Tab label="General" />
    <Tab label="Settings" />
    <Tab label="Advanced" />
  </Tabs>
  <Box sx={{ p: 2 }}>
    <Typography variant="body2" color="text.secondary">
      Tab content here.
    </Typography>
  </Box>
</Box>`;
}
