import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, ArrowUpRight, CheckCircle2, Star, Quote, Award, Sparkles, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Counter component for animated stats
const Counter = ({ from = 0, to, duration = 2 }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!inView || typeof to !== 'number') return;
    
    let start = from;
    const end = to;
    if (start === end) {
      setCount(end);
      return;
    }
    
    let startTime = null;
    let raf;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * easeOut);
      
      setCount(current);
      
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{count}</span>;
};

const SERVICES = [
  {
    num: '01',
    title: 'Frontend Architecture & SPAs',
    desc: 'Pixel-perfect, ultra-responsive web applications built with React.js, Next.js, and TypeScript with fluid animations.',
    deliverables: ['Custom component libraries', 'Framer Motion micro-interactions', 'Lighthouse 90+ optimization']
  },
  {
    num: '02',
    title: 'Full-Stack Platforms & APIs',
    desc: 'End-to-end software solutions spanning robust relational database schemas, secure REST APIs, and authentication workflows.',
    deliverables: ['Django REST & Express backends', 'PostgreSQL / MongoDB modeling', 'Role-based access & JWT security']
  },
  {
    num: '03',
    title: 'AI Tooling & LLM Integration',
    desc: 'Integrating generative AI capabilities (OpenAI, Gemini) into production software for intelligent workflows and automation.',
    deliverables: ['Streaming completion engines', 'Automated document processing', 'Prompt engineering & tool calling']
  },
  {
    num: '04',
    title: 'Performance Tuning & Audits',
    desc: 'Diagnosing bottlenecks, reducing bundle sizes, and optimizing Core Web Vitals for maximum SEO visibility and user retention.',
    deliverables: ['Render profiling & code splitting', 'Image compression pipelines', 'Database query indexing']
  }
];

const PROCESS_STEPS = [
  { num: '01', title: 'Discover & Specify', desc: 'Clarifying the core problem, user personas, technical constraints, and data architecture before writing a single line of code.' },
  { num: '02', title: 'Design & Prototype', desc: 'Structuring user flows, responsive UI layouts, and API contracts focused on low cognitive load and intuitive usage.' },
  { num: '03', title: 'Build & Test', desc: 'Developing clean, type-safe code using component-driven methodologies and comprehensive state management.' },
  { num: '04', title: 'Optimise & Refine', desc: 'Benchmarking performance, accessibility testing (WCAG), and responsive validation across devices and screen sizes.' },
  { num: '05', title: 'Deploy & Support', desc: 'Deploying with automated CI/CD pipelines, SSL certificates, edge CDN caching, and continuous monitoring.' }
];

const STATS = [
  { value: 40, label: 'Projects Shipped', suffix: '+' },
  { value: 2, label: 'Years Building', suffix: '+' },
  { value: 10, label: 'Core Technologies', suffix: '+' },
  { value: 15, label: 'Developers Mentored', suffix: '+' }
];

const TESTIMONIALS = [
  {
    quote: "Israel is a rare talent who seamlessly bridges the gap between design and technical execution. His ability to deliver fast, reliable, and scalable web apps has been invaluable to our projects.",
    name: "Chinedu Okafor",
    role: "Lead Product Manager"
  },
  {
    quote: "When we needed to overhaul our entire frontend architecture, Israel was the clear choice. His deep understanding of React and performance optimization resulted in significantly improved load times.",
    name: "Tunde Adeyemi",
    role: "Engineering Lead"
  },
  {
    quote: "Not only is Israel an outstanding developer, but he is also an excellent mentor. His guidance helped me master the complexities of modern full-stack development.",
    name: "Ngozi Nwosu",
    role: "Junior Developer"
  }
];

