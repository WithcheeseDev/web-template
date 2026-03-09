import { useToast, Button } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function ToastPage() {
  const { showToast, ToastContainer } = useToast();

  return (
    <ComponentPage
      title="Toast"
      description="A succinct message that is displayed temporarily. Also known as a notification or snackbar."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            {
              label: 'Simple',
              preview: (
                <Button onClick={() => showToast({ title: 'Event has been created.' })}>
                  Show Toast
                </Button>
              ),
            },
            {
              label: 'With Description',
              preview: (
                <Button
                  variant="outlined"
                  onClick={() =>
                    showToast({
                      title: 'Scheduled',
                      description: 'Your meeting has been scheduled for tomorrow at 3pm.',
                    })
                  }
                >
                  Schedule
                </Button>
              ),
            },
            {
              label: 'With Action',
              preview: (
                <Button
                  variant="ghost"
                  onClick={() =>
                    showToast({
                      title: 'Item deleted',
                      description: 'The item has been removed.',
                      actionLabel: 'Undo',
                    })
                  }
                >
                  Delete
                </Button>
              ),
            },
          ]}
        />
      </Section>

      <ToastContainer />

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<Toast.Provider swipeDirection="right">
  <Toast.Root open={open} onOpenChange={setOpen}>
    <Toast.Title />
    <Toast.Description />
    <Toast.Action altText="Undo" asChild>
      <Button />
    </Toast.Action>
  </Toast.Root>
  <Toast.Viewport />
</Toast.Provider>`}
        />
      </Section>

      <Section title="Design Tokens">
        <TokensPanel categories={commonTokens} />
      </Section>

      <Section title="Animation Specs">
        <AnimationSpecsPanel
          transitions={commonTransitions}
          keyframes={['toastSlideIn', 'toastSwipeOut', 'fadeOut']}
        />
      </Section>
    </ComponentPage>
  );
}
