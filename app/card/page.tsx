'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Phone,
  EnvelopeSimple,
  FloppyDisk,
  ArrowUpRight,
} from '@phosphor-icons/react';

const ease = [0.25, 0.46, 0.45, 0.94];

function downloadVCard() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Josh Gervais
ORG:Monopole AI
TITLE:Founder
TEL;TYPE=CELL:+15125550000
EMAIL:josh@monopole-ai.com
URL:https://monopole-ai.com
URL:https://pre-shift.io
END:VCARD`;
  // TODO: Replace +15125550000 with Josh's actual phone number

  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Josh-Gervais.vcf';
  a.click();
  URL.revokeObjectURL(url);
}

const contactRows = [
  {
    icon: <Phone size={20} weight="light" />,
    label: '(512) 555-0000', // TODO: Replace with Josh's actual phone number
    href: 'tel:+15125550000', // TODO: Replace with Josh's actual phone number
  },
  {
    icon: <EnvelopeSimple size={20} weight="light" />,
    label: 'josh@monopole-ai.com',
    href: 'mailto:josh@monopole-ai.com',
  },
];

const linkRows = [
  {
    label: 'Pre-Shift',
    href: 'https://pre-shift.io',
  },
  {
    label: 'Monopole AI',
    href: 'https://monopole-ai.com',
  },
  {
    label: 'App Store',
    href: 'https://apps.apple.com/app/pre-shift-restaurant-training/id6504956209',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/josh-gervais/',
  },
];

export default function CardPage() {
  return (
    <div className="min-h-screen bg-black dark:bg-black flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease }}
        >
          <Image
            src="/favicon.png"
            alt="Monopole AI"
            width={56}
            height={56}
            className="rounded-xl"
          />
        </motion.div>

        {/* Name & title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
          className="mt-6 text-2xl font-bold text-white font-display"
        >
          Josh Gervais
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.15 }}
          className="text-sm text-white/50 mt-1"
        >
          Founder
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
          className="text-sm text-white/40 text-center mt-4 max-w-xs leading-relaxed"
        >
          Building effective, affordable, and beautiful software for
          hospitality.
        </motion.p>

        {/* Contact rows */}
        <div className="w-full mt-8 space-y-3">
          {contactRows.map((row, i) => (
            <motion.a
              key={row.href}
              href={row.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease, delay: 0.3 + i * 0.06 }}
              className="flex items-center gap-3 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/70 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-200"
            >
              <span className="text-white/50">{row.icon}</span>
              {row.label}
            </motion.a>
          ))}
        </div>

        {/* Save Contact — prominent */}
        <motion.button
          onClick={downloadVCard}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease, delay: 0.45 }}
          className="flex items-center justify-center gap-3 w-full mt-3 rounded-xl bg-white text-black px-4 py-3 text-sm font-medium hover:bg-white/90 transition-colors duration-200"
        >
          <FloppyDisk size={20} weight="light" />
          Save Contact
        </motion.button>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease, delay: 0.5 }}
          className="w-full border-t border-white/10 my-6"
        />

        {/* Link rows */}
        <div className="w-full space-y-3">
          {linkRows.map((row, i) => (
            <motion.a
              key={row.href}
              href={row.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease, delay: 0.55 + i * 0.06 }}
              className="flex items-center justify-between w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/70 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-200"
            >
              {row.label}
              <ArrowUpRight size={16} weight="light" className="text-white/30" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
