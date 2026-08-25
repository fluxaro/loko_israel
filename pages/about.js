import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, GraduationCap, Calendar, Award, Code2, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhyTech from '../components/WhyTech';

const CERTIFICATIONS = [
  {
    title: 'Full Stack Web Development (Self-Learning)',
    period: '2024–Present',
    description: 'Hands-on experience architecting full-stack web applications using React.js, Django, Python, TypeScript, Tailwind CSS, PostgreSQL, REST APIs, Git, and automated CI/CD deployment pipelines.'
  },
  {
    title: 'Frontend Development & UI Engineering',
    period: '2024',
    description: 'Crafted responsive, high-performance frontend interfaces with React.js, TypeScript, Next.js, Framer Motion, and reusable component architectures with strong adherence to accessibility standards.'
  },
  {
    title: 'AI Integration & Intelligent Software Systems',
    period: '2025–Present',
    description: 'Engineered AI-assisted developer utilities and automated platforms by integrating modern LLMs (OpenAI, Gemini APIs) into robust production workflows with prompt engineering and streaming responses.'
  }
];

const MILESTONES = [
  { year: '2024', title: 'The Ignition', desc: 'Started deep dive into computer science fundamentals, algorithm design, and building full-stack web platforms from scratch.' },
  { year: '2024', title: '40+ Projects Shipped', desc: 'Designed and deployed dozens of scalable web applications spanning e-commerce, AI assistants, and financial dashboards.' },
  { year: '2025', title: 'AI Integration Mastery', desc: 'Expanded into intelligent workflows, API orchestration, and high-performance server-side architectures.' },
  { year: 'Present', title: 'Open for High-Impact Roles', desc: 'Building production-grade systems, mentoring budding developers, and collaborating with forward-thinking teams globally.' },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Journey &amp; About | Loko Israel — Full-Stack Developer</title>
        <meta name="description" content="Explore the journey, philosophy, experience, and academic background of Loko Israel — Full-Stack Developer." />
      </Head>

      <Navbar />

      <main className="pt-28 lg:pt-36 bg-[#f5f2ec] min-h-screen text-[#1a1a1a]">
        
        {/* Editorial Hero Header */}
        <section className="max-w-7xl mx-auto px-6 mb-20 lg:mb-28">
          <div className="flex flex-col items-start max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200/80 shadow-sm text-xs font-mono text-zinc-600 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#c8a845]" />
              <span>THE JOURNEY // ARCHITECTURE &amp; CRAFT</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif italic text-5xl sm:text-7xl lg:text-8xl text-ink leading-[1.05] tracking-tight mb-8"
            >
              Building the <span className="text-[#c8a845] font-normal not-italic font-display">systems</span> behind the systems.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-zinc-600 leading-relaxed font-sans max-w-3xl"
            >
              I am <strong className="text-ink font-semibold">Loko Israel</strong> — a Full-Stack Software Developer and Computer Science undergraduate dedicated to crafting scalable web applications, robust backend infrastructure, and AI-powered platforms.
            </motion.p>
          </div>
        </section>

        {/* Narrative & Bio Section */}
        <section className="py-20 bg-white border-y border-zinc-200/80 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Left Column: Core Narrative */}
              <div className="lg:col-span-7">
                <span className="font-mono text-xs text-[#c8a845] uppercase tracking-widest block mb-3">
                  Philosophy &amp; Mindset
                </span>
                <h2 className="font-serif italic text-3xl sm:text-4xl text-ink mb-6">
                  Turning complex business challenges into resilient software.
                </h2>

                <div className="space-y-5 text-zinc-600 text-base sm:text-lg leading-relaxed font-sans">
                  <p>
                    With over 2 years of hands-on software development experience, I specialize in designing, deploying, and maintaining production-ready web systems. My technical toolkit centers around modern frontend ecosystems (React.js, Next.js, TypeScript, Tailwind CSS) paired with robust backends (Python, Django, Node.js, PostgreSQL).
                  </p>
                  <p>
                    I approach software engineering with an uncompromising focus on velocity, code maintainability, and end-user empathy. Whether designing data-intensive dashboards, streamlining API performance, or integrating generative AI models into existing pipelines, my objective is to ship software that solves real problems without unnecessary friction.
                  </p>
                  <p>
                    Beyond writing code, I actively mentor junior developers and contribute to developer communities, believing that the compounding value of shared knowledge elevates the entire ecosystem.
                  </p>
                </div>

                {/* Core Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                  <div className="p-5 border border-zinc-200 bg-[#f5f2ec]/50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-[#c8a845] mb-2" />
                    <h3 className="font-semibold text-ink text-base mb-1">Engineered to Ship</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">Prioritizing reliable, deployed software with clean architecture over endless unreleased prototypes.</p>
                  </div>
                  <div className="p-5 border border-zinc-200 bg-[#f5f2ec]/50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-[#c8a845] mb-2" />
                    <h3 className="font-semibold text-ink text-base mb-1">Systems-First Thinking</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">Understanding data flow, caching, latency, and database modeling from end to end.</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Timeline / Milestones */}
              <div className="lg:col-span-5 bg-[#f5f2ec] p-8 lg:p-10 border border-zinc-200 rounded-2xl">
                <span className="font-mono text-xs text-[#c8a845] uppercase tracking-widest block mb-4">
                  Career Milestones
                </span>
                <h3 className="font-serif italic text-2xl text-ink mb-6">Key Trajectory</h3>
                
                <div className="space-y-6">
                  {MILESTONES.map((m, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <span className="font-mono text-xs font-semibold px-2.5 py-1 bg-white border border-zinc-200 text-ink rounded shrink-0">
                        {m.year}
                      </span>
                      <div>
                        <h4 className="font-semibold text-ink text-sm">{m.title}</h4>
                        <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Education & Academic Rigor */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <span className="font-mono text-xs text-[#c8a845] uppercase tracking-widest block mb-2">Academic Foundation</span>
            <h2 className="font-serif italic text-4xl lg:text-5xl text-ink">Formal Education</h2>
          </div>

          <div className="border border-zinc-200 bg-white p-8 lg:p-12 rounded-2xl shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f2ec] border border-zinc-200 text-xs font-mono text-zinc-600 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#c8a845]" />
                  Currently Enrolled — 2nd Year
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-ink mb-2">
                  University of the People
                </h3>

                <p className="text-lg font-medium text-[#c8a845] mb-4">
                  Bachelor of Science in Computer Science
                </p>

                <p className="text-zinc-600 leading-relaxed mb-6 font-sans">
                  Building a theoretical and algorithmic foundation in computer systems, discrete mathematics, object-oriented programming, and relational databases while applying core principles directly to production applications.
                </p>

                <div className="pt-6 border-t border-zinc-100 flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-600 font-mono">
                  <span className="text-xs text-zinc-400 uppercase tracking-wider w-full mb-1">Key Focus Areas</span>
                  <span>Data Structures &amp; Algorithms</span>
                  <span>·</span>
                  <span>Software Engineering</span>
                  <span>·</span>
                  <span>Database Systems</span>
                  <span>·</span>
                  <span>Web Programming</span>
                </div>
              </div>

              <div className="lg:w-72 shrink-0 border-t lg:border-t-0 lg:border-l border-zinc-100 pt-6 lg:pt-0 lg:pl-8 flex flex-col gap-6 font-sans">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                    <GraduationCap className="w-4 h-4 text-[#c8a845]" /> Degree
                  </div>
                  <div className="text-sm font-semibold text-ink">B.S. Computer Science</div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                    <Calendar className="w-4 h-4 text-[#c8a845]" /> Status
                  </div>
                  <div className="text-sm font-semibold text-ink">2nd Year Undergrad</div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                    <BookOpen className="w-4 h-4 text-[#c8a845]" /> Institution
                  </div>
                  <div className="text-sm font-semibold text-ink">University of the People</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Continuous Learning */}
        <section className="py-20 bg-white border-t border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <span className="font-mono text-xs text-[#c8a845] uppercase tracking-widest block mb-2">Technical Rigor</span>
              <h2 className="font-serif italic text-4xl lg:text-5xl text-ink">Continuous Growth &amp; Certifications</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.title} className="p-8 border border-zinc-200 bg-[#f5f2ec]/40 rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <Award className="w-6 h-6 text-[#c8a845]" />
                      <span className="font-mono text-xs text-zinc-400 border border-zinc-200 px-2.5 py-0.5 rounded-full bg-white">
                        {cert.period}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg text-ink mb-3">{cert.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Embedded WhyTech Philosophy Article */}
        <WhyTech />

        {/* Next Steps CTA */}
        <section className="py-20 bg-ink text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif italic text-4xl sm:text-5xl mb-6">
              Ready to explore what I&apos;ve built?
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-8 font-sans">
              Take a look at the featured projects, live applications, and technical architectures in the portfolio showcase.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-[#c8a845] hover:bg-[#b89738] text-[#1a1a1a] px-8 py-3.5 rounded-full font-semibold text-sm transition-all shadow-md"
              >
                <span>View Portfolio Showcase</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white px-8 py-3.5 rounded-full font-medium text-sm transition-all"
              >
                <span>Get In Touch</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
