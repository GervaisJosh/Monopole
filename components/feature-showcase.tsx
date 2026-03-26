'use client';

import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94];

function ShowcaseCard({
  children,
  title,
  subtitle,
  delay = 0,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease, delay: delay * 0.08 }}
      whileHover={{ scale: 1.03, translateY: -6 }}
      className="rounded-2xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-white/[0.02] p-6 space-y-6 transition-shadow duration-300 shadow-sm dark:shadow-none hover:shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_4px_20px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_0_30px_rgba(255,255,255,0.03)]"
    >
      {children}
      <div className="border-t border-zinc-100 dark:border-white/5 pt-4">
        <h3 className="text-lg font-semibold text-foreground font-display">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mt-2">{subtitle}</p>
      </div>
    </motion.div>
  );
}

function QuestionGroundingUI() {
  const options = [
    'Bianco-style vermouth',
    'Vermouth de Chambery, a lighter alpine style',
    'Extra-dry vermouth',
    'Sweet red vermouth',
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <div className="w-1.5 h-1.5 rounded-full bg-[#0057A4]" />
        Source: 1975 Martini — Gin, Vermouth de Chambery, Orange Bitters
      </div>
      <p className="text-sm text-foreground/80 font-medium">
        What distinguishes the vermouth used in the 1975 Martini from standard
        dry vermouth?
      </p>
      <div className="space-y-2">
        {options.map((opt, i) => (
          <div
            key={i}
            className={`text-xs px-3 py-2 rounded-lg border ${
              i === 1
                ? 'border-[#0057A4]/40 bg-[#0057A4]/10 text-[#0057A4]'
                : 'border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-white/[0.02] text-muted-foreground'
            }`}
          >
            {String.fromCharCode(65 + i)}. {opt}
          </div>
        ))}
      </div>
    </div>
  );
}

function SemanticGradingUI() {
  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">Staff answer:</p>
      <p className="text-sm text-foreground/60 italic">
        &ldquo;It&rsquo;s a classic gin martini with a lighter vermouth. Stirred,
        served in a coupe.&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="text-2xl font-bold text-foreground">75%</div>
        <div className="text-xs text-muted-foreground">Semantic evaluation</div>
      </div>
      <div className="space-y-1.5">
        {[
          { color: 'bg-emerald-500', text: 'Correctly identified lighter vermouth style' },
          { color: 'bg-emerald-500', text: 'Proper technique: stirred, served in coupe' },
          { color: 'bg-amber-500', text: 'Missing: Chambery origin, alpine herb character' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-xs">
            <div className={`w-1 h-1 rounded-full ${item.color}`} />
            <span className="text-muted-foreground">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdaptiveLearningUI() {
  const bars = [
    { label: 'Cocktails', pct: 85, color: 'bg-[#0057A4]' },
    { label: 'Wine', pct: 62, color: 'bg-amber-500' },
    { label: 'Food Menu', pct: 91, color: 'bg-emerald-500' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Staff ELO Trend</span>
        <span className="text-sm font-medium text-emerald-400">
          +47 this week
        </span>
      </div>
      {bars.map((item) => (
        <div key={item.label} className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">{item.label}</span>
            <span className="text-foreground/70">{item.pct}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-zinc-100 dark:bg-white/5">
            <div
              className={`h-full rounded-full ${item.color}`}
              style={{ width: `${item.pct}%` }}
            />
          </div>
        </div>
      ))}
      <div className="text-xs text-amber-400/80 border border-amber-500/20 bg-amber-500/5 rounded-lg px-3 py-2">
        Weak area detected: Wine &rarr; Challenge generated
      </div>
    </div>
  );
}

export function FeatureShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ShowcaseCard
        title="Every question traces to your menu"
        subtitle="No generic quiz banks. Every question is generated from real menu data with guaranteed grounding."
        delay={0}
      >
        <QuestionGroundingUI />
      </ShowcaseCard>

      <ShowcaseCard
        title="Grading that understands intent"
        subtitle="Partial credit, rubric-based evaluation, and structured feedback — not just right or wrong."
        delay={1}
      >
        <SemanticGradingUI />
      </ShowcaseCard>

      <ShowcaseCard
        title="The system learns how to train your staff"
        subtitle="ELO ratings, topic mastery tracking, and calibration algorithms that improve weekly."
        delay={2}
      >
        <AdaptiveLearningUI />
      </ShowcaseCard>
    </div>
  );
}
