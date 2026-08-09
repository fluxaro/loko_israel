import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="font-sans text-ink text-sm mb-4 sm:mb-0">
          © 2026 Loko Israel
        </p>
        <button
          onClick={scrollToTop}
          className="font-sans text-gray-400 hover:text-ink text-sm cursor-pointer bg-transparent border-none p-0 m-0"
        >
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}
