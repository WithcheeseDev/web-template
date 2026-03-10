import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

interface RadixProviderProps {
  children: React.ReactNode;
}

export function RadixProvider({ children }: RadixProviderProps) {
  return (
    <Theme appearance="dark" accentColor="indigo" radius="medium">
      {children}
    </Theme>
  );
}
