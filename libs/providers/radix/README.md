# @web-templates/ui-radix

Radix UI Themes provider and component implementations for the showcase.

## Public API

| Export | Description |
|--------|-------------|
| `RadixProvider` | Wraps children in `@radix-ui/themes` `<Theme>` (dark, indigo accent) |
| `radixRegistration` | `ProviderRegistration` mapping all 9 contract IDs to Radix components + code templates |

## Components

`RadixButton`, `RadixInput`, `RadixCheckbox`, `RadixSwitch`, `RadixSelect`, `RadixTabs`, `RadixDialog`, `RadixTooltip`, `RadixAccordion`

Each adapter maps abstract contract props to Radix-specific props (e.g., `size: 'md'` -> Radix `size="2"`).
