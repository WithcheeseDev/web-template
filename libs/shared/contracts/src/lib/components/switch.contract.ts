import type { ComponentContract } from '../component-registry.types';

export const switchContract: ComponentContract = {
  id: 'switch',
  name: 'Switch',
  description: 'A toggle switch for on/off states.',
  category: 'inputs',
  propSchema: [
    {
      name: 'checked',
      label: 'Checked',
      type: 'boolean',
      defaultValue: false,
      description: 'Whether the switch is on.',
    },
    {
      name: 'disabled',
      label: 'Disabled',
      type: 'boolean',
      defaultValue: false,
      description: 'Whether the switch is disabled.',
    },
    {
      name: 'label',
      label: 'Label',
      type: 'string',
      defaultValue: 'Dark mode',
      description: 'The label displayed next to the switch.',
    },
  ],
  variants: [],
};
