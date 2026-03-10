import type { ComponentContract } from '../component-registry.types';

export const selectContract: ComponentContract = {
  id: 'select',
  name: 'Select',
  description: 'A dropdown select menu. Options are hardcoded in the component: [{label: "Option 1", value: "opt1"}, {label: "Option 2", value: "opt2"}, {label: "Option 3", value: "opt3"}].',
  category: 'inputs',
  propSchema: [
    {
      name: 'value',
      label: 'Value',
      type: 'string',
      defaultValue: '',
      description: 'The currently selected value.',
    },
    {
      name: 'placeholder',
      label: 'Placeholder',
      type: 'string',
      defaultValue: 'Choose option...',
      description: 'Placeholder text shown when no option is selected.',
    },
    {
      name: 'disabled',
      label: 'Disabled',
      type: 'boolean',
      defaultValue: false,
      description: 'Whether the select is disabled.',
    },
  ],
  variants: [],
};
