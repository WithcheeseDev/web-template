import type { PropSchema } from './prop-schema.types';
import type { ComponentType } from 'react';

export type UIProvider = 'radix' | 'mui';

export type ComponentCategory = 'inputs' | 'display' | 'feedback' | 'navigation' | 'overlay' | 'layout';

export interface ComponentVariant {
  name: string;
  label: string;
  propsOverride: Record<string, unknown>;
}

export interface ComponentContract {
  id: string;
  name: string;
  description: string;
  category: ComponentCategory;
  propSchema: PropSchema[];
  variants: ComponentVariant[];
}

export interface ComponentRegistryEntry {
  contract: ComponentContract;
  implementations: Partial<Record<UIProvider, {
    component: ComponentType<Record<string, unknown>>;
    codeTemplate: (props: Record<string, unknown>) => string;
  }>>;
}

export interface ComponentRegistry {
  entries: Map<string, ComponentRegistryEntry>;
  getById(id: string): ComponentRegistryEntry | undefined;
  getByCategory(category: ComponentCategory): ComponentRegistryEntry[];
  search(query: string): ComponentRegistryEntry[];
  getAllIds(): string[];
}
