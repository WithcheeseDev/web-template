import { Checkbox } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function CheckboxPage() {
  return (
    <ComponentPage
      title="Checkbox"
      description="A control that allows the user to toggle between checked and not checked."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            { label: 'Unchecked', preview: <Checkbox label="Accept terms" /> },
            { label: 'Checked', preview: <Checkbox label="Receive updates" defaultChecked /> },
            { label: 'Disabled', preview: <Checkbox label="Disabled" disabled /> },
            { label: 'Without Label', preview: <Checkbox /> },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<Checkbox.Root>
  <Checkbox.Indicator>
    {/* checkmark icon */}
  </Checkbox.Indicator>
</Checkbox.Root>
<Label htmlFor="checkbox-id">Label text</Label>`}
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
