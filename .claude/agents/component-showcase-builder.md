---
name: component-showcase-builder
description: >
  Creates a showcase entry for a UI component across multiple
  providers. Outputs: component file, variant stories, 
  prop schema, and live preview registration.

inputs:
  - componentName: string
  - providers: [radix | mui | custom]
  - variants: [default, outlined, ghost, destructive, ...]
  - hasLiveEditor: boolean
---

For each component:

1. Build in libs/ui-{provider}/{componentName}/
2. Export typed props interface from ui-shared
3. Register in showcase registry (JSON manifest)
4. Auto-generate preview page in apps/showcase/pages/
