export function buttonCodeTemplate(props: Record<string, unknown>): string {
  const {
    children = 'Click me',
    variant = 'solid',
    size = 'md',
    disabled = false,
    color = 'primary',
  } = props;

  const sizeMap: Record<string, string> = { sm: '1', md: '2', lg: '3' };
  const colorMap: Record<string, string> = {
    primary: 'indigo',
    neutral: 'gray',
    danger: 'red',
    success: 'green',
  };

  const propsStr = [
    variant !== 'solid' ? `variant="${variant}"` : '',
    size !== 'md' ? `size="${sizeMap[size as string] || '2'}"` : '',
    color !== 'primary'
      ? `color="${colorMap[color as string] || 'indigo'}"`
      : '',
    disabled ? 'disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return `import { Button } from '@radix-ui/themes';

<Button${propsStr ? ' ' + propsStr : ''}>${children}</Button>`;
}
