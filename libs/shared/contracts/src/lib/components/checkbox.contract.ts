import type { ComponentContract } from '../component-registry.types';

export const checkboxContract: ComponentContract = {
  id: 'checkbox',
  name: 'Checkbox',
  description: 'A toggleable checkbox for boolean selections.',
  category: 'inputs',
  propSchema: [
    {
      name: 'checked',
      label: 'Checked',
      type: 'boolean',
      defaultValue: false,
      description: 'Whether the checkbox is checked.',
    },
    {
      name: 'disabled',
      label: 'Disabled',
      type: 'boolean',
      defaultValue: false,
      description: 'Whether the checkbox is disabled.',
    },
    {
      name: 'label',
      label: 'Label',
      type: 'string',
      defaultValue: 'Accept terms',
      description: 'The label displayed next to the checkbox.',
    },
  ],
  variants: [],
};
