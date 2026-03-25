import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCode, HiLightBulb, HiUsers } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';

const highlights = [
  { icon: HiCode, title: '40+ Projects', desc: 'Built across frontend, backend, and 3D web' },
  { icon: HiLightBulb, title: 'Problem Solver', desc: 'Turning complex ideas into clean solutions' },
  { icon: HiUsers, title: 'Instructor', desc: 'Teaching React & Next.js at Digital Fortress' },
];

// Floating badge component
function FloatingBadge({ children, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// The illustration — a stylized dev workspace card
function DevIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Background glow */}
      <div className="absolute w-72 h-72 bg-[#FFD700]/10 rounded-full blur-3xl" />

      {/* Main card — code editor */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-80 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
      >
        {/* Editor top bar */}
        <div className="flex items-center gap-2 px-5 py-4 bg-gray-900 border-b border-gray-800">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span className="ml-3 text-gray-500 text-xs font-mono">index.js</span>
        </div>

        {/* Code lines */}
        <div className="px-5 py-5 bg-gray-950 font-mono text-xs leading-7 space-y-0.5">
          <div><span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> <span className="text-gray-400">=</span> <span className="text-yellow-300">{'{'}</span></div>
          <div className="pl-4"><span className="text-green-300">name</span><span className="text-gray-400">:</span> <span className="text-orange-300">'Loko Israel'</span><span className="text-gray-500">,</span></div>
          <div className="pl-4"><span className="text-green-300">role</span><span className="text-gray-400">:</span> <span className="text-orange-300">'Full-Stack Dev'</span><span className="text-gray-500">,</span></div>
          <div className="pl-4"><span className="text-green-300">stack</span><span className="text-gray-400">:</span> <span className="text-blue-300">['React'</span><span className="text-gray-500">,</span> <span className="text-blue-300">'Next'</span><span className="text-gray-500">,</span> <span className="text-blue-300">'Node']</span><span className="text-gray-500">,</span></div>
          <div className="pl-4"><span className="text-green-300">passion</span><span className="text-gray-400">:</span> <span className="text-orange-300">'Building things'</span></div>
          <div><span className="text-yellow-300">{'}'}</span></div>
          <div className="mt-1">
            <span className="text-gray-600">// </span>
            <span className="text-gray-500">always learning...</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="inline-block w-1.5 h-4 bg-[#FFD700] ml-1 align-middle"
            />
          </div>
        </div>

        {/* Bottom status bar */}
        <div className="flex items-center justify-between px-5 py-2.5 bg-[#FFD700] text-gray-900">
          <span className="text-xs font-bold">● Ready to build</span>
          <span className="text-xs font-mono font-semibold">TypeScript</span>
        </div>
      </motion.div>

      {/* Floating badge — React */}
      <FloatingBadge
        delay={0.5}
        className="absolute top-4 -right-2 flex items-center gap-2 bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-2.5"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
          className="w-6 h-6 text-[#61DAFB]"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z"/>
          </svg>
        </motion.div>
        <span className="text-xs font-bold text-gray-700">React</span>
      </FloatingBadge>

      {/* Floating badge — commits */}
      <FloatingBadge
        delay={0.7}
        className="absolute bottom-8 -left-4 flex items-center gap-2 bg-gray-900 rounded-2xl shadow-lg px-4 py-2.5"
      >
        <span className="text-[#FFD700] text-sm">⚡</span>
        <div>
          <div className="text-white text-xs font-bold">40+ Projects</div>
          <div className="text-gray-400 text-[10px]">shipped & counting</div>
        </div>
      </FloatingBadge>

      {/* Floating badge — stack */}
      <FloatingBadge
        delay={0.9}
        className="absolute top-1/2 -left-6 -translate-y-1/2 bg-white rounded-2xl shadow-lg border border-gray-100 px-3 py-2"
      >
        <div className="text-[10px] text-gray-400 font-mono mb-1">stack</div>
        <div className="flex gap-1.5">
          {['N', 'R', 'T'].map((l, i) => (
            <span key={i} className="w-6 h-6 rounded-lg bg-gray-900 text-[#FFD700] text-[10px] font-black flex items-center justify-center">
              {l}
            </span>
          ))}
        </div>
      </FloatingBadge>
    </div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="w-8 h-0.5 bg-[#FFD700]" />
          <span className="text-[#8a6d00] font-mono text-xs uppercase tracking-widest font-semibold">About Me</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[420px] lg:h-[480px]"
          >
            <DevIllustration />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-7"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              Crafting digital<br />
              <span className="text-[#FFD700]">experiences</span> that matter
            </h2>

            <p className="text-gray-500 leading-relaxed text-lg">
              I'm Loko Israel, a passionate full-stack developer with a love for creating immersive
              digital experiences. My journey in tech started with curiosity and has evolved into
              building over 40 projects, mastering React, Next.js, Tailwind, Node.js, Three.js, and more.
            </p>

            <p className="text-gray-500 leading-relaxed">
              Beyond coding, I focus on understanding the user experience — creating projects that are
              intuitive, engaging, and futuristic. I strive to solve real problems and deliver digital
              experiences that are not only functional but also memorable and innovative.
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              {highlights.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#FFD700]/50 hover:shadow-md transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#FFD700]/15 flex items-center justify-center mb-3">
                    <Icon className="text-[#8a6d00] text-lg" />
                  </div>
                  <div className="font-bold text-gray-900 text-sm">{title}</div>
                  <div className="text-gray-400 text-xs mt-1 leading-relaxed">{desc}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-[#8a6d00] transition-colors w-fit"
            >
              See my journey <BsArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
