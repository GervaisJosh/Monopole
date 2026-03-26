'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: number[];
  splitType?: 'chars' | 'words';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textAlign?: React.CSSProperties['textAlign'];
  onAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0.03,
  duration = 0.6,
  ease = [0.25, 0.46, 0.45, 0.94],
  splitType = 'words',
  tag = 'p',
  textAlign = 'center',
  onAnimationComplete,
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => setFontsLoaded(true));
    }
  }, []);

  const elements = splitType === 'words' ? text.split(' ') : text.split('');
  const shouldAnimate = isInView && fontsLoaded;

  const Tag = (tag || 'p') as React.ElementType;

  return (
    <Tag
      ref={ref}
      className={`overflow-hidden inline-block whitespace-normal ${className}`}
      style={{ textAlign }}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration,
            ease,
            delay: index * delay,
          }}
          onAnimationComplete={
            index === elements.length - 1 ? onAnimationComplete : undefined
          }
          style={{
            display: 'inline-block',
            willChange: 'transform, opacity',
          }}
        >
          {element}
          {splitType === 'words' && index < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </Tag>
  );
};

export default SplitText;
