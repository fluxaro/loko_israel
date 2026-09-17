import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaXTwitter, FaEnvelope } from 'react-icons/fa6';

export default function Footer() {
  const [activeTab, setActiveTab] = useState('project');
  const [copied, setCopied] = useState(false);
  const [nigeriaTime, setNigeriaTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Africa/Lagos',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        }).format(new Date());
        setNigeriaTime(formatted);
      } catch {
        const now = new Date();
        setNigeriaTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('israelloko65@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabContent = {
    project: {
      text: "A bottleneck to untangle. A scalable architecture to build. A high-performance web or AI platform to ship. Let's scope it and see what a dependable system would actually save you.",
      buttonText: 'Book a call',
      actionUrl: 'mailto:israelloko65@gmail.com?subject=Project%20Scope%20Inquiry',
    },
    hire: {
      text: "Looking for a seasoned Full-Stack Engineer with React, Next.js, TypeScript, and Python/Django expertise? Let's discuss contracts, engineering roles, and team impact.",
      buttonText: 'Discuss Roles',
      actionUrl: 'mailto:israelloko65@gmail.com?subject=Role%20/%20Contract%20Opportunity',
    },
    connect: {
      text: "Always eager to talk system architecture, AI platform integration, performance tuning, or modern tech stacks. Drop by and let's exchange thoughts.",
      buttonText: 'Say Hello',
      actionUrl: 'mailto:israelloko65@gmail.com?subject=Coffee%20Chat%20/%20Connect',
    },
  };

  const socials = [
    { name: 'Email', icon: FaEnvelope, href: 'mailto:israelloko65@gmail.com' },
    { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://linkedin.com/in/loko-israel' },
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/loko-israel' },
    { name: 'X', icon: FaXTwitter, href: 'https://twitter.com/loko_israel' },
  ];

  return (
    <footer id="footer" className="relative w-full bg-[#c8a845] text-[#1a1a1a] pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Metadata Header: Last Updated & Currently in Nigeria */}
        <div className="flex items-center justify-between w-full border-b border-[#1a1a1a]/15 pb-8 mb-10 sm:mb-14">
          <div>
            <span className="font-mono text-[10px] sm:text-xs text-[#1a1a1a]/65 uppercase tracking-[0.2em] font-medium block mb-1 select-none">
              LAST UPDATED
            </span>
            <p className="text-sm sm:text-base font-sans font-semibold text-[#1a1a1a]">
              September 17, 2026
            </p>
          </div>

          <div className="text-right">
            <span className="font-mono text-[10px] sm:text-xs text-[#1a1a1a]/65 uppercase tracking-[0.2em] font-medium block mb-1 select-none">
              CURRENTLY
            </span>
            <div className="flex items-center justify-end text-sm sm:text-base font-sans font-semibold text-[#1a1a1a]">
              <span>Nigeria, {nigeriaTime || '9:17 AM'}</span>
            </div>
          </div>
        </div>

        {/* Top Interactive CTA: "I'm here to [start a project] [hire] [just connect]" */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="font-serif italic text-2xl sm:text-3xl text-[#1a1a1a] mr-2">
            I&apos;m here to
          </span>
          <button
            onClick={() => setActiveTab('project')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeTab === 'project'
                ? 'bg-[#1a1a1a] text-white shadow-md'
                : 'border border-[#1a1a1a]/30 text-[#1a1a1a] hover:border-[#1a1a1a]'
            }`}
          >
            start a project
          </button>
          <button
            onClick={() => setActiveTab('hire')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeTab === 'hire'
                ? 'bg-[#1a1a1a] text-white shadow-md'
                : 'border border-[#1a1a1a]/30 text-[#1a1a1a] hover:border-[#1a1a1a]'
            }`}
          >
            hire
          </button>
          <button
            onClick={() => setActiveTab('connect')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeTab === 'connect'
                ? 'bg-[#1a1a1a] text-white shadow-md'
                : 'border border-[#1a1a1a]/30 text-[#1a1a1a] hover:border-[#1a1a1a]'
            }`}
          >
            just connect
          </button>
        </div>

        {/* Dynamic Interactive Card */}
        <div className="rounded-3xl border border-[#1a1a1a]/20 bg-white/25 backdrop-blur-md p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 shadow-sm mb-16 sm:mb-20">
          <p className="text-sm sm:text-base md:text-lg text-[#1a1a1a] max-w-2xl font-sans font-medium leading-relaxed">
            {tabContent[activeTab].text}
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 shrink-0">
            <a
              href={tabContent[activeTab].actionUrl}
              className="inline-flex items-center gap-2.5 bg-[#1a1a1a] hover:bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium shadow-md transition-all group cursor-pointer"
            >
              <span>{tabContent[activeTab].buttonText}</span>
              <span className="w-5 h-5 rounded-full bg-[#c8a845] text-[#1a1a1a] flex items-center justify-center text-[10px] font-bold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-[#1a1a1a] border-b border-[#1a1a1a]/40 hover:border-[#1a1a1a] pb-0.5 transition-colors cursor-pointer group"
              title="Click to copy email"
            >
              <span>israelloko65@gmail.com</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-green-800" />
              ) : (
                <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              )}
            </button>
          </div>
        </div>

        {/* Scattered Note from Loko Card */}
        <div className="relative max-w-lg mx-auto mb-10 sm:mb-12">
          {/* Decorative Pushpin */}
          <div className="absolute -top-3 left-8 w-4 h-4 rounded-full bg-red-500 shadow-md border-2 border-white/80 z-20 pointer-events-none" />

          {/* Tilted Card */}
          <div className="bg-[#141414] text-white rounded-3xl p-7 sm:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border border-white/10 -rotate-2 sm:-rotate-[2.5deg] transform hover:rotate-0 transition-transform duration-300 ease-out">
            <span className="font-mono text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-[0.25em] block pb-3 border-b border-zinc-800">
              NOTE FROM LOKO
            </span>
            <p className="text-sm sm:text-base text-zinc-200 mt-4 mb-3 font-sans">
              Hi, thanks for scrolling this far.
            </p>
            <p className="text-sm sm:text-base text-zinc-300 font-serif italic leading-relaxed py-3 border-b border-zinc-800/80">
              To me, good engineering is quiet. It just works, every day, without anyone thinking about it.
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 mt-4">
              If something here stuck with you,{' '}
              <a
                href="mailto:israelloko65@gmail.com"
                className="text-[#c8a845] hover:underline underline-offset-4 decoration-[#c8a845] font-medium"
              >
                say hello
              </a>
              .
            </p>
          </div>
        </div>

        {/* Scattered Sticker Social Badges */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 mb-14 sm:mb-20">
          {[
            {
              name: 'Email',
              icon: FaEnvelope,
              href: 'mailto:israelloko65@gmail.com',
              scatter: '-rotate-[7deg] sm:-rotate-[8deg] translate-y-1.5',
            },
            {
              name: 'LinkedIn',
              icon: FaLinkedinIn,
              href: 'https://linkedin.com/in/loko-israel',
              scatter: '-rotate-[2deg] -translate-y-1',
            },
            {
              name: 'GitHub',
              icon: FaGithub,
              href: 'https://github.com/loko-israel',
              scatter: 'rotate-[2.5deg] translate-y-0.5',
            },
            {
              name: 'X',
              icon: FaXTwitter,
              href: 'https://twitter.com/loko_israel',
              scatter: 'rotate-[7deg] sm:rotate-[8deg] translate-y-2',
            },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-[22px] bg-white/20 hover:bg-white/40 border-2 border-white text-white flex items-center justify-center transition-all duration-300 hover:rotate-0 hover:-translate-y-2 hover:scale-110 shadow-lg cursor-pointer ${social.scatter}`}
              aria-label={social.name}
              title={social.name}
            >
              <social.icon className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
          ))}
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-[#1a1a1a]/20 mb-6 sm:mb-8" />

        {/* Giant Screen-Wide Name & Back to Top Button */}
        <div className="flex items-center justify-between w-full gap-4">
          <h2 className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] leading-none tracking-tight text-[#1a1a1a] uppercase select-none shrink">
            LOKO ISRAEL
          </h2>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-[#1a1a1a] hover:bg-[#1a1a1a] text-[#1a1a1a] hover:text-white flex items-center justify-center transition-all duration-300 group cursor-pointer shrink-0"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Bottom Sub-meta */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-[#1a1a1a]/15 mt-6 text-xs font-mono text-[#1a1a1a]/70">
          <p>© {new Date().getFullYear()} Loko Israel — Designed &amp; Engineered to Ship.</p>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <Link href="/projects" className="hover:text-[#1a1a1a] transition-colors">
              Projects
            </Link>
            <span>·</span>
            <Link href="/about" className="hover:text-[#1a1a1a] transition-colors">
              About
            </Link>
            <span>·</span>
            <Link href="/skills" className="hover:text-[#1a1a1a] transition-colors">
              Skills
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
