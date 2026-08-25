'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Counter component for stats
const Counter = ({ from = 0, to, duration = 2 }) => {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    
    let start = from;
    const end = to;
    if (start === end) return;
    
    let startTime = null;
    let raf;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing out cubic
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      const current = Math.floor(start + (end - start) * easeOut);
      
      if (nodeRef.current) {
        nodeRef.current.textContent = current;
      }
      
      if (percentage < 1) {
        raf = requestAnimationFrame(animate);
      } else if (nodeRef.current) {
        nodeRef.current.textContent = end;
      }
    };
    
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{from}</span>;
};

export default function Highlights() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const services = [
    { title: "Frontend Development", desc: "Pixel-perfect, responsive UIs built with React & Next.js." },
    { title: "Full-Stack Apps", desc: "End-to-end applications from database schema to deployed product." },
    { title: "3D & Interactive", desc: "Immersive Three.js experiences and scroll-driven animations." },
    { title: "Performance & SEO", desc: "Lighthouse-optimised builds and Core Web Vitals." },
    { title: "UI/UX Design", desc: "Clean, modern interfaces grounded in user behaviour." }
  ];

  const process = [
    { num: "01", title: "Discover", desc: "Understanding the problem, goals, and technical requirements." },
    { num: "02", title: "Design", desc: "Prototyping clean, modern interfaces with user experience in mind." },
    { num: "03", title: "Build", desc: "Developing scalable and performant solutions using modern web tech." },
    { num: "04", title: "Optimise", desc: "Refining code, improving accessibility, and maximising performance." },
    { num: "05", title: "Deploy", desc: "Shipping reliable products with automated CI/CD pipelines." }
  ];

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
    <section ref={sectionRef} className="py-24 bg-surface" id="highlights">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif italic text-4xl lg:text-5xl text-ink mb-4">Highlights</h2>
            <p className="text-gray-400 text-sm">A deep dive into my work, process, and achievements.</p>
          </motion.div>
        </div>

        {/* 1. Services */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="font-serif italic text-3xl text-ink mb-10">What I Build</h3>
          <div className="flex flex-col">
            {services.map((service, idx) => (
              <div key={idx} className={`flex items-start gap-8 py-6 ${idx !== services.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <div className="text-5xl font-serif text-gray-200 leading-none">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="pt-1">
                  <h4 className="text-lg font-medium text-ink">{service.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="h-px bg-gray-200 my-16" />

        {/* 2. Process */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-serif italic text-3xl text-ink mb-10">How I Work</h3>
          <div className="flex flex-col">
            {process.map((step, idx) => (
              <div key={idx} className="flex relative pb-10 last:pb-0">
                {idx !== process.length - 1 && (
                  <div className="absolute left-[9px] top-6 bottom-0 w-px bg-gray-200" />
                )}
                <div className="mr-6 z-10 bg-surface">
                  <span className="font-mono text-sm text-gray-300 leading-6">{step.num}</span>
                </div>
                <div>
                  <h4 className="font-medium text-ink leading-6">{step.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="h-px bg-gray-200 my-16" />

        {/* 3. Achievements */}
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
                    <Counter to={stat.value} duration={2} />{stat.suffix}
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
                  "{testimonials[activeTestimonial].quote}"
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

        <div className="h-px bg-gray-200 my-16" />

        {/* 5. Case Study */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="font-serif italic text-3xl text-ink mb-10">Deep Dive</h3>
          
          <div className="mb-8">
            <div className="flex items-baseline justify-between mb-2">
              <h4 className="text-2xl font-medium text-ink">Apply Bureau</h4>
              <a href="https://apply-bureau.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-ink hover:text-accent transition-colors">
                View Live <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-gray-400">Full-Stack Job Platform</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="md:border-r md:border-gray-200 md:pr-8">
              <h5 className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-3">Problem</h5>
              <p className="text-sm text-gray-600 leading-relaxed">Job seekers needed a centralised way to track applications, manage interview schedules, and analyse their success rates across different platforms without using complex spreadsheets.</p>
            </div>
            <div className="md:border-r md:border-gray-200 md:pr-8">
              <h5 className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-3">Solution</h5>
              <p className="text-sm text-gray-600 leading-relaxed">Developed a comprehensive dashboard with real-time updates, drag-and-drop Kanban boards, and automated email parsing to instantly log new job applications.</p>
            </div>
            <div>
              <h5 className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-3">Result</h5>
              <p className="text-sm text-gray-600 leading-relaxed">Grew to 500+ active users in the first month. Reduced time spent tracking applications by 75% on average, leading to a higher volume of targeted applications per user.</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="text-sm text-gray-600">
              Next.js · Node.js · MongoDB · Tailwind · JWT Auth · Vercel
            </div>
            <div className="text-sm text-gray-500">
              Ship time: &lt;3 weeks · Lighthouse: 94+ · Mobile-first: 100%
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
