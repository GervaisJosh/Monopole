'use client';

import { motion } from 'framer-motion';
import { HeroSection } from '@/components/hero-section';
import { ProductCard } from '@/components/product-card';
import { EcosystemFlywheel } from '@/components/ecosystem-flywheel';
import { SectionWrapper } from '@/components/section-wrapper';
import { TiltCard } from '@/components/tilt-card';
import BlurText from '@/components/BlurText';

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

const philosophyStatements = [
  {
    title: 'Built from your truth',
    body: "Every restaurant is different. The dishes, the wine program, the way the team talks about food — that's what makes a place worth going to. Our software starts there. Not with templates. Not with industry averages. With YOUR menus, YOUR documents, YOUR identity. If it's not on your menu, it's not in the system. If it's not how your team talks about a dish, it's not how we train them.",
  },
  {
    title: 'Systems that compound',
    body: "Most software stays exactly as useful on day 300 as it was on day one. Ours doesn't. Every staff answer, every guest preference, every operational pattern feeds back into the system — refining questions, improving grading, surfacing gaps, and generating better content. The more your team uses it, the sharper it gets. We call this a closed loop. It's the difference between a tool and an engine.",
  },
  {
    title: 'Hospitality-native, not hospitality-adjacent',
    body: "We didn't build enterprise software and bolt on a restaurant skin. We started inside restaurants — understanding the pace, the pre-shift meetings, the way a new server learns the wine list in their first week, the way a GM needs to see who's ready and who needs help. Every feature, every workflow, every screen was designed for the people who will actually use it, in the environment where they'll use it.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <HeroSection
        headline="Effective, affordable, beautiful software for hospitality."
        rotatingTexts={[
          'sharper service',
          'faster onboarding',
          'deeper menu knowledge',
          'measurable growth',
        ]}
        rotatingPrefix="Building tools for"
        ctaText="Explore Our Products"
        ctaHref="#products"
      />

      {/* Philosophy */}
      <SectionWrapper>
        <SectionHeading text="Our philosophy" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease }}
          className="text-muted-foreground text-base sm:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          Restaurants already have everything they need — menus, wine lists,
          service standards, years of accumulated knowledge. The problem was
          never a lack of information. It was that no one built the right tools
          to make that information work. Monopole exists to change that.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {philosophyStatements.map((statement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease }}
            >
              <TiltCard
                className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-8 h-full shadow-sm dark:shadow-none hover:shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_8px_30px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_8px_30px_rgba(255,255,255,0.03)] hover:border-zinc-300 dark:hover:border-white/20 cursor-default"
              >
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 font-display">
                  {statement.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-white/50">
                  {statement.body}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Products */}
      <SectionWrapper id="products">
        <SectionHeading text="What we build" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease }}
          className="text-muted-foreground text-base sm:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-16 sm:mb-20 -mt-8 sm:-mt-12"
        >
          Two products. One philosophy. Both built from the ground up for
          hospitality — designed to be beautiful, grounded in real data, and
          better tomorrow than they are today.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProductCard
            name="PRE-SHIFT"
            tagline="A training compiler for restaurants."
            description="Upload your menus, wine lists, and training documents. Pre-Shift extracts, structures, and enriches that content into a canonical knowledge base — then generates adaptive training grounded entirely in your restaurant's data. Six training modalities. Semantic grading with partial credit. ELO-based difficulty that adapts to each staff member. A closed-loop feedback system that uses real answers to continuously improve question quality, rubrics, and coverage. Now live on the App Store."
            points={[
              '6 modalities',
              '100% grounded',
              'Closed-loop',
              'App Store live',
            ]}
            internalHref="/pre-shift"
            externalHref="https://pre-shift.io"
            externalLabel="Visit pre-shift.io"
            accent="preshift"
            delay={0}
          />
          <ProductCard
            name="CLUB CUVÉE"
            tagline="A wine membership platform built from your inventory."
            description="Club Cuvée connects your restaurant's existing wine inventory to a personalized membership experience. Guest preferences, purchase history, and tasting data feed a recommendation engine that curates selections — helping you move inventory, build loyalty, and give guests a reason to keep coming back. No added labor. No generic selections. Your wines, your identity, their palate."
            points={[
              'Personalized curation',
              'Inventory-driven',
              'Zero overhead',
            ]}
            internalHref="/club-cuvee"
            externalHref="https://www.club-cuvee.com/landing"
            externalLabel="Visit club-cuvee.com"
            accent="cuvee"
            delay={1}
          />
        </div>
      </SectionWrapper>

      {/* Ecosystem */}
      <SectionWrapper id="ecosystem">
        <SectionHeading text="The ecosystem" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease }}
          className="text-muted-foreground text-base sm:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-16 sm:mb-20 -mt-8 sm:-mt-12"
        >
          Three products. One shared knowledge layer. Every interaction makes
          everything smarter.
        </motion.p>

        <EcosystemFlywheel />
      </SectionWrapper>

      {/* Contact Form */}
      <SectionWrapper id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground font-display mb-4"
          >
            Get in touch
          </motion.h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-10 leading-relaxed">
            We work with restaurants and hospitality groups who want better tools
            — not more software. Whether you&apos;re a single restaurant looking to
            sharpen your training or a multi-concept group ready to standardize
            education across properties, we&apos;d love to talk.
          </p>
          {/* TODO: Replace YOUR_FORM_ID with your Formspree form ID (https://formspree.io) */}
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="space-y-4 max-w-lg mx-auto text-left"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full rounded-lg border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.03] px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-white/30 focus:outline-none focus:border-zinc-400 dark:focus:border-white/20 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full rounded-lg border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.03] px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-white/30 focus:outline-none focus:border-zinc-400 dark:focus:border-white/20 transition-colors"
            />
            <input
              type="text"
              name="company"
              placeholder="Company (optional)"
              className="w-full rounded-lg border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.03] px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-white/30 focus:outline-none focus:border-zinc-400 dark:focus:border-white/20 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              required
              className="w-full rounded-lg border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.03] px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-white/30 focus:outline-none focus:border-zinc-400 dark:focus:border-white/20 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </SectionWrapper>
    </div>
  );
}
