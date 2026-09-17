import React from 'react';

const RIBBON_ITEMS = [
  'PRODUCTION-GRADE SYSTEMS',
  'AI AGENTS & LLM PLATFORMS',
  'FULL-STACK ARCHITECTURE',
  'SUB-SECOND LATENCY TARGETS',
  'SCALABLE BACKEND APIS',
  'REACT & NEXT.JS ECOSYSTEMS',
  'PYTHON & DJANGO OPTIMIZATION',
  'CLEAN CODE & DESIGN PATTERNS',
];

export default function SlantedMarquee() {
  const content = (
    <div className="flex items-center shrink-0">
      {RIBBON_ITEMS.map((item, idx) => (
        <React.Fragment key={idx}>
          <span className="font-display font-black text-sm sm:text-base md:text-lg tracking-wider text-[#1a1a1a] uppercase select-none px-4 sm:px-6 whitespace-nowrap">
            {item}
          </span>
          <span className="text-[#1a1a1a] select-none text-sm sm:text-base px-2">
            ★
          </span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden py-8 sm:py-12 bg-gradient-to-b from-white via-[#f5f2ec]/50 to-[#f5f2ec] select-none z-10">
      {/* Tilted Marquee Ribbon */}
      <div className="w-[115%] -ml-[7.5%] -rotate-2 transform hover:rotate-0 transition-transform duration-500 ease-out bg-[#c8a845] border-y-2 border-[#1a1a1a] shadow-lg py-3 sm:py-3.5">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {content}
          {content}
          {content}
          {content}
        </div>
      </div>
    </div>
  );
}
