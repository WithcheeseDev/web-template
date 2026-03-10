import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import { PageWrapper } from '../components/PageWrapper';
import { ProviderToggle } from '../components/ProviderToggle';
import { ComponentPreview } from '../components/ComponentPreview';
import { CodeSnippet } from '../components/CodeSnippet';
import { VariantSelector } from '../components/VariantSelector';
import { PropEditorEngine } from '@web-templates/showcase-engine';
import { generateCode } from '@web-templates/showcase-engine';
import { useRegistry } from '../hooks/useRegistry';
import { usePropEditor } from '../hooks/usePropEditor';
import { useProviderStore } from '../stores/providerStore';
import type { ComponentVariant } from '@web-templates/contracts';

export default function PlaygroundPage() {
  const { id } = useParams<{ id: string }>();
  const registry = useRegistry();
  const { activeProvider } = useProviderStore();
  const entry = id ? registry.getById(id) : undefined;
  const [activeVariant, setActiveVariant] = useState<string | null>(null);

  const { values, onChange, reset, applyOverride } = usePropEditor(
    entry?.contract.propSchema ?? []
  );

  if (!entry) {
    return (
      <PageWrapper>
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <p className="text-muted">Component not found.</p>
          <Link
            to="/catalog"
            className="text-primary hover:underline mt-4 inline-block"
          >
            Back to catalog
          </Link>
        </div>
      </PageWrapper>
    );
  }

  const { contract } = entry;
  const impl = entry.implementations[activeProvider];
  const code = impl
    ? generateCode(impl.codeTemplate, values)
    : '// No implementation for this provider';

  const handleVariantSelect = (variant: ComponentVariant) => {
    setActiveVariant(variant.name);
    applyOverride(variant.propsOverride);
  };

  const handleReset = () => {
    setActiveVariant(null);
    reset();
  };

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Link
              to="/catalog"
              className="p-2 rounded-lg hover:bg-white/5 text-muted hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                {contract.name}
              </h1>
              <p className="text-sm text-muted">{contract.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-muted hover:text-foreground bg-white/5 hover:bg-white/8 rounded-lg transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
            <ProviderToggle />
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Preview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="glass-card overflow-hidden">
              <div className="px-4 py-2 border-b border-white/6">
                <span className="text-xs text-muted font-medium uppercase tracking-wider">
                  Preview — {activeProvider === 'radix' ? 'Radix UI' : 'MUI'}
                </span>
              </div>
              <ComponentPreview
                entry={entry}
                provider={activeProvider}
                props={values}
              />
            </div>

            {/* Variants */}
            {contract.variants.length > 0 && (
              <div className="glass-card p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                  Variants
                </h3>
                <VariantSelector
                  variants={contract.variants}
                  activeVariant={activeVariant}
                  onSelect={handleVariantSelect}
                />
              </div>
            )}

            {/* Code */}
            <div>
              <CodeSnippet code={code} />
            </div>
          </div>

          {/* Prop Editor */}
          <div className="glass-card p-5 h-fit lg:sticky lg:top-24">
            <h2 className="text-sm font-semibold text-foreground mb-4">
              Props
            </h2>
            <PropEditorEngine
              schema={contract.propSchema}
              values={values}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
