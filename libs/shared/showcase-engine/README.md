# @web-templates/showcase-engine

Prop editor controls and code generation engine. Controls use native HTML + Tailwind only (no Radix/MUI) to avoid circular dependencies.

## Public API

| Export | Description |
|--------|-------------|
| `PropEditorEngine` | React component that reads `PropSchema[]`, groups by `group` field, renders type-appropriate controls |
| `generateCode()` | Calls a provider's code template function with current props, returns formatted string |
| `CodeTemplateFunction` | Type for code template functions: `(props) => string` |

## Controls

| Control | Schema Type | Element |
|---------|------------|---------|
| `StringControl` | `string` | `<input type="text">` |
| `NumberControl` | `number` | `<input type="number">` + stepper buttons |
| `BooleanControl` | `boolean` | Toggle switch (`<button>` with sliding dot) |
| `SelectControl` | `select` | `<select>` dropdown |
| `ColorControl` | `color` | Color swatch buttons |
| `RangeControl` | `range` | `<input type="range">` with value display |
