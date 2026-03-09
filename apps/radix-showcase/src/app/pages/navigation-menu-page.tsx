import { NavigationMenu } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function NavigationMenuPage() {
  return (
    <ComponentPage
      title="Navigation Menu"
      description="A collection of links for navigating websites."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            {
              label: 'With Dropdown Sections',
              preview: (
                <div style={{ width: '100%', position: 'relative', minHeight: 200 }}>
                  <NavigationMenu
                    sections={[
                      {
                        trigger: 'Getting Started',
                        links: [
                          { label: 'Introduction', href: '#intro' },
                          { label: 'Installation', href: '#install' },
                          { label: 'Quick Start', href: '#quick-start' },
                        ],
                      },
                      {
                        trigger: 'Components',
                        links: [
                          { label: 'Button', href: '#button' },
                          { label: 'Dialog', href: '#dialog' },
                          { label: 'Tooltip', href: '#tooltip' },
                        ],
                      },
                    ]}
                  />
                </div>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<NavigationMenu.Root>
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Section</NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <NavigationMenu.Link href="#">Link</NavigationMenu.Link>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Indicator />
  </NavigationMenu.List>
  <NavigationMenu.Viewport />
</NavigationMenu.Root>`}
        />
      </Section>

      <Section title="Design Tokens">
        <TokensPanel categories={commonTokens} />
      </Section>

      <Section title="Animation Specs">
        <AnimationSpecsPanel transitions={commonTransitions} keyframes={['fadeIn', 'scaleIn']} />
      </Section>
    </ComponentPage>
  );
}
