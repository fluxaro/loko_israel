import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';

const socials = [
  { label: 'X (Twitter)', url: 'https://twitter.com/loko_israel' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/loko-israel' },
  { label: 'GitHub', url: 'https://github.com/loko-israel' },
  { label: 'Email', url: 'mailto:israelloko65@gmail.com' },
  { label: 'WhatsApp', url: 'https://wa.me/2347074165672' },
];

export default function SocialLinks() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="social-links" ref={ref} className="py-24 bg-surface relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-200" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <h2 className="font-serif italic text-4xl text-ink">Connect</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap items-center gap-x-6 gap-y-4"
        >
          {socials.map((social, i) => (
            <div key={social.label} className="flex items-center gap-6">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-ink transition-colors"
              >
                {social.label}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              {i < socials.length - 1 && (
                <span className="text-gray-300 select-none">·</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
