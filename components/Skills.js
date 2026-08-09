'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SKILLS_DATA = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind', 'JavaScript', 'HTML·CSS']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB']
  },
  {
    category: '3D & Motion',
    skills: ['Three.js', 'GSAP', 'Framer Motion']
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Responsive Design', 'SEO']
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
          className="max-w-3xl"
        >
          <div className="mb-16">
            <h2 className="font-serif italic text-4xl lg:text-5xl text-ink mb-4">
              Skills & Technologies
            </h2>
            <p className="text-gray-400 text-sm">
              Tools I use to build things.
            </p>
          </div>

          <div className="flex flex-col">
            {SKILLS_DATA.map((group, index) => (
              <div key={group.category}>
                <div className="mb-3">
                  <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    {group.category}
                  </h3>
                </div>
                <p className="text-ink text-lg font-medium">
                  {group.skills.join(' / ')}
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
