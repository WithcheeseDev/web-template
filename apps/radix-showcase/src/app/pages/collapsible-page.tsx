import { Collapsible } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function CollapsiblePage() {
  return (
    <ComponentPage
      title="Collapsible"
      description="An interactive component which expands/collapses a panel."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            {
              label: 'Default (Closed)',
              preview: (
                <div style={{ width: '100%' }}>
                  <Collapsible triggerLabel="Click to expand">
                    <p>This is the collapsible content. It can contain any elements.</p>
                  </Collapsible>
                </div>
              ),
            },
            {
              label: 'Default Open',
              preview: (
                <div style={{ width: '100%' }}>
                  <Collapsible triggerLabel="Initially open" defaultOpen>
                    <p>This content starts visible and can be collapsed.</p>
                  </Collapsible>
                </div>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<Collapsible.Root>
  <Collapsible.Trigger asChild>
    <Button />
  </Collapsible.Trigger>
  <Collapsible.Content>
    {/* collapsible content */}
  </Collapsible.Content>
</Collapsible.Root>`}
        />
      </Section>

      <Section title="Design Tokens">
        <TokensPanel categories={commonTokens} />
      </Section>

      <Section title="Animation Specs">
        <AnimationSpecsPanel
          transitions={commonTransitions}
          keyframes={['collapsibleSlideDown', 'collapsibleSlideUp']}
        />
      </Section>
    </ComponentPage>
  );
}
