export type PropControlType = 'string' | 'number' | 'boolean' | 'select' | 'color' | 'range' | 'action';

export interface PropSchemaBase {
  name: string;
  label: string;
  group?: string;
  description?: string;
}

export interface StringPropSchema extends PropSchemaBase {
  type: 'string';
  defaultValue: string;
}

export interface NumberPropSchema extends PropSchemaBase {
  type: 'number';
  defaultValue: number;
  min?: number;
  max?: number;
  step?: number;
}

export interface BooleanPropSchema extends PropSchemaBase {
  type: 'boolean';
  defaultValue: boolean;
}

export interface SelectPropSchema extends PropSchemaBase {
  type: 'select';
  options: { label: string; value: string }[];
  defaultValue: string;
}

export interface ColorPropSchema extends PropSchemaBase {
  type: 'color';
  options: { label: string; value: string }[];
  defaultValue: string;
}

export interface RangePropSchema extends PropSchemaBase {
  type: 'range';
  defaultValue: number;
  min: number;
  max: number;
  step: number;
}

export interface ActionPropSchema extends PropSchemaBase {
  type: 'action';
  defaultValue: null;
}

export type PropSchema =
  | StringPropSchema
  | NumberPropSchema
  | BooleanPropSchema
  | SelectPropSchema
  | ColorPropSchema
  | RangePropSchema
  | ActionPropSchema;
