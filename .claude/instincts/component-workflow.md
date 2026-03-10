---
id: web-templates-component-workflow
trigger: "when adding a new UI component to the showcase"
confidence: 0.95
domain: workflow
source: local-repo-analysis
---

# Follow the 9-File Component Addition Workflow

## Action

Adding a new component requires exactly 9 file changes across 3 libraries:

### Contracts (3 files)
1. Create `libs/shared/contracts/src/lib/components/{name}.contract.ts`
2. Add to `libs/shared/contracts/src/lib/components/all-contracts.ts`
3. Add export to `libs/shared/contracts/src/index.ts`

### Radix Provider (3 files)
4. Create `libs/providers/radix/src/lib/components/Radix{Name}.tsx`
5. Create `libs/providers/radix/src/lib/code-templates/{name}.template.ts`
6. Register in `libs/providers/radix/src/lib/registry.ts`

### MUI Provider (3 files)
7. Create `libs/providers/mui/src/lib/components/Mui{Name}.tsx`
8. Create `libs/providers/mui/src/lib/code-templates/{name}.template.ts`
9. Register in `libs/providers/mui/src/lib/registry.ts`

No app changes needed — the registry auto-discovers new components.

## Evidence

- All 9 existing components follow this exact pattern
- 9 contracts, 9 Radix adapters, 9 MUI adapters, 18 code templates
- Registry uses `buildRegistry(ALL_CONTRACTS, ...providers)` for auto-discovery
