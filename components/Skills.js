import { useState, Component, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5,
  SiNodedotjs, SiExpress, SiMongodb, SiThreedotjs, SiGreensock, SiGit, SiGithub,
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { MdDevices, MdSearch } from 'react-icons/md';

const SkillSphereCanvas = dynamic(() => import('./SkillSphereCanvas'), { ssr: false });

class WebGLErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { failed: false }; }
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (this.state.failed) return this.props.fallback ?? null;
    return this.props.children;
  }
}

const categories = [
  {
    label: 'Frontend',
    accent: '#3B82F6',
    bg: 'rgba(59,130,246,0.06)',
    skills: [
      { name: 'React',      icon: SiReact,      color: '#61DAFB', level: 92, desc: 'Built 15+ interactive apps using component-driven architecture and hooks.' },
      { name: 'Next.js',    icon: SiNextdotjs,  color: '#000',    level: 88, desc: 'SSR, static generation, and full-stack apps with Next.js.' },
      { name: 'Tailwind',   icon: SiTailwindcss,color: '#38BDF8', level: 95, desc: 'Rapid UI development with utility-first CSS.' },
      { name: 'JavaScript', icon: SiJavascript, color: '#EAB308', level: 90, desc: 'ES6+, async/await, DOM manipulation, and modern JS patterns.' },
      { name: 'HTML/CSS',   icon: SiHtml5,      color: '#E34F26', level: 96, desc: 'Semantic markup, animations, and pixel-perfect layouts.' },
    ],
  },
  {
    label: 'Backend',
    accent: '#10B981',
    bg: 'rgba(16,185,129,0.06)',
    skills: [
      { name: 'Node.js',  icon: SiNodedotjs, color: '#339933', level: 82, desc: 'RESTful APIs, middleware, authentication, and server-side logic.' },
      { name: 'Express',  icon: SiExpress,   color: '#555',    level: 80, desc: 'Fast, minimal web framework for building scalable APIs.' },
      { name: 'MongoDB',  icon: SiMongodb,   color: '#47A248', level: 78, desc: 'NoSQL database design, aggregation pipelines, and Mongoose ODM.' },
    ],
  },
  {
    label: '3D & Motion',
    accent: '#8B5CF6',
    bg: 'rgba(139,92,246,0.06)',
    skills: [
      { name: 'Three.js',      icon: SiThreedotjs,         color: '#111',    level: 75, desc: 'WebGL-powered 3D scenes, geometries, materials, and lighting.' },
      { name: 'GSAP',          icon: SiGreensock,          color: '#88CE02', level: 70, desc: 'Professional-grade timeline animations and scroll-triggered effects.' },
      { name: 'Framer Motion', icon: TbBrandFramerMotion,  color: '#FF0055', level: 85, desc: 'React animation library for smooth UI transitions.' },
    ],
  },
  {
    label: 'Tools',
    accent: '#F59E0B',
    bg: 'rgba(245,158,11,0.06)',
    skills: [
      { name: 'Git',        icon: SiGit,     color: '#F05032', level: 88, desc: 'Version control, branching strategies, and collaborative workflows.' },
      { name: 'GitHub',     icon: SiGithub,  color: '#181717', level: 86, desc: 'Open source contributions, PRs, and project management.' },
      { name: 'Responsive', icon: MdDevices, color: '#6366F1', level: 94, desc: 'Mobile-first layouts that work across all screen sizes.' },
      { name: 'SEO',        icon: MdSearch,  color: '#10B981', level: 72, desc: 'Meta tags, structured data, performance optimization.' },
    ],
  },
];

/* ── Proficiency bar ── */
function ProficiencyBar({ level, color, inView }) {
  return (
    <div className="w-full h-1 rounded-full bg-gray-100 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        className="h-full rounded-full"
        style={{ background: color }}
      />
    </div>
  );
}

/* ── Skill card with flip ── */
function SkillCard({ skill, inView, delay }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.4 }}
      className="relative cursor-pointer"
      style={{ perspective: 800, height: 110 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      {/* Front */}
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.45, ease: 'easeInOut' }}
        style={{ backfaceVisibility: 'hidden', position: 'absolute', inset: 0 }}
        className="flex flex-col gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#FFD700]/40 transition-shadow"
      >
        <div className="flex items-center gap-2.5">
          <Icon style={{ color: skill.color }} className="text-2xl shrink-0" />
          <span className="text-sm font-bold text-gray-900">{skill.name}</span>
          <span className="ml-auto text-xs font-black text-gray-300">{skill.level}%</span>
        </div>
        <ProficiencyBar level={skill.level} color={skill.color} inView={inView} />
        <p className="text-[11px] text-gray-400 font-medium">Hover to learn more</p>
      </motion.div>

      {/* Back */}
      <motion.div
        animate={{ rotateY: flipped ? 0 : -180 }}
        transition={{ duration: 0.45, ease: 'easeInOut' }}
        style={{ backfaceVisibility: 'hidden', position: 'absolute', inset: 0, rotateY: -180 }}
        className="flex flex-col justify-center p-4 rounded-2xl border border-[#FFD700]/30 shadow-md"
        style={{ backfaceVisibility: 'hidden', position: 'absolute', inset: 0, transform: 'rotateY(-180deg)', background: '#fffbeb' }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Icon style={{ color: skill.color }} className="text-base shrink-0" />
          <span className="text-xs font-black text-gray-900">{skill.name}</span>
        </div>
        <p className="text-[11px] text-gray-600 leading-relaxed">{skill.desc}</p>
      </motion.div>
    </motion.div>
  );
}

