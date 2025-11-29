'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const routes = [
  { href: '/club-cuvee', label: 'Club Cuvée' },
  { href: '/pre-shift', label: 'Pre-shift' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-bold text-white hover:text-white/80 transition"
          >
            MONOPOLE AI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {routes.map(route => (
              <Link
                key={route.href}
                href={route.href}
                className="font-display text-sm text-white transition-all px-4 py-2 rounded-full border border-transparent hover:border-white glow-hover"
              >
                {route.label}
              </Link>
            ))}
            <Button
              variant="outline"
              className="font-display text-sm glow-hover border border-white/30 hover:border-white"
              asChild
            >
              <a
                href="https://www.club-cuvee.com/landing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Club Cuvée
              </a>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 mt-10">
                {routes.map(route => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="font-display text-lg text-white transition-all px-4 py-2 rounded-full border border-transparent hover:border-white glow-hover"
                  >
                    {route.label}
                  </Link>
                ))}
                <Button
                  variant="outline"
                  className="w-full font-display glow-hover border border-white/30 hover:border-white"
                  asChild
                >
                  <a
                    href="https://www.club-cuvee.com/landing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Club Cuvée
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
