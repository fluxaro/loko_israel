import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiCode, HiLightningBolt, HiShieldCheck, HiColorSwatch, HiCube,
  HiArrowRight, HiStar, HiCheckCircle,
} from 'react-icons/hi';
import {
  BsArrowUpRight,
} from 'react-icons/bs';
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiThreedotjs, SiTailwindcss,
} from 'react-icons/si';

/* ═══════════════════════════════════════════════
   1. SERVICES
═══════════════════════════════════════════════ */
const services = [
  {
    icon: HiCode,
    title: 'Frontend Development',
    desc: 'Pixel-perfect, responsive UIs built with React & Next.js. Fast, accessible, and optimized for every screen.',
    tags: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
    color: '#3B82F6',
  },
  {
    icon: HiCube,
    title: 'Full-Stack Apps',
    desc: 'End-to-end applications from database schema to deployed product. REST APIs, auth, and real-time features.',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    color: '#10B981',
  },
  {
    icon: HiColorSwatch,
    title: '3D & Interactive',
    desc: 'Immersive Three.js / WebGL experiences and scroll-driven animations that make products unforgettable.',
    tags: ['Three.js', 'GSAP', 'WebGL', 'Canvas'],
    color: '#8B5CF6',
  },
  {
    icon: HiLightningBolt,
    title: 'Performance & SEO',
    desc: 'Lighthouse-optimised builds, Core Web Vitals, semantic HTML, and structured data that rank and load fast.',
    tags: ['Lighthouse', 'Core Web Vitals', 'SEO', 'A11y'],
    color: '#F59E0B',
  },
  {
    icon: HiShieldCheck,
    title: 'UI/UX Design',
    desc: 'Clean, modern interfaces grounded in user behaviour. Wireframes to polished design systems and component libraries.',
    tags: ['Figma', 'Design Systems', 'Prototyping'],
    color: '#EF4444',
  },
];

