---
id: web-templates-barrel-exports
trigger: "when creating or modifying a library's public API"
confidence: 0.95
domain: code-organization
source: local-repo-analysis
---

# Use Barrel Exports in Libraries

## Action

Every library must have a `src/index.ts` that re-exports all public API items. When adding new exports to a library, always update the barrel file.

```typescript
// libs/shared/utils/src/index.ts
export { cn } from './lib/cn';
export { copyToClipboard } from './lib/clipboard';
```

Never import from deep paths like `@web-templates/utils/src/lib/cn` — always use the barrel: `@web-templates/utils`.

## Evidence

- 5/5 libraries use `src/index.ts` barrel exports
- All app imports use path aliases through barrels
- No deep imports detected in codebase
