import { motion } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="py-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-gray-900 font-mono font-bold text-sm">
          &lt;<span className="text-[#8a6d00]">Loko Israel</span> /&gt;
        </span>
        <p className="text-gray-400 text-sm text-center">
          © {new Date().getFullYear()} Loko Israel. Built with Next.js, Three.js &amp; ♥
        </p>
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 rounded-full border border-[#FFD700] bg-[#FFD700]/10 flex items-center justify-center text-[#8a6d00] hover:bg-[#FFD700]/20 transition-all"
          aria-label="Back to top"
        >
          <HiArrowUp className="text-lg" />
        </motion.button>
      </div>
    </footer>
  );
}
