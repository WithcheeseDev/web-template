import type { ComponentContract } from '../component-registry.types';

export const inputContract: ComponentContract = {
  id: 'input',
  name: 'Input',
  description: 'A text input field for user data entry.',
  category: 'inputs',
  propSchema: [
    {
      name: 'placeholder',
      label: 'Placeholder',
      type: 'string',
      defaultValue: 'Enter text...',
      description: 'Placeholder text shown when the input is empty.',
    },
    {
      name: 'value',
      label: 'Value',
      type: 'string',
      defaultValue: '',
      description: 'The current value of the input.',
    },
    {
      name: 'disabled',
      label: 'Disabled',
      type: 'boolean',
      defaultValue: false,
      description: 'Whether the input is disabled.',
    },
    {
      name: 'type',
      label: 'Type',
      type: 'select',
      options: [
        { label: 'Text', value: 'text' },
        { label: 'Password', value: 'password' },
        { label: 'Email', value: 'email' },
      ],
      defaultValue: 'text',
      description: 'The HTML input type.',
    },
    {
      name: 'label',
      label: 'Label',
      type: 'string',
      defaultValue: 'Label',
      description: 'The label displayed above the input.',
    },
  ],
  variants: [],
};
