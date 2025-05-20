"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export function MotionSection({ 
  children, 
  className,
  id,
  delay = 0
}: MotionSectionProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: delay * 0.1
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}