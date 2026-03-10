import type { ComponentContract } from '../component-registry.types';

export const dialogContract: ComponentContract = {
  id: 'dialog',
  name: 'Dialog',
  description: 'A modal dialog for focused interactions.',
  category: 'overlay',
  propSchema: [
    {
      name: 'open',
      label: 'Open',
      type: 'boolean',
      defaultValue: true,
      description: 'Whether the dialog is open.',
    },
    {
      name: 'title',
      label: 'Title',
      type: 'string',
      defaultValue: 'Dialog Title',
      description: 'The title of the dialog.',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'string',
      defaultValue: 'This is a dialog description.',
      description: 'The description text of the dialog.',
    },
  ],
  variants: [],
};
