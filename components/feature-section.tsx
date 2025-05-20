"use client";

import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface FeatureSectionProps {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  reverse?: boolean;
}

export function FeatureSection({
  title,
  description,
  children,
  className,
  reverse = false,
}: FeatureSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className={cn(
        "py-16 md:py-24",
        className
      )}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center",
          reverse && "md:grid-flow-dense"
        )}>
          <div
            className={cn(
              "flex flex-col gap-6 transition-all duration-700 delay-150",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              reverse && "md:col-start-2"
            )}
          >
            <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
            <p className="text-muted-foreground md:text-lg">{description}</p>
          </div>
          
          <div
            className={cn(
              "transition-all duration-700 delay-300",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              reverse && "md:col-start-1"
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}