'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { List, X } from '@phosphor-icons/react';
import { ThemeToggle } from '@/components/theme-toggle';

const routes = [
  { href: '/pre-shift', label: 'Pre-Shift' },
  { href: '/club-cuvee', label: 'Club Cuvée' },
  { href: 'mailto:josh@monopole-ai.com', label: 'Contact', external: true },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-white/10'
          : 'bg-transparent backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="font-brand text-xl text-foreground hover:text-foreground/80 transition"
          >
            MONOPOLE AI
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {routes.map((route) =>
              route.external ? (
                <a
                  key={route.href}
                  href={route.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {route.label}
                </a>
              ) : (
                <Link
                  key={route.href}
                  href={route.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {route.label}
                </Link>
              )
            )}
            <ThemeToggle />
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="text-foreground p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X size={24} weight="regular" />
              ) : (
                <List size={24} weight="regular" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-background/95 backdrop-blur-md z-40">
          <nav className="flex flex-col items-center gap-8 pt-16">
            {routes.map((route) =>
              route.external ? (
                <a
                  key={route.href}
                  href={route.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-foreground"
                >
                  {route.label}
                </a>
              ) : (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-foreground"
                >
                  {route.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
