import Button from '@mui/material/Button';

// Map contract variants to MUI variants:
// solid -> contained, outline -> outlined, ghost -> text, soft -> contained (with lower opacity)
export function MuiButton(props: Record<string, unknown>) {
  const {
    children = 'Click me',
    variant = 'solid',
    size = 'md',
    disabled = false,
    color = 'primary',
  } = props;

  const variantMap: Record<string, 'contained' | 'outlined' | 'text'> = {
    solid: 'contained',
    outline: 'outlined',
    ghost: 'text',
    soft: 'contained',
  };

  const sizeMap: Record<string, 'small' | 'medium' | 'large'> = {
    sm: 'small',
    md: 'medium',
    lg: 'large',
  };

  const colorMap: Record<
    string,
    'primary' | 'inherit' | 'error' | 'success'
  > = {
    primary: 'primary',
    neutral: 'inherit',
    danger: 'error',
    success: 'success',
  };

  return (
    <Button
      variant={variantMap[variant as string] || 'contained'}
      size={sizeMap[size as string] || 'medium'}
      color={colorMap[color as string] || 'primary'}
      disabled={disabled as boolean}
      sx={
        variant === 'soft'
          ? { opacity: 0.85, textTransform: 'none' }
          : { textTransform: 'none' }
      }
    >
      {children as string}
    </Button>
  );
}
