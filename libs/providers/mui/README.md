# @web-templates/ui-mui

MUI provider and component implementations for the showcase.

## Public API

| Export | Description |
|--------|-------------|
| `MuiProvider` | Wraps children in Emotion `CacheProvider` + MUI `ThemeProvider` (dark theme, indigo primary) |
| `muiRegistration` | `ProviderRegistration` mapping all 9 contract IDs to MUI components + code templates |

## Components

`MuiButton`, `MuiInput`, `MuiCheckbox`, `MuiSwitch`, `MuiSelect`, `MuiTabs`, `MuiDialog`, `MuiTooltip`, `MuiAccordion`

Each adapter maps abstract contract props to MUI-specific props (e.g., `variant: 'solid'` -> MUI `variant="contained"`).

## CSS Layer Integration

MUI uses Emotion cache with `prepend: true` so its styles are inserted before Tailwind, allowing Tailwind utility classes to override MUI defaults.
