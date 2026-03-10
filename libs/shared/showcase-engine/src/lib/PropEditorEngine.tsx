import type { PropSchema } from '@web-templates/contracts';
import { StringControl } from './controls/StringControl';
import { NumberControl } from './controls/NumberControl';
import { BooleanControl } from './controls/BooleanControl';
import { SelectControl } from './controls/SelectControl';
import { ColorControl } from './controls/ColorControl';
import { RangeControl } from './controls/RangeControl';

interface PropEditorEngineProps {
  schema: PropSchema[];
  values: Record<string, unknown>;
  onChange: (propName: string, value: unknown) => void;
}

export function PropEditorEngine({
  schema,
  values,
  onChange,
}: PropEditorEngineProps) {
  const groups = new Map<string, PropSchema[]>();

  for (const prop of schema) {
    const group = prop.group || 'General';
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group)!.push(prop);
  }

  return (
    <div className="space-y-6">
      {Array.from(groups.entries()).map(([groupName, props]) => (
        <div key={groupName}>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
            {groupName}
          </h3>
          <div className="space-y-3">
            {props.map((prop) => renderControl(prop, values, onChange))}
          </div>
        </div>
      ))}
    </div>
  );
}

function renderControl(
  prop: PropSchema,
  values: Record<string, unknown>,
  onChange: (name: string, value: unknown) => void
) {
  if (prop.type === 'action') return null;

  const value = values[prop.name] ?? prop.defaultValue;

  switch (prop.type) {
    case 'string':
      return (
        <StringControl
          key={prop.name}
          label={prop.label}
          value={value as string}
          onChange={(v) => onChange(prop.name, v)}
          description={prop.description}
        />
      );
    case 'number':
      return (
        <NumberControl
          key={prop.name}
          label={prop.label}
          value={value as number}
          onChange={(v) => onChange(prop.name, v)}
          min={prop.min}
          max={prop.max}
          step={prop.step}
          description={prop.description}
        />
      );
    case 'boolean':
      return (
        <BooleanControl
          key={prop.name}
          label={prop.label}
          value={value as boolean}
          onChange={(v) => onChange(prop.name, v)}
          description={prop.description}
        />
      );
    case 'select':
      return (
        <SelectControl
          key={prop.name}
          label={prop.label}
          value={value as string}
          options={prop.options}
          onChange={(v) => onChange(prop.name, v)}
          description={prop.description}
        />
      );
    case 'color':
      return (
        <ColorControl
          key={prop.name}
          label={prop.label}
          value={value as string}
          options={prop.options}
          onChange={(v) => onChange(prop.name, v)}
          description={prop.description}
        />
      );
    case 'range':
      return (
        <RangeControl
          key={prop.name}
          label={prop.label}
          value={value as number}
          min={prop.min}
          max={prop.max}
          step={prop.step}
          onChange={(v) => onChange(prop.name, v)}
          description={prop.description}
        />
      );
    default:
      return null;
  }
}
