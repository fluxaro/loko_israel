'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// Counter component for stats (guaranteed never stuck at 0+)
const Counter = ({ from = 0, to, duration = 1.8 }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "50px 0px" });

  useEffect(() => {
    if (typeof to !== 'number') return;
    
    // Safety fallback: ensure counter ALWAYS reaches target value
    const fallbackTimer = setTimeout(() => {
      setCount(to);
    }, 1200);

    if (!inView) {
      return () => clearTimeout(fallbackTimer);
    }
    
    let start = from;
    const end = to;
    if (start === end) {
      setCount(end);
      return () => clearTimeout(fallbackTimer);
    }
    
    let startTime = null;
    let raf;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * easeOut);
      
      setCount(current);
      
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    raf = requestAnimationFrame(animate);
    return () => {
      clearTimeout(fallbackTimer);
      cancelAnimationFrame(raf);
    };
  }, [from, to, duration, inView]);

  return <span ref={nodeRef} className="inline-block min-w-[1ch]">{count}</span>;
};

export default function Highlights() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const stats = [
    { value: 40, label: "Projects Shipped", suffix: "+" },
    { value: 2, label: "Years Building", suffix: "+" },
    { value: 10, label: "Technologies", suffix: "+" },
    { value: 15, label: "Students Mentored", suffix: "+" }
  ];

  const testimonials = [
    {
      quote: "Working with Israel has been an absolute pleasure. His ability to translate complex requirements into elegant, high-performing web applications is truly exceptional. He doesn't just write code; he crafts digital experiences that users love.",
      name: "Chinedu Okafor",
      role: "Lead Product Manager"
    },
    {
      quote: "Israel is a rare talent who seamlessly bridges the gap between design and development. The 3D interactive experiences he built for our campaign increased user engagement by over 200%. Highly recommended for any ambitious project.",
      name: "Amara Eze",
      role: "Creative Director"
    },
    {
      quote: "When we needed to overhaul our entire frontend architecture, Israel was the clear choice. His deep understanding of React and performance optimisation resulted in a 3x faster load time and a significantly improved conversion rate.",
      name: "Tunde Adeyemi",
      role: "CTO, TechGrowth"
    },
    {
      quote: "Not only is Israel an outstanding developer, but he's also an excellent mentor. His guidance helped me navigate the complexities of modern full-stack development, significantly accelerating my learning curve.",
      name: "Ngozi Nwosu",
      role: "Junior Developer"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section ref={sectionRef} className="py-24 sm:py-28 bg-surface relative" id="highlights">
      <div className="absolute top-0 inset-x-0 h-px bg-gray-200" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2 font-medium">
              Milestones &amp; Track Record
            </span>
            <h2 className="font-serif italic text-4xl lg:text-5xl text-ink mb-3">Highlights</h2>
            <p className="text-gray-500 text-sm sm:text-base">Track record, engineering process, and peer recommendations.</p>
          </motion.div>
        </div>

        {/* 2. Process (Shrunk to 1 line) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
            <h3 className="font-serif italic text-3xl text-ink">How I Work</h3>
            <span className="font-mono text-xs text-accent font-medium">Discover → Design → Build → Optimise → Deploy</span>
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
            A disciplined development cycle: understanding the core problem, prototyping intuitive responsive interfaces, writing scalable type-safe code, benchmarking Core Web Vitals, and shipping with automated CI/CD pipelines.
          </p>
        </motion.div>

        <div className="h-px bg-gray-200 my-16" />

        {/* 3. Achievements (By the Numbers) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-serif italic text-3xl text-ink mb-10">By the Numbers</h3>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-0 mb-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center flex-1">
                <div className="flex flex-col flex-1">
                  <div className="text-4xl font-serif text-ink">
                    <Counter to={stat.value} duration={1.8} />{stat.suffix}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
                {idx < stats.length - 1 && (
                  <div className="hidden md:block w-px h-12 bg-gray-200 mx-8"></div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-sm text-gray-400">
            React.js · TypeScript · Python · Django · Next.js · PostgreSQL · Tailwind CSS
          </div>
        </motion.div>

        <div className="h-px bg-gray-200 my-16" />

        {/* 4. Testimonials */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-serif italic text-3xl text-ink mb-10">What People Say</h3>
          
          <div className="relative min-h-[250px] md:min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <blockquote className="font-serif italic text-2xl text-ink leading-relaxed mb-6">
                  &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-medium text-sm text-ink">{testimonials[activeTestimonial].name}</div>
                  <div className="text-sm text-gray-400">{testimonials[activeTestimonial].role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex items-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeTestimonial === idx ? 'bg-ink' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
