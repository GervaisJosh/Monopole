'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94];

const PRODUCTS = [
  {
    id: 'preshift',
    label: 'PRE-SHIFT',
    tagline: 'B2B \u00B7 Restaurant staff training',
    color: '#0057A4',
    feeds: [
      'Enriched menu data \u2192 canonical knowledge base',
      'Staff mastery signals \u2192 training priorities',
      'Grounded question/rubric generation',
    ],
    receives: [
      'Guest taste data informs training focus',
      'Popular dishes surface as priority topics',
      'Consumer feedback validates staff readiness',
    ],
    nodes: [
      { id: 'ingest', label: 'Menu Ingestion', sub: 'Extract \u00B7 enrich \u00B7 vectorize' },
      { id: 'generate', label: 'Generation Engine', sub: 'Grounded questions + rubrics' },
      { id: 'train', label: '6 Training Modalities', sub: 'Modules \u00B7 assessments \u00B7 CAT' },
      { id: 'loop', label: 'Closed-Loop', sub: 'Calibration \u00B7 quality audit' },
    ],
  },
  {
    id: 'som',
    label: 'SOM',
    tagline: 'Consumer \u00B7 Beverage discovery',
    color: '#E8593C',
    feeds: [
      'Ratings + taste vectors \u2192 shared preference graph',
      'Producer engagement signals',
      'Cross-category preference patterns',
    ],
    receives: [
      'Enriched wine/cocktail/bev data from Pre-Shift KB',
      'Producer profiles \u00B7 tasting notes \u00B7 regions',
      'Restaurant inventory availability',
    ],
    nodes: [
      { id: 'scan', label: 'Scan Anything', sub: 'Wine \u00B7 beer \u00B7 coffee \u00B7 NA' },
      { id: 'rate', label: 'Rate & Review', sub: 'Build your taste profile' },
      { id: 'compat', label: 'Compatibility Score', sub: 'How well does this fit you?' },
      { id: 'discover_bev', label: 'Discover', sub: 'Producers \u00B7 regions \u00B7 styles' },
    ],
  },
  {
    id: 'rex',
    label: 'REX',
    tagline: 'Consumer \u00B7 Restaurant & dish discovery',
    color: '#C9A96E',
    feeds: [
      'Dish ratings \u2192 restaurant quality signals',
      'Cuisine preference vectors',
      'City/travel intent data',
    ],
    receives: [
      'Structured dish data from Pre-Shift KB',
      'Allergens \u00B7 ingredients \u00B7 chef notes',
      'Beverage taste profile from Som',
    ],
    nodes: [
      { id: 'rate_dish', label: 'Rate Any Dish', sub: 'From any Pre-Shift restaurant' },
      { id: 'learn_dish', label: 'Learn About It', sub: 'Ingredients \u00B7 chef \u00B7 cuisine' },
      { id: 'compat_rest', label: 'Restaurant Match', sub: 'Tailored to your palate' },
      { id: 'travel', label: 'Travel & Explore', sub: 'Any city \u00B7 any cuisine' },
    ],
  },
];

const SHARED_LAYER = {
  label: 'SHARED KNOWLEDGE LAYER',
  sublabel: 'Supabase \u00B7 Pinecone \u00B7 Canonical restaurant data',
  color: '#8B5CF6',
  stores: [
    { id: 'menu_kb', label: 'Menu Knowledge Base', sub: 'Every dish \u00B7 wine \u00B7 cocktail \u00B7 spec', color: '#10B981' },
    { id: 'taste_graph', label: 'Taste Graph', sub: 'Consumer preferences \u00B7 ratings \u00B7 vectors', color: '#EC4899' },
    { id: 'performance', label: 'Performance Data', sub: 'Staff mastery \u00B7 question difficulty \u00B7 ELO', color: '#F59E0B' },
    { id: 'restaurant_graph', label: 'Restaurant Graph', sub: 'Venues \u00B7 menus \u00B7 chefs \u00B7 cities', color: '#06B6D4' },
  ],
};

