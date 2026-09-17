import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiTailwindcss,
  SiNodedotjs,
  SiThreedotjs,
  SiSupabase,
  SiFramer,
  SiMongodb,
  SiOpenai,
  SiGit,
  SiGithub,
  SiVercel,
  SiDocker,
  SiRedis,
} from 'react-icons/si';

const SKILLS_ICONS = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Python', icon: SiPython },
  { name: 'Django', icon: SiDjango },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Three.js', icon: SiThreedotjs },
  { name: 'OpenAI', icon: SiOpenai },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'Framer Motion', icon: SiFramer },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Docker', icon: SiDocker },
  { name: 'Redis', icon: SiRedis },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Vercel', icon: SiVercel },
];

// Duplicate once to ensure continuous flow across any viewport width
const TICKER_ICONS = [...SKILLS_ICONS, ...SKILLS_ICONS];

export default function TechTicker() {
  const renderIconGroup = (keyPrefix, ariaHidden = false) => (
    <div
      className="flex items-center gap-10 sm:gap-14 pr-10 sm:pr-14 shrink-0"
      aria-hidden={ariaHidden}
    >
      {TICKER_ICONS.map((skill, idx) => (
        <div
          key={`${keyPrefix}-${idx}`}
          className="group relative flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
          title={skill.name}
          aria-label={skill.name}
        >
          <skill.icon className="w-7 h-7 sm:w-8 sm:h-8 text-zinc-500 group-hover:text-zinc-900 transition-colors duration-200" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-[10px] font-mono text-zinc-700 bg-white/95 px-2 py-0.5 rounded shadow-sm border border-zinc-200 pointer-events-none whitespace-nowrap z-30">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full relative select-none pt-4 pb-4">
      {/* Top Header Row: "THE STACK IT RUNS ON" and "See the work ↘" */}
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between mb-4 sm:mb-5">
        <span className="font-mono text-[11px] sm:text-xs text-zinc-500 uppercase tracking-[0.2em] font-medium select-none">
          THE STACK IT RUNS ON
        </span>
        <a
          href="#projects"
          className="group inline-flex items-center gap-1 font-mono text-[11px] sm:text-xs text-zinc-600 hover:text-zinc-950 transition-colors border-b border-zinc-400/80 hover:border-zinc-900 pb-0.5"
        >
          <span>See the work</span>
          <ArrowDownRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
        </a>
      </div>

      {/* Infinite Icon Carousel */}
      <div className="relative w-full overflow-hidden">
        {/* Edge fade overlays for smooth aesthetic entrance/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#f5f2ec] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#f5f2ec] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {renderIconGroup('primary')}
          {renderIconGroup('duplicate', true)}
        </div>
      </div>
    </div>
  );
}
