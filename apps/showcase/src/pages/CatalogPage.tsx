import { useMemo } from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { SearchBar } from '../components/SearchBar';
import { FilterBar } from '../components/FilterBar';
import { ComponentCard } from '../components/ComponentCard';
import { useRegistry } from '../hooks/useRegistry';
import { useCatalogStore } from '../stores/catalogStore';
import { useCatalogFilter } from '../hooks/useCatalogFilter';

export default function CatalogPage() {
  const registry = useRegistry();
  const {
    searchQuery,
    selectedCategory,
    selectedProvider,
    setSearchQuery,
    setSelectedCategory,
    setSelectedProvider,
  } = useCatalogStore();

  const allEntries = useMemo(
    () => Array.from(registry.entries.values()),
    [registry]
  );

  const filtered = useCatalogFilter(allEntries, {
    searchQuery,
    selectedCategory,
    selectedProvider,
  });

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-1">
            Component Catalog
          </h1>
          <p className="text-muted text-sm">
            {filtered.length} component{filtered.length !== 1 ? 's' : ''} available
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <FilterBar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedProvider={selectedProvider}
            onProviderChange={setSelectedProvider}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((entry) => (
            <ComponentCard key={entry.contract.id} entry={entry} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted">
            No components match your filters.
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
