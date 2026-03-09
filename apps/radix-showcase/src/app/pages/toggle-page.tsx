import { Toggle } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function TogglePage() {
  return (
    <ComponentPage
      title="Toggle"
      description="A two-state button that can be either on or off."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            { label: 'Default', preview: <Toggle>B</Toggle> },
            { label: 'Pressed', preview: <Toggle defaultPressed>I</Toggle> },
            { label: 'Disabled', preview: <Toggle disabled>U</Toggle> },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<Toggle.Root pressed={false} onPressedChange={setPres}>
  Bold
</Toggle.Root>`}
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
