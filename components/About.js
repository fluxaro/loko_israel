import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const CERTIFICATIONS = [
  {
    title: 'Full Stack Web Development (Self-Learning)',
    period: '2024–Present',
    description: 'Gained hands-on experience building full-stack web applications using React.js, Django, Python, TypeScript, Tailwind CSS, REST APIs, Git, and modern deployment workflows.'
  },
  {
    title: 'Frontend Development Specialization',
    period: '2024',
    description: 'Developed advanced frontend applications using React.js, JavaScript, Tailwind CSS, Framer Motion, and reusable component architecture while focusing on responsive design and performance optimization.'
  },
  {
    title: 'AI Integration and Modern Software Engineering',
    period: '2025',
    description: 'Built AI-powered web applications and developer tools by integrating modern AI technologies into production-ready software, focusing on automation, intelligent workflows, and scalable architecture.'
  }
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

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

          <div className="relative z-10">
            {/* Bio Section */}
            <div className="max-w-3xl mb-16">
              <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2">Introduction</span>
              <h2 className="font-serif italic text-4xl lg:text-5xl text-ink mb-8">
                About Me
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                A Full Stack Developer with over 2 years of experience building scalable web applications, 
                AI-powered platforms, and developer tools. Experienced in designing, developing, deploying, and maintaining 
                production-ready software using React.js, TypeScript, Django, Python, and modern web technologies.
              </p>

              <p className="text-gray-500 leading-relaxed mb-6">
                Skilled in building secure, responsive, and user-focused applications while transforming complex business 
                requirements into reliable software solutions. Passionate about solving real-world problems through technology, 
                leading development projects, and delivering high-quality digital products across multiple industries.
              </p>
            </div>

            {/* Certifications & Professional Development */}
            <div className="pt-12 border-t border-gray-100 max-w-4xl">
              <div className="mb-8">
                <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2">Continuous Learning</span>
                <h3 className="font-serif italic text-3xl text-ink">
                  Professional Development &amp; Certifications
                </h3>
              </div>

              <div className="space-y-8">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.title} className="border-l-2 border-accent/60 pl-6 relative">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h4 className="font-medium text-lg text-ink">{cert.title}</h4>
                      <span className="font-mono text-xs text-gray-400 border border-gray-200 px-2.5 py-0.5 self-start sm:self-auto">
                        [{cert.period}]
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      • {cert.description}
                    </p>
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
