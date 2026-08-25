import React from 'react';
import { motion } from 'framer-motion';

const TICKER_ITEMS = [
  'DJANGO',
  'PYTHON',
  'AI INTEGRATION',
  'SCALABLE SYSTEMS',
  'REACT.JS',
  'TYPESCRIPT',
  'NEXT.JS',
  'POSTGRESQL',
  'REST APIS',
  'PERFORMANCE TUNING',
  'TAILWIND CSS',
  'SYSTEM ARCHITECTURE',
];

export default function TechTicker() {
  const content = (
    <div className="flex items-center shrink-0">
      {TICKER_ITEMS.map((item, idx) => (
        <React.Fragment key={idx}>
          <span className="font-mono text-xs sm:text-sm tracking-[0.25em] text-zinc-600 font-medium uppercase select-none">
            {item}
          </span>
          {idx < TICKER_ITEMS.length - 1 ? (
            <span className="text-zinc-400 mx-4 sm:mx-6 select-none font-sans font-light">
              —
            </span>
          ) : (
            <span className="mx-6 sm:mx-8 inline-flex items-center justify-center select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8a845]" />
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-[#f5f2ec] border-y border-zinc-200/90 py-4 sm:py-5 overflow-hidden relative select-none">
      {/* Subtle edge fade overlays for smooth entrance and exit */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#f5f2ec] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#f5f2ec] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 28,
            ease: 'linear',
          },
        }}
      >
        {content}
        {content}
      </motion.div>
    </div>
  );
}
