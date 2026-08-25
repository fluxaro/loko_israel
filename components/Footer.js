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

  return (
    <footer className="bg-white border-t border-zinc-200/80 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-100">
          <Link href="/" className="flex items-center gap-2 text-ink font-semibold text-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c8a845]" />
            <span>Loko Israel</span>
            <span className="text-zinc-400 font-mono text-xs font-normal ml-2">// DEV.2026</span>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-sans text-zinc-500 hover:text-zinc-950 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs font-mono text-zinc-400">
          <p>© {new Date().getFullYear()} Loko Israel — Designed &amp; Engineered to Ship.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-zinc-900 transition-colors cursor-pointer bg-transparent border-none p-0 flex items-center gap-1"
          >
            <span>↑ Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
