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
}

/**
 * Unified bento-style feature card with 3D hover effect and blue glow
 * Used across Club Cuvée, Pre-Shift, and home page for visual consistency
 */
export function FeatureBentoCard({
  title,
  description,
  icon,
  delay = 0,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
}: FeatureBentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.15 }}
      viewport={{ once: true }}
      className={cn(
        // Base styles
        'bg-card rounded-xl border border-border p-6 shadow-lg',
        // 3D hover effect - lift up and slight scale
        'transition-all duration-300 ease-out',
        'hover:-translate-y-1 hover:scale-[1.02]',
        // Blue glow on hover
        'hover:shadow-[0_0_30px_rgba(20,113,255,0.4)]',
        'hover:border-border/80',
        // Group for child hover effects
        'group cursor-default',
        className
      )}
    >
      <div className="mb-4 text-white transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(20,113,255,0.6)]">
        {icon}
      </div>
      <h3 className={cn('text-lg font-bold text-white mb-2', titleClassName)}>
        {title}
      </h3>
      <p className={cn('text-sm text-muted-foreground leading-relaxed', descriptionClassName)}>
        {description}
      </p>
    </motion.div>
  );
}
