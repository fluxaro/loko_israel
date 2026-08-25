import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Search, ExternalLink, Code2, Sparkles, Filter, Layers, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ALL_PROJECTS = [
  {
    title: 'Sieve — Resume Builder',
    category: 'Full-Stack',
    tech: ['React', 'Tailwind CSS', 'PDF Generation', 'State Management'],
    description: 'Build and export professional resumes in minutes. Choose from multiple modern templates, fill in details with live preview, and download a polished PDF.',
    url: 'https://sieve-inky.vercel.app/',
    featured: true,
    highlight: 'Instant PDF export & real-time client-side preview engine'
  },
  {
    title: 'Apply Bureau',
    category: 'Full-Stack',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'JWT Auth', 'Tailwind CSS'],
    description: 'A modern job application platform connecting candidates with employers. Browse listings, track applications with drag-and-drop Kanban, and manage profiles.',
    url: 'https://apply-bureau.vercel.app/',
    featured: true,
    highlight: '500+ active users, 75% reduction in application tracking time'
  },
  {
    title: 'Spark AI Assistant',
    category: 'AI & APIs',
    tech: ['React', 'OpenAI API', 'Tailwind CSS', 'Stream Processing'],
    description: 'An AI-powered conversational assistant built on modern LLM APIs. Supports multi-turn chat, markdown formatting, syntax highlighted code, and streaming outputs.',
    url: 'https://spark-ai-assistant.vercel.app/',
    featured: true,
    highlight: 'Low-latency streaming responses and markdown parsing'
  },
  {
    title: 'CGPA Calculator',
    category: 'Utilities',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Academic Algorithms'],
    description: 'Smart academic grading and GPA calculator for university students. Add courses, assign credit units, and dynamically compute semester GPA and cumulative CGPA.',
    url: 'https://cgpa-calc-two.vercel.app/',
    featured: false,
    highlight: 'Instant multi-semester GPA & CGPA forecasting'
  },
  {
    title: 'Latex — Fine Dining',
    category: 'Frontend & 3D',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Interactive UI'],
    description: 'A luxury restaurant website for Latex, a Nigerian fine-dining brand. Features a hero carousel, interactive menu showcase, chef profiles, and reservation modal.',
    url: 'https://latex-opal.vercel.app/',
    featured: false,
    highlight: 'High-conversion booking system & visual culinary gallery'
  },
  {
    title: 'Wealthy Elephant',
    category: 'Full-Stack',
    tech: ['React', 'Node.js', 'Chart.js', 'Tailwind CSS'],
    description: 'Personal finance and investment tracker dashboard. Visualize portfolio performance, analyze categorical expenses, and track monthly budgeting goals.',
    url: 'https://wealthy-elephant-frontend.vercel.app/',
    featured: false,
    highlight: 'Real-time financial analytics and budget pacing metrics'
  },
  {
    title: 'Royal Kiana',
    category: 'Frontend & 3D',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Animation'],
    description: 'An elegant beauty and lifestyle brand web experience. Features dynamic product showcases, fluid page transitions, and a custom appointment booking flow.',
    url: 'https://royal-kiana.vercel.app/',
    featured: false,
    highlight: 'Fluid motion transitions & luxury aesthetics'
  },
  {
    title: 'Clothes Store',
    category: 'E-Commerce',
    tech: ['React', 'Tailwind CSS', 'Cart State', 'Filtering'],
    description: 'Fashion e-commerce storefront with instantaneous client-side filtering by category, size, and price, with persistent cart and checkout flow.',
    url: 'https://clothes-stores-eta.vercel.app/',
    featured: false,
    highlight: 'Instant faceted search and persistent shopping cart'
  },
  {
    title: 'Electronic Store',
    category: 'E-Commerce',
    tech: ['React', 'Tailwind CSS', 'Context API', 'Cart Logic'],
    description: 'Consumer electronics catalog with product search, category filtering, detailed product specification sheets, and responsive shopping cart.',
    url: 'https://electronic-store-omega.vercel.app/',
    featured: false,
    highlight: 'Comprehensive hardware filtering and responsive checkout'
  },
  {
    title: 'MedTrack',
    category: 'Full-Stack',
    tech: ['React', 'Node.js', 'MongoDB', 'Notification API'],
    description: 'Medication management platform to track daily prescriptions, set recurrence alarms, and monitor treatment adherence with visual health analytics.',
    url: 'https://med-track-rho.vercel.app/',
    featured: false,
    highlight: 'Adherence tracking and prescription schedule reminders'
  },
  {
    title: 'Netflix Clone',
    category: 'Frontend & 3D',
    tech: ['React', 'TMDB API', 'Tailwind CSS', 'Video Embeds'],
    description: 'Streaming video platform interface powered by TMDB API. Browse trending movies and TV series, view trailer previews, and filter by genre rows.',
    url: 'https://netflic-clone-umber.vercel.app/',
    featured: false,
    highlight: 'Dynamic movie trailers & TMDB catalog integration'
  },
  {
    title: 'Secure Key',
    category: 'Utilities',
    tech: ['React', 'Web Crypto API', 'Tailwind CSS'],
    description: 'Cryptographic password and API token generator leveraging browser-native Crypto APIs for high-entropy secure credential generation.',
    url: 'https://secure-key-6dt1.vercel.app/',
    featured: false,
    highlight: 'Browser-native cryptographic randomness generation'
  },
  {
    title: 'Weather Platform',
    category: 'Utilities',
    tech: ['React', 'OpenWeather API', 'Geolocation API'],
    description: 'Live meteorological dashboard with city-based geolocation search, current conditions, humidity/wind metrics, and 7-day visual weather forecasting.',
    url: 'https://weather-platform-ochre.vercel.app/',
    featured: false,
    highlight: 'Accurate global weather telemetry and forecast charts'
  },
  {
    title: 'Ebenezer Shoes',
    category: 'E-Commerce',
    tech: ['React', 'Tailwind CSS', 'Brand UI'],
    description: 'E-commerce showcase for handmade leather craftsmanship, custom shoe ordering, and artisan training program registration.',
    url: 'https://shoes-making.vercel.app/',
    featured: false,
    highlight: 'Artisanal craft catalog and workshop enrollment'
  },
  {
    title: 'Orji Michael Portfolio',
    category: 'Frontend & 3D',
    tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    description: 'High-end design portfolio built for a Senior UI/UX Designer featuring smooth page transitions, design project walkthroughs, and resume timelines.',
    url: 'https://orji-michael.vercel.app/',
    featured: false,
    highlight: 'Editorial design showcase and interactive resume timeline'
  }
];

