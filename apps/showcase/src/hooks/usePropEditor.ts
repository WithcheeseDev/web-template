import { useState, useCallback, useMemo } from 'react';
import type { PropSchema } from '@web-templates/contracts';

export function usePropEditor(schema: PropSchema[]) {
  const defaults = useMemo(() => {
    const d: Record<string, unknown> = {};
    for (const prop of schema) {
      d[prop.name] = prop.defaultValue;
    }
    return d;
  }, [schema]);

  const [values, setValues] = useState<Record<string, unknown>>(defaults);

  const onChange = useCallback((propName: string, value: unknown) => {
    setValues((prev) => ({ ...prev, [propName]: value }));
  }, []);

  const reset = useCallback(() => {
    setValues(defaults);
  }, [defaults]);

  const applyOverride = useCallback(
    (override: Record<string, unknown>) => {
      setValues((prev) => ({ ...prev, ...override }));
    },
    []
  );

  return { values, onChange, reset, applyOverride };
}
