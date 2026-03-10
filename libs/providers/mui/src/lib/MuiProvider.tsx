import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const muiCache = createCache({
  key: 'mui',
  prepend: true,
  // enableCssLayer: true tells Emotion to wrap MUI styles in @layer mui
  // This ensures Tailwind utilities can override MUI styles
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1',
    },
    background: {
      default: 'transparent',
      paper: 'rgba(255, 255, 255, 0.04)',
    },
  },
  typography: {
    fontFamily: "'Inter', system-ui, sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
});

interface MuiProviderProps {
  children: React.ReactNode;
}

export function MuiProvider({ children }: MuiProviderProps) {
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
