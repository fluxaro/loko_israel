import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code2, Server, Database, Sparkles, Terminal, Cpu, Layers, 
  CheckCircle2, ArrowRight, Zap, ShieldCheck, GitBranch, Layout, Workflow 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SKILL_PILLARS = [
  {
    title: 'Frontend Architecture',
    icon: Layout,
    description: 'Engineering responsive, accessible, and high-performance user interfaces with modern React ecosystems.',
    technologies: [
      { name: 'React.js', level: 'Advanced', experience: '2+ yrs', highlight: 'Hooks, Custom Hooks, Performance tuning, Concurrent mode' },
      { name: 'Next.js', level: 'Advanced', experience: '2+ yrs', highlight: 'App Router, Pages Router, SSR/SSG, Dynamic routing, Middleware' },
      { name: 'TypeScript', level: 'Proficient', experience: '2+ yrs', highlight: 'Strict typing, Generics, Type inference, Interfaces' },
      { name: 'Tailwind CSS', level: 'Expert', experience: '2+ yrs', highlight: 'Design systems, Custom configurations, Responsive utility grids' },
      { name: 'Framer Motion', level: 'Advanced', experience: '2+ yrs', highlight: 'Layout animations, Variants, Gesture triggers, Viewport observation' },
      { name: 'Three.js / Canvas', level: 'Intermediate', experience: '1+ yr', highlight: 'Interactive 3D scenes, Canvas integration, WebGL performance' },
    ]
  },
  {
    title: 'Backend & System Design',
    icon: Server,
    description: 'Architecting scalable server architectures, resilient APIs, and data pipelines built for production workloads.',
    technologies: [
      { name: 'Python', level: 'Advanced', experience: '2+ yrs', highlight: 'Data structures, Scripting, Automation, OOP, Async operations' },
      { name: 'Django & DRF', level: 'Advanced', experience: '2+ yrs', highlight: 'ORM optimization, Authentication, Serializers, Middleware' },
      { name: 'Node.js & Express', level: 'Proficient', experience: '2+ yrs', highlight: 'REST endpoints, JWT authentication, Microservices, Async flows' },
      { name: 'REST APIs & GraphQL', level: 'Advanced', experience: '2+ yrs', highlight: 'API contract design, Error handling, Rate limiting, Caching' },
      { name: 'Authentication & Security', level: 'Proficient', experience: '2+ yrs', highlight: 'OAuth, JWT, Session management, Role-based access control' },
    ]
  },
  {
    title: 'Databases & Distributed Systems',
    icon: Database,
    description: 'Relational data modeling, schema indexing, real-time synchronization, and caching solutions.',
    technologies: [
      { name: 'PostgreSQL', level: 'Advanced', experience: '2+ yrs', highlight: 'Relational schema design, Complex joins, Indexing, Transactions' },
      { name: 'MongoDB', level: 'Proficient', experience: '2+ yrs', highlight: 'Document aggregation pipelines, Indexing, Mongoose modeling' },
      { name: 'Supabase', level: 'Proficient', experience: '1+ yr', highlight: 'Postgres triggers, Row Level Security (RLS), Realtime subscriptions' },
      { name: 'Redis', level: 'Working Knowledge', experience: '1+ yr', highlight: 'Key-value caching, Session store, Rate limit counters' },
    ]
  },
  {
    title: 'AI Integration & Developer Tooling',
    icon: Sparkles,
    description: 'Augmenting software workflows with generative AI orchestration and developer productivity tools.',
    technologies: [
      { name: 'OpenAI / Gemini APIs', level: 'Advanced', experience: '1.5+ yrs', highlight: 'Streaming completions, Tool calling, Prompt engineering, Embeddings' },
      { name: 'Git & GitHub Workflows', level: 'Advanced', experience: '2+ yrs', highlight: 'Branching strategies, PR reviews, CI/CD Actions, Release tagging' },
      { name: 'Vercel / Cloud Deployment', level: 'Advanced', experience: '2+ yrs', highlight: 'Edge functions, Domain configuration, Environment secrets, Preview builds' },
      { name: 'Linux & Terminal Environments', level: 'Proficient', experience: '2+ yrs', highlight: 'Shell scripting, Package management, SSH, Process monitoring' },
    ]
  }
];

