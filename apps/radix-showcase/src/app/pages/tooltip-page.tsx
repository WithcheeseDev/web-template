import { Tooltip, Button } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function TooltipPage() {
  return (
    <ComponentPage
      title="Tooltip"
      description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            { label: 'Top', preview: <Tooltip content="Top tooltip" side="top"><Button variant="outlined">Top</Button></Tooltip> },
            { label: 'Right', preview: <Tooltip content="Right tooltip" side="right"><Button variant="outlined">Right</Button></Tooltip> },
            { label: 'Bottom', preview: <Tooltip content="Bottom tooltip" side="bottom"><Button variant="outlined">Bottom</Button></Tooltip> },
            { label: 'Left', preview: <Tooltip content="Left tooltip" side="left"><Button variant="outlined">Left</Button></Tooltip> },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger asChild>
      <Button />
    </Tooltip.Trigger>
    <Tooltip.Portal>
      <Tooltip.Content side="top" sideOffset={5}>
        Tooltip text
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip.Portal>
  </Tooltip.Root>
</Tooltip.Provider>`}
        />
      </Section>

      <Section title="Design Tokens">
        <TokensPanel categories={commonTokens} />
      </Section>

      <Section title="Animation Specs">
        <AnimationSpecsPanel transitions={commonTransitions} keyframes={['fadeIn', 'scaleIn']} />
      </Section>
    </ComponentPage>
  );
}
