'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';

export default function Startups() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="startups"
      ref={ref}
      className="py-20 sm:py-24 bg-white relative overflow-hidden"
    >
      {/* Top Hairline Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gray-200" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10"
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2 font-medium">
            Ventures &amp; Leadership
          </span>
          <h2 className="font-serif italic text-4xl lg:text-5xl text-ink mb-3">
            Startups
          </h2>
        </motion.div>

        {/* Short Teaser Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border border-gray-200 bg-surface rounded-xl p-7 sm:p-9 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              {/* Ryport Name & Pitch */}
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c8a845]" />
                <h3 className="font-serif text-3xl sm:text-4xl text-ink">
                  Ryport
                </h3>
              </div>
              
              <p className="text-zinc-800 font-medium text-base sm:text-lg mb-2 leading-snug">
                An African financial ecosystem making your business run smoothly
              </p>

              {/* Credibility Line */}
              <p className="text-gray-500 font-mono text-xs sm:text-sm">
                Co-Founder &amp; Lead Architect — live fintech product serving Nigerian businesses
              </p>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3 shrink-0 pt-2 md:pt-0">
              <a
                href="https://www.ryport.com.ng/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-ink hover:bg-accent text-white hover:text-ink font-mono text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm group"
              >
                <span>Visit ryport.com.ng</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <Link
                href="/startup"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-gray-300 bg-white hover:bg-zinc-50 text-gray-700 hover:text-ink font-mono text-xs font-semibold transition-colors"
              >
                <span>Read Full Story →</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
