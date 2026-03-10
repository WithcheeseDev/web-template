import type { ComponentContract } from '../component-registry.types';

export const buttonContract: ComponentContract = {
  id: 'button',
  name: 'Button',
  description: 'A clickable button for triggering actions.',
  category: 'inputs',
  propSchema: [
    {
      name: 'children',
      label: 'Label',
      type: 'string',
      defaultValue: 'Click me',
      description: 'The text content of the button.',
    },
    {
      name: 'variant',
      label: 'Variant',
      type: 'select',
      options: [
        { label: 'Solid', value: 'solid' },
        { label: 'Outline', value: 'outline' },
        { label: 'Ghost', value: 'ghost' },
        { label: 'Soft', value: 'soft' },
      ],
      defaultValue: 'solid',
      description: 'The visual style variant of the button.',
    },
    {
      name: 'size',
      label: 'Size',
      type: 'select',
      options: [
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
      ],
      defaultValue: 'md',
      description: 'The size of the button.',
    },
    {
      name: 'disabled',
      label: 'Disabled',
      type: 'boolean',
      defaultValue: false,
      description: 'Whether the button is disabled.',
    },
    {
      name: 'color',
      label: 'Color',
      type: 'color',
      options: [
        { label: 'Primary', value: 'primary' },
        { label: 'Neutral', value: 'neutral' },
        { label: 'Danger', value: 'danger' },
        { label: 'Success', value: 'success' },
      ],
      defaultValue: 'primary',
      description: 'The color scheme of the button.',
    },
  ],
  variants: [
    { name: 'default', label: 'Default', propsOverride: { variant: 'solid' } },
    { name: 'outline', label: 'Outline', propsOverride: { variant: 'outline' } },
    { name: 'ghost', label: 'Ghost', propsOverride: { variant: 'ghost' } },
    { name: 'soft', label: 'Soft', propsOverride: { variant: 'soft' } },
    { name: 'disabled', label: 'Disabled', propsOverride: { disabled: true } },
  ],
};
