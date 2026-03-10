---
id: web-templates-commit-convention
trigger: "when writing a commit message"
confidence: 1.0
domain: git
source: local-repo-analysis
---

# Use Bracketed Prefix Commits with Reviewer Attribution

## Action

Format commit messages as: `[Action] Short description (Reviewed by Kittisak M.)`

Prefixes:
- `[Initialize]` - Project/feature setup
- `[Feature]` - New feature
- `[Fix]` - Bug fix
- `[Update]` - Enhancement to existing feature
- `[Refactor]` - Code restructure

## Evidence

- Analyzed 2 commits
- 100% follow `[Prefix] message (Reviewed by Kittisak M.)` format
- Explicitly requested by team convention
