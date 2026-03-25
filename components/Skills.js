import { useState } from 'react';
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

const categories = [
  {
    label: 'Frontend',
    accent: '#3B82F6',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB', desc: 'Built 15+ interactive apps using component-driven architecture and hooks.' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#111', desc: 'SSR, static generation, and full-stack apps with Next.js.' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#38BDF8', desc: 'Rapid UI development with utility-first CSS.' },
      { name: 'JavaScript', icon: SiJavascript, color: '#EAB308', desc: 'ES6+, async/await, DOM manipulation, and modern JS patterns.' },
      { name: 'HTML/CSS', icon: SiHtml5, color: '#E34F26', desc: 'Semantic markup, animations, and pixel-perfect layouts.' },
    ],
  },
  {
    label: 'Backend',
    accent: '#10B981',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933', desc: 'RESTful APIs, middleware, authentication, and server-side logic.' },
      { name: 'Express', icon: SiExpress, color: '#555', desc: 'Fast, minimal web framework for building scalable APIs.' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', desc: 'NoSQL database design, aggregation pipelines, and Mongoose ODM.' },
    ],
  },
  {
    label: '3D & Motion',
    accent: '#8B5CF6',
    skills: [
      { name: 'Three.js', icon: SiThreedotjs, color: '#111', desc: 'WebGL-powered 3D scenes, geometries, materials, and lighting.' },
      { name: 'GSAP', icon: SiGreensock, color: '#88CE02', desc: 'Professional-grade timeline animations and scroll-triggered effects.' },
      { name: 'Framer Motion', icon: TbBrandFramerMotion, color: '#FF0055', desc: 'React animation library for smooth UI transitions.' },
    ],
  },
  {
    label: 'Tools',
    accent: '#F59E0B',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032', desc: 'Version control, branching strategies, and collaborative workflows.' },
      { name: 'GitHub', icon: SiGithub, color: '#181717', desc: 'Open source contributions, PRs, and project management.' },
      { name: 'Responsive', icon: MdDevices, color: '#6366F1', desc: 'Mobile-first layouts that work across all screen sizes.' },
      { name: 'SEO', icon: MdSearch, color: '#10B981', desc: 'Meta tags, structured data, performance optimization.' },
    ],
  },
];

function SkillBadge({ skill }) {
  const [hovered, setHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <div className="relative">
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.06, y: -2 }}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-[#FFD700] hover:shadow-md transition-all cursor-default"
      >
        <Icon style={{ color: skill.color }} className="text-lg flex-shrink-0" />
        <span className="text-sm text-gray-800 font-semibold">{skill.name}</span>
      </motion.div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.94 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-0 mb-2 w-56 p-3.5 bg-gray-900 rounded-2xl z-50 shadow-2xl pointer-events-none"
          >
            <p className="text-xs text-gray-300 leading-relaxed">{skill.desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" ref={ref} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-[#FFD700]" />
            <span className="text-[#8a6d00] font-mono text-xs uppercase tracking-widest font-semibold">Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900">Skills & Technologies</h2>
          <p className="text-gray-400 mt-3 text-base">Hover any skill for details</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Sphere — takes 2 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 h-[420px] w-full rounded-3xl bg-gray-50 border border-gray-100 shadow-sm overflow-hidden relative"
          >
            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="w-16 h-16 rounded-full bg-[#FFD700]/15 border-2 border-[#FFD700]/30 flex items-center justify-center">
                <span className="text-[#8a6d00] font-black text-xs font-mono">TECH</span>
              </div>
            </div>
            <SkillSphereCanvas />
          </motion.div>

          {/* Categories — takes 3 cols */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: ci * 0.1 + 0.2 }}
                className="p-5 bg-gray-50 rounded-2xl border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: cat.accent }} />
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{cat.label}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => <SkillBadge key={skill.name} skill={skill} />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
