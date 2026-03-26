'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? (
        <Sun weight="light" size={20} />
      ) : (
        <Moon weight="light" size={20} />
      )}
    </button>
  );
}
