'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { FeatureBentoCard } from '@/components/ui/feature-bento-card';
import BlurText from '@/components/BlurText';
import { Wine, Warehouse, Heart, HandHeart } from '@phosphor-icons/react';

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

export default function ClubCuvee() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper className="pt-32 sm:pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.04)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease }}
            className="font-brand text-sm tracking-[0.3em] uppercase text-[#C9A96E] mb-6"
          >
            CLUB CUVÉE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            A wine membership built from your cellar.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10"
          >
            Club Cuvée turns your restaurant's existing wine inventory into a
            personalized membership program. Connect your list, capture guest
            preferences through a modern tasting interface, and let the system
            curate selections that move your inventory, surprise your guests, and
            build long-term loyalty — without adding labor to your team.
          </motion.p>
          <motion.a
            href="https://www.club-cuvee.com/landing"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.4 }}
            className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-medium border border-zinc-300 dark:border-white/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Visit club-cuvee.com
          </motion.a>
        </div>
      </SectionWrapper>

      {/* Live Preview */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <a
            href="https://www.club-cuvee.com/landing"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 transition-all duration-300 group-hover:shadow-[0_0_0_1px_rgba(201,169,110,0.3),0_0_30px_rgba(201,169,110,0.08)]">
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

      {/* Key Capabilities */}
      <SectionWrapper>
        <SectionHeading text="Key capabilities" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureBentoCard
            title="Inventory-driven curation"
            description="Selections come from what you actually have. The system factors in stock levels, margin targets, and seasonal priorities alongside guest preferences. Move slow-moving bottles by pairing them with crowd favorites. Feature new arrivals to the members most likely to love them."
            icon={<Warehouse size={32} weight="light" />}
            delay={0}
            accentColor="cuvee"
          />
          <FeatureBentoCard
            title="Guest preference engine"
            description="Members rate wines through a simple, beautiful interface. Over time, the system builds a taste profile — varietal preferences, regional affinities, price comfort, adventurousness — and uses it to curate increasingly personalized selections."
            icon={<Heart size={32} weight="light" />}
            delay={1}
            accentColor="cuvee"
          />
          <FeatureBentoCard
            title="Zero-labor fulfillment logic"
            description="The platform handles the membership mechanics: billing cadence, selection generation, member communication, and shipment coordination. Your team focuses on hospitality, not logistics."
            icon={<HandHeart size={32} weight="light" />}
            delay={2}
            accentColor="cuvee"
          />
          <FeatureBentoCard
            title="Works with your identity"
            description="Club Cuvée doesn't impose a house style. If you're a natural wine bar, the selections reflect that. If you're a classic French restaurant with deep Burgundy holdings, the algorithm learns that context. Your wine program, amplified."
            icon={<Wine size={32} weight="light" />}
            delay={3}
            accentColor="cuvee"
          />
        </div>
      </SectionWrapper>

      {/* Wine imagery */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10">
            <Image
              src="/images/wine-cellar.jpg"
              alt="Curated wine inventory"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground font-display mb-4"
          >
            Bring Club Cuvée to your restaurant
          </motion.h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-10">
            See how restaurants are building loyalty and moving inventory with
            personalized wine memberships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.club-cuvee.com/landing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-medium border border-zinc-300 dark:border-white/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Visit club-cuvee.com
            </a>
            <a
              href="mailto:josh@monopole-ai.com"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
