---
id: web-templates-adapter-pattern
trigger: "when creating provider component adapters"
confidence: 0.95
domain: code-patterns
source: local-repo-analysis
---

# Use Record<string, unknown> Adapter Pattern

## Action

All provider adapter components accept `Record<string, unknown>` as props and destructure with defaults matching the contract:

```tsx
export function RadixButton(props: Record<string, unknown>) {
  const {
    children = 'Click me',
    variant = 'solid',
    size = 'md',
    disabled = false,
    color = 'primary',
  } = props;

  // Map abstract props to provider-specific props
  const sizeMap: Record<string, '1' | '2' | '3'> = { sm: '1', md: '2', lg: '3' };

  return <Button variant={variant as ...} size={sizeMap[size as string]} ... />;
}
```

Key rules:
- Always use `Record<string, unknown>` as prop type (not specific interfaces)
- Always provide defaults matching the contract's `defaultValue`
- Use mapping objects for value translation (e.g., `'solid'` -> `'contained'`)
- Cast destructured values when passing to typed provider props

## Evidence

- 18/18 adapter components follow this exact pattern
- Enables runtime provider switching with the same prop values
