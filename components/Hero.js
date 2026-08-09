import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-[#1a1a1a] flex items-center overflow-hidden"
    >
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-6xl sm:text-7xl xl:text-8xl text-white leading-[1.1] mb-6">
              Building software that matters. <br className="hidden sm:block" />
              I am <span className="font-serif italic text-accent">Loko Israel</span>.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-sans text-gray-500 text-lg sm:text-xl max-w-2xl mb-10">
              A frontend developer passionate about creating minimal, functional, and visually compelling web experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#projects"
              className="inline-block border border-white/20 bg-transparent text-white/80 hover:border-accent hover:text-white px-6 py-3 text-sm font-sans transition-colors"
            >
              View my work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
