import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-200" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Decorative 01 */}
          <div className="absolute -top-16 -left-8 text-[12rem] font-serif text-gray-100 leading-none select-none z-0">
            01
          </div>

          <div className="relative z-10 max-w-xl">
            <h2 className="font-serif italic text-4xl lg:text-5xl text-ink mb-8">
              Crafting digital experiences that matter
            </h2>

            <p className="text-gray-500 leading-relaxed mb-6">
              I'm Loko Israel, a passionate full-stack developer with a love for creating immersive
              digital experiences. My journey in tech started with curiosity and has evolved into
              building over 40 projects, mastering React, Next.js, Tailwind, Node.js, Three.js, and more.
            </p>

            <p className="text-gray-500 leading-relaxed mb-10">
              Beyond coding, I focus on understanding the user experience — creating projects that are
              intuitive, engaging, and futuristic. I strive to solve real problems and deliver digital
              experiences that are not only functional but also memorable and innovative.
            </p>

            <button
              onClick={() => document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-ink hover:text-accent transition-colors font-medium text-sm"
            >
              See what I do <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
