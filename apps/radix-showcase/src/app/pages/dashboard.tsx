import { Link } from 'react-router-dom';
import {
  Button, Avatar, Checkbox, Switch, Progress, Slider, Toggle, Separator,
} from '@org/ui-radix';
import styles from './dashboard.module.css';

interface CardData {
  name: string;
  path: string;
  description: string;
  preview: React.ReactNode;
}

const cards: CardData[] = [
  {
    name: 'Accordion',
    path: '/accordion',
    description: 'Collapsible content sections',
    preview: <span style={{ fontSize: '1.5rem' }}>&#9776;</span>,
  },
  {
    name: 'Alert Dialog',
    path: '/alert-dialog',
    description: 'Modal confirmation dialogs',
    preview: <Button variant="outlined" size="sm">Delete</Button>,
  },
  {
    name: 'Aspect Ratio',
    path: '/aspect-ratio',
    description: 'Maintain consistent aspect ratios',
    preview: <div style={{ width: 48, height: 27, background: 'var(--color-secondary)', borderRadius: 'var(--radius-sm)' }} />,
  },
  {
    name: 'Avatar',
    path: '/avatar',
    description: 'User profile images with fallback',
    preview: <Avatar fallback="JD" size="sm" />,
  },
  {
    name: 'Checkbox',
    path: '/checkbox',
    description: 'Toggle on/off states',
    preview: <Checkbox defaultChecked />,
  },
  {
    name: 'Collapsible',
    path: '/collapsible',
    description: 'Show/hide content sections',
    preview: <span style={{ fontSize: '1.2rem' }}>&#9660;</span>,
  },
  {
    name: 'Context Menu',
    path: '/context-menu',
    description: 'Right-click contextual actions',
    preview: <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Right-click</span>,
  },
  {
    name: 'Dialog',
    path: '/dialog',
    description: 'Modal overlay dialogs',
    preview: <Button size="sm">Open</Button>,
  },
  {
    name: 'Dropdown Menu',
    path: '/dropdown-menu',
    description: 'Trigger-based dropdown menus',
    preview: <Button variant="outlined" size="sm">Menu &#9660;</Button>,
  },
  {
    name: 'Hover Card',
    path: '/hover-card',
    description: 'Content on hover',
    preview: <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-secondary)' }}>Hover me</span>,
  },
  {
    name: 'Label',
    path: '/label',
    description: 'Accessible form labels',
    preview: <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500 }}>Label</span>,
  },
  {
    name: 'Menubar',
    path: '/menubar',
    description: 'Application menu bar',
    preview: <span style={{ fontSize: 'var(--font-size-xs)' }}>File | Edit | View</span>,
  },
  {
    name: 'Navigation Menu',
    path: '/navigation-menu',
    description: 'Site navigation component',
    preview: <span style={{ fontSize: 'var(--font-size-xs)' }}>Nav</span>,
  },
  {
    name: 'Popover',
    path: '/popover',
    description: 'Floating content panels',
    preview: <Button variant="ghost" size="sm">Info</Button>,
  },
  {
    name: 'Progress',
    path: '/progress',
    description: 'Loading progress indicators',
    preview: <div style={{ width: 80 }}><Progress value={65} /></div>,
  },
  {
    name: 'Radio Group',
    path: '/radio-group',
    description: 'Single option selection',
    preview: <span style={{ fontSize: '1.2rem' }}>&#9673;</span>,
  },
  {
    name: 'Scroll Area',
    path: '/scroll-area',
    description: 'Custom scrollable areas',
    preview: <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Scroll</span>,
  },
  {
    name: 'Select',
    path: '/select',
    description: 'Custom dropdown select',
    preview: <span style={{ fontSize: 'var(--font-size-xs)', border: '1px solid var(--color-border)', padding: '2px 8px', borderRadius: 'var(--radius-sm)' }}>Select...</span>,
  },
  {
    name: 'Separator',
    path: '/separator',
    description: 'Visual content divider',
    preview: <div style={{ width: 48 }}><Separator /></div>,
  },
  {
    name: 'Slider',
    path: '/slider',
    description: 'Range value input',
    preview: <div style={{ width: 80 }}><Slider defaultValue={[40]} /></div>,
  },
  {
    name: 'Switch',
    path: '/switch',
    description: 'Toggle switch control',
    preview: <Switch defaultChecked />,
  },
  {
    name: 'Tabs',
    path: '/tabs',
    description: 'Tabbed content navigation',
    preview: <span style={{ fontSize: 'var(--font-size-xs)', borderBottom: '2px solid var(--color-secondary)', paddingBottom: 2 }}>Tab</span>,
  },
  {
    name: 'Toast',
    path: '/toast',
    description: 'Notification toasts',
    preview: <Button variant="ghost" size="sm">Notify</Button>,
  },
  {
    name: 'Toggle',
    path: '/toggle',
    description: 'Pressable toggle buttons',
    preview: <Toggle>B</Toggle>,
  },
  {
    name: 'Toggle Group',
    path: '/toggle-group',
    description: 'Grouped toggle buttons',
    preview: <span style={{ fontSize: 'var(--font-size-xs)' }}>[ A | B | C ]</span>,
  },
  {
    name: 'Toolbar',
    path: '/toolbar',
    description: 'Grouped action toolbar',
    preview: <span style={{ fontSize: 'var(--font-size-xs)' }}>B I U</span>,
  },
  {
    name: 'Tooltip',
    path: '/tooltip',
    description: 'Informational tooltips',
    preview: <span style={{ fontSize: 'var(--font-size-xs)', textDecoration: 'underline dotted' }}>Hover</span>,
  },
];

export function Dashboard() {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>Radix UI Component Showcase</h1>
        <p className={styles.subtitle}>
          An interactive visual guide and developer reference for every Radix UI primitive.
          Each component demonstrates all possible variants, layout patterns, and design specs.
        </p>
      </header>
      <div className={styles.grid}>
        {cards.map((card) => (
          <Link key={card.path} to={card.path} className={styles.card}>
            <div className={styles.cardPreview}>{card.preview}</div>
            <div className={styles.cardName}>{card.name}</div>
            <div className={styles.cardDescription}>{card.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
