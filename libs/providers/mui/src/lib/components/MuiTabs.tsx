import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function MuiTabs(props: Record<string, unknown>) {
  const { activeTab = 'tab1' } = props;
  const tabIndex = activeTab === 'tab1' ? 0 : activeTab === 'tab2' ? 1 : 2;

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={tabIndex}>
        <Tab label="General" />
        <Tab label="Settings" />
        <Tab label="Advanced" />
      </Tabs>
      <Box sx={{ p: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {tabIndex === 0
            ? 'General content here.'
            : tabIndex === 1
              ? 'Settings content here.'
              : 'Advanced content here.'}
        </Typography>
      </Box>
    </Box>
  );
}
