# @web-templates/utils

Shared utility functions.

## Public API

| Export | Description |
|--------|-------------|
| `cn(...inputs)` | Merges class names using `clsx` + `tailwind-merge` |
| `copyToClipboard(text)` | Async clipboard write with `execCommand` fallback, returns `boolean` |
