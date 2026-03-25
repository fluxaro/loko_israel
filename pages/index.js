import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import WhyTech from '../components/WhyTech';
import SocialLinks from '../components/SocialLinks';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const CursorTrail = dynamic(() => import('../components/CursorTrail'), { ssr: false });

export default function Home() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Short fixed delay — don't wait for iframes/3D, just let JS hydrate
    const t = setTimeout(() => setReady(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Head>
        <title>Loko Israel | Full-Stack Developer</title>
        <meta name="description" content="Full-Stack Developer — React, Next.js, Three.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      {/* Loader sits on top */}
      <AnimatePresence>
        {!ready && <Loader key="loader" />}
      </AnimatePresence>

      {/* All content mounts immediately so 3D, iframes, fonts all load in background */}
      <motion.div
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ visibility: ready ? 'visible' : 'hidden' }}
      >
        <CursorTrail />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <WhyTech />
          <SocialLinks />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
