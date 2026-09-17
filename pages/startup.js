'use client';

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  Loader2,
  Building2,
  CheckCircle2,
  ArrowLeft,
  ExternalLink,
  MessageSquareText,
  Lock,
  Smartphone,
  BarChart3,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function proxyUrl(url) {
  return `https://late-snow-8d7f.israelloko65.workers.dev/?url=${encodeURIComponent(url)}`;
}

export default function StartupPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => setIframeLoaded(true), 4000);
    return () => clearTimeout(timerRef.current);
  }, []);

  const pillars = [
    {
      num: '01',
      title: 'Automated Bank Sync & SMS Alert Engine',
      desc: 'Connects supported Nigerian commercial accounts (GTBank, Zenith, Access, Kuda, Moniepoint, FirstBank, OPay) with bank-grade read-only access. Ingests and parses debit and credit SMS alerts automatically without requiring manual ledger entry.',
      badge: 'Zero Manual Entry',
      icon: Smartphone,
    },
    {
      num: '02',
      title: 'Sub-Second AI Expense Categorisation',
      desc: 'Every single transaction is categorized down to the kobo — whether fuel, school fees, raw materials, diesel, or subscription renewals. Users query their accounts in natural English: "Where did my money go this month?" or "How much went to transport?"',
      badge: 'Natural Language CFO',
      icon: Zap,
    },
    {
      num: '03',
      title: 'Real-Time Cash Flow & Runway Forecasts',
      desc: 'Empowers Nigerian founders, freelancers, and SMEs with instant burn rate modeling and 30-day runway projection. Replaces spreadsheets with clean visual intelligence, ensuring businesses never run out of operating cash unexpectedly.',
      badge: 'Kobo-Precision Math',
      icon: TrendingUp,
    },
    {
      num: '04',
      title: 'Bank-Grade AES-256-GCM Encryption',
      desc: 'Built with enterprise-grade data security: end-to-end 256-bit encryption, read-only Open Banking endpoints, zero plain-text credential storage, and immutable audit logs on every financial ledger event.',
      badge: 'Bank-Grade Compliance',
      icon: Lock,
    },
  ];

  return (
    <>
      <Head>
        <title>Ryport | Co-Founder &amp; Lead Architect — Loko Israel</title>
        <meta
          name="description"
          content="Ryport is an African financial ecosystem making business run smoothly. Co-founded and engineered by Loko Israel."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="pt-28 lg:pt-36 bg-[#f5f2ec] min-h-screen text-[#1a1a1a]">
        {/* Back Link & Header */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-12 sm:mb-16">
          <Link
            href="/#startups"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-950 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO HOME</span>
          </Link>

          <div className="flex flex-col items-start max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-zinc-200/80 shadow-sm text-xs font-mono text-zinc-600 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#c8a845]" />
              <span>CO-FOUNDED VENTURE // AFRICAN FINTECH</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ink leading-[0.95] mb-6"
            >
              Ryport.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-lg sm:text-xl md:text-2xl text-zinc-700 leading-relaxed font-normal mb-8 max-w-3xl"
            >
              An African financial ecosystem making your business run smoothly. Smart financial intelligence tailored for Nigeria with kobo-precision accounting, automatic bank SMS alert parsing, and real-time AI CFO insights.
            </motion.p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.ryport.com.ng/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-ink hover:bg-[#c8a845] text-white hover:text-ink font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md group"
              >
                <span>Visit ryport.com.ng</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <span className="font-mono text-xs text-zinc-500">
                Founding Engineer &amp; Co-Founder
              </span>
            </div>
          </div>
        </section>

        {/* 4 Metric Callout Strip */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-16 sm:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest block mb-1">PRICING</span>
              <p className="font-display font-bold text-3xl sm:text-4xl text-ink">₦0<span className="text-sm font-normal text-zinc-400">/mo</span></p>
              <p className="text-xs text-zinc-500 mt-2">Free forever tier for individuals &amp; freelancers</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest block mb-1">ACCURACY</span>
              <p className="font-display font-bold text-3xl sm:text-4xl text-ink">100%</p>
              <p className="text-xs text-zinc-500 mt-2">Kobo-precision double-entry math</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest block mb-1">INTELLIGENCE</span>
              <p className="font-display font-bold text-3xl sm:text-4xl text-ink">Sub-sec</p>
              <p className="text-xs text-zinc-500 mt-2">Instant conversational AI CFO insights</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest block mb-1">SECURITY</span>
              <p className="font-display font-bold text-3xl sm:text-4xl text-ink">AES-256</p>
              <p className="text-xs text-zinc-500 mt-2">End-to-end encrypted bank protocols</p>
            </div>
          </div>
        </section>

        {/* Live Interactive Preview Box */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20 sm:mb-28">
          <div className="border border-gray-200 bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-zinc-50">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-4 font-mono text-xs text-zinc-500 hidden sm:inline">
                  https://www.ryport.com.ng
                </span>
              </div>
              <a
                href="https://www.ryport.com.ng/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-700 hover:text-black font-medium"
              >
                <span>Open in New Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="relative w-full h-[460px] sm:h-[620px] bg-zinc-100 overflow-hidden">
              {!iframeLoaded && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-zinc-50">
                  <Loader2 className="text-zinc-400 w-8 h-8 animate-spin" />
                  <span className="text-xs text-zinc-400 font-mono tracking-wide">
                    Loading live platform preview...
                  </span>
                </div>
              )}
              <iframe
                src={proxyUrl('https://www.ryport.com.ng/')}
                title="Ryport Platform"
                loading="eager"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                onLoad={() => {
                  clearTimeout(timerRef.current);
                  setIframeLoaded(true);
                }}
                className="absolute inset-0 border-0"
                style={{
                  width: '200%',
                  height: '200%',
                  transform: 'scale(0.5)',
                  transformOrigin: 'top left',
                  opacity: iframeLoaded ? 1 : 0,
                  transition: 'opacity 0.6s ease',
                }}
              />
            </div>
          </div>
        </section>

        {/* The Narrative: The Problem in Nigeria */}
        <section className="bg-white py-20 sm:py-24 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="max-w-3xl mb-14">
              <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2 font-medium">
                The Context &amp; Problem
              </span>
              <h2 className="font-serif italic text-4xl lg:text-5xl text-ink mb-6">
                Why We Built Ryport
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 font-medium">
                In Nigeria, understanding where your money goes is an everyday struggle. Entrepreneurs, freelancers, and small business owners juggle multiple bank accounts, fragmented SMS credit/debit alerts, fluctuating fuel rates, cash receipts, and unrecorded vendor payments.
              </p>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Most accounting software on the market was built for Western businesses with reliable credit card infrastructure. They fail in Nigeria because they do not account for SMS alert workflows, diesel expenses, market restocking in cash, or local bank reconciliation. Ryport was architected from day one to match how money actually moves in Nigeria.
              </p>
            </div>

            {/* The 4 Architectural Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.num}
                    className="p-8 rounded-2xl bg-surface border border-gray-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-ink shadow-sm">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <span className="font-mono text-xs text-zinc-400 font-bold">
                          PILLAR {pillar.num}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl text-ink mb-3 leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {pillar.desc}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-gray-200/80">
                      <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                        {pillar.badge}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Israel's Contribution as Co-Founder & Lead Engineer */}
        <section className="py-20 sm:py-28 bg-[#f5f2ec]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="max-w-4xl border border-gray-200 bg-white p-8 sm:p-12 rounded-2xl shadow-sm">
              <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2 font-medium">
                Founder Architecture &amp; Execution
              </span>
              <h2 className="font-serif italic text-3xl sm:text-4xl text-ink mb-6">
                How Israel Engineered the System
              </h2>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 font-medium">
                Serving as Co-Founder and Lead Full-Stack Architect, Israel Loko led the technical roadmap, API integrations, and product development from initial proof-of-concept to live production release.
              </p>

              <div className="space-y-4 mb-8 text-sm text-gray-600 leading-relaxed">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c8a845] shrink-0 mt-0.5" />
                  <span>
                    <strong>SMS Parser Pipeline:</strong> Developed high-accuracy regex and tokenization engines capable of identifying bank-specific patterns from Access, GTBank, Zenith, Kuda, Moniepoint, and OPay.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c8a845] shrink-0 mt-0.5" />
                  <span>
                    <strong>Real-Time AI Querying:</strong> Integrated conversational LLM agents with prompt memory and natural language processing to answer complex accounting questions with zero latency.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c8a845] shrink-0 mt-0.5" />
                  <span>
                    <strong>Mobile-First Performance:</strong> Enforced strict performance budgets and lazy-loading schemas, ensuring the web app loads in under 1.5 seconds on mobile 3G/4G connections across Nigeria.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c8a845] shrink-0 mt-0.5" />
                  <span>
                    <strong>Security &amp; Audit Trail:</strong> Enforced AES-256-GCM encryption for stored user ledger items and read-only banking tokenization with zero storage of bank passwords or PINs.
                  </span>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="pt-6 border-t border-gray-100 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 bg-surface border border-gray-200 text-zinc-700 rounded-full">React.js</span>
                <span className="px-3 py-1 bg-surface border border-gray-200 text-zinc-700 rounded-full">Next.js 14</span>
                <span className="px-3 py-1 bg-surface border border-gray-200 text-zinc-700 rounded-full">TypeScript</span>
                <span className="px-3 py-1 bg-surface border border-gray-200 text-zinc-700 rounded-full">Open Banking APIs</span>
                <span className="px-3 py-1 bg-surface border border-gray-200 text-zinc-700 rounded-full">Tailwind CSS</span>
                <span className="px-3 py-1 bg-surface border border-gray-200 text-zinc-700 rounded-full">Supabase / Postgres</span>
                <span className="px-3 py-1 bg-surface border border-gray-200 text-zinc-700 rounded-full">OpenAI API</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="bg-ink text-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="font-mono text-xs text-[#c8a845] uppercase tracking-widest block mb-2 font-medium">
                LIVE FINTECH VENTURE
              </span>
              <h3 className="font-serif italic text-3xl sm:text-4xl mb-2">
                Experience Ryport Today.
              </h3>
              <p className="text-zinc-400 text-sm max-w-xl">
                Ready to see how intelligent accounting runs for Nigerian businesses? Explore the live application or connect with Israel.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.ryport.com.ng/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#c8a845] hover:bg-[#b89738] text-ink font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm group"
              >
                <span>Launch ryport.com.ng</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-zinc-700 hover:border-zinc-500 text-white font-mono text-xs font-medium transition-colors"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
