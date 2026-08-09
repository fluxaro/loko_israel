'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SKILLS_DATA = [
  {
    category: 'Core Technologies & Frameworks',
    skills: ['React.js', 'TypeScript', 'JavaScript', 'Python', 'Django', 'Django REST Framework', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion']
  },
  {
    category: 'Backend, Database & Tools',
    skills: ['REST APIs', 'PostgreSQL', 'Git', 'GitHub', 'Vercel', 'VS Code']
  },
  {
    category: 'Architecture & Engineering',
    skills: ['System Architecture', 'AI Integration', 'Responsive Web Development', 'Performance Optimization', 'Debugging']
  },
  {
    category: 'Professional & Leadership',
    skills: ['Leadership', 'Problem Solving', 'Team Collaboration', 'Technical Mentoring', 'Written Communication', 'Verbal Communication', 'Agile Development', 'Client Collaboration']
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="w-full bg-white relative py-20 lg:py-32">
      <div className="absolute top-0 left-0 w-full h-px bg-gray-200" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-16">
            <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2">Capabilities</span>
            <h2 className="font-serif italic text-4xl lg:text-5xl text-ink mb-4">
              Required Skills
            </h2>
            <p className="text-gray-400 text-sm">
              Technical, architectural, and professional competencies.
            </p>
          </div>

          <div className="flex flex-col">
            {SKILLS_DATA.map((group, index) => (
              <div key={group.category}>
                <div className="mb-3">
                  <h3 className="text-xs font-mono font-medium text-gray-400 uppercase tracking-wider">
                    {group.category}
                  </h3>
                </div>
                <p className="text-ink text-base lg:text-lg font-medium leading-relaxed">
                  {group.skills.join('  |  ')}
                </p>
                {index !== SKILLS_DATA.length - 1 && (
                  <div className="h-px bg-gray-100 my-8" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
