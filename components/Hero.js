import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
            <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-4">
              Full Stack Developer
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl xl:text-8xl text-white leading-[1.1] mb-6">
              Building scalable web applications, AI platforms &amp; developer tools.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-sans text-gray-400 text-lg sm:text-xl max-w-3xl mb-10 leading-relaxed">
              I am <span className="text-white font-serif italic">Loko Israel</span> — a Full Stack Developer with over 2 years of experience designing, developing, deploying, and maintaining production-ready software using React.js, TypeScript, Django, and Python.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-accent bg-accent text-ink hover:bg-accent/90 px-6 py-3 text-sm font-sans font-medium transition-colors"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 bg-transparent text-white/80 hover:border-white hover:text-white px-6 py-3 text-sm font-sans transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
