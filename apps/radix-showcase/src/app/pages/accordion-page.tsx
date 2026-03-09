import { Accordion } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function AccordionPage() {
  return (
    <ComponentPage
      title="Accordion"
      description="A vertically stacked set of interactive headings that each reveal an associated section of content."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            {
              label: 'Single (Collapsible)',
              preview: (
                <div style={{ width: '100%' }}>
                  <Accordion
                    type="single"
                    collapsible
                    items={[
                      { value: 'item-1', trigger: 'What is Radix UI?', content: 'Radix UI is a library of unstyled, accessible UI primitives for React.' },
                      { value: 'item-2', trigger: 'Is it accessible?', content: 'Yes. It follows the WAI-ARIA design patterns.' },
                      { value: 'item-3', trigger: 'Is it customizable?', content: 'Yes. You can style it however you want.' },
                    ]}
                  />
                </div>
              ),
            },
            {
              label: 'Multiple',
              preview: (
                <div style={{ width: '100%' }}>
                  <Accordion
                    type="multiple"
                    defaultValue={['item-1']}
                    items={[
                      { value: 'item-1', trigger: 'Section One', content: 'Content for section one.' },
                      { value: 'item-2', trigger: 'Section Two', content: 'Content for section two.' },
                    ]}
                  />
                </div>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<Accordion.Root type="single" collapsible>
  <Accordion.Item value="item-1">
    <Accordion.Header>
      <Accordion.Trigger />
    </Accordion.Header>
    <Accordion.Content>
      {/* content */}
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>`}
        />
      </Section>

      <Section title="Design Tokens">
        <TokensPanel categories={commonTokens} />
      </Section>

      <Section title="Animation Specs">
        <AnimationSpecsPanel
          transitions={commonTransitions}
          keyframes={['accordionSlideDown', 'accordionSlideUp']}
        />
      </Section>
    </ComponentPage>
  );
}
