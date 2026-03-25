import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaXTwitter, FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { BsArrowUpRight } from 'react-icons/bs';

const socials = [
  {
    label: 'X (Twitter)',
    handle: '@loko_israel',
    url: 'https://twitter.com/loko_israel',
    icon: FaXTwitter,
    bg: 'bg-black',
    text: 'text-white',
  },
  {
    label: 'LinkedIn',
    handle: 'loko-israel',
    url: 'https://linkedin.com/in/loko-israel',
    icon: FaLinkedinIn,
    bg: 'bg-[#0A66C2]',
    text: 'text-white',
  },
  {
    label: 'GitHub',
    handle: 'loko-israel',
    url: 'https://github.com/loko-israel',
    icon: FaGithub,
    bg: 'bg-gray-900',
    text: 'text-white',
  },
  {
    label: 'Email',
    handle: 'israelloko65@gmail.com',
    url: 'mailto:israelloko65@gmail.com',
    icon: MdEmail,
    bg: 'bg-[#EA4335]',
    text: 'text-white',
  },
  {
    label: 'WhatsApp',
    handle: '+2347074165672',
    url: 'https://wa.me/2347074165672',
    icon: FaWhatsapp,
    bg: 'bg-[#25D366]',
    text: 'text-white',
  },
];

export default function SocialLinks() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="social-links" ref={ref} className="py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-[#FFD700]" />
            <span className="text-[#8a6d00] font-mono text-xs uppercase tracking-widest font-semibold">Connect</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900">Let's Connect</h2>
          <p className="text-gray-400 mt-3 max-w-xl">
            Follow me on social media to stay updated on my projects, tutorials, and coding adventures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socials.map((social, i) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 + 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#FFD700]/30 transition-all"
              >
                {/* Icon circle */}
                <div className={`w-11 h-11 rounded-xl ${social.bg} flex items-center justify-center shrink-0`}>
                  <Icon className={`${social.text} text-lg`} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{social.label}</div>
                  <div className="text-sm font-bold text-gray-800 truncate mt-0.5 group-hover:text-[#8a6d00] transition-colors">
                    {social.handle}
                  </div>
                </div>

                {/* Arrow */}
                <BsArrowUpRight className="text-gray-300 group-hover:text-[#FFD700] transition-colors shrink-0" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