function Services({ inView }) {
  return (
    <div>
      <SectionLabel tag="Services" title="What I Build" sub="Five disciplines, one developer." inView={inView} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 + 0.15, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#FFD700]/40 transition-all duration-300 flex flex-col gap-4"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: `${s.color}18` }}
              >
                <Icon className="text-xl" style={{ color: s.color }} />
              </div>
              <div>
                <h3 className="font-black text-gray-900 text-base mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-lg border"
                    style={{ color: s.color, borderColor: `${s.color}30`, background: `${s.color}0d` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   2. PROCESS
═══════════════════════════════════════════════ */
const steps = [
  { num: '01', title: 'Discover', desc: 'Deep-dive into goals, audience, and technical constraints. No assumptions — just clear requirements.' },
  { num: '02', title: 'Design', desc: 'Wireframes, component architecture, and a design system scoped to the project.' },
  { num: '03', title: 'Build', desc: 'Iterative development with clean, modular code. Regular check-ins to stay aligned.' },
  { num: '04', title: 'Optimise', desc: 'Performance profiling, accessibility audit, and cross-browser testing before handoff.' },
  { num: '05', title: 'Deploy', desc: 'CI/CD pipeline, production setup on Vercel or your preferred platform, and post-launch support.' },
];

function Process({ inView }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <SectionLabel tag="Process" title="How I Work" sub="A repeatable system that ships quality, every time." inView={inView} />
      <div className="mt-10 flex flex-col lg:flex-row gap-6">
        {/* Step list */}
        <div className="flex flex-col gap-3 lg:w-80 shrink-0">
          {steps.map((s, i) => (
            <motion.button
              key={s.num}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.08 + 0.1 }}
              onClick={() => setActive(i)}
              className={`text-left flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-250 ${
                active === i
                  ? 'bg-gray-900 border-gray-900 shadow-lg'
                  : 'bg-white border-gray-100 hover:border-[#FFD700]/40'
              }`}
            >
              <span
                className={`text-xs font-black font-mono shrink-0 ${active === i ? 'text-[#FFD700]' : 'text-gray-300'}`}
              >
                {s.num}
              </span>
              <span className={`font-bold text-sm ${active === i ? 'text-white' : 'text-gray-700'}`}>
                {s.title}
              </span>
              {active === i && <HiArrowRight className="ml-auto text-[#FFD700]" />}
            </motion.button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3 }}
              className="h-full bg-white rounded-2xl border border-gray-100 shadow-sm p-8 lg:p-10 flex flex-col justify-center"
            >
              <span className="text-6xl font-black text-gray-50 font-mono leading-none select-none">
                {steps[active].num}
              </span>
              <h3 className="text-3xl font-black text-gray-900 mt-2 mb-4">{steps[active].title}</h3>
              <p className="text-gray-500 text-base leading-relaxed max-w-md">{steps[active].desc}</p>
              <div className="mt-6 w-12 h-1 rounded-full bg-[#FFD700]" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   3. ACHIEVEMENTS & STATS
═══════════════════════════════════════════════ */
const stats = [
  { value: 40, suffix: '+', label: 'Projects Shipped' },
  { value: 2,  suffix: '+', label: 'Years Building' },
  { value: 10, suffix: '+', label: 'Technologies' },
  { value: 15, suffix: '+', label: 'Students Mentored' },
];

const badges = [
  { icon: SiReact,     label: 'React Expert',      color: '#61DAFB' },
  { icon: SiNextdotjs, label: 'Next.js',            color: '#111' },
  { icon: SiNodedotjs, label: 'Node.js',            color: '#339933' },
  { icon: SiMongodb,   label: 'MongoDB',            color: '#47A248' },
  { icon: SiThreedotjs,label: '3D / WebGL',         color: '#555' },
  { icon: SiTailwindcss,label:'Tailwind CSS',       color: '#38BDF8' },
];

function Counter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1400;
    const steps = 50;
    const inc = target / steps;
    let cur = 0;
    const interval = setInterval(() => {
      cur += inc;
      if (cur >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.floor(cur));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  return <span>{count}{suffix}</span>;
}

function Achievements({ inView }) {
  return (
    <div>
      <SectionLabel tag="Achievements" title="By the Numbers" sub="Real output, not estimates." inView={inView} />

      {/* Animated stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.1 + 0.1 }}
            className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm text-center hover:border-[#FFD700]/40 hover:shadow-md transition-all"
          >
            <div className="text-4xl font-black text-gray-900 mb-1" style={{ textShadow: '0 0 0 transparent' }}>
              <Counter target={s.value} suffix={s.suffix} inView={inView} />
            </div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Tech badges */}
      <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Core Tech Stack</p>
        <div className="flex flex-wrap gap-4">
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06 + 0.3 }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-[#FFD700]/40 hover:shadow-md transition-all cursor-default"
              >
                <Icon style={{ color: b.color }} className="text-lg" />
                <span className="text-sm font-bold text-gray-700">{b.label}</span>
                <HiCheckCircle className="text-[#FFD700] text-sm ml-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   4. TESTIMONIALS
═══════════════════════════════════════════════ */
const testimonials = [
  {
    name: 'Orji Michael',
    role: 'UI/UX Designer',
    avatar: 'OM',
    color: '#06B6D4',
    text: 'Loko built my portfolio exactly as I envisioned it. His attention to animation detail and smooth transitions took it to a whole different level. Highly professional and fast.',
    stars: 5,
  },
  {
    name: 'Student — Digital Fortress',
    role: 'Frontend Bootcamp',
    avatar: 'DF',
    color: '#8B5CF6',
    text: 'The best instructor I\'ve had. Loko breaks down complex React concepts into simple, hands-on lessons. After his class I could build full projects on my own.',
    stars: 5,
  },
  {
    name: 'Client — Apply Bureau',
    role: 'Job Platform Founder',
    avatar: 'AB',
    color: '#10B981',
    text: 'Delivered a fully working job board with MongoDB, authentication, and a clean dashboard in record time. Communication was excellent throughout.',
    stars: 5,
  },
  {
    name: 'Client — Ebenezer Shoes',
    role: 'E-commerce Brand',
    avatar: 'ES',
    color: '#F59E0B',
    text: 'Our online store went from concept to live in under 2 weeks. The design was modern, mobile-perfect, and our customers love it.',
    stars: 5,
  },
];

function Testimonials({ inView }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[active];

  return (
    <div>
      <SectionLabel tag="Testimonials" title="What People Say" sub="Words from clients, students, and collaborators." inView={inView} />

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Active quote — big panel */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="h-full p-8 bg-gray-900 rounded-2xl flex flex-col gap-6 min-h-[260px]"
            >
              <HiStar className="text-[#FFD700] text-3xl opacity-60" />
              <p className="text-white text-base leading-relaxed flex-1">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <HiStar key={i} className="text-[#FFD700] text-sm" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Selector cards */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          {testimonials.map((item, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.08 + 0.2 }}
              onClick={() => setActive(i)}
              className={`text-left p-4 rounded-2xl border transition-all duration-250 flex items-center gap-3 ${
                active === i
                  ? 'border-[#FFD700]/50 bg-[#FFD700]/08 shadow-sm'
                  : 'border-gray-100 bg-white hover:border-[#FFD700]/30'
              }`}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-black shrink-0"
                style={{ background: item.color }}
              >
                {item.avatar}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-gray-900 truncate">{item.name}</div>
                <div className="text-xs text-gray-400 truncate">{item.role}</div>
              </div>
              {active === i && <div className="ml-auto w-2 h-2 rounded-full bg-[#FFD700] shrink-0" />}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Dot nav */}
      <div className="flex gap-2 mt-5">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? 'w-6 bg-[#FFD700]' : 'w-1.5 bg-gray-200'}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   5. FEATURED CASE STUDY
═══════════════════════════════════════════════ */
const caseStudy = {
  title: 'Apply Bureau',
  subtitle: 'Full-Stack Job Platform',
  url: 'https://apply-bureau.vercel.app/',
  color: '#8B5CF6',
  problem: 'Job seekers in Nigeria had no clean, modern platform to browse listings and track applications. Existing tools were clunky, slow, and mobile-hostile.',
  solution: 'Built a full-stack job board with role-based auth, a candidate dashboard, live job listings from a MongoDB backend, and a mobile-first responsive UI.',
  result: 'Shipped in under 3 weeks. Live and in use. Clean Lighthouse scores across performance, accessibility, and SEO.',
  stack: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind', 'JWT Auth', 'Vercel'],
  metrics: [
    { label: 'Time to ship', value: '< 3 weeks' },
    { label: 'Lighthouse score', value: '94+' },
    { label: 'Mobile-first', value: '100%' },
  ],
};

function CaseStudy({ inView }) {
  return (
    <div>
      <SectionLabel tag="Case Study" title="Deep Dive" sub="One project, fully unpacked." inView={inView} />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-10 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
      >
        {/* Hero bar */}
        <div className="px-8 py-6 flex flex-wrap items-center justify-between gap-4" style={{ background: `${caseStudy.color}10`, borderBottom: `1px solid ${caseStudy.color}20` }}>
          <div>
            <span className="text-xs font-bold font-mono uppercase tracking-widest" style={{ color: caseStudy.color }}>
              Featured Case Study
            </span>
            <h3 className="text-2xl font-black text-gray-900 mt-1">{caseStudy.title}</h3>
            <p className="text-gray-500 text-sm">{caseStudy.subtitle}</p>
          </div>
          <a
            href={caseStudy.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 font-bold text-sm rounded-xl text-white transition-all hover:opacity-90"
            style={{ background: caseStudy.color }}
          >
            Live Site <BsArrowUpRight />
          </a>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
          {[
            { label: '01 — Problem', text: caseStudy.problem },
            { label: '02 — Solution', text: caseStudy.solution },
            { label: '03 — Result', text: caseStudy.result },
          ].map((block) => (
            <div key={block.label} className="p-7 flex flex-col gap-3">
              <span className="text-xs font-bold font-mono uppercase tracking-widest text-gray-400">{block.label}</span>
              <p className="text-gray-700 text-sm leading-relaxed">{block.text}</p>
            </div>
          ))}
        </div>

        {/* Footer row */}
        <div className="px-8 py-5 bg-gray-50 border-t border-gray-100 flex flex-wrap items-center gap-6 justify-between">
          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            {caseStudy.stack.map((s) => (
              <span key={s} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-gray-600 shadow-sm">
                {s}
              </span>
            ))}
          </div>
          {/* Metrics */}
          <div className="flex gap-6">
            {caseStudy.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-sm font-black text-gray-900">{m.value}</div>
                <div className="text-[11px] text-gray-400 font-medium">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   Shared section label helper
═══════════════════════════════════════════════ */
function SectionLabel({ tag, title, sub, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="w-8 h-0.5 bg-[#FFD700]" />
        <span className="text-[#8a6d00] font-mono text-xs uppercase tracking-widest font-semibold">{tag}</span>
      </div>
      <h2 className="text-3xl lg:text-4xl font-black text-gray-900">{title}</h2>
      {sub && <p className="text-gray-400 mt-2 text-sm">{sub}</p>}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   TAB NAV
═══════════════════════════════════════════════ */
const TABS = ['Services', 'Process', 'Achievements', 'Testimonials', 'Case Study'];

/* ═══════════════════════════════════════════════
   ROOT EXPORT
═══════════════════════════════════════════════ */
export default function Highlights() {
  const [tab, setTab] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const tabBarRef = useRef(null);

  // smooth scroll tab bar into view on mobile when switching
  const handleTab = (i) => {
    setTab(i);
  };

  return (
    <section id="highlights" ref={ref} className="py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Tab bar */}
        <motion.div
          ref={tabBarRef}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="flex gap-2 flex-wrap mb-14"
        >
          {TABS.map((t, i) => (
            <button
              key={t}
              onClick={() => handleTab(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold border transition-all duration-200 ${
                tab === i
                  ? 'bg-gray-900 text-white border-gray-900 shadow-md'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-[#FFD700]/50 hover:text-gray-900'
              }`}
            >
              {tab === i && <span className="text-[#FFD700] mr-1.5">▸</span>}
              {t}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            {tab === 0 && <Services inView={inView} />}
            {tab === 1 && <Process inView={inView} />}
            {tab === 2 && <Achievements inView={inView} />}
            {tab === 3 && <Testimonials inView={inView} />}
            {tab === 4 && <CaseStudy inView={inView} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
