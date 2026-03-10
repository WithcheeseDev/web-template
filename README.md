# UI Component Showcase — Radix UI + MUI

A playground site that lets developers explore and compare UI components across **Radix UI** and **MUI**. Switch providers at runtime, tweak props with live controls, browse a searchable catalog, and copy ready-to-use code snippets.

Built as an [Nx](https://nx.dev) monorepo with React 19, Vite 7, Tailwind CSS v4, and TypeScript 5.9.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start the showcase app (http://localhost:4200)
pnpm nx dev showcase

# Build all projects
pnpm nx run-many -t build

# Lint all projects
pnpm nx run-many -t lint

# Run tests
pnpm nx run-many -t test

# Visualize the dependency graph
pnpm nx graph
```

## Project Structure

```
web-templates/
├── apps/
│   └── showcase/                    # Vite React SPA (port 4200)
├── libs/
│   ├── shared/
│   │   ├── contracts/               # Component contracts, prop schemas, registry builder
│   │   ├── showcase-engine/         # Prop editor engine + code generator
│   │   └── utils/                   # cn(), clipboard helpers
│   └── providers/
│       ├── radix/                   # Radix UI implementations + code templates
│       └── mui/                     # MUI implementations + code templates
├── nx.json                          # Nx configuration (inferred targets)
├── tsconfig.base.json               # Path aliases (@web-templates/*)
└── package.json                     # Workspace root
```

<!-- AUTO-GENERATED:COMMANDS:START -->
## Available Commands

All tasks run through Nx. Targets are inferred by plugins — no `project.json` needed.

| Command | Description |
|---------|-------------|
| `pnpm nx dev showcase` | Start dev server with HMR on `localhost:4200` |
| `pnpm nx build showcase` | Production build of the showcase app |
| `pnpm nx run-many -t build` | Build all 6 projects (app + 5 libs) |
| `pnpm nx run-many -t lint` | Lint all projects with ESLint |
| `pnpm nx run-many -t test` | Run Vitest unit tests across all projects |
| `pnpm nx run-many -t typecheck` | Type-check all projects |
| `pnpm nx graph` | Open interactive project dependency graph |
| `pnpm nx show project @org/showcase --web` | View showcase project details |
<!-- AUTO-GENERATED:COMMANDS:END -->

<!-- AUTO-GENERATED:LIBRARIES:START -->
## Libraries

| Library | Path Alias | Public API |
|---------|------------|------------|
| `@org/contracts` | `@web-templates/contracts` | `PropSchema`, `ComponentContract`, `ComponentRegistry`, `buildRegistry()`, `ALL_CONTRACTS`, `CATEGORIES`, 9 individual contracts |
| `@org/showcase-engine` | `@web-templates/showcase-engine` | `PropEditorEngine`, `generateCode()`, `CodeTemplateFunction` |
| `@org/utils` | `@web-templates/utils` | `cn()`, `copyToClipboard()` |
| `@org/radix` | `@web-templates/ui-radix` | `RadixProvider`, `radixRegistration` |
| `@org/mui` | `@web-templates/ui-mui` | `MuiProvider`, `muiRegistration` |
<!-- AUTO-GENERATED:LIBRARIES:END -->

<!-- AUTO-GENERATED:COMPONENTS:START -->
## Supported Components

9 components with both Radix UI and MUI implementations:

| Component | Category | Key Props |
|-----------|----------|-----------|
| Button | inputs | `children`, `variant` (solid/outline/ghost/soft), `size`, `disabled`, `color` |
| Input | inputs | `placeholder`, `value`, `disabled`, `type`, `label` |
| Checkbox | inputs | `checked`, `disabled`, `label` |
| Switch | inputs | `checked`, `disabled`, `label` |
| Select | inputs | `value`, `placeholder`, `disabled` |
| Tabs | navigation | `activeTab` |
| Dialog | overlay | `open`, `title`, `description` |
| Tooltip | overlay | `content`, `side` |
| Accordion | display | `type` (single/multiple) |
<!-- AUTO-GENERATED:COMPONENTS:END -->

## Architecture

**Key abstraction:** Each component has a `ComponentContract` (name, category, prop schema, variants). Both providers implement the same contract. The showcase app resolves the correct implementation at runtime based on the active provider.

```
Contract (what)  →  PropSchema[]  →  PropEditorEngine (controls)
                                  →  CodeGenerator (snippets)
Provider (how)   →  Component adapter + code template per contract
Registry         →  Merges contracts + providers into searchable Map
```

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19, React Router 6 |
| Build | Nx 22.5, Vite 7, TypeScript 5.9 |
| Styling | Tailwind CSS v4 (`@theme` tokens, CSS layers) |
| State | Zustand 5 |
| UI Providers | Radix UI Themes 3.3, MUI 6.4 |
| Animations | Framer Motion 12 |
| Code Highlight | prism-react-renderer 2 |
| Icons | Lucide React |

## Adding a New Component

1. Create a contract in `libs/shared/contracts/src/lib/components/{name}.contract.ts`
2. Add it to `all-contracts.ts` and the barrel export in `src/index.ts`
3. Create Radix adapter in `libs/providers/radix/src/lib/components/Radix{Name}.tsx`
4. Create Radix code template in `libs/providers/radix/src/lib/code-templates/{name}.template.ts`
5. Register in `libs/providers/radix/src/lib/registry.ts`
6. Repeat steps 3-5 for MUI in `libs/providers/mui/`
7. The component automatically appears in the catalog and playground

## Adding a New Provider

1. Generate a new library: `pnpm nx g @nx/react:library {name} --directory=libs/providers/{name}`
2. Add path alias in `tsconfig.base.json` and `apps/showcase/vite.config.mts`
3. Create a `{Name}Provider.tsx` theme wrapper
4. Implement all 9 component adapters + code templates
5. Export a `ProviderRegistration` from `registry.ts`
6. Register in `apps/showcase/src/hooks/useRegistry.ts`
7. Add to `UIProvider` union in contracts

## License

MIT
