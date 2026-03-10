import { create } from 'zustand';
import type { ComponentCategory, UIProvider } from '@web-templates/contracts';

interface CatalogState {
  searchQuery: string;
  selectedCategory: ComponentCategory | 'all';
  selectedProvider: UIProvider | 'all';
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: ComponentCategory | 'all') => void;
  setSelectedProvider: (provider: UIProvider | 'all') => void;
}

export const useCatalogStore = create<CatalogState>((set) => ({
  searchQuery: '',
  selectedCategory: 'all',
  selectedProvider: 'all',
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedProvider: (provider) => set({ selectedProvider: provider }),
}));
