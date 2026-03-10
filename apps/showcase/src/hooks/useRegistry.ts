import { useMemo } from 'react';
import {
  ALL_CONTRACTS,
  buildRegistry,
  type ComponentRegistry,
} from '@web-templates/contracts';
import { radixRegistration } from '@web-templates/ui-radix';
import { muiRegistration } from '@web-templates/ui-mui';

export function useRegistry(): ComponentRegistry {
  return useMemo(
    () => buildRegistry(ALL_CONTRACTS, radixRegistration, muiRegistration),
    []
  );
}
