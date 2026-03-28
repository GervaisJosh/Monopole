'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import RotatingText from '@/components/RotatingText';

const ease = [0.25, 0.46, 0.45, 0.94];

interface HeroSectionProps {
  headline: string;
  rotatingTexts: string[];
  rotatingPrefix?: string;
  ctaText: string;
  ctaHref: string;
}

export function HeroSection({
  headline,
  rotatingTexts,
  rotatingPrefix = 'Building tools for',
  ctaText,
  ctaHref,
}: HeroSectionProps) {
  const words = headline.split(' ');
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = !mounted || resolvedTheme === 'dark';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image — inverted in light mode */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Wine-bottle-neck.png"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{
            filter: isDark ? 'none' : 'invert(1)',
            opacity: isDark ? 1 : 0.5,
            transition: 'filter 0.3s, opacity 0.3s',
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/30 dark:bg-black/80 transition-colors duration-300" />
        {/* Bottom gradient for smooth section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white dark:from-black to-transparent transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Wordmark */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease }}
          className="font-brand text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8"
        >
          MONOPOLE AI
        </motion.p>

        {/* Headline — staggered word reveal */}
        <div className="flex flex-wrap justify-center gap-x-[0.3em]">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + i * 0.08,
                duration: 0.5,
                ease,
              }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground font-display"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Rotating subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease, delay: 0.9 }}
          className="mt-6 sm:mt-8 text-lg sm:text-xl text-muted-foreground flex items-center justify-center gap-2 flex-wrap"
        >
          <span>{rotatingPrefix}</span>
          <RotatingText
            texts={rotatingTexts}
            mainClassName="text-foreground font-medium"
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

        {/* Single CTA — scrolls to products */}
        <motion.a
          href={ctaHref}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5, ease }}
          className="inline-flex items-center justify-center mt-10 sm:mt-12 px-8 py-3 rounded-lg text-sm font-medium border border-zinc-300 dark:border-white/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
        >
          {ctaText}
        </motion.a>
      </div>
    </section>
  );
}
