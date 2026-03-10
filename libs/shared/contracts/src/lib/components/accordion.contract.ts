import type { ComponentContract } from '../component-registry.types';

export const accordionContract: ComponentContract = {
  id: 'accordion',
  name: 'Accordion',
  description: 'A collapsible content panel for organizing information.',
  category: 'display',
  propSchema: [
    {
      name: 'type',
      label: 'Type',
      type: 'select',
      options: [
        { label: 'Single', value: 'single' },
        { label: 'Multiple', value: 'multiple' },
      ],
      defaultValue: 'single',
      description: 'Whether one or multiple items can be open at once.',
    },
  ],
  variants: [],
};