export default function HighlightsPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Highlights &amp; Achievements | Loko Israel</title>
        <meta name="description" content="Key milestones, metrics, engineering process, client services, and testimonials of Loko Israel." />
      </Head>

      <Navbar />

      <main className="pt-28 lg:pt-36 bg-[#f5f2ec] min-h-screen text-[#1a1a1a]">
        
        {/* Page Hero Header */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200/80 shadow-sm text-xs font-mono text-zinc-600 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c8a845]" />
              <span>IMPACT // METRICS &amp; SOCIAL PROOF</span>
            </div>

            <h1 className="font-serif italic text-5xl sm:text-7xl lg:text-8xl text-ink leading-[1.05] tracking-tight mb-6">
              Proven Track <span className="text-[#c8a845] font-normal not-italic font-display">Record</span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed font-sans max-w-3xl">
              A deep dive into key deliverables, measurable achievements, engineering frameworks, and endorsements from collaborators.
            </p>
          </div>
        </section>

        {/* Animated Metrics Bar */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="p-8 sm:p-12 bg-white border border-zinc-200/90 rounded-2xl shadow-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-ink font-semibold">
                    <Counter to={stat.value} duration={2.5} />{stat.suffix}
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-zinc-500 uppercase tracking-wider mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services & Deliverables */}
        <section className="py-20 bg-white border-y border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <span className="font-mono text-xs text-[#c8a845] uppercase tracking-widest block mb-2">Capabilities</span>
              <h2 className="font-serif italic text-4xl lg:text-5xl text-ink">What I Deliver</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES.map((service) => (
                <div key={service.num} className="p-8 bg-[#f5f2ec] border border-zinc-200 rounded-2xl flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs text-[#c8a845] font-bold block mb-3">{service.num} {'//'} SERVICE</span>
                    <h3 className="font-serif italic text-2xl sm:text-3xl text-ink mb-3">{service.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-sans">{service.desc}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-zinc-200/80">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">Key Outputs</span>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="text-xs text-zinc-600 flex items-center gap-2 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c8a845]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5-Step Process */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs text-[#c8a845] uppercase tracking-widest block mb-2">Methodology</span>
            <h2 className="font-serif italic text-4xl lg:text-5xl text-ink">How I Build &amp; Ship</h2>
          </div>

          <div className="border border-zinc-200 bg-white p-8 sm:p-12 rounded-2xl">
            <div className="space-y-8">
              {PROCESS_STEPS.map((step, idx) => (
                <div key={step.num} className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 pb-8 last:pb-0 border-b last:border-b-0 border-zinc-100">
                  <div className="font-mono text-xl font-bold text-[#c8a845] px-3 py-1 bg-[#f5f2ec] rounded border border-zinc-200 shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-ink mb-1">{step.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed font-sans">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white border-t border-zinc-200/80">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="font-mono text-xs text-[#c8a845] uppercase tracking-widest block mb-2">Testimonials</span>
              <h2 className="font-serif italic text-4xl lg:text-5xl text-ink">Collaborator Feedback</h2>
            </div>

            <div className="p-8 sm:p-12 bg-[#f5f2ec] border border-zinc-200 rounded-2xl relative min-h-[220px] flex flex-col justify-between">
              <Quote className="w-10 h-10 text-[#c8a845]/20 absolute top-6 right-6" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="font-serif italic text-xl sm:text-2xl text-ink leading-relaxed mb-6">
                    &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-sm text-ink">{TESTIMONIALS[activeTestimonial].name}</div>
                    <div className="text-xs font-mono text-zinc-500">{TESTIMONIALS[activeTestimonial].role}</div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-center gap-2 mt-8 pt-4 border-t border-zinc-200/80">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeTestimonial === i ? 'bg-[#c8a845] w-6' : 'bg-zinc-300'
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 bg-ink text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif italic text-4xl sm:text-5xl mb-6">
              Let&apos;s build something impactful together.
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-8 font-sans">
              Get in touch to discuss technical roadmaps, contract opportunities, or full-time roles.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#c8a845] hover:bg-[#b89738] text-[#1a1a1a] px-8 py-3.5 rounded-full font-semibold text-sm transition-all shadow-md"
              >
                <span>Initiate Contact</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white px-8 py-3.5 rounded-full font-medium text-sm transition-all"
              >
                <span>View Full Portfolio</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
