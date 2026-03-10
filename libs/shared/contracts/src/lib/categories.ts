import type { ComponentCategory } from './component-registry.types';

export interface CategoryDefinition {
  id: ComponentCategory;
  label: string;
  description: string;
  icon: string; // lucide icon name
}

export const CATEGORIES: CategoryDefinition[] = [
  { id: 'inputs', label: 'Inputs', description: 'Form controls and user input', icon: 'text-cursor-input' },
  { id: 'display', label: 'Display', description: 'Content presentation', icon: 'layout-grid' },
  { id: 'feedback', label: 'Feedback', description: 'User feedback and status', icon: 'message-circle' },
  { id: 'navigation', label: 'Navigation', description: 'Navigation and routing', icon: 'compass' },
  { id: 'overlay', label: 'Overlay', description: 'Modals, tooltips, and popovers', icon: 'layers' },
  { id: 'layout', label: 'Layout', description: 'Page structure and containers', icon: 'layout' },
];
