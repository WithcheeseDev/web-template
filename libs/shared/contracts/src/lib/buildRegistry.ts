import type { ComponentContract, ComponentRegistryEntry, ComponentRegistry, UIProvider, ComponentCategory } from './component-registry.types';
import type { ComponentType } from 'react';

export interface ProviderImplementation {
  component: ComponentType<Record<string, unknown>>;
  codeTemplate: (props: Record<string, unknown>) => string;
}

export interface ProviderRegistration {
  provider: UIProvider;
  implementations: Record<string, ProviderImplementation>;
}

export function buildRegistry(
  contracts: ComponentContract[],
  ...providers: ProviderRegistration[]
): ComponentRegistry {
  const entries = new Map<string, ComponentRegistryEntry>();

  for (const contract of contracts) {
    const entry: ComponentRegistryEntry = {
      contract,
      implementations: {},
    };

    for (const reg of providers) {
      const impl = reg.implementations[contract.id];
      if (impl) {
        entry.implementations[reg.provider] = impl;
      }
    }

    entries.set(contract.id, entry);
  }

  return {
    entries,
    getById(id: string) {
      return entries.get(id);
    },
    getByCategory(category: ComponentCategory) {
      return Array.from(entries.values()).filter(
        (e) => e.contract.category === category
      );
    },
    search(query: string) {
      const q = query.toLowerCase();
      return Array.from(entries.values()).filter(
        (e) =>
          e.contract.name.toLowerCase().includes(q) ||
          e.contract.description.toLowerCase().includes(q) ||
          e.contract.category.toLowerCase().includes(q)
      );
    },
    getAllIds() {
      return Array.from(entries.keys());
    },
  };
}
