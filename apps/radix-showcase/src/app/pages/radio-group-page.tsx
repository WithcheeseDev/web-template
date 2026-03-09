import { RadioGroup } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function RadioGroupPage() {
  return (
    <ComponentPage
      title="Radio Group"
      description="A set of checkable buttons, known as radio buttons, where no more than one can be checked at a time."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            {
              label: 'Vertical',
              preview: (
                <RadioGroup
                  defaultValue="opt1"
                  options={[
                    { value: 'opt1', label: 'Option 1' },
                    { value: 'opt2', label: 'Option 2' },
                    { value: 'opt3', label: 'Option 3' },
                  ]}
                />
              ),
            },
            {
              label: 'Horizontal',
              preview: (
                <RadioGroup
                  defaultValue="sm"
                  orientation="horizontal"
                  options={[
                    { value: 'sm', label: 'Small' },
                    { value: 'md', label: 'Medium' },
                    { value: 'lg', label: 'Large' },
                  ]}
                />
              ),
            },
            {
              label: 'With Disabled',
              preview: (
                <RadioGroup
                  defaultValue="a"
                  options={[
                    { value: 'a', label: 'Active' },
                    { value: 'b', label: 'Disabled', disabled: true },
                    { value: 'c', label: 'Another' },
                  ]}
                />
              ),
            },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<RadioGroup.Root defaultValue="opt1">
  <RadioGroup.Item value="opt1">
    <RadioGroup.Indicator />
  </RadioGroup.Item>
  <Label htmlFor="opt1">Option 1</Label>
</RadioGroup.Root>`}
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
