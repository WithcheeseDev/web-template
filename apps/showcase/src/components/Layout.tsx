import { Outlet, Link, useLocation } from 'react-router-dom';
import { Layers } from 'lucide-react';
import { cn } from '@web-templates/utils';

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/catalog', label: 'Catalog' },
];

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="glass sticky top-0 z-50 border-b border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground no-underline">
            <Layers className="w-6 h-6 text-primary" />
            <span className="font-semibold text-lg">UI Showcase</span>
          </Link>
          <nav className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-colors no-underline',
                  location.pathname === item.to
                    ? 'bg-white/10 text-foreground'
                    : 'text-muted hover:text-foreground hover:bg-white/5'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
