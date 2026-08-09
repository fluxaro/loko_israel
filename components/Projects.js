'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

const PROJECT_LIST = [
  { title: 'Resume Builder', tech: 'React, Tailwind CSS', description: 'Build and export professional resumes in minutes. Choose from multiple templates, fill in your details with a live preview, and download a polished PDF.', url: 'https://resume-builder-ten-beta-63.vercel.app/' },
  { title: 'CGPA Calculator', tech: 'React, JavaScript', description: 'A smart academic calculator for Nigerian university students. Add courses, assign credit units and letter grades, and instantly compute your semester GPA and cumulative CGPA.', url: 'https://cgpa-calc-two.vercel.app/' },
  { title: 'Apply Bureau', tech: 'Next.js, Node.js, MongoDB', description: 'A modern job application platform connecting candidates with employers. Browse listings, track your applications, and manage your profile from a clean dashboard.', url: 'https://apply-bureau.vercel.app/' },
  { title: 'Latex — Fine Dining', tech: 'React, Tailwind CSS', description: 'A premium restaurant website for Latex, a Nigerian fine-dining brand. Features a hero carousel, menu showcase, chef profiles, gallery, and a table reservation system.', url: 'https://latex-opal.vercel.app/' },
  { title: 'Wealthy Elephant', tech: 'React, Node.js, Tailwind', description: 'A personal finance and investment tracking frontend. Visualize portfolio performance, monitor expenses by category, and stay on top of financial goals.', url: 'https://wealthy-elephant-frontend.vercel.app/' },
  { title: 'Orji Michael Portfolio', tech: 'Next.js, Framer Motion, Tailwind', description: 'Portfolio site for Orji Michael, a UI/UX Designer with 3+ years of experience. Showcases projects, a full resume timeline, and a contact section.', url: 'https://orji-michael.vercel.app/' },
  { title: 'Spark AI Assistant', tech: 'React, OpenAI API, Tailwind', description: 'An AI-powered conversational assistant built on the OpenAI API. Supports multi-turn chat, code highlighting, and real-time streaming responses.', url: 'https://spark-ai-assistant.vercel.app/' },
  { title: 'Clothes Store', tech: 'React, Tailwind, Cart Logic', description: 'A modern fashion e-commerce store with product filtering by category, size, and price. Includes a fully functional cart and smooth checkout experience.', url: 'https://clothes-stores-eta.vercel.app/' },
  { title: 'MedTrack', tech: 'React, Node.js, MongoDB', description: 'A medication management app to track prescriptions, set daily reminders, and log intake history with health analytics and adherence monitoring.', url: 'https://med-track-rho.vercel.app/' },
  { title: 'Netflix Clone', tech: 'React, TMDB API, Tailwind', description: 'A pixel-perfect Netflix UI clone powered by the TMDB API. Browse trending movies and TV shows, watch trailers, and explore curated category rows.', url: 'https://netflic-clone-umber.vercel.app/' },
  { title: 'Royal Kiana', tech: 'Next.js, Tailwind, Framer Motion', description: 'An elegant beauty and lifestyle brand website. Features product showcases, animated page transitions, a booking section, and a luxurious visual identity.', url: 'https://royal-kiana.vercel.app/' },
  { title: 'Ebenezer Shoes', tech: 'React, Tailwind CSS', description: 'E-commerce site for Ebenezer Shoes — a Nigerian handmade leather brand. Browse premium leather shoes, bags, accessories, and enroll in shoemaking training.', url: 'https://shoes-making.vercel.app/' },
  { title: 'Secure Key', tech: 'React, Crypto API', description: "A secure password and API key generator using the browser's Crypto API. Configure length and character sets, then copy strong random credentials instantly.", url: 'https://secure-key-6dt1.vercel.app/' },
  { title: 'Electronic Store', tech: 'React, Tailwind, Cart Logic', description: 'A full-featured electronics e-commerce store with product search, category filters, detailed product pages, and a smooth cart and checkout flow.', url: 'https://electronic-store-omega.vercel.app/' },
  { title: 'Weather Platform', tech: 'React, OpenWeather API', description: 'A real-time weather dashboard. Search any city for live conditions, hourly breakdowns, and a 7-day forecast in a clean data-rich interface.', url: 'https://weather-platform-ochre.vercel.app/' },
];

