"use client";

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { MotionSection } from './motion-section';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
  delay?: number;
}

export function SectionWrapper({ 
  children, 
  className,
  id,
  fullWidth = false,
  delay = 0
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24 bg-black", className)}>
      <MotionSection delay={delay}>
        {fullWidth ? (
          children
        ) : (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        )}
      </MotionSection>
    </section>
  );
}