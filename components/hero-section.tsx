"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function HeroSection({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden w-full bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Wine-bottle-neck.png"
          alt="Wine bottle silhouette"
          fill
          priority
          className="object-cover opacity-[0.25] pointer-events-none transform scale-110 mix-blend-overlay drop-shadow-2xl"
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className={cn(
              "text-muted-foreground text-lg mb-4 font-display transition-all duration-700 delay-300",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {subtitle}
          </p>

          <h1
            className={cn(
              "font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight tracking-tight transition-all duration-700",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {title}
          </h1>

          <p
            className={cn(
              "text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto transition-all duration-700 delay-150",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {description}
          </p>

          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 glow-hover font-display"
              asChild
            >
              <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                {ctaText}
              </a>
            </Button>
            {secondaryCtaText && secondaryCtaHref && (
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 glow-hover font-display"
                asChild
              >
                <a href={secondaryCtaHref} target="_blank" rel="noopener noreferrer">
                  {secondaryCtaText}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}