const PER_PAGE = 4;

function proxyUrl(url) {
  return `https://late-snow-8d7f.israelloko65.workers.dev/?url=${encodeURIComponent(url)}`;
}

function ProjectPreview({ project }) {
  const [loaded, setLoaded] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => setLoaded(true), 4000);
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="absolute inset-0">
      {!loaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-gray-50">
          <Loader2 className="text-gray-400 w-8 h-8 animate-spin" />
          <span className="text-xs text-gray-400 font-medium">Loading preview...</span>
        </div>
      )}
      <iframe
        src={proxyUrl(project.url)}
        title={project.title}
        loading="eager"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        onLoad={() => { clearTimeout(timerRef.current); setLoaded(true); }}
        className="absolute inset-0 border-0"
        style={{
          width: '200%',
          height: '200%',
          transform: 'scale(0.5)',
          transformOrigin: 'top left',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.5s ease',
          pointerEvents: 'auto',
          willChange: 'opacity',
        }}
      />
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [isMobile, setIsMobile] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const isEven = index % 2 === 0;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % PER_PAGE) * 0.1 }}
      className="relative overflow-hidden border border-gray-200 bg-white"
    >
      {/* Mobile: stacked layout */}
      {isMobile ? (
        <div className="flex flex-col">
          {/* Preview */}
          <div className="relative w-full overflow-hidden border-b border-gray-200" style={{ height: 220 }}>
            <ProjectPreview project={project} />
          </div>
          {/* Text */}
          <div className="flex flex-col p-6 gap-2">
            <span className="font-mono text-sm text-gray-400 uppercase tracking-widest">
              {project.tech}
            </span>
            <h3 className="font-serif italic text-2xl text-ink leading-tight">{project.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer"
              className="mt-2 text-ink font-medium text-sm inline-flex items-center gap-1 hover:text-accent">
              View Project <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      ) : (
        /* Desktop: FIXED 60/40 layout */
        <div className="flex" style={{ minHeight: 420 }}>
          {/* Preview side */}
          <div className={`relative overflow-hidden w-[60%] flex-shrink-0 ${isEven ? 'order-1 border-r border-gray-200' : 'order-2 border-l border-gray-200'}`}>
            <ProjectPreview project={project} />
          </div>

          {/* Text side */}
          <div className={`relative overflow-hidden bg-white w-[40%] flex-shrink-0 ${isEven ? 'order-2' : 'order-1'}`}>
            <div className="flex flex-col justify-center p-8 lg:p-10 h-full">
              <span className="font-mono text-sm text-gray-400 uppercase tracking-widest mb-3">
                {project.tech}
              </span>
              <h3 className="font-serif italic text-2xl lg:text-3xl text-ink mb-4 leading-tight">
                {project.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm lg:text-base">
                {project.description}
              </p>
              <a href={project.url} target="_blank" rel="noopener noreferrer"
                className="text-ink font-medium text-sm inline-flex items-center gap-1 hover:text-accent w-fit">
                View Project <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const [page, setPage] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const totalPages = Math.ceil(PROJECT_LIST.length / PER_PAGE);
  const paginated = PROJECT_LIST.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const goTo = (p) => {
    setPage(p);
    setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };

  return (
    <section id="projects" ref={ref} className="py-20 lg:py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-200" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-gray-400 font-mono text-xs uppercase tracking-widest font-medium">Work</span>
          </div>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="font-serif italic text-4xl lg:text-5xl text-ink">Featured Projects</h2>
              <p className="text-gray-400 mt-2 text-sm">Selected personal and freelance works.</p>
            </div>
            <span className="text-sm font-medium text-gray-500">
              {page + 1} / {totalPages}
            </span>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={page} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="flex flex-col gap-8">
            {paginated.map((project, i) => (
              <ProjectCard key={project.url} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-3 mt-14">
          <button
            onClick={() => goTo(page - 1)} disabled={page === 0}
            className="w-10 h-10 border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-ink hover:border-gray-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              className={`w-10 h-10 text-sm font-medium transition-colors ${i === page ? 'bg-ink text-white border border-ink' : 'bg-white border border-gray-200 text-gray-500 hover:text-ink hover:border-gray-300'}`}>
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => goTo(page + 1)} disabled={page === totalPages - 1}
            className="w-10 h-10 border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-ink hover:border-gray-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