const FLYWHEEL_STEPS = [
  { text: 'More restaurants on Pre-Shift', color: '#0057A4' },
  { text: 'Richer, deeper menu data', color: '#8B5CF6' },
  { text: 'Better Som & Rex recommendations', color: '#E8593C' },
  { text: 'More consumer engagement', color: '#C9A96E' },
  { text: 'More taste data flows back', color: '#EC4899' },
  { text: 'Smarter training priorities', color: '#0057A4' },
  { text: 'Sharper staff, better guest experiences', color: '#10B981' },
  { text: 'More restaurants want Pre-Shift', color: '#F59E0B' },
];

function useColors() {
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === 'dark';
  return {
    text: dark ? '#FAFAFA' : '#0A0A0A',
    textSecondary: dark ? '#D4D4D8' : '#3F3F46',
    textMuted: dark ? '#737373' : '#71717A',
    textDimmed: dark ? '#525252' : '#A1A1AA',
    cardBg: dark ? 'rgba(255,255,255,0.015)' : 'rgba(0,0,0,0.02)',
    cardBorder: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
    nodeBg: dark ? 'rgba(255,255,255,0.025)' : 'rgba(0,0,0,0.03)',
    nodeBorder: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
    connectorFade: dark ? '44' : '33',
    pillBg: dark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
    pillBorder: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
    arrowFill: dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)',
    dark,
  };
}

