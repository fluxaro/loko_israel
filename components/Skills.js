'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TECH_GROUPS = [
  {
    title: 'Frontend Ecosystem',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js']
  },
  {
    title: 'Backend & APIs',
    skills: ['Python', 'Django', 'Django REST Framework', 'Node.js', 'REST APIs', 'PostgreSQL', 'Supabase']
  },
  {
    title: 'DevOps & Architecture',
    skills: ['Git / GitHub Workflows', 'CI/CD Pipelines', 'Vercel', 'Docker', 'Redis', 'AES-256 Security']
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="w-full bg-white relative py-16 sm:py-20">
      <div className="absolute top-0 left-0 w-full h-px bg-gray-200" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2 font-medium">Stack &amp; Tooling</span>
            <h2 className="font-serif italic text-3xl sm:text-4xl text-ink">
              Core Technologies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TECH_GROUPS.map((group) => (
              <div key={group.title} className="p-6 bg-surface border border-gray-200 rounded-xl">
                <h3 className="text-xs font-mono font-medium text-gray-500 uppercase tracking-wider mb-4 pb-2 border-b border-gray-200">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white border border-gray-200 text-xs font-mono text-zinc-800 rounded-md shadow-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
