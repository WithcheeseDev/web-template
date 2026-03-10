<!-- nx configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

# General Guidelines for working with Nx

- For navigating/exploring the workspace, invoke the `nx-workspace` skill first - it has patterns for querying projects, targets, and dependencies
- When running tasks (for example build, lint, test, e2e, etc.), always prefer running the task through `nx` (i.e. `nx run`, `nx run-many`, `nx affected`) instead of using the underlying tooling directly
- Prefix nx commands with the workspace's package manager (e.g., `pnpm nx build`, `npm exec nx test`) - avoids using globally installed CLI
- You have access to the Nx MCP server and its tools, use them to help the user
- For Nx plugin best practices, check `node_modules/@nx/<plugin>/PLUGIN.md`. Not all plugins have this file - proceed without it if unavailable.
- NEVER guess CLI flags - always check nx_docs or `--help` first when unsure

## Scaffolding & Generators

- For scaffolding tasks (creating apps, libs, project structure, setup), ALWAYS invoke the `nx-generate` skill FIRST before exploring or calling MCP tools

## When to use nx_docs

- USE for: advanced config options, unfamiliar flags, migration guides, plugin configuration, edge cases
- DON'T USE for: basic generator syntax (`nx g @nx/react:app`), standard commands, things you already know
- The `nx-generate` skill handles generator discovery internally - don't call nx_docs just to look up generator syntax

<!-- nx configuration end-->

## Code Navigation (cclsp MCP)

This project has a `cclsp` MCP server with LSP-backed tools. Prefer these over grep/glob whenever the target is a **known symbol name** — they are faster and structurally accurate for TypeScript.

| Task | cclsp tool |
|------|-----------|
| Go to definition | `find_definition` |
| Find all usages | `find_references` |
| Find interface/class implementations | `find_implementation` |
| Search workspace by symbol name | `find_workspace_symbols` |
| Type info / JSDoc on hover | `get_hover` |
| Active TS/ESLint errors | `get_diagnostics` |
| Callers of a function | `get_incoming_calls` |
| Functions called by a function | `get_outgoing_calls` |
| Rename a symbol project-wide | `rename_symbol` / `rename_symbol_strict` |
| Restart LSP (after large edits) | `restart_server` |

Use grep/glob only for: content searches (string literals, comments, unknown token patterns) or when cclsp is unavailable.

# Project: UI Component Showcase

NX monorepo showcase site comparing Radix UI and MUI components at runtime.

## Workspace Layout

```
apps/showcase/          → Vite React SPA (port 4200)
libs/shared/contracts/  → Component contracts + prop schemas + registry
libs/shared/showcase-engine/ → Prop editor controls + code generator
libs/shared/utils/      → cn(), copyToClipboard()
libs/providers/radix/   → Radix UI adapters + code templates
libs/providers/mui/     → MUI adapters + code templates
```

## Path Aliases

| Alias | Target |
|-------|--------|
| `@web-templates/contracts` | `libs/shared/contracts/src/index.ts` |
| `@web-templates/showcase-engine` | `libs/shared/showcase-engine/src/index.ts` |
| `@web-templates/utils` | `libs/shared/utils/src/index.ts` |
| `@web-templates/ui-radix` | `libs/providers/radix/src/index.ts` |
| `@web-templates/ui-mui` | `libs/providers/mui/src/index.ts` |

Aliases are configured in both `tsconfig.base.json` (TypeScript) and `apps/showcase/vite.config.mts` (Vite resolve).

## Key Patterns

- **Targets inferred** by NX plugins — no `project.json` files
- **Barrel exports** — every lib has `src/index.ts` re-exporting public API
- **Tailwind v4** — `@theme` tokens in CSS, no `tailwind.config.js`
- **Zustand stores** — direct hooks, no providers
- **Lazy routing** — `React.lazy` + `Suspense` + `Spinner` fallback
- **CSS layers** — `@layer theme, base, mui, components, utilities` in `styles.css`; MUI uses Emotion cache with `prepend: true` so Tailwind utilities win
- **Showcase engine controls** use only native HTML + Tailwind (no Radix/MUI) to avoid circular deps
- **Providers can't import each other** — only shared libs

## Adding Components

1. Contract in `libs/shared/contracts/src/lib/components/{name}.contract.ts`
2. Add to `all-contracts.ts` + barrel export
3. Radix adapter + code template → register in `radix/registry.ts`
4. MUI adapter + code template → register in `mui/registry.ts`
5. Component appears automatically in catalog + playground

## Common Commands

```bash
pnpm nx dev showcase          # Dev server on localhost:4200
pnpm nx run-many -t build     # Build all 6 projects
pnpm nx run-many -t lint      # Lint all
pnpm nx run-many -t test      # Test all
pnpm nx graph                 # Dependency graph
```

## Project Skills & Instincts

### Skill — web-templates-patterns

**File:** `.claude/skills/web-templates-patterns.md`

Invoke this skill for comprehensive reference on: commit conventions, monorepo dependency rules, naming conventions, file organization, workflows (add component / add provider / add engine control), Tailwind v4 patterns, Zustand, routing, adapter pattern, and testing setup. It is the canonical deep-reference for this project.

### Instincts (auto-loaded rules)

The following instinct files in `.claude/instincts/` activate on the triggers listed. Do not re-derive these rules from first principles — read the instinct file when the trigger applies.

| File | Trigger domain | Key rule |
|------|---------------|----------|
| `commit-convention.md` | Writing commit messages | `[Action] message (Reviewed by Kittisak M.)` format |
| `naming-conventions.md` | Creating new files | PascalCase components, `use*` hooks, `*Store` stores, kebab `*.contract.ts` / `*.template.ts` |
| `barrel-exports.md` | Adding to a lib's public API | Always update `src/index.ts`; never import from deep paths |
| `provider-isolation.md` | Adding imports to providers or showcase-engine | Providers import contracts+utils only; no cross-provider imports; showcase-engine native HTML only |
| `component-workflow.md` | Adding a new UI component | Exactly 9 files across 3 libs; no app changes needed |
| `tailwind-v4.md` | Writing CSS or Tailwind classes | `@theme` in `styles.css`; `cn()` from `@web-templates/utils`; named CSS layers |
| `adapter-pattern.md` | Creating provider adapters | `Record<string, unknown>` props with contract-matching defaults; use value-mapping objects |
| `nx-commands.md` | Running build/lint/test/dev | Always `pnpm nx ...`; never invoke Vite/ESLint/Vitest directly |
