import { Select } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function SelectPage() {
  return (
    <ComponentPage
      title="Select"
      description="Displays a list of options for the user to pick from, triggered by a button."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            {
              label: 'Basic',
              preview: (
                <Select
                  placeholder="Select a fruit..."
                  groups={[{
                    options: [
                      { value: 'apple', label: 'Apple' },
                      { value: 'banana', label: 'Banana' },
                      { value: 'grape', label: 'Grape' },
                    ],
                  }]}
                />
              ),
            },
            {
              label: 'Grouped',
              preview: (
                <Select
                  placeholder="Select a food..."
                  groups={[
                    {
                      label: 'Fruits',
                      options: [
                        { value: 'apple', label: 'Apple' },
                        { value: 'banana', label: 'Banana' },
                      ],
                    },
                    {
                      label: 'Vegetables',
                      options: [
                        { value: 'carrot', label: 'Carrot' },
                        { value: 'broccoli', label: 'Broccoli' },
                      ],
                    },
                  ]}
                />
              ),
            },
            {
              label: 'With Disabled Option',
              preview: (
                <Select
                  placeholder="Choose..."
                  groups={[{
                    options: [
                      { value: 'opt1', label: 'Option 1' },
                      { value: 'opt2', label: 'Option 2 (Disabled)', disabled: true },
                      { value: 'opt3', label: 'Option 3' },
                    ],
                  }]}
                />
              ),
            },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<Select.Root>
  <Select.Trigger>
    <Select.Value placeholder="Select..." />
    <Select.Icon />
  </Select.Trigger>
  <Select.Portal>
    <Select.Content>
      <Select.Viewport>
        <Select.Group>
          <Select.Label>Group</Select.Label>
          <Select.Item value="item">
            <Select.ItemText>Item</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
        </Select.Group>
      </Select.Viewport>
    </Select.Content>
  </Select.Portal>
</Select.Root>`}
        />
      </Section>

      <Section title="Design Tokens">
        <TokensPanel categories={commonTokens} />
      </Section>

      <Section title="Animation Specs">
        <AnimationSpecsPanel transitions={commonTransitions} keyframes={['scaleIn', 'fadeIn']} />
      </Section>
    </ComponentPage>
  );
}
