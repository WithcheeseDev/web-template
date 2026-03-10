import type { ComponentRegistryEntry, UIProvider } from '@web-templates/contracts';
import { RadixProvider } from '@web-templates/ui-radix';
import { MuiProvider } from '@web-templates/ui-mui';

interface ComponentPreviewProps {
  entry: ComponentRegistryEntry;
  provider: UIProvider;
  props: Record<string, unknown>;
}

export function ComponentPreview({ entry, provider, props }: ComponentPreviewProps) {
  const impl = entry.implementations[provider];

  if (!impl) {
    return (
      <div className="flex items-center justify-center h-full text-muted text-sm">
        No implementation for {provider}
      </div>
    );
  }

  const Component = impl.component;
  const rendered = <Component {...props} />;

  return (
    <div className="flex items-center justify-center min-h-[200px] p-8" key={provider}>
      {provider === 'radix' ? (
        <RadixProvider>{rendered}</RadixProvider>
      ) : (
        <MuiProvider>{rendered}</MuiProvider>
      )}
    </div>
  );
}
