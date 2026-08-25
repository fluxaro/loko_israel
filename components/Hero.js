import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#f5f2ec] text-[#1a1a1a] flex flex-col justify-between overflow-hidden pt-28 sm:pt-36 pb-0">
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
        
        {/* Subtle technical corner / side indicators */}
        <div className="hidden lg:flex justify-between w-full text-[11px] font-mono text-zinc-400 select-none mb-4 px-2">
          <span>+ [ 01/04 ] // SYSTEM.READY</span>
          <span>[ LOKO ISRAEL — GMT+1 ] +</span>
        </div>

        {/* Top Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-zinc-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] backdrop-blur-md mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8a845] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8a845]"></span>
          </span>
          <span className="font-mono text-xs text-zinc-700 tracking-tight uppercase">
            Full Stack Developer
          </span>
        </motion.div>

        {/* Giant Hero Title with Script Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative inline-flex items-center justify-center select-none w-full my-1 sm:my-2"
        >
          {/* Main bold base text */}
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-extrabold tracking-[-0.04em] text-[#1a1a1a] leading-none font-display">
            Dev<span className="tracking-[-0.05em]">Tomi</span>
          </h1>

          {/* Overlaid Cursive / Hand-drawn Script in Warm Gold */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              className="font-script text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[11.5rem] font-bold text-[#c8a845] -rotate-6 transform translate-x-10 sm:translate-x-16 md:translate-x-24 lg:translate-x-32 translate-y-1 drop-shadow-[0_4px_12px_rgba(200,168,69,0.25)]"
              style={{
                fontFamily: '"Caveat", cursive',
                letterSpacing: '-0.02em',
              }}
            >
              Tomi
            </span>
          </div>
        </motion.div>

        {/* Main Headline Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] font-normal tracking-tight mt-4 sm:mt-6 max-w-4xl"
        >
          Building{' '}
          <span className="font-serif italic text-[#c8a845] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-1">
            scalable
          </span>{' '}
          web applications, AI platforms &amp; developer tools.
        </motion.h2>

        {/* Bio / Tagline Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-zinc-600 font-sans text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4 mb-8"
        >
          I am <span className="text-[#1a1a1a] font-medium">Loko Israel</span> — a Full Stack Developer with over 2 years of experience designing, developing, deploying, and maintaining production-ready software using React.js, TypeScript, Django, and Python.
        </motion.p>

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
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white/90 hover:bg-white border border-zinc-300 hover:border-zinc-400 text-zinc-800 px-6 py-3 rounded-full text-sm font-medium shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-200"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Micro Metadata / Key Focus Areas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-[10px] sm:text-xs font-mono tracking-[0.18em] text-zinc-400 uppercase select-none mt-2 mb-8"
        >
          DATA STRUCTURES &amp; ALGORITHMS <span className="text-zinc-300">·</span> SOFTWARE ENGINEERING <span className="text-zinc-300">·</span> DATABASE SYSTEMS <span className="text-zinc-300">·</span> WEB PROGRAMMING
        </motion.div>

      </div>

      {/* Infinite Bottom Marquee Ribbon */}
      <div className="relative w-full border-y border-zinc-200/80 bg-white/50 backdrop-blur-sm py-3.5 overflow-hidden select-none z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-600 uppercase tracking-wider">
            {Array.from({ length: 4 }).map((_, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span>React.js — TypeScript — Django — Python — AI Integration — Scalable Systems</span>
                <span className="text-[#c8a845] font-bold mx-3">•</span>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-600 uppercase tracking-wider" aria-hidden="true">
            {Array.from({ length: 4 }).map((_, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span>React.js — TypeScript — Django — Python — AI Integration — Scalable Systems</span>
                <span className="text-[#c8a845] font-bold mx-3">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
