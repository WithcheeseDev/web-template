import { Avatar, AvatarGroup } from '@org/ui-radix';
import {
  ComponentPage, Section, VariantGallery, CodeBlock,
  TokensPanel, AnimationSpecsPanel, commonTokens, commonTransitions,
} from '../components/component-page';

export function AvatarPage() {
  return (
    <ComponentPage
      title="Avatar"
      description="An image element with a fallback for representing the user."
    >
      <Section title="Variant Gallery">
        <VariantGallery
          variants={[
            {
              label: 'Fallback',
              preview: <Avatar fallback="JD" />,
            },
            {
              label: 'Small',
              preview: <Avatar fallback="SM" size="sm" />,
            },
            {
              label: 'Medium',
              preview: <Avatar fallback="MD" size="md" />,
            },
            {
              label: 'Large',
              preview: <Avatar fallback="LG" size="lg" />,
            },
            {
              label: 'Extra Large',
              preview: <Avatar fallback="XL" size="xl" />,
            },
            {
              label: 'Group',
              preview: (
                <AvatarGroup>
                  <Avatar fallback="A" size="md" />
                  <Avatar fallback="B" size="md" />
                  <Avatar fallback="C" size="md" />
                  <Avatar fallback="D" size="md" />
                </AvatarGroup>
              ),
            },
          ]}
        />
      </Section>

      <Section title="Component Hierarchy">
        <CodeBlock
          code={`<Avatar.Root>
  <Avatar.Image src="..." alt="User" />
  <Avatar.Fallback delayMs={600}>
    JD
  </Avatar.Fallback>
</Avatar.Root>`}
        />
      </Section>

      <Section title="Design Tokens">
        <TokensPanel categories={commonTokens} />
      </Section>

      <Section title="Animation Specs">
        <AnimationSpecsPanel
          transitions={commonTransitions}
          keyframes={['fadeIn']}
        />
      </Section>
    </ComponentPage>
  );
}
