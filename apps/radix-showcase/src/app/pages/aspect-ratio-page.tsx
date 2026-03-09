import { AspectRatio } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function AspectRatioPage() {
  return (
    <ComponentPage
      title="Aspect Ratio"
      description="Displays content within a desired ratio."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            {
              label: '16:9',
              preview: (
                <div style={{ width: '100%' }}>
                  <AspectRatio ratio={16 / 9}>
                    <div
                      style={{
                        width: '100%', height: '100%',
                        background: 'linear-gradient(135deg, var(--color-secondary), var(--color-accent))',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'white', fontWeight: 600, fontSize: 'var(--font-size-sm)',
                      }}
                    >
                      16:9
                    </div>
                  </AspectRatio>
                </div>
              ),
            },
            {
              label: '1:1 (Square)',
              preview: (
                <div style={{ width: '100%' }}>
                  <AspectRatio ratio={1}>
                    <div
                      style={{
                        width: '100%', height: '100%',
                        background: 'linear-gradient(135deg, var(--color-info), var(--color-secondary))',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'white', fontWeight: 600, fontSize: 'var(--font-size-sm)',
                      }}
                    >
                      1:1
                    </div>
                  </AspectRatio>
                </div>
              ),
            },
            {
              label: '4:3',
              preview: (
                <div style={{ width: '100%' }}>
                  <AspectRatio ratio={4 / 3}>
                    <div
                      style={{
                        width: '100%', height: '100%',
                        background: 'linear-gradient(135deg, var(--color-success), var(--color-info))',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'white', fontWeight: 600, fontSize: 'var(--font-size-sm)',
                      }}
                    >
                      4:3
                    </div>
                  </AspectRatio>
                </div>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<AspectRatio.Root ratio={16 / 9}>
  <img src="..." alt="..." style={{ objectFit: 'cover' }} />
</AspectRatio.Root>`}
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
