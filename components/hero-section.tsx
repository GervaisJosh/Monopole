'use client';

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

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.03) 0%, transparent 60%)',
        }}
      />
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Wordmark */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="font-brand text-sm tracking-widest text-muted-foreground mb-8"
        >
          MONOPOLE AI
        </motion.p>

        {/* Headline — manual staggered word reveal */}
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
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white font-display"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Rotating subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease, delay: 0.8 }}
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

        {/* Single CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 1.0 }}
          className="mt-10 sm:mt-12"
        >
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            {ctaText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
