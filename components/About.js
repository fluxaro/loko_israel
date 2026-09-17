import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const CERTIFICATIONS = [
  {
    title: 'Full Stack Web Development',
    period: '2024–Present',
    description: 'Hands-on architecture with React.js, Django, Python, TypeScript & REST APIs'
  },
  {
    title: 'Frontend Development Specialization',
    period: '2024',
    description: 'Responsive component systems, Framer Motion micro-interactions & Web Vitals'
  },
  {
    title: 'AI Integration & Modern Systems',
    period: '2025',
    description: 'Production AI workflows, conversational agents & intelligent automation'
  }
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="py-24 sm:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-200" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative z-10">
            {/* Bio Section */}
            <div className="max-w-3xl mb-12 sm:mb-14">
              <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2 font-medium">
                Introduction
              </span>
              <h2 className="font-serif italic text-4xl lg:text-5xl text-ink mb-6">
                About Me
              </h2>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
                Full-Stack Developer with 2+ years of experience engineering production-grade web applications, AI platforms, and scalable backend systems using React, Next.js, TypeScript, and Python/Django. Specialized in architecting secure, responsive software from database schema to automated CI/CD deployment with strict sub-second latency targets. Passionate about solving real-world friction through clean code and user-centered design.
              </p>
            </div>

            {/* Certifications & Professional Development (Single line per cert) */}
            <div className="pt-10 border-t border-gray-100 max-w-4xl">
              <div className="mb-6">
                <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-1">Continuous Learning</span>
                <h3 className="font-serif italic text-2xl sm:text-3xl text-ink">
                  Professional Development &amp; Certifications
                </h3>
              </div>

              <div className="space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.title} className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-gray-100 text-sm gap-1">
                    <div className="text-gray-700">
                      <strong className="text-ink font-medium">{cert.title}</strong>
                      <span className="text-gray-400 mx-2 hidden sm:inline">·</span>
                      <span className="text-gray-500 text-xs sm:text-sm">{cert.description}</span>
                    </div>
                    <span className="font-mono text-xs text-gray-400 shrink-0">
                      [{cert.period}]
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <button
                onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 text-ink hover:text-accent transition-colors font-medium text-sm"
              >
                View Academic Background <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
