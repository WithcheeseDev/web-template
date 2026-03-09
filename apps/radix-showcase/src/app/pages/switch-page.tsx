import { Switch } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function SwitchPage() {
  return (
    <ComponentPage
      title="Switch"
      description="A control that allows the user to toggle between two states: on and off."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            { label: 'Default (Off)', preview: <Switch label="Airplane mode" /> },
            { label: 'Checked', preview: <Switch label="Dark mode" defaultChecked /> },
            { label: 'Disabled', preview: <Switch label="Disabled" disabled /> },
            { label: 'Without Label', preview: <Switch /> },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<Switch.Root>
  <Switch.Thumb />
</Switch.Root>
<Label htmlFor="switch-id">Label text</Label>`}
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
