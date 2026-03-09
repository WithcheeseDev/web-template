import { DropdownMenu, Button } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function DropdownMenuPage() {
  return (
    <ComponentPage
      title="Dropdown Menu"
      description="Displays a menu to the user, such as a set of actions or functions, triggered by a button."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            {
              label: 'Basic',
              preview: (
                <DropdownMenu
                  trigger={<Button variant="outlined">Options</Button>}
                  items={[
                    { label: 'New File', shortcut: 'Cmd+N' },
                    { label: 'Open', shortcut: 'Cmd+O' },
                    { label: 'Save', shortcut: 'Cmd+S' },
                  ]}
                />
              ),
            },
            {
              label: 'With Label',
              preview: (
                <DropdownMenu
                  trigger={<Button>Account</Button>}
                  label="My Account"
                  items={[
                    { label: 'Profile' },
                    { label: 'Settings' },
                    { label: 'Sign out' },
                  ]}
                />
              ),
            },
            {
              label: 'With Disabled Item',
              preview: (
                <DropdownMenu
                  trigger={<Button variant="ghost">More</Button>}
                  items={[
                    { label: 'Edit' },
                    { label: 'Duplicate' },
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
          code={`<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild>
    <Button />
  </DropdownMenu.Trigger>
  <DropdownMenu.Portal>
    <DropdownMenu.Content sideOffset={5}>
      <DropdownMenu.Label>Label</DropdownMenu.Label>
      <DropdownMenu.Item>Item</DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Arrow />
    </DropdownMenu.Content>
  </DropdownMenu.Portal>
</DropdownMenu.Root>`}
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
