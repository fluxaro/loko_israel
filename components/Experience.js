import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { getYearsOfExperience } from '../utils/getYearsOfExperience';
import { MdWork, MdSchool } from 'react-icons/md';
import { HiOutlineCalendar } from 'react-icons/hi';
import { BsCheckCircleFill, BsRecordCircleFill } from 'react-icons/bs';

const experience = [
  {
    role: 'Frontend Developer Instructor',
    company: 'Digital Fortress',
    period: '2024 – Present',
    status: 'current',
    description: 'Teaching React, Next.js, HTML/CSS, and Tailwind. Mentoring students in real-world projects, focusing on best practices, modern frameworks, and debugging techniques.',
    tags: ['React', 'Next.js', 'Tailwind', 'Mentoring'],
  },
];

const education = [
  {
    degree: 'Full-Stack Development',
    institution: 'Udemy',
    period: 'Completed 2025 · Certificate 2026',
    status: 'done',
    description: 'Comprehensive course covering frontend, backend, database management, and deployment.',
    tags: ['Frontend', 'Backend', 'Databases', 'Deployment'],
  },
  {
    degree: 'Frontend Development',
    institution: 'Tech Crush',
    period: 'Completed',
    status: 'done',
    description: 'Modern frontend frameworks, UI/UX design, and responsive web development.',
    tags: ['React', 'UI/UX', 'Responsive'],
  },
  {
    degree: 'DevOps Engineering',
    institution: 'T Academy',
    period: 'Currently studying',
    status: 'current',
    description: 'CI/CD pipelines, containerization, cloud infrastructure, and deployment automation.',
    tags: ['CI/CD', 'Docker', 'Cloud'],
  },
  {
    degree: 'Computer Science',
    institution: 'Mivi Open University',
    period: 'Currently studying',
    status: 'current',
    description: 'Algorithms, data structures, networking, databases, and software engineering principles.',
    tags: ['Algorithms', 'Data Structures', 'Networking'],
  },
];

function TimelineItem({ item, index, isLast }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const isCurrent = item.status === 'current';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-5"
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 z-10 ${
          isCurrent
            ? 'bg-[#FFD700] shadow-md'
            : 'bg-white border-2 border-gray-200'
        }`}>
          {isCurrent
            ? <BsRecordCircleFill className="text-gray-900 text-base" />
            : <BsCheckCircleFill className="text-gray-300 text-base" />
          }
        </div>
        {!isLast && <div className="w-px flex-1 bg-gray-100 mt-2" />}
      </div>

      {/* Card */}
      <div className={`flex-1 pb-8 ${isLast ? '' : ''}`}>
        <motion.div
          whileHover={{ y: -2 }}
          className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#FFD700]/30 transition-all"
        >
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <h3 className="font-bold text-gray-900 text-sm leading-snug">
                {item.role || item.degree}
              </h3>
              <p className="text-[#8a6d00] text-sm font-semibold mt-0.5">
                {item.company || item.institution}
              </p>
            </div>
            {isCurrent && (
              <span className="shrink-0 text-[10px] font-bold text-[#8a6d00] bg-[#FFD700]/20 border border-[#FFD700]/30 px-2.5 py-1 rounded-full">
                Active
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
            <HiOutlineCalendar className="shrink-0" />
            <span>{item.period}</span>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.description}</p>

          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-gray-50 text-gray-500 border border-gray-100 font-medium">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function TimelineColumn({ title, icon: Icon, items }) {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <div ref={ref}>
      {/* Column header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="flex items-center gap-3 mb-8"
      >
        <div className="w-11 h-11 rounded-2xl bg-gray-900 flex items-center justify-center shadow-sm">
          <Icon className="text-[#FFD700] text-xl" />
        </div>
        <h3 className="text-gray-900 font-black text-xl">{title}</h3>
      </motion.div>

      {/* Timeline items */}
      <div>
        {items.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} isLast={i === items.length - 1} />
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const years = getYearsOfExperience(2024);

  return (
    <section id="experience" ref={ref} className="py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-[#FFD700]" />
            <span className="text-[#8a6d00] font-mono text-xs uppercase tracking-widest font-semibold">Journey</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900">Experience & Education</h2>
          <p className="text-gray-400 mt-3">{years}+ year{years !== 1 ? 's' : ''} of building and learning</p>
        </motion.div>

        {/* Two-column timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <TimelineColumn title="Work Experience" icon={MdWork} items={experience} />
          <TimelineColumn title="Education" icon={MdSchool} items={education} />
        </div>
      </div>
    </section>
  );
}
