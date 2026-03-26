'use client';

import { useRef } from 'react';
import Link from 'next/link';
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react';

const ease = [0.25, 0.46, 0.45, 0.94];

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  points: string[];
  internalHref: string;
  externalHref: string;
  externalLabel: string;
  accent: 'preshift' | 'cuvee';
  delay?: number;
  children?: React.ReactNode;
}

const accentColors: Record<string, string> = {
  preshift: '#0057A4',
  cuvee: '#C9A96E',
};

export function ProductCard({
  name,
  tagline,
  description,
  points,
  internalHref,
  externalHref,
  externalLabel,
  accent,
  delay = 0,
  children,
}: ProductCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  });

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const color = accentColors[accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease, delay: delay * 0.1 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        whileHover={{
          boxShadow: `0 0 0 1px ${color}40, 0 0 40px ${color}15, 0 0 80px ${color}08`,
          borderColor: `${color}30`,
        }}
        className={cn(
          'group rounded-2xl p-8 lg:p-10',
          'bg-white dark:bg-white/[0.02]',
          'border border-zinc-200 dark:border-white/10',
          'shadow-sm dark:shadow-none',
          'transition-shadow duration-500 cursor-default'
        )}
      >
        {children}

        <h3 className="font-brand text-2xl text-foreground mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground font-medium mb-4">
          {tagline}
        </p>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {points.map((point, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1.5 rounded-full border border-zinc-200 dark:border-white/10 bg-transparent dark:bg-white/[0.03] text-muted-foreground group-hover:border-zinc-300 dark:group-hover:border-white/20 group-hover:text-foreground/70 transition-colors duration-300"
            >
              {point}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link
            href={internalHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
          >
            Learn more
            <ArrowRight size={14} weight="bold" />
          </Link>
          <a
            href={externalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {externalLabel}
            <ArrowUpRight size={14} weight="regular" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
