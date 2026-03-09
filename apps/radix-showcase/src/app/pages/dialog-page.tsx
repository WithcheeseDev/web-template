import { useState } from 'react';
import { Dialog, DialogPrimitive, Button } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function DialogPage() {
  const [nestedOpen, setNestedOpen] = useState(false);

  return (
    <ComponentPage
      title="Dialog"
      description="A modal dialog that interrupts the user with important content and expects a response."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            {
              label: 'Basic',
              preview: (
                <Dialog
                  trigger={<Button>Open Dialog</Button>}
                  title="Basic Dialog"
                  description="This is a simple dialog with a title and description."
                >
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                    Dialog body content goes here.
                  </p>
                </Dialog>
              ),
            },
            {
              label: 'With Form',
              preview: (
                <Dialog
                  trigger={<Button variant="outlined">Edit Profile</Button>}
                  title="Edit Profile"
                  description="Make changes to your profile here."
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    <label style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500 }}>
                      Name
                      <input
                        type="text"
                        defaultValue="John Doe"
                        style={{
                          display: 'block', width: '100%', marginTop: 4, padding: '6px 8px',
                          border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)',
                          fontSize: 'var(--font-size-sm)',
                        }}
                      />
                    </label>
                    <Button>Save Changes</Button>
                  </div>
                </Dialog>
              ),
            },
            {
              label: 'Nested',
              preview: (
                <Dialog
                  trigger={<Button variant="ghost">Open Outer</Button>}
                  title="Outer Dialog"
                  description="This dialog contains another dialog."
                >
                  <Dialog
                    trigger={<Button variant="outlined" size="sm">Open Inner</Button>}
                    title="Inner Dialog"
                    description="This is a nested dialog."
                    open={nestedOpen}
                    onOpenChange={setNestedOpen}
                  >
                    <p style={{ fontSize: 'var(--font-size-sm)' }}>Nested content here.</p>
                  </Dialog>
                </Dialog>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<Dialog.Root>
  <Dialog.Trigger asChild>
    <Button />
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      <Dialog.Title />
      <Dialog.Description />
      <Dialog.Close asChild>
        <Button />
      </Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>`}
        />
      </Section>

      <Section title="Design Tokens">
        <TokensPanel categories={commonTokens} />
      </Section>

      <Section title="Animation Specs">
        <AnimationSpecsPanel
          transitions={commonTransitions}
          keyframes={['overlayShow', 'contentShow', 'fadeIn']}
        />
      </Section>
    </ComponentPage>
  );
}
