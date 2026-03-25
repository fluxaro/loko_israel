import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiLightBulb } from 'react-icons/hi';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

const shortText = `Technology is not just code — it's a way to create, connect, and transform. I chose tech because it allows me to bring ideas to life, solve real problems, and build experiences that impact people.`;
const fullText = `Technology is not just code — it's a way to create, connect, and transform. I chose tech because it allows me to bring ideas to life, solve real problems, and build experiences that impact people. If I were to start again, I would focus more on the blend of design and functionality, mastering tools that make interactivity intuitive and engaging. I believe learning is infinite, and technology provides a canvas for continuous growth. Every project I build is a step toward creating something that resonates, inspires, and solves real-world challenges.`;

export default function WhyTech() {
  const [expanded, setExpanded] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="why-tech" ref={ref} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />

      {/* Background accent */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-[#FFD700]" />
            <span className="text-[#8a6d00] font-mono text-xs uppercase tracking-widest font-semibold">Philosophy</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900">Why Tech?</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          {/* Quote icon */}
          <div className="w-12 h-12 rounded-2xl bg-[#FFD700]/15 border border-[#FFD700]/25 flex items-center justify-center mb-6">
            <HiLightBulb className="text-[#8a6d00] text-2xl" />
          </div>

          <div className="p-8 lg:p-10 rounded-3xl border border-gray-100 bg-gray-50 shadow-sm">
            {/* Large decorative quote */}
            <span className="block text-7xl text-[#FFD700]/40 font-serif leading-none mb-2 -mt-2">"</span>

            <AnimatePresence mode="wait">
              <motion.p
                key={expanded ? 'full' : 'short'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="text-lg lg:text-xl text-gray-600 leading-relaxed"
              >
                {expanded ? fullText : shortText}
              </motion.p>
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setExpanded(!expanded)}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl text-sm hover:bg-gray-800 transition-colors"
            >
              {expanded ? (
                <><BsArrowUp /> Show Less</>
              ) : (
                <><BsArrowDown /> Read Full Story</>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
