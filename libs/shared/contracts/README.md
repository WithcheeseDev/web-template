# @web-templates/contracts

Component contracts, prop schemas, and registry builder for the UI showcase.

## Public API

| Export | Description |
|--------|-------------|
| `PropSchema` | Union type for prop control definitions (string, number, boolean, select, color, range, action) |
| `ComponentContract` | Defines a component's name, category, prop schema, and variants |
| `ComponentRegistry` | Searchable Map of registry entries with `getById`, `getByCategory`, `search` |
| `buildRegistry()` | Merges contracts with provider implementations into a `ComponentRegistry` |
| `ALL_CONTRACTS` | Array of all 9 component contracts |
| `CATEGORIES` | Category definitions (inputs, display, feedback, navigation, overlay, layout) |
| `buttonContract`, `inputContract`, ... | Individual component contracts |

## Usage

```typescript
import { ALL_CONTRACTS, buildRegistry } from '@web-templates/contracts';
import { radixRegistration } from '@web-templates/ui-radix';

const registry = buildRegistry(ALL_CONTRACTS, radixRegistration);
const button = registry.getById('button');
```
