'use client';

import React, { useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  enableBlur?: boolean;
  baseOpacity?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  staggerDelay?: number;
  duration?: number;
  ease?: number[];
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  enableBlur = true,
  baseOpacity = 0,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  staggerDelay = 0.04,
  duration = 0.6,
  ease = [0.25, 0.46, 0.45, 0.94],
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const words = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).filter(Boolean);
  }, [children]);

  return (
    <div ref={ref} className={containerClassName}>
      <p className={`text-inherit leading-relaxed ${textClassName}`}>
        {words.map((word, index) => {
          if (word.match(/^\s+$/)) {
            return <span key={index}>{word}</span>;
          }
          return (
            <motion.span
              key={index}
              initial={{
                opacity: baseOpacity,
                filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
              }}
              animate={
                isInView
                  ? { opacity: 1, filter: 'blur(0px)' }
                  : {
                      opacity: baseOpacity,
                      filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
                    }
              }
              transition={{
                duration,
                ease,
                delay: index * staggerDelay,
              }}
              className="inline-block"
              style={{ willChange: 'opacity, filter' }}
            >
              {word}
            </motion.span>
          );
        })}
      </p>
    </div>
  );
};

export default ScrollReveal;
