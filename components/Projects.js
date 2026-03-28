import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BsArrowUpRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { ImSpinner8 } from 'react-icons/im';

const PROJECT_LIST = [
  { title: 'Resume Builder', tech: 'React, Tailwind CSS', description: 'Build and export professional resumes in minutes. Choose from multiple templates, fill in your details with a live preview, and download a polished PDF.', url: 'https://resume-builder-ten-beta-63.vercel.app/', color: '#3B82F6' },
  { title: 'CGPA Calculator', tech: 'React, JavaScript', description: 'A smart academic calculator for Nigerian university students. Add courses, assign credit units and letter grades, and instantly compute your semester GPA and cumulative CGPA.', url: 'https://cgpa-calc-two.vercel.app/', color: '#10B981' },
  { title: 'Apply Bureau', tech: 'Next.js, Node.js, MongoDB', description: 'A modern job application platform connecting candidates with employers. Browse listings, track your applications, and manage your profile from a clean dashboard.', url: 'https://apply-bureau.vercel.app/', color: '#8B5CF6' },
  { title: 'Latex — Fine Dining', tech: 'React, Tailwind CSS', description: 'A premium restaurant website for Latex, a Nigerian fine-dining brand. Features a hero carousel, menu showcase, chef profiles, gallery, and a table reservation system.', url: 'https://latex-opal.vercel.app/', color: '#F59E0B' },
  { title: 'Wealthy Elephant', tech: 'React, Node.js, Tailwind', description: 'A personal finance and investment tracking frontend. Visualize portfolio performance, monitor expenses by category, and stay on top of financial goals.', url: 'https://wealthy-elephant-frontend.vercel.app/', color: '#EF4444' },
  { title: 'Orji Michael Portfolio', tech: 'Next.js, Framer Motion, Tailwind', description: 'Portfolio site for Orji Michael, a UI/UX Designer with 3+ years of experience. Showcases projects, a full resume timeline, and a contact section.', url: 'https://orji-michael.vercel.app/', color: '#06B6D4' },
  { title: 'Spark AI Assistant', tech: 'React, OpenAI API, Tailwind', description: 'An AI-powered conversational assistant built on the OpenAI API. Supports multi-turn chat, code highlighting, and real-time streaming responses.', url: 'https://spark-ai-assistant.vercel.app/', color: '#F97316' },
  { title: 'Clothes Store', tech: 'React, Tailwind, Cart Logic', description: 'A modern fashion e-commerce store with product filtering by category, size, and price. Includes a fully functional cart and smooth checkout experience.', url: 'https://clothes-stores-eta.vercel.app/', color: '#EC4899' },
  { title: 'MedTrack', tech: 'React, Node.js, MongoDB', description: 'A medication management app to track prescriptions, set daily reminders, and log intake history with health analytics and adherence monitoring.', url: 'https://med-track-rho.vercel.app/', color: '#14B8A6' },
  { title: 'Netflix Clone', tech: 'React, TMDB API, Tailwind', description: 'A pixel-perfect Netflix UI clone powered by the TMDB API. Browse trending movies and TV shows, watch trailers, and explore curated category rows.', url: 'https://netflic-clone-umber.vercel.app/', color: '#EF4444' },
  { title: 'Royal Kiana', tech: 'Next.js, Tailwind, Framer Motion', description: 'An elegant beauty and lifestyle brand website. Features product showcases, animated page transitions, a booking section, and a luxurious visual identity.', url: 'https://royal-kiana.vercel.app/', color: '#D946EF' },
  { title: 'Ebenezer Shoes', tech: 'React, Tailwind CSS', description: 'E-commerce site for Ebenezer Shoes — a Nigerian handmade leather brand. Browse premium leather shoes, bags, accessories, and enroll in shoemaking training.', url: 'https://shoes-making.vercel.app/', color: '#78716C' },
  { title: 'Secure Key', tech: 'React, Crypto API', description: "A secure password and API key generator using the browser's Crypto API. Configure length and character sets, then copy strong random credentials instantly.", url: 'https://secure-key-6dt1.vercel.app/', color: '#64748B' },
  { title: 'Electronic Store', tech: 'React, Tailwind, Cart Logic', description: 'A full-featured electronics e-commerce store with product search, category filters, detailed product pages, and a smooth cart and checkout flow.', url: 'https://electronic-store-omega.vercel.app/', color: '#0EA5E9' },
  { title: 'Weather Platform', tech: 'React, OpenWeather API', description: 'A real-time weather dashboard. Search any city for live conditions, hourly breakdowns, and a 7-day forecast in a clean data-rich interface.', url: 'https://weather-platform-ochre.vercel.app/', color: '#38BDF8' },
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
          <ImSpinner8 className="text-[#FFD700] text-3xl animate-spin" />
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
  const [hovered, setHovered] = useState(false);
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
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500 bg-white"
    >
      {/* Mobile: stacked layout */}
      {isMobile ? (
        <div className="flex flex-col">
          {/* Preview */}
          <div className="relative w-full overflow-hidden" style={{ height: 220 }}>
            <div className="absolute top-0 inset-x-0 h-1 z-20" style={{ background: project.color }} />
            <ProjectPreview project={project} />
            <div className="absolute inset-0 z-30 pointer-events-none flex items-end justify-end p-3">
              <a href={project.url} target="_blank" rel="noopener noreferrer"
                className="pointer-events-auto flex items-center gap-1.5 bg-[#FFD700] text-gray-900 font-bold text-xs px-3 py-1.5 rounded-xl shadow">
                Open Site <BsArrowUpRight />
              </a>
            </div>
          </div>
          {/* Text */}
          <div className="flex flex-col p-6 gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: project.color }}>
              {project.tech}
            </span>
            <h3 className="text-xl font-black text-gray-900 leading-tight">{project.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 bg-gray-900 text-white font-bold rounded-xl text-sm w-fit">
              Live Preview <BsArrowUpRight />
            </a>
          </div>
        </div>
      ) : (
        /* Desktop: side-by-side hover expand */
        <div className="flex" style={{ minHeight: 420 }}>
          {/* Preview side */}
          <motion.div
            animate={{ width: hovered ? '100%' : '50%' }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className={`relative overflow-hidden flex-shrink-0 ${isEven ? 'order-1' : 'order-2'}`}
            style={{ minHeight: 420 }}
          >
            <div className="absolute top-0 inset-x-0 h-1 z-20" style={{ background: project.color }} />
            <ProjectPreview project={project} />
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 z-30 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 55%)' }}
                >
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 px-3 py-1.5 rounded-full shadow text-xs font-bold text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Live Preview
                  </div>
                  <a href={project.url} target="_blank" rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 pointer-events-auto flex items-center gap-2 bg-[#FFD700] text-gray-900 font-bold text-xs px-4 py-2 rounded-xl shadow hover:bg-yellow-300 transition-colors">
                    Open Site <BsArrowUpRight />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Text side */}
          <motion.div
            animate={{ opacity: hovered ? 0 : 1, width: hovered ? '0%' : '50%' }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className={`relative overflow-hidden bg-white flex-shrink-0 ${isEven ? 'order-2' : 'order-1'}`}
          >
            <div className="flex flex-col justify-center p-8 lg:p-10 h-full min-w-[280px]">
              <span className="text-xs font-mono font-bold uppercase tracking-widest mb-3" style={{ color: project.color }}>
                {project.tech}
              </span>
              <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4 leading-tight">
                {project.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm lg:text-base">
                {project.description}
              </p>
              <a href={project.url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-bold rounded-xl text-sm hover:bg-gray-800 transition-colors w-fit">
                Live Preview <BsArrowUpRight />
              </a>
            </div>
          </motion.div>
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
    <section id="projects" ref={ref} className="py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-[#FFD700]" />
            <span className="text-[#8a6d00] font-mono text-xs uppercase tracking-widest font-semibold">Work</span>
          </div>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900">Featured Projects</h2>
              <p className="text-gray-400 mt-2 text-sm">{PROJECT_LIST.length} projects · hover to expand preview</p>
            </div>
            <span className="text-sm font-semibold text-gray-400 bg-white border border-gray-100 px-4 py-2 rounded-full shadow-sm">
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
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => goTo(page - 1)} disabled={page === 0}
            className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-[#FFD700] hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm">
            <BsChevronLeft />
          </motion.button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <motion.button key={i} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} onClick={() => goTo(i)}
              className={`w-10 h-10 rounded-xl text-sm font-bold transition-all shadow-sm ${i === page ? 'bg-[#FFD700] text-gray-900 border border-[#FFD700]' : 'bg-white border border-gray-200 text-gray-500 hover:border-[#FFD700] hover:text-gray-900'}`}>
              {i + 1}
            </motion.button>
          ))}
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => goTo(page + 1)} disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-[#FFD700] hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm">
            <BsChevronRight />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
