---
id: web-templates-tailwind-v4
trigger: "when writing or modifying CSS or Tailwind classes"
confidence: 0.9
domain: styling
source: local-repo-analysis
---

# Use Tailwind v4 Patterns

## Action

- No `tailwind.config.js` — design tokens live in `@theme` directive in `apps/showcase/src/styles.css`
- Use CSS layers: `@layer theme, base, mui, components, utilities`
- Use `cn()` from `@web-templates/utils` for conditional class merging
- Use `@source` directive to scan lib directories for Tailwind classes
- Glass morphism styles: `.glass` and `.glass-card` classes defined in `@layer components`

### Theme tokens available:
`--color-background`, `--color-foreground`, `--color-primary`, `--color-primary-hover`, `--color-surface`, `--color-surface-hover`, `--color-surface-border`, `--color-muted`, `--color-accent`

### Fonts:
`--font-sans` (Inter), `--font-mono` (JetBrains Mono)

## Evidence

- Single `styles.css` file using `@theme` directive (no config file)
- All 10+ components use `cn()` for class merging
- `.glass-card` used across catalog cards and playground panels
