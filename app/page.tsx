'use client';

import { motion } from 'framer-motion';
import { HeroSection } from '@/components/hero-section';
import { ProductCard } from '@/components/product-card';
import { FeatureBentoCard } from '@/components/ui/feature-bento-card';
import { FeatureShowcase } from '@/components/feature-showcase';
import { SectionWrapper } from '@/components/section-wrapper';
import BlurText from '@/components/BlurText';
import { Database, ArrowsClockwise, Buildings } from '@phosphor-icons/react';

const ease = [0.25, 0.46, 0.45, 0.94];

function SectionHeading({ text }: { text: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
      <BlurText
        text={text}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-display justify-center"
        delay={100}
        animateBy="words"
        direction="bottom"
      />
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <HeroSection
        headline="Technology built for hospitality."
        rotatingTexts={[
          'sharper service',
          'faster onboarding',
          'deeper menu knowledge',
          'measurable growth',
        ]}
        rotatingPrefix="Building tools for"
        ctaText="Explore Pre-Shift"
        ctaHref="https://pre-shift.io"
      />

      {/* Products */}
      <SectionWrapper id="products">
        <SectionHeading text="What we build" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProductCard
            name="PRE-SHIFT"
            tagline="A training compiler for restaurants. Upload your menus — get adaptive, grounded training that improves with every staff interaction."
            points={[
              '6 training modalities',
              '100% question grounding',
              'Closed-loop improvement',
              'App Store live',
            ]}
            href="https://pre-shift.io"
            ctaText="Visit Pre-Shift"
            accent="preshift"
            featured
            delay={0}
          />
          <ProductCard
            name="CLUB CUVÉE"
            tagline="A wine membership platform connecting restaurant inventory, guest preferences, and curated selections."
            points={[
              'Personalized recommendations',
              'Inventory-driven curation',
              'Zero admin overhead',
            ]}
            href="https://www.club-cuvee.com/landing"
            ctaText="Visit Club Cuvée"
            accent="cuvee"
            delay={1}
          />
        </div>
      </SectionWrapper>

      {/* Feature Showcase — inline micro-UI demos */}
      <SectionWrapper>
        <SectionHeading text="See it in action" />
        <FeatureShowcase />
      </SectionWrapper>

      {/* Value Proposition */}
      <SectionWrapper>
        <SectionHeading text="Built different" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureBentoCard
            title="Grounded in your data"
            description="Every tool we build starts with what's real — your menus, your documents, your operations. Nothing generic. Nothing hallucinated."
            icon={<Database size={32} weight="light" />}
            delay={0}
          />
          <FeatureBentoCard
            title="Learns from usage"
            description="Staff answers, guest preferences, and operational patterns feed back into the system. Quality improves automatically, not manually."
            icon={<ArrowsClockwise size={32} weight="light" />}
            delay={1}
          />
          <FeatureBentoCard
            title="Built for hospitality"
            description="We don't adapt enterprise software for restaurants. We build for hospitality from the ground up — the workflows, the pace, the people."
            icon={<Buildings size={32} weight="light" />}
            delay={2}
          />
        </div>
      </SectionWrapper>

      {/* CTA / Contact */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground font-display mb-4"
          >
            Interested in working with us?
          </motion.h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-10">
            We work with restaurants and hospitality groups who want better
            tools — not more software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:josh@monopole-ai.com"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium border border-zinc-200 dark:border-white/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Get in touch
            </a>
            <a
              href="https://pre-shift.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              See Pre-Shift in action
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
