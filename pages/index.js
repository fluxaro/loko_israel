import Head from 'next/head';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Highlights from '../components/Highlights';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import WhyTech from '../components/WhyTech';
import SocialLinks from '../components/SocialLinks';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Loko Israel | Full-Stack Developer</title>
        <meta name="description" content="Full-Stack Developer — React, Next.js, Three.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Highlights />
        <Skills />
        <Projects />
        <WhyTech />
        <SocialLinks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
