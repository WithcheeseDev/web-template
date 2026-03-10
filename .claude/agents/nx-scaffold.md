---
name: nx-scaffold
description: Scaffolds NX monorepo with UI library apps
tools: Bash, Write, Read
---

Steps:

1. npx create-nx-workspace@latest showcase --preset=next
2. nx g @nx/react:lib ui-radix --bundler=vite
3. nx g @nx/react:lib ui-mui --bundler=vite
4. nx g @nx/react:lib ui-shared
5. Configure tsconfig paths + barrel exports per lib
6. Set up TailwindCSS in shared + apps
