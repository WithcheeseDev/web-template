---
id: web-templates-naming-conventions
trigger: "when creating new files in the project"
confidence: 0.95
domain: code-organization
source: local-repo-analysis
---

# Follow Project Naming Conventions

## Action

| Artifact | Convention | Example |
|----------|-----------|---------|
| Components | PascalCase.tsx | `ComponentCard.tsx` |
| Pages | PascalCase + `Page` suffix, default export | `CatalogPage.tsx` |
| Hooks | camelCase with `use` prefix | `usePropEditor.ts` |
| Stores | camelCase with `Store` suffix | `providerStore.ts` |
| Contracts | kebab-case + `.contract.ts` | `button.contract.ts` |
| Code templates | kebab-case + `.template.ts` | `button.template.ts` |
| Provider adapters | `{Provider}{Component}.tsx` | `RadixButton.tsx` |

## Evidence

- 10/10 components follow PascalCase
- 3/3 pages follow PascalCase + `Page` suffix with default export
- 3/3 hooks follow `use*` prefix
- 2/2 stores follow `*Store` suffix
- 9/9 contracts follow `*.contract.ts` pattern
- 18/18 code templates follow `*.template.ts` pattern
