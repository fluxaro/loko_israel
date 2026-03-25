import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { HiArrowDown } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';

const RobotCanvas = dynamic(() => import('./RobotCanvas'), { ssr: false });

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        {/* Radial fade at edges */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(255,255,255,0.9) 100%)'
        }} />
      </div>

      {/* Yellow accent blob */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FFD700]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-20 pb-12">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700]/15 border border-[#FFD700]/30 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
            <span className="text-[#8a6d00] text-sm font-semibold">Available for work</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] text-gray-900"
          >
            Hi, I'm{' '}
            <span className="relative inline-block">
              <span className="text-[#FFD700]">Loko</span>
              <span className="text-gray-900"> Israel</span>
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
            className="text-lg lg:text-xl text-gray-500 font-medium leading-relaxed max-w-lg"
          >
            Full-Stack Developer — building interactive, futuristic web experiences with React, Next.js & Three.js.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex gap-3 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-900 text-white font-bold rounded-xl text-sm hover:bg-gray-800 transition-colors"
            >
              View My Work <BsArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FFD700] text-gray-900 font-bold rounded-xl text-sm hover:bg-yellow-300 transition-colors"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-8 pt-2"
          >
            {[['40+', 'Projects'], ['2+', 'Years Exp'], ['10+', 'Technologies']].map(([val, label]) => (
              <div key={label}>
                <div className="text-2xl font-black text-gray-900">{val}</div>
                <div className="text-xs text-gray-400 font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Robot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="h-[520px] lg:h-[680px] w-full"
        >
          <RobotCanvas />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-gray-300 text-xs font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <HiArrowDown className="text-gray-300 text-sm" />
        </motion.div>
      </motion.div>
    </section>
  );
}
