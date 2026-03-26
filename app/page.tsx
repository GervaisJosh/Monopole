'use client';

import { motion } from 'framer-motion';
import { HeroSection } from '@/components/hero-section';
import { ProductCard } from '@/components/product-card';
import { EcosystemFlywheel } from '@/components/ecosystem-flywheel';
import { SectionWrapper } from '@/components/section-wrapper';
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

        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease }}
            className="text-muted-foreground text-base sm:text-lg leading-relaxed text-center mb-16 sm:mb-20"
          >
            Restaurants already have everything they need — menus, wine lists,
            service standards, years of accumulated knowledge. The problem was
            never a lack of information. It was that no one built the right tools
            to make that information work. Monopole exists to change that.
          </motion.p>

          <div className="space-y-0">
            {philosophyStatements.map((statement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                className="py-10 sm:py-14 border-t border-zinc-100 dark:border-white/5 first:border-t-0"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  {statement.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {statement.body}
                </p>
              </motion.div>
            ))}
          </div>
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
          <p className="text-muted-foreground text-base sm:text-lg mb-10 leading-relaxed">
            We work with restaurants and hospitality groups who want better tools
            — not more software. Whether you're a single restaurant looking to
            sharpen your training or a multi-concept group ready to standardize
            education across properties, we'd love to talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:josh@monopole-ai.com"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-medium border border-zinc-300 dark:border-white/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Get in touch
            </a>
            <a
              href="https://pre-shift.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              See Pre-Shift in action
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
