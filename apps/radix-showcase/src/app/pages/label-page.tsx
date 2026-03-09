import { Label } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function LabelPage() {
  return (
    <ComponentPage
      title="Label"
      description="Renders an accessible label associated with controls."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            { label: 'Default', preview: <Label>Username</Label> },
            { label: 'Required', preview: <Label required>Email</Label> },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock code={`<Label.Root htmlFor="input-id">Label text</Label.Root>`} />
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
