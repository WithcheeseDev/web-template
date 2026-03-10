export function buttonCodeTemplate(props: Record<string, unknown>): string {
  const {
    children = 'Click me',
    variant = 'solid',
    size = 'md',
    disabled = false,
    color = 'primary',
  } = props;

  const variantMap: Record<string, string> = {
    solid: 'contained',
    outline: 'outlined',
    ghost: 'text',
    soft: 'contained',
  };
  const sizeMap: Record<string, string> = {
    sm: 'small',
    md: 'medium',
    lg: 'large',
  };
  const colorMap: Record<string, string> = {
    primary: 'primary',
    neutral: 'inherit',
    danger: 'error',
    success: 'success',
  };

  const propsStr = [
    `variant="${variantMap[variant as string] || 'contained'}"`,
    size !== 'md' ? `size="${sizeMap[size as string]}"` : '',
    color !== 'primary' ? `color="${colorMap[color as string]}"` : '',
    disabled ? 'disabled' : '',
    variant === 'soft' ? 'sx={{ opacity: 0.85, textTransform: "none" }}' : 'sx={{ textTransform: "none" }}',
  ]
    .filter(Boolean)
    .join(' ');

  return `import Button from '@mui/material/Button';

<Button ${propsStr}>${children}</Button>`;
}