function ProductCard({
  product,
  isHovered,
  onHover,
  onLeave,
  colors,
  layout,
}: {
  product: typeof PRODUCTS[0];
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  colors: ReturnType<typeof useColors>;
  layout: 'full' | 'half';
}) {
  const accentBg = isHovered
    ? product.color + (colors.dark ? '0F' : '0A')
    : colors.cardBg;
  const accentBorder = isHovered
    ? product.color + (colors.dark ? '2E' : '22')
    : colors.cardBorder;

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        background: accentBg,
        border: `1px solid ${accentBorder}`,
        borderRadius: 16,
        padding: layout === 'full' ? '16px 20px 20px' : '16px 20px 20px',
        transition: 'all 0.3s ease',
        cursor: 'default',
        flex: layout === 'half' ? '1 1 calc(50% - 6px)' : undefined,
        minWidth: layout === 'half' ? 300 : undefined,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 14,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: product.color,
              boxShadow: isHovered ? `0 0 12px ${product.color}66` : 'none',
              transition: 'box-shadow 0.25s ease',
            }}
          />
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: isHovered ? product.color : colors.textMuted,
              transition: 'color 0.25s ease',
            }}
          >
            {product.label}
          </div>
        </div>
        <div style={{ fontSize: 11, color: colors.textDimmed, fontWeight: 400 }}>
          {product.tagline}
        </div>
      </div>

      {/* Nodes */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          flexDirection: layout === 'half' ? 'column' : 'row',
        }}
      >
        {product.nodes.map((node) => (
          <div
            key={node.id}
            style={{
              flex: layout === 'full' ? '1 1 calc(25% - 6px)' : undefined,
              minWidth: layout === 'full' ? 140 : undefined,
              background: colors.nodeBg,
              border: `1px solid ${colors.nodeBorder}`,
              borderRadius: layout === 'full' ? 10 : 8,
              padding: layout === 'full' ? '12px 14px' : '10px 12px',
              display: layout === 'half' ? 'flex' : undefined,
              justifyContent: layout === 'half' ? 'space-between' : undefined,
              alignItems: layout === 'half' ? 'center' : undefined,
            }}
          >
            <div
              style={{
                fontSize: layout === 'full' ? 13 : 12,
                fontWeight: 600,
                color: colors.textSecondary,
                marginBottom: layout === 'full' ? 3 : 0,
              }}
            >
              {node.label}
            </div>
            <div style={{ fontSize: layout === 'full' ? 11 : 10, color: colors.textDimmed, lineHeight: 1.35 }}>
              {node.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Hover details */}
      {isHovered && (
        <div
          style={{
            marginTop: 12,
            display: 'flex',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: 1, minWidth: 200 }}>
            <div
              style={{
                fontSize: 10,
                color: product.color,
                letterSpacing: '0.1em',
                fontWeight: 600,
                marginBottom: 6,
              }}
            >
              {'\u2193'} FEEDS INTO SHARED LAYER
            </div>
            {product.feeds.map((f, i) => (
              <div key={i} style={{ fontSize: 11, color: colors.textMuted, lineHeight: 1.5 }}>
                {f}
              </div>
            ))}
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div
              style={{
                fontSize: 10,
                color: product.color,
                letterSpacing: '0.1em',
                fontWeight: 600,
                marginBottom: 6,
              }}
            >
              {'\u2191'} RECEIVES FROM SHARED LAYER
            </div>
            {product.receives.map((r, i) => (
              <div key={i} style={{ fontSize: 11, color: colors.textMuted, lineHeight: 1.5 }}>
                {r}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function EcosystemFlywheel() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [hoveredStore, setHoveredStore] = useState<string | null>(null);
  const colors = useColors();

  const preshift = PRODUCTS[0];
  const consumerProducts = PRODUCTS.slice(1);

  return (
    <div style={{ maxWidth: 920, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* B2B label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.4, ease }}
        style={{ display: 'flex', justifyContent: 'center', paddingBottom: 8 }}
      >
        <div
          style={{
            fontSize: 10,
            color: colors.textDimmed,
            letterSpacing: '0.05em',
            padding: '3px 12px',
            borderRadius: 10,
            background: colors.pillBg,
            border: `1px solid ${colors.pillBorder}`,
            fontWeight: 500,
          }}
        >
          B2B &mdash; Restaurant-facing
        </div>
      </motion.div>

      {/* Pre-Shift card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease }}
      >
        <ProductCard
          product={preshift}
          isHovered={hoveredProduct === 'preshift'}
          onHover={() => setHoveredProduct('preshift')}
          onLeave={() => setHoveredProduct(null)}
          colors={colors}
          layout="full"
        />
      </motion.div>

      {/* Connector: Pre-Shift to Shared Layer */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '6px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <div
            style={{
              width: 1.5,
              height: 20,
              background: `linear-gradient(180deg, ${preshift.color}${colors.connectorFade}, ${SHARED_LAYER.color}${colors.connectorFade})`,
            }}
          />
          <svg width="10" height="8" viewBox="0 0 10 8">
            <path d="M5 8L0 0h10z" fill={SHARED_LAYER.color + '66'} />
          </svg>
        </div>
      </div>

      {/* Shared Knowledge Layer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease, delay: 0.08 }}
        onMouseEnter={() => setHoveredProduct('shared')}
        onMouseLeave={() => setHoveredProduct(null)}
        style={{
          background:
            hoveredProduct === 'shared'
              ? SHARED_LAYER.color + (colors.dark ? '0F' : '08')
              : colors.cardBg,
          border: `1px solid ${
            hoveredProduct === 'shared'
              ? SHARED_LAYER.color + (colors.dark ? '2E' : '22')
              : colors.cardBorder
          }`,
          borderRadius: 20,
          padding: '20px 24px 24px',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: SHARED_LAYER.color,
              boxShadow:
                hoveredProduct === 'shared' ? `0 0 12px ${SHARED_LAYER.color}66` : 'none',
            }}
          />
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: hoveredProduct === 'shared' ? SHARED_LAYER.color : colors.textMuted,
              transition: 'color 0.25s ease',
            }}
          >
            {SHARED_LAYER.label}
          </div>
        </div>
        <div style={{ fontSize: 12, color: colors.textDimmed, marginBottom: 16 }}>
          {SHARED_LAYER.sublabel}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {SHARED_LAYER.stores.map((store) => {
            const isStoreHovered = hoveredStore === store.id;
            return (
              <div
                key={store.id}
                onMouseEnter={() => setHoveredStore(store.id)}
                onMouseLeave={() => setHoveredStore(null)}
                style={{
                  flex: '1 1 calc(25% - 6px)',
                  minWidth: 160,
                  background: isStoreHovered
                    ? `linear-gradient(135deg, ${store.color}12, ${store.color}06)`
                    : colors.nodeBg,
                  border: `1px solid ${isStoreHovered ? store.color + '44' : colors.nodeBorder}`,
                  borderRadius: 10,
                  padding: '14px 16px',
                  transition: 'all 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: store.color,
                    marginBottom: 8,
                    opacity: isStoreHovered ? 1 : 0.5,
                    transition: 'opacity 0.2s ease',
                  }}
                />
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: isStoreHovered ? colors.text : colors.textSecondary,
                    marginBottom: 3,
                    transition: 'color 0.2s ease',
                  }}
                >
                  {store.label}
                </div>
                <div style={{ fontSize: 11, color: colors.textDimmed, lineHeight: 1.35 }}>
                  {store.sub}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Connector: Shared Layer to Consumer products */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '6px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <svg width="10" height="8" viewBox="0 0 10 8">
            <path d="M5 8L0 0h10z" fill={colors.arrowFill} />
          </svg>
          <div
            style={{
              fontSize: 10,
              color: colors.textDimmed,
              letterSpacing: '0.05em',
              padding: '3px 12px',
              borderRadius: 10,
              background: colors.pillBg,
              border: `1px solid ${colors.pillBorder}`,
              fontWeight: 500,
            }}
          >
            Consumer-facing
          </div>
          <svg width="10" height="8" viewBox="0 0 10 8">
            <path d="M5 8L0 0h10z" fill={colors.arrowFill} />
          </svg>
        </div>
      </div>

      {/* Som and Rex side by side */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease, delay: 0.16 }}
        style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
      >
        {consumerProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isHovered={hoveredProduct === product.id}
            onHover={() => setHoveredProduct(product.id)}
            onLeave={() => setHoveredProduct(null)}
            colors={colors}
            layout="half"
          />
        ))}
      </motion.div>

      {/* Som / Rex connection */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.4, ease, delay: 0.2 }}
        style={{ display: 'flex', justifyContent: 'center', padding: '4px 0' }}
      >
        <div
          style={{
            fontSize: 10,
            color: '#8B5CF6',
            letterSpacing: '0.05em',
            padding: '4px 16px',
            borderRadius: 10,
            background: 'rgba(139,92,246,0.06)',
            border: '1px solid rgba(139,92,246,0.15)',
            fontWeight: 500,
          }}
        >
          {'\u2190'} Shared taste graph &mdash; beverage + food preferences {'\u2192'}
        </div>
      </motion.div>

      {/* Flywheel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease, delay: 0.24 }}
        style={{
          background: colors.cardBg,
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: 16,
          padding: 24,
          marginTop: 8,
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: colors.textMuted,
            }}
          >
            THE FLYWHEEL
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 0,
            alignItems: 'center',
          }}
        >
          {FLYWHEEL_STEPS.map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  fontSize: 12,
                  color: step.color,
                  fontWeight: 500,
                  padding: '6px 12px',
                  borderRadius: 8,
                  background: step.color + '0A',
                  border: `1px solid ${step.color}20`,
                  whiteSpace: 'nowrap',
                }}
              >
                {step.text}
              </div>
              <div style={{ color: colors.textDimmed, padding: '0 6px', fontSize: 14 }}>
                {i < FLYWHEEL_STEPS.length - 1 ? '\u2192' : '\u21BB'}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, ease, delay: 0.3 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 40,
          flexWrap: 'wrap',
          padding: '24px 0 8px',
        }}
      >
        {[
          { value: '3', label: 'Products' },
          { value: '1', label: 'Shared knowledge layer' },
          { value: '6', label: 'Data feedback loops' },
          { value: '\u221E', label: 'Compounding' },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: colors.text,
                letterSpacing: '-0.02em',
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: 11,
                color: colors.textDimmed,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
