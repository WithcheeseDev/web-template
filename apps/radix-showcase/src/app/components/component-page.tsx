import { type ReactNode } from 'react';
import styles from './component-page.module.css';

interface VariantItem {
  label: string;
  preview: ReactNode;
}

interface ComponentPageProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export function ComponentPage({ title, description, children }: ComponentPageProps) {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      {children}
    </div>
  );
}

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

interface VariantGalleryProps {
  variants: VariantItem[];
}

export function VariantGallery({ variants }: VariantGalleryProps) {
  return (
    <div className={styles.variantGrid}>
      {variants.map((v) => (
        <div key={v.label} className={styles.variantItem}>
          <span className={styles.variantLabel}>{v.label}</span>
          <div className={styles.variantPreview}>{v.preview}</div>
        </div>
      ))}
    </div>
  );
}

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  return <pre className={styles.codeBlock}>{code}</pre>;
}

interface TokenItem {
  name: string;
  value: string;
}

interface TokenCategory {
  category: string;
  tokens: TokenItem[];
}

interface TokensPanelProps {
  categories: TokenCategory[];
}

export function TokensPanel({ categories }: TokensPanelProps) {
  return (
    <div className={styles.panel}>
      <div className={styles.panelTitle}>Design Tokens</div>
      {categories.map((cat) => (
        <div key={cat.category}>
          <div className={styles.tokenCategory}>{cat.category}</div>
          <div className={styles.tokenGrid}>
            {cat.tokens.map((t) => (
              <div key={t.name} className={styles.tokenItem}>
                {t.name}: {t.value}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

interface AnimationSpec {
  name: string;
  value: string;
}

interface AnimationSpecsPanelProps {
  transitions: AnimationSpec[];
  keyframes: string[];
}

export function AnimationSpecsPanel({ transitions, keyframes }: AnimationSpecsPanelProps) {
  return (
    <div className={styles.panel}>
      <div className={styles.panelTitle}>Animation Specs</div>
      <div className={styles.tokenCategory}>Transitions</div>
      <div className={styles.tokenGrid}>
        {transitions.map((t) => (
          <div key={t.name} className={styles.tokenItem}>
            {t.name}: {t.value}
          </div>
        ))}
      </div>
      <div className={styles.tokenCategory}>Keyframes</div>
      <div className={styles.tokenGrid}>
        {keyframes.map((k) => (
          <div key={k} className={styles.tokenItem}>
            {k}
          </div>
        ))}
      </div>
    </div>
  );
}

// Shared tokens used across all component pages
export const commonTokens: TokenCategory[] = [
  {
    category: 'Colors',
    tokens: [
      { name: '--color-primary', value: '#0F172A' },
      { name: '--color-secondary', value: '#6366F1' },
      { name: '--color-surface', value: '#F8FAFC' },
      { name: '--color-border', value: '#E2E8F0' },
    ],
  },
  {
    category: 'Spacing',
    tokens: [
      { name: '--space-1', value: '4px' },
      { name: '--space-2', value: '8px' },
      { name: '--space-4', value: '16px' },
      { name: '--space-6', value: '24px' },
    ],
  },
  {
    category: 'Typography',
    tokens: [
      { name: '--font-size-sm', value: '0.875rem' },
      { name: '--font-weight-medium', value: '500' },
      { name: '--line-height-normal', value: '1.5' },
    ],
  },
  {
    category: 'Radius',
    tokens: [
      { name: '--radius-sm', value: '4px' },
      { name: '--radius-md', value: '8px' },
      { name: '--radius-full', value: '9999px' },
    ],
  },
];

export const commonTransitions: AnimationSpec[] = [
  { name: '--transition-fast', value: '120ms ease-out' },
  { name: '--transition-base', value: '200ms ease-in-out' },
  { name: '--transition-slow', value: '350ms cubic-bezier(0.16, 1, 0.3, 1)' },
];
