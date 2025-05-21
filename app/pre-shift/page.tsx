import Image from 'next/image';
import { SectionWrapper } from '@/components/section-wrapper';
import { FeatureSection } from '@/components/feature-section';
import { FeatureCard } from '@/components/feature-card';
import { UIShowcase } from '@/components/ui-showcase';
import { CTASection } from '@/components/cta-section';
import { GraduationCap, BookOpen, LineChart, Menu, Files, Layers } from 'lucide-react';

export default function PreShift() {
  const mockUiImages = [
    {
      src: "https://images.pexels.com/photos/6146931/pexels-photo-6146931.jpeg",
      alt: "Pre-shift training dashboard"
    },
    {
      src: "https://images.pexels.com/photos/4065156/pexels-photo-4065156.jpeg",
      alt: "Menu knowledge quiz interface"
    },
    {
      src: "https://images.pexels.com/photos/5621603/pexels-photo-5621603.jpeg",
      alt: "Staff performance analytics"
    }
  ];

  return (
    <>
      <SectionWrapper className="pt-32 md:pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg')] bg-cover bg-center opacity-10 z-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Pre-shift</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            AI-driven training and onboarding for restaurant staff that uses real-time menu data and contextual education modules.
          </p>
        </div>
      </SectionWrapper>
      
      <FeatureSection
        title="Transform Staff Training"
        description="Pre-shift uses AI to create personalized training materials that adapt to each team member's learning style, position, and knowledge gaps, ensuring consistent service and menu knowledge."
        reverse={true}
      >
        <UIShowcase images={mockUiImages} />
      </FeatureSection>
      
      <SectionWrapper className="bg-black">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Key Features</h2>
          <p className="text-muted-foreground md:text-lg">
            Our platform revolutionizes how restaurants train and develop their teams with intelligent, data-driven tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            title="AI-Generated Learning Modules"
            description="Automatically create training content based on your current menu, wine list, and operational procedures."
            icon={<GraduationCap className="h-10 w-10" />}
            delay={0}
          />
          <FeatureCard
            title="Adaptive Assessments"
            description="Personalized quizzes and exercises that adapt to each staff member's knowledge level and learning progress."
            icon={<BookOpen className="h-10 w-10" />}
            delay={1}
          />
          <FeatureCard
            title="Menu Data Integration"
            description="Sync with your POS system to maintain up-to-date training materials that reflect your current offerings."
            icon={<Menu className="h-10 w-10" />}
            delay={2}
          />
          <FeatureCard
            title="Performance Analytics"
            description="Track training completion, knowledge retention, and identify areas for additional focus across your team."
            icon={<LineChart className="h-10 w-10" />}
            delay={3}
          />
        </div>
      </SectionWrapper>
      
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl order-2 lg:order-1">
            <Image
              src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg"
              alt="Restaurant staff training"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Empower Your Team</h2>
            <p className="text-muted-foreground mb-6">
              Pre-shift reduces onboarding time by 60% while ensuring higher knowledge retention and more consistent guest experiences across your entire staff.
            </p>
            <p className="text-muted-foreground mb-6">
              Our platform transforms traditional pre-shift meetings into an ongoing educational process that adapts to seasonal menu changes, special events, and individual learning needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-background p-6 rounded-lg border border-border/50">
                <Files className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-medium text-lg mb-2">Content Library</h3>
                <p className="text-muted-foreground text-sm">
                  Access a growing collection of industry best practices and educational resources.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border/50">
                <Layers className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-medium text-lg mb-2">Multi-Location Support</h3>
                <p className="text-muted-foreground text-sm">
                  Manage training across multiple venues with location-specific content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
      
      <CTASection
        title="Join the training revolution"
        description="Be among the first restaurants to transform staff training with our AI-powered platform."
        buttonText="Sign up for Beta"
        type="newsletter"
      />
    </>
  );
}