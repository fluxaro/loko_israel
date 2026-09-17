import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="education" ref={ref} className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-200" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Heading */}
          <div className="mb-8">
            <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2 font-medium">Academic Background</span>
            <h2 className="font-serif italic text-4xl lg:text-5xl text-ink">Education</h2>
          </div>

          {/* 3-Line Condensed Education Card */}
          <div className="border border-gray-200 bg-white p-6 sm:p-8 rounded-xl max-w-3xl">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-1">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4 text-accent shrink-0" />
                  <span>Degree Program</span>
                </div>
                <div className="text-base sm:text-lg font-medium text-ink">
                  Bachelor of Science in Computer Science
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-1">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-accent shrink-0" />
                  <span>Institution</span>
                </div>
                <div className="text-base sm:text-lg font-medium text-ink">
                  University of the People
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
                  <Calendar className="w-4 h-4 text-accent shrink-0" />
                  <span>Current Status</span>
                </div>
                <div className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-ink">
                  <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                  <span>Currently Enrolled — Year 2</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
