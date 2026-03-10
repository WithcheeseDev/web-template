export type CodeTemplateFunction = (props: Record<string, unknown>) => string;

export function generateCode(
  codeTemplate: CodeTemplateFunction | undefined,
  props: Record<string, unknown>
): string {
  if (!codeTemplate) return '// No code template available for this provider';
  return codeTemplate(props);
}
