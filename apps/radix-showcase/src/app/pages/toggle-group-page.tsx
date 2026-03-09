import { ToggleGroup } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function ToggleGroupPage() {
  return (
    <ComponentPage
      title="Toggle Group"
      description="A set of two-state buttons that can be toggled on or off."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            {
              label: 'Single',
              preview: (
                <ToggleGroup
                  type="single"
                  defaultValue="center"
                  items={[
                    { value: 'left', label: 'L' },
                    { value: 'center', label: 'C' },
                    { value: 'right', label: 'R' },
                  ]}
                />
              ),
            },
            {
              label: 'Multiple',
              preview: (
                <ToggleGroup
                  type="multiple"
                  defaultValue={['bold']}
                  items={[
                    { value: 'bold', label: 'B' },
                    { value: 'italic', label: 'I' },
                    { value: 'underline', label: 'U' },
                  ]}
                />
              ),
            },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<ToggleGroup.Root type="single" defaultValue="center">
  <ToggleGroup.Item value="left">Left</ToggleGroup.Item>
  <ToggleGroup.Item value="center">Center</ToggleGroup.Item>
  <ToggleGroup.Item value="right">Right</ToggleGroup.Item>
</ToggleGroup.Root>`}
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
