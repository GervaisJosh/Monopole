'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { FeatureShowcase } from '@/components/feature-showcase';
import { FeatureBentoCard } from '@/components/ui/feature-bento-card';
import BlurText from '@/components/BlurText';
import {
  ListChecks,
  Exam,
  Gauge,
  PencilLine,
  Target,
  ChatCircle,
  Upload,
  Database,
  TrendUp,
} from '@phosphor-icons/react';

const ease: number[] = [0.25, 0.46, 0.45, 0.94];

function SectionHeading(props: { text: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
      <BlurText
        text={props.text}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-display justify-center"
        delay={100}
        animateBy="words"
        direction="bottom"
      />
      {props.subtitle && (
        <p className="text-muted-foreground sm:text-lg mt-4 max-w-2xl mx-auto">
          {props.subtitle}
        </p>
      )}
    </div>
  );
}

const modalities = [
  {
    title: 'Modules',
    description:
      'Structured curriculum by category \u2014 food, cocktails, wine, service. Staff works through questions one at a time with immediate feedback, citations, and ELO-adjusted difficulty.',
    icon: 'ListChecks',
  },
  {
    title: 'Assessments',
    description:
      'Admin-created evaluations that measure existing knowledge. Timed, no feedback during the test. Semantic grading with structured per-question feedback after submission. Grade override for managers.',
    icon: 'Exam',
  },
  {
    title: 'Diagnostic',
    description:
      'A 15-question adaptive assessment using computerized adaptive testing. Starts near the staff member\u2019s current level and adjusts in real time \u2014 correct answers raise difficulty, wrong answers lower it.',
    icon: 'Gauge',
  },
  {
    title: 'Build a Lesson',
    description:
      'Staff types a topic (\u201CItalian wines,\u201D \u201Cdessert pairings\u201D) and the system generates a personalized lesson from the restaurant\u2019s knowledge base in real time. Three teaching sections with inline comprehension checks, followed by a five-question assessment.',
    icon: 'PencilLine',
  },
  {
    title: 'Challenge Mode',
    description:
      'Twenty questions targeting the staff member\u2019s weakest areas. The system pulls from granular topic mastery data to focus on exactly what each person needs to practice. Always 50/50 MCQ and short answer.',
    icon: 'Target',
  },
  {
    title: 'Ask Pre-Shift',
    description:
      'A Q&A assistant that answers any question about your menu, grounded in your restaurant\u2019s actual data. \u201CWhat\u2019s in the 1975 Martini?\u201D \u201CWhich wines pair with the lamb?\u201D Fast, cited, accurate.',
    icon: 'ChatCircle',
  },
];

const iconMap: Record<string, React.ReactNode> = {
  ListChecks: <ListChecks size={32} weight="light" />,
  Exam: <Exam size={32} weight="light" />,
  Gauge: <Gauge size={32} weight="light" />,
  PencilLine: <PencilLine size={32} weight="light" />,
  Target: <Target size={32} weight="light" />,
  ChatCircle: <ChatCircle size={32} weight="light" />,
};

export default function PreShiftPage() {
  return (
    <div>
      {/* Hero */}
      <SectionWrapper className="pt-32 sm:pt-40 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease }}
            className="font-brand text-sm tracking-[0.3em] uppercase text-[#0057A4] mb-6"
          >
            PRE-SHIFT
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            Training that starts with your menus.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10"
          >
            Pre-Shift is a training compiler. It ingests your food menus, wine
            lists, cocktail specs, and service documents &mdash; then generates
            structured, grounded training that adapts to each staff member and
            improves with every interaction. Every question traces to a real menu
            item. Every answer makes the system smarter.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://pre-shift.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-medium border border-zinc-300 dark:border-white/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Visit pre-shift.io
            </a>
            <a
              href="https://apps.apple.com/app/pre-shift-restaurant-training/id6744385612"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Download on the App Store
            </a>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* How it works */}
      <SectionWrapper>
        <SectionHeading text="How it works" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureBentoCard
            title="1. Upload your menus and documents"
            titleClassName="text-[#0057A4]"
            description="Food menus, cocktail specs, wine lists, service standards, training manuals &mdash; PDF, URL, or manual entry. Pre-Shift extracts every item, enriches it with tasting notes, pairing suggestions, and service context, and builds a searchable knowledge base unique to your restaurant."
            icon={<Upload size={32} weight="light" />}
            delay={0}
            accentColor="preshift"
          />
          <FeatureBentoCard
            title="2. Generate grounded training"
            titleClassName="text-[#0057A4]"
            description="The system compiles your knowledge base into six training modalities &mdash; structured modules, timed assessments, adaptive diagnostics, Build a Lesson, Challenge Mode, and Ask Pre-Shift. Every question is generated from real menu items. Nothing generic. Nothing hallucinated."
            icon={<Database size={32} weight="light" />}
            delay={1}
            accentColor="preshift"
          />
          <FeatureBentoCard
            title="3. Measure, adapt, improve"
            titleClassName="text-[#0057A4]"
            description="Staff answers feed into an ELO-based mastery system that tracks knowledge down to granular topics. The system identifies weak areas, generates targeted practice, and runs a weekly calibration cycle. The longer you use it, the better it trains."
            icon={<TrendUp size={32} weight="light" />}
            delay={2}
            accentColor="preshift"
          />
        </div>
      </SectionWrapper>

      {/* See it in action */}
      <SectionWrapper>
        <SectionHeading text="See it in action" />
        <FeatureShowcase />
      </SectionWrapper>

      {/* Six modalities */}
      <SectionWrapper>
        <SectionHeading
          text="Six training modalities"
          subtitle="Every modality draws from the same canonical knowledge base &mdash; your menus, your documents, your restaurant's identity."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modalities.map((m, i) => (
            <FeatureBentoCard
              key={m.title}
              title={m.title}
              description={m.description}
              icon={iconMap[m.icon]}
              delay={i}
              accentColor="preshift"
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Closed loop */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <SectionHeading text="The closed loop" />
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease }}
              className="text-muted-foreground leading-relaxed"
            >
              The closed loop is what makes Pre-Shift a compounding system, not
              a static one.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease, delay: 0.08 }}
              className="text-muted-foreground leading-relaxed"
            >
              Every week, a calibration agent analyzes staff performance data
              &mdash; identifying coverage gaps, flagging low-quality questions,
              mining common misconceptions from real wrong answers, and finding
              the highest-performing questions to use as generation examples.
              That analysis produces a generation brief that the system consumes
              the next time it creates content &mdash; injecting real exemplars,
              pre-loading discovered misconceptions into rubrics, and
              prioritizing undertested topics. A separate quality audit retires
              questions that don&apos;t discriminate well or that staff
              consistently flag.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease, delay: 0.16 }}
              className="text-foreground font-medium leading-relaxed"
            >
              The result: the training your team takes in month three is
              materially better than the training they took in month one &mdash;
              automatically, without anyone manually updating a quiz.
            </motion.p>
          </div>
        </div>
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
            Ready to see it in action?
          </motion.h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-10">
            See how Pre-Shift turns your menus into training your team actually
            uses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pre-shift.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-medium border border-zinc-300 dark:border-white/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Visit pre-shift.io
            </a>
            <a
              href="https://apps.apple.com/app/pre-shift-restaurant-training/id6744385612"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Download on the App Store
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}