const ARCHITECTURE_PRINCIPLES = [
  {
    title: 'Engineered for Performance',
    desc: 'Targeting 90+ Core Web Vitals via code-splitting, lazy hydration, asset compression, and intelligent API caching.'
  },
  {
    title: 'Maintainable & Typed Code',
    desc: 'Strict type safety with TypeScript and self-documenting architectures that scale seamlessly across teams.'
  },
  {
    title: 'Security by Default',
    desc: 'Input sanitization, parameterized queries, strict CORS policies, and secure cryptographic credential management.'
  },
  {
    title: 'Accessibility & Usability',
    desc: 'Keyboard navigable interfaces, semantic HTML5, contrast compliance, and responsive touch targets on all viewports.'
  }
];

export default function SkillsPage() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <>
      <Head>
        <title>Technical Skills &amp; Stack | Loko Israel</title>
        <meta name="description" content="Detailed engineering stack, capabilities, and system architecture proficiencies of Loko Israel." />
      </Head>

      <Navbar />

      <main className="pt-28 lg:pt-36 bg-[#f5f2ec] min-h-screen text-[#1a1a1a]">
        
        {/* Page Hero Header */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200/80 shadow-sm text-xs font-mono text-zinc-600 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c8a845]" />
              <span>TECHNICAL MASTERY &amp; SYSTEM STACK</span>
            </div>

            <h1 className="font-serif italic text-5xl sm:text-7xl lg:text-8xl text-ink leading-[1.05] tracking-tight mb-6">
              Engineered for <span className="text-[#c8a845] font-normal not-italic font-display">Resilience</span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed font-sans max-w-3xl">
              A comprehensive breakdown of the frameworks, languages, databases, and architectural methodologies I employ to build scalable digital products.
            </p>
          </div>
        </section>

        {/* Skill Pillars Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SKILL_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-8 sm:p-10 bg-white border border-zinc-200/90 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f5f2ec] flex items-center justify-center text-[#c8a845]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-zinc-400 uppercase">[ CATEGORY 0{idx + 1} ]</span>
                      <h2 className="font-serif italic text-2xl sm:text-3xl text-ink">{pillar.title}</h2>
                    </div>
                  </div>

                  <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-sans">
                    {pillar.description}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-zinc-100">
                    {pillar.technologies.map((tech) => (
                      <div key={tech.name} className="p-4 bg-[#f5f2ec]/60 rounded-xl border border-zinc-200/60 flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm text-ink">{tech.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[11px] text-zinc-500 bg-white px-2 py-0.5 rounded border border-zinc-200">
                              {tech.experience}
                            </span>
                            <span className="font-mono text-[11px] text-[#c8a845] font-semibold bg-[#c8a845]/10 px-2 py-0.5 rounded">
                              {tech.level}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-zinc-500 font-sans leading-relaxed">
                          {tech.highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Architecture & Engineering Ethos */}
        <section className="py-20 bg-white border-y border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <span className="font-mono text-xs text-[#c8a845] uppercase tracking-widest block mb-2">
                Standards &amp; Principles
              </span>
              <h2 className="font-serif italic text-4xl lg:text-5xl text-ink">
                How I Approach System Design
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ARCHITECTURE_PRINCIPLES.map((principle, i) => (
                <div key={principle.title} className="p-6 bg-[#f5f2ec] border border-zinc-200 rounded-xl flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs text-[#c8a845] font-bold block mb-3">0{i + 1} {'//'} PRINCIPLE</span>
                    <h3 className="font-semibold text-lg text-ink mb-2">{principle.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed font-sans">{principle.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Action CTA */}
        <section className="py-20 bg-ink text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif italic text-4xl sm:text-5xl mb-6">
              Need these capabilities on your team?
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-8 font-sans">
              Let&apos;s build fast, dependable, and high-quality software together.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#c8a845] hover:bg-[#b89738] text-[#1a1a1a] px-8 py-3.5 rounded-full font-semibold text-sm transition-all shadow-md"
              >
                <span>Hire Me for Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white px-8 py-3.5 rounded-full font-medium text-sm transition-all"
              >
                <span>Explore Live Projects</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
