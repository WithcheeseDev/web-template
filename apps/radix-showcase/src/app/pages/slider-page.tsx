import { Slider } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function SliderPage() {
  return (
    <ComponentPage
      title="Slider"
      description="An input where the user selects a value from within a given range."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            { label: 'Default', preview: <div style={{ width: '100%' }}><Slider defaultValue={[50]} /></div> },
            { label: 'Range', preview: <div style={{ width: '100%' }}><Slider defaultValue={[25, 75]} /></div> },
            { label: 'Small Step', preview: <div style={{ width: '100%' }}><Slider defaultValue={[30]} step={10} /></div> },
            { label: 'Disabled', preview: <div style={{ width: '100%' }}><Slider defaultValue={[60]} disabled /></div> },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<Slider.Root defaultValue={[50]} max={100} step={1}>
  <Slider.Track>
    <Slider.Range />
  </Slider.Track>
  <Slider.Thumb />
</Slider.Root>`}
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
