export function accordionCodeTemplate(props: Record<string, unknown>): string {
  const { type = 'single' } = props;

  return `// Radix Themes does not include a built-in Accordion.
// Use native <details>/<summary> or install @radix-ui/react-accordion.

<div style={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
  <details style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
    <summary style={{ padding: '12px 0', cursor: 'pointer', fontSize: 14, fontWeight: 500 }}>
      Introduction
    </summary>
    <div style={{ padding: '0 0 12px', fontSize: 14 }}>
      Content for introduction section.${type === 'multiple' ? ' (Multiple sections can be open)' : ''}
    </div>
  </details>
  <details style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
    <summary style={{ padding: '12px 0', cursor: 'pointer', fontSize: 14, fontWeight: 500 }}>
      Getting Started
    </summary>
    <div style={{ padding: '0 0 12px', fontSize: 14 }}>
      Content for getting started section.
    </div>
  </details>
  <details style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
    <summary style={{ padding: '12px 0', cursor: 'pointer', fontSize: 14, fontWeight: 500 }}>
      Advanced Usage
    </summary>
    <div style={{ padding: '0 0 12px', fontSize: 14 }}>
      Content for advanced usage section.
    </div>
  </details>
</div>`;
}
