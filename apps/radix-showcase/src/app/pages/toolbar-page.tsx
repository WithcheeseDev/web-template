import {
  Toolbar, ToolbarButton, ToolbarSeparator, ToolbarLink,
  ToolbarToggleGroup, ToolbarToggleItem,
} from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function ToolbarPage() {
  return (
    <ComponentPage
      title="Toolbar"
      description="A container for grouping a set of controls, such as buttons, toggle groups, or dropdown menus."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            {
              label: 'Full Toolbar',
              preview: (
                <div style={{ width: '100%' }}>
                  <Toolbar>
                    <ToolbarToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
                      <ToolbarToggleItem value="left" aria-label="Left aligned">L</ToolbarToggleItem>
                      <ToolbarToggleItem value="center" aria-label="Center aligned">C</ToolbarToggleItem>
                      <ToolbarToggleItem value="right" aria-label="Right aligned">R</ToolbarToggleItem>
                    </ToolbarToggleGroup>
                    <ToolbarSeparator />
                    <ToolbarButton>B</ToolbarButton>
                    <ToolbarButton>I</ToolbarButton>
                    <ToolbarButton>U</ToolbarButton>
                    <ToolbarSeparator />
                    <ToolbarLink href="#">Link</ToolbarLink>
                  </Toolbar>
                </div>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<Toolbar.Root>
  <Toolbar.ToggleGroup type="single">
    <Toolbar.ToggleItem value="left">L</Toolbar.ToggleItem>
    <Toolbar.ToggleItem value="center">C</Toolbar.ToggleItem>
  </Toolbar.ToggleGroup>
  <Toolbar.Separator />
  <Toolbar.Button>Bold</Toolbar.Button>
  <Toolbar.Link href="#">Link</Toolbar.Link>
</Toolbar.Root>`}
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
