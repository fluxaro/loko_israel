'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ArrowUpRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  ChevronDown,
  Loader2,
  Building2,
  CheckCircle2,
} from 'lucide-react';

function proxyUrl(url) {
  return `https://late-snow-8d7f.israelloko65.workers.dev/?url=${encodeURIComponent(url)}`;
}

function LiveSitePreview({ url, title }) {
  const [loaded, setLoaded] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => setLoaded(true), 4000);
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] bg-zinc-100 overflow-hidden border-b lg:border-b-0 lg:border-r border-gray-200">
      {!loaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-zinc-50">
          <Loader2 className="text-zinc-400 w-8 h-8 animate-spin" />
          <span className="text-xs text-zinc-400 font-mono tracking-wide">
            Loading live preview...
          </span>
        </div>
      )}
      <iframe
        src={proxyUrl(url)}
        title={title}
        loading="eager"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        onLoad={() => {
          clearTimeout(timerRef.current);
          setLoaded(true);
        }}
        className="absolute inset-0 border-0"
        style={{
          width: '200%',
          height: '200%',
          transform: 'scale(0.5)',
          transformOrigin: 'top left',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s ease',
          pointerEvents: 'auto',
          willChange: 'opacity',
        }}
      />
    </div>
  );
}

export default function Startups() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [showDeepDive, setShowDeepDive] = useState(false);
  const deepDiveRef = useRef(null);

  const scrollToDeepDive = () => {
    setShowDeepDive(true);
    setTimeout(() => {
      deepDiveRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <section
      id="startups"
      ref={ref}
      className="py-24 sm:py-28 bg-white relative overflow-hidden"
    >
      {/* Top Hairline Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gray-200" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header - Harmonized with Site Design Language */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2 font-medium">
            Ventures &amp; Leadership
          </span>
          <h2 className="font-serif italic text-4xl lg:text-5xl text-ink mb-3">
            Startups
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl leading-relaxed">
            Co-founding and engineering platforms built to solve structural financial challenges across Africa.
          </p>
        </motion.div>

        {/* ─── Minimal Preview Card (Unified with Projects Style) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="border border-gray-200 bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left: Live Interactive Iframe Preview */}
            <div className="lg:col-span-7 relative">
              <LiveSitePreview
                url="https://www.ryport.com.ng/"
                title="Ryport Technologies"
              />
            </div>

            {/* Right: Minimal Venture Overview */}
            <div className="lg:col-span-5 p-7 sm:p-9 lg:p-10 flex flex-col justify-between bg-white">
              <div>
                {/* Venture Title & Tagline */}
                <h3 className="font-serif text-3xl sm:text-4xl text-ink mb-2 leading-tight">
                  Ryport
                </h3>
                <p className="text-accent font-medium text-sm sm:text-base mb-4 leading-snug">
                  An African financial ecosystem making your business run smoothly.
                </p>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  Smart financial intelligence tailored for Nigeria. Automatically captures bank alert SMS in kobo, delivers real-time cash flow runway calculations, and provides an instant conversational AI CFO.
                </p>

                {/* Key Highlights / Pill List */}
                <div className="space-y-2.5 pt-4 border-t border-gray-100 mb-8 text-xs font-sans text-gray-700">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c8a845] shrink-0" />
                    <span><strong>Kobo-Precision:</strong> Double-entry accuracy for everyday Nigerian commerce.</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c8a845] shrink-0" />
                    <span><strong>Bank Sync Engine:</strong> Auto-captures alerts from GTBank, Zenith, Access, Kuda &amp; OPay.</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c8a845] shrink-0" />
                    <span><strong>AI CFO Insights:</strong> Sub-second answers to plain-English money questions.</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-gray-100">
                <a
                  href="https://www.ryport.com.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-ink hover:bg-accent text-white hover:text-ink font-mono text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm group"
                >
                  <span>Visit ryport.com.ng</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="/startup"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg border border-gray-300 bg-white hover:bg-zinc-50 text-gray-700 hover:text-ink font-mono text-xs font-medium transition-colors"
                >
                  <span>Read Full Story →</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Dedicated Deep-Dive Section: Ryport System Breakdown ─── */}
        <div ref={deepDiveRef} className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-gray-200">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2 font-medium">
              Venture Deep Dive
            </span>
            <h3 className="font-serif italic text-3xl sm:text-4xl text-ink mb-4">
              Building Ryport: The Financial Operating System for Nigeria
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              From payday to school fees, market restocking to diesel fuel expenses — Nigerian entrepreneurs and individuals face high financial friction. Ryport was conceived and built to eliminate that blind spot entirely.
            </p>
          </div>

          {/* 3 Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {/* Pillar 1 */}
            <div className="p-6 sm:p-8 bg-surface border border-gray-200 rounded-xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-6 text-ink shadow-sm">
                  <Cpu className="w-5 h-5 text-accent" />
                </div>
                <span className="font-mono text-[11px] text-gray-400 uppercase tracking-wider block mb-1">
                  Pillar 01
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-ink mb-3">
                  Bank Sync &amp; Alert Capture
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Connects seamlessly via Open Banking protocols and proprietary bank SMS alert parsing. Every debit and credit from GTBank, Zenith, Access, Kuda, Moniepoint, and OPay is captured with zero manual input.
                </p>
              </div>
              <span className="font-mono text-[11px] text-zinc-500 pt-4 border-t border-gray-200/80">
                AES-256-GCM · Read-Only
              </span>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 sm:p-8 bg-surface border border-gray-200 rounded-xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-6 text-ink shadow-sm">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <span className="font-mono text-[11px] text-gray-400 uppercase tracking-wider block mb-1">
                  Pillar 02
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-ink mb-3">
                  Sub-Second AI Categorisation
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Food, fuel, school fees, market stock, generator servicing, and software renewals are instantly categorized. Users can ask conversational questions like: <em>&ldquo;How much went to fuel this month?&rdquo;</em>
                </p>
              </div>
              <span className="font-mono text-[11px] text-zinc-500 pt-4 border-t border-gray-200/80">
                Instant Natural Language
              </span>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 sm:p-8 bg-surface border border-gray-200 rounded-xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-6 text-ink shadow-sm">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <span className="font-mono text-[11px] text-gray-400 uppercase tracking-wider block mb-1">
                  Pillar 03
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-ink mb-3">
                  Runway &amp; Cash Flow Control
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Calculates real-time burn rates and 30-day runway projections for small business owners and freelancers. Avoids cash shortages and prepares audit-ready ledgers automatically.
                </p>
              </div>
              <span className="font-mono text-[11px] text-zinc-500 pt-4 border-t border-gray-200/80">
                Kobo-Precision Math
              </span>
            </div>
          </div>

          {/* Israel's Contribution Card */}
          <div className="border border-gray-200 bg-white p-7 sm:p-10 rounded-xl">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="max-w-2xl">
                <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2 font-medium">
                  Co-Founder &amp; Engineering Role
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl text-ink mb-4">
                  Architecting the Core Engine &amp; Web Experience
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  As Co-Founder and Lead Full-Stack Architect, Israel engineered the end-to-end web client, secure transaction ingest pipelines, and AI reasoning queries. He established strict performance budgets, bank-grade encryption layers, and responsive interfaces that load instantly even on congested mobile connections across West Africa.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-3 py-1 bg-surface border border-gray-200 text-zinc-700 rounded-full">
                    Next.js &amp; React
                  </span>
                  <span className="px-3 py-1 bg-surface border border-gray-200 text-zinc-700 rounded-full">
                    Open Banking APIs
                  </span>
                  <span className="px-3 py-1 bg-surface border border-gray-200 text-zinc-700 rounded-full">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 bg-surface border border-gray-200 text-zinc-700 rounded-full">
                    AI CFO Agent Integration
                  </span>
                  <span className="px-3 py-1 bg-surface border border-gray-200 text-zinc-700 rounded-full">
                    AES-256 Encryption
                  </span>
                </div>
              </div>

              {/* Quick Link Card */}
              <div className="lg:w-72 p-5 rounded-xl bg-surface border border-gray-200 shrink-0 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-1">
                    Live Platform
                  </span>
                  <p className="font-serif text-lg text-ink mb-1">Ryport Technologies</p>
                  <p className="text-xs text-gray-500 mb-4">ryport.com.ng</p>
                </div>
                <a
                  href="https://www.ryport.com.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-lg bg-ink hover:bg-accent text-white hover:text-ink font-mono text-xs font-medium transition-colors"
                >
                  <span>Open Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
