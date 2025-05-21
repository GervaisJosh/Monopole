'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  delay = 0,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      viewport={{ once: true }}
      className={cn(
        'bg-card rounded-xl border border-border p-6 shadow-lg transition duration-300 group hover:shadow-[0_0_30px_#1471ff]',
        className
      )}
    >
      <div className="mb-4 text-white group-hover:drop-shadow-[0_0_12px_#1471ff]">
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
