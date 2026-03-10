// Radix Themes doesn't have a built-in Accordion, so we use a simple styled version
export function RadixAccordion(props: Record<string, unknown>) {
  const { type = 'single' } = props;

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}
    >
      {['Introduction', 'Getting Started', 'Advanced Usage'].map(
        (title, i) => (
          <details
            key={i}
            style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
          >
            <summary
              style={{
                padding: '12px 0',
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 500,
                color: '#f5f5f5',
              }}
            >
              {title}
            </summary>
            <div
              style={{ padding: '0 0 12px', fontSize: 14, color: '#a1a1aa' }}
            >
              Content for {title.toLowerCase()} section.{' '}
              {type === 'multiple'
                ? '(Multiple sections can be open)'
                : '(Only one section at a time)'}
            </div>
          </details>
        )
      )}
    </div>
  );
}
