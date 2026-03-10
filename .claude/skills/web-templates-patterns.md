---
name: web-templates-patterns
description: Coding patterns extracted from web-templates NX monorepo showcase site
version: 1.0.0
source: local-git-analysis
analyzed_commits: 2
---

# Web Templates Patterns

## Commit Conventions

This project uses **bracketed prefix** commits with reviewer attribution:

```
[Initialize] NX monorepo showcase site with Radix UI + MUI provider switching (Reviewed by Kittisak M.)
```

Pattern: `[Action] Short description (Reviewed by Kittisak M.)`

Common prefixes:
- `[Initialize]` - Project/feature setup
- `[Feature]` - New feature
- `[Fix]` - Bug fix
- `[Update]` - Enhancement to existing feature
- `[Refactor]` - Code restructure

All commits include `(Reviewed by Kittisak M.)` suffix.

## Code Architecture

### Monorepo Structure

```
apps/showcase/          → Vite React SPA
libs/shared/contracts/  → Abstract contracts (no UI deps)
libs/shared/showcase-engine/ → UI controls (native HTML only)
libs/shared/utils/      → Pure utilities
libs/providers/radix/   → Radix UI implementations
libs/providers/mui/     → MUI implementations
```

### Dependency Rules

- `shared/*` libs have zero provider dependencies
- `providers/*` depend on `shared/contracts` only
- `providers/*` NEVER import from each other
- `showcase-engine` uses native HTML + Tailwind (no Radix/MUI) to avoid circular deps
- App imports everything through path aliases (`@web-templates/*`)

### Naming Conventions

| Artifact | Convention | Example |
|----------|-----------|---------|
| Components | PascalCase.tsx | `ComponentCard.tsx` |
| Pages | PascalCase + `Page` suffix | `CatalogPage.tsx` |
| Hooks | camelCase with `use` prefix | `usePropEditor.ts` |
| Stores | camelCase with `Store` suffix | `providerStore.ts` |
| Contracts | kebab-case + `.contract.ts` | `button.contract.ts` |
| Code templates | kebab-case + `.template.ts` | `button.template.ts` |
| Provider adapters | `{Provider}{Component}.tsx` | `RadixButton.tsx`, `MuiButton.tsx` |
| Provider wrappers | `{Provider}Provider.tsx` | `RadixProvider.tsx` |
| Barrel exports | `src/index.ts` | Always at lib root |

### File Organization

**App (showcase):**
```
src/
├── app/app.tsx          # Root routes + lazy loading
├── components/          # Shared UI components (PascalCase)
├── hooks/               # Custom hooks (use*.ts)
├── pages/               # Route pages (*Page.tsx, default export)
├── stores/              # Zustand stores (*Store.ts)
└── styles.css           # Tailwind v4 + @theme tokens
```

**Provider library pattern:**
```
src/lib/
├── {Provider}Provider.tsx    # Theme wrapper
├── components/               # Adapter components
├── code-templates/           # Code generation templates
└── registry.ts               # ProviderRegistration export
```

## Workflows

### Adding a New Component

Files changed together (co-change pattern):

1. `libs/shared/contracts/src/lib/components/{name}.contract.ts` - Define contract
2. `libs/shared/contracts/src/lib/components/all-contracts.ts` - Add to array
3. `libs/shared/contracts/src/index.ts` - Add barrel export
4. `libs/providers/radix/src/lib/components/Radix{Name}.tsx` - Radix adapter
5. `libs/providers/radix/src/lib/code-templates/{name}.template.ts` - Radix code template
6. `libs/providers/radix/src/lib/registry.ts` - Register Radix impl
7. `libs/providers/mui/src/lib/components/Mui{Name}.tsx` - MUI adapter
8. `libs/providers/mui/src/lib/code-templates/{name}.template.ts` - MUI code template
9. `libs/providers/mui/src/lib/registry.ts` - Register MUI impl

No app changes needed — the registry auto-discovers components.

### Adding a New Provider

1. `pnpm nx g @nx/react:library {name} --directory=libs/providers/{name}`
2. `tsconfig.base.json` - Add path alias
3. `apps/showcase/vite.config.mts` - Add Vite resolve alias
4. Create `{Name}Provider.tsx`, adapter components, code templates, `registry.ts`
5. `apps/showcase/src/hooks/useRegistry.ts` - Register provider
6. `libs/shared/contracts/src/lib/component-registry.types.ts` - Extend `UIProvider` union

### Adding a Showcase Engine Control

1. `libs/shared/showcase-engine/src/lib/controls/{Type}Control.tsx` - Native HTML only
2. `libs/shared/showcase-engine/src/lib/PropEditorEngine.tsx` - Add case to `renderControl`
3. `libs/shared/contracts/src/lib/prop-schema.types.ts` - Add type to `PropSchema` union

## Tech Stack Patterns

### Tailwind v4

- No `tailwind.config.js` — uses `@theme` directive in CSS
- CSS layers: `@layer theme, base, mui, components, utilities`
- MUI Emotion cache uses `prepend: true` so Tailwind utilities win
- `@source "../../../libs"` in styles.css to scan lib classes
- `cn()` utility from `@web-templates/utils` (clsx + tailwind-merge)

### Zustand

- Direct hook pattern — no `<Provider>` wrappers needed
- Stores in `src/stores/` directory
- Simple `create<State>((set) => ({...}))` pattern

### Routing

- React Router v6 with lazy-loaded pages
- `React.lazy(() => import('../pages/FooPage'))` + `<Suspense>`
- Layout component uses `<Outlet />` for nested routes
- Framer Motion `<AnimatePresence>` wraps routes

### Component Adapters

All provider adapters accept `Record<string, unknown>` props and destructure with defaults:

```tsx
export function RadixButton(props: Record<string, unknown>) {
  const { children = 'Click me', variant = 'solid', size = 'md' } = props;
  // Map abstract props to provider-specific props
}
```

### Code Templates

Functions that return JSX strings with correct imports:

```typescript
export function buttonCodeTemplate(props: Record<string, unknown>): string {
  return `import { Button } from '@radix-ui/themes';\n\n<Button ...>...</Button>`;
}
```

## Testing Patterns

- Framework: Vitest
- Test files: `*.spec.tsx` / `*.spec.ts` alongside source
- Test setup: `src/test-setup.ts` per project
- Coverage: `@vitest/coverage-v8`
- Environment: jsdom for React components
