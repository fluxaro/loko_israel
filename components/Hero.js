import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import TechTicker from './TechTicker';

// HeroCounter guaranteed never stuck at 0+
function HeroCounter({ to, duration = 1.8 }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: '50px 0px' });

  useEffect(() => {
    if (typeof to !== 'number') return;
    const fallback = setTimeout(() => setCount(to), 1200);
    if (!inView) return () => clearTimeout(fallback);

    let startTime = null;
    let raf;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(to * easeOut));
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };
    raf = requestAnimationFrame(animate);
    return () => {
      clearTimeout(fallback);
      cancelAnimationFrame(raf);
    };
  }, [to, duration, inView]);

  return <span ref={nodeRef} className="inline-block min-w-[1ch]">{count}</span>;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#f5f2ec] text-[#1a1a1a] flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-4">
      {/* Subtle technical background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1a1a1a 1px, transparent 1px),
            linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Ambient soft warm glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#c8a845]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main hero body */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 my-auto flex flex-col items-center text-center">
        


        {/* Top Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200/90 shadow-sm backdrop-blur-md mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8a845] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8a845]"></span>
          </span>
          <span className="font-mono text-xs text-zinc-700 tracking-tight uppercase">
            Full-Stack Software Developer // Open to Roles &amp; Contracts
          </span>
        </motion.div>

        {/* Hero Name & Title Display */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full my-2 sm:my-3"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.03em] text-ink leading-none font-display">
            Loko <span className="font-serif italic font-normal text-accent">Israel</span>
          </h1>
        </motion.div>

        {/* Value Proposition Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-ink font-normal tracking-tight mt-4 sm:mt-5 max-w-3xl leading-snug"
        >
          Engineering{' '}
          <span className="font-serif italic text-accent font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl px-0.5">
            production-grade
          </span>{' '}
          web applications, AI platforms &amp; scalable backend systems.
        </motion.h2>

        {/* Bio / Proof-focused Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-zinc-600 font-sans text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4 mb-8"
        >
          Specializing in <strong className="text-ink font-medium">React, Next.js, TypeScript</strong>, and <strong className="text-ink font-medium">Python/Django</strong> with 40+ shipped applications, sub-second latency targets, and a focus on clean architecture.
        </motion.p>

        {/* Core Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-xl"
        >
          {['React.js', 'Next.js', 'TypeScript', 'Python', 'Django', 'PostgreSQL', 'Tailwind CSS'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/90 border border-zinc-200/80 rounded-full text-xs font-mono text-zinc-700 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-8"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-[#c8a845] hover:bg-[#b89738] text-[#1a1a1a] px-7 py-3 rounded-full text-sm font-semibold shadow-md shadow-[#c8a845]/20 hover:shadow-lg transition-all duration-200 group"
          >
            <span>Explore Work (15+ Live Apps)</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="/resume.pdf"
            download="Loko_Israel_Resume.pdf"
            className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-sm hover:shadow transition-all duration-200"
          >
            <FileText className="w-4 h-4 text-[#c8a845]" />
            <span>Download Resume (PDF)</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white/90 hover:bg-white border border-zinc-300 hover:border-zinc-400 text-zinc-800 px-6 py-3 rounded-full text-sm font-medium shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-200"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* By the Numbers - Proof of Work Stat Counters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-2xl mx-auto pt-6 border-t border-zinc-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center mb-6"
        >
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-ink">
              <HeroCounter to={40} />+
            </div>
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mt-1">
              Projects Shipped
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-ink">
              <HeroCounter to={2} />+
            </div>
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mt-1">
              Years Building
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-ink">
              <HeroCounter to={10} />+
            </div>
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mt-1">
              Core Technologies
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-ink">
              <HeroCounter to={15} />+
            </div>
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mt-1">
              Students Mentored
            </div>
          </div>
        </motion.div>
      </div>

      {/* The Stack It Runs On - Tech Marquee */}
      <div className="w-full relative z-20 mt-auto">
        <TechTicker />
      </div>
    </section>
  );
}
