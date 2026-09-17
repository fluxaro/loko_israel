import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhyTech from '../components/WhyTech';

export default function WhyTechPage() {
  return (
    <>
      <Head>
        <title>Why I Chose Technology | Loko Israel</title>
        <meta
          name="description"
          content="A reflection on craft, curiosity, and the drive to build things that matter by Full-Stack Developer Loko Israel."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="pt-28 sm:pt-32 bg-[#f5f2ec] min-h-screen text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-950 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO HOME</span>
          </Link>
        </div>

        <WhyTech />
      </main>

      <Footer />
    </>
  );
}
