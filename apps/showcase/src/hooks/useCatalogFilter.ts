import { useMemo } from 'react';
import type {
  ComponentCategory,
  ComponentRegistryEntry,
  UIProvider,
} from '@web-templates/contracts';

interface FilterOptions {
  searchQuery: string;
  selectedCategory: ComponentCategory | 'all';
  selectedProvider: UIProvider | 'all';
}

export function useCatalogFilter(
  entries: ComponentRegistryEntry[],
  options: FilterOptions
): ComponentRegistryEntry[] {
  return useMemo(() => {
    let result = entries;

    if (options.selectedCategory !== 'all') {
      result = result.filter(
        (e) => e.contract.category === options.selectedCategory
      );
    }

    if (options.selectedProvider !== 'all') {
      result = result.filter(
        (e) => e.implementations[options.selectedProvider as UIProvider]
      );
    }

    if (options.searchQuery.trim()) {
      const q = options.searchQuery.toLowerCase();
      result = result.filter(
        (e) =>
          e.contract.name.toLowerCase().includes(q) ||
          e.contract.description.toLowerCase().includes(q) ||
          e.contract.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [entries, options.searchQuery, options.selectedCategory, options.selectedProvider]);
}