const CATEGORIES = ['All', 'Full-Stack', 'AI & APIs', 'Frontend & 3D', 'E-Commerce', 'Utilities'];

function proxyUrl(url) {
  return `https://late-snow-8d7f.israelloko65.workers.dev/?url=${encodeURIComponent(url)}`;
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <Head>
        <title>Projects &amp; Work | Loko Israel — Full-Stack Developer</title>
        <meta name="description" content="Explore live full-stack applications, AI tools, and frontend systems built by Loko Israel." />
      </Head>

      <Navbar />

      <main className="pt-28 lg:pt-36 bg-[#f5f2ec] min-h-screen text-[#1a1a1a]">
        
        {/* Page Hero Header */}
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200/80 shadow-sm text-xs font-mono text-zinc-600 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c8a845]" />
              <span>PRODUCTION SHOWCASE // {ALL_PROJECTS.length} SHIPPED APPS</span>
            </div>

            <h1 className="font-serif italic text-5xl sm:text-7xl lg:text-8xl text-ink leading-[1.05] tracking-tight mb-6">
              Featured Work &amp; <span className="text-[#c8a845] font-normal not-italic font-display">Systems</span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed font-sans max-w-2xl">
              A curated catalog of full-stack platforms, developer tools, e-commerce engines, and AI integrations engineered for scalability and real-world utility.
            </p>
          </div>
        </section>

        {/* Filter and Search Bar */}
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="p-4 sm:p-6 bg-white border border-zinc-200/90 rounded-2xl shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-ink text-white shadow-sm'
                      : 'bg-[#f5f2ec] text-zinc-600 hover:text-ink hover:bg-zinc-200/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects or stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#f5f2ec] border border-zinc-200/80 rounded-full pl-10 pr-4 py-2 text-xs sm:text-sm text-ink placeholder-zinc-400 focus:outline-none focus:border-[#c8a845] focus:bg-white transition-all font-sans"
              />
            </div>

          </div>
        </section>

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-white border border-zinc-200 rounded-2xl p-8">
              <p className="font-serif italic text-2xl text-zinc-700 mb-2">No projects found matching your criteria.</p>
              <p className="text-zinc-500 text-sm mb-6">Try clearing your search query or selecting a different category.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="bg-ink text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (idx % 6) * 0.05 }}
                  className="bg-white border border-zinc-200/90 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Project Preview Header / Header Visual */}
                    <div className="relative h-48 sm:h-52 bg-zinc-100 border-b border-zinc-200 overflow-hidden group-hover:bg-zinc-200/60 transition-colors">
                      <iframe
                        src={proxyUrl(project.url)}
                        title={project.title}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                        className="absolute inset-0 border-0 pointer-events-none w-[200%] h-[200%] transform scale-50 origin-top-left opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-medium text-zinc-700 shadow-sm">
                        {project.category}
                      </div>
                      {project.featured && (
                        <div className="absolute top-3 right-3 bg-[#c8a845] text-ink px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="font-serif italic text-2xl text-ink mb-2 group-hover:text-[#c8a845] transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-zinc-500 text-sm leading-relaxed mb-4 font-sans line-clamp-3">
                        {project.description}
                      </p>

                      {/* Highlight Badge */}
                      {project.highlight && (
                        <div className="text-xs font-mono text-zinc-600 bg-[#f5f2ec] p-2.5 rounded-lg mb-4 border border-zinc-200/60 flex items-start gap-2">
                          <span className="text-[#c8a845] font-bold">⚡</span>
                          <span>{project.highlight}</span>
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 bg-zinc-100 text-zinc-600 rounded-md text-xs font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="p-6 pt-0 border-t border-zinc-100 flex items-center justify-between">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-[#c8a845] transition-colors pt-4"
                    >
                      <span>Launch Live Demo</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* Flagship Case Study Spotlight */}
        <section className="py-20 bg-white border-t border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <span className="font-mono text-xs text-[#c8a845] uppercase tracking-widest block mb-2">
                Deep Dive Spotlight
              </span>
              <h2 className="font-serif italic text-4xl lg:text-5xl text-ink">
                Architecture in Action: Sieve &amp; Apply Bureau
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Sieve Spotlight */}
              <div className="p-8 sm:p-10 bg-[#f5f2ec] border border-zinc-200 rounded-2xl">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="font-mono text-xs text-zinc-400 uppercase">[ CASE STUDY 01 ]</span>
                  <a
                    href="https://sieve-inky.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-ink hover:text-[#c8a845] transition-colors"
                  >
                    Live App <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
                <h3 className="font-serif italic text-3xl text-ink mb-3">Sieve Resume Engine</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-sans">
                  Engineered to eliminate the friction of building polished ATS-friendly resumes. Built with React and Tailwind CSS, Sieve implements dynamic state persistence, instant PDF render caching, and real-time design customizability.
                </p>
                <div className="space-y-2 text-xs font-mono text-zinc-500 pt-4 border-t border-zinc-200">
                  <div><strong>STACK:</strong> React · Tailwind CSS · jsPDF · HTML2Canvas · Vercel</div>
                  <div><strong>METRIC:</strong> Sub-second PDF generation with 100% vector typography clarity.</div>
                </div>
              </div>

              {/* Apply Bureau Spotlight */}
              <div className="p-8 sm:p-10 bg-[#f5f2ec] border border-zinc-200 rounded-2xl">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="font-mono text-xs text-zinc-400 uppercase">[ CASE STUDY 02 ]</span>
                  <a
                    href="https://apply-bureau.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-ink hover:text-[#c8a845] transition-colors"
                  >
                    Live App <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
                <h3 className="font-serif italic text-3xl text-ink mb-3">Apply Bureau Platform</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-sans">
                  Centralized career management platform empowering candidates to track applications, manage interviews, and parse inbound opportunities without messy spreadsheets.
                </p>
                <div className="space-y-2 text-xs font-mono text-zinc-500 pt-4 border-t border-zinc-200">
                  <div><strong>STACK:</strong> Next.js · Node.js · MongoDB · JWT Authentication</div>
                  <div><strong>METRIC:</strong> 500+ users onboarded in Month 1 with 94+ Lighthouse performance.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Call to Action */}
        <section className="py-20 bg-ink text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif italic text-4xl sm:text-5xl mb-6">
              Have a project or system you want to build?
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-8 font-sans">
              I am available for freelance contracts, full-time engineering roles, and technical collaborations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#c8a845] hover:bg-[#b89738] text-[#1a1a1a] px-8 py-3.5 rounded-full font-semibold text-sm transition-all shadow-md"
              >
                <span>Let&apos;s Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/skills"
                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white px-8 py-3.5 rounded-full font-medium text-sm transition-all"
              >
                <span>Inspect Technical Stack</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
