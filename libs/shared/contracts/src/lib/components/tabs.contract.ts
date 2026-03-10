import type { ComponentContract } from '../component-registry.types';

export const tabsContract: ComponentContract = {
  id: 'tabs',
  name: 'Tabs',
  description: 'A tabbed navigation component for switching between views.',
  category: 'navigation',
  propSchema: [
    {
      name: 'activeTab',
      label: 'Active Tab',
      type: 'select',
      options: [
        { label: 'Tab 1', value: 'tab1' },
        { label: 'Tab 2', value: 'tab2' },
        { label: 'Tab 3', value: 'tab3' },
      ],
      defaultValue: 'tab1',
      description: 'The currently active tab.',
    },
  ],
  variants: [
    { name: 'default', label: 'Default', propsOverride: {} },
    { name: 'two-tabs', label: 'Two Tabs', propsOverride: { activeTab: 'tab1' } },
    { name: 'many-tabs', label: 'Many Tabs', propsOverride: { activeTab: 'tab1' } },
  ],
};
