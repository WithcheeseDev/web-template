import { AlertDialog, Button } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function AlertDialogPage() {
  return (
    <ComponentPage
      title="Alert Dialog"
      description="A modal dialog that interrupts the user with important content and expects a response. Requires explicit user action to dismiss."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            {
              label: 'Default',
              preview: (
                <AlertDialog
                  trigger={<Button>Delete Account</Button>}
                  title="Are you absolutely sure?"
                  description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
                  cancelLabel="Cancel"
                  actionLabel="Yes, delete"
                />
              ),
            },
            {
              label: 'Custom Labels',
              preview: (
                <AlertDialog
                  trigger={<Button variant="outlined">Reset Settings</Button>}
                  title="Reset all settings?"
                  description="All your custom settings will be restored to their default values."
                  cancelLabel="Keep settings"
                  actionLabel="Reset"
                />
              ),
            },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<AlertDialog.Root>
  <AlertDialog.Trigger asChild>
    <Button />
  </AlertDialog.Trigger>
  <AlertDialog.Portal>
    <AlertDialog.Overlay />
    <AlertDialog.Content>
      <AlertDialog.Title />
      <AlertDialog.Description />
      <AlertDialog.Cancel asChild>
        <Button />
      </AlertDialog.Cancel>
      <AlertDialog.Action asChild>
        <Button />
      </AlertDialog.Action>
    </AlertDialog.Content>
  </AlertDialog.Portal>
</AlertDialog.Root>`}
        />
      </Section>

      <Section title="Design Tokens">
        <TokensPanel categories={commonTokens} />
      </Section>

      <Section title="Animation Specs">
        <AnimationSpecsPanel
          transitions={commonTransitions}
          keyframes={['overlayShow', 'contentShow']}
        />
      </Section>
    </ComponentPage>
  );
}
