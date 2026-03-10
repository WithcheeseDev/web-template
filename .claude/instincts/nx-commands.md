---
id: web-templates-nx-commands
trigger: "when running build, lint, test, or dev commands"
confidence: 1.0
domain: tooling
source: local-repo-analysis
---

# Always Use pnpm nx for Tasks

## Action

Always prefix nx commands with `pnpm`:

```bash
pnpm nx dev showcase          # Dev server
pnpm nx build showcase        # Build single project
pnpm nx run-many -t build     # Build all
pnpm nx run-many -t lint      # Lint all
pnpm nx run-many -t test      # Test all
pnpm nx graph                 # Dependency graph
```

Never run Vite, ESLint, or Vitest directly — always go through Nx for caching and dependency ordering.

Targets are inferred by NX plugins (no `project.json` files):
- `@nx/vite/plugin` -> `build`, `dev`, `serve`, `preview`
- `@nx/eslint/plugin` -> `lint`
- `@nx/vitest` -> `test`
- `@nx/js/typescript` -> `typecheck`

## Evidence

- `package.json` has no custom scripts — all tasks via Nx
- `nx.json` uses plugin-inferred targets
- 0 `project.json` files in the workspace
