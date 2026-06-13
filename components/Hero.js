import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { HiArrowDown } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';

/* ──────────────────────────────────────────────
   Matrix rain — pure 2D canvas, no WebGL
────────────────────────────────────────────── */
function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const setSize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();

    const fontSize = 14;
    const chars =
      'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン' +
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>{}[]';

    let cols  = Math.floor(canvas.width / fontSize);
    let drops = Array.from({ length: cols }, () => Math.random() * -100);

    let animId;

    const draw = () => {
      // semi-transparent fill → trailing fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const y    = drops[i] * fontSize;

        // leading char flashes bright gold-white
        if (y > 0 && y < canvas.height && Math.random() > 0.92) {
          ctx.fillStyle = '#fff8dc'; // warm white-cream
        } else {
          // vary between deep amber and bright gold
          const g = 140 + Math.floor(Math.random() * 75);
          ctx.fillStyle = `rgba(255, ${g}, 0, ${0.35 + Math.random() * 0.55})`;
        }

        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(char, i * fontSize, y);

        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.5;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      setSize();
      cols  = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: cols }, () => Math.random() * -100);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
}

/* ──────────────────────────────────────────────
   Hero
────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#000000' }}
    >
      {/* Matrix rain — 2D canvas, zero WebGL */}
      <MatrixRain />

      {/* Dark radial vignette — keeps text legible */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            'radial-gradient(ellipse 72% 68% at 50% 50%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.88) 100%)',
        }}
      />

      {/* Soft gold glow behind content */}
      <div
        className="absolute z-10 pointer-events-none"
        style={{
          width: 560,
          height: 560,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,200,0,0.07) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'pulseGlow 4.5s ease-in-out infinite',
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-3xl w-full gap-7 pt-24 pb-16">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border w-fit"
          style={{
            borderColor: 'rgba(255,215,0,0.35)',
            background: 'rgba(255,215,0,0.07)',
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: '#FFD700',
              boxShadow: '0 0 7px #FFD700',
              animation: 'pulseDot 1.8s ease-in-out infinite',
            }}
          />
          <span className="text-sm font-semibold" style={{ color: '#FFE566' }}>
            Available for work
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.05] text-white"
        >
          Hi, I&apos;m{' '}
          <span
            style={{
              color: '#FFD700',
              textShadow: '0 0 28px rgba(255,215,0,0.55), 0 0 8px rgba(255,215,0,0.3)',
            }}
          >
            Loko Israel
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.44 }}
          className="text-base sm:text-lg leading-relaxed max-w-xl"
          style={{ color: 'rgba(255,240,180,0.65)' }}
        >
          Full-Stack Developer — building interactive, futuristic web experiences with{' '}
          <span style={{ color: '#FFD700', fontWeight: 700 }}>React</span>,{' '}
          <span style={{ color: '#FFD700', fontWeight: 700 }}>Next.js</span> &amp;{' '}
          <span style={{ color: '#FFD700', fontWeight: 700 }}>Three.js</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.56 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl text-sm transition-all"
            style={{
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              color: '#000000',
              boxShadow: '0 0 22px rgba(255,215,0,0.45)',
            }}
          >
            View My Work <BsArrowRight />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl text-sm border transition-all"
            style={{
              background: 'rgba(255,215,0,0.07)',
              borderColor: 'rgba(255,215,0,0.4)',
              color: '#FFD700',
              boxShadow: '0 0 14px rgba(255,215,0,0.15)',
            }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.72 }}
          className="flex gap-12 justify-center pt-2"
        >
          {[['40+', 'Projects'], ['2+', 'Years Exp'], ['10+', 'Technologies']].map(([val, label]) => (
            <div key={label} className="text-center">
              <div
                className="text-2xl font-black"
                style={{ color: '#FFD700', textShadow: '0 0 14px rgba(255,215,0,0.5)' }}
              >
                {val}
              </div>
              <div className="text-xs font-medium mt-0.5" style={{ color: 'rgba(255,230,130,0.5)' }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20"
      >
        <span
          className="text-xs font-mono tracking-widest uppercase"
          style={{ color: 'rgba(255,215,0,0.4)' }}
        >
          scroll
        </span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <HiArrowDown style={{ color: 'rgba(255,215,0,0.45)', fontSize: 14 }} />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50%       { opacity: 1;   transform: translate(-50%, -50%) scale(1.15); }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }
      `}</style>
    </section>
  );
}
