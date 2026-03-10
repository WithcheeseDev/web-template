import { create } from 'zustand';
import type { UIProvider } from '@web-templates/contracts';

interface ProviderState {
  activeProvider: UIProvider;
  setProvider: (provider: UIProvider) => void;
  toggleProvider: () => void;
}

export const useProviderStore = create<ProviderState>((set) => ({
  activeProvider: 'radix',
  setProvider: (provider) => set({ activeProvider: provider }),
  toggleProvider: () =>
    set((s) => ({
      activeProvider: s.activeProvider === 'radix' ? 'mui' : 'radix',
    })),
}));
