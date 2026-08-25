import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: 'Work', href: '/projects' },
    { name: 'Journey', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Highlights', href: '/highlights' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Left Pill: Name / Brand */}
        <Link
          href="/"
          className="bg-white/85 backdrop-blur-md border border-zinc-200/80 px-4 py-2 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-md transition-all text-xs sm:text-sm font-medium text-zinc-900 flex items-center gap-2 group"
        >
          <span className="w-2 h-2 rounded-full bg-[#c8a845]" />
          <span>Loko Israel</span>
        </Link>

        {/* Center Pill: Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 sm:space-x-2 bg-white/85 backdrop-blur-md border border-zinc-200/80 p-1.5 px-3 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
          {navLinks.map((link) => {
            const isActive = router.pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1 rounded-full text-xs sm:text-sm font-sans transition-all ${
                  isActive
                    ? 'bg-[#1a1a1a] text-white font-medium shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/70'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Pill: Contact & CTA */}
        <div className="flex items-center gap-2 bg-white/85 backdrop-blur-md border border-zinc-200/80 p-1 sm:pl-3.5 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
          <span className="hidden lg:inline text-[11px] font-mono text-zinc-400 pr-1">
            AVAILABLE // NOW
          </span>
          <Link
            href="/contact"
            className="bg-[#c8a845] hover:bg-[#b89738] text-[#1a1a1a] px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm"
          >
            Let&apos;s talk
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-1.5 text-zinc-700 hover:text-black rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="md:hidden mt-3 max-w-sm mx-auto bg-white/95 backdrop-blur-xl border border-zinc-200/90 rounded-2xl shadow-xl p-5 pointer-events-auto"
          >
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                  router.pathname === '/' ? 'bg-zinc-100 text-[#1a1a1a] font-semibold' : 'text-zinc-700 hover:text-[#c8a845]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              {navLinks.map((link) => {
                const isActive = router.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                      isActive ? 'bg-zinc-100 text-[#1a1a1a] font-semibold' : 'text-zinc-700 hover:text-[#c8a845]'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-3 mt-1 border-t border-zinc-100">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-[#c8a845] text-[#1a1a1a] text-center py-2.5 rounded-full text-sm font-semibold block w-full shadow-sm"
                >
                  Let&apos;s talk
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
