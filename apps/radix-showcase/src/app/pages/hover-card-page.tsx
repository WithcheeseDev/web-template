import { HoverCard, Avatar } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function HoverCardPage() {
  return (
    <ComponentPage
      title="Hover Card"
      description="For sighted users to preview content available behind a link."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            {
              label: 'User Profile',
              preview: (
                <HoverCard
                  trigger={
                    <a href="#" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-secondary)' }}>
                      @johndoe
                    </a>
                  }
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    <Avatar fallback="JD" size="lg" />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 'var(--font-size-sm)' }}>John Doe</div>
                      <div style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-xs)' }}>
                        Software Engineer
                      </div>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', margin: 0 }}>
                      Building great user interfaces with React and TypeScript.
                    </p>
                  </div>
                </HoverCard>
              ),
            },
            {
              label: 'Bottom Placement',
              preview: (
                <HoverCard
                  trigger={
                    <span style={{ fontSize: 'var(--font-size-sm)', textDecoration: 'underline dotted', cursor: 'pointer' }}>
                      Hover for info
                    </span>
                  }
                  side="bottom"
                >
                  <p style={{ fontSize: 'var(--font-size-sm)', margin: 0 }}>
                    This card appears below the trigger element.
                  </p>
                </HoverCard>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<HoverCard.Root>
  <HoverCard.Trigger asChild>
    <a href="...">@username</a>
  </HoverCard.Trigger>
  <HoverCard.Portal>
    <HoverCard.Content side="bottom" sideOffset={5}>
      {/* card content */}
      <HoverCard.Arrow />
    </HoverCard.Content>
  </HoverCard.Portal>
</HoverCard.Root>`}
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
