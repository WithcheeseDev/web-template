import { Menubar } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function MenubarPage() {
  return (
    <ComponentPage
      title="Menubar"
      description="A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            {
              label: 'Application Menubar',
              preview: (
                <Menubar
                  menus={[
                    {
                      label: 'File',
                      items: [
                        { label: 'New', shortcut: 'Cmd+N' },
                        { label: 'Open', shortcut: 'Cmd+O' },
                        { label: 'Save', shortcut: 'Cmd+S' },
                        { label: 'Close', shortcut: 'Cmd+W' },
                      ],
                    },
                    {
                      label: 'Edit',
                      items: [
                        { label: 'Undo', shortcut: 'Cmd+Z' },
                        { label: 'Redo', shortcut: 'Cmd+Shift+Z' },
                        { label: 'Cut', shortcut: 'Cmd+X' },
                        { label: 'Copy', shortcut: 'Cmd+C' },
                        { label: 'Paste', shortcut: 'Cmd+V' },
                      ],
                    },
                    {
                      label: 'View',
                      items: [
                        { label: 'Zoom In' },
                        { label: 'Zoom Out' },
                        { label: 'Full Screen' },
                      ],
                    },
                  ]}
                />
              ),
            },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<Menubar.Root>
  <Menubar.Menu>
    <Menubar.Trigger>File</Menubar.Trigger>
    <Menubar.Portal>
      <Menubar.Content>
        <Menubar.Item>New</Menubar.Item>
        <Menubar.Separator />
        <Menubar.Item>Save</Menubar.Item>
      </Menubar.Content>
    </Menubar.Portal>
  </Menubar.Menu>
</Menubar.Root>`}
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
