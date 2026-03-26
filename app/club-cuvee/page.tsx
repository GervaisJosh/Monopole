'use client';

import Image from 'next/image';
import { SectionWrapper } from '@/components/section-wrapper';
import { FeatureBentoCard } from '@/components/ui/feature-bento-card';
import { Wine, ChartBar, Sparkle, Users } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import BlurText from '@/components/BlurText';

const ease = [0.25, 0.46, 0.45, 0.94];

export default function ClubCuvee() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper className="pt-32 sm:pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(124,45,45,0.08)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Club Cuvée
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A wine membership platform that connects restaurant inventory,
            guest preferences, and curated selections — without adding
            complexity to your operations.
          </p>
        </div>
      </SectionWrapper>

      {/* Live Preview + CTA */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center"
        >
          <div className="text-left">
            <BlurText
              text="See the live platform"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6"
              delay={80}
              animateBy="words"
            />
            <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
              Club Cuvée is live and in use. See how restaurants connect their
              wine inventory, guest data, and personalized memberships — all
              from a single platform.
            </p>
            <a
              href="https://www.club-cuvee.com/landing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium border border-white/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Visit Club Cuvée
            </a>
          </div>

          <a
            href="https://www.club-cuvee.com/landing"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 group-hover:shadow-[0_0_0_2px_#7C2D2D,0_0_40px_rgba(124,45,45,0.3)]">
              <Image
                src="/images/club-cuvee-preview.png"
                alt="Club Cuvée platform screenshot"
                width={1200}
                height={700}
                className="w-full object-cover"
                priority
              />
            </div>
          </a>
        </motion.div>
      </SectionWrapper>

      {/* Key Features */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <BlurText
            text="Key Features"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground justify-center"
            delay={80}
            animateBy="words"
          />
          <p className="text-muted-foreground sm:text-lg mt-4">
            Core tools that power your wine membership program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureBentoCard
            title="Wine analysis and insights"
            description="Understand your inventory patterns and guest trends to make better purchasing and pricing decisions."
            icon={<ChartBar size={32} weight="light" />}
            delay={0}
            accentColor="cuvee"
          />
          <FeatureBentoCard
            title="Revenue tools"
            description="Move overstocked inventory, surface high-margin bottles, and grow recurring membership revenue."
            icon={<Sparkle size={32} weight="light" />}
            delay={1}
            accentColor="cuvee"
          />
          <FeatureBentoCard
            title="Guest engagement"
            description="Deliver curated wine selections based on individual preferences, purchase history, and tasting feedback."
            icon={<Users size={32} weight="light" />}
            delay={2}
            accentColor="cuvee"
          />
          <FeatureBentoCard
            title="Ratings and preferences"
            description="Capture tasting notes and preferences through a modern rating system that feeds back into recommendations."
            icon={<Wine size={32} weight="light" />}
            delay={3}
            accentColor="cuvee"
          />
        </div>
      </SectionWrapper>

      {/* Sales Copy */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Launch a wine club from your existing inventory
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Club Cuvée helps restaurants turn existing wine inventory into
              personalized membership programs — with no technical setup or
              added labor.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The platform handles everything from recommendations to
              fulfillment logic, freeing your team to focus on hospitality
              while building long-term guest loyalty.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 text-muted-foreground">
                Sell off overstocked inventory
              </span>
              <span className="text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 text-muted-foreground">
                Recurring revenue with zero admin
              </span>
              <span className="text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 text-muted-foreground">
                Curated shipments from guest data
              </span>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/wine-cellar.jpg"
              alt="Curated wine inventory"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Ready to build your wine program?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-10">
            See how restaurants are using Club Cuvée to create exceptional
            wine experiences.
          </p>
          <a
            href="https://www.club-cuvee.com/landing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium border border-white/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Visit Club Cuvée
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}
