import { Popover, Button } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function PopoverPage() {
  return (
    <ComponentPage
      title="Popover"
      description="Displays rich content in a portal, triggered by a button."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            {
              label: 'Bottom',
              preview: (
                <Popover trigger={<Button variant="outlined">Open Popover</Button>} side="bottom">
                  <p style={{ fontSize: 'var(--font-size-sm)', margin: 0 }}>
                    Popover content displayed at the bottom.
                  </p>
                </Popover>
              ),
            },
            {
              label: 'Top',
              preview: (
                <Popover trigger={<Button variant="outlined">Top</Button>} side="top">
                  <p style={{ fontSize: 'var(--font-size-sm)', margin: 0 }}>
                    Popover on top.
                  </p>
                </Popover>
              ),
            },
            {
              label: 'Right',
              preview: (
                <Popover trigger={<Button variant="outlined">Right</Button>} side="right">
                  <p style={{ fontSize: 'var(--font-size-sm)', margin: 0 }}>
                    Popover on the right.
                  </p>
                </Popover>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<Popover.Root>
  <Popover.Trigger asChild>
    <Button />
  </Popover.Trigger>
  <Popover.Portal>
    <Popover.Content side="bottom" sideOffset={5}>
      {/* content */}
      <Popover.Close />
      <Popover.Arrow />
    </Popover.Content>
  </Popover.Portal>
</Popover.Root>`}
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
