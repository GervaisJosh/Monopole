'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface FeatureBentoCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  accentColor?: 'preshift' | 'cuvee' | 'neutral';
}

const accentGlows = {
  neutral:
    'hover:shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_4px_20px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_0_30px_rgba(255,255,255,0.04)]',
  preshift:
    'hover:shadow-[0_0_0_1px_rgba(0,87,164,0.3),0_0_30px_rgba(0,87,164,0.1)]',
  cuvee:
    'hover:shadow-[0_0_0_1px_rgba(201,169,110,0.3),0_0_30px_rgba(201,169,110,0.08)]',
};

export function FeatureBentoCard({
  title,
  description,
  icon,
  delay = 0,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
  accentColor = 'neutral',
}: FeatureBentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, translateY: -6 }}
      className={cn(
        'rounded-2xl p-6',
        'bg-white dark:bg-white/[0.02] border border-zinc-100 dark:border-white/10',
        'shadow-[0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-none',
        'transition-shadow duration-300 ease-out',
        accentGlows[accentColor],
        'group cursor-default',
        className
      )}
    >
      <div className="mb-4 text-foreground/80 transition-all duration-300 group-hover:text-foreground">
        {icon}
      </div>
      <h3
        className={cn(
          'text-lg font-bold text-foreground mb-2',
          titleClassName
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          'text-sm text-muted-foreground leading-relaxed',
          descriptionClassName
        )}
      >
        {description}
      </p>
    </motion.div>
  );
}
