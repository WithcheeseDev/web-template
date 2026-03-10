import type { ComponentContract } from '../component-registry.types';

export const tooltipContract: ComponentContract = {
  id: 'tooltip',
  name: 'Tooltip',
  description: 'A popup that displays information on hover.',
  category: 'overlay',
  propSchema: [
    {
      name: 'content',
      label: 'Content',
      type: 'string',
      defaultValue: 'Tooltip text',
      description: 'The text content of the tooltip.',
    },
    {
      name: 'side',
      label: 'Side',
      type: 'select',
      options: [
        { label: 'Top', value: 'top' },
        { label: 'Right', value: 'right' },
        { label: 'Bottom', value: 'bottom' },
        { label: 'Left', value: 'left' },
      ],
      defaultValue: 'top',
      description: 'The side where the tooltip appears.',
    },
  ],
  variants: [],
};
