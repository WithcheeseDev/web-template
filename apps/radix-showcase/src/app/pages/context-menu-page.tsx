import { ContextMenu } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function ContextMenuPage() {
  return (
    <ComponentPage
      title="Context Menu"
      description="Displays a menu at the pointer position, activated via right-click or long-press."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            {
              label: 'Basic (Right-click area)',
              preview: (
                <ContextMenu
                  trigger={
                    <div
                      style={{
                        border: '2px dashed var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        padding: 'var(--space-6) var(--space-8)',
                        textAlign: 'center',
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-text-muted)',
                        cursor: 'default',
                      }}
                    >
                      Right-click here
                    </div>
                  }
                  items={[
                    { label: 'Cut', shortcut: 'Cmd+X' },
                    { label: 'Copy', shortcut: 'Cmd+C' },
                    { label: 'Paste', shortcut: 'Cmd+V' },
                    { label: 'Delete', disabled: true },
                  ]}
                />
              ),
            },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<ContextMenu.Root>
  <ContextMenu.Trigger>
    {/* right-click target area */}
  </ContextMenu.Trigger>
  <ContextMenu.Portal>
    <ContextMenu.Content>
      <ContextMenu.Item>Item</ContextMenu.Item>
      <ContextMenu.Separator />
    </ContextMenu.Content>
  </ContextMenu.Portal>
</ContextMenu.Root>`}
        />
      </Section>

      <Section title="Design Tokens">
        <TokensPanel categories={commonTokens} />
      </Section>

      <Section title="Animation Specs">
        <AnimationSpecsPanel transitions={commonTransitions} keyframes={['scaleIn']} />
      </Section>
    </ComponentPage>
  );
}
