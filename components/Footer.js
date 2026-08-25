import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'Work & Projects', href: '/projects' },
    { name: 'Journey & About', href: '/about' },
    { name: 'Skills & Stack', href: '/skills' },
    { name: 'Highlights', href: '/highlights' },
    { name: 'Get in Touch', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'X (Twitter)', href: 'https://twitter.com/loko_israel' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/loko-israel' },
    { name: 'GitHub', href: 'https://github.com/loko-israel' },
    { name: 'Email', href: 'mailto:israelloko65@gmail.com' },
    { name: 'WhatsApp', href: 'https://wa.me/2347074165672' },
  ];

  return (
    <footer className="bg-surface border-t border-zinc-200/80 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CTA Section */}
        <div className="flex flex-col items-center justify-center text-center pb-20 border-b border-zinc-200/80 mb-12">
          <h2 className="font-serif italic text-4xl md:text-5xl text-ink mb-4">Have a project in mind?</h2>
          <p className="font-sans text-zinc-500 mb-8 max-w-md">Let&apos;s collaborate to build something exceptional. I&apos;m currently open for new opportunities.</p>
          <Link href="/contact" className="bg-[#c8a845] hover:bg-[#b09339] text-white font-sans font-medium px-8 py-3 rounded-full transition-colors inline-block">
            Let&apos;s work together
          </Link>
        </div>

        {/* Brand & Nav */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-100">
          <Link href="/" className="flex items-center gap-2 text-ink font-semibold text-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c8a845]" />
            <span>Loko Israel</span>
            <span className="text-zinc-400 font-mono text-xs font-normal ml-2">{'//'} DEV.2026</span>
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-xs sm:text-sm font-sans text-zinc-500 hover:text-ink transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-8 pb-8">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm font-sans text-zinc-500 hover:text-[#c8a845] transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Copyright & Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-zinc-100 gap-4 text-xs font-mono text-zinc-400">
          <p>© {new Date().getFullYear()} Loko Israel — Designed & Engineered to Ship.</p>
          <button onClick={scrollToTop} className="hover:text-zinc-900 transition-colors cursor-pointer bg-transparent border-none p-0 flex items-center gap-1">
            <span>↑ Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
