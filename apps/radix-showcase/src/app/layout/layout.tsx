import { useState, useCallback } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './layout.module.css';

const navItems = [
  { to: '/', label: 'Dashboard' },
  { to: '/accordion', label: 'Accordion' },
  { to: '/alert-dialog', label: 'Alert Dialog' },
  { to: '/aspect-ratio', label: 'Aspect Ratio' },
  { to: '/avatar', label: 'Avatar' },
  { to: '/checkbox', label: 'Checkbox' },
  { to: '/collapsible', label: 'Collapsible' },
  { to: '/context-menu', label: 'Context Menu' },
  { to: '/dialog', label: 'Dialog' },
  { to: '/dropdown-menu', label: 'Dropdown Menu' },
  { to: '/hover-card', label: 'Hover Card' },
  { to: '/label', label: 'Label' },
  { to: '/menubar', label: 'Menubar' },
  { to: '/navigation-menu', label: 'Navigation Menu' },
  { to: '/popover', label: 'Popover' },
  { to: '/progress', label: 'Progress' },
  { to: '/radio-group', label: 'Radio Group' },
  { to: '/scroll-area', label: 'Scroll Area' },
  { to: '/select', label: 'Select' },
  { to: '/separator', label: 'Separator' },
  { to: '/slider', label: 'Slider' },
  { to: '/switch', label: 'Switch' },
  { to: '/tabs', label: 'Tabs' },
  { to: '/toast', label: 'Toast' },
  { to: '/toggle', label: 'Toggle' },
  { to: '/toggle-group', label: 'Toggle Group' },
  { to: '/toolbar', label: 'Toolbar' },
  { to: '/tooltip', label: 'Tooltip' },
];

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.hamburger}
        onClick={() => setSidebarOpen((o) => !o)}
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? '\u2715' : '\u2630'}
      </button>

      <div
        className={`${styles.overlay} ${sidebarOpen ? styles.overlayVisible : ''}`}
        onClick={closeSidebar}
      />

      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarTitle}>Radix UI</div>
          <div className={styles.sidebarSubtitle}>Component Showcase</div>
        </div>
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
              onClick={closeSidebar}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
