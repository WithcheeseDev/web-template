import { Button } from '@radix-ui/themes';

// Map contract variant names to Radix variants
// solid -> solid, outline -> outline, ghost -> ghost, soft -> soft
export function RadixButton(props: Record<string, unknown>) {
  const {
    children = 'Click me',
    variant = 'solid',
    size = 'md',
    disabled = false,
    color = 'primary',
  } = props;

  const sizeMap: Record<string, '1' | '2' | '3'> = {
    sm: '1',
    md: '2',
    lg: '3',
  };
  const colorMap: Record<string, string> = {
    primary: 'indigo',
    neutral: 'gray',
    danger: 'red',
    success: 'green',
  };

  return (
    <Button
      variant={variant as 'solid' | 'outline' | 'ghost' | 'soft'}
      size={sizeMap[size as string] || '2'}
      color={
        (colorMap[color as string] || 'indigo') as
          | 'indigo'
          | 'gray'
          | 'red'
          | 'green'
      }
      disabled={disabled as boolean}
    >
      {children as string}
    </Button>
  );
}
