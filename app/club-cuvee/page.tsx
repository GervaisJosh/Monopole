'use client';

import Image from 'next/image';
import { SectionWrapper } from '@/components/section-wrapper';
import { FeatureBentoCard } from '@/components/ui/feature-bento-card';
import { Wine, Database, Sparkles, Users, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function ClubCuvee() {
  return (
    <>
      {/* HERO */}
      <SectionWrapper className="pt-32 md:pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/restaurant-interior.jpg')] bg-cover bg-center opacity-10 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            Club Cuvée
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
            A wine membership platform that connects restaurants' wine inventory, guest data, and a custom recommendation algorithm.
          </p>
        </div>
      </SectionWrapper>

      {/* COMBINED LIVE PREVIEW + CTA */}
      <SectionWrapper className="bg-black py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center"
        >
          {/* LEFT: Text & CTA */}
          <div className="text-left">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-white">
              Explore the Live Platform
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8">
              Club Cuvée is more than a concept—our platform is live and in use. See how restaurants are using Club Cuvée to connect their wine inventory, guest data, and personalized memberships.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="font-display glow-hover"
              asChild
            >
              <a
                href="https://www.club-cuvee.com/landing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Club Cuvée →
              </a>
            </Button>
          </div>

          {/* RIGHT: Image Preview Link */}
          <a
            href="https://www.club-cuvee.com/landing"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="rounded-xl overflow-hidden shadow-xl border border-border/50 transition-transform duration-300 group-hover:scale-[1.01] glow-hover">
              <Image
                src="/images/club-cuvee-preview.png"
                alt="Club Cuvée website screenshot"
                width={1200}
                height={700}
                className="w-full object-cover rounded-xl"
                priority
              />
            </div>
          </a>
        </motion.div>
      </SectionWrapper>

      {/* KEY FEATURES */}
      <SectionWrapper className="bg-black pt-24 pb-32">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-white">
            Key Features
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Core tools that power your AI-driven wine club.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureBentoCard
            title="AI Wine Analysis"
            description="Analyze your inventory and guest trends to optimize decisions."
            icon={<BarChart2 className="h-10 w-10" />}
            delay={0}
          />
          <FeatureBentoCard
            title="Revenue Tools"
            description="Maximize sales with AI-driven promotions and recommendations."
            icon={<Sparkles className="h-10 w-10" />}
            delay={1}
          />
          <FeatureBentoCard
            title="Customer Engagement"
            description="Deliver tailored wine journeys to every guest."
            icon={<Users className="h-10 w-10" />}
            delay={2}
          />
          <FeatureBentoCard
            title="Ratings & Insights"
            description="Capture preferences through a modern wine rating system."
            icon={<Wine className="h-10 w-10" />}
            delay={3}
          />
        </div>
      </SectionWrapper>

      {/* SALES COPY BLOCK */}
      <SectionWrapper className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-white">
              Launch a Wine Club From Your Inventory
            </h2>
            <p className="text-muted-foreground mb-6">
              Club Cuvée helps restaurants turn existing wine inventory into personalized membership programs—with no technical setup or added labor.
            </p>
            <p className="text-muted-foreground mb-6">
              Our platform automates everything from wine recommendations to fulfillment logic, freeing your team to focus on hospitality while building long-term guest loyalty.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">✓</span>
                <span>Sell off overstocked or under-performing inventory</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">✓</span>
                <span>Launch a recurring wine club with zero admin overhead</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">✓</span>
                <span>Deliver curated shipments powered by guest data</span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/wine-cellar.jpg"
              alt="Curated wine inventory crate"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-black py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-white">
            Ready to revolutionize your wine program?
          </h3>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            Join leading restaurants already using Club Cuvée to create exceptional wine experiences.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="font-display glow-hover"
            asChild
          >
            <a
              href="https://www.club-cuvee.com/landing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Club Cuvée →
            </a>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
