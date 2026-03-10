---
id: web-templates-provider-isolation
trigger: "when adding imports to provider libraries or showcase-engine"
confidence: 1.0
domain: architecture
source: local-repo-analysis
---

# Enforce Provider Isolation

## Action

- Provider libraries (`libs/providers/*`) may ONLY import from `@web-templates/contracts` and `@web-templates/utils`
- Providers NEVER import from each other (no radix importing from mui or vice versa)
- `showcase-engine` uses native HTML + Tailwind only — NEVER import Radix or MUI components
- Only the app (`apps/showcase`) imports from providers

## Evidence

- 0 cross-provider imports detected
- showcase-engine has 0 Radix/MUI imports (6 controls all use native HTML)
- Architecture designed to prevent circular dependencies
