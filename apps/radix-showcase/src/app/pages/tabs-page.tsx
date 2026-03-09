import { Tabs } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function TabsPage() {
  return (
    <ComponentPage
      title="Tabs"
      description="A set of layered sections of content, known as tab panels, that display one panel of content at a time."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            {
              label: 'Default',
              preview: (
                <div style={{ width: '100%' }}>
                  <Tabs
                    items={[
                      { value: 'account', label: 'Account', content: 'Manage your account settings.' },
                      { value: 'password', label: 'Password', content: 'Change your password here.' },
                      { value: 'notifications', label: 'Notifications', content: 'Configure notification preferences.' },
                    ]}
                  />
                </div>
              ),
            },
            {
              label: 'Two Tabs',
              preview: (
                <div style={{ width: '100%' }}>
                  <Tabs
                    items={[
                      { value: 'overview', label: 'Overview', content: 'Overview content.' },
                      { value: 'analytics', label: 'Analytics', content: 'Analytics content.' },
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
          code={`<Tabs.Root defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">Content 1</Tabs.Content>
  <Tabs.Content value="tab2">Content 2</Tabs.Content>
</Tabs.Root>`}
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
