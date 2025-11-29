import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';
import { ProductCard } from '@/components/product-card';
import { FeatureBentoCard } from '@/components/ui/feature-bento-card';
import { SectionWrapper } from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Wine, Server, Brain, Users, Clock, BarChart3 } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <HeroSection
        title="Crafting intelligent tools for modern hospitality."
        subtitle="Monopole AI"
        description="We build deeply integrated AI systems that elevate hospitality—from personalized wine clubs to adaptive staff education"
        ctaText="Visit Club Cuvée"
        ctaHref="https://www.club-cuvee.com/landing"
        secondaryCtaText="Visit Pre-Shift"
        secondaryCtaHref="https://www.pre-shift.io"
      />
      
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Our Platform</h2>
          <p className="text-muted-foreground md:text-lg">
            Monopole AI owns and maintains the core data infrastructure, algorithms, and technology that powers our suite of vertical SaaS products for the hospitality industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductCard
            title="Club Cuvée"
            description="An intelligent wine membership platform that connects restaurant inventory, guest data, and AI recommendations."
            href="/club-cuvee"
            imageSrc="/images/club-cuvee-preview.png"
            className="glow-hover hover:scale-105 transition-all duration-300"
          />
          <ProductCard
            title="Pre-shift"
            description="AI-driven training and onboarding for restaurant staff using real-time menu data and contextual education."
            href="/pre-shift"
            imageSrc="/images/PS-landing-improved.png"
            className="glow-hover hover:scale-105 transition-all duration-300"
          />
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-black">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Why AI + Hospitality?</h2>
          <p className="text-muted-foreground md:text-lg">
            The hospitality industry is rich with data but has historically lacked the tools to unlock its value. Our AI-powered solutions bridge this gap.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureBentoCard
            title="Data-Driven Insights"
            description="Transform scattered hospitality data into actionable insights that improve guest experiences and operational efficiency."
            icon={<BarChart3 className="h-10 w-10" />}
            delay={0}
          />
          <FeatureBentoCard
            title="Personalized Experiences"
            description="Create memorable moments for guests with AI-powered recommendations and personalized service opportunities."
            icon={<Users className="h-10 w-10" />}
            delay={1}
          />
          <FeatureBentoCard
            title="Operational Excellence"
            description="Streamline training, inventory management, and decision-making with intelligent tools built specifically for hospitality."
            icon={<Clock className="h-10 w-10" />}
            delay={2}
          />
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="bg-black py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-white">
            Ready to transform your hospitality business?
          </h3>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            See how Monopole AI's products can enhance your restaurant operations and guest experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Button
              variant="outline"
              size="lg"
              className="font-display glow-hover"
              asChild
            >
              <a
                href="https://www.pre-shift.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Pre-Shift →
              </a>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
