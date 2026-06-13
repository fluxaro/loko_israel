import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiLightBulb, HiCode, HiGlobe, HiHeart, HiSparkles, HiArrowRight, HiClock,
} from 'react-icons/hi';
import { BsArrowUpRight } from 'react-icons/bs';

/* ─── Blog data ─────────────────────────────────── */
const POST = {
  title: 'Why I Chose Technology',
  subtitle: 'A reflection on craft, curiosity, and the drive to build things that matter.',
  date: 'June 2026',
  readTime: '5 min read',
  cover: null, // no image — replaced by a styled banner
  sections: [
    {
      id: 'spark',
      icon: HiSparkles,
      color: '#F59E0B',
      heading: 'The Spark',
      body: [
        `It didn't start with a grand plan. It started with curiosity — the kind that makes you pull apart a toy to see what's inside. When I first saw a webpage behave in response to code I had typed, something clicked. I wasn't just consuming the internet anymore. I was making it.`,
        `That moment of control — of creating something from nothing but logic and text — was addictive. I wanted more of it.`,
      ],
    },
    {
      id: 'why',
      icon: HiHeart,
      color: '#EF4444',
      heading: 'Why Technology, Specifically',
      body: [
        `I could have gone in many directions. But technology kept offering something most fields don't: immediate, tangible feedback. You write code, you see the result. You fix a bug, the thing works. That tight loop between thought and outcome is rare — and I find it deeply satisfying.`,
        `Beyond that, technology is one of the few disciplines where a single person, with the right skills, can build something used by thousands. A doctor needs a hospital. A manufacturer needs a factory. A developer needs a laptop and an idea. That leverage is extraordinary.`,
      ],
    },
    {
      id: 'craft',
      icon: HiCode,
      color: '#3B82F6',
      heading: 'The Craft I Fell Into',
      body: [
        `I gravitated toward the frontend first — the visible layer where design meets interaction. There's a unique challenge in making something that not only works but feels right. Animations that breathe life into a page. Layouts that guide the eye intuitively. Interfaces that disappear because they're so natural to use.`,
        `As I grew, the backend pulled me in too. Understanding how data flows from a database to a screen, how APIs mediate between systems, how authentication keeps things secure — all of that deepened my respect for the whole stack. Now I think in systems, not just components.`,
        `And then Three.js opened a door I didn't know existed: the web as a 3D canvas. Building interactive 3D experiences in the browser still feels like magic to me. It's the intersection of art, physics, and engineering — and it's where I feel most creatively alive.`,
      ],
    },
    {
      id: 'impact',
      icon: HiGlobe,
      color: '#10B981',
      heading: 'What Keeps Me Here',
      body: [
        `I stay in tech because of the people. Watching a student build their first working app — the look on their face when it actually runs — is something I don't want to stop experiencing. Teaching at Digital Fortress taught me that knowledge compounds when shared. What I pass forward multiplies.`,
        `I stay because every project is a different problem. A job board, a restaurant site, a finance tracker, an AI assistant. Each one required me to learn something I didn't know the week before. That constant novelty is not a feature of the job description — it's baked into the nature of the field.`,
        `I stay because the internet is still young. The interfaces we use today will look primitive in ten years. The patterns we take for granted are being reinvented. And I want to be someone who builds the next version of things, not just consumes the current one.`,
      ],
    },
    {
      id: 'philosophy',
      icon: HiLightBulb,
      color: '#8B5CF6',
      heading: 'My Philosophy',
      body: [
        `If I had to distill it: build things that are useful, make them beautiful, and ship them. Not perfect — shipped. A live product with rough edges teaches you more than a perfect prototype that never launches.`,
        `I believe good code is respectful. Respectful of the user's time (so it loads fast), respectful of the next developer (so it's readable), and respectful of the business (so it's maintainable). Quality is not a luxury — it's the baseline.`,
        `And I believe learning is infinite. There will always be a new framework, a new paradigm, a new approach. The developers who stay relevant aren't the ones who know the most right now — they're the ones who've built the habit of learning fast and adapting constantly. That's the skill beneath all skills.`,
      ],
    },
  ],
};

