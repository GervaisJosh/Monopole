'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from '@phosphor-icons/react';

const ease = [0.25, 0.46, 0.45, 0.94];

interface ProductCardProps {
  name: string;
  tagline: string;
  points: string[];
  href: string;
  ctaText: string;
  accent: 'preshift' | 'cuvee';
  delay?: number;
  featured?: boolean;
  children?: React.ReactNode;
}

const accentStyles = {
  preshift: {
    glow: 'hover:shadow-[0_0_0_1px_rgba(0,87,164,0.3),0_0_30px_rgba(0,87,164,0.1)] hover:border-[#0057A4]/30',
  },
  cuvee: {
    glow: 'hover:shadow-[0_0_0_1px_rgba(201,169,110,0.3),0_0_30px_rgba(201,169,110,0.08)] hover:border-[#C9A96E]/20',
  },
};

export function ProductCard({
  name,
  tagline,
  points,
  href,
  ctaText,
  accent,
  delay = 0,
  featured = false,
  children,
}: ProductCardProps) {
  const styles = accentStyles[accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease, delay: delay * 0.08 }}
      whileHover={{ scale: 1.03, translateY: -6 }}
      className={cn(
        'group rounded-2xl p-8 sm:p-10',
        'bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/10',
        'transition-all duration-300',
        styles.glow,
        featured && 'lg:col-span-1'
      )}
    >
      <h3 className="font-brand text-2xl text-foreground mb-4">{name}</h3>

      <p className="text-muted-foreground leading-relaxed mb-6">{tagline}</p>

      <div className="flex flex-wrap gap-3 mb-8">
        {points.map((point, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1.5 rounded-full border border-zinc-200 dark:border-white/10 bg-transparent dark:bg-white/[0.03] text-muted-foreground group-hover:border-zinc-300 dark:group-hover:border-white/20 group-hover:text-foreground/70 transition-colors duration-300"
          >
            {point}
          </span>
        ))}
      </div>

      {children}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        {ctaText}
        <ArrowUpRight size={16} weight="regular" />
      </a>
    </motion.div>
  );
}
