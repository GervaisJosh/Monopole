import Image from 'next/image';
import { SectionWrapper } from '@/components/section-wrapper';
import { FeatureCard } from '@/components/feature-card';
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
      <SectionWrapper className="pt-32 md:pt-40 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Hero Text */}
          <div className="order-2 lg:order-1">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Pre-Shift: Training that starts with your menus.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Pre-Shift ingests your food, wine, and cocktail menus—plus SOPs and training manuals—and turns them into structured lessons, quizzes, and an always-up-to-date knowledge base for your team.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full border border-border/50 bg-background/50 text-sm font-medium">
                Built from your actual menus
              </span>
              <span className="px-4 py-2 rounded-full border border-border/50 bg-background/50 text-sm font-medium">
                Lessons, quizzes, and knowledge base
              </span>
              <span className="px-4 py-2 rounded-full border border-border/50 bg-background/50 text-sm font-medium">
                Front & back-of-house ready
              </span>
            </div>
          </div>

          {/* Right: Dashboard Image Placeholder */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/preshift-dashboard-placeholder.jpg"
                alt="Pre-Shift dashboard showing menu-based training modules for a restaurant team."
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* How It Works Section */}
      <SectionWrapper className="bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Built directly from your menus and documents
            </h2>
            <p className="text-muted-foreground md:text-lg leading-relaxed">
              Pre-Shift starts with the information you already have: PDFs of your menus, wine lists, cocktail lists, allergy charts, SOPs, and training manuals.
            </p>
            <p className="text-muted-foreground md:text-lg leading-relaxed mt-4">
              The system parses that information into structured items—dishes, wines, cocktails, sections, and standards—and stores them in a searchable knowledge base that powers lessons, quizzes, and inline conversations with your team.
            </p>
          </div>

          {/* 3-Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium text-xl mb-3">
                1. Upload your menus and docs
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Food menus, cocktails, wine by the glass, bottle lists, allergy information, SOPs, and training manuals.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium text-xl mb-3">
                2. Structure and review the knowledge base
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Pre-Shift organizes that information into items and sections. You can review, edit, and approve before it becomes training material.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium text-xl mb-3">
                3. Create modules and tests from that information
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Modules, quizzes, and refresher lessons are generated from the same underlying data, so training always matches what's on the floor tonight.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Key Features Section */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Key Features</h2>
          <p className="text-muted-foreground md:text-lg">
            A menu- and data-driven training system that turns your information into structured knowledge for your team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            title="Multi-menu upload & coverage"
            description="Upload food, cocktail, wine by the glass, bottle lists, and seasonal inserts. Pre-Shift keeps track of each section so training aligns with what guests actually see."
            icon={<Upload className="h-10 w-10" />}
            delay={0}
          />
          <FeatureCard
            title="Allergy & dietary flagging"
            description="Tag items with allergy and dietary information so staff can quickly learn what is safe for each guest and why. Use the same data for both training and daily reference."
            icon={<ShieldAlert className="h-10 w-10" />}
            delay={1}
          />
          <FeatureCard
            title="Audio enrichment for better learning"
            description="Layer recorded audio explanations from your leadership or trainers on top of written content, so staff can hear how you talk about dishes, wines, and service standards."
            icon={<Headphones className="h-10 w-10" />}
            delay={2}
          />
          <FeatureCard
            title="Module creation from a shared knowledge base"
            description="Training modules are built from the same underlying knowledge base as your menus and docs. The system suggests modules and questions automatically, and managers can refine and approve them."
            icon={<BookOpen className="h-10 w-10" />}
            delay={3}
          />
          <FeatureCard
            title="Configurable tests and recurring assessments"
            description="Set up quarterly tests, section-specific quizzes, or short pre-shift checks. Choose which menus or topics they cover and how often they recur."
            icon={<ClipboardCheck className="h-10 w-10" />}
            delay={4}
          />
          <FeatureCard
            title="Personalized modules based on performance"
            description="When a staff member misses questions about a region, category, or dish, Pre-Shift schedules follow-up modules to close those gaps over time."
            icon={<Target className="h-10 w-10" />}
            delay={5}
          />
          <FeatureCard
            title="Inline, menu-aware chatbot"
            description="Staff can ask questions in plain language about the menu and standards. The focus is not 'right or wrong' answers, but working through the information until they truly understand."
            icon={<MessageSquare className="h-10 w-10" />}
            delay={6}
          />
        </div>
      </SectionWrapper>

      {/* Outcomes Section */}
      <SectionWrapper className="bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Turn information into confident service
            </h2>
            <p className="text-muted-foreground md:text-lg leading-relaxed mb-4">
              Most restaurants already have the information they need—menus, allergy charts, wine lists, pre-shift notes—but it lives in PDFs, binders, and scattered docs.
            </p>
            <p className="text-muted-foreground md:text-lg leading-relaxed">
              Pre-Shift connects that information and turns it into structured training your team can use every day: short modules before service, deeper refreshers between seasons, and ongoing conversations around your actual offerings.
            </p>
          </div>

          {/* Outcome Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 rounded-lg border border-border/50 bg-background/30">
              <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-medium text-lg mb-2">Faster onboarding for new staff</h3>
              <p className="text-muted-foreground text-sm">
                New hires get up to speed quickly with structured modules built directly from your current menus and standards.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-border/50 bg-background/30">
              <Users className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-medium text-lg mb-2">More consistent menu knowledge across the team</h3>
              <p className="text-muted-foreground text-sm">
                Everyone learns from the same underlying information, ensuring consistent guest experiences no matter who's on the floor.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-border/50 bg-background/30">
              <RefreshCw className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-medium text-lg mb-2">Less time rebuilding training from scratch every menu change</h3>
              <p className="text-muted-foreground text-sm">
                Update your knowledge base once, and training modules, quizzes, and reference materials update automatically.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Optional: Image Strip Section */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/preshift-team-placeholder.jpg"
              alt="Restaurant team reviewing training modules before service."
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/preshift-analytics-placeholder.jpg"
              alt="Pre-Shift training analytics showing completion and knowledge areas."
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section - Static */}
      <SectionWrapper className="bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-serif text-2xl md:text-3xl mb-4">
            Interested in using Pre-Shift at your restaurant?
          </h3>
          <p className="text-muted-foreground mb-6">
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
