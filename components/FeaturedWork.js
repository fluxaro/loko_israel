import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: "01",
    title: "Apply Bureau",
    description: "A modern job platform connecting candidates with employers. Browse listings, track applications, and manage profiles.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    url: "https://apply-bureau.vercel.app/"
  },
  {
    id: "02",
    title: "Sieve — Resume Builder",
    description: "Build and export professional resumes with live preview. Choose templates, fill details, download polished PDFs.",
    tech: ["React", "Tailwind CSS", "PDF Generation"],
    url: "https://sieve-inky.vercel.app/"
  },
  {
    id: "03",
    title: "Spark AI Assistant",
    description: "AI-powered conversational assistant with multi-turn chat, code highlighting, and real-time streaming responses.",
    tech: ["React", "OpenAI API", "Stream Processing"],
    url: "https://spark-ai-assistant.vercel.app/"
  }
];

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isEven = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="w-full md:w-1/2 flex justify-center items-center bg-white p-12 md:p-24 border border-ink/10 relative overflow-hidden group aspect-[4/3]">
        {/* Abstract representation instead of iframe */}
        <span className="font-serif text-[12rem] leading-none text-ink/5 absolute -right-8 -bottom-16 group-hover:text-accent/10 transition-colors duration-500">
          {project.id}
        </span>
        <h3 className="font-serif text-3xl md:text-5xl text-ink z-10 text-center">
          {project.title}
        </h3>
      </div>
      
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <span className="font-serif text-accent text-6xl md:text-8xl mb-4 leading-none">
          {project.id}
        </span>
        
        <h3 className="font-serif text-3xl md:text-4xl text-ink mb-4">
          {project.title}
        </h3>
        
        <p className="font-sans text-lg text-ink/70 mb-8 max-w-md">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tech.map((techItem, i) => (
            <span 
              key={i} 
              className="font-mono text-xs uppercase tracking-wider px-3 py-1 border border-ink/20 rounded-full text-ink/80"
            >
              {techItem}
            </span>
          ))}
        </div>
        
        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-ink hover:text-accent transition-colors"
        >
          View Live Site
          <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

export default function FeaturedWork() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="projects" className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-32 text-center md:text-left"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-accent mb-4 block">
            Portfolio
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-ink">
            Selected Work
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-40 mb-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            href="/projects" 
            className="group flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-ink hover:text-accent transition-colors border-b border-ink/30 hover:border-accent pb-1"
          >
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
