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
          <div className="mb-12">
            <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2">Academic Background</span>
            <h2 className="font-serif italic text-4xl lg:text-5xl text-ink">Education</h2>
          </div>

          {/* Main Card */}
          <div className="border border-gray-200 bg-white p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              {/* Left Details */}
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-gray-200 text-xs font-mono text-gray-500 mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                  Currently Enrolled — Year 2
                </div>

                <h3 className="font-serif text-3xl text-ink mb-2">
                  University of the People
                </h3>

                <p className="text-lg font-medium text-accent mb-4">
                  Bachelor of Science in Computer Science
                </p>

                <p className="text-gray-500 leading-relaxed mb-6">
                  Currently in my second year pursuing a B.S. in Computer Science. Building a strong theoretical foundation 
                  in computer science concepts, algorithmic thinking, software engineering, and database systems while concurrently applying these principles to real-world full-stack development projects.
                </p>

                {/* Focus Areas */}
                <div className="pt-6 border-t border-gray-100 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">
                  <span className="font-mono text-xs text-gray-400 uppercase tracking-wider w-full mb-1">Key Focus Areas</span>
                  <span>Data Structures &amp; Algorithms</span>
                  <span>·</span>
                  <span>Software Engineering</span>
                  <span>·</span>
                  <span>Database Systems</span>
                  <span>·</span>
                  <span>Web Programming</span>
                </div>
              </div>

              {/* Right Meta Column */}
              <div className="lg:w-72 shrink-0 border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0 lg:pl-8 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">
                    <GraduationCap className="w-4 h-4 text-accent" /> Degree Program
                  </div>
                  <div className="text-sm font-medium text-ink">B.S. Computer Science</div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">
                    <Calendar className="w-4 h-4 text-accent" /> Current Status
                  </div>
                  <div className="text-sm font-medium text-ink">2nd Year Undergrad</div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">
                    <BookOpen className="w-4 h-4 text-accent" /> Institution
                  </div>
                  <div className="text-sm font-medium text-ink">University of the People</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
