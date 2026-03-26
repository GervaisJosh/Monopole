'use client';

import { useState } from 'react';
import SplitText from '@/components/SplitText';
import RotatingText from '@/components/RotatingText';
import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94];

interface HeroSectionProps {
  headline: string;
  rotatingTexts: string[];
  rotatingPrefix?: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function HeroSection({
  headline,
  rotatingTexts,
  rotatingPrefix = 'Building tools for',
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: HeroSectionProps) {
  const [headlineComplete, setHeadlineComplete] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,30,30,0.6)_0%,_rgba(0,0,0,1)_70%)]" />
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline with staggered word reveal */}
          <SplitText
            text={headline}
            tag="h1"
            splitType="words"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white"
            delay={0.06}
            duration={0.7}
            ease={ease}
            onAnimationComplete={() => setHeadlineComplete(true)}
          />

          {/* Rotating subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={headlineComplete ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, ease }}
            className="mt-6 sm:mt-8 text-lg sm:text-xl text-muted-foreground flex items-center justify-center gap-2 flex-wrap"
          >
            <span>{rotatingPrefix}</span>
            <RotatingText
              texts={rotatingTexts}
              mainClassName="text-white font-medium"
              staggerFrom="first"
              staggerDuration={0.02}
              splitBy="characters"
              rotationInterval={3000}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 300,
              }}
            />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headlineComplete ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              {ctaText}
            </a>
            {secondaryCtaText && secondaryCtaHref && (
              <a
                href={secondaryCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {secondaryCtaText}
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
