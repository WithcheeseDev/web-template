import { ScrollArea } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

export function ScrollAreaPage() {
  return (
    <ComponentPage
      title="Scroll Area"
      description="Augments native scroll functionality for custom, cross-browser styling."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            {
              label: 'Vertical',
              preview: (
                <ScrollArea height={200} width={200}>
                  <div style={{ padding: 'var(--space-3)' }}>
                    {items.map((item) => (
                      <div key={item} style={{ padding: 'var(--space-1) 0', fontSize: 'var(--font-size-sm)' }}>
                        {item}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<ScrollArea.Root>
  <ScrollArea.Viewport>
    {/* content */}
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar orientation="vertical">
    <ScrollArea.Thumb />
  </ScrollArea.Scrollbar>
  <ScrollArea.Corner />
</ScrollArea.Root>`}
        />
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
