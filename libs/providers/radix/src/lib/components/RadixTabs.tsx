import { Tabs, Box, Text } from '@radix-ui/themes';

export function RadixTabs(props: Record<string, unknown>) {
  const { activeTab = 'tab1' } = props;

  return (
    <Tabs.Root defaultValue={activeTab as string}>
      <Tabs.List>
        <Tabs.Trigger value="tab1">General</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Settings</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Advanced</Tabs.Trigger>
      </Tabs.List>
      <Box pt="3">
        <Tabs.Content value="tab1">
          <Text size="2">General content here.</Text>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <Text size="2">Settings content here.</Text>
        </Tabs.Content>
        <Tabs.Content value="tab3">
          <Text size="2">Advanced content here.</Text>
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
}