/* ── Category panel ── */
function CategoryPanel({ cat, inView, isActive, onClick, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.4 }}
    >
      <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-200 mb-2 ${
          isActive
            ? 'bg-gray-900 border-gray-900 shadow-md'
            : 'bg-white border-gray-100 hover:border-[#FFD700]/40'
        }`}
      >
        <span
          className="w-3 h-3 rounded-full shrink-0"
          style={{ background: cat.accent, boxShadow: isActive ? `0 0 8px ${cat.accent}` : 'none' }}
        />
        <span className={`text-sm font-bold ${isActive ? 'text-white' : 'text-gray-700'}`}>{cat.label}</span>
        <span className={`ml-auto text-xs font-mono ${isActive ? 'text-[#FFD700]' : 'text-gray-300'}`}>
          {cat.skills.length} skills
        </span>
      </button>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  const [activeTab, setActiveTab] = useState(0);
  const [sphereMounted, setSphereMounted] = useState(false);
  const mountedRef = useRef(false);

  if (inView && !mountedRef.current) {
    mountedRef.current = true;
    if (!sphereMounted) setSphereMounted(true);
  }

  const active = categories[activeTab];

  return (
    <section id="skills" ref={ref} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />

      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-[#FFD700]" />
              <span className="text-[#8a6d00] font-mono text-xs uppercase tracking-widest font-semibold">Expertise</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">Skills & Technologies</h2>
            <p className="text-gray-400 mt-3 text-base">
              {categories.reduce((a, c) => a + c.skills.length, 0)} skills across {categories.length} domains — hover cards to flip
            </p>
          </div>

          {/* Live total badges */}
          <div className="flex gap-3 flex-wrap">
            {categories.map((c) => (
              <button
                key={c.label}
                onClick={() => setActiveTab(categories.indexOf(c))}
                className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold transition-all"
                style={{
                  borderColor: activeTab === categories.indexOf(c) ? c.accent : 'transparent',
                  background: activeTab === categories.indexOf(c) ? `${c.accent}12` : '#f9f9f9',
                  color: c.accent,
                }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: c.accent }} />
                {c.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left — category nav + sphere */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            {categories.map((cat, i) => (
              <CategoryPanel
                key={cat.label}
                cat={cat}
                inView={inView}
                isActive={activeTab === i}
                onClick={() => setActiveTab(i)}
                delay={i * 0.07 + 0.1}
              />
            ))}

            {/* Sphere */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-4 h-52 rounded-2xl border border-gray-100 shadow-sm overflow-hidden relative bg-gray-50"
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="w-12 h-12 rounded-full bg-[#FFD700]/15 border-2 border-[#FFD700]/30 flex items-center justify-center">
                  <span className="text-[#8a6d00] font-black text-[10px] font-mono">TECH</span>
                </div>
              </div>
              <WebGLErrorBoundary
                fallback={
                  <div className="flex flex-wrap gap-1.5 p-4 items-center justify-center h-full">
                    {['React','Next','Node','MongoDB','Three.js','GSAP','Git'].map((s) => (
                      <span key={s} className="px-2 py-0.5 text-[10px] font-bold bg-white border border-gray-200 rounded-full text-gray-600">{s}</span>
                    ))}
                  </div>
                }
              >
                {sphereMounted && <SkillSphereCanvas />}
              </WebGLErrorBoundary>
            </motion.div>
          </div>

          {/* Right — skill cards grid */}
          <div className="lg:col-span-9">
            {/* Category header */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category title bar */}
                <div
                  className="flex items-center gap-4 px-6 py-4 rounded-2xl mb-6"
                  style={{ background: active.bg, border: `1px solid ${active.accent}25` }}
                >
                  <span
                    className="w-4 h-4 rounded-full shrink-0"
                    style={{ background: active.accent, boxShadow: `0 0 12px ${active.accent}` }}
                  />
                  <div>
                    <h3 className="font-black text-gray-900 text-lg">{active.label}</h3>
                    <p className="text-xs text-gray-500">{active.skills.length} technologies</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {categories.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTab(i)}
                        className="w-2 h-2 rounded-full transition-all duration-200"
                        style={{ background: i === activeTab ? active.accent : '#e5e7eb', transform: i === activeTab ? 'scale(1.4)' : 'scale(1)' }}
                      />
                    ))}
                  </div>
                </div>

                {/* Skill cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {active.skills.map((skill, i) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      inView={inView}
                      delay={i * 0.07}
                    />
                  ))}
                </div>

                {/* Proficiency legend */}
                <div className="mt-8 p-5 bg-gray-50 rounded-2xl border border-gray-100 flex flex-wrap items-center gap-6">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest shrink-0">Proficiency</span>
                  {[
                    { label: 'Expert', min: 90 },
                    { label: 'Advanced', min: 75 },
                    { label: 'Proficient', min: 0 },
                  ].map((tier) => (
                    <div key={tier.label} className="flex items-center gap-2">
                      <div
                        className="w-8 h-1.5 rounded-full"
                        style={{
                          background: tier.min >= 90
                            ? active.accent
                            : tier.min >= 75
                            ? `${active.accent}99`
                            : `${active.accent}55`,
                        }}
                      />
                      <span className="text-xs text-gray-500 font-medium">{tier.label}</span>
                    </div>
                  ))}
                  <p className="ml-auto text-xs text-gray-400 italic hidden sm:block">Click or hover cards to flip</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
