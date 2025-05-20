import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';
import { ProductCard } from '@/components/product-card';
import { FeatureCard } from '@/components/feature-card';
import { SectionWrapper } from '@/components/section-wrapper';
import { CTASection } from '@/components/cta-section';
import { Wine, Server, Brain, Users, Clock, BarChart3 } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <HeroSection 
        title="Crafting intelligent tools for modern hospitality."
        subtitle="Monopole AI"
        description="We build deeply integrated AI systems that elevate hospitality—from personalized wine clubs to adaptive staff education"
        ctaText="Request a Demo"
        ctaHref="#demo"
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
            imageSrc="https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg"
          />
          <ProductCard
            title="Pre-shift"
            description="AI-driven training and onboarding for restaurant staff using real-time menu data and contextual education."
            href="/pre-shift"
            imageSrc="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg"
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
          <FeatureCard
            title="Data-Driven Insights"
            description="Transform scattered hospitality data into actionable insights that improve guest experiences and operational efficiency."
            icon={<BarChart3 className="h-10 w-10" />}
            delay={0}
          />
          <FeatureCard
            title="Personalized Experiences"
            description="Create memorable moments for guests with AI-powered recommendations and personalized service opportunities."
            icon={<Users className="h-10 w-10" />}
            delay={1}
          />
          <FeatureCard
            title="Operational Excellence"
            description="Streamline training, inventory management, and decision-making with intelligent tools built specifically for hospitality."
            icon={<Clock className="h-10 w-10" />}
            delay={2}
          />
        </div>
      </SectionWrapper>
      
      <CTASection
        title="Ready to transform your hospitality business?"
        description="Schedule a personalized demo to see how Monopole AI's products can enhance your restaurant operations and guest experiences."
        buttonText="Request a Demo"
        type="demo"
      />
    </div>
  );
}