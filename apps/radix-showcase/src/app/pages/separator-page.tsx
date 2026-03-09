import { Separator } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function SeparatorPage() {
  return (
    <ComponentPage
      title="Separator"
      description="Visually or semantically separates content."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            {
              label: 'Horizontal',
              preview: (
                <div style={{ width: '100%' }}>
                  <p style={{ fontSize: 'var(--font-size-sm)', marginBottom: 8 }}>Above</p>
                  <Separator />
                  <p style={{ fontSize: 'var(--font-size-sm)', marginTop: 8 }}>Below</p>
                </div>
              ),
            },
            {
              label: 'Vertical',
              preview: (
                <div style={{ display: 'flex', alignItems: 'center', height: 40, gap: 8 }}>
                  <span style={{ fontSize: 'var(--font-size-sm)' }}>Left</span>
                  <Separator orientation="vertical" />
                  <span style={{ fontSize: 'var(--font-size-sm)' }}>Right</span>
                </div>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock code={`<Separator.Root orientation="horizontal" decorative />`} />
      </Section>

      <Section title="Design Tokens">
        <TokensPanel categories={commonTokens} />
      </Section>

      <Section title="Animation Specs">
        <AnimationSpecsPanel transitions={commonTransitions} keyframes={['fadeIn']} />
      </Section>
    </ComponentPage>
  );
}
