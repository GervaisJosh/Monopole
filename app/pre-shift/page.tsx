import Image from 'next/image';
import { SectionWrapper } from '@/components/section-wrapper';
import { FeatureBentoCard } from '@/components/ui/feature-bento-card';
import {
  Upload,
  ShieldAlert,
  Headphones,
  BookOpen,
  ClipboardCheck,
  Target,
  MessageSquare,
  Database,
  GraduationCap,
  Clock,
  Users,
  RefreshCw
} from 'lucide-react';

export default function PreShift() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="pt-32 md:pt-40 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Hero Text */}
          <div className="order-2 lg:order-1">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
              Pre-Shift: Training that{' '}
              <span className="text-preshift">starts with your menus.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Pre-Shift ingests your food, wine, and cocktail menus—plus SOPs and training manuals—and turns them into structured lessons, quizzes, and an always-up-to-date knowledge base for your team.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full border border-border/50 bg-background/50 text-sm font-medium text-white/90">
                Built from your actual menus
              </span>
              <span className="px-4 py-2 rounded-full border border-border/50 bg-background/50 text-sm font-medium text-white/90">
                Lessons, quizzes, and knowledge base
              </span>
              <span className="px-4 py-2 rounded-full border border-border/50 bg-background/50 text-sm font-medium text-white/90">
                Front & back-of-house ready
              </span>
            </div>
          </div>

          {/* Right: Dashboard Image Placeholder */}
          <div className="order-1 lg:order-2">
            <a
              href="https://www.pre-shift.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border/50 transition-transform duration-300 hover:scale-[1.01] glow-hover">
                <Image
                  src="/images/PS-landing-improved.png"
                  alt="Pre-Shift training dashboard showing menu-based training modules and analytics."
                  width={1200}
                  height={900}
                  className="object-cover"
                />
              </div>
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* How It Works Section */}
      <SectionWrapper className="bg-black py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
              Built directly{' '}
              <span className="text-preshift">from your menus and documents</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Pre-Shift starts with the information you already have: PDFs of your menus, wine lists, cocktail lists, allergy charts, SOPs, and training manuals.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-4 max-w-3xl mx-auto">
              The system parses that information into structured items—dishes, wines, cocktails, sections, and standards—and stores them in a searchable knowledge base that powers lessons, quizzes, and inline conversations with your team.
            </p>
          </div>

          {/* 3-Step Process - Bento Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
            <FeatureBentoCard
              title="1. Upload your menus and docs"
              description="Food menus, cocktails, wine by the glass, bottle lists, allergy information, SOPs, and training manuals."
              icon={<Upload className="h-10 w-10" />}
              delay={0}
              titleClassName="text-preshift"
            />
            <FeatureBentoCard
              title="2. Structure and review the knowledge base"
              description="Pre-Shift organizes that information into items and sections. You can review, edit, and approve before it becomes training material."
              icon={<Database className="h-10 w-10" />}
              delay={1}
              titleClassName="text-preshift"
            />
            <FeatureBentoCard
              title="3. Create modules and tests from that information"
              description="Modules, quizzes, and refresher lessons are generated from the same underlying data, so training always matches what's on the floor tonight."
              icon={<GraduationCap className="h-10 w-10" />}
              delay={2}
              titleClassName="text-preshift"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Key Features Section */}
      <SectionWrapper className="py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 text-white">Key Features</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            A menu- and data-driven training system that turns your information into structured knowledge for your team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <FeatureBentoCard
            title="Multi-menu upload & coverage"
            description="Upload food, cocktail, wine by the glass, bottle lists, and seasonal inserts. Pre-Shift keeps track of each section so training aligns with what guests actually see."
            icon={<Upload className="h-10 w-10" />}
            delay={0}
          />
          <FeatureBentoCard
            title="Allergy & dietary flagging"
            description="Tag items with allergy and dietary information so staff can quickly learn what is safe for each guest and why. Use the same data for both training and daily reference."
            icon={<ShieldAlert className="h-10 w-10" />}
            delay={1}
          />
          <FeatureBentoCard
            title="Audio enrichment for better learning"
            description="Layer recorded audio explanations from your leadership or trainers on top of written content, so staff can hear how you talk about dishes, wines, and service standards."
            icon={<Headphones className="h-10 w-10" />}
            delay={2}
          />
          <FeatureBentoCard
            title="Module creation from a shared knowledge base"
            description="Training modules are built from the same underlying knowledge base as your menus and docs. The system suggests modules and questions automatically, and managers can refine and approve them."
            icon={<BookOpen className="h-10 w-10" />}
            delay={3}
          />
          <FeatureBentoCard
            title="Configurable tests and recurring assessments"
            description="Set up quarterly tests, section-specific quizzes, or short pre-shift checks. Choose which menus or topics they cover and how often they recur."
            icon={<ClipboardCheck className="h-10 w-10" />}
            delay={4}
          />
          <FeatureBentoCard
            title="Personalized modules based on performance"
            description="When a staff member misses questions about a region, category, or dish, Pre-Shift schedules follow-up modules to close those gaps over time."
            icon={<Target className="h-10 w-10" />}
            delay={5}
          />
          <FeatureBentoCard
            title="Inline, menu-aware chatbot"
            description="Staff can ask questions in plain language about the menu and standards. The focus is not 'right or wrong' answers, but working through the information until they truly understand."
            icon={<MessageSquare className="h-10 w-10" />}
            delay={6}
          />
        </div>
      </SectionWrapper>

      {/* Outcomes Section */}
      <SectionWrapper className="bg-black py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
              Turn information into confident service
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-4">
              Most restaurants already have the information they need—menus, allergy charts, wine lists, pre-shift notes—but it lives in PDFs, binders, and scattered docs.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Pre-Shift connects that information and turns it into structured training your team can use every day: short modules before service, deeper refreshers between seasons, and ongoing conversations around your actual offerings.
            </p>
          </div>

          {/* Outcome Points - Using Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
            <FeatureBentoCard
              title="Faster onboarding for new staff"
              description="New hires get up to speed quickly with structured modules built directly from your current menus and standards."
              icon={<Clock className="h-10 w-10" />}
              delay={0}
            />
            <FeatureBentoCard
              title="More consistent menu knowledge across the team"
              description="Everyone learns from the same underlying information, ensuring consistent guest experiences no matter who's on the floor."
              icon={<Users className="h-10 w-10" />}
              delay={1}
            />
            <FeatureBentoCard
              title="Less time rebuilding training from scratch every menu change"
              description="Update your knowledge base once, and training modules, quizzes, and reference materials update automatically."
              icon={<RefreshCw className="h-10 w-10" />}
              delay={2}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Image Strip Section */}
      <SectionWrapper className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-border/50 transition-transform duration-300 hover:scale-[1.01] glow-hover">
            <Image
              src="/images/Knowledgebase.png"
              alt="Pre-Shift knowledge base showing menu items with allergen tags and enrichment options."
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-border/50 transition-transform duration-300 hover:scale-[1.01] glow-hover">
            <Image
              src="/images/Training-Modules.png"
              alt="Pre-Shift training modules including Spring Menu Mastery, Service Excellence, and Classic Cocktails Guide."
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section - Static */}
      <SectionWrapper className="bg-black py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-white">
            Interested in using Pre-Shift at your restaurant?
          </h3>
          <p className="text-muted-foreground text-base md:text-lg mb-6">
            We're currently working with a small group of early partners.
          </p>
          <a
            href="mailto:hello@monopole-ai.com?subject=Pre-Shift%20Inquiry"
            className="text-sm font-medium underline hover:text-primary transition-colors"
          >
            Email us to learn more
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}
