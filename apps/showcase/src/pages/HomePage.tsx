import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Palette, Code2, Repeat } from 'lucide-react';
import { PageWrapper } from '../components/PageWrapper';

const FEATURES = [
  {
    icon: Layers,
    title: 'Multi-Provider',
    description: 'Compare Radix UI and MUI side by side with runtime provider switching.',
  },
  {
    icon: Palette,
    title: 'Live Prop Editor',
    description: 'Storybook-style controls to tweak every prop and see changes in real time.',
  },
  {
    icon: Code2,
    title: 'Code Snippets',
    description: 'Auto-generated, copy-ready code for both providers, updated as you edit props.',
  },
  {
    icon: Repeat,
    title: 'Contract-Based',
    description: 'Each component shares one contract. Providers just implement the interface.',
  },
];

export default function HomePage() {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">UI Component </span>
            <span className="text-primary">Showcase</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Explore and compare UI components across Radix UI and MUI.
            Switch providers, tweak props, and copy code — all in one place.
          </p>
          <div className="mt-8">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-colors no-underline"
            >
              Browse Catalog
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="glass-card p-6">
              <feature.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-foreground font-semibold text-lg mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
