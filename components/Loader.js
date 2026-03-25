import { motion } from 'framer-motion';
import { HiCode } from 'react-icons/hi';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-6"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
        className="w-14 h-14 rounded-2xl bg-[#FFD700]/15 border-2 border-[#FFD700]/40 flex items-center justify-center"
      >
        <HiCode className="text-[#8a6d00] text-2xl" />
      </motion.div>

      <div className="flex flex-col items-center gap-3">
        <span className="text-[#8a6d00] font-mono text-xs tracking-widest uppercase font-semibold">
          Loading portfolio...
        </span>
        <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
            className="h-full bg-[#FFD700] rounded-full"
          />
        </div>
      </div>

      <span className="text-gray-300 font-mono text-xs">
        &lt;<span className="text-[#8a6d00]">Loko Israel</span> /&gt;
      </span>
    </motion.div>
  );
}
