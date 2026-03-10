---
name: component-showcase
description: >
  Full workflow for building NX monorepo UI component showcase.
  Use when adding new components, providers, or layout sections.
tools: Bash, Read, Write, Glob, Grep
---

# Component Showcase Skill

## When activated:

1. Read existing component registry at tools/registry.json
2. Identify which provider is being worked on
3. Scaffold component in correct lib (libs/ui-{provider}/)
4. Create shared prop interface in libs/ui-shared/
5. Generate showcase page entry in apps/showcase/
6. Register component in manifest
7. Run: nx affected --target=build to verify

## File naming convention:

- Component: PascalCase (Button.tsx)
- Showcase page: kebab-case (/components/button)
- Storybook story: Button.stories.tsx

## Provider parity rule:

Every component in ui-radix MUST have an equivalent in ui-mui
with the identical prop interface from ui-shared.

```

---

## 🔄 Development Loop
```

/plan → scaffold NX libs
→ run component-showcase skill per component
→ code-reviewer agent validates
→ hooks rebuild registry + run build check
→ iterate