/* ─── Table of Contents ─────────────────────────── */
function ToC({ sections, active, onSelect }) {
  return (
    <nav className="sticky top-28 flex flex-col gap-1">
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 px-3">Contents</p>
      {sections.map((s, i) => {
        const Icon = s.icon;
        return (
          <button
            key={s.id}
            onClick={() => onSelect(i)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm transition-all duration-200 ${
              active === i
                ? 'bg-gray-900 text-white font-bold shadow-md'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <Icon
              className="text-base shrink-0"
              style={{ color: active === i ? s.color : undefined }}
            />
            <span className="font-medium">{s.heading}</span>
          </button>
        );
      })}
    </nav>
  );
}

/* ─── Section block ─────────────────────────────── */
function BlogSection({ section, index, isActive, sectionRef }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const Icon = section.icon;

  return (
    <motion.div
      ref={(el) => { ref(el); if (sectionRef) sectionRef.current = el; }}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.05 }}
      id={`section-${section.id}`}
      className="relative"
    >
      {/* Section accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full opacity-30"
        style={{ background: section.color }}
      />

      <div className="pl-6">
        {/* Section icon + heading */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `${section.color}15` }}
          >
            <Icon className="text-lg" style={{ color: section.color }} />
          </div>
          <div>
            <p className="text-[10px] font-bold font-mono uppercase tracking-widest text-gray-400">
              0{index + 1}
            </p>
            <h3 className="text-xl font-black text-gray-900 leading-tight">{section.heading}</h3>
          </div>
        </div>

        {/* Paragraphs */}
        <div className="flex flex-col gap-4">
          {section.body.map((para, pi) => (
            <p
              key={pi}
              className={`leading-relaxed text-base ${pi === 0 ? 'text-gray-700 font-medium' : 'text-gray-500'}`}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Pull quote — first paragraph shortened */}
        <div
          className="mt-6 px-5 py-4 rounded-xl border-l-4"
          style={{
            borderColor: section.color,
            background: `${section.color}08`,
          }}
        >
          <p className="text-sm font-semibold italic text-gray-600">
            "{section.body[0].split('.')[0]}."
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Root component ────────────────────────────── */
export default function WhyTech() {
  const [activeSection, setActiveSection] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const sectionRefs = useRef(POST.sections.map(() => ({ current: null })));

  const scrollToSection = (i) => {
    setActiveSection(i);
    const id = `section-${POST.sections[i].id}`;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="why-tech" ref={ref} className="py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Background accent blobs */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-[#FFD700]" />
            <span className="text-[#8a6d00] font-mono text-xs uppercase tracking-widest font-semibold">Philosophy</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900">Why Tech?</h2>
          <p className="text-gray-400 mt-3 text-base">A blog post — in my own words.</p>
        </motion.div>

        {/* Blog card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
        >
          {/* Hero banner */}
          <div className="relative px-8 pt-10 pb-8 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0a0800 0%, #1a1200 50%, #0f0a00 100%)',
            }}
          >
            {/* Animated gold particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 4 + i * 2,
                  height: 4 + i * 2,
                  background: '#FFD700',
                  top: `${15 + i * 12}%`,
                  left: `${5 + i * 15}%`,
                  opacity: 0.15 + i * 0.05,
                }}
                animate={{ y: [0, -12, 0], opacity: [0.15, 0.45, 0.15] }}
                transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
              />
            ))}

            <div className="relative z-10 max-w-2xl">
              {/* Meta */}
              <div className="flex items-center gap-4 mb-5">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-[#FFD700]/70">
                  <HiClock className="text-sm" /> {POST.readTime}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span className="text-xs text-gray-500 font-medium">{POST.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span className="text-xs text-gray-500 font-medium">Loko Israel</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-3">
                {POST.title}
              </h1>
              <p className="text-gray-400 text-base leading-relaxed">{POST.subtitle}</p>

              {/* Topic pills */}
              <div className="flex flex-wrap gap-2 mt-6">
                {POST.sections.map((s) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.id}
                      onClick={() => scrollToSection(POST.sections.indexOf(s))}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all hover:opacity-90"
                      style={{
                        borderColor: `${s.color}40`,
                        background: `${s.color}15`,
                        color: s.color,
                      }}
                    >
                      <Icon className="text-xs" />
                      {s.heading}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Content area */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">

            {/* ToC sidebar */}
            <div className="lg:col-span-1 p-6 bg-gray-50/60">
              <ToC
                sections={POST.sections}
                active={activeSection}
                onSelect={scrollToSection}
              />

              {/* Author card */}
              <div className="mt-8 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#FFD700] flex items-center justify-center mb-3">
                  <span className="font-black text-gray-900 text-sm">LI</span>
                </div>
                <p className="text-sm font-black text-gray-900">Loko Israel</p>
                <p className="text-xs text-gray-400 mt-0.5">Full-Stack Developer &amp; Instructor</p>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#8a6d00] hover:underline"
                >
                  View my work <BsArrowUpRight />
                </a>
              </div>
            </div>

            {/* Blog body */}
            <div className="lg:col-span-3 p-8 lg:p-12">
              <div className="flex flex-col gap-12 max-w-2xl">
                {POST.sections.map((section, i) => (
                  <BlogSection
                    key={section.id}
                    section={section}
                    index={i}
                    isActive={activeSection === i}
                    sectionRef={sectionRefs.current[i]}
                  />
                ))}

                {/* Closing CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
                >
                  <div>
                    <p className="font-black text-gray-900 text-lg">Want to build something together?</p>
                    <p className="text-gray-400 text-sm mt-1">I'm available for freelance projects and collaborations.</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-bold rounded-xl text-sm hover:bg-gray-800 transition-colors shrink-0"
                  >
                    Let's Talk <HiArrowRight />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
