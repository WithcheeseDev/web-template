import { Progress } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function ProgressPage() {
  return (
    <ComponentPage
      title="Progress"
      description="Displays an indicator showing the completion progress of a task."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            { label: '0%', preview: <div style={{ width: '100%' }}><Progress value={0} /></div> },
            { label: '25%', preview: <div style={{ width: '100%' }}><Progress value={25} /></div> },
            { label: '50%', preview: <div style={{ width: '100%' }}><Progress value={50} /></div> },
            { label: '75%', preview: <div style={{ width: '100%' }}><Progress value={75} /></div> },
            { label: '100%', preview: <div style={{ width: '100%' }}><Progress value={100} /></div> },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<Progress.Root value={50}>
  <Progress.Indicator
    style={{ transform: \`translateX(-50%)\` }}
  />
</Progress.Root>`}
